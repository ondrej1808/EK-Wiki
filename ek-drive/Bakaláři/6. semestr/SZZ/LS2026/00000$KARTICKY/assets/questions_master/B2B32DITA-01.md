# Digitální technika (B2B32DITA) - otázka 1

**Oficiální otázka:** Logické funkce, Booleova algebra, logické výrazy. Způsoby vyjadřování logických funkcí. Kombinační a sekvenční logické obvody. Bistabilní paměťové členy: S - R, J - K, T, D.

**Zdroj:** `complete-HEX-compost.pdf`, strany 124-143
## Strana PDF 124
Logické funkce, Booleova algebra, logické výrazy. Způsoby
vyjadřování logických funkcí. Kombinační a sekvenční logické
obvody. Bistabilní paměťové členy: SR, JK, T, D
HEX
Logické funkce
logická proměnná – obecně nezávislá matematická proměnná, která může nabývat konečného
počtu hodnot – dvouhodnotová logika – logická 1 nebo logická 0
logická funkce– představuje soubor pravidel pro jednoznačné přiřazení hodnot závisle proměnných
(funkčních hodnot) k jednotlivým kombinacím nezávislých proměnných (logických proměnných) -
logické funkce obvykle zapisujeme písmenem f s indexem nebo velkými písmeny - pro nproměnných
máme 2n různých kombinací a 22n různých logických funkcí - určitá funkce – jednoznačně určena
hodnota pro všech 2n kombinací proměnných - neurčitá funkce – pro alespoň jednu kombinaci
proměnných není určena funkční hodnota - tím pádem logická funkce může nabývat – logická 1,
logická 0, X – neurčitý stav - v jazyce VHDL definován datový typ std_logic – 9 hodnot (viz VHDL
přednášky)
pravdivostní tabulka – tabulkový výčet kombinací vstupních proměnných a jim odpovídající
funkční hodnota – úplná či neúplná (viz dále)
úplný soubor funkcí – soubor (skupina) elementárních logických funkcí, pomocí nichž lze vyjádřit
libovolnou logickou funkci
minimální úplný soubor funkcí – minimální soubor elementárních logických funkcí, pomocí
nichž lze vyjádřit libovolnou logickou funkci
funkce negace (NOT)
nabývá vždy přesně opačné hodnoty než proměnná a
a f(a)
0 1
1 0
$$
f(a) = a; f(a) =¬a; f(a) = NOT a
$$
1

## Strana PDF 125
logický součin (AND)
hodnota funkce je logická 1 pouze pokud obě vstupní proměnné a, b nabývají hodnoty logická 1,
jinak je její hodnota logická 0
$$
a b f(a\cdot b)
$$
0 0 0
0 1 0
1 0 0
1 1 1
$$
f(a\cdot b) = a∧b= a\cdot b= ab= a AND b
$$
logický součet (OR)
funkce nabývá logické 0 pouze když obě proměnné a, b jsou logické 0, pokud alespoň jedna z nich
má hodnotu logická 1, hodnota funkce je logická 1
a b f(a+ b)
0 0 0
0 1 1
1 0 1
1 1 1
$$
f(a+ b) = a∨b= a+ b= a OR b
$$
2

## Strana PDF 126
exclusive OR (XOR)
tato funkce nabývá hodnoty logická 1 pokud hodnoty obou proměnných jsou navzájem různé, a
hodnoty logická 0 pokud jsou stejné
podobná funkci logického součtu, ale na rozdíl od něj dává funkce logickou 0 pokud a = b = 1
(logický součet dává logickou 1 pro tuto vstupní kombinaci)
a b f(a⊕b)
0 0 0
0 1 1
1 0 1
1 1 0
$$
f(a⊕b) = a⊕b= a\cdot b∨a\cdot b
$$
negace logického součinu (NAND)
funkce negace logického součinu, hodnota funkce je logická 0 pokud obě proměnné a, b nabývají
hodnoty logická 1, v opačném případě je výstup logická 1
přesně opačná funkce k funkci logický součin – negace logického součinu, v literatuře také nazývána
Shefferova funkce
$$
a b f(a\cdot b)
$$
0 0 1
0 1 1
1 0 1
1 1 0
3

## Strana PDF 127
$$
f(a\cdot b) = a∧b= a\cdot b= ab= a NAND b
$$
pozor na správný zápis negace, negace logického součinu a a b není rovna logickému součinu negace
a a negace b!
negace logického součtu (NOR)
opačná funkce k funkci logický součet, její funkční hodnota je logická 1 pouze když obě proměnné
a, b jsou logické 0, jinak je její hodnota logická 0
je to negace logického součtu – NOT OR = NOR, v literatuře též Piercova funkce
a b f(a+ b)
0 0 1
0 1 0
1 0 0
1 1 0
$$
f(a+ b) = a∨b= a+ b= a NOR b
$$
pozor na negaci, negace logického součtu a a b není rovna logickému součtu negace a a negace b!
XNOR
opačná funkce k funkci XOR, její hodnota je logická 1 pokud hodnoty obou vstupních proměnných
a, b jsou shodné, pokud a, b jsou různé, dává logickou 0
negace XOR = XNOR, někdy též funkce ekvivalence
4

## Strana PDF 128
a b f(a⊕b)
0 0 1
0 1 0
1 0 0
1 1 1
$$
f(a⊕b) = a⊕b= a≡b= a\cdot b∨a\cdot b
$$
Booleova algebra
$$
algebra=obecněmatematickýprostorobsahujícídefinicesymbolů,operacíapravidelpromanipulaci
$$
s těmito symboly
Booleova algebra – část algebry zabývající se logickými proměnnými a funkcemi
• definovány dva základní prvky – logická 0 (nepravda), logická 1 (pravda)
• Booleova algebra založena na úplném souboru funkcí – AND, OR, NOT
v Booleově algebře má logický součin vyšší prioritu než logický součet
5

## Strana PDF 129
Logické výrazy
Logický výraz je modelem chování logického systému – hodnoty logické funkce získáme jeho
vyhodnocením pro jednotlivé hodnoty vstupních proměnných. Kromě toho může být také modelem
struktury logického systému – pomocí souboru kontaktních či bezkontaktních prvků lze podle něj
sestavit logický obvod
Zápis logického výrazu obsahuje – kromě logických proměnných a funkce – symboly logických
spojek. Větné spojce „a současně “ (logickému součinu) odpovídá symbol·, spojce „nebo“ (logickému
součtu) symbol „+“ a tvrzení „není pravda, že“ (logická negace) se značí pruhem nad příslušnou
proměnnou.
$$
https://eluc.ikap.cz/verejne/lekce/932
$$
Způsoby vyjadřování logických funkcí
1. Pravdivostní tabulka
2. Zkrácený seznam stavových indexů
3. Algebraický zápis
4. Mapy
Pravdivostní tabulka
tabulkový výčet jednotlivých kombinací nezávislých logických proměnných a jim přiřazených hodnot
dané logické funkce
obvykle přidáváme sloupec stavových indexů N
úplná pravdivostní tabulka – obsahuje všechny kombinace vstupních proměnných pro n vstupních
proměnných obsahuje 2n řádků
neúplná (zkrácená) pravdivostní tabulka – z úplné pravdivostní tabulky vynecháme neurčité stavy
(neurčité stavy zapisujeme X), počet řádků neúplné tabulky ≤2n
pokud dvě logické funkce mají navzájem shodné pravdivostní tabulky, jedná se o identické logické
funkce (a naopak)
pravdivostní tabulka je vhodná pro popis logického obvodu (výstupní funkce), ale nehodí se pro
minimalizaci ani realizaci pomocí hradel
s počtem proměnných n narůstá exponenciálně počet řádků úplné tabulky (2n)
Zkrácený seznam stavových indexů
zkrácený zápis pravdivostní tabulky
seznam indexů N, ve kterých nabývá daná funkce logické 1 nebo neurčitého stavu pro rozlišení
zapisujeme neurčité stavy do závorek
předchozí funkci f můžeme zapsat ve formě zkráceného seznamu stavových indexů:
6

## Strana PDF 130
$$
f = (1),2,3,5,6,7
$$
Algebraický zápis
zápis ve formě funkčního vyjádření pomocí trojice elementárních logických funkcí – log. součtu, log.
součinu a negace a s použitím pravidel a zákonů Booleovy algebry
• nezávislá proměnná – jedna vstupní proměnná funkce v přímém či negovaném tvaru
• podstatný bod – stav, kdy daná funkce nabývá hodnoty logická 1
• nepodstatný bod – stav, kdy funkce nabývá logické 0 nebo neurčitého stavu
• term – jeden výraz obsahující každou nezávislou proměnnou přesně jedenkrát
• součinový term – term obsahující jen operaci logického součinu – vytvořený jako logický
součin vstupních nezávislých proměnných
• součtový term – obdobně, term obsahující jen operaci logický součet
• minterm – součinový term obsahující všechny vstupní nezávislé proměnné právě jednou v
přímém či negovaném tvaru
• maxterm – obdobně, součtový term obsahující všechny proměnné právě jednou
• úplná normální disjunktní forma (ÚNDF) – forma funkce obsahující logické součty
mintermů – součet součinů – v literatuře též Sum of Products, SoP - obsahuje tolik součinů,
kolik má daná funkce podstatných (jednotkových) bodů
• minimální normální disjunktní forma (MNDF) – minimalizovaná forma ÚNDF dané
funkce f, obsahující nejmenší možný počet mintermů
vyjádření funkce pomocí ÚNDF
1. pro každý řádek úplné pravdivostní tabulky dané funkce vytvoříme logický součin funkční
hodnoty fN a vstupních proměnných a, b, c – pokud obsahuje pro daný řádek tabulky
proměnná log. 1, zapíšeme ji přímo, v případě log. 0 zapíšeme její negaci
2. využijeme zákony o neutrálnosti jedničky a agresivity nuly
3. výslednou ÚNDF formu zapíšeme jako součet jednotlivých mintermů
$$
fD = 0\cdot abc∨1\cdot abc∨1\cdot abc∨1\cdot abc∨0\cdot abc∨1\cdot abc∨1\cdot abc∨1\cdot abc
$$
fD = abc∨abc∨abc∨abc∨abc∨abc
převod ÚNDF - ÚNKF
konjunktní formu funkce získáme z těch řádků pravdivostní tabulky, kdy funkce f dává hodnotu
logická 0 nebo neurčitý stav – zákon o neutrálnosti nuly
disjunktní formu funkce získáme z těch řádků pravdivostní tabulky, kdy funkce f dává hodnotu
logická 1 nebo neurčitý stav – zákon o neutrálnosti jedničky
každou funkci f proto můžeme vždy zapsat v její disjunktní i konjunktní formě
1. nahradíme všechny logické součty (∨) pomocí logických součinů (∧) a naopak
2. ve všech výrazech nahradíme jednotlivé proměnné jejich negacemi a naopak
3. musíme vždy převádět úplné formy, tzn. obsahující všechny řádky pravdivostní tabulky funkce
(s hodnotou logická 0 i 1), neurčité stavy ponecháme vždy v obou formách
ÚNDF:
$$
fD = 0\cdot abc∨X\cdot abc∨1\cdot abc∨1\cdot abc∨0\cdot abc∨1\cdot abc∨1\cdot abc∨1\cdot abc=
$$
= abc∨abc∨abc∨abc∨abc∨abc
ÚNKF:
$$
fK = (0 ∨a∨b∨c)\cdot(X∨a∨b∨c)\cdot(1 ∨a∨b∨c)\cdot(1 ∨a∨b∨c)\cdot(0 ∨a∨b∨c)\cdot(1 ∨a∨b∨c) =
$$
7

## Strana PDF 131
$$
= (a∨b∨c)\cdot(a∨b∨c)\cdot(a∨b∨c)
$$
Karnaughovy mapy
existuje více druhů map, Karnaughovy mapy do 6 proměnných nejvhodnější
je to grafická reprezentace funkce f
mapa má vždy 2n políček – kde n je počet nezávislých proměnných funkce - každé políčko v
Karnaughově mapě představuje jeden řádek pravdivostní tabulky - každé políčko v Karnaughově
mapě představuje jeden minterm funkce f
políčka v Karnaughově mapě očíslována pomocí Grayova kódu – indexy navzájem sousedních políček
vyjádřené ve dvojkové soustavě se liší jen na jedné řádové pozici
proměnné v mapě obvykle přiřazujeme od a – LSB až „poslední“ – MSB
oblasti pokrytí mapy jednotlivými proměnnými znázorňujeme po stranách mapy
Karnaughovy mapy užitečné hlavně pro minimalizaci tvaru funkce
Karnaughova mapa 1 proměnné
Karnaughova mapa 2 proměnných
8

## Strana PDF 132
Karnaughova mapa 3 proměnných
Karnaughova mapa 4 proměnných
Karnaughova mapa 5 proměnných
osa symetrie rozděluje mapu na dvě poloviny – levá + pravá část (osově symetrické)
9

## Strana PDF 133
Karnaughovy mapy – sousední políčka
indexy sousedních políček v Karnaughově mapě zapsané ve dvojkové soustavě – změna jen na jedné
řádové pozici – vždy jen jedna proměnná se liší (přímý vs. negovaný tvar)
každá Karnaughova mapa může být přeložena zleva-doprava, seshora-dolů, mapy pro 5 a více
proměnných navíc osy symetrie – políčka z okrajů po složení navzájem sousední
Karnaughovy mapy – zápis funkce pomocí mapy
napíšeme “1” (nebo čáru) do políčka s indexem, ve kterém nabývá funkce logické 1, “X” do políčka,
ve kterém je hodnota funkce neurčitý stav a “0” do políčka s indexem, ve kterém dává funkce
hodnotu logická 0
10

## Strana PDF 134
Kombinační logický obvod (KLO)
obecně logický obvod složený z log. hradel a dalších elementárních prvků, jehož výstupy y1, y2,...,
yn jsou jednoznačně určeny kombinací vstupních hodnot x1, x2, ..., xm
obvod neobsahuje žádný paměťový člen a žádnou zpětnou vazbu!
výstup obvodu y – je v každém okamžiku jednoznačně určen pouze vstupní kombinací!
pro m vstupů a n výstupů – můžeme sestavit pro popis obvodu 2n Booleových rovnic
ideální kombinační logický obvod – jakákoliv změna vstupní hodnoty vyvolá okamžitě změnu
výstupní hodnoty obvodu – do další změny na vstupu je pak výstup konstantní
reálný (nedokonalý) kombinační logický obvod – vlivem doby zpoždění jednotlivých hradel obvodu
se změna vstupu KLO projeví na jeho výstupu se zpožděním
doba zpoždění = časová prodleva mezi okamžikem změny na vstupu do nastavení správného výstupu
obvodu (viz dále doba zpoždění hradel)
nenulová doba zpoždění logických hradel – vznik logických hazardů v obvodech
pro jejich popis a realizaci používáme zejména:
1. algebraické vyjádření – popis funkce obvodu s využitím zákonů Booleovy algebry
2. pravdivostní tabulka – tabulkové vyjmenování výstupů obvodu pro vstupní kombinace
11

## Strana PDF 135
3. schéma obvodu – grafické vyjádření zapojení KLO pomocí elementárních logických hradel a
obvodových prvků
typické příklady KLO
• jednoduché logické operace
• komparátory, paritní kodéry a dekodéry, přepínače
• multiplexory a demultiplexory
• převodníky kódů
• binární kodéry a dekodéry, prioritní kodéry, dekodéry segmentových displejů apod.
• sčítačky, odčítačky, násobičky, děličky
Sekvenční logické obvody (SLO)
$$
sekvenční log. obvod (SLO) = kombinační log. obvod (KLO) + paměť + zpětná vazba
$$
každý SLO je plně určen:
$$
1. konečná množina vstupních stavů: X= {x_{1},x_{2},...,xM }
2. konečná množina výstupních stavů: Y= {y_{1},y_{2},...,yN }
3. konečná množina vnitřních stavů: Q= {q_{1},q_{2},...,qP }
$$
4. konečnámnožinapřechodovýchfunkcíG: Qt+1
$$
= G(Xt
; Qt) = g(xt
$$
1,xt
2,...,xt
m; qt
1,qt
2,...,qt
p)
5. konečná množina výstupních funkcí F:
• obvod typu Mealy Yt+1
$$
= F(Xt
; Qt) = f(xt
$$
1,xt
2,...,xt
m; qt
1,qt
2,...,qt
p)
• obvod typu Moore Yt+1
$$
= F(Qt) = f(qt
$$
1,qt
2,...,qt
p)
Mealy vs. Moore – synchronní režim
• typ Mealy – výstup obvodu závisí na aktuální hodnotě vstupů a vnitřních stavů:
• typ Moore – výstup obvodu závisí pouze na aktuální hodnotě vnitřních stavů:
u synchronního obvodu se vstupní hodnota Xt vyhodnocuje pouze během doby trvání hodinového
impulzu Clk δ (v ideálním obvodu na jeho nekonečně strmou hranu)
ke změně vnitřního stavu obvodu dochází během doby T mezi dvěma po sobě následujícími impulzy
hodinového signálu Clk
v případě asynchronního obvodu – změna vstupní hodnoty přímo způsobí změnu výstupní hodnoty
se zpožděním τ
další změna vstupních hodnot tak musí přijít až po ukončení přechodu do nového vnitřního stavu –
více se asynchronními obvody zabývat nebudeme
12

## Strana PDF 136
Klopný obvod RS (reset-set latch)
2 vstupy: S – Set, R – Reset, 2 výstupy: Q – přímý, Q – negovaný
asynchronní – hradla NOR, NAND, synchronní – řízený hladinou Clk
asynchronní
1. pokud S = logická 1 – Q = logická 1, Q = logická 0 -> jedničková transf.
2. pak S nastavíme na logickou 0 – výstupy se nezmění -> paměťová tr.
3. pak R nastavíme na logickou 1 – Q = logická 0, Q = logická 1 -> nulová tr.
4. pak R vrátíme na logickou 0 – výstupy se nezmění -> paměťová tr.
5. pokud S i R nastavíme na logickou 1 – výstup není určen – zakázaný stav!
13

## Strana PDF 137
Obrázek 1: RS asynchronní – realizace NOR – aktivován logickou 1
Obrázek 2: RS asynchronní – realizace NAND – aktivován logickou 0
14

## Strana PDF 138
synchronní
15

## Strana PDF 139
Klopný obvod JK
Klopný obvod JK – synchronní s hladinovým i hranovým vstupem Clock
• realizuje všechny 4 transformace, pojmenován po svém objeviteli (Jack Kilby)
• pro odstranění zakázaného stavu RS obvodu – doplníme 2 zpětné vazby -> JK obvod
16

## Strana PDF 140
Obrázek 3: Klopný obvod JK
17

## Strana PDF 141
problém základního JK – možnost vícenásobného kmitání (tzv. race-hazard). Problém způsoben
dvojicí zpětných vazeb -> díky zpětným vazbám se změna výstupu obvodu dostane zpět na jeho
vstup -> pokud stále trvá hrana (či hladina) vstupu Clock, způsobí to další překlopení obvodu a
tak dále... -> ve výsledku se výstup obvodu může nekontrolovatelně rozkmitat mezi logickou 1 a 0
• první řešení – zvýšit frekvenci hodinového signálu Clock (zkrátit aktivní dobu obvodu) – ne
vždy možné s ohledem na aplikaci
• druhé řešení – tzv. master-slave zapojení
část master – reaguje na vzestupnou hranu Clock, část slave – sestupná hrana Clock
při vzestupné hraně Clock: - část master aktivní, na výstupech Qm a Qm se objeví příslušný výstup
- vstup části slave však blokován (negace Clock) – slave část neaktivní - zpětné vazby zablokovány
(slave část neaktivní)
při sestupné hraně Clock: - část master neaktivní – na výstupu zůstávají předchozí stavy Qm a Qm
- část slave aktivní – zareaguje na vstupy Qm a Qm - zpětné vazby sice přenesou změnu zpět na
vstup části master – ale ten je neaktivní
Klopný obvod D
synchronní klopný obvod RS, kdy spojíme vstupy R = S , jen jedničková a nulová transf.
1 vstup D – data (delay), obvod D – paměťový člen s omezenou dobou záznamu
obvod D = kopíruje hodnotu ze vstupu D na výstup Q (a negovanou hodnotu na výstup Q) s
každou hranou (hladinou) hodinového vstupu Clock
18

## Strana PDF 142
dočasná paměť – hodnota ze vstupu D se uchová jen do následujícího pulzu Clock
problém hladinového obvodu D – pokud je doba trvání hladiny Clock > doba trvání jedné hodnoty
na vstupu D, tzn. pokud během aktivní doby se změní hodnota vstupu D vícekrát, změní se vícekrát
i výstup a po skončení zůstane uložena jen poslední hodnota ze vstupu (tzv. ripple-through) - řešení
– hranový klopný obvod D – použitím dodatečných hradel (obvykle NAND) a využitím jejich doby
zpoždění zkrátíme trvání Clock – jen krátké pulsy (hrany)
s asynchronními vstupy R (clear) a S (preset)
dva asynchronní vstupy S, R jako pozůstatek původního klopného obvodu RS
vstup D je synchronní – je synchronizován pomocí hodinového vstupu Clock
vstupy S a R jsou asynchronní – oba jsou aktivní v logické 0 a nejsou synchronizovány hodinovým
vstupem Clock! – jejich funkce převáží (má prioritu) nad vstupem D! – proč? podívejte se do
pravdivostní tabulky hradla NAND
Klopný obvod T
vychází z klopného obvodu JK, pouze spojíme dohromady oba vstupy J = K
1 vstup – T, jen transformace paměťová a klopná, T = toggle (překlápění)
klopný obvod T buď jen zaznamenává poslední hodnotu, nebo ji překlápí
19

## Strana PDF 143
Poznámky
• Astabilní -> nemá žádný stabilní stav, obvod kmitá mezi dvěma polohamy, viz časovač 555
• Monostabilní klopný obvod -> má jeden stabilní stav, když ho překlopíš tak se časem vrátí
do jedné tabilní polohy
• Bistabilní klopný obvod -> má dva stabilní stavy, překlápím mezi nimi, vždey zůstane v
jednom sabilním stabu
20
