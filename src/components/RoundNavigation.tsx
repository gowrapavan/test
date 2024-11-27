import React from 'react';

interface RoundNavigationProps {
  currentRound: number;
  onNextRound: () => void;
}

export const RoundNavigation: React.FC<RoundNavigationProps> = ({
  currentRound,
  onNextRound,
}) => {
  return (
    <button
      onClick={onNextRound}
      className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      {currentRound === 3 ? 'Finish Assessment' : 'Next Round'}
    </button>
  );
};