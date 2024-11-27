import React from 'react';
import { Trophy, Brain } from 'lucide-react';
import { RoundResult } from './RoundResult';
import { QuestionResults } from './QuestionResults';
import { RoundResult as RoundResultType } from '../types';
import {
  fluencyQuestions,
  vocabularyQuestions,
  spellingQuestions,
} from '../data/questions';

interface FinalResultsProps {
  roundResults: RoundResultType[];
  allAnswers: Record<string, Record<string, string>>;
  onRestart: () => void;
}

export const FinalResults: React.FC<FinalResultsProps> = ({
  roundResults,
  allAnswers,
  onRestart,
}) => {
  const totalScore = roundResults.reduce((sum, result) => sum + result.score, 0);
  const totalCorrect = roundResults.reduce((sum, result) => sum + result.correct, 0);
  const totalIncorrect = roundResults.reduce(
    (sum, result) => sum + result.incorrect,
    0
  );
  const totalNotAttempted = roundResults.reduce(
    (sum, result) => sum + result.notAttempted,
    0
  );

  const roundQuestions = [
    fluencyQuestions.slice(0, 10),
    vocabularyQuestions.slice(0, 10),
    spellingQuestions.slice(0, 10),
  ];

  const roundNames = ['Fluency', 'Vocabulary', 'Spelling'];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Assessment Complete!
        </h1>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Final Results</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>Total Correct: {totalCorrect}</div>
            <div>Total Incorrect: {totalIncorrect}</div>
            <div>Not Attempted: {totalNotAttempted}</div>
            <div className="text-xl font-bold">
              Final Score: {totalScore.toFixed(2)} / 30
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </button>
      </div>

      {roundResults.map((result, index) => (
        <div key={index} className="space-y-6">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Round {index + 1}: {roundNames[index]}
            </h2>
            <RoundResult roundNumber={index + 1} result={result} />
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <QuestionResults
              questions={roundQuestions[index]}
              selectedAnswers={allAnswers[index + 1] || {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};