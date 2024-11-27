import { RoundConfig } from '../types';

export const roundConfigs: RoundConfig[] = [
  {
    id: 1,
    name: 'Fluency',
    duration: 60, // 1 minute in seconds
    description: 'Complete the sentences by choosing the correct option'
  },
  {
    id: 2,
    name: 'Vocabulary',
    duration: 60,
    description: 'Match the word with its correct definition'
  },
  {
    id: 3,
    name: 'Spelling',
    duration: 60,
    description: 'Select the correct spelling of the word'
  }
];