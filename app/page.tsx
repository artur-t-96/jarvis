'use client';

import { useState } from 'react';
import UploadForm from '@/components/UploadForm';
import AnalysisResultComponent from '@/components/AnalysisResult';
import { AnalysisResult } from '@/lib/claudeAnalyzer';

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            CV Matcher
          </h1>
          <p className="text-gray-600">
            Inteligentna analiza dopasowania kandydata do stanowiska
          </p>
          <div className="mt-4 inline-block bg-white px-6 py-2 rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Powered by</span>{' '}
            <span className="font-semibold text-b2b-blue">B2B Network</span>
          </div>
        </div>

        {/* Content */}
        {!analysisResult ? (
          <UploadForm onAnalysisComplete={handleAnalysisComplete} />
        ) : (
          <AnalysisResultComponent 
            result={analysisResult} 
            onNewAnalysis={handleNewAnalysis}
          />
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>© 2024 B2B Network - Narzędzie dla rekruterów</p>
        </div>
      </div>
    </main>
  );
}
