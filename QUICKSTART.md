# 🚀 Szybki Start - CV Matcher

## Krok 1: Pobierz kod
Wypakuj folder \`cv-matcher\` na swoim Macu.

## Krok 2: Zainstaluj Node.js
Jeśli nie masz Node.js, pobierz z: https://nodejs.org/ (wersja 20 LTS)

## Krok 3: Otwórz Terminal
\`\`\`bash
cd ~/Downloads/cv-matcher
\`\`\`

## Krok 4: Zainstaluj zależności
\`\`\`bash
npm install
\`\`\`

## Krok 5: Konfiguracja API
1. Skopiuj plik:
\`\`\`bash
cp .env.example .env
\`\`\`

2. Otwórz plik \`.env\` w TextEdit
3. Wklej swój klucz API Claude:
\`\`\`
ANTHROPIC_API_KEY=sk-ant-api03-twój-klucz-tutaj
\`\`\`

## Krok 6: Uruchom aplikację
\`\`\`bash
npm run dev
\`\`\`

## Krok 7: Otwórz w przeglądarce
Otwórz: http://localhost:3000

---

## 📤 Deployment na Render.com

### A. Przygotuj GitHub
1. Stwórz nowe repozytorium na GitHub
2. W Terminalu:
\`\`\`bash
cd ~/Downloads/cv-matcher
git init
git add .
git commit -m "CV Matcher - initial"
git remote add origin https://github.com/twoj-user/cv-matcher.git
git push -u origin main
\`\`\`

### B. Deploy na Render
1. Wejdź na https://render.com (zaloguj się przez GitHub)
2. Kliknij **"New +"** → **"Web Service"**
3. Wybierz repozytorium \`cv-matcher\`
4. Ustawienia:
   - **Environment**: Docker
   - **Region**: Frankfurt (EU)
   - **Instance**: Starter ($7/mies) lub Free (z limitami)
5. Dodaj zmienną środowiskową:
   - Key: \`ANTHROPIC_API_KEY\`
   - Value: \`sk-ant-api03-twój-klucz\`
6. Kliknij **"Create Web Service"**

### C. Gotowe!
Po 5-10 minutach dostaniesz URL, np:
\`\`\`
https://cv-matcher-xxxxx.onrender.com
\`\`\`

---

## ⚙️ Jak działa aplikacja?

1. **Upload CV** (PDF/DOCX)
2. **Upload/Wklej JD** (Job Description)
3. **System analizuje** przez Claude AI:
   - Wyciąga tekst z plików
   - Porównuje CV z wymaganiami
   - Generuje raport
4. **Wyświetla wyniki**:
   - Poziom dopasowania
   - Mocne strony
   - Luki kompetencyjne  
   - Pytania do rozmowy
   - Ukryte umiejętności

---

## 💰 Koszty

- **Render.com**: $7/miesiąc (Starter) lub Free z limitami
- **Claude API**: ~$0.02 na analizę (2 grosze)
- **1500 CV/miesiąc**: ~$30 za API + $7 hosting = **$37/miesiąc**

---

## 🆘 Pomoc

### Nie działa lokalnie?
\`\`\`bash
# Sprawdź wersję Node.js (powinna być 20+)
node --version

# Usuń node_modules i zainstaluj ponownie
rm -rf node_modules
npm install
\`\`\`

### Błąd API?
- Sprawdź czy klucz jest dobrze wklejony w \`.env\`
- Sprawdź saldo w Anthropic Console

### Problem z Dockerem na Render?
- Sprawdź logi w Render Dashboard
- Upewnij się że zmienna \`ANTHROPIC_API_KEY\` jest ustawiona

---

## 📞 Pytania?

Napisz do zespołu IT lub sprawdź pełny README.md
