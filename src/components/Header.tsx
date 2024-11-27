import React from 'react';
import { Brain } from 'lucide-react';
import { Container } from './layout/Container';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <Container>
        <div className="py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Gowra Genpact Assessments</h1>
              <p className="text-blue-100 mt-1">Professional Skills Evaluation</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};