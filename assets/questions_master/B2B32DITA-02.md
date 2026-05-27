# Digitální technika (B2B32DITA) - otázka 2

**Oficiální otázka:** Multiplexory, dekodéry, čítače, registry, posuvné registry a paměti. Programovatelné logické obvody, hradlová pole, jazyk VHDL.

**Zdroj:** `complete-HEX-compost.pdf`, strany 144-156
## Strana PDF 144
Multiplexory, dekodéry, čítače, registry, posuvné registry a
paměti. Programovatelné logické obvody, hradlová pole, jazyk
VHDL
HEX
Multiplexory
obecně, kombinační obvod, který přepíná jeden z n vstupů do jednoho společného výstupu na
základě stavu řídícího vstupu
zjednodušeně – programovatelný přepínač, který lze přepnout mezi několika různými vstupy pomocí
řídícího mechanismu
demultiplexor (demux) má přesně opačnou funkci – řízené přepínání jednoho datového vstupu do n
výstupů
v jazyce VHDL, multiplexor jednoduše vytvoříme pomocí podmíněného přiřazování – řada možností,
viz další přednášky
příklad – nejjednodušší 2vstupý multiplexor, 2 na 1
2 datové vstupy – a, b, 1 řídící vstup – c, 1 výstup – Q, popis funkce:
$$
pokud je c = 0 -> výstup je přepnut Q = a, pokud je c = 1 -> výstup je přepnut Q = b
$$
1

## Strana PDF 145
dekodéry
V číslicové technice jsou informace zobrazeny ve tvaru čísel, písmen a dalších značek, které jsou
vyjádřeny v určitém zakódovaném tvaru, převážně jako skupiny nul a jedniček. Kód je pravidlo,
podle kterého přiřazujeme určité kombinaci nul a jedniček určité číslo (znak) a naopak. Kódové
slovo je kombinace bitů zobrazujících určitý znak. Kódování je přiřazování kódových slov určitým
znakům.
Protože v různých zařízeních může být výhodné tutéž informaci vyjádřit v různých místech odlišnými
kódy, vzniká nutnost převodu informace z jednoho kódu do jiného kódu. To umožňují převodníky
(měniče, konvertory) kódů.V praxi se používá velké množství kódů. Každý kód má své výhody i
nevýhody. Kódy se používají při aritmetických operacích a při přenosu dat.
Kodér (enkodér) je zařízení s mnoha vstupy a výstupy, které automaticky převádí informace z
původního nebo přirozeného souboru znaků do jiného (provádí zakódování informace). V užším
slova smyslu je kodér zařízení pro převod desítkových čísel do binárního kódu.
Dekodér je zařízení s mnoha vstupy a výstupy, sloužící pro automatický převod informací z jednoho
kódu do jiného; má opačnou funkci než kodér. V užším slova smyslu je to zařízení pro převod
2

## Strana PDF 146
binárního čísla na desítkové číslo.
https://www.eluc.ikap.cz/verejne/lekce/485
čítače
obvody čítající požadované výskyty v průběhu dané sekvence – obvykle vzestupné či sestupné hrany
vstupního signálu -> výstupem je kódové vyjádření načítaného počtu
výstup obvykle v binárním kódu, ale např. i Grayův kód apod.
$$
čítač modulo N = čítající v intervalu hodnot 0 až N-1
$$
každý 1 bitový řád čítače = 1 klopný obvod –> čítač modulo N = log2 N klopných obvodů (kde N
je nejbližší vyšší mocnina 2)
synchronní čítač vs. asynchronní čítač - dle způsobu distribuce buzení (hodinového taktu)
vzestupný čítač vs. sestupný čítač vs. obousměrný čítač - dle směru čítání (přičítání, odečítání,
volitelný směr)
dodatečné vstupy – blokování (enable), nulování, nastavení. tyto vstupy mohou být synchronní
nebo asynchronní
konstrukce čítačů – klopné obvody D nebo JK (různé výhody, nevýhody)
ideální čítač (synchronní, asynchronní) vs. reálný čítač - všechny KO použité v čítači nejsou dokonale
stejné – malé odchylky - vliv zpoždění cest (šíření signálů) – konečná rychlost šíření signálů
Asynchronní čítač
vnější hodinový signál Clock je připojen pouze na vstup prvního klopného obvodu, hodinové vstupy
všech dalších jsou připojeny na výstup předchozího klopného obvodu
buzení se tak šíří postupně -> nejprve překlopí první KO, po jeho překlopení druhý, po jeho
překlopení třetí... nevýhoda – tzv. ripple-effect
$$
T – doba zpoždění (překlopení) jednoho KO -> n-bitový čítač = n x T celkové zpoždění
$$
pokud je perioda vstupního signálu Clock < n x T -> výstup čítače se nestihne ustálit před
příchodem další hrany Clock -> nestabilní stav čítače, nelze jeho hodnotu odečíst
výhoda – pro konstrukci čítače si vystačíme jen s klopnými obvody (D, JK), nejsou potřeba žádná
jiná hradla -> jednoduchá konstrukce, menší plocha, menší spotřeba
základem je D klopný obvod se zpětnou vazbou, nebo JK se spojenými vstupy – dělič 2
3

## Strana PDF 147
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

## Strana PDF 148
Obrázek 1: příklad 3bitového (modulo 8), realizace z D i JK obvodů
5

## Strana PDF 149
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

## Strana PDF 150
Obrázek 4: synchronní Reset
výhoda – výstup čítače zůstává plně synchronní
nevýhoda – zpoždění dané čekáním na hranu Clock
registry
4 základní varianty dle způsobu čtení a zápisu – PIPO, SISO, SIPO, PISO
základem jsou klopné obvody D nebo JK
registry můžeme doplnit např. o možnost nulování (mazání), posuvu o n-bitových pozic vlevo či
vpravo, provádění jednoduchých operací (XOR) apod.
Programovatelné logické obvody, hradlová pole
$$
VHDL = VHSIC Hardware Description Language
$$
VHSIC = Very High Speed Integrated Circuits – rychlé integrované obvody, FPGA, CPLD, ....
HDL – Hardware Description Language – nejedná se o programovací jazyk! v jazyce VHDL nepro-
gramujeme!, navrhujeme, simulujeme, provádíme syntézu digitálních obvodů tím, že je popisujeme
– description language = jazyk pro popis!
rodina HDL jazyků – dnes hlavně VHDL (akademická sféra, Evropa) a Verilog (průmysl, USA)
7

## Strana PDF 151
Obrázek 5: parallel in-parallel out, PIPO – paměť s paralelním vstupem a paralelním výstupem
Obrázek 6: serial in-serial out, SISO – sériová paměť (zpožďovací článek – výstup n x zpožděn)
Obrázek 7: serial in-parallel out, SIPO – sériová paměť s paralelním čtením při zaplnění
8

## Strana PDF 152
Obrázek 8: parallel in-serial out, PISO – serializér, převod paralelních toků do sériového výstupu
bližší pohled na FPGA – co je uvnitř a jak funguje?
9

## Strana PDF 153
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
• Distribuce a práce s hodinovým signálem – PLL fázové závěsy, cesty pro distribuci hodinového
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

## Strana PDF 154
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

## Strana PDF 155
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
$$
if S = 1 a R = 0 pak Q = 1 a nonQ = 0 (jedničková transformace)
if S = 0 a R = 1 pak Q = 0 a nonQ = 1 (nulová transformace)
if S = 0 a R = 0 pak Q = Q a nonQ = nonQ (paměťová transformace)
if S = 1 a R = 1 pak Q = X and nonQ = X (zakázaný stav) – ošetření si ukážeme později
$$
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
$$
Q = R NOR nonQ
nonQ = S NOR Q
$$
Strukturální popis – modelování zapojení obvodu
nejnižší úroveň abstrakce, přesně známe vnitřní stavbu obvodu – známe použitá logická hradla a
jejich zapojení, dokážeme sami vygenerovat jejich seznam (netlist)
maximální kontrola nad procesem syntézy a implementace – sami můžeme optimalizovat zapojení
obvodu z hlediska zpoždění, spotřeby, počtu hradel...
sami vytvoříme model zapojení obvodu – syntezátor jej pouze převede na netlist
12

## Strana PDF 156
obvykle nejnáročnější způsob popisu (na čas a délku kódu), při drobné změně funkce obvodu obvykle
musíme provést rozsáhlé změny kódu, méně flexibilní způsob
opět stejný příklad – asynchronní klopný obvod RS
• nejprve vytvoříme jedno elementární hradlo NOR
• dále použijeme 2 tato hradla NOR a navzájem je propojíme do struktury RS klopného obvodu
(definujeme tzv. signály VHDL – „dráty“ v obvodu)
• poslední krok, definujeme propojení vstupů a výstupů hradel NOR k vstupům a výstupům
RS klopného obvodu
13
