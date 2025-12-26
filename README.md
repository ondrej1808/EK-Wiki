# Kartičky – Interaktivní studijní aplikace

Tento projekt slouží k procvičování a studiu otázek z oblasti optických komunikací a příbuzných témat pomocí interaktivních kartiček.

## Obsah projektu

- **cards.html** – Hlavní stránka s interaktivními kartičkami (flashcards).
- **old_cards.html** – Starší verze nebo záloha hlavní stránky.
- **wheel-of-fortune.html** – Stránka s "kolem štěstí" pro náhodný výběr otázek.
- **zkratky.html** – Stránka se zkratkami a jejich vysvětlením.
- **script.js** – JavaScript pro logiku aplikace (načítání otázek, ovládání kartiček, interakce uživatele).
- **style.css** – Moderní responzivní stylování pro všechny stránky, včetně podpory světlého/tmavého režimu.
- **json/** – Složka s datovými soubory ve formátu JSON:
  - `oks.json` – Hlavní databáze otázek a odpovědí (včetně LaTeX vzorců, obrázků, tabulek).
  - `tsi-json-questions-explanation.json` – Další sada otázek (pravděpodobně pro jiný předmět nebo část zkoušky).
  - `oks.json` – (duplicitní v seznamu, pravděpodobně překlep)

## Funkce

- Interaktivní kartičky s podporou otevřených i uzavřených otázek.
- Zobrazení vzorců pomocí LaTeX (KaTeX/MathJax, podle implementace).
- Možnost filtrování otázek podle kategorií.
- Podpora světlého a tmavého režimu.
- Responzivní design pro mobily i desktop.
- Možnost označovat otázky jako zodpovězené, vlajkovat obtížné otázky.
- Import/export vlastních otázek (volitelné, pokud je implementováno).

## Struktura JSON otázek

Každá otázka v `oks.json` má:
- `id`: unikátní číslo otázky
- `type`: typ otázky ("open" = otevřená, "closed" = výběr z možností)
- `category`: tematická oblast
- `question`: samotné zadání otázky
- `answer_parts`: pole částí odpovědi (text, obrázky, tabulky, vzorce)

Příklad:
```json
{
  "id": 1,
  "type": "open",
  "category": "Základní prvky optických komunikačních systémů",
  "question": "Definujte optický paprsek.",
  "answer_parts": [
    {
      "title": "Optický paprsek",
      "text": "Jedná se o zjednodušenou interpretaci šíření elektromagnetického vlnění...",
      "image": {
        "src": "figs/definice_paprsku.png",
        "caption": "Optický paprsek, převzato z [SOK]"
      }
    }
  ]
}
```

## Jak spustit

1. Otevřete `cards.html` v libovolném moderním webovém prohlížeči.
2. Pro správné zobrazení vzorců je potřeba internetové připojení (pokud se používá CDN pro KaTeX/MathJax).
3. Pro úpravu otázek editujte soubory v `json/` (doporučeno použít VS Code nebo jiný editor s podporou JSON).

## Rozšíření a úpravy

- Pro přidání nových otázek stačí rozšířit JSON soubory ve složce `json/`.
- Pro úpravu vzhledu upravte `style.css`.
- Pro změnu logiky nebo přidání funkcí editujte `script.js`.

## Autoři a licence

Projekt je určen pro studijní účely. Pokud využíváte části kódu nebo dat, uveďte prosím původního autora.

---

Pokud narazíte na chybu nebo máte návrh na vylepšení, neváhejte projekt rozšířit nebo upravit podle svých potřeb.
