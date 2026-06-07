POP/POP3(Postofficeprotocol)senejdřívemusíautorizovatapotéproběhnefázetransakcejako:
seznam zpráv, stažení zprávy nebo smazání.
IMAP (Internet mail access protocol) je pokročilejší a slouží stejně jako POP k stažení zpráv ze
serveru, navíc nabízí také vyhledávací a třídící funkce.
Systém doménových jmen DNS
Doménové jméno je alfanumerický název serveru jako www.seznam.cz, to nahrazuje přímou ad-
resaci. DNS (Domain name system) je celosvětově distribuovaná databáze, která přiřazuje doménové
jméno k IP adrese stanice a má i další funkce. Předchůdcem DNS byl soubor HOSTS.TXT, který
bylo nutné pravidelně aktualizovat z centrálního serveru. Hiearchie DNS je reprezentována stromem
a je znázorněna na následujícím obrázku (nejvyšší doména root a další top-level domény (TLD) jsou
spravovány ICANN5):
Celé DNS jméno včetně teček musí být dlouhé max. 255 znaků a je kanonické (jednoznačné). Jen
část www je nekanonická a určuje jméno koncového zařízení. Na konci DNS jména v záznamu by měla
být tečka jako identifikátor kořene stromu. TLD jsou většinou geografické (cz, de, be) nebo organizační
a funkční (com, edu, gov, net). DNS klient resolver je aplikace na straně koncové stanice, která se
spojí s DNS serverem a předá DNS jméno, server poté vrátí jeho IP adresu. Každá zóna má svůj
primární DNS server (master) a několik sekundárních (slave). Jednotlivé domény (servery root, cz,
cvut.cz, fel.cvut.cz) lze dotazovat rekurzivně, kdy vše provede DNS server, nebo iteračně, kdy každou
doménu musí dotazovat sám resolver.
32 Vlastnosti polovodičů a polovodičové struktury (přechody PN a
MS, heteropřechody, struktura MIS), pasivní elektronické prvky
(struktury, vlastnosti, modely a aplikace). (B2B34ELP)
Vlastnosti polovodičů
• Proměnlivávodivostvzávislostinateplotě,steplotousevodivostzvyšuje(vyššípravděpodobnost
uvolnění elektronu z valenčního pásu do vodivostního).
• Vodivost ovlivňují příměsi (např.: přidáním příměsí fosforu vzniknou volné elektrony, příměsemi
boru vzniknou díry) a strukturální poruchy.
• Vodivost rozlišujeme na elektronovou (volné elektrony) a děrovou (chybějící elektrony, do děr
se přemisťují jiné elektrony). Nosičem náboje je vždy elektron (volný v mřížce nebo uvolněný z
kovalentní vazby mezi dvěma atomy)!
5Internet corporation for asigned names and numbers
136

Proud v polovodičích může vzniknout následujícími způsoby:
• Drift (unášení) - když se polovodič ocitne v el. poli, elektrony a díry se pohybují v opačných
směrech - sčítá se elektronová a děrová vodivost.
• Difúze - elektrony se pohybují z oblasti vysoké koncentrace do oblasti nízké koncentrace, elek-
trony nesou náboj, a tak protéká el. proud
U intrinsických polovodičů (bez příměsí) je koncentrace náboje konstantní, v polovodiči je stejný počet
elektronů a děr a jejich koncentrace odpovídá situaci, kdy je rychlost generace nosičů náboje rovna
rychlosti rekombinace (zaplnění děr elektrony). Pro vytvoření vrstev o různé koncentraci elektronů a
děr se polovodiče dotují příměsemi a tím vznikají nevlastní/příměsové/extrinsické polovodiče:
• typu N
• typu P
Ty vznikají přidáním atomů prvku, který má o jeden valenční elektron více/méně než prvky čtvrté
skupiny (tedy polovodiče - nejčastěji křemík či germanium). V polovodiči typu N označujeme přidané
atomy donor, majoritním nosičem jsou elektrony a minoritním díry. V polovodiči typu P označujeme
přidané atomy akceptor, majoritní nosičem jsou díry.
Polovodičové struktury
Stavy v přechodech znázorňujeme pásovými diagramy - pásová struktura odpovídá přípustným
energetickým stavům všech elektronů a ukazuje vodivost. Důležité pojmy:
• Fermiho hladina - Při energii E = E je pravděpodobnost obsazení 50 %. Fermiho hladina je u
f
polovodičů většinou v zakázaném pásmu. (uprostřed pro intrinsický polovodič)
• Vodivostní pásmo E
c
• Valenční pásmo E
v
• E je velikost zakázaného pásma
g
• E je energie potřebná k přechodu do vodivostního pásu pro elektron příměsi donoru, který je
d
jen slabě vázán, proto E << E
d g
• E je energie elektronu, který by mohl skočit do díry vzniklé příměsí akceptoru - je těsně nad
a
valenčním pásmem
Obrázek 59: Schéma dotovaného polovodiče typu P a N, schéma přechodu PN.
137

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
Obrázek 61: Přechod PN s napětím U v propustném směru, potenciálová bariéra je snížena - zvýšena
F
injekce minoritních nositelů, U = 0,7 V pro křemík
D
6Oblast prostorového náboje - což moc nedává smysl, ale budiž...
138

Obrázek 62: Přechod PN s napětím U v závěrném směru, potenciálová bariéra je zvýšena - rozšíření
R
vyprázdněné oblasti (OPN).
Dioda jesoučátka,kterápropuštíproudjenjednímsměrem,využíváktomuvlastnostíPNpřechodu.
Slouží k usměrňovaní, ochraně nebo stabilizaci proudu.
Obrázek 63: Ideální VA charakteristika přechodu PN a Shockleyho rovnice pro proud diodou.
Existuje několik druhů diod:
• fotodioda - při dopadajícím světle prochází proud
• LED
• varikap - změnou napětí se mění kapacita
• Zenerova dioda - v závěrném směru dochází k nedestruktivnímu průrazu, dioda je stavěná na
opakované použití v závěrném směru, v propustném se chová jako klasická usměrňovací dioda
• tunelová dioda
139

• Schottkyho dioda - narozdíl od výše uvedených využívá MS přechod (viz níže), ubýtek v pro-
pustném směru jen 0,3 V, rychleji se zotavovuje, vyšší proud v závěrném směru
PN přechod lze použít případně poškodit i v závěrném směru průrazem. Jednotlivé typy průrazů:
• Lavinový - Vlivem velké intenzity el. pole elektrony zrychlí na dlouhé dráze (celý PN) → vyrazí
další elektrony → lavinově se začnou uvolňovat další elektrony
• Tunelový (Zenerův) - PN přechod je úzký a představuje potenciálovou bariéru → elektron díky
tunelovému (kvantovému) jevu překonává bariéru
• Tepelný - je destruktivní! - zvetší se napětí → začne téct proud což oteplí diodu → Jouleovo
teplo → excitace nositelů náboje → další zvětšení proudu → roztavení
MS přechod je přechod kov-polovodič z anglického metal-semiconductor. Využívá se v Schottkyho
diodě. Volné nosiče náboje z polovodiče se pohybují snáze (vyskytují se na vyšších energetických
hladinách než ty v kovu). Při spojení kovu a polovodiče typu N se volné elektrony přesunou do kovu na
nižší energetické hladiny, v N části tak vzniknou nepohyblivé ionizované donory a vzniká vyprázdněná
oblast (nachází se většinově v N části). V propustném směru N část emituje elektrony do kovu, v
závěrném směru se zvětší bariéra. MS přechod využívá jen majoritních nosičů náboje, ty se pohybují
velmi rychle, neuplatňuje se difuzní kapacita a tím se zlepšují vysokofrekvenční vlastnosti. MS přechod
má menší prahové napětí (0,25 V vs. 0,65 V), ale větší proud v závěrném směru oproti PN.
Heteropřechod je rozhraní polovodivých materiálů s různými šířkami zakázaného pásu, přičemž je
nutné,abyjednotlivémateriálynasebeplynulenavazovalynaúrovnikrystalovémříže.Heteropřechody
se používají často v optoelektronických součástkách a vysokofrekvenčních tranzistorech.
Struktura MIS je přechod kov-izolant-polovodič. Používá se v CCD kamerových čipech a MOS
tranzistorech (Al-SiO -Si). Izolátorová vrstva zamezí průchodu DC proudu.
2
Pasivní elektronické prvky
Rezistory
Napětí na svorkách odporu se počítá dle Ohmova zákona: u(t) = R · i(t). Elektrický odpor má
jednotku Ohm a lze ho spočítat jako:
l
R = ρ· (Ω), (512)
S
kde ρ je měrný el. odpor, l je délka vodiče a S je plocha příčného průřezu.
Rezistory se vyrábí z uhlíkové nebo tenké kovové vrstvy. Pro větší výkony slouží drátkové rezistory.
VýkonovézatíženíveWattechseuvádívdatasheetechaznačívýkon,jakýjerezistorschopnýrozptýlit,
aniž by se tepelně zničil.
Induktory
Induktorjesoučástka,kterárealizujevlastníindukčnostatvořímagneticképole.Cívkulzevytvořit
omotáním drátku okolo jádra, která jsou různých typů a z různých feromagnetických materiálů. Cívku
lze také použít obráceně, tedy k indukování proudu v okolí magnetického pole. Cívku charakterizuje
indukčnost (dána mimo jiné počtem závitů), maximální výkonové zatížení a činitel jakosti. Proud je
v induktoru fázově posunut - opožděn oproti napětí o 90◦ (Cívka je jak dívka, nejdřív napětí a pak
proud.), u kapacitoru je to naopak.
140

Indukčnost cívky lze spočítat následovně (vzorec vychází z vzorce pro magnetický tok Φ při prů-
chodu proudu I, N uzavřenými smyčkami s vlastní indukčností L):
N ·Φ
L = (H). (513)
I
Faradayův zákon říká, že časová změna magnetického toku indukuje v uzavřené vodivé smyčce napětí:
dΦ
U = − (V). (514)
dt
Impedance je komplexní veličina a vyjadřuje zdánlivý odpor součástky a fázový posuv napětí proti
proudu pro střídavý proud. Impedance induktoru:
Z = jωL, (515)
kde ω je úhlová frekvence: ω = 2πf.
Kapacitory
Jsou to elektronické součástky, jejichž vlastností je kapacita (schopnost akumulovat elektrický ná-
boj). Počet akumulovaného náboje je přímo úměrný kapacitě a napětí na svorkách, proud kapacitorem
je časovou derivací náboje:
Q = C ·U (C), (516)
dQ
I = (A). (517)
dt
Kapacitornepropouštístejnosměrnýproud,pouzestřídavý.Jehohlavníparametryjsoukroměkapacity:
jmenovité napětí, přesnost kapacity, ztrátový činitel. Existuje několik druhů kondenzátorů, které se
liší velikostí a použitím, jsou to: hliníkové-elektrolytické , hliníkové-polymerové, keramické a fóliové
kapacitory. Novou kategorií jsou superkapacitory, které udrží náboj déle. Impedance kapacitoru:
1
Z = (518)
iωC
Pasivní el. prvky jsou dále popsány v Sekci 50 a také v sekcích 34 a 35 (EMP).
141

33 Aktivní prvky (tranzistory MOSFET, BJT, JFET), výkonové spí-
nací součástky, optoelektr. prvky, logická hradla a paměti – prin-
cipy, struktury, charakteristiky, modely a aplikace. (B2B34ELP)
Aktivní prvky
Obrázek 64: Přehled typů tranzistorů
MOSFET
Metal Oxide Semiconductor Field Effect Transistor (MOSFET) je polem řízený tranzistor, kde je
vodivost kanálu mezi elektrodami Source (S) a Drain (D) ovládána elektrickým polem vytvářeným ve
struktuře kov-oxid-polovodič napětím mezi Gate (G) a Source. Elektroda Bulk (B) je připojena na
substrát a většinou spojuje se sourcem nebo se uzemňuje. MOSFET využívá strukturu MIS (Metal-
Insulator-Semiconductor) popsanou v předchozí kapitole, dielektrikem je zde SiO , které se nachází
2
mezi hradlem a kanálem.
Mosfety rozdělujeme:
• Dle typu polovodiče hradla (Gatu)
– PMOS
– NMOS
• Dle typu vodivého kanálu
– S indukovaným kanálem - nevodí při U = 0, prahové napětí U > 0
GS T
– S zabudovaným kanálem - vodivý kanál při U = 0, U < 0
GS T
142

Obrázek 65: Výstupní voltampérová charakteristika - indukovaný kanál - NMOS (zabudovaný kanál
by vodil i s U mírně v minusu, PMOS je to stejný graf jen ve třetím kvadrantu - vše záporné)
GS
Obrázek 66: Řez N-kanálovým MOSFETem
VlastnostiMOSFETůadůvodypročsevyužívajíprotranzistorynačipu(kroměintegrovanýchobvodů
se využívají také pro elementární logická hradla, spínače a CMOS logiku):
• SubstrátjedobřeodizolovánodSourcu,Drainuakanálu-toumožňujevysokouhustotuintegrace
• Menší teplotní závislost než BJT
• Vysoký vstupní odpor
• Velmi malá spotřeba proudu - proto tolik netopí
143

JFET
Junction Field Effect Transistor (JFET) je velmi podobný MOSFETu. Hlavním rozdílem je, že je
JFET při nulovém napětí na Gate maximálně otevřený. Používá se v zesilovačích, oscilátorech nebo
jako napětím řízený odpor (v odporové oblasti výstupní charakteristiky).
BJT
BJT je oproti FETům bipolárním tranzistorem (obsahuje dva PN přechody) a je řízen proudem
do báze. Při dostatečném proudu se tranzistor otevře a mezi bází (B) a emitorem (E) se objeví napětí
okolo 0,7 V. Poslední elektrodou je kolektor (C). Rozlišujeme dva základní typy, podle poskládání
dotovaných polovodičů:
• NPN (šipka ven) - kolektorový proud tvoří elektrony - je rychlejší
• PNP
Obrázek 67: Vstupní a výstupní charakteristika bipolárního tranzistoru v zapojení SE; schematická
značka BJT
BJTseoprotiMOSFETupoužíváhlavněvaplikacíchsnižšímivýkony.BJTdokážespínatrychlejia
je vhodný v aplikacích s vyššími frekvencemi. Využívají se v zesilovačích, stabilizátorech a proudových
zdrojích.
Výkonové spínací součástky
Tyristor
Tyristor je bipolární spínací součástka. Z vypnutého do zapnutého stavu ji lze převést proudovým
impulsemdořídícíelektrody(Gate).TyristormátřipřechodyP-N-P-NatřielektrodyAndodu,Katodu
a Gate. Využívají se k spínání velkých výkonů, je vždy plně vypnutý či plně sepnutý.
144

Triak
Triak je spínač střídavého proudu, je schopný vést proud oběma směry. Pro sepnutí musí být na
hlavních elektrodách dostatečně velké napětí a do řídící elektrody musí být přiveden proudový impulz.
Triak zůstane sepnutý, dokud se velikost protékajícího proudu nesníží pod hodnotu vratného proudu.
IGBT
Insulated Gate Bipolar Transistor jedná se o transistor který má izolovaný gate. Používá se na vy-
soké napětí a výkony. Schématicky lze nahradit darlingtonovým zapojením. Běžně používaná výkonové
součástka (lokomotivy, tramvaje, zdroje)
Optoelektonické prvky
Interakcezářeníahmotymůžeprobíhatjednímzetřímechanismůato:absorpcí,spontánníenmisí
(LED) a stimulovanou emisí (LASER).
Fotodioda
Fotodioda je plošná dioda, upravená tak aby na PN přechod pronikalo světlo, dioda na něj reaguje.
Není-li přechod osvětlen, chová se jako běžná dioda. Při osvětlení začne procházet proud v závěrném
směru. Ve fotovoltaickém režimu FD není v obvodu zapojen žádný zdroj napětí ani proudu, a proto
bez ozáření neteče proud. Toho se využívá jak pro detekci záření tak ve fotovoltaických článcích pro
výrobu el. energie. Ve fotovodivostním režimu dioda funguje jako rezistor citlivý na světlo.
LED
Light-Emitting Diode (LED) je dioda, která emituje světlo. Světlo nebo záření se vyzařuje z PN
přechodu. Má velkou účinnost a odolnost. Barva záření je dána složením polovodiče (šířka zakázaného
pásma), k vytvoření bílého světla se používá žlutý fosfor za modrou LED.
Fototransistor
Na bázi-kolektor dopadá světlo stejně jako na fotodiodu.
Optron - LED + Fotodioda
Logická hradla a paměti
Hradla jsou podrobně popsána v Sekci 28 (DIT).
Paměti
Počítačové paměti lze rozdělit na Energeticky závislou a nezávislou paměť:
Energeticky závislá paměť (volatile) vyžaduje neustálé připojení, poté se data smažou - RAM
(Random Access Memory). Dělí se na statickou (SRAM) a dynamickou (DRAM). SRAM snáze udrží
obsah, ale potřebuje 6 tranzistorů na 1 bit. DRAM se hůře řídí, ale má jen 1 tranzistor a 1 kondenzátor
na 1 bit a je tedy hustší. DRAM se využívá pro systémovou paměť PC, SRAM pro vyrovnávací paměť
(cache).
145

Energeticky nezávislá paměť (non-volatile) udrží obsah i bez napájení. ROM je paměť pouze
pro čtení. EEPROM je vymazatelná, ale složitá s nižsí hustotou a vyšší cenou, EEPROM využívá
speciálních NMOS tranzistorů. FLASH je organizována po blocích a každý lze přepisovat samostatně,
je základem SSD, USB úložišť nebo SD karet.
34 Klasifikace prostředí. Pole vírové a potenciální. Náboje jako zdroj
pole- princip superpozice a jeho aplikace, metoda zrcadlení. Elek-
trostatické pole - Gaussova v. pro elektrostatiku, kondenzátor,
výpočet kapacity a průrazného napětí (B2B17EMP)
Klasifikace typů elektromagnetických polí
POZOR:Pankrácvesvýchpodkladechpoužívábezrozměrnývektor"r "nebo"r ",votázkáchEMP
12 0
je to dodrženo, jinde lze narazit na "r0".
r
Prousnadněnílzestudovatelektrickéamagneticképoleodděleně.Polenepohyblivýchnábojůnazý-
váme elektrostatické pole. Elektrické pole nábojů, které se pohybují ustáleným pohybem v podobě
stacionárního elektrického proudu, nazýváme stacionární proudové pole, díky pohybu nábojů je
přítomno i stacionární magnetické pole.
V obecném případě vyvolává vždy časová změna elektrického pole magnetické pole a časová změna
magnetického pole elektrické pole. Existuje tedy jedno duální pole, pole elektromagnetické, obě složky
jenutnésledovatsoučasně.Vtomtopřípaděmluvímeonestacionárním elektromagnetickém poli.
Elektrické pole je potenciální platí-li:
E = −∇φ, (519)
kde φ je elektrický potenciál, který popisuje potenciální energii náboje ve stacionárním el. poli. Mag-
netické pole je pole vírové, takové pole odnikud nevytéká a je tvořeno polem zřídlovým, kterým je el.
pole.
Náboje jako zdroj pole
O částicích, které působí elektromagnetickými silami na své okolí, říkáme, že nesou elektrický
náboj. Existují dva typy náboje: kladný a záporný (příklad částic: proton a elektron, jejich velikost
je 1,6·10−19 = elementární náboj). Jednotkou elektrického náboje je Coulomb. V elektrickém poli
se náboje stejného znaménka odpuzují, náboje různých znamének přitahují. Náboje nikdy nevznikají
a nezanikají, jen se přemisťují a hromadí.
Částice s nábojem na sebe vzájemně působí elektromagnetickými silami, vzniká tak elektromag-
netické silové pole. Síly rozdělujeme na elektrické a magnetické. Magnetické síly se projevují pouze
mezi pohybujícími se částicemi.
Bodový nábojjeabstrakcepoužívanávpříkladech.Jetonábojkonečnévelikostinazanedbatelně
velkémtělese.ElektrickásílamezidvěmabodovýminábojivyplývázColombovazákona.Sílasezvětšuje
s velikostí nábojů a zmenšuje se vzdáleností. Náboje opačného znaménka se přitahují, stejného se
odpuzují - vzniká mezi nimi silové elektrické pole.
1 Q Q
1 2
F = r (520)
12 4π(cid:15) r2 12
0
Superpozice pole bodových nábojů je sečtení polí jednotlivých bodových nábojů v nabitém
tělese. Pro spočítání superpozice potřebujeme znát rozložení náboje - tvar pole. Pole dokážeme sečíst
jen pokud je náboj rozložen na určité ploše, v objemu nebo podél linie.
146

5) Nakreslete schéma a pravdivostní tabulku hradla NAND v CMOS technologii. (10)

Nakreslete schéma a pravdivostní tabulku hradla NOR v CMOS techno-
logii.

Tabulka 4: Pravdivostní tabulka hradla NOR

Obrázek 49: Schéma hradla NOR
