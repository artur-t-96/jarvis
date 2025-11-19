# ❓ FAQ - CV Matcher dla Rekruterów

## Podstawowe pytania

### 1. Jak działa CV Matcher?
System wykorzystuje sztuczną inteligencję (Claude AI) do analizy CV kandydata względem wymagań ze stanowiska. Porównuje umiejętności, doświadczenie i kompetencje, a następnie generuje szczegółowy raport dopasowania.

### 2. Jakie formaty CV obsługuje system?
- **PDF** (.pdf)
- **Microsoft Word** (.docx, .doc)

Maksymalny rozmiar pliku: 10 MB

### 3. Jak podać opis stanowiska (JD)?
Masz dwie opcje:
- **Wklej tekst** - skopiuj i wklej opis stanowiska bezpośrednio
- **Załącz plik** - upload pliku PDF lub DOCX z opisem

### 4. Jak długo trwa analiza?
Zazwyczaj **10-30 sekund**, w zależności od:
- Długości CV
- Długości opisu stanowiska
- Obciążenia serwera

### 5. Czy mogę analizować CV w języku angielskim?
Tak! System obsługuje CV zarówno w języku polskim jak i angielskim. Wyniki analizy zawsze są po polsku.

---

## Interpretacja wyników

### 6. Co oznaczają poziomy dopasowania?

- **🎯 Doskonale pasuje** (Excellent)
  - >90% wymagań spełnionych
  - Kandydat jest gotowy do pracy od zaraz
  - Polecane: zaprosić na rozmowę

- **👍 Dobrze pasuje** (Good)
  - 70-90% wymagań spełnionych
  - Niewielkie luki, łatwe do uzupełnienia
  - Polecane: zaprosić na rozmowę, sprawdzić luki

- **⚠️ Częściowo pasuje** (Partial)
  - 40-70% wymagań spełnionych
  - Znaczące luki w kluczowych obszarach
  - Do rozważenia: jeśli kandydat jest silny w innych aspektach

- **❌ Nie pasuje** (Poor)
  - <40% wymagań spełnionych
  - Brak większości kluczowych kompetencji
  - Polecane: odrzucić lub rozważyć inne stanowisko

### 7. Co to są "Ukryte umiejętności"?
To kompetencje, które kandydat prawdopodobnie posiada (na podstawie doświadczenia), ale nie wymienił ich wprost w CV.

**Przykład**: Jeśli kandydat pracował jako DevOps Engineer, prawdopodobnie zna Docker, CI/CD, Kubernetes - nawet jeśli nie napisał tego wyraźnie.

Te umiejętności **należy zweryfikować** podczas rozmowy - nie zakładaj automatycznie, że kandydat je posiada.

### 8. Jak używać "Pytań weryfikacyjnych"?
To gotowe pytania do zadania podczas rozmowy rekrutacyjnej. Są skupione na:
- Lukach kompetencyjnych (sprawdzenie czy są rzeczywiście problemem)
- Ukrytych umiejętnościach (weryfikacja czy kandydat je posiada)
- Wątpliwych punktach w CV (clarification)

Możesz użyć ich bezpośrednio lub zaadaptować do swojego stylu rozmowy.

---

## Praktyczne zastosowanie

### 9. Czy powinienem odrzucać kandydatów z oceną "Częściowo pasuje"?
Nie automatycznie! Ocena to tylko jedno z narzędzi. Weź pod uwagę:
- Czy luki są w must-have czy nice-to-have?
- Czy kandydat ma inne silne strony (np. świetne soft skills)?
- Czy można go przeszkolić w brakujących obszarach?
- Jaki jest profil idealnego kandydata (seniorzy rzadko są idealni)?

### 10. Czy mogę ufać wynikowi w 100%?
System AI jest bardzo dobry, ale **nie jest nieomylny**. Traktuj wynik jako:
- ✅ Pierwszą, szybką ocenę
- ✅ Pomoc w decyzji
- ✅ Sugestię obszarów do sprawdzenia
- ❌ NIE jako jedyną podstawę decyzji

Zawsze przeczytaj CV osobiście i użyj swojego osądu!

### 11. Co robić gdy wynik się nie zgadza z moją oceną?
1. Sprawdź czy JD jest wystarczająco szczegółowy
2. Przeanalizuj sekcje "Mocne strony" i "Luki" - co AI znalazło?
3. Oceń czy AI może mieć rację (może zauważyło coś, co przeoczyłeś?)
4. Jeśli dalej się nie zgadzasz - ufaj swojemu osądowi

### 12. Czy wyniki można zapisać?
W obecnej wersji (MVP) wyniki **nie są automatycznie zapisywane**. 

**Polecane podejście**:
- Zrób screenshot wyników
- Lub skopiuj tekst do notatek
- Lub wydrukuj stronę (Ctrl/Cmd + P)

W przyszłych wersjach planowane jest dodanie:
- Zapisywanie historii analiz
- Export do PDF
- Baza danych wszystkich porównań

---

## Problemy techniczne

### 13. Co robić gdy pojawia się błąd "Nie udało się wyodrębnić tekstu z pliku"?
Możliwe przyczyny:
- **PDF zeskanowany** - zawiera tylko obrazy, nie tekst
  - Rozwiązanie: poproś kandydata o edytowalny PDF
- **PDF zaszyfrowany** - chroniony hasłem
  - Rozwiązanie: usuń zabezpieczenie lub poproś o inną wersję
- **Uszkodzony plik** - plik jest nieprawidłowy
  - Rozwiązanie: poproś kandydata o ponowne wysłanie CV

### 14. Analiza się "zawiesza" - co robić?
1. Poczekaj 60 sekund (czasem serwer jest obciążony)
2. Jeśli nadal nie działa - odśwież stronę (F5)
3. Spróbuj ponownie za chwilę
4. Jeśli problem się powtarza - zgłoś IT

### 15. Czy mogę analizować CV z telefonu?
Tak! Aplikacja działa na wszystkich urządzeniach:
- 💻 Komputer (desktop)
- 📱 Telefon (mobile)
- 📱 Tablet

Interface automatycznie dostosowuje się do rozmiaru ekranu.

### 16. Co robić gdy system jest niedostępny?
1. Sprawdź połączenie z internetem
2. Spróbuj odświeżyć stronę
3. Zgłoś problem do IT z informacją:
   - Kiedy wystąpił problem
   - Jaki komunikat błędu widziałeś
   - Screenshot (jeśli możliwe)

---

## Bezpieczeństwo i prywatność

### 17. Czy CV kandydatów są przechowywane?
**Nie**. W obecnej wersji:
- CV jest analizowane w czasie rzeczywistym
- Po analizie plik jest usuwany z serwera
- Nie tworzymy bazy danych CV

### 18. Czy dane są bezpieczne?
Tak. System używa:
- ✅ Połączenia HTTPS (szyfrowane)
- ✅ Serwery w UE (zgodność z RODO)
- ✅ API Anthropic (zgodne z przepisami)

### 19. Czy mogę udostępnić wyniki kandydatowi?
To zależy od polityki firmy. Technicznie możesz:
- Zrobić screenshot i wysłać
- Przepisać najważniejsze punkty

**NIE polecamy** wysyłania pełnego raportu "na surowo" - może to być zbyt szczegółowe i demotywujące dla kandydata.

---

## Najlepsze praktyki

### 20. Jak napisać dobry opis stanowiska (JD) dla analizy?
✅ **Dobrze**:
- Wyraźnie oddziel must-have od nice-to-have
- Podaj konkretne technologie (np. "React 18+", nie tylko "frontend")
- Wymień liczbę lat doświadczenia
- Dodaj zakres obowiązków
- Wspomnij o soft skills

❌ **Unikaj**:
- Zbyt ogólnych opisów ("znajomość programowania")
- Samych buzzwordów bez kontekstu
- Zbyt krótkich JD (min. 10-15 linii tekstu)

### 21. Ile CV mogę przeanalizować dziennie?
Nie ma limitu liczby analiz. Jednak pamiętaj:
- Każda analiza to koszt (API)
- Używaj z rozwagą dla realnych kandydatów
- Nie analizuj tego samego CV wielokrotnie bez powodu

### 22. Czy mogę używać systemu do innych celów niż rekrutacja?
System jest zaprojektowany **wyłącznie do analizy CV kandydatów**. 

Nie używaj go do:
- ❌ Oceny CV pracowników (to narzędzie rekrutacyjne, nie oceny performance)
- ❌ Analizy dokumentów innych niż CV/JD
- ❌ Generowania fake CV lub JD

---

## Kontakt i wsparcie

### 23. Gdzie mogę zgłosić problem lub propozycję ulepszenia?
Skontaktuj się z zespołem IT B2B Network:
- 📧 Email: it@b2bnetwork.pl
- 💬 Slack: #cv-matcher-support

### 24. Czy system będzie rozwijany?
Tak! Planowane funkcje (sprawdź ROADMAP.md):
- Export wyników do PDF
- Historia analiz
- System logowania
- Dashboard ze statystykami
- I wiele więcej!

### 25. Gdzie mogę nauczyć się więcej?
- **README.md** - pełna dokumentacja techniczna
- **QUICKSTART.md** - szybki start dla nowych użytkowników
- **ROADMAP.md** - plany rozwoju aplikacji

---

**Ostatnia aktualizacja**: Listopad 2024  
**Wersja**: 1.0 (MVP)
