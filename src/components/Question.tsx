import React from 'react';
import { Question as QuestionType } from '../types';
import { Card } from './ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionProps {
  question: QuestionType;
  selectedAnswers: Record<string, string>;
  onSelectAnswer: (questionId: string, answer: string) => void;
  questionNumber: number;
  showResults?: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswers,
  onSelectAnswer,
  questionNumber,
  showResults = false,
}) => {
  const selectedAnswer = selectedAnswers[question.id];
  const isAnswered = !!selectedAnswer;
  const isCorrect = selectedAnswer === question.correctAnswer;

  const getOptionClassName = (option: string) => {
    const baseStyles = 'w-full p-4 text-left rounded-lg border transition-all duration-200 flex items-center justify-between group';
    
    if (!showResults) {
      return `${baseStyles} ${
        selectedAnswer === option
          ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
          : 'hover:bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
      }`;
    }

    if (option === question.correctAnswer) {
      return `${baseStyles} bg-green-50 border-green-500 text-green-700`;
    }

    if (selectedAnswer === option && option !== question.correctAnswer) {
      return `${baseStyles} bg-red-50 border-red-500 text-red-700`;
    }

    return `${baseStyles} border-gray-200 text-gray-400`;
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Question {questionNumber}
          </h3>
          <p className="mt-1 text-gray-600">{question.text}</p>
        </div>
        {showResults && isAnswered && (
          <div className="ml-4">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500" />
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !showResults && onSelectAnswer(question.id, option)}
            disabled={showResults}
            className={getOptionClassName(option)}
          >
            <span>{option}</span>
            {showResults && (
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {option === question.correctAnswer && 'Correct answer'}
                {selectedAnswer === option && option !== question.correctAnswer && 'Your answer'}
              </span>
            )}
          </button>
        ))}
      </div>
    </Card>
  );
};