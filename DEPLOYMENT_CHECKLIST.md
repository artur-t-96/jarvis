# ✅ Checklist wdrożenia CV Matcher

## Przygotowanie lokalne

- [ ] Zainstalowany Node.js 20+ (`node --version`)
- [ ] Wypakowany folder `cv-matcher`
- [ ] Terminal otwarty w folderze projektu
- [ ] Wykonane `npm install` (bez błędów)
- [ ] Skopiowany plik `.env.example` → `.env`
- [ ] Klucz API Claude wklejony w `.env`
- [ ] Test lokalny: `npm run dev` działa
- [ ] Otwarte http://localhost:3000 - strona się ładuje
- [ ] Test uploadu - przykładowe CV analizuje się poprawnie

## Przygotowanie GitHub

- [ ] Konto GitHub założone/zalogowane
- [ ] Nowe repozytorium utworzone (publiczne lub prywatne)
- [ ] Git zainicjowany: `git init`
- [ ] Pliki dodane: `git add .`
- [ ] Commit utworzony: `git commit -m "Initial commit"`
- [ ] Remote dodany: `git remote add origin <URL>`
- [ ] Kod wypchnięty: `git push -u origin main`
- [ ] Repozytorium widoczne na GitHub

## Konfiguracja Render.com

- [ ] Konto Render założone (przez GitHub)
- [ ] New Web Service utworzony
- [ ] Repozytorium GitHub połączone
- [ ] Environment ustawiony na **Docker**
- [ ] Region ustawiony na **Frankfurt (EU)**
- [ ] Instance Type wybrany (Free/Starter)
- [ ] Zmienna `ANTHROPIC_API_KEY` dodana
- [ ] "Create Web Service" kliknięte

## Po deploymencie

- [ ] Build zakończony sukcesem (sprawdź Logs)
- [ ] Service działa (status: Live)
- [ ] URL publiczny działa
- [ ] Test uploadu CV - działa poprawnie
- [ ] Test z przykładowym JD - generuje wyniki
- [ ] Sprawdzone wszystkie sekcje wyniku:
  - [ ] Podsumowanie dopasowania
  - [ ] Mocne strony
  - [ ] Luki kompetencyjne
  - [ ] Pytania weryfikacyjne
  - [ ] Ukryte umiejętności
- [ ] URL zapisany i udostępniony zespołowi

## Monitorowanie

- [ ] Sprawdzone zużycie API w Anthropic Console
- [ ] Sprawdzone logi w Render Dashboard
- [ ] Zanotowane URL aplikacji
- [ ] Dokumentacja przekazana rekruterom

## Opcjonalnie - Własna domena

- [ ] Domena wykupiona (np. cv-matcher.b2bnetwork.pl)
- [ ] DNS skonfigurowane (CNAME)
- [ ] Custom domain dodany w Render
- [ ] SSL certyfikat aktywny

---

## 🔥 Troubleshooting

### Build się nie udaje na Render?
1. Sprawdź Logs w Render Dashboard
2. Upewnij się że Dockerfile jest w root projektu
3. Sprawdź czy `.dockerignore` nie blokuje ważnych plików

### Aplikacja się builduje ale nie działa?
1. Sprawdź Logs → Runtime logs
2. Zweryfikuj zmienną `ANTHROPIC_API_KEY`
3. Sprawdź czy port 3000 jest poprawnie wyeksponowany

### Błędy podczas analizy CV?
1. Sprawdź Anthropic Console - czy masz kredyty?
2. Sprawdź format plików (PDF/DOCX)
3. Sprawdź logi w przeglądarce (Console F12)

---

**Data wdrożenia**: _______________

**Wdrożył**: _______________

**URL produkcyjny**: _______________
