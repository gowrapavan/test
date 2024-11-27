import React, { useEffect, useRef } from 'react';
import { Question } from './Question';
import { Timer } from './Timer';
import { RoundResult } from './RoundResult';
import { RoundNavigation } from './RoundNavigation';
import { QuestionResults } from './QuestionResults';
import { roundConfigs } from '../config/rounds';
import { RoundResult as RoundResultType } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ProgressBar } from './ui/ProgressBar';

interface RoundContentProps {
  currentRound: number;
  timeRemaining: number;
  questions: any[];
  selectedAnswers: Record<string, string>;
  showCurrentRoundResult: boolean;
  onSelectAnswer: (questionId: string, answer: string) => void;
  onTimeUp: () => void;
  onSubmit: () => void;
  onNextRound: () => void;
  roundResult: RoundResultType;
}

export const RoundContent: React.FC<RoundContentProps> = ({
  currentRound,
  timeRemaining,
  questions,
  selectedAnswers,
  showCurrentRoundResult,
  onSelectAnswer,
  onTimeUp,
  onSubmit,
  onNextRound,
  roundResult,
}) => {
  const resultRef = useRef<HTMLDivElement>(null);
  const answeredCount = Object.keys(selectedAnswers).length;

  useEffect(() => {
    if (showCurrentRoundResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCurrentRoundResult]);

  if (showCurrentRoundResult) {
    return (
      <div className="space-y-6" ref={resultRef}>
        <Card className="p-6">
          <RoundResult roundNumber={currentRound} result={roundResult} />
          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onNextRound}
            >
              {currentRound === 3 ? 'View Final Results' : 'Next Round'}
            </Button>
          </div>
        </Card>
        <Card className="p-6">
          <QuestionResults questions={questions} selectedAnswers={selectedAnswers} />
        </Card>
      </div>
    );
  }

  return (
    <>
      <Card className="p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Round {currentRound}/3: {roundConfigs[currentRound - 1].name}
            </h2>
            <p className="text-gray-500 mt-1">
              {roundConfigs[currentRound - 1].description}
            </p>
          </div>
          <Timer timeRemaining={timeRemaining} onTimeUp={onTimeUp} />
        </div>
        <ProgressBar current={answeredCount} total={10} />
      </Card>

      <div className="space-y-4 mb-6">
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            selectedAnswers={selectedAnswers}
            onSelectAnswer={onSelectAnswer}
            questionNumber={index + 1}
            showResults={showCurrentRoundResult}
          />
        ))}
      </div>

      <Card className="p-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onSubmit}
        >
          Submit Round
        </Button>
      </Card>
    </>
  );
};