# 👋 CV Matcher - Zacznij tutaj!

Witaj w CV Matcher - inteligentnym systemie analizy dopasowania kandydatów do stanowisk!

## 🎯 Co to jest?

CV Matcher to aplikacja webowa która:
- Analizuje CV kandydatów względem opisów stanowisk (JD)
- Wykorzystuje sztuczną inteligencję (Claude AI) do oceny dopasowania
- Generuje szczegółowe raporty z rekomendacjami
- Pomaga rekruterom w szybszej i bardziej obiektywnej ocenie kandydatów

## 📚 Dokumentacja

### Dla rekruterów (użytkowników):
1. **[FAQ.md](FAQ.md)** - Najczęściej zadawane pytania
   - Jak używać systemu?
   - Jak interpretować wyniki?
   - Co robić w razie problemów?

### Dla IT/programistów:
1. **[QUICKSTART.md](QUICKSTART.md)** ⭐ **ZACZNIJ OD TEGO**
   - Instalacja w 7 krokach
   - Uruchomienie lokalne
   - Deployment na Render.com

2. **[README.md](README.md)** - Pełna dokumentacja techniczna
   - Architektura systemu
   - Szczegółowa konfiguracja
   - Troubleshooting

3. **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Checklist wdrożenia
   - Krok po kroku
   - Wszystko co trzeba sprawdzić

### Dla planowania:
1. **[ROADMAP.md](ROADMAP.md)** - Plany rozwoju
   - Przyszłe funkcje
   - Priorytety
   - Szacunki czasowe i kosztowe

### Materiały pomocnicze:
1. **[EXAMPLE_JD.md](EXAMPLE_JD.md)** - Przykładowy opis stanowiska
   - Do testowania aplikacji

## 🚀 Szybki start (dla programistów)

### Opcja A: Setup przez skrypt (Mac/Linux)
\`\`\`bash
cd cv-matcher
chmod +x setup.sh
./setup.sh
npm run dev
\`\`\`

### Opcja B: Manualne kroki
\`\`\`bash
cd cv-matcher
npm install
cp .env.example .env
# Edytuj .env i dodaj ANTHROPIC_API_KEY
npm run dev
\`\`\`

Otwórz: http://localhost:3000

## 🎯 Dla kogo jest ta aplikacja?

### Użytkownicy końcowi (rekruterzy):
- Junior rekruterzy potrzebujący wsparcia w ocenie CV
- Rekruterzy chcący zaoszczędzić czas na wstępnej selekcji
- Zespoły HR szukające obiektywnego drugiego zdania

### Administratorzy/IT:
- Zespół IT odpowiedzialny za deployment
- Osoby zarządzające konfiguracją i hostingiem

## 📊 Co dostaniesz po analizie?

System generuje raport zawierający:

1. **Podsumowanie dopasowania**
   - Ocena: Doskonale/Dobrze/Częściowo/Słabo pasuje
   - Krótkie podsumowanie

2. **Mocne strony**
   - Co kandydat ma i jest potrzebne
   - Konkretne umiejętności i doświadczenia

3. **Luki kompetencyjne**
   - Czego brakuje z wymagań
   - Obszary wymagające uwagi

4. **Pytania weryfikacyjne**
   - Gotowe pytania do rozmowy rekrutacyjnej
   - Skupione na lukach i wątpliwościach

5. **Ukryte umiejętności**
   - Co kandydat prawdopodobnie umie
   - Wymaga weryfikacji podczas rozmowy

## 💰 Koszty

### Hosting (Render.com):
- **Free tier**: $0/miesiąc (z limitami, do testów)
- **Starter**: $7/miesiąc (polecane dla produkcji)

### AI API (Anthropic Claude):
- **~$0.02 per analiza** (2 grosze)
- **1500 CV/miesiąc**: ~$30

**Łącznie**: ~$37/miesiąc dla 1500 analiz

## 🔐 Bezpieczeństwo

- ✅ Połączenia HTTPS (szyfrowane)
- ✅ CV nie są przechowywane (stateless)
- ✅ Serwery w UE (RODO compliant)
- ✅ API zgodne z przepisami

## 🆘 Potrzebujesz pomocy?

1. **Problemy techniczne**: Sprawdź [README.md](README.md) sekcja Troubleshooting
2. **Pytania o użycie**: Sprawdź [FAQ.md](FAQ.md)
3. **Deployment**: Użyj [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
4. **Wsparcie**: Skontaktuj się z zespołem IT B2B Network

## 📁 Struktura projektu

\`\`\`
cv-matcher/
├── START_HERE.md           ← Jesteś tutaj!
├── QUICKSTART.md          ← Następny krok dla IT
├── README.md              ← Pełna dokumentacja
├── FAQ.md                 ← Dla rekruterów
├── DEPLOYMENT_CHECKLIST.md ← Checklist wdrożenia
├── ROADMAP.md             ← Plany rozwoju
├── EXAMPLE_JD.md          ← Testowe dane
│
├── app/                   ← Kod aplikacji Next.js
├── components/            ← Komponenty React
├── lib/                   ← Logika biznesowa
├── Dockerfile             ← Konfiguracja Docker
└── package.json           ← Zależności
\`\`\`

## ✅ Następne kroki

### Dla rekruterów:
1. Poczekaj aż IT wdroży aplikację
2. Otrzymaj link do aplikacji
3. Przeczytaj [FAQ.md](FAQ.md)
4. Zacznij analizować CV!

### Dla IT/programistów:
1. Przeczytaj [QUICKSTART.md](QUICKSTART.md) ⭐
2. Przetestuj lokalnie
3. Wdróż na Render.com
4. Użyj [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

## 📞 Kontakt

**B2B Network (B2B.net S.A.)**  
Email: it@b2bnetwork.pl

---

**Wersja**: 1.0 (MVP)  
**Data**: Listopad 2024  
**Technologia**: Next.js 14, React, TypeScript, Claude AI (Sonnet 4), Docker

---

## 🎉 Powodzenia!

Masz wszystko czego potrzebujesz. Zaczynaj od QUICKSTART.md i baw się dobrze! 🚀
