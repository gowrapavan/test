import React, { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { Header } from './components/Header';
import { DisclaimerPage } from './components/DisclaimerPage';
import { SubmitConfirmation } from './components/SubmitConfirmation';
import { RoundContent } from './components/RoundContent';
import { FinalResults } from './components/FinalResults';
import { Container } from './components/layout/Container';
import { roundConfigs } from './config/rounds';
import {
  fluencyQuestions,
  vocabularyQuestions,
  spellingQuestions,
} from './data/questions';
import { RoundResult as RoundResultType } from './types';

function App() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(roundConfigs[0].duration);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [allAnswers, setAllAnswers] = useState<Record<number, Record<string, string>>>({});
  const [roundResults, setRoundResults] = useState<RoundResultType[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [showCurrentRoundResult, setShowCurrentRoundResult] = useState(false);
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);

  // Function to get random questions from the pool
  const getRandomQuestions = (questions: any[]) => {
    return questions.sort(() => Math.random() - 0.5).slice(0, 10);
  };

  // Get current questions based on the round
  const getCurrentQuestions = () => {
    const questions = (() => {
      switch (currentRound) {
        case 1:
          return fluencyQuestions;
        case 2:
          return vocabularyQuestions;
        case 3:
          return spellingQuestions;
        default:
          return [];
      }
    })();
    return getRandomQuestions(questions);
  };

  // Initialize questions when round changes
  useEffect(() => {
    if (!hasAcceptedDisclaimer || showCurrentRoundResult) return;

    setCurrentQuestions(getCurrentQuestions());
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleTimeUp();
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentRound, hasAcceptedDisclaimer, showCurrentRoundResult]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const calculateRoundResult = (): RoundResultType => {
    let correct = 0;
    let incorrect = 0;
    let notAttempted = 0;
    let score = 0;

    currentQuestions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];
      if (!selectedAnswer || selectedAnswer === '?') {
        notAttempted++;
      } else if (selectedAnswer === question.correctAnswer) {
        correct++;
        score += 1;
      } else {
        incorrect++;
        score -= 0.25;
      }
    });

    return {
      attempted: correct + incorrect,
      correct,
      incorrect,
      notAttempted,
      score: Math.max(0, score),
    };
  };

  const handleTimeUp = () => {
    setShowCurrentRoundResult(true);
  };

  const handleSubmit = () => {
    if (timeRemaining > 0) {
      setShowSubmitConfirmation(true);
    } else {
      handleTimeUp();
    }
  };

  const handleConfirmSubmit = () => {
    setShowSubmitConfirmation(false);
    handleTimeUp();
  };

  const handleNextRound = () => {
    const result = calculateRoundResult();
    setRoundResults((prev) => [...prev, result]);
    setAllAnswers((prev) => ({
      ...prev,
      [currentRound]: selectedAnswers,
    }));

    if (currentRound < 3) {
      setCurrentRound((prev) => prev + 1);
      setSelectedAnswers({});
      setTimeRemaining(roundConfigs[currentRound].duration);
      setShowCurrentRoundResult(false);
    } else {
      setIsTestComplete(true);
    }
  };

  if (!hasAcceptedDisclaimer) {
    return <DisclaimerPage onAccept={() => setHasAcceptedDisclaimer(true)} />;
  }

  if (isTestComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Container>
          <FinalResults
            roundResults={roundResults}
            allAnswers={allAnswers}
            onRestart={() => window.location.reload()}
          />
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Container>
        <RoundContent
          currentRound={currentRound}
          timeRemaining={timeRemaining}
          questions={currentQuestions}
          selectedAnswers={selectedAnswers}
          showCurrentRoundResult={showCurrentRoundResult}
          onSelectAnswer={handleAnswerSelect}
          onTimeUp={handleTimeUp}
          onSubmit={handleSubmit}
          onNextRound={handleNextRound}
          roundResult={calculateRoundResult()}
        />
      </Container>

      <SubmitConfirmation
        isOpen={showSubmitConfirmation}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowSubmitConfirmation(false)}
        timeRemaining={timeRemaining}
      />
    </div>
  );
}

export default App;
