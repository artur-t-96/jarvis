'use client';

import { AnalysisResult } from '@/lib/claudeAnalyzer';

interface AnalysisResultProps {
  result: AnalysisResult;
  onNewAnalysis: () => void;
}

const matchLevelConfig = {
  excellent: {
    label: 'Doskonale pasuje',
    color: 'bg-green-100 text-green-800 border-green-300',
    icon: '🎯',
  },
  good: {
    label: 'Dobrze pasuje',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: '👍',
  },
  partial: {
    label: 'Częściowo pasuje',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    icon: '⚠️',
  },
  poor: {
    label: 'Nie pasuje',
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: '❌',
  },
};

export default function AnalysisResultComponent({ result, onNewAnalysis }: AnalysisResultProps) {
  const matchConfig = matchLevelConfig[result.matchLevel];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header z poziomem dopasowania */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Wyniki analizy</h2>
          <button
            onClick={onNewAnalysis}
            className="px-4 py-2 bg-b2b-blue text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
          >
            Nowa analiza
          </button>
        </div>

        <div className={`flex items-center gap-3 p-4 rounded-lg border-2 ${matchConfig.color}`}>
          <span className="text-3xl">{matchConfig.icon}</span>
          <div>
            <h3 className="font-bold text-lg">{matchConfig.label}</h3>
            <p className="text-sm mt-1">{result.summary}</p>
          </div>
        </div>
      </div>

      {/* Mocne strony */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <span>✅</span> Mocne strony
        </h3>
        {result.strengths.length > 0 ? (
          <ul className="space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Brak zidentyfikowanych mocnych stron</p>
        )}
      </div>

      {/* Luki kompetencyjne */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <span>⚠️</span> Luki kompetencyjne
        </h3>
        {result.gaps.length > 0 ? (
          <ul className="space-y-2">
            {result.gaps.map((gap, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">{gap}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Brak istotnych luk kompetencyjnych</p>
        )}
      </div>

      {/* Pytania do zadania */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span>❓</span> Pytania weryfikacyjne do zadania podczas rozmowy
        </h3>
        {result.questionsToAsk.length > 0 ? (
          <ol className="space-y-3">
            {result.questionsToAsk.map((question, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-b2b-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{question}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-500 italic">Brak dodatkowych pytań do zadania</p>
        )}
      </div>

      {/* Ukryte umiejętności */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>💡</span> Ukryte umiejętności (do zweryfikowania)
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Na podstawie doświadczenia kandydata, prawdopodobnie posiada on również poniższe umiejętności (choć nie wymienił ich wprost w CV):
        </p>
        {result.hiddenSkills.length > 0 ? (
          <ul className="space-y-2">
            {result.hiddenSkills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Brak zidentyfikowanych ukrytych umiejętności</p>
        )}
      </div>
    </div>
  );
}
