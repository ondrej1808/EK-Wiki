Logické funkce, Booleova algebra, logické výrazy. Způsoby
vyjadřování logických funkcí. Kombinační a sekvenční logické
obvody. Bistabilní paměťové členy: SR, JK, T, D
HEX
Logické funkce
logická proměnná – obecně nezávislá matematická proměnná, která může nabývat konečného
počtu hodnot – dvouhodnotová logika – logická 1 nebo logická 0
logická funkce–představujesouborpravidelprojednoznačnépřiřazeníhodnotzávisleproměnných
(funkčních hodnot) k jednotlivým kombinacím nezávislých proměnných (logických proměnných) -
logickéfunkceobvyklezapisujemepísmenemf sindexemnebovelkýmipísmeny-pronproměnných
máme 2n různých kombinací a 22n různých logických funkcí - určitá funkce – jednoznačně určena
hodnota pro všech 2n kombinací proměnných - neurčitá funkce – pro alespoň jednu kombinaci
proměnných není určena funkční hodnota - tím pádem logická funkce může nabývat – logická 1,
logická 0, X – neurčitý stav - v jazyce VHDL definován datový typ std_logic – 9 hodnot (viz VHDL
přednášky)
pravdivostní tabulka – tabulkový výčet kombinací vstupních proměnných a jim odpovídající
funkční hodnota – úplná či neúplná (viz dále)
úplný soubor funkcí –soubor(skupina)elementárníchlogickýchfunkcí,pomocínichžlzevyjádřit
libovolnou logickou funkci
minimální úplný soubor funkcí – minimální soubor elementárních logických funkcí, pomocí
nichž lze vyjádřit libovolnou logickou funkci
funkce negace (NOT)
nabývá vždy přesně opačné hodnoty než proměnná a
a f(a)
0 1
1 0
f(a)=a; f(a)=¬a; f(a)=NOT a
1

logický součin (AND)
hodnota funkce je logická 1 pouze pokud obě vstupní proměnné a, b nabývají hodnoty logická 1,
jinak je její hodnota logická 0
a b f(a·b)
0 0 0
0 1 0
1 0 0
1 1 1
f(a·b)=a∧b=a·b=ab=a AND b
logický součet (OR)
funkce nabývá logické 0 pouze když obě proměnné a, b jsou logické 0, pokud alespoň jedna z nich
má hodnotu logická 1, hodnota funkce je logická 1
a b f(a+b)
0 0 0
0 1 1
1 0 1
1 1 1
f(a+b)=a∨b=a+b=a OR b
2

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
f(a⊕b)=a⊕b=a·b∨a·b
negace logického součinu (NAND)
funkce negace logického součinu, hodnota funkce je logická 0 pokud obě proměnné a, b nabývají
hodnoty logická 1, v opačném případě je výstup logická 1
přesně opačná funkce k funkci logický součin – negace logického součinu, v literatuře také nazývána
Shefferova funkce
a b f(a·b)
0 0 1
0 1 1
1 0 1
1 1 0
3

f(a·b)=a∧b=a·b=ab=a NAND b
pozor na správný zápis negace, negace logického součinu a a b není rovna logickému součinu negace
a a negace b!
negace logického součtu (NOR)
opačná funkce k funkci logický součet, její funkční hodnota je logická 1 pouze když obě proměnné
a, b jsou logické 0, jinak je její hodnota logická 0
je to negace logického součtu – NOT OR = NOR, v literatuře též Piercova funkce
a b f(a+b)
0 0 1
0 1 0
1 0 0
1 1 0
f(a+b)=a∨b=a+b=a NOR b
pozor na negaci, negace logického součtu a a b není rovna logickému součtu negace a a negace b!
XNOR
opačná funkce k funkci XOR, její hodnota je logická 1 pokud hodnoty obou vstupních proměnných
a, b jsou shodné, pokud a, b jsou různé, dává logickou 0
negace XOR = XNOR, někdy též funkce ekvivalence
4

a b f(a⊕b)
0 0 1
0 1 0
1 0 0
1 1 1
f(a⊕b)=a⊕b=a≡b=a·b∨a·b
Booleova algebra
algebra=obecněmatematickýprostorobsahujícídefinicesymbolů,operacíapravidelpromanipulaci
s těmito symboly
Booleova algebra – část algebry zabývající se logickými proměnnými a funkcemi
• definovány dva základní prvky – logická 0 (nepravda), logická 1 (pravda)
• Booleova algebra založena na úplném souboru funkcí – AND, OR, NOT
v Booleově algebře má logický součin vyšší prioritu než logický součet
5

Logické výrazy
Logický výraz je modelem chování logického systému – hodnoty logické funkce získáme jeho
vyhodnocením pro jednotlivé hodnoty vstupních proměnných. Kromě toho může být také modelem
struktury logického systému – pomocí souboru kontaktních či bezkontaktních prvků lze podle něj
sestavit logický obvod
Zápis logického výrazu obsahuje – kromě logických proměnných a funkce – symboly logických
spojek.Větnéspojce„a současně“(logickému součinu)odpovídásymbol·,spojce„nebo“(logickému
součtu) symbol „+“ a tvrzení „není pravda, že“ (logická negace) se značí pruhem nad příslušnou
proměnnou.
https://eluc.ikap.cz/verejne/lekce/932
Způsoby vyjadřování logických funkcí
1. Pravdivostní tabulka
2. Zkrácený seznam stavových indexů
3. Algebraický zápis
4. Mapy
Pravdivostní tabulka
tabulkovývýčetjednotlivýchkombinacínezávislýchlogickýchproměnnýchajimpřiřazenýchhodnot
dané logické funkce
obvykle přidáváme sloupec stavových indexů N
úplná pravdivostní tabulka – obsahuje všechny kombinace vstupních proměnných pro n vstupních
proměnných obsahuje 2n řádků
neúplná (zkrácená) pravdivostní tabulka – z úplné pravdivostní tabulky vynecháme neurčité stavy
(neurčité stavy zapisujeme X), počet řádků neúplné tabulky ≤ 2n
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

f =(1),2,3,5,6,7
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
hodnoty f a vstupních proměnných a, b, c – pokud obsahuje pro daný řádek tabulky
N
proměnná log. 1, zapíšeme ji přímo, v případě log. 0 zapíšeme její negaci
2. využijeme zákony o neutrálnosti jedničky a agresivity nuly
3. výslednou ÚNDF formu zapíšeme jako součet jednotlivých mintermů
f =0·abc∨1·abc∨1·abc∨1·abc∨0·abc∨1·abc∨1·abc∨1·abc
D
f =abc∨abc∨abc∨abc∨abc∨abc
D
převod ÚNDF - ÚNKF
konjunktní formu funkce získáme z těch řádků pravdivostní tabulky, kdy funkce f dává hodnotu
logická 0 nebo neurčitý stav – zákon o neutrálnosti nuly
disjunktní formu funkce získáme z těch řádků pravdivostní tabulky, kdy funkce f dává hodnotu
logická 1 nebo neurčitý stav – zákon o neutrálnosti jedničky
každou funkci f proto můžeme vždy zapsat v její disjunktní i konjunktní formě
1. nahradíme všechny logické součty (∨) pomocí logických součinů (∧) a naopak
2. ve všech výrazech nahradíme jednotlivé proměnné jejich negacemi a naopak
3. musímevždypřevádětúplnéformy,tzn.obsahujícívšechnyřádkypravdivostnítabulkyfunkce
(s hodnotou logická 0 i 1), neurčité stavy ponecháme vždy v obou formách
ÚNDF:
f =0·abc∨X·abc∨1·abc∨1·abc∨0·abc∨1·abc∨1·abc∨1·abc=
D
=abc∨abc∨abc∨abc∨abc∨abc
ÚNKF:
f =(0∨a∨b∨c)·(X∨a∨b∨c)·(1∨a∨b∨c)·(1∨a∨b∨c)·(0∨a∨b∨c)·(1∨a∨b∨c)=
K
7

=(a∨b∨c)·(a∨b∨c)·(a∨b∨c)
Karnaughovy mapy
existuje více druhů map, Karnaughovy mapy do 6 proměnných nejvhodnější
je to grafická reprezentace funkce f
mapa má vždy 2n políček – kde n je počet nezávislých proměnných funkce - každé políčko v
Karnaughově mapě představuje jeden řádek pravdivostní tabulky - každé políčko v Karnaughově
mapě představuje jeden minterm funkce f
políčkavKarnaughověmapěočíslovánapomocíGrayovakódu–indexynavzájemsousedníchpolíček
vyjádřené ve dvojkové soustavě se liší jen na jedné řádové pozici
proměnné v mapě obvykle přiřazujeme od a – LSB až „poslední“ – MSB
oblasti pokrytí mapy jednotlivými proměnnými znázorňujeme po stranách mapy
Karnaughovy mapy užitečné hlavně pro minimalizaci tvaru funkce
Karnaughova mapa 1 proměnné
Karnaughova mapa 2 proměnných
8

Karnaughova mapa 3 proměnných
Karnaughova mapa 4 proměnných
Karnaughova mapa 5 proměnných
osa symetrie rozděluje mapu na dvě poloviny – levá + pravá část (osově symetrické)
9

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
dobazpoždění=časováprodlevameziokamžikemzměnynavstupudonastavenísprávnéhovýstupu
obvodu (viz dále doba zpoždění hradel)
nenulová doba zpoždění logických hradel – vznik logických hazardů v obvodech
pro jejich popis a realizaci používáme zejména:
1. algebraické vyjádření – popis funkce obvodu s využitím zákonů Booleovy algebry
2. pravdivostní tabulka – tabulkové vyjmenování výstupů obvodu pro vstupní kombinace
11

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
sekvenční log. obvod (SLO) = kombinační log. obvod (KLO) + paměť + zpětná vazba
každý SLO je plně určen:
1. konečná množina vstupních stavů: X={x ,x ,...,x }
1 2 M
2. konečná množina výstupních stavů: Y={y ,y ,...,y }
1 2 N
3. konečná množina vnitřních stavů: Q={q ,q ,...,q }
1 2 P
4. konečnámnožinapřechodovýchfunkcíG:Qt+1 =G(Xt;Qt)=g(xt,xt,...,xt ;qt,qt,...,qt)
1 2 m 1 2 p
5. konečná množina výstupních funkcí F:
• obvod typu Mealy Yt+1 =F(Xt;Qt)=f(xt,xt,...,xt ;qt,qt,...,qt)
1 2 m 1 2 p
• obvod typu Moore Yt+1 =F(Qt)=f(qt,qt,...,qt)
1 2 p
Mealy vs. Moore – synchronní režim
• typ Mealy – výstup obvodu závisí na aktuální hodnotě vstupů a vnitřních stavů:
• typ Moore – výstup obvodu závisí pouze na aktuální hodnotě vnitřních stavů:
u synchronního obvodu se vstupní hodnota X vyhodnocuje pouze během doby trvání hodinového
t
impulzu Clk δ (v ideálním obvodu na jeho nekonečně strmou hranu)
ke změně vnitřního stavu obvodu dochází během doby T mezi dvěma po sobě následujícími impulzy
hodinového signálu Clk
v případě asynchronního obvodu – změna vstupní hodnoty přímo způsobí změnu výstupní hodnoty
se zpožděním τ
další změna vstupních hodnot tak musí přijít až po ukončení přechodu do nového vnitřního stavu –
více se asynchronními obvody zabývat nebudeme
12

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

Obrázek 1: RS asynchronní – realizace NOR – aktivován logickou 1
Obrázek 2: RS asynchronní – realizace NAND – aktivován logickou 0
14

U
U
©
E
=-
©
W
|
©
Fw)

Klopný obvod JK
Klopný obvod JK – synchronní s hladinovým i hranovým vstupem Clock
• realizuje všechny 4 transformace, pojmenován po svém objeviteli (Jack Kilby)
• pro odstranění zakázaného stavu RS obvodu – doplníme 2 zpětné vazby -> JK obvod
16

Obrázek 3: Klopný obvod JK

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

dočasná paměť – hodnota ze vstupu D se uchová jen do následujícího pulzu Clock
problém hladinového obvodu D – pokud je doba trvání hladiny Clock > doba trvání jedné hodnoty
navstupuD,tzn.pokudběhemaktivnídobysezměníhodnotavstupuDvícekrát,změnísevícekrát
i výstup a po skončení zůstane uložena jen poslední hodnota ze vstupu (tzv.ripple-through) - řešení
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

Poznámky
• Astabilní -> nemá žádný stabilní stav, obvod kmitá mezi dvěma polohamy, viz časovač 555
• Monostabilní klopný obvod -> má jeden stabilní stav, když ho překlopíš tak se časem vrátí
do jedné tabilní polohy
• Bistabilní klopný obvod -> má dva stabilní stavy, překlápím mezi nimi, vždey zůstane v
jednom sabilním stabu
20

Multiplexory, dekodéry, čítače, registry, posuvné registry a
paměti. Programovatelné logické obvody, hradlová pole, jazyk
VHDL
HEX
Multiplexory
obecně, kombinační obvod, který přepíná jeden z n vstupů do jednoho společného výstupu na
základě stavu řídícího vstupu
zjednodušeně–programovatelnýpřepínač,kterýlzepřepnoutmeziněkolikarůznýmivstupypomocí
řídícího mechanismu
demultiplexor (demux) má přesně opačnou funkci – řízené přepínání jednoho datového vstupu do n
výstupů
vjazyceVHDL,multiplexorjednoduševytvořímepomocípodmíněnéhopřiřazování–řadamožností,
viz další přednášky
příklad – nejjednodušší 2vstupý multiplexor, 2 na 1
2 datové vstupy – a, b, 1 řídící vstup – c, 1 výstup – Q, popis funkce:
pokud je c = 0 -> výstup je přepnut Q = a, pokud je c = 1 -> výstup je přepnut Q = b
1

dekodéry
V číslicové technice jsou informace zobrazeny ve tvaru čísel, písmen a dalších značek, které jsou
vyjádřeny v určitém zakódovaném tvaru, převážně jako skupiny nul a jedniček. Kód je pravidlo,
podle kterého přiřazujeme určité kombinaci nul a jedniček určité číslo (znak) a naopak. Kódové
slovo je kombinace bitů zobrazujících určitý znak. Kódování je přiřazování kódových slov určitým
znakům.
Protoževrůznýchzařízeníchmůžebýtvýhodnétutéžinformacivyjádřitvrůznýchmístechodlišnými
kódy, vzniká nutnost převodu informace z jednoho kódu do jiného kódu. To umožňují převodníky
(měniče, konvertory) kódů.V praxi se používá velké množství kódů. Každý kód má své výhody i
nevýhody. Kódy se používají při aritmetických operacích a při přenosu dat.
Kodér (enkodér) je zařízení s mnoha vstupy a výstupy, které automaticky převádí informace z
původního nebo přirozeného souboru znaků do jiného (provádí zakódování informace). V užším
slova smyslu je kodér zařízení pro převod desítkových čísel do binárního kódu.
Dekodér je zařízení s mnoha vstupy a výstupy, sloužící pro automatický převod informací z jednoho
kódu do jiného; má opačnou funkci než kodér. V užším slova smyslu je to zařízení pro převod
2

binárního čísla na desítkové číslo.
https://www.eluc.ikap.cz/verejne/lekce/485
čítače
obvody čítající požadované výskyty v průběhu dané sekvence – obvykle vzestupné či sestupné hrany
vstupního signálu -> výstupem je kódové vyjádření načítaného počtu
výstup obvykle v binárním kódu, ale např. i Grayův kód apod.
čítač modulo N = čítající v intervalu hodnot 0 až N-1
každý 1 bitový řád čítače = 1 klopný obvod –> čítač modulo N = log N klopných obvodů (kde N
2
je nejbližší vyšší mocnina 2)
synchronní čítač vs. asynchronní čítač - dle způsobu distribuce buzení (hodinového taktu)
vzestupný čítač vs. sestupný čítač vs. obousměrný čítač - dle směru čítání (přičítání, odečítání,
volitelný směr)
dodatečné vstupy – blokování (enable), nulování, nastavení. tyto vstupy mohou být synchronní
nebo asynchronní
konstrukce čítačů – klopné obvody D nebo JK (různé výhody, nevýhody)
ideálníčítač(synchronní,asynchronní)vs.reálnýčítač-všechnyKOpoužitévčítačinejsoudokonale
stejné – malé odchylky - vliv zpoždění cest (šíření signálů) – konečná rychlost šíření signálů
Asynchronní čítač
vnější hodinový signál Clock je připojen pouze na vstup prvního klopného obvodu, hodinové vstupy
všech dalších jsou připojeny na výstup předchozího klopného obvodu
buzení se tak šíří postupně -> nejprve překlopí první KO, po jeho překlopení druhý, po jeho
překlopení třetí... nevýhoda – tzv. ripple-effect
T – doba zpoždění (překlopení) jednoho KO -> n-bitový čítač = n x T celkové zpoždění
pokud je perioda vstupního signálu Clock < n x T -> výstup čítače se nestihne ustálit před
příchodem další hrany Clock -> nestabilní stav čítače, nelze jeho hodnotu odečíst
výhoda – pro konstrukci čítače si vystačíme jen s klopnými obvody (D, JK), nejsou potřeba žádná
jiná hradla -> jednoduchá konstrukce, menší plocha, menší spotřeba
základem je D klopný obvod se zpětnou vazbou, nebo JK se spojenými vstupy – dělič 2
3

výstup Q představuje signál s poloviční frekvencí (dvojnásobnou periodou) v porovnání se vstupem
Clock
kaskádním řazením n-stupňů (D či JK) obdržíme n-bitový asynchronní čítač
Synchronní čítač
idea realizace – klopný obvod může překlopit do logické 1 až v případě, že všechny předchozí klopné
obvody jsou ve stavu logické 1 – to zajistí hradla AND
vlastnosti – všechny KO připojeny přímo ke zdroji hodinového signálu (buzení) Clock -> překlopení
všech n KO v jeden okamžik = zpoždění jen 1 x T (nezávisí na n)
výhoda – rychlost čítání (ideálně žádný ripple-effect a nestabilní stav)
nevýhoda – nutnost použít dodatečná hradla (AND), větší složitost zapojení
4

logická 1

(Vcc)

Obrázek 1: příklad 3bitového (modulo 8), realizace z D i JK obvodů

Obrázek 2: příklad 3bitového (modulo 8), realizace z JK obvodů
synchronní vs. asynchronní Reset (nulování), blokování (Enable)
využití asynchronních vstupů Set a Reset klopných obvodů
můžeme je dodatečně připojit (synchronizovat) s hodinovým vstupem Clock
čítač s asynchronním resetováním vs. čítač se synchronním resetováním, asynchronní vstup Reset
nezávislý na stavu hodinového vstupu Clock -> proveden okamžitě, synchronní vstup Reset závislý
na Clock -> proveden až při detekci vzestupné (sestupné) hrany hodinového vstupu
Obrázek 3: asynchronní Reset
výhoda – okamžité provedení (zpoždění T)
nevýhoda – výstup po Resetu je asynchronní (pokud je následující připojený obvod synchronní –
problém)
6

Obrázek 4: synchronní Reset
výhoda – výstup čítače zůstává plně synchronní
nevýhoda – zpoždění dané čekáním na hranu Clock
registry
4 základní varianty dle způsobu čtení a zápisu – PIPO, SISO, SIPO, PISO
základem jsou klopné obvody D nebo JK
registry můžeme doplnit např. o možnost nulování (mazání), posuvu o n-bitových pozic vlevo či
vpravo, provádění jednoduchých operací (XOR) apod.
Programovatelné logické obvody, hradlová pole
VHDL = VHSIC Hardware Description Language
VHSIC = Very High Speed Integrated Circuits – rychlé integrované obvody, FPGA, CPLD, ....
HDL – Hardware Description Language – nejedná se o programovací jazyk! v jazyce VHDL nepro-
gramujeme!, navrhujeme, simulujeme, provádíme syntézu digitálních obvodů tím, že je popisujeme
– description language = jazyk pro popis!
rodina HDL jazyků – dnes hlavně VHDL (akademická sféra, Evropa) a Verilog (průmysl, USA)
7

Obrázek 5: parallel in-parallel out, PIPO – paměť s paralelním vstupem a paralelním výstupem
Obrázek 6: serial in-serial out, SISO – sériová paměť (zpožďovací článek – výstup n x zpožděn)
Obrázek 7: serial in-parallel out, SIPO – sériová paměť s paralelním čtením při zaplnění
8

Obrázek 8: parallel in-serial out, PISO – serializér, převod paralelních toků do sériového výstupu
bližší pohled na FPGA – co je uvnitř a jak funguje?
9

základy architektury a principy jsou stejné u různých výrobců, ale každý přidává vlastní modifikace
a úpravy – i jednotlivé řady jednoho výrobce se liší (výkon, cena...)
FPGA jsou běžné integrované obvody, vyráběné běžnou technologií, v pouzdru
• IO bloky – Vstupní/Výstupní Bloky – pro připojení vstupů/výstupů pole a vnitřních částí
FPGA s vnějšími periferiemi, obvykle obsahují registry, multiplexory, budiče, invertory,
nastavitelné pull-up a úrovně...
• LAB bloky – Logic Array Blocks – základní část FPGA obsahující LUT tabulky a provádějící
logické operace
• PSM – Programmable Switch Matrix – programovatelná matice cest a propojů
• Paměťové bloky – bloky pamětí typu RAM (volatilní) použitelné pro různé účely
• Násobičky – bloky provádějící různé aritmetické operace, zejména násobení
• Distribuceapráceshodinovýmsignálem–PLLfázovézávěsy,cestyprodistribucihodinového
taktu
• ADC – Analog/Digital Converter – převodníky analogových-digitálních signálů, umožňují
FPGA komunikovat a pracovat s analogovými signály (např. analogové senzory veličin,
analogové periferie apod.)
• Vnitřní FLASH paměť – UFM (User Flash Memory) a CFM (Configuration Flash Memory),
paměti pro uložení konfigurace a naprogramování FPGA pole, nevolatilní paměť, obvykle
JTAG rozhraní pro přístup
často navíc obsahují – CPU (moderní procesory typu ARM), DSP (Digital Signal Processing units
– signálové procesory), různé řadiče a kontroléry (USB, Ethernet, DRAM...) a spoustu jiných
10

LAB jsou obklopeny a navzájem odděleny horizontálními i vertikálními signálovými cestami –
metalickými propoji
soubor všech těchto cest a propojů a jejich ovládání tvoří matici PSM – Programmable Switch
Matrix
jedna z předností FPGA – snadné a propracované propojování bloků FPGA
dnes v průměru až 75% plochy FPGA čipu tvoří matice cest a propojů (PSM) a pouze 25% plochy
zbývá na samotné bloky pro syntézu logických funkcí LAB!
jazyk VHDL
Model logického obvodu -> RTL model (Register Transfer Level) -> Hradla
• nejprve v jazyce VHDL vytvoříme model (popis) logického obvodu – více možností: model
chování, model činnosti (pomocí Booleových rovnic), model zapojení
• druhý krok syntéza – syntezátor převede náš model na tzv. RTL model (model činnosti
obvodu) a z něj vygeneruje „zapojení“ obvodu na úrovni hradel
• ve fázi syntézy – můžeme definovat dílčí parametry, optimalizace (z hlediska zpoždění, počtu
hradel,...), dodatečné podmínky
• v jazyce VHDL můžeme rovněž obvody simulovat – v jednotlivých fázích: simulace chování,
simulace činnosti, simulace zapojení...
• poslední krok – implementace obvodu do cílového HW
11

v jazyce VHDL 3 úrovně abstrakce = 3 způsoby modelování logických obvodů
• Behaviorální popis – model chování obvodu
• Dataflow popis (RTL) – model činnosti obvodu
• Strukturální popis – model zapojení obvodu
Behaviorální popis – modelování chování obvodu
nejvyšší úroveň abstrakce
„programátorský“ způsob – obvykle nejjednodušší a rychlý způsob popisu, flexibilní
modelovaný obvod je „black box“ – nevíme z čeho se skládá, neznáme jeho zapojení
známe ale chování obvodu – známe výstupy obvodu při jednotlivých vstupních kombinacích –>
umíme vyjádřit chování (reakci) obvodu při daném buzení vstupů
implementace obvodu do výsledného HW je ale vždy založena na vygenerovaném zapojení hradel
(netlist) –> to za nás musí v tomto případě udělat syntezátor
nevýhoda – neznáme zapojení obvodu, nemůžeme zkontrolovat zda syntezátor správně pochopil
náš model – jednoduše při drobné změně popisu chování můžeme vytvořit zcela jiný obvod, nebo
zbytečně složitý obvod apod.
nad procesem syntézy máme jen velmi malou kontrolu, vše dělá syntezátor automaticky
je potřeba dodržet doporučený model popisu obvod (např. čítače, sčítačky, násobičky, stavového
automatu...) – máme jistotu, že jej syntezátor správně implementuje
příklad – asynchronní klopný obvod RS
if S = 1 a R = 0 pak Q = 1 a nonQ = 0 (jedničková transformace)
if S = 0 a R = 1 pak Q = 0 a nonQ = 1 (nulová transformace)
if S = 0 a R = 0 pak Q = Q a nonQ = nonQ (paměťová transformace)
if S = 1 a R = 1 pak Q = X and nonQ = X (zakázaný stav) – ošetření si ukážeme později
Dataflow (RTL) popis – modelování činnosti obvodu
střední úroveň abstrakce
RTL = Register Transfer Level = modelování obvodu na úrovni registrů
registry propojené kombinační logikou
opět neznáme přesné zapojení obvodu – ale známe činnost obvodu -> víme, jaké logické operace
jsou prováděny se vstupními proměnnými, dokážeme zapsat činnost obvodu pomocí Boolových
rovnic
syntezátor ve VHDL stále za nás automaticky vygeneruje zapojení obvodu (netlist) – ale v tomto
případě víme víc o struktuře obvodu (známe použité logické operace)
nižší šance, že syntezátor vytvoří chybný obvod než v případě behaviorálního popisu, máme tak
určitou (omezenou) kontrolu nad procesem implementace
snáze můžeme implementovat úpravy a modifikace obvodu
stejný příklad – asynchronní klopný obvod RS
Q = R NOR nonQ
nonQ = S NOR Q
Strukturální popis – modelování zapojení obvodu
nejnižší úroveň abstrakce, přesně známe vnitřní stavbu obvodu – známe použitá logická hradla a
jejich zapojení, dokážeme sami vygenerovat jejich seznam (netlist)
maximální kontrola nad procesem syntézy a implementace – sami můžeme optimalizovat zapojení
obvodu z hlediska zpoždění, spotřeby, počtu hradel...
sami vytvoříme model zapojení obvodu – syntezátor jej pouze převede na netlist
12

obvyklenejnáročnějšízpůsobpopisu(načasadélkukódu),přidrobnézměněfunkceobvoduobvykle
musíme provést rozsáhlé změny kódu, méně flexibilní způsob
opět stejný příklad – asynchronní klopný obvod RS
• nejprve vytvoříme jedno elementární hradlo NOR
• dálepoužijeme2tatohradlaNORanavzájemjepropojímedostrukturyRSklopnéhoobvodu
(definujeme tzv. signály VHDL – „dráty“ v obvodu)
• poslední krok, definujeme propojení vstupů a výstupů hradel NOR k vstupům a výstupům
RS klopného obvodu
13

Vrstvové modely datové komunikace. Topologie sítě a její popis
pomocí grafů. Lokální datové sítě a metody přístupu k médiu.
HEX
Vrstvové modely datové komunikace
Jednotlivé funkcionality jsou rozděleny do samostatných vrstev. Každá vrstva může pouze komu-
nikovat s vrstvou v její bezprostřední blízkosti (nahoře/dole). Při komunikaci se tak informace
chovají jako balíčky z Číny, nejdřív se vezme balík, nalepí se na něj cedulka, která se po cestě ještě
několikrát přelepí a ty pak doma odloupáváš cedulky protože tě zajímá kudy to šlo. Každá vrstva
tak v dalším uzlu může komunikovat pouze se stejnou vrstvou (např. síťová - síťová).
Obrázek 1: Komunikace mezi systémy
referenční modely: - ISO/OSI - TCP/IP
Referenční model ISO/OSI
Reakce na vznik proprietárních standardů -> pokus vytvořit univerzální síťovou architekturu, což
se moc nepovedlo. Je vhodný pouze jako síťový model, bez protokolů, ty byly vyvíjeny dodatečně
shodné funkce ve shodných vrstvách
7 vrstev -> zdá se, že to je zbytečně moc
Fyzická vrstva - zajišťuje přenos bitových posloupností fyzikálním prostředím (kódování, časování,
synchronizace, popř. modulace)
1

(ooeyijde
BU 2UBA0JU9UIO)
ÁMSIA 1UJBMIdY

—„———>b-

řizpůsobovací
vrstva

P

bi

Transportní

(1ep souaad
BU 9UBAOJUJIJO)
ÁMAJSIA
DAOSOUAIL

—„———>-

Obrázek 2: RM OSI

Obrázek 3: RM OSI
Spojová vrstva - definuje rámec = blok dat, topologie sítě, fyzickou adresu; zajišťuje zabezpečený
přenos rámců, detekce popř. korekce chyb (parita, CRC, FCS), spolehlivý přenos rámců (ARQ,
metoda okna), přístup k médiu, synchronizace na úrovni rámců, rozpoznání začátku rámce
Síťová vrstva - zajišťuje doručení bloků dat (paketů) -> k adresátovi, nalezení optimální cesty
přes mezilehlé uzly (směrovače), směrování (routing); označení uzlů adresami (logickými) -> IP
adresa, X.25 adresa
Topologie sítě
Je to způsob vzájemného propojení prvků v síti. Každé propojení má své výhody a nevýhody.
Mesh topology
Každé zařízení je spojené sjinýmzařízením vlastnímkanálem. Výhodou je velmi rychlá komunikace
mezijednotlivýmibodyarobusnost.Pokudseobjevíchybananějakémspojijejednoduchéjiobejít,
takže je komunikace velmi spolehlivá. Nevýhodou je velký počet spojů které je nutné realizovat,
takže je to drahý na instalaci i údržbu.
Star topology
Všechny body jsou spojeny s jedním centrálním bodem, kterému se říká “hub”. Výhodou je
jednoduchá realizace, každé zařízení je připojeno pouze jedním spojem. Pokud nastane chyba ve
spoji je velmi jednoduše odhalitelná a nedostupné je pouze jedno zařízení. Hlavní nevýhodou je
jeden centrální bod poruchy při kterém dojde ke kompletnímu znefunkčnění sítě. Výkon (rychlost)
celé sítě je pak limitován tímto centrálním bodem. Dále je tento typ sítě drahá na instalaci.
Bus topology
Každé zařízení je připojeno k jednomu centrálnímu vedení. Jde o obousměrné vícebodové vedení.
Takhle fungoval starý Ethernet, k realizaci se používali koaxiální kabely. Nepotřebuje mezi spoji
žádnéprvky.Jehojednoduchostjevšakijehonevýhodou,připoruše(např.kdyžvkancluzaměstnáš
gothičku, ona si vezme boty s okovy a přešlápne ti kabel) se síť rozpadá na víc podsítí. Rovněž je k
realizaci potřeba hodně kabelu.
3

Obrázek 4: Zapojení topologií
Ring topology
Každé zařízení je spojeno s dvěma sousedními zařízeními. Většinou bývá jednosměrné, ale může
být i obousměrné. Lze dosahovat velkých přenosových rychlostí a je malá pravděpodobnost kolize.
Je levné na instalaci a rozšiřování. Pokud je jednosměrná pak při přerušení jednoho spoje může
přerušitkomunikacivcelésíti.Pokudjeobousměrnápakpřipřerušeníjednohospojeexistujedruhá
záložní cesta a všechna zařízení vesele fungují dál.
Hierarchical (tree) topology
Síť se postupně větví od jednoho prvku. Výhodou je že může být propojeno hodně zařízením jedním
centrálním bodem. Koncové body mohou být od sebe odděleny a je tak možnost zvýšit bezpečnost.
Nevýhodou je znovu jeden centrální bod poruchy.
Hybrid
Jednotlivé topologie je možné kombinovat a vytvářet tak nechutný cursed sítě, který nedávají smysl.
Lokální datové sítě
Je to prostředek datové komunikace, pracují na fyzické a spojové vrstvě modelu OSI, mají lokální
(místní) charakter -> většinou byt nebo dům, jen pár uživatelů. Podporují přístup k mediu a
adresování.
Vývoj
• jednosegmentové sítě
• vícesegmentové sítě s opakovači - opakovač, repeater
• vícesegmentové sítě s mosty - most, bridge
• vícesegmentové sítě s přepínači - přepínač, switch, L2 switch
• vícesegmentové sítě s VLAN přepínači - L2 switch
4

• vícesegmentové sítě s přepínači na více vrstvách - L2, L3 ... L7 switch
Klíčové komponenty datové sítě
Obrázek 5: Klíčové komponenty datové sítě
Hub
Rozbočovač je asi to nejjednodušší zařízení co je. Je to jenom impedančně přizpůsobená rozbočka
kabelů, vlastně jako kdybych dráty fyzicky svázal k sobě. Pracuje na fyzické vrstvě OSI modelu.
Signály detekované na jednom portu replikuje na portu ostatní. Repeater je dvouportový hub.
Přepínače – Switches
Pracují na druhé vrstvě OSI modelu. Na svých portech přijímají všechny rámce. Záhlaví (zdrojová
a cílová adresa) slouží ke správné funkci přepínače. Data jsou pro přepínač transparentní.
Jsou různé metody přeposílání a pamatování si kam chci přeposlat. Metody přeposílání: Store and
Forward, Cut Through, Fragment Free. Jde o to jak bude přepínač fungovat. Data můžou být
dlouhá a tak by k jejich dočasnému uschovaní před přeposláním šla využít například fronta. Abych
nepotřeboval tak velkou frontu tak je můžu rozsekat na kousky a brát to vždy po kouskách.
VLAN Logicky segmentuje přepínanou síť -> oddělení logické topologie od fyzické. Umožňují
segmentaci služeb dříve realizováno až směrovači. Řeší problémy s bezpečností, správou sítí, pro-
pustností dat, škálovatelností adres. Propojovací spoj mezi přepínači přes který jde více VLAN se
nazývá trunk.
Přepínač má více portů. Untagged porty jsou porty kde není VLAN hlavička odesílaná. Většinou
jde o porty pro koncová zařízení, počítač nebo kamera většinou VLAN vůbec neznají a neuměly by
pak komunikovat. Druhou možností jsou tagged porty které posílají rámce s VLAN hlavičkou.
Směrovače (router)
Většinou je součástí lokální sítě jenom jeden, v případě že by byly dva mohli by se mezi sebou
mlátit. Funguje na třetí vrstvě OSI modelu (takže využívá IP adresy). Jeho úkolem je směřování
packetů.
5

Obrázek 6: Metody přesílání a)Store and Forward, b) Cut Throught, c) Fast Forward
6

Většinou je jedna z jeho funkcí i překlad NAT. Network Address Translation je mechanismus kdy
se jednomu zařízení přiřadí adresa a ostatní zařízení jí využívají. Zavedlo se to protože bylo málo
IPv4 adres, cílem bylo zpomalit jejich úbytek. Router má jednu IP adresu a počítače ho využívají
jako zprostředkovatele komunikace s vnější sítí.
Metody přístupu k médiu
Jde o způsob, jak regulovat a řídit přístup jednotlivých stanic ke společně sdílenému přenosovému
médiu.
Obrázek 7: Různé přístupy k řešení problému
Proč řídit přístup k médiu? - mám jeden přenosový kanál, ale více stanic - stanice se nevyskytují
na stejném místě - neexistuje vzájmená komunikace mezi komunikačními uzly (kromě sdíleného
média) - v jeden okamžik může vysílat pouze jedna stanice
Problémexistujepouzepřivysílání,příjeminformacínasdílenémmédiujebezproblémů.Přístupové
metody jsou implementovány v MAC podvrstvě spojové vrstvy.
Vužívajísepouzeuvícebodovýchtechnologiíjakojsousběrnice,kruh,hvězda,nebostrom.Vyskytuje
se převážně u LAN technologií např. Ethernet, u spojení typu P2P (Point-to-Point) tento problém
nenastává. WAN technologie používají dvoubodové spoje mezi uzly
Řízení přístupu k mediu
Je více různých způsobů
Doména soupeření
Zařízení v síti „soupeří“ o přístup k médiu. Vysílat smí stanice, která detekuje „klid“ na mediu. To
ale vnáší možnost vzniku kolize. Má decentralizované řízení, typické sítě např. Ethernet.
Předávání tokenu
Token (pešek) je krátký paket, cyklicky předávaný mezi stanicemi v síti. Vysílat smí pouze stanice,
která obdrží token. Jde o centralizované řízení, typické sítě např. FDDI, Token Ring, Token Bus.
CSMA/CD
Zkratka Název Význam
CS Carrier Sense Hovoří někdo?
MA Multiple Access Slyším, co ostatní
CD Collision Detection Hovoří nás více! -> Chvilku počkám a pak tozkusím znovu
7

CSMA -uzel ověřuje nepřítomnost dalšího provozu před vysíláním na sdíleném fyzickém médiu, jako
například elektrickém propojovacím vedení či pásmu elektromagnetického spektra -> používáme při
normálním telefonním hovoru.
8
