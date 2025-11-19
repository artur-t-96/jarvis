# 🚢 Render.com Deployment - Krok po kroku

## Przed rozpoczęciem

- [ ] Masz konto GitHub
- [ ] Kod jest na GitHub (repozytorium publiczne lub prywatne)
- [ ] Masz klucz API Claude (Anthropic)

## Krok 1: Przygotowanie kodu na GitHub

### Jeśli jeszcze nie masz repozytorium:

\`\`\`bash
# W folderze cv-matcher
git init
git add .
git commit -m "Initial commit - CV Matcher"

# Utwórz nowe repo na GitHub, następnie:
git remote add origin https://github.com/twoj-user/cv-matcher.git
git branch -M main
git push -u origin main
\`\`\`

### Jeśli już masz repozytorium:

\`\`\`bash
git add .
git commit -m "Update CV Matcher"
git push
\`\`\`

## Krok 2: Konfiguracja na Render.com

### 2.1 Logowanie
1. Wejdź na: https://render.com
2. Kliknij **"Get Started"** lub **"Sign In"**
3. Wybierz **"Sign in with GitHub"**
4. Autoryzuj dostęp do swojego GitHub

### 2.2 Tworzenie Web Service
1. Na dashboard kliknij **"New +"**
2. Wybierz **"Web Service"**
3. Znajdź swoje repozytorium `cv-matcher` i kliknij **"Connect"**

### 2.3 Konfiguracja serwisu

Wypełnij formularz:

**Name**: 
\`\`\`
cv-matcher
\`\`\`
(możesz wybrać inną nazwę)

**Region**: 
\`\`\`
Frankfurt (EU Central)
\`\`\`

**Branch**: 
\`\`\`
main
\`\`\`
(lub master - zależnie od twojego repo)

**Root Directory**: 
\`\`\`
(zostaw puste)
\`\`\`

**Environment**: 
\`\`\`
Docker
\`\`\`
⚠️ **BARDZO WAŻNE** - Wybierz "Docker", nie "Node"!

**Instance Type**:
- **Free**: $0/miesiąc (dla testów, z limitami)
- **Starter**: $7/miesiąc (polecane dla produkcji)

### 2.4 Zmienne środowiskowe

Przewiń w dół do sekcji **"Environment Variables"**

Kliknij **"Add Environment Variable"**

**Key**: 
\`\`\`
ANTHROPIC_API_KEY
\`\`\`

**Value**: 
\`\`\`
sk-ant-api03-twój-rzeczywisty-klucz-api
\`\`\`

⚠️ **WAŻNE**: Wklej prawdziwy klucz API z Anthropic Console!

### 2.5 Deployment

Kliknij **"Create Web Service"** (na dole strony)

Render automatycznie:
1. Sklonuje twoje repo
2. Zbuduje obraz Docker
3. Wdroży aplikację

**Czas**: 5-10 minut

## Krok 3: Monitorowanie deploymentu

### 3.1 Sprawdź logi
Na stronie serwisu zobaczysz:
- **Logs** - logi z budowania
- Powinny pojawić się komunikaty: 
  - "Building Docker image..."
  - "Image built successfully"
  - "Starting service..."
  - "Service is live"

### 3.2 Sprawdź status
- Status powinien zmienić się na: **"Live"** (zielony)
- Jeśli jest **"Build failed"** (czerwony):
  1. Sprawdź logi
  2. Sprawdź Troubleshooting poniżej

## Krok 4: Testowanie

### 4.1 Otwórz aplikację
Na górze strony zobaczysz URL, np:
\`\`\`
https://cv-matcher.onrender.com
\`\`\`

Kliknij w ten link

### 4.2 Przetestuj funkcjonalność
1. Strona się ładuje? ✅
2. Upload CV działa? ✅
3. Analiza zwraca wyniki? ✅

Jeśli wszystko działa - gratulacje! 🎉

## Krok 5: Konfiguracja niestandardowa (opcjonalnie)

### Custom Domain
Jeśli masz własną domenę:

1. W ustawieniach serwisu → **"Custom Domains"**
2. Kliknij **"Add Custom Domain"**
3. Wpisz: `cv-matcher.twoja-domena.pl`
4. Dodaj rekord CNAME w DNS:
   - Host: `cv-matcher`
   - Value: `cv-matcher.onrender.com`
5. Poczekaj na weryfikację (do 24h)

### Auto-Deploy
Render automatycznie wdroży nową wersję gdy push'nujesz do GitHub!

Wyłączenie auto-deploy:
1. Settings → **"Build & Deploy"**
2. Ustaw **"Auto-Deploy"** na **"No"**

## Troubleshooting

### Build się nie udaje

**Problem**: "Error: failed to solve with frontend dockerfile.v0"

**Rozwiązanie**:
- Sprawdź czy `Dockerfile` jest w root projektu
- Sprawdź czy w Environment wybrałeś **Docker**, nie Node

---

**Problem**: "npm ERR! code ENOENT"

**Rozwiązanie**:
- To normalne w Docker build - ignore
- Sprawdź czy build się zakończył sukcesem na końcu

---

**Problem**: "Cannot find module '@anthropic-ai/sdk'"

**Rozwiązanie**:
- Sprawdź czy `package.json` ma wszystkie zależności
- Spróbuj ręcznego rebuild: Deploy → **"Manual Deploy"** → **"Clear build cache & deploy"**

### Aplikacja się buduje ale nie działa

**Problem**: "Application error" lub blank page

**Rozwiązanie**:
1. Sprawdź Runtime Logs (nie Build Logs)
2. Sprawdź czy zmienna `ANTHROPIC_API_KEY` jest ustawiona
3. Sprawdź czy klucz API jest prawidłowy (sprawdź w Anthropic Console)

---

**Problem**: "Error: Cannot find module 'pdf-parse'"

**Rozwiązanie**:
- To błąd w logu, ale powinien się resolve podczas buildu
- Jeśli pojawia się w Runtime - rebuild z czystym cache

### Błędy podczas analizy CV

**Problem**: "Nie udało się przeanalizować CV"

**Rozwiązanie**:
1. Sprawdź Runtime Logs w Render
2. Sprawdź balance w Anthropic Console
3. Sprawdź czy klucz API jest aktywny

## Monitoring i logi

### Dostęp do logów:
1. W Render dashboard → Twój serwis
2. Zakładka **"Logs"**
3. Można filtrować:
   - Build logs - logi z budowania
   - Runtime logs - logi z działania aplikacji

### Metryki:
1. Zakładka **"Metrics"**
2. Zobaczysz:
   - CPU usage
   - Memory usage
   - Response times

## Koszty

### Free Tier:
- $0/miesiąc
- 750 godzin/miesiąc
- Uśpia się po 15 min nieaktywności
- **Ważne**: Pierwsze żądanie po uśpieniu trwa ~30-60s

### Starter:
- $7/miesiąc
- Bez uśpiania
- 512 MB RAM
- Polecane dla produkcji

### API Claude:
- ~$0.02 per analiza
- Płatne osobno w Anthropic

## Aktualizacje

Gdy wprowadzisz zmiany w kodzie:

\`\`\`bash
git add .
git commit -m "Feature: added XYZ"
git push
\`\`\`

Render automatycznie wykryje zmiany i wdroży nową wersję!

## Gotowe!

Twoja aplikacja jest teraz dostępna pod:
\`\`\`
https://cv-matcher.onrender.com
\`\`\`

Lub twój custom URL jeśli go skonfigurowałeś.

---

**Potrzebujesz pomocy?**
- Sprawdź [README.md](README.md)
- Sprawdź [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- Skontaktuj się z zespołem IT
