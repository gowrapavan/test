import React from 'react';
import { RoundResult as RoundResultType } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface RoundResultProps {
  roundNumber: number;
  result: RoundResultType;
}

export const RoundResult: React.FC<RoundResultProps> = ({ roundNumber, result }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Round {roundNumber} Results</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>Correct: {result.correct}</span>
        </div>
        <div className="flex items-center gap-2">
          <XCircle className="w-5 h-5 text-red-500" />
          <span>Incorrect: {result.incorrect}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p className="text-lg">
          Score: <span className="font-bold">{result.score}</span> / 20
        </p>
      </div>
    </div>
  );
};