# QA Recruitment — Zadania rekrutacyjne

## Zadanie 1 — Zgodność implementacji z Figmą

Porównaj implementację konfiguratora z projektem w Figmie. Znajdź i opisz różnice.

- **Figma:** https://www.figma.com/design/PT95VjjddSlXYa3O8uAdgj/Adsystem---Konfigurator?node-id=3003-12430&t=yKE1ABbDSKR0DEc7-0
- **Aplikacja:** https://conf-dev13.dev.adsystem.pl/?cid=226

---

### Zadanie 2 — Postman

Za pomocą DevTools znajdź endpoint API, który jest odpowiedzialny za zmianę danych na karcie katalogowej po zmianie wymiarów produktu, a następnie przetestuj go w Postmanie. W requeście dodaj header `X-Lang` = `pl`.

- **Strona produktu:** https://ui.adsystem.pl/adframe-quick-85x200-wersja-20

---

### Zadanie 3 — Scenariusz w Gherkin

Napisz scenariusz testowy w składni Gherkin (Given/When/Then) dla funkcjonalności zmiany wymiarów produktu na karcie katalogowej.

- **Strona produktu:** https://ui.adsystem.pl/adframe-quick-85x200-wersja-20

---

### Zadanie 4 — Test w Cypress

Napisz test E2E w Cypress, który weryfikuje poprawność zmiany wymiarów produktu na karcie katalogowej. Wykorzystaj Page Object Model (wzorzec dostępny w tym repozytorium).

- **Strona produktu:** https://ui.adsystem.pl/adframe-quick-85x200-wersja-20

---

### Zadanie 5 — Analiza logów

Przeszukaj logi aplikacji EC2 i znajdź problemy związane ze składaniem zamówienia w okolicach godziny 7:00 rano.

- **Plik:** `cypress/fixtures/logs/ec2-error-2026-04-08.log`

---

### Zadanie 6 — SQL

Na podstawie struktury tabel (`cypress/fixtures/sql/schema.sql`) i przykładowych danych (`cypress/fixtures/sql/data.md`) napisz zapytanie SQL, które znajdzie wszystkie nieudane zamówienia z dnia 2026-04-08 między godziną 7:00 a 8:00, wraz z danymi użytkownika i treścią błędu.
