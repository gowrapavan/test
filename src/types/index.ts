export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface RoundConfig {
  id: number;
  name: string;
  duration: number;
  description: string;
}

export interface TestState {
  currentRound: number;
  score: number;
  answers: Record<string, string>;
  timeRemaining: number;
  isComplete: boolean;
}

export interface RoundResult {
  attempted: number;
  correct: number;
  incorrect: number;
  notAttempted: number;
  score: number;
}