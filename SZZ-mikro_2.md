# PROTOKOL SZZ-FEL-2026 — v2 (aktualizováno 12. 6. 2026)

**Kód operace:** SZZ-FEL-2026
**Den D:** čtvrtek **18. 6. 2026** (zbývá 6 dní)
**Subjekt:** Ondřej Hlaváček — Elektronika a komunikace, Katedra mikroelektroniky, BP u doc. Vovse
**Zdroje svazku:** ověřené veřejné profily členů komise (odkazy níže), zpravodajství z paralelních radio-komisí (11. 6. 2026 a komise 2025), svazky `analza_komise_szz.pdf` (13 s.) a `komplexni_analyza_szz_fel.pdf` (24 s.), audit studijních materiálů v této wiki.

> Pozn. k revizi v2: opraven termín (16. 6. → 18. 6.), profily přepsány jen na ověřitelná fakta + doložené otázky z minulých komisí. Vyhozeny nepodložené "psychologické profily" a sliby typu "tento krok výslech okamžitě ukončí" — nic takového garantovat nelze. Co zůstalo, je to, co se reálně ptali, co kdo reálně dělá, a kde na to máš materiály.

---

## 1. SLOŽENÍ KOMISE (ověřeno)

| Člen | Katedra | Obor / zkouší | Ověřený profil |
|---|---|---|---|
| doc. Ing. **Petr Pollák**, CSc. | 13131 Teorie obvodů | ZEOA, EO1, SAS, CZS — DSP, zpracování řeči, potlačování šumu | [fel.cvut.cz](https://fel.cvut.cz/cs/fakulta/lide/761-petr-pollak/publikace), [noel.feld](https://noel.feld.cvut.cz/~pollak/) |
| Ing. **Pavel Bezpalec**, Ph.D. | 13132 Telekomunikační technika | DATA, TSI — směrovací protokoly, IP telefonie, lektor NetAcad (Cisco) | [fel.cvut.cz](https://fel.cvut.cz/cs/fakulta/lide/284-pavel-bezpalec/publikace), [comtel](https://comtel.fel.cvut.cz/cs/users/bezpalec), [netacad](https://netacad.fel.cvut.cz/lektor/pavel-bezpalec/) |
| Ing. **Martin Urban**, Ph.D. | 13137 Radioelektronika | AVT, multimédia — zpracování obrazu/videa, kamerové řetězce (skupina MMTG) | [fel.cvut.cz](https://fel.cvut.cz/cs/fakulta/lide/161-martin-urban), [scholar](https://scholar.google.cz/citations?user=fNK5T_wAAAAJ&hl=cs) |
| prof. Ing. **Jan Macháč**, DrSc. | 13117 Elektromagnetické pole | EMPA, ELD — mikrovlnné struktury, metamateriály, IEEE, stovky publikací | [elmag.fel](https://elmag.fel.cvut.cz/en/user/jan-mach%C3%A1%C4%8D/) |
| doc. RNDr. **Jan Voves**, CSc. | 13134 Mikroelektronika | ELPA, MIT — nanostruktury, simulace polovodičů, vedoucí Nanolabu, MFF UK | [fel.cvut.cz](https://fel.cvut.cz/cs/fakulta/lide/316-jan-voves/skolitel), [micro.fel CV](https://micro.fel.cvut.cz/en/cv-jan-voves/) |

**Klíčový fakt:** Voves je vedoucí tvé BP. Vedoucí v komisi standardně nepřitápí; jeho otázka (pokud přijde) bude z polovodičů — tedy z tvého domácího hřiště.

---

## 2. MATICE: ČLEN × OKRUHY × STAV MATERIÁLŮ

| Okruh (odborný) | Primárně zkouší | Materiál ve wiki | Stav |
|---|---|---|---|
| 1–2 ZEOA (MUN, Thévenin, přechodné děje, kmitočtové char.) | Pollák | `SZZ/ZEOA/01`, `SZZ/ZEOA/02` (nové), `assets/questions/B2B31ZEOA.md` | ✅ |
| 19–20 SAS, 23–24 CZS (DFT, prosakování, vzorkování) | Pollák | `SZZ/SAS/19,19a,20`, `SZZ/CZS/23,24` | ✅ silné |
| 9–10 DATA, 29–30 TSI (IP, směrování, vrstvy, PCM, xDSL) | Bezpalec | `B2B32DATA.md`, `B2B32DITA.md` (OSI), `SZZ/TSI/29,30` | ✅ |
| 25–26 AVT (CCD/CMOS, Bayer, měniče) + 21–22 TBK (Friis) | Urban | `B2B37AVT.md` (CCD/CMOS s. 46+, Bayer ř. 173), `SZZ/TBK/21,22` | ✅ |
| 13–16 EMPA + ELD (Gauss, Ampér, rovinná vlna, Snell) | Macháč | `SZZ/EMPA/13,14`, `SZZ/ELD/15,16` | ✅ nejsilnější |
| 11–12 ELPA (PN, BJT, MOSFET, zesilovač, optoelektronika) | Voves | `B2B34ELPA.md` + **nový** `SZZ/ELPA/12` (zesilovač, usměrňovač) | ✅ doplněno 12. 6. |

---

## 3. PROFILY A DOLOŽENÉ OTÁZKY

### 3.1 Pollák (obvody + signály)

**Kdo to je:** dlouholetý člen K13131, výzkumně DSP a řečové technologie (robustní rozpoznávání, potlačování šumu) — proto u státnic kombinuje klasické obvody se spektrální analýzou.

**Doloženo z komisí 2025/26:** elementární metody analýzy obvodů + superpozice + Thévenin/Norton; přechodové děje 1. řádu; MUN/MSP; kmitočtové charakteristiky s určením krajů přenosové funkce limitami; přenos dvojbranu; DFT — vlastnosti, spektrum, prosakování; "vyřešit jednoduchý obvod (U-zdroj, I-zdroj, dva rezistory) vybranou metodou".

**Co mít v ruce:**
- MUN: referenční uzel, $\mathbf{G}\cdot\mathbf{U}=\mathbf{I}$, diagonála = součet vodivostí u uzlu, mimo diagonálu záporné společné vodivosti. Ideální U-zdroj mezi uzly → **superuzel** + vazební rovnice $U_1-U_2=E$.
- Tentýž obvod umět třemi způsoby (MUN, superpozice, Thévenin) — řešený vzor: `SZZ/ZEOA/01`, kap. "Řešený příklad".
- Kraje přenosové funkce limitami: $\omega\to0$ kondenzátor rozpojen / cívka zkrat, $\omega\to\infty$ obráceně → asymptoty Bode. Vzor: `SZZ/ZEOA/02`.
- Prosakování: konečné okno = násobení obdélníkem = konvoluce spektra s Dirichletovým jádrem (sinc); nesplněná periodicita na okrajích → energie do postranních laloků. Náprava: Hamming (−43 dB, 2× širší hlavní lalok), Blackman (−58 dB). Pravoúhlé okno −13 dB. FFT = jen rychlý algoritmus DFT, $O(N\log N)$ místo $O(N^2)$.
- Vzorkování: $f_s > 2f_{max}$, aliasing = zrcadlení přes $f_s/2$, antialiasingový filtr před A/D.

### 3.2 Bezpalec (sítě + telekomunikace)

**Kdo to je:** K13132, Ph.D. 2007, směrovací protokoly a IP telefonie, lektor Cisco NetAcad, 100+ vedených prací. Praktik — chce vidět výpočet a strukturu, ne memorování.

**Doloženo z komisí 2025/26:** IP adresa a maska (výpočet na tabuli); základy směrování — statické vs. dynamické, výhody/nevýhody; vrstvové modely ISO/OSI vs. TCP/IP a komunikace mezi vrstvami; digitalizace hovoru (3 fáze + kvantizační šum); xDSL + obrázek se splittery; celulární sítě.

**Co mít v ruce:**
- Maska: vzor `192.168.1.45/26` → maska `255.255.255.192`, AND po bitech: síť `192.168.1.0`, hosté `.1–.62`, broadcast `.63`, počet hostů $2^{32-26}-2=62$. Umět bleskově binárně.
- Směrování: statické (správce, nulová režie, malé/stub sítě) vs. dynamické (reakce na topologii); Distance-Vector (RIP, hop count, periodicky celé tabulky) vs. Link-State (OSPF, Dijkstra, mapa AS, update jen při změně).
- Vrstvy + zapouzdření: data → segment (porty) → paket (IP) → rámec (MAC+CRC) → bity. Neplést L2/L3. TCP (spojované, handshake SYN/SYN-ACK/ACK, sliding window, 20 B hlavička) vs. UDP (8 B, bez záruk — VoIP, streaming).
- PCM/G.711: pásmo 300–3400 Hz → $f_s=8$ kHz (125 µs), 8 bitů, komprese A-law → **64 kbps** (DS0). Kvantizační šum: SNR ≈ 6 dB/bit.
- xDSL: kroucený pár, DMT — subkanály 4,3125 kHz s QAM; splitter = pasivní výhybka POTS (do 4 kHz) / data (od 25 kHz). Materiál: `SZZ/TSI/29`.

### 3.3 Urban (multimédia + rádio)

**Kdo to je:** K13137, skupina multimediální techniky (MMTG) — zpracování obrazu a videa, kamerové řetězce, barevná metrika. Přímý průnik s tvým zaměřením (průmyslové vidění) — **tady máš největší šanci zazářit**.

**Doloženo z komisí 2025/26:** zpracování obrazu v kameře — optická soustava, barevné filtry, multiplex snímání barev, snímač, Bayerova maska; elektroakustické měniče (kondenzátorový mikrofon, reproduktor — řez); CMOS/CCD; výkonová bilance spoje, návrh antény.

**Co mít v ruce:**
- CCD: náboj v potenciálové jámě, sekvenční přelévání přes posuvné registry do jednoho zesilovače; uniformní, malý FPN, global shutter; pomalé, blooming, spotřeba. CMOS/APS: elektronika v každém pixelu, maticová adresace, ROI, SoC, rychlé; vyšší FPN, rolling shutter. Materiál: `B2B37AVT.md`.
- Bayer RGGB: křemík nerozliší vlnovou délku → mozaika filtrů; 50 % zelené, protože oko má maximum citlivosti ~555 nm (fotopické vidění); rekonstrukce = demosaicing (interpolace).
- Friis: $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$; v dB: $P_r = P_t + G_t + G_r - L_{FSL} - L_p$, $L_{FSL} = 92{,}44 + 20\log R_{km} + 20\log f_{GHz}$. FSL není disipace — čistě geometrické ředění výkonu. Fade margin 20–30 dB. Zisk antény $G=\eta D$. Materiál: `SZZ/TBK/22`.
- Měniče (kdyby navázal na zvuk): elektrodynamický (Lorentz, reproduktor — umět řez: magnet, kmitačka, membrána), kondenzátorový mikrofon (změna kapacity, předpětí). Materiál: `B2B37AVT.md`.

### 3.4 Macháč (pole) — **nejvyšší riziko**

**Kdo to je:** profesor K13117, mezinárodně uznávaný — mikrovlnné struktury, metamateriály, planární antény, IEEE. Teoretický rigorista: vyžaduje přesné rovnice a okrajové podmínky, ne slovní mlžení.

**Doloženo z komisí 2025/26 (katedra pole obecně):** Gaussova věta elektrostatiky + aplikace (odvodit pole náboje, kondenzátor, kapacita); Ampérův zákon obecně + vodič, dva vodiče, magnetizace a feromagnetika; rovinná EM vlna — zápis, charakteristiky, relace E a H; Snellův zákon, totální odraz; interference; Smithův diagram / impedanční přizpůsobení (TBK překryv).

**Co mít v ruce:**
- $\oint_S \vec D\cdot d\vec S = Q$, $\vec D=\varepsilon\vec E$; aplikace na bodový náboj, válec, desky.
- $\oint_C \vec H\cdot d\vec l = I$; vodič: $H = I/2\pi r$, $B=\mu_0 I/2\pi r$; dva vodiče: $F/l = \mu_0 I_1 I_2/2\pi d$, souhlasné proudy se přitahují.
- Rovinná vlna: $\vec E(z,t)=E_0 e^{-\alpha z}\cos(\omega t-\beta z)\vec x$; E ⊥ H ⊥ k, pravotočivá soustava, TEM, E a H ve fázi; $Z_0=\sqrt{\mu_0/\varepsilon_0}=120\pi\approx377\ \Omega$; $\lambda=2\pi/\beta$, $v_f=\omega/\beta$, Poynting $\vec S=\vec E\times\vec H$.
- Snell: $n_1\sin\alpha = n_2\sin\beta$; totální odraz jen z hustšího do řidšího, $\sin\alpha_m=n_2/n_1$; evanescentní vlna; aplikace optická vlákna; Brewster.
- Materiály: `SZZ/EMPA/13,14` + `SZZ/ELD/15,16` — **nejpropracovanější část wiki, projet celé včetně "Co umět u zkoušky".**

### 3.5 Voves (mikroelektronika) — vedoucí BP

**Kdo to je:** K13134, fyzik z MFF UK (pevné látky), CSc. 1992 (simulace součástek), šéf Nanolabu, nanostruktury/grafen/spintronika. Jako vedoucí tvé práce má motivaci, abys uspěl.

**Doloženo z komisí 2025/26 (mikro/ELPA otázky obecně):** struktura MOSFETu (2× Novák); BJT zesilovač — nakreslit, vysvětlit, výstupní charakteristika, rozkmit při daném napájení, pracovní bod graficky; usměrňovač; optoelektronika — VA charakteristika fotodiody, fotovoltaický vs. fotovodivostní režim; proč je na PN přechodu ~0,6 V; LED + předřadný rezistor; součástky detekující světlo; laser.

**Co mít v ruce:**
- BJT: řízen proudem, injekce minoritních nosičů přes tenkou slabě dotovanou bázi, $I_C=\beta I_B$. MOSFET: řízen napětím, gate izolován SiO₂, $I_G\approx0$; nad $V_{th}$ inverze → N-kanál; majoritní součástka → rychlejší spínání. Umět řez NMOS.
- Zesilovač SE: dělič $R_1,R_2$ v bázi, $R_E$ = stejnosměrná záporná ZV (teplotní stabilizace), vazební kondenzátory; **zatěžovací přímka** $i_C=(U_{CC}-u_{CE})/R_C$ do výstupních charakteristik, průsečík s křivkou $I_B$ = pracovní bod Q (ideálně $U_{CE}\approx U_{CC}/2$); rozkmit omezen saturací (~0,2 V) a $U_{CC}$ → oříznutí; SE obrací fázi o 180°. Kompletně s grafy: **`SZZ/ELPA/12`**.
- Usměrňovač: jednocestný/dvoucestný můstek, filtrační kondenzátor, zvlnění — **`SZZ/ELPA/12`**.
- Fotodioda: fotovoltaický režim (bez napětí, pomalý — velká kapacita, solární články) vs. fotovodivostní (závěrné napětí → široká OPN → malá kapacita, lineární, ns odezva — optické komunikace, CMOS pixely). 4. vs. 3. kvadrant VA charakteristiky.
- LED: propustný směr, zářivá rekombinace, $\lambda = hc/E_g$, nutný přímý polovodič (GaAs, GaN; Si je nepřímý). Laser: absorpce / spontánní / stimulovaná emise; inverze populace + rezonátor (Fabry-Perot).

---

## 4. MEZIOBOROVÉ MOSTY (využít, ne přeceňovat)

1. **Senzor → signál → síť:** CMOS snímač (Urban/Voves) → A/D, vzorkování, antialiasing (Pollák) → přenos po IP, TCP vs. UDP (Bezpalec). Tvoje zaměření na průmyslové vidění tento řetězec legitimně otevírá — když dostaneš příležitost, veď odpověď tudy.
2. **Vlna → spoj:** Poyntingův vektor a rovinná vlna (Macháč) → Friis a bilance spoje (Urban). Přechod od teorie k inženýrské praxi ukazuje nadhled.

Mosty fungují jen tehdy, když je základ jistý. Neutíkat do nich z neznalosti — komise to pozná.

---

## 5. ANALÝZA NADĚJE (k 12. 6. 2026)

### Co hraje pro tebe
- **Pokrytí materiálů:** všech 6 zkoušených oblastí má ve wiki přinejmenším solidní podklad; po dnešním doplnění (`SZZ/ZEOA/01`, `SZZ/ZEOA/02`, `SZZ/ELPA/12`) jsou zalátané i dříve identifikované díry (BJT zesilovač s pracovním bodem, usměrňovač, řešený obvod dvě smyčky/dva zdroje).
- **Předvídatelnost:** otázky z komisí 2025 a z radio-komisí 11. 6. 2026 se silně opakují (MUN/Thévenin, IP maska, Ampér + vodič, rovinná vlna, BJT zesilovač, Bayer/CCD). Komise zkouší ze svých kmenových témat — žádný člen historicky neuhýbá mimo svou gesci.
- **Voves jako vedoucí** = jeden z pěti vektorů je de facto přátelský a jeho témata jsou tvoje specializace.
- **Urban × tvoje BP/zaměření** (vidění, kamery) — druhý přirozeně silný vektor.

### Rizika
1. **Macháč** — jediný, kdo vyžaduje bezchybná odvození. Pokud nezvládneš zapsat Gaussa/Ampéra/rovinnou vlnu bez zaváhání, půjde do hloubky. *Protiopatření: EMPA/ELD noty jsou nejsilnější část wiki — věnovat jim 2 z 6 dní.*
2. **Pollákův obvod na tabuli** — chyba ve znaménkách MUN se vidí okamžitě. *Protiopatření: 3× denně přepočítat vzorový příklad ze `SZZ/ZEOA/01` ručně, vč. superuzlu.*
3. **Grafická konstrukce pracovního bodu** — ptali se opakovaně a dosud nebyla v materiálech. *Protiopatření: nový `SZZ/ELPA/12` — nakreslit zpaměti 5× za sebou.*
4. Nervozita u tabule. *Protiopatření platí z v1: po zadání otázky jít k tabuli a začít strukturou (zadání → rovnice → řešení), správná terminologie.*

### Plán D-6 → D-1
| Den | Blok |
|---|---|
| pá 13. 6. | Macháč I: EMPA 13+14 (Gauss, Ampér, kapacita, indukčnost) + odvození ručně |
| so 14. 6. | Macháč II: ELD 15+16 (rovinná vlna, rozhraní, Snell, vlnovody) + TBK 21/22 (Friis, Smith) |
| ne 15. 6. | Pollák: ZEOA 01+02 (obvod 3 metodami, superuzel, Bode, přechodné děje) + CZS 23 (DFT, prosakování, okna) |
| po 16. 6. | Voves: ELPA 12 (BJT/MOSFET, zesilovač + pracovní bod graficky, usměrňovač, fotodioda, LED, laser) |
| út 17. 6. | Bezpalec: maska/směrování/vrstvy/PCM/xDSL (TSI 29/30, DATA, DITA) + Urban: AVT (CCD/CMOS, Bayer, měniče) — lehčí den, večer odpočinek |
| st 18. 6. | **Den D** — ráno jen rychlé "Co umět u zkoušky" sekce, žádné nové učení |

### Verdikt
Témata se opakují, materiály je pokrývají, dva z pěti zkoušejících hrají na tvoji silnou stranu a šest dní stačí na projetí všech šesti bloků. Při dodržení plánu je naděje na úspěch **vysoká**. Jediný scénář vážného problému je nezvládnuté odvození u Macháče — proto dostává největší podíl času.

*Konec svazku v2. Hodně štěstí 18. 6.*
