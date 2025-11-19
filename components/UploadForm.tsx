'use client';

import { useState } from 'react';

interface UploadFormProps {
  onAnalysisComplete: (result: any) => void;
}

export default function UploadForm({ onAnalysisComplete }: UploadFormProps) {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [jdText, setJdText] = useState('');
  const [useTextInput, setUseTextInput] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!cvFile) {
      setError('Proszę załączyć plik CV');
      setLoading(false);
      return;
    }

    if (!useTextInput && !jdFile) {
      setError('Proszę załączyć plik JD lub wkleić tekst opisu stanowiska');
      setLoading(false);
      return;
    }

    if (useTextInput && !jdText.trim()) {
      setError('Proszę wkleić tekst opisu stanowiska');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('cv', cvFile);
    
    if (useTextInput) {
      formData.append('jdText', jdText);
    } else if (jdFile) {
      formData.append('jd', jdFile);
    }

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Błąd podczas analizy');
      }

      onAnalysisComplete(data.analysis);
    } catch (err: any) {
      setError(err.message || 'Wystąpił błąd podczas analizy');
      console.error('Błąd:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleJdFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setJdFile(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* CV Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            1. Załącz CV kandydata (PDF lub DOCX)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept=".pdf,.docx,.doc"
              onChange={handleCvFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-b2b-blue file:text-white
                hover:file:bg-blue-700
                cursor-pointer"
            />
            {cvFile && (
              <span className="text-sm text-green-600">✓ {cvFile.name}</span>
            )}
          </div>
        </div>

        {/* JD Input Method Toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            2. Opis stanowiska (Job Description)
          </label>
          <div className="flex gap-4 mb-4">
            <button
              type="button"
              onClick={() => setUseTextInput(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                useTextInput
                  ? 'bg-b2b-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Wklej tekst
            </button>
            <button
              type="button"
              onClick={() => setUseTextInput(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                !useTextInput
                  ? 'bg-b2b-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Załącz plik
            </button>
          </div>

          {useTextInput ? (
            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              placeholder="Wklej tutaj opis stanowiska, wymagania, zakres obowiązków..."
              className="w-full h-48 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-b2b-blue focus:border-transparent resize-none"
            />
          ) : (
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                onChange={handleJdFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-b2b-blue file:text-white
                  hover:file:bg-blue-700
                  cursor-pointer"
              />
              {jdFile && (
                <span className="text-sm text-green-600">✓ {jdFile.name}</span>
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-6 rounded-md text-white font-semibold transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-b2b-blue hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Analizuję...
            </span>
          ) : (
            'Analizuj CV'
          )}
        </button>
      </form>
    </div>
  );
}
