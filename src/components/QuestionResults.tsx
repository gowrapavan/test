import React from 'react';
import { Question as QuestionType } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionResultsProps {
  questions: QuestionType[];
  selectedAnswers: Record<string, string>;
}

export const QuestionResults: React.FC<QuestionResultsProps> = ({
  questions,
  selectedAnswers,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Detailed Results</h3>
      {questions.map((question, index) => {
        const selectedAnswer = selectedAnswers[question.id];
        const isCorrect = selectedAnswer === question.correctAnswer;
        const notAttempted = !selectedAnswer || selectedAnswer === '?';

        return (
          <div
            key={question.id}
            className="bg-white p-6 rounded-lg border border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg font-medium text-gray-800">
                Question {index + 1}
              </h4>
              {notAttempted ? (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  Not Attempted
                </span>
              ) : isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </div>
            
            <p className="text-gray-700 mb-4">{question.text}</p>
            
            <div className="space-y-2">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === question.correctAnswer;
                
                let optionClassName = "p-3 rounded-lg border ";
                
                if (isSelected && isCorrectAnswer) {
                  optionClassName += "bg-green-50 border-green-500 text-green-700";
                } else if (isSelected && !isCorrectAnswer) {
                  optionClassName += "bg-red-50 border-red-500 text-red-700";
                } else if (isCorrectAnswer) {
                  optionClassName += "bg-green-50 border-green-500 text-green-700";
                } else {
                  optionClassName += "border-gray-200 text-gray-500";
                }

                return (
                  <div key={option} className={optionClassName}>
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isSelected && !isCorrectAnswer && (
                        <span className="text-sm text-red-600">Your answer</span>
                      )}
                      {isCorrectAnswer && (
                        <span className="text-sm text-green-600">
                          Correct answer
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};