import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SubmitConfirmationProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  timeRemaining: number;
}

export const SubmitConfirmation: React.FC<SubmitConfirmationProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  timeRemaining,
}) => {
  if (!isOpen) return null;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-yellow-500" />
          <h3 className="text-xl font-semibold">Confirm Submission</h3>
        </div>
        
        <p className="mb-4">
          You still have {minutes}:{String(seconds).padStart(2, '0')} remaining. 
          Are you sure you want to submit this round?
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Yes, Submit
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Continue Test
          </button>
        </div>
      </div>
    </div>
  );
};