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
  - `ozd-open-micro.json` – OZD sada otevřených mikro-karet (úzké, konkrétní prompty).
  - `szz-open-micro.json` – SZZ sada otevřených mikro-karet (úzké, konkrétní prompty).
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

## Doporučený design pro otevřené kartičky (OZD, SZZ)

U otevřených otázek je klíčové vyhnout se příliš širokým zadáním. V sadách `ozd-open-micro.json` a `szz-open-micro.json` jsou proto použity **micro-prompty**:

- 1 karta = 1 pojem, 1 vztah nebo 1 jasné porovnání.
- Zadání má být zodpověditelné za 15–45 sekund.
- Odpověď má mít ideálně formát: **definice + klíčový vztah / příklad + 1 věta použití**.
- Široká témata (např. „vysvětli celé xDSL“) se dělí na několik malých karet (princip, limitace, typické pásmo, použití).

## SZZ checklist (stav pokryti a revizi)

Poznamky:
- MA1A a ZEOA jsou pouze sablony stylu, neupravovat.
- Pro vsechny ostatni predmety vznikaji nove verze *_v2.
- FY1 a FY2 se kontroluji jako prvni, MA2A a DRN jsou prepped.

Legenda (pro kazdy tematicky blok):
- [ ] Pokryti tematu (ano/ne)
- [ ] Prilis dlouhe otazky (oznaceno)
- [ ] Prilis slozite odpovedi (oznaceno)
- [ ] Upraveno v *_v2

### 1. Teoreticky zaklad

#### Linearni algebra a geometrie (B0B01LAGA)
- Struktura linearniho prostoru, baze a dimenze. Reseni soustav linearnich rovnic. Linearni zobrazeni. Skalarni soucin, ortogonalizace. [ ] [ ] [ ] [ ]
- Maticovy pocet. Determinant a inverze matice. Vlastni vektory a vlastni cisla, podobnost a diagonalizace matic. [ ] [ ] [ ] [ ]

#### Matematicka analyza 1 (B0B01MA1A) - sablona
- Funkce jedne promenne, limita a spojitost. Derivace, jeji vlastnosti a vyznam. Prubeh funkce a lokalni extremy. Aproximace Taylorovym polynomem. [ ] [ ] [ ] [ ]
- Primitivni funkce a neurcity integral. Urcity integral. Zakladni metody vypoctu integralu. [ ] [ ] [ ] [ ]

#### Diferencialni rovnice a numericke metody (B0B01DRN) - prepped
- Linearni diferencialni rovnice vyssich radu, soustavy linearnich diferencialnich rovnic. [ ] [ ] [ ] [ ]
- Numericke metody reseni soustav linearnich rovnic, nelinearnich rovnic. Numericka kvadratura, numericke reseni diferencialnich rovnic. [ ] [ ] [ ] [ ]

#### Matematicka analyza 2 (B0B01MA2A) - prepped
- Funkce vice promennych, gradient, derivace slozene funkce. Lokalni a vazane extremy, Lagrangeova metoda. [ ] [ ] [ ] [ ]
- Dvojny a trojny integral - Fubiniho veta a veta o substituci. Krivkovy a plosny integral, jejich vyznam a aplikace. Potencial vektoroveho pole, Gaussova, Greenova a Stokesova veta. [ ] [ ] [ ] [ ]

#### Komplexni analyza a transformace (B0B01KANA)
- Funkce komplexni promenne a jejich derivace. Krivkovy integral. Singularity. Mocninne rady, Taylorovy a Laurentovy rozvoje. Rezidua, reziduova veta a jeji aplikace. [ ] [ ] [ ] [ ]
- Fourierovy rady, Fourierova a Laplaceova transformace – vyznam, gramatika, vety o inverzi. Prima a zpetna transformace Z. Aplikace transformaci na reseni diferencialnich a diferencnich rovnic. [ ] [ ] [ ] [ ]

#### Statistika a pravdepodobnost (B0B01STP)
- Nahodna velicina a nahodny vektor. Distribucni funkce, hustota a pravdepodobnostni funkce nahodne veliciny. Stredni hodnota a rozptyl nahodne veliciny a jejich odhady. Korelace a nezavislost nahodnych velicin. [ ] [ ] [ ] [ ]
- Centralni limitni veta. Metoda maximalni verohodnosti. Zakladni principy statistickeho testovani hypotez, testy stredni hodnoty. Chi-kvadrat test dobre shody. [ ] [ ] [ ] [ ]

#### Fyzika 1 (B2B02FY1) - prvni kontrola
- Kinematika a dynamika hmotnych bodu a tuhych teles - Klasicka mechanika: Newtonovska a analyticka mechanika, uvod do relativisticke mechaniky. [x] [ ] [ ] [x]
- Uvod do mechaniky kontinua - Obecna mechanika kontinua: obecne rovnice rovnovahy kontinua, zobecneny Hookuv zakon, pohybove rovnice kontinua, kinematika a dynamika tekutin. [x] [ ] [ ] [ ]
- Fyzikalni pole a their popis - Gravitacni pole, elektrostaticke pole, stacionarni elektricke a magneticke pole, elektromagneticke pole. [x] [ ] [ ] [x]

#### Fyzika 2 (B2B02FY2) - prvni kontrola
- Termodynamika - Fenomenologicka termodynamika: I. a II. zakon termodynamiky, tepelne stroje, prenos tepla, kineticka teorie plynu. [x] [ ] [ ] [x]
- Zaklady teorie vln a optika - Vlnova rovnice, disperze, disipace, skladani a difrakce vln, vlnova a geometricka optika: interference, Fermatuv princip, tenke cocky. [x] [ ] [ ] [x]
- Uvod do moderni fyziky - Zaklady kvantove mechaniky, princip laseru, pasova teorie pevnich latek, uvod do jaderne fyziky. [x] [ ] [ ] [x]

### 2. Odborna cast

#### Zaklady elektrickych obvodu (B2B31ZEOA) - sablona
- Zakladni zakony a teoremy. Kirchhoffovy zakonu. Nortonuv a Theveninuv teorem. Elementarni a obecne metody analyzy obvodu, metoda uzlovych napeti a smyckovych proudu. [ ] [ ] [ ] [ ]
- Harmonicky ustaleny stav. Fazory. Kmitoctove charakteristiky. Rezonance. Analyza prechodnych jevu. Linearni obvody v periodickem neharmonickem ustalenem stavu. [ ] [ ] [ ] [ ]

#### Elektronicke obvody 1 (B2B31EO1)
- Popis linearniho systemu v casove a kmitoctove oblasti, princip a vlastnosti zpetne vazby, typy filtru, zakladni aproximace modulovych charakteristik filtru - vlastnosti v kmitoctove a casove oblasti. [ ] [ ] [ ] [ ]
- Operacni zesilovac: princip chovani, zakladni zapojeni (invertujici a neinvertujici zapojeni, sumator, prevodniky u-i a i-u, rozdilovy a pristrojovy zesilovac, integrator, derivator, vzorkovaci obvody, komparatory, oscilatory, fazovy zaves). [ ] [ ] [ ] [ ]

#### Elektronicka mereni a pristroje (B2B38EMB)
- Pristroje pro mereni elektrickeho proudu, napeti a vykonu, kmitoctu a fazoveho rozdilu a zakladnich parametru pasivnich prvku (odpor, indukcnost, kapacita). [ ] [ ] [ ] [ ]
- Chyby pristroju a nejistoty mereni. AD a DA prevodniky. Multimetry, osciloskopy. [ ] [ ] [ ] [ ]

#### Digitalni technika (B2B32DITA)
- Logicke funkce, Booleova algebra, logicke vyrazy. Zpusoby vyjadrovani logickych funkci. Kombinacni a sekvencni logicke obvody. Bistabilni pametove cleny: S - R, J - K, T, D. [ ] [ ] [ ] [ ]
- Multiplexory, dekodery, citace, registry, posuvne registry a pameti. Programovatelne logicke obvody, hradlova pole, jazyk VHDL. [ ] [ ] [ ] [ ]

#### Datova komunikace a site (B2B32DATA)
- Vrstvove modely datove komunikace. Topologie site a jeji popis pomoci grafu. Lokalni datove site a metody pristupu k mediu. [ ] [ ] [ ] [ ]
- Binarni aritmetika a maskovani nad IP adresou. Zaklady smerovani v IP sitich, internet veci a platformy pro vyvoj aplikaci M2M. [ ] [ ] [ ] [ ]

#### Elektronicke prvky (B2B34ELPA)
- Vlastnosti polovodicu a polovodicove struktury (nositele a transport naboje v polovodicich, prechody PN a MS, struktura MIS), pasivni elektronicke prvky (struktury, vlastnosti, modely a aplikace). [ ] [ ] [ ] [ ]
- Aktivni elektronicke prvky (tranzistory MOSFET, BJT, JFET), vykonove spinaci soucastky, optoelektronicke prvky, logicka hradla a pameti – principy, struktury, charakteristiky, modely a aplikace. [ ] [ ] [ ] [ ]

#### Elektromagneticke pole (B2B17EMPA)
- Elektricke a magneticke pole a jeho zdroje. Pole virove a potencialove, klasifikace prostredi, zakladni vektorove veliciny v elektrickem poli. Elektrostaticke pole - Gaussova veta elektrostatiky a jeji aplikace pro vypocet, metoda zrcadleni. Energie v elektrickem poli, objemova hustota energie. Kapacita a jeji vypocet pro zakladni geometricke usporadani elektrod, zakladni vektorove veliciny v magnetickem poli. [ ] [ ] [ ] [ ]
- Stacionarni magneticke pole. Biotuv-Savartuv zakon. Amperuv zakon a jeho aplikace pro vypocet magnetickeho pole. Energie v magnetickem poli, objemova hustota energie. Faradayuv indukcni zakon, indukovana napeti. Vlastni a vzajemna indukcnost a jeji vypocet pro zakladni geometricke usporadani proudovodicu. [ ] [ ] [ ] [ ]

#### Elektromagneticke vlny a vedeni (B2B17ELD)
- Elektromagneticka vlna v neomezenem prostredi. Maxwellovy rovnice, Vlna rovinna, kulova a valcova. Gaussuv svazek. Vlna na rozhrani dvou prostredi, Totalni odraz, evanescentni vlna. Polarizace vlny odrazem. [ ] [ ] [ ] [ ]
- Vedene a evanescentni vlny. Mody, impedance, fazova a skupinova rychlost sireni, prenos vykonu. Zdroje vln - elementarni zarice. Blizke, prechodne a vzdalenne pole zaricu. Vlna v anizotropnim prostredi. [ ] [ ] [ ] [ ]

#### Senzory a mikroelektromechanicke systemy (B2B34SEE)
- Zakladni fyzikalni jevy a principy pouzivane u senzoru, staticke a dynamicke parametry, zpracovani senzorovych signalu, energeticke domeny, zakladni charakteristika mikrosystemu, mikroaktuatoru a MEMS. [ ] [ ] [ ] [ ]
- Senzory teploty, mechanickeho namahani, prutoku, hladiny, magnetickych velicin, zareni, chemickych velicin (plynu) - principy cinnosti, elektronicka zapojeni, vlastnosti. [ ] [ ] [ ] [ ]

#### Signaly a systemy (B2B37SAS)
- Klasifikace signalu ve spojitem a diskretnim case, specialni signaly. Casova a spektralni reprezentace signalu, charakteristiky signalu, korelace, zakladni teoremy. Vzorkovani a interpolace signalu. Zakladni charakteristiky nahodneho procesu, stacionarita a ergodicita, bily sum. [ ] [ ] [ ] [ ]
- Klasifikace soustav, popis spojitych a diskretnich soustav v casove a frekvencni oblasti, linearni a casove invariantni soustavy, konvoluce, stabilita soustavy. Pasmove signaly, komplexni obalka, Hilbertova transformace. Typy zakladnich analogovych modulaci. [ ] [ ] [ ] [ ]

#### Teorie bezdratove komunikace (B2B17TBK)
- Zakladni principy bezdratove komunikace, typy radiovych spoju, zaklady digitalnich modulaci, napetove vlny, Smithuv diagram, pouzivane VF linearni, sumove a nelinearni parametry, komponenty a struktury VF a mikrovlnnych vysilacu a prijimacu. [ ] [ ] [ ] [ ]
- Pouzivane anteny a jejich parametry, sireni elektromagnetickych vln v ruznych prostredich, systemovy navrh radiovych spoju, vykonova bilance. [ ] [ ] [ ] [ ]

#### Cislicove zpracovani signalu (B2B31CZS)
- Linearni a cyklicka konvoluce, zpracovani dlouhych signalu, vlastnosti DFT, vahovani, casove-frekvencni analyza, cislicove filtry, kvantovani a jeho dusledky. [ ] [ ] [ ] [ ]
- Filtrace ve frekvencni oblasti, prevzorkovani, banky filtru, odhad parametru nahodnych signalu, spektralni a korelacni analyza, modelovani a linearni predikce. [ ] [ ] [ ] [ ]

#### Audiovizualni technika (B2B37AVT)
- Fyziologie a anatomie videni. Snimani a reprodukce obrazu. Zdrojove kodovani obrazove informace a prenosove video systemy. Digitalni fotografie, metody predzpracovani. [ ] [ ] [ ] [ ]
- Fyziologie a anatomie slysenI. Elektrodynamicky a elektrostaticky menic. Vzorkovani, kvantovani a zdrojove kodovani zvuku. [ ] [ ] [ ] [ ]

#### Mikroelektronika a technologie (B2B34MIT)
- Integrovane obvody – vyznam integrace, architektury IO, metody navrhu; Mikroelektronicke aktivni a pasivni prvky a komponenty, technologie pro mikroelektronicke systemy. [ ] [ ] [ ] [ ]
- Technologie MEMS; nanoelektronika (technologie a aplikace), opticke integrovane obvody (technologie, materialy a principy), testovani a diagnostika elektronickych systemu. [ ] [ ] [ ] [ ]

#### Telefonni a mobilni site (B2B32TSI)
- Komunikacni kanal, teoreticka informacni propustnost, hierarchie digitalnich prenosovych systemu. Telefonni komunikace, digitalizace telefonniho signalu, digitalni spojovaci systemy, signalizace, klasicke telefonni a xDSL pripojky. [ ] [ ] [ ] [ ]
- Principy bunkovych mobilnich siti, pouzivane metody modulace a pristupu k mediu v mobilnich sitich. Principy komunikace, prenosu dat a signalizace v mobilni siti 2G/2G5/3G. [ ] [ ] [ ] [ ]

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

## Nasazení na GitHub Pages

Repozitář je připravený pro GitHub Pages přes GitHub Actions workflow:

1. V GitHub repozitáři otevřete **Settings → Pages**.
2. V sekci **Build and deployment** nastavte **Source = GitHub Actions**.
3. Push do větve `main` automaticky spustí workflow `Deploy to GitHub Pages`.
4. Web bude dostupný na URL projektu GitHub Pages (`https://<user>.github.io/cards/`).

Poznámka: Soubor `.nojekyll` je přidaný schválně, aby GitHub Pages publikoval statické soubory bez Jekyll filtrace.

## Rozšíření a úpravy

- Pro přidání nových otázek stačí rozšířit JSON soubory ve složce `json/`.
- Pro úpravu vzhledu upravte `style.css`.
- Pro změnu logiky nebo přidání funkcí editujte `script.js`.

## Autoři a licence

Projekt je určen pro studijní účely. Pokud využíváte části kódu nebo dat, uveďte prosím původního autora.

---

Pokud narazíte na chybu nebo máte návrh na vylepšení, neváhejte projekt rozšířit nebo upravit podle svých potřeb.
