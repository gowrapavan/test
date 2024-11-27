import React from 'react';
import { Brain } from 'lucide-react';

interface DisclaimerPageProps {
  onAccept: () => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onAccept }) => {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Brain className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Gowra Genpact Assessments</h1>
            <p className="text-blue-100">Professional Skills Evaluation</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Assessment Guidelines</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Test Duration</h3>
            <p>Total duration: 3 minutes</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Round 1 (Fluency): 1 minute</li>
              <li>Round 2 (Vocabulary): 1 minute</li>
              <li>Round 3 (Spelling): 1 minute</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Scoring System</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Correct answer: +1 point</li>
              <li>Incorrect answer: -0.25 points</li>
              <li>Skipped question ("?"): 0 points</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Important Notes</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Each round contains 10 randomized questions</li>
              <li>You can submit your answers at any time during the round</li>
              <li>Browser back/refresh is not allowed during the test</li>
              <li>Virtual proctoring will be enabled during the assessment</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6">
          <label className="flex items-center gap-2 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-4 h-4 text-blue-600"
            />
            <span>
              I accept virtual proctoring and understand the assessment guidelines
            </span>
          </label>

          <button
            onClick={onAccept}
            disabled={!accepted}
            className={`w-full py-3 rounded-lg text-white transition-colors ${
              accepted
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};