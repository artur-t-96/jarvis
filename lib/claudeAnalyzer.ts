import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface AnalysisResult {
  summary: string;
  matchLevel: 'excellent' | 'good' | 'partial' | 'poor';
  strengths: string[];
  gaps: string[];
  questionsToAsk: string[];
  hiddenSkills: string[];
}

export async function analyzeCV(cvText: string, jdText: string): Promise<AnalysisResult> {
  const prompt = `Jesteś ekspertem HR i rekruterem. Twoim zadaniem jest przeanalizowanie CV kandydata względem wymagań zawartych w opisie stanowiska (Job Description) i dostarczenie szczegółowej oceny dopasowania.

# CV KANDYDATA:
${cvText}

# OPIS STANOWISKA (JD):
${jdText}

# ZADANIE:
Przeanalizuj CV względem wymagań z JD i dostarcz ocenę w następującym formacie JSON:

{
  "summary": "Krótkie podsumowanie dopasowania kandydata (2-3 zdania)",
  "matchLevel": "excellent/good/partial/poor",
  "strengths": ["Lista mocnych stron - konkretne umiejętności/doświadczenia które kandydat MA i są WYMAGANE"],
  "gaps": ["Lista luk kompetencyjnych - czego BRAKUJE z wymagań JD"],
  "questionsToAsk": ["Konkretne pytania weryfikacyjne do zadania podczas rozmowy - skupione na lukach i wątpliwościach"],
  "hiddenSkills": ["Umiejętności które kandydat prawdopodobnie posiada (logiczne wnioski z doświadczenia) ale nie wymienił ich wprost w CV - do zweryfikowania"]
}

# WYTYCZNE:
- matchLevel: "excellent" = spełnia >90% wymagań, "good" = 70-90%, "partial" = 40-70%, "poor" = <40%
- Strengths: konkretne, wymieralne dopasowania (np. "3 lata doświadczenia w React", nie ogólniki)
- Gaps: tylko istotne braki względem wymagań must-have z JD
- QuestionsToAsk: pytania otwarte, weryfikujące kompetencje (nie pytania tak/nie)
- HiddenSkills: logiczne wnioski z doświadczenia (np. jeśli robił DevOps, prawdopodobnie zna Docker)

Odpowiedz TYLKO czystym JSONem, bez markdown, bez dodatkowych komentarzy.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude API');
    }

    // Wyciągamy JSON z odpowiedzi (na wypadek gdyby Claude dodał markdown)
    let jsonText = content.text.trim();
    
    // Usuwamy potencjalne markdown code blocks
    jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const result: AnalysisResult = JSON.parse(jsonText);
    
    return result;
  } catch (error) {
    console.error('Błąd podczas analizy CV:', error);
    throw new Error('Nie udało się przeanalizować CV. Spróbuj ponownie.');
  }
}
