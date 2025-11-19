import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromFile, validateFileSize, validateFileType } from '@/lib/fileExtractor';
import { analyzeCV } from '@/lib/claudeAnalyzer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const cvFile = formData.get('cv') as File;
    const jdFile = formData.get('jd') as File | null;
    const jdText = formData.get('jdText') as string | null;

    // Walidacja CV
    if (!cvFile) {
      return NextResponse.json(
        { error: 'Brak pliku CV' },
        { status: 400 }
      );
    }

    if (!validateFileType(cvFile)) {
      return NextResponse.json(
        { error: 'Nieobsługiwany format pliku CV. Użyj PDF lub DOCX.' },
        { status: 400 }
      );
    }

    if (!validateFileSize(cvFile, 10)) {
      return NextResponse.json(
        { error: 'Plik CV jest za duży. Maksymalny rozmiar to 10MB.' },
        { status: 400 }
      );
    }

    // Walidacja JD
    let jobDescription = '';
    
    if (jdFile) {
      if (!validateFileType(jdFile)) {
        return NextResponse.json(
          { error: 'Nieobsługiwany format pliku JD. Użyj PDF lub DOCX.' },
          { status: 400 }
        );
      }

      if (!validateFileSize(jdFile, 10)) {
        return NextResponse.json(
          { error: 'Plik JD jest za duży. Maksymalny rozmiar to 10MB.' },
          { status: 400 }
        );
      }

      jobDescription = await extractTextFromFile(jdFile);
    } else if (jdText) {
      jobDescription = jdText;
    } else {
      return NextResponse.json(
        { error: 'Brak opisu stanowiska (JD). Wklej tekst lub załącz plik.' },
        { status: 400 }
      );
    }

    // Ekstrakcja tekstu z CV
    const cvTextContent = await extractTextFromFile(cvFile);

    // Sprawdzenie czy teksty nie są puste
    if (!cvTextContent || cvTextContent.trim().length < 50) {
      return NextResponse.json(
        { error: 'Nie udało się wyodrębnić tekstu z CV lub plik jest zbyt krótki.' },
        { status: 400 }
      );
    }

    if (!jobDescription || jobDescription.trim().length < 20) {
      return NextResponse.json(
        { error: 'Opis stanowiska jest zbyt krótki.' },
        { status: 400 }
      );
    }

    // Analiza przez Claude
    const analysis = await analyzeCV(cvTextContent, jobDescription);

    return NextResponse.json({
      success: true,
      analysis,
    });

  } catch (error: any) {
    console.error('Błąd w API analyze:', error);
    
    return NextResponse.json(
      { 
        error: error.message || 'Wystąpił nieoczekiwany błąd podczas analizy.',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}
