Pro komunikační aplikace lze zobrazit frekvenční vlastnosti spektrálním analyzátorem. Pro komerční
použití jsou důležité testy EMC a EMI, na něž existují specifické testery.
52 Komunikační kanál, teoretická informační propustnost, hierarchie
digitálních přenosových systémů. Telefonní komunikace, digitali-
zace telefonního signálu, digitální spojovací systémy, signalizace,
klasické telefonní a xDSL přípojky (B2B32TSI)
Telekomunikačnísítěseobecněbudujízaúčelemzprostředkováníinformací,reprezentovanýchveformě
různých druhů signálů přenášených různými médii. Telekomunikační technika umožňuje vyměňování
informací přes taková prostředí.
Základníjednotkouinformacejejedenbit,znějžseodvozujídalšípopisytelekomunikačníchkanálů.
Jedním z nejzákladnějších je Shannon-Hartleyův teorém
(cid:18) (cid:19)
S
C = B log 1+ , (746)
2 N
kde C vyznačuje teoretickou mez kapacity komunikačního kanálu, B je šířká frekvenčního pásma a
S/N je poměr výkonů signálu a šumu.
Samotnýtelekomunikační(taktéžpřenosový)kanáljesouhrnýpojemvyjadřujícísoubortechnických
prostředků umožňující jednosměrný přenos signálů mezi dvěma místy bez ohledu na druh použitých
prostředků. Jedná se o část mezi modulací a demodulací.
Obousměrný přenos mezi dvěma místy je označován jako telekomunikační okruh. Rozlišuje se po-
loduplexní přenos a duplexní přenos.
Kódování Modulace Přenos Demodulace Dekódování
Obrázek 111: Zjednodušené schéma telekomunikačního kanálu.
Telekomunikační přenosy lze rozdělit na tři základní skupiny
• hromadné přenosy - rozhlas, televizní vysílaní,
• účastnické přenosy - mezi datovými účastníky,
• služební přenosy - přenosy pro měření a monitorování sítí.
Vlastnosti telekomunikačního kanálu lze vyjádřit pomocí veličin
• dynamického rozsahu kanálu D - změna amplitudy signálu vyjádřující rozsah hlasitosti,
k
• šírky kanálu B - frekvenční rozsah přenášeného signálu
k
• minimální doby trvání signálového prvku T , jehož přenos daný kanál umožňuje.
k
Veličiny souhrně vyjadřují propustnost telekomunikačního kanálu (P ). Propustnost kanálu musí být
k
větší nebo rovna objemu příslušného signálu (reprezentovaným podobnými veličinami jako kanál). Na
základě telefonometrických metod byla pro telefonní kanál určena dolní mezní frekvence 300 Hz a
horní mezní frekvence 3400 Hz (šířka pásma B = 3100 Hz). Přenosová rychlost telefonního kanálu je
64 kbit/s (8·8000).
Digitalizace telekomunikačních systémů je založena na pulsně-kódové modulaci (PCM). Před procesem
multiplexování a vlastním přenosem se analogový signál podrobí následujícím operacím
222

1. vzorkování → signál diskrétní v čase,
2. kvantování → signál dískrétní v čase i amplitudě,
3. kódování → výsledný signál ve formě PCM.
Podle Shannonova-Kotělnikovova teorému byla pro vzorkování telekomunikačního signálu vybrána
vzorkovací frekvence f = 8000 Hz.
s
Negativní vlastnostní PCM je kvantizační šum. Při lineárním rozdělení symbolů jsou nižší stupně
zatížené jinou kvantizační chybou než stupně vyšší. Tento problém řeší nelineární rozdělení symbolů,
které zajistí konstantní odstup signálu od šumu.
Digitalizovanésignályjsoumultiplexoványdojednohorámce,jenžmápřesnědefinovanoustrukturu
a nese sebou zároveň signalizační a synchronizační informace. Multiplexace se zavádí za přenosem vět-
ších objemů dat menším počtem kanálů. V Evropě se používá rámec PCM 1. řádu (E1 nebo také PCM
30/32), vytvoření z třiceti dvou osmibitových kódových skupin. Dvě skupiny jsou služební informace,
ostatní jsou jednotlivé multiplexované kanály. Pro zabezpečení synchronizace se používá synchrosku-
pina rámcového souběhu (FAS) a pro zajištění bezchybnosti dat cyklický redudantní kód (CRC). V
Americe se používá PCM 24.
Efektivní přenos digitálních signálů se v součanosti provádí pomocí časového případně vlnového
sdružování (TDM příp. WDM). Smyslem digitálních hiearchií je veškeré požadované digitální toky
multiplexovat ve vysokorychlostní signál přenášený jedním spojem. V současnosti se využívájí
• plesiochronní digitální hiearchie PDH - dnes již poměrně zastarála a nedostačující,
• synchronní digitální hiearchie SDH - aktuálně nejvyužívanější,
• optická transportní hiearchie OTH - začíná se zavádět, nejlepší vlastnosti.
U PDH nemají signály nižších řádů oproti nadřazenému signálu definovaný jednoznačný časový
vztah. Prokládání probíhá volně bit po bitu bez jakéhokoliv jasně definovaného vztahu. V rámcích se
vytváří určitá rezerva pro vyrovnávání přenosových rychlostí (záporný a kladný bitový stuffing). PDH
s přibývajícímí řády naráží na několik neřešitelných problémů - nutnost zavést jiný způsob.
V SDH probíhá řízené prokládání po celých bytech, všechny signály se multiplexují synchronně
- jasný vztah mezi nižším a vyšším řádem. Sítě SDH používájí pro přenos dat virtuální kontejnery;
univerzální datový typ pro různé typy dat. Přizpůsobování (adaptace) se označuje jako mapování (vy-
rovnávání přenosových rychlostí). Data začínají na pozici určené ukazatelem AU. Pro nejspolehlivější
přenosy se v SDH používá kruhová topologie zajišťující dvě možné cesty mezi dvěma uzly.
OTH je nadstavba předchozích druhů a funguje čistě na optickém přístupu.
Samotná telekomunikační síť lze rozdělit do několika základních částí
• zařízení síťových uzlů - sloužící k vlastnímu poskytování služeb, zejména spojovací zařízení
(ústředny, směrovače) a informační zdroje,
• páteřní síť - sloužící k přenosu signálů mezi uzly telekomunikační sítě,
• přístupová síť - sloužící k přenosu signálu mezi účastníky a síťovými uzly.
Nadstavbu těchto sítí tvoří řídící síť zajišťující dohled, řízení, monitorování, učtování a další služby.
Spojovací systémy slouží k vzájemnému propojování účastnických přípojek (mezi účastníky jedné pří-
pojky, do jiné ústředny nebo zprostředkovávají propojovací cestu mezi ústřednami). Propojování se
provádí na základě analýzy účastnického čísla (předáváno pomocí účastnické signalizace). Každý spo-
jovací systém obsahuje dvě základní části
223

• spojovací pole
– vytvořené ze spínacích prvků sloužících k sestavování spojení
– pro každé spojení se vytváří spojovací cesta mezi cílovým a výchozím bodem spojení
• řízení
– koordinuje veškerou činnost spojovacího systému (včetně diagnostiky)
Účastnická skupina obsahuje kromě účastnických sad také digitální spojovací pole (DSP). DSP musí
především umožnit směrování sledu osmibitových slov (prostorové DSP) a změnu kanálového intervalu
(časové DSP). Většinou se používá řetězení prostorových a časových DSP (TST, STS...). Účastnická
sada musí plnit funkce - B napájení, O ochranna proti přepětí, R vyzvánění, S dohled, C kódování, H
vidlice, T diagnostika (BORSCHT).
Signalizace vyjadřuje určitý soubor řídících signálů a přenos mezi zdroji a cíli za účelem sestavování,
zrušení a udržování komunikace. Rozlišuji se
• signalizace na účastnických vedeních,
• vnitřní signalizace,
• signalizace mezi ústřednami.
Signalizace na analogových a digitálních vedeních se uskutečňuje zcela odlišně. Analogová signalizace
probíhá na základě vytočení čísla (impulsová volba, frekvenční volba) a v digitálních systémech se
používá pro signalizaci speciální kanál (D-kanál). Vnitřní signalizace mezi ústřednami je závislá na
výrobci, avšak dodržují se některá společná pravidla. Síťová signalizace se uskutečňuje dvěma různými
způsoby
1. signalizace přidružená k hovorovým kanálům,
2. signalizace po společném signalizačním kanále.
xDLSpřípojkyfungujínaprincipuvyužitímetalickýchdvojvodičovýchvedenívpřístupovýchsítích.Na
rozdíl od telefonních modemů řeší přenos pouze do místa nejbližší telefonní ústředny, kde je přístup k
datové síti. Společným znakem digitálních účastnických přípojek (DSL) je relativně vysoká přenosová
rychlost dosahující řádově Mbit/s. Podle rychlosti a způsobu přenosu se xDSL dále dělí na několik
různých typů (ADSL, VDSL, VDSL2).
53 Principy buňkových mobilních sítí, používané metody modulace a
přístupu k médiu v mobilních sítích. Principy komunikace, přenosu
dat a signalizace v mobilní síti 2G/2G5/3G. (B2B32TSI)
53.1 Buňkové sítě
Celulární neboli buňková rádiová síť je rádiová telekomunikační síť, v níž komunikaci v rozlehlejší
geografické oblasti zajišťuje množství základnových stanic, které svým dosahem vytvářejí soustavu
vzájemně se překrývajících poměrně malých buněk. Název celulární pochází z latinského slova „celula“
neboli buňka.
Díky použití rádiových vln nejsou jednotlivé stanice vázány na místa, kde končí komunikační ve-
dení, proto mluvíme o mobilních stanicích. Spojení jednotlivých buněk poskytuje rádiové pokrytí větší
geografickéoblasti.To umožňuje,aby většímnožstvípřenosnýchstanic (např. mobilnítelefony, pagery,
224

apod.)mohlokomunikovatspolunavzájemaspevnýmistanicemiatelefonykdekolivsíti,prostřednic-
tvím základnových stanic, i když se některé z mobilních stanic během vysílání pohybují mezi buňkami.
Díky použití rádiových vln nejsou jednotlivé stanice vázány na místa, kde končí komunikační ve-
dení, proto mluvíme o mobilních stanicích. Spojení jednotlivých buněk poskytuje rádiové pokrytí větší
geografické oblasti.To umožňuje,aby většímnožstvípřenosnýchstanic (např. mobilnítelefony, pagery,
apod.)mohlokomunikovatspolunavzájemaspevnýmistanicemiatelefonykdekolivsíti,prostřednic-
tvím základnových stanic, i když se některé z mobilních stanic během vysílání pohybují mezi buňkami.
Velikost buňky se pohybuje od stovek metrů do desítek kilometrů. Celulární systémy pracují frek-
vencích od 300 MHz do cca 3 GHz. Buňkové sítě mají následující výhody
– jsou dostatečně flexibilní, aby používaly vlastnosti a funkce dostupné ve většině veřejných i
privátních sítí
– větší kapacita
– menší potřebný vysílací výkon
– větší oblast pokrytí
– omezené rušení jinými signály
– možnost opakovaně využívat stejné frekvence
Obrázek 112: Struktura buňkových sítí.
Přenos dat probíhá ve směrech uplink a downlink v modech frequency division duplex (FDD) a
time division duplex (TDD).
Nejdůležitějším příkladem buňkové sítě je mobilní telefon.
53.2 Přístup k médiu a modulace
Pro mnohonásobný přístup se používají techniky
– FDMA - frequency division multiplex access
– co kanál, to frekvence
– TDMA - time division multiplex access
– co kanál, to čas
225

– CDMA - code division multiplex access
– co kanál, to kód
Dále se používá OFDMA (ortogonal FDMA), kde je pro přenos dat použito více nosných vln.
Různé generace mobilních sítí používají různé modulační techniky.
– GSM (2G)
– GMSK - gaussovsky filtrované minimal-shift-keying (varianta frequency-shif-keying) v kom-
binaci s OFDMA
– EDGE (2.75G)
– použití GMSK společně s 8PSK pro kódovací schémata
– HSDPA (3GPP)
– 64QAM - kvadraturně amplitudové modulace
– LTE (4G)
– pro downlink se používá OFDM a jednofrekvenční síť pro uplink
– dále se používájí adaptivní metody modulací, kdy se používají různé modulace vůči vzdá-
lenosti od vysílače
A Položené otázky
A.1 Termín 11. 6. 2019
1. doc. Dr. Ing. Pavel Kovář (K13137)
(a) Násobička frekvence, jak se dosahuje nelineárního chování, konkrétně v případně násobičky
2x.
(b) Analogové modulace a jejich spektrum.
(c) Třídy zesilovačů.
(d) Jak získat komplexní obálku ze signálu.
(e) Co je to pásmový signál.
2. doc. Ing. Vítězslav Pankrác, CSc. (K13117)
(a) Magnetické pole kolem tenkého vodiče kterým protéká proud I.
(b) Totální odraz.
(c) Vnitřní a vnější indukčnost, statická a dynamická.
3. Ing. Lubor Jirásek, CSc. (K13134)
(a) Rozdíl MOSFET a JFET.
(b) Pásová struktura.
(c) Fotodioda a její charakteristiky. Lze použít LED jako fotodiodu?
4. doc. Dr. Ing. Jiří Hospodka (K13131)
226

(a) Filtry a aproximace.
(b) Spínané zdroje.
(c) Reálný operační zesilovač. Vlastnosti a zapojení.
5. Ing. Petr Hampl, Ph.D. (K13132)
(a) IP adresa.
(b) NAT.
(c) Hradla.
6. Ing. Martin Hudlička, Ph.D. (Český metrologický institut)
(a) Spektrální analyzátor.
(b) Rezonanční obvody a jejich použití.
(c) AD převodníky.
(d) Vektorový analyzátor sítí.
A.2 Termín 19. 6. 2019
1. prof. Ing. Miloš Mazánek, CSc. (K13117)
(a) Rovinná vlna a její řešení
2. doc. Ing. Josef Dobeš, CSc. (K13137)
(a) Théveninův a Nortonův teorém a metoda uzlových napětí
3. doc. Ing. Petr Pollák, CSc. (K13131)
(a) IIR filtry, jejich vlastnosti, přechodová funkce a stabilita
4. ??
(a) ?
5. ??
(a) ?
6. ??
(a) ?
A.3 Ostatní
I přes prosbu by mi zaslali otázky, jež jim byly kladeny, se ostatní spolužáci programu Elektronika
a komunikace ze státnicového roku 2019 rozhodli, že si je raději nechají pro sebe. Protože proč ne...
227
