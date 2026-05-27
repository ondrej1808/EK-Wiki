# Elektronické prvky (B2B34ELPA) - otázka 1

**Oficiální otázka:** Vlastnosti polovodičů a polovodičové struktury (nositelé a transport náboje v polovodičích, přechody PN a MS, struktura MIS), pasivní elektronické prvky (struktury, vlastnosti, modely a aplikace).

**Zdroj:** `complete-HEX-compost.pdf`, strany 172-176
## Strana PDF 172
Proud v polovodičích může vzniknout následujícími způsoby:
•Drift (unášení) - když se polovodič ocitne v el. poli, elektrony a díry se pohybují v opačných
směrech - sčítá se elektronová a děrová vodivost.
•Difúze - elektrony se pohybují z oblasti vysoké koncentrace do oblasti nízké koncentrace, elek-
trony nesou náboj, a tak protéká el. proud
U intrinsických polovodičů (bez příměsí) je koncentrace náboje konstantní, v polovodiči je stejný počet
elektronů a děr a jejich koncentrace odpovídá situaci, kdy je rychlost generace nosičů náboje rovna
rychlosti rekombinace (zaplnění děr elektrony). Pro vytvoření vrstev o různé koncentraci elektronů a
děr se polovodiče dotují příměsemi a tím vznikají nevlastní/příměsové/extrinsické polovodiče:
•typu N
•typu P
Ty vznikají přidáním atomů prvku, který má o jeden valenční elektron více/méně než prvky čtvrté
skupiny (tedy polovodiče - nejčastěji křemík či germanium). V polovodiči typu N označujeme přidané
atomy donor, majoritním nosičem jsou elektrony a minoritním díry. V polovodiči typu P označujeme
přidané atomy akceptor, majoritní nosičem jsou díry.
Polovodičové struktury
Stavy v přechodech znázorňujeme pásovými diagramy - pásová struktura odpovídá přípustným
energetickým stavům všech elektronů a ukazuje vodivost. Důležité pojmy:
•Fermiho hladina - Při energii E= Ef je pravděpodobnost obsazení 50 %. Fermiho hladina je u
polovodičů většinou v zakázaném pásmu. (uprostřed pro intrinsický polovodič)
•Vodivostní pásmo Ec
•Valenční pásmo Ev
•Eg je velikost zakázaného pásma
•Ed je energie potřebná k přechodu do vodivostního pásu pro elektron příměsi donoru, který je
jen slabě vázán, proto Ed <<Eg
•Ea je energie elektronu, který by mohl skočit do díry vzniklé příměsí akceptoru - je těsně nad
valenčním pásmem
Obrázek 59: Schéma dotovaného polovodiče typu P a N, schéma přechodu PN.
137

## Strana PDF 173
PN přechod vznikne fyzickým spojením polovodičů typu N a typu P. V oblasti přechodu je strmá
změna koncentrace, která způsobí difúzi elektronů do oblasti P a děr do oblasti N, uprostřed vznikne
vrstva težko pohyblivých ionizovaných donorů a akceptorů s vysokou intenzitou el. pole, vrstva se
nazývá hradlová nebo vyprázdněná oblast (někdy také OPN6). PN přechod v rovnovážném stavu
nevede proud, po přiložení napětí v propustném směru (+ ze zdroje na oblast P) se ztenčí hradlová
vrstva a polovodič vede proud, v závěrném směru se volné elektrony přitáhnou k + ze zdroje a tím se
rozšíří hradlová vrstva a polovodič izoluje (neboli energetická bariéra, kterou musí nosiče překonat se
zvětší).
Myslím si, že to sem patří, snažil jsem se to nastudovat, ale moc tomu nerozumím... (popisky v
itemize výše):
Obrázek 60: Schéma dotovaného polovodiče typu a) N, b) P.
6Oblast prostorového náboje - což moc nedává smysl, ale budiž...
Obrázek 61: Přechod PN s napětím UF v propustném směru, potenciálová bariéra je snížena - zvýšena
injekce minoritních nositelů, UD = 0,7 V pro křemík
138

## Strana PDF 174
Obrázek 62: Přechod PN s napětím UR v závěrném směru, potenciálová bariéra je zvýšena - rozšíření
vyprázdněné oblasti (OPN).
Dioda je součátka, která propuští proud jen jedním směrem, využívá k tomu vlastností PN přechodu.
Slouží k usměrňovaní, ochraně nebo stabilizaci proudu.
Obrázek 63: Ideální VA charakteristika přechodu PN a Shockleyho rovnice pro proud diodou.
Existuje několik druhů diod:
•fotodioda - při dopadajícím světle prochází proud
•LED
•varikap - změnou napětí se mění kapacita
•Zenerova dioda - v závěrném směru dochází k nedestruktivnímu průrazu, dioda je stavěná na
opakované použití v závěrném směru, v propustném se chová jako klasická usměrňovací dioda
•tunelová dioda
139

## Strana PDF 175
•Schottkyho dioda - narozdíl od výše uvedených využívá MS přechod (viz níže), ubýtek v pro-
pustném směru jen 0,3 V, rychleji se zotavovuje, vyšší proud v závěrném směru
PN přechod lze použít případně poškodit i v závěrném směru průrazem. Jednotlivé typy průrazů:
•Lavinový - Vlivem velké intenzity el. pole elektrony zrychlí na dlouhé dráze (celý PN) →vyrazí
další elektrony →lavinově se začnou uvolňovat další elektrony
•Tunelový (Zenerův) - PN přechod je úzký a představuje potenciálovou bariéru →elektron díky
tunelovému (kvantovému) jevu překonává bariéru
•Tepelný - je destruktivní! - zvetší se napětí →začne téct proud což oteplí diodu →Jouleovo
teplo →excitace nositelů náboje →další zvětšení proudu →roztavení
MS přechod je přechod kov-polovodič z anglického metal-semiconductor. Využívá se v Schottkyho
diodě. Volné nosiče náboje z polovodiče se pohybují snáze (vyskytují se na vyšších energetických
hladinách než ty v kovu). Při spojení kovu a polovodiče typu N se volné elektrony přesunou do kovu na
nižší energetické hladiny, v N části tak vzniknou nepohyblivé ionizované donory a vzniká vyprázdněná
oblast (nachází se většinově v N části). V propustném směru N část emituje elektrony do kovu, v
závěrném směru se zvětší bariéra. MS přechod využívá jen majoritních nosičů náboje, ty se pohybují
velmi rychle, neuplatňuje se difuzní kapacita a tím se zlepšují vysokofrekvenční vlastnosti. MS přechod
má menší prahové napětí (0,25 V vs. 0,65 V), ale větší proud v závěrném směru oproti PN.
Heteropřechod je rozhraní polovodivých materiálů s různými šířkami zakázaného pásu, přičemž je
nutné, aby jednotlivé materiály na sebe plynule navazovaly na úrovni krystalové mříže. Heteropřechody
se používají často v optoelektronických součástkách a vysokofrekvenčních tranzistorech.
Struktura MIS je přechod kov-izolant-polovodič. Používá se v CCD kamerových čipech a MOS
tranzistorech (Al-SiO2-Si). Izolátorová vrstva zamezí průchodu DC proudu.
Pasivní elektronické prvky
Rezistory
$$
Napětí na svorkách odporu se počítá dle Ohmova zákona: u(t) = R\cdot i(t). Elektrický odpor má
$$
jednotku Ohm a lze ho spočítat jako:
l
$$
R= \rho\cdot
$$
S (Ω), (512)
kde ρ je měrný el. odpor, l je délka vodiče a S je plocha příčného průřezu.
Rezistory se vyrábí z uhlíkové nebo tenké kovové vrstvy. Pro větší výkony slouží drátkové rezistory.
Výkonové zatížení ve Wattech se uvádí v datasheetech a značí výkon, jaký je rezistor schopný rozptýlit,
aniž by se tepelně zničil.
Induktory
Induktor je součástka, která realizuje vlastní indukčnost a tvoří magnetické pole. Cívku lze vytvořit
omotáním drátku okolo jádra, která jsou různých typů a z různých feromagnetických materiálů. Cívku
lze také použít obráceně, tedy k indukování proudu v okolí magnetického pole. Cívku charakterizuje
indukčnost (dána mimo jiné počtem závitů), maximální výkonové zatížení a činitel jakosti. Proud je
v induktoru fázově posunut - opožděn oproti napětí o 90◦ (Cívka je jak dívka, nejdřív napětí a pak
proud.), u kapacitoru je to naopak.
140

## Strana PDF 176
Indukčnost cívky lze spočítat následovně (vzorec vychází z vzorce pro magnetický tok Φ při prů-
chodu proudu I, N uzavřenými smyčkami s vlastní indukčností L):
$$
L=
$$
N·Φ
I (H). (513)
Faradayův zákon říká, že časová změna magnetického toku indukuje v uzavřené vodivé smyčce napětí:
$$
U=-
$$
dΦ
dt (V). (514)
Impedance je komplexní veličina a vyjadřuje zdánlivý odpor součástky a fázový posuv napětí proti
proudu pro střídavý proud. Impedance induktoru:
$$
Z= j\omegaL, (515)
kde \omega je úhlová frekvence: \omega= 2\pif.
$$
Kapacitory
Jsou to elektronické součástky, jejichž vlastností je kapacita (schopnost akumulovat elektrický ná-
boj). Počet akumulovaného náboje je přímo úměrný kapacitě a napětí na svorkách, proud kapacitorem
je časovou derivací náboje:
141
$$
Q= C\cdot U (C), (516)
I=
$$
dQ
dt (A). (517)
Kapacitornepropouštístejnosměrnýproud,pouzestřídavý.Jehohlavníparametryjsoukroměkapacity:
jmenovité napětí, přesnost kapacity, ztrátový činitel. Existuje několik druhů kondenzátorů, které se
liší velikostí a použitím, jsou to: hliníkové-elektrolytické , hliníkové-polymerové, keramické a fóliové
kapacitory. Novou kategorií jsou superkapacitory, které udrží náboj déle. Impedance kapacitoru:
$$
Z=
$$
1
iωC (518)
Pasivní el. prvky jsou dále popsány v Sekci 50 a také v sekcích 34 a 35 (EMP).
