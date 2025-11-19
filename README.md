# CV Matcher - B2B Network

Inteligentne narzędzie do analizy dopasowania CV kandydatów do opisów stanowisk, wykorzystujące AI (Claude API).

## Funkcjonalności

- ✅ Upload CV w formatach PDF lub DOCX
- ✅ Opis stanowiska (JD) - plik lub wklejony tekst
- ✅ Analiza dopasowania z oceną (doskonale/dobrze/częściowo/słabo)
- ✅ Identyfikacja mocnych stron i luk kompetencyjnych
- ✅ Automatyczne generowanie pytań weryfikacyjnych
- ✅ Sugerowanie ukrytych umiejętności do sprawdzenia

## Wymagania

- Node.js 20+
- Klucz API do Anthropic Claude
- Docker (opcjonalnie, do deploymentu)

## Instalacja lokalna

### 1. Sklonuj repozytorium
\`\`\`bash
git clone <repository-url>
cd cv-matcher
\`\`\`

### 2. Zainstaluj zależności
\`\`\`bash
npm install
\`\`\`

### 3. Konfiguracja
Skopiuj plik \`.env.example\` do \`.env\` i uzupełnij klucz API:

\`\`\`bash
cp .env.example .env
\`\`\`

Edytuj \`.env\`:
\`\`\`
ANTHROPIC_API_KEY=your_actual_api_key_here
\`\`\`

### 4. Uruchom aplikację w trybie developerskim
\`\`\`bash
npm run dev
\`\`\`

Aplikacja będzie dostępna pod: http://localhost:3000

## Deployment na Render.com z Dockerem

### 1. Przygotowanie repozytorium
Wrzuć kod na GitHub:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
\`\`\`

### 2. Konfiguracja na Render.com

1. Zaloguj się na https://render.com
2. Kliknij **"New +"** → **"Web Service"**
3. Połącz swoje repozytorium GitHub
4. Wybierz repozytorium \`cv-matcher\`

### 3. Ustawienia Web Service

- **Name**: \`cv-matcher\` (lub dowolna nazwa)
- **Environment**: \`Docker\`
- **Region**: \`Frankfurt\` (EU)
- **Instance Type**: \`Free\` (dla testów) lub \`Starter\` ($7/miesiąc)

### 4. Zmienne środowiskowe

W sekcji **Environment Variables** dodaj:

\`\`\`
ANTHROPIC_API_KEY = sk-ant-api03-xxxxx
\`\`\`

### 5. Deploy

Kliknij **"Create Web Service"** - Render automatycznie:
- Zbuduje obraz Docker
- Wdroży aplikację
- Przyzna publiczny URL (np. \`https://cv-matcher.onrender.com\`)

### 6. Weryfikacja

Po zakończeniu deploymentu (5-10 minut), otwórz URL i przetestuj aplikację.

## Użycie

1. **Upload CV**: Załącz plik PDF lub DOCX z CV kandydata
2. **Opis stanowiska**: Wklej tekst lub załącz plik z opisem stanowiska (JD)
3. **Analizuj**: Kliknij przycisk "Analizuj CV"
4. **Wyniki**: System pokaże:
   - Poziom dopasowania (doskonale/dobrze/częściowo/słabo)
   - Mocne strony kandydata
   - Luki kompetencyjne
   - Pytania weryfikacyjne do rozmowy
   - Ukryte umiejętności do sprawdzenia

## Struktura projektu

\`\`\`
cv-matcher/
├── app/
│   ├── api/analyze/route.ts    # Endpoint API do analizy
│   ├── layout.tsx              # Layout aplikacji
│   ├── page.tsx                # Strona główna
│   └── globals.css             # Style globalne
├── components/
│   ├── UploadForm.tsx          # Formularz upload
│   └── AnalysisResult.tsx      # Wyświetlanie wyników
├── lib/
│   ├── fileExtractor.ts        # Ekstrakcja tekstu z PDF/DOCX
│   └── claudeAnalyzer.ts       # Integracja z Claude API
├── Dockerfile                   # Konfiguracja Docker
├── docker-compose.yml          # Docker Compose (lokalne testy)
└── package.json                # Zależności Node.js
\`\`\`

## Koszty API

Aplikacja używa modelu **Claude Sonnet 4** (\`claude-sonnet-4-20250514\`):

- ~$3 per 1M input tokens
- ~$15 per 1M output tokens
- Średnie CV + JD: ~2000 input tokens + ~1000 output tokens
- **Koszt na analizę**: ~$0.02 (2 grosze)
- **1500 CV/miesiąc**: ~$30/miesiąc

## Troubleshooting

### Problem z ekstrakcją tekstu z PDF
Jeśli pojawią się błędy z \`pdf-parse\`, upewnij się że:
- Plik nie jest zaszyfrowany
- PDF zawiera tekst (nie tylko obrazy)

### Błąd API Claude
Sprawdź:
- Czy klucz API jest prawidłowy
- Czy masz wystarczające kredyty w Anthropic
- Logi w konsoli developera

### Docker build fails
Jeśli build Dockera się nie udaje:
\`\`\`bash
# Usuń cache i zbuduj od nowa
docker-compose down
docker system prune -a
docker-compose build --no-cache
\`\`\`

## Licencja

Własnościowe - B2B Network (B2B.net S.A.)

## Kontakt

Dla wsparcia technicznego, skontaktuj się z zespołem IT B2B Network.
