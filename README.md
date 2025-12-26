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


## Struktura JSON otázek (detailně)

Každá otázka v `json/oks.json` má následující strukturu:

```
{
  "id": 1, // Unikátní číslo otázky (integer)
  "type": "open" | "closed", // Typ otázky: "open" (otevřená, vlastní odpověď) nebo "closed" (výběr z možností)
  "category": "Název kategorie", // Tematická oblast otázky
  "question": "Text otázky", // Samotné zadání otázky
  "answer_parts": [ // Pole částí odpovědi (pro otevřené otázky)
    {
      "title": "Nadpis části odpovědi (volitelné)",
      "text": "Text odpovědi (může obsahovat LaTeX vzorce)",
      "image": { // Volitelné, obrázek k odpovědi
        "src": "cesta/k/obrazku.png",
        "caption": "Popisek obrázku"
      },
      "table_data": [ // Volitelné, tabulka k odpovědi
        { "sloupec1": "hodnota", "sloupec2": "hodnota" }
      ]
    }
  ],
  // Pro uzavřené otázky (výběr z možností):
  "options": ["možnost A", "možnost B", ...], // Pole možností
  "correctIndex": 0, // Index správné odpovědi v poli options
  "explanation": "Vysvětlení správné odpovědi (volitelné, může obsahovat LaTeX)"
}
```

### Vysvětlení polí:
- `id`: Unikátní číslo otázky (integer, povinné).
- `type`: Typ otázky – "open" (otevřená, uživatel píše/vyhodnocuje sám), "closed" (výběr z možností, testová otázka).
- `category`: Tematická oblast otázky (řetězec, povinné).
- `question`: Text otázky (řetězec, povinné).
- `answer_parts`: Pole částí odpovědi (pro otevřené otázky). Každá část může obsahovat:
  - `title`: Nadpis části odpovědi (volitelné).
  - `text`: Text odpovědi (může obsahovat LaTeX vzorce).
  - `image`: Objekt s cestou k obrázku a popiskem (volitelné).
  - `table_data`: Pole objektů pro tabulku (volitelné).
- `options`: Pole možností (pro uzavřené otázky, povinné u typu "closed").
- `correctIndex`: Index správné odpovědi v poli `options` (pro uzavřené otázky).
- `explanation`: Vysvětlení správné odpovědi (volitelné, může obsahovat LaTeX).

### Poznámky:
- Otevřené otázky používají pole `answer_parts`, kde může být více částí (text, obrázek, tabulka).
- Uzavřené otázky mají pole `options`, `correctIndex` a volitelně `explanation`.
- Vzorce lze zapisovat v LaTeX formátu, např. `$a^2 + b^2 = c^2$` nebo `$$E=mc^2$$`.
- Obrázky a tabulky jsou volitelné a slouží k rozšíření odpovědi.

#### Příklad otevřené otázky:
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

#### Příklad uzavřené otázky:
```json
{
  "id": 2,
  "type": "closed",
  "category": "Základní pojmy",
  "question": "Jaký je index lomu vakua?",
  "options": ["1", "1.33", "1.5", "2"],
  "correctIndex": 0,
  "explanation": "Index lomu vakua je přesně 1."
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
