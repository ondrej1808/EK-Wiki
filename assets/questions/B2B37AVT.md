1 Fyziologie a anatomie vidění
Světlo prochází několika prostředími s různými indexy lomu. Obraz prochází postupně: Rohovka - komo-
rový mok - vstupní pupila - Čočka - Sklivec - Obraz na sítnici (který je vzhůru nohama). Elastická čočka
Obrázek 1: Řez lidským okem
mění svůj tvar ciliárními svaly, které jsou v řasnatém tělísku a které mění její zakčivení, čímž ostříme
obraz na blízko a na dálku.
Obraz,kterýčlověknasítnicizachytávájdepřirovnatkedvoumsenzorůmvjednommístě.Jedenbarevný
(čípky) a druhý černobílý (tyčinky). Tyto fotoreceptory jsou v nejhlubší části oka za vrstvou, zabraňující
odrazům.
• Tyčinky - Jsou zodpovědné za skotopické černobílé vidění. Mají rychlou časovou odezvu, což
znamená, že zachytí více informací o světle než čípky a proto vidí člověk ve tmě černobíle. Člověk
jich má asi 120 milionů a jsou zodpovědné hlavně za periferní a noční vidění.
• Čípky - Jsou zodpovědné za fotopické barevné vidění. Je pomalé (jako když fotky za tmy jsou
rozmazané) a má 3 typy L (Long), M (Medium), S (Short). Ty jsou pojmenovány podle vlnové
délky kterou zachycují a je to vlastně RGB. Člověk má přibližně 7 milionů čípků. Nejvíce z nich je
v oblasti žluté skvrny viz obr. 2
Světlocitlivébuňkyjsounasítnicirozdělenynáhodně,jakozrnanafilmuaprotonarozdílodmoderních
senzorů, které mají pravidelé čtvercové rozložení nedělají artefakt aliasingu.
Zrakový nerv, který odvádí informace získané okem do mozku má 800k axonů (vláken). V místě kde
zrakový nerv vchází do mozku je slepá skvrna 2, kde nejsou žádné čípky ani tyčinky. Naopak žlutá
skvrna je místo s největším počtem světlocitlivých buňek a zachytává světlo které do oka vniká upro-
střed.
Obrázek 2: Rozdělení čípků a tyčinek na sítnici
1

Obrázek 3: Přibližná citlivost čípků L, M, S a tyčinek (hodnoty nejsou přesně danné)
Barvy vidí lidské oko v rozmezí přibližně mezi 380-750 nm. Každý fotoreceptor je v nějaké vlnové
délce nejcitlivější viz obr. 3. Pokud jsou dvě barvy s různými spektry a lidskému zraku se jeví jako stejné
tak se tomu říká metamerismus. To je způsobeno tím že dají fotoreceptorům stejnou odezvu i když
jedno spektrum může být spojité (denní světlo) a druhé nespojité (LED). Tomu že ke vnímání barev
používáme 3 typy čípků L, M, S (R, G, B) říkáme trichromatická teorie. Už v oku se ale provádí
převod na oponentní teorii která říká že barvy vnímáme oponentně jako černá-bílá, červená-zelená a
modrá-žlutá.Nevímtedapročsetomuříkáteoriekdyžteorietoužfaktnení.BarvyprostěvnímámeRGB
a pak se převedou na oponenta. Chromatická adaptace je proces, který použije informace o intenzitě
z čípků a přizpůsobí oko na intenzitu světla (jak když se mění nastavení kamery pro jasnou a tmavou
scénu) a barvy (něco jako vyvážení bílé) aby vypadalo neměnné.
Weber-Fechnerův zákonříká,želidskévnímání,vtomtopřípaděuintenzityjasu,nerostelineárněale
logaritmicky:
∆L
∆S = (1)
L
kde ∆S je změna vnímané intenzity a ∆L je procentuální rozdíl od intenzity L. Prahový kontrast je
nejmenší rozdíl mezi dvěma jasovými úrovněmi, které člověk dokáže rozeznat a vychází ∆L/L = 2 %.
Pokud je měnší než 2 % tak změnu člověk nezaregistruje.
2 Snímání a reprodukce obrazu.
ProCCD snímačpoužíváprokaždýpixelMOS,kdekovováelektrodanavrchujesvětlocitlivá.Množství
nábojekterésevytvořínakaždémprvku4odpovídádopadajícímusvětlu,ajezávisléhlavněnadoběex-
pozice, velikosti osvětlení a ploše. Vytvořený náboj se musí rychle přesunout aby nedošlo k jeho změnám
vlivem tepla a dalších rušivých vlivů. To se dělá fázovou změnou potenciálu na elektrodách (průhledné
elektrody nad senzorem), které posouvají náboj jako vlny surfaře (jen je hodně vln za sebou). Aby se při
posunu negeneroval náboj stále dopadajícím světlem, tak se používá fyzická uzávěrka. Za maticí elektrod
na kraji senzoru je obvod pro vyčtení obrazového signálu. Dnes už je CCD téměř všude nahrazeno tech-
nologií CMOS.
Snímač CMOS již nemá posuv náboje pomocí potenciálů, protože každý pixel je připojen zvlášť
vlastním obvodem vedle nebo pod pixelem. CMOS funguje na principu akumulačního snímání. Ten
funguje tak, že je matice pixelů, kde každý prvek má kapacitu. Ta se v každém cyklu rychle nabije
zdrojem, který se po nabití odpojí. Fotorezistor v závislostni na dopadajícím světle mění svůj odpor a
vybijí kapacitor, jak je ukázáno u CMOS v obr. 4. Výsledná kapacita na konci cyklu je hodnota pixelu.
Doba po kterou se kapacita vybijí se nazývá doba expozice. Každý pixel musí obsahovat více takových
prvků a navíc s barevným filtrem, pokud má zachytávat barvy RGB a ne jen šedotóný jas. Šumy které
mohouovlivnitvýslednýobrazjefotonovýšumcožjelimitsvětlapodlenějakýfyziky,tepelnýšum(také
nazývaný proud za tmy), který se snižuje se snižující se teplotou a šum s prostorovým vzorem který je
limitace výrobního procesu, kde různé fotorezistory nemají přesně stejnou citlivost.
2

Obrázek 4: CCD vlevo, CMOS vpravo

> 🎥 **The Chips That See: Rise of the Image Sensor** (Asianometry)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/4dX2IsZDBfg" title="Rise of the Image Sensor" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>
Před senzorem bývá filtr dolní propusti k rozmazání obrazu, protože nebýt jich, tak se může porušit
podmínkaprostorovéhovzorkovacíhokmitočtu.Taje0,5cyklunapixelcožznamenážemaximálněpůlka
sinusovky se může vejít do pixelu jinak nastane porušení podmínky a vznikne aliasing.
Míšení barev je
• Additivní - Displeje mají RGB a součet jich dá bílou barvu
• Subtraktivní - Tiskárny mají Yellow, Magenta, Cyan (YMC) která součtem barev dají černou
Zobrazovače se dělí na přípo vyzařující, které sami vydávají zdroj světla a je jím například OLED
nebo CRT a nepřípo vyzařující, které v případě LCD světlo pouze blokují.
LCDmánějaképodsvíceníkterýmmůžebýtjakýkolivzdrojsvětlaamezitímtozdrojemauživatelem
je vrstva ovlivňující vlastnosti světla. Každý pixel má tři filtry na barvy RGB a každá barva každého
pixelu má svojí vlastní polarizační vrstvu s elektrodou, která otáčí krystalky a nechává tím projít světlo
skrzpolarizačnívrstvu.VýhodyLCDjsouaktuálněnižšícenaatoženemávypalováníjakoOLED,jinak
má jen nevýhody fr.
U OLED je každý barevný pixel sám zdrojem světla. To se vyzařuje na PN přechodu organickou
vrstvou když skrz ní jde proud. Výhody OLED jsou nekonečný kontrast, lepší pokrytí barev, pozorovací
úhly a další. Nevýhoda je vypalování.
Na obr 6 jsou barevné prostory což je standardizovaný trojúhelník RGB na který jsou zobrazovače
přizpůsobeny aby barvy vypadali na všem stejně.
Obrázek 5: Schéma snímání obrazu
3

Obrázek 6: Diagram CIE xy vlevo, barevné prostory vpravo
3 Zdrojové kódování obrazové informace a přenosové video sys-
témy
Podleweber-fechnerovazákonadokáželidskéokorozpoznatzměnujasupřibližně2%.Pokudjenutnéaby
člověk od sebe nerozeznal 2 hodnoty a dynamický rozsah se nastaví na hodnotu 100 (maximální jas bude
100 krát větší než minimální), tak lze zjistit, že je pro to potřeba 230 jasových úrovní (230 zvětšení o
2%). Proto se u videa často používá 8 bitové kvantování které dává 256 úrovní.
Původní CRT televizory byly černobílé a s příchodem barev bylo nutné zajistit aby šel barevný tele-
vizní signál přehrát na barevných televizorech. Proto se používala jasová složka, která byla jen černobílý
obrazzajišťujícízpětnoukompatibilituanavícktomubylypřidányrozdílovébarvyR-YaB-Y(Y-jas),
zajištující barevný signál na podporovaných televizorech. Později bylo nutné zařídit digitalizaci stan-
dardizovanou v doporučení ITU-R Rec. BT.601 které používalo vzorkovací frekvence 13,5 MHz pro
jasovou složku a polovina toho, 6,75MHz pro každou ze dvou chromatických (barevných) složek. Podpo-
ruje bitovou hloubku 8 i 10 bitů což dává výsledný bitový tok až 270 Mb/s. Pro snížení velikosti dat se
používají vzorkovací formáty ve stylu J:a:b, kde
• J - je jasová složka která je vždy 4
• a - je počet barevných složek v prvním řádku
• b - je počet barevných složek ve druhém řádku
Lidské oko je více citlivé na jas a méně na barvy, takže se vlastně snižuje rozlišení barevných složek.
Vzorkování4:4:4jebezjakékolivkomprese,4:2:0jepoužití1080prozliženíprobarvyve4kobrazua4:1:1
je mental illness a proto není v obr. 7.
Pro větší snížení datového toku se používá komprese obrazu. Ta se dělí na matematicky bezeztráto-
vou, která je naprosto shodná s originálem a matematicky ztrátovou, ze které již nikdy není možné
Obrázek 7: Vzorkování vlevo, graf komprese vpravo
4

získat původní obraz. Matematicky bezeztrátová komprese je možná například tím, že pravděpodobnost
někýchpixelůjevždyvětšínežostatníchajdeefektivnězakódovatjakomorseovka.Minimálnípočetbitů
sekterýmilzebezeztrátovězakódovatnějakýobrazjdevypočítatspomocísoučtuvlastních informací,
kde s menší pravděpodobností výskytu roste vlastní informace. V policejní databázi zločinů páchá 50%
zločinů černá část populace, takže k jejich rase přiřadíme nejmenší počet bitů v tomto případě bity 1
(nejměnší vlastní informace), aby se úložiště databáze nezaplnilo moc rychle. Žluté rase se může přiřa-
dit hodnota bitů 01 a bílé rase hodnota 11 protože pravděpodobnost zločinu je u těchto ras menší a
dvoubitová hodnota zabírá nejvíce místa. Ukázanému rozdělení bitů se říká Huffmanovo kódování a
blíží se entropii zdroje což je minimální počet bitů na jeden znak potřebný k bezeztrátovému kódování
viz obr. 7. Huffmanovo kódování tedy přiřazuje nejkratší počet bitů hodnotám s nejpravděpodobnéjším
výskytem.
Ztrátová komprese používaná v JPEG je 2D Discrete Cosine Transform (DCT) kódování.

> 🎥 **The Unreasonable Effectiveness of JPEG: A Signal Processing Approach** (Reducible)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/0me3guauqOU" title="JPEG signal processing" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>

> 🎥 **How are Images Compressed? JPEG In Depth** (Branch Education)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/Kv1Hiv3ox8I" title="JPEG In Depth" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>

> 🎥 **Huffman Coding and Huffman Trees** (Tom Scott) — bezeztrátové entropické kódování

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/JsTptu56GM8" title="Huffman Coding" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>
Doporučení je podívat se na toto video, protože to je obtížné na vysvětlení, je to vhodný trochu umět a
stejně to má celý odstavec (nebo skipnout protože se na to určitě nikdo nezeptá). Postup je v obr. 8. 2D
DCT funguje postupně tak, že se nejprve vycentruje jas pixelu kolem nuly, což je v případě černobílého
8 bitového obrázku z 0-255 do -128-127. Poté se obrázek rozdělí na bloky o velikosti 8x8 pixelu. Na tento
blok se aplikuje 2D DCT, která převede 8x8 pixely do frekvenční oblasti o velikosti 8x8 viz proužky v
8 vpravo nahoře. Hodnota každého bodu ve frekvenční oblasti je danná tím, kolik přispívá danný bod
do původního 8x8 bloku pixelů. V levém horním bodě je stejnosměrná složka (celkový jas), na kterou je
lidskéokonejvícecitlivéapostupnědopravadolůklesáto,cojelidskéokoschopnérozpoznat.Prosnížení
velikosti dat je tedy vhodné odstranit méně důležité informace, které jsou vpravo dole a ponechat to co
je vlevo nahoře. Do této chvíle nedochází ke ztrátě informace a až v následující operaci se ztratí data
a dojde ke snížení kvality (pro oko to je téměř nepoznatelná ztráta). JPEG má nastavení kvality, které
ovlivňujekoliksetohozobrázkuvyhodí.Jeto8x8kvantizačnímatice,kterámávsoběhodnoty,kterými
dělí koeficienty frekvenční 8x8 oblasti. Po dělení (frekvenční/kvantizační matice) se výsledné hodnoty
zaokrouhlí na nejbližší celočíselnou hodnotu. Tím že se v pravém dolním rohu dělí velkými čísli dojde
k zaokrouhlení výsledných hodnot na nulu. Nakonec se hodnoty koeficientů postupně vypisují a tím že
vpravo dole je po sobě spousta nul za sebou jde data zmenšeně uložit. Takto se to postupně provádí pro
každý 8x8 blok pixelů v obrázku. Nakonec jde inverzí získat zpět obrázek zkompresovaný o zaokrouhlené
hodnoty. V barevném obrázku se navíc k jasu musí kompresovat i barevné složky na které je oko méně
citlivé než na jasové, a proto je jejich komprese mnohem větší.
Videojdekompresovatsvyužitímredundance,hlavněčasovéaprostorové.Prostorová redundance
ve videu může být třeba komprese JPEG, kterou video minimálně každých pár snímků musí využít.
Časová redundance je použití okolních snímků které bývají podobné, protože kdyby každý snímek byl
JPEGtakbytovyžadovalovelkýdatovýtok.Pokudsevescéněskoronicnehýbe,taklzepřenášetpouze
rozdíl mezi jednotlivími snímky, což lze využít třeba u záznamu z přednášky.
Pokročilejší metoda časové redundance je Motion Estimation (ME) s použitím Motion Vectors
(MV). Obrázek se rozdělí do několika malých bloků a algoritmus se snaží v předešlém snímku najít kam
senějakýstejněvypadajícíblokposunulvnovémsnímkuvizobr.9vlevo.Pokudnajdeblokkterýzměnil
Obrázek 8: Komprese JPEG
5

Obrázek 9: Pohybové vektory vlevo, vpravo I - JPEG, B a P - s pohybovými vektory
svou pozici, tak tím získá vektor pohybu danného bloku.
Kvalita zkompresovaného obrazu jde hodnotit subjektivními a objektivními metodami. Objektivní
metody jsou čistě matematické a mezi nejpoužívanější patří Peak Signal to Noise Ratio (PSNR). Ty ale
často neodpovídají tomu co člověk vidí a proto se používají subjektivní metody, které podávají dobré
výsledky, protože je musí provádět skupina pozorovatelů, ale zároveň je tato metoda ze stejného důvodu
jak časově, tak finančně náročná.
4 Digitální fotografie, metody předzpracování
Digitální fotografie a metody předzpracování je částečně vysvětleno v předchozích kapitolách a zde.
Lidskéokosepřizpůsobujedennímusvětlusproměnlivouteplotou,abynapříkladlidskápleťvypadala
vždystejněatostejnésemusídělatpřisnímáníobrazu.Ktomusloužívyvážení bíle,kteréupravíbarvy
tak,abyvypadalyzajakéhokolivnasvícenístejně.Sloužíktomuněkolikmetodkdenejjednodušímetoda
(šedý svět) vezme jasovou informaci z každé barvy R, G a B a udělá aby se jas každé složky rovnal
Y =Y =Y .
r g b
Snímače obrazu obsahují IR filtry pro odstranění barev mimo lidské vidění a nějaký druh masky,
které propouštějí do senzoru pouze určité vlnové délky na každé barvě viz obr. 5. Nejčastěji používaná
je Bayerova maska 5 obsahující 2x více bodů propouštějících zelenou barvu, která u lidského zraku
nejvíce odpovídá jasu.
6

Obrázek 10: Anatomie ucha
5 Fyziologie a anatomie slyšení
5.1 Anatomie
Vnější ucho:
Boltec směřuje zvukové vlny do ucha a zařizuje lokalizaci. Vlny poté prochází zvukovodem, který za-
jišťuje ochranu proti úderům z dob pravěkých. Je 24-27mm dlouhý a funguje jako rezonátor frekvencí v
rozsahu 1-4 kHz, což je oblast lidské řeči. Bubínek je membrána která funguje jako akusto-mechanický
převod z tlaku na fyzický pohyb.
Střední ucho:
Kůstky kladívko-kovadlinka-třmínek je impedanční transformace co zvyšuje tlak z bubínku přibližně
19×. To se pak posílá do oválného okénka které slouží jako vstup do vnitřního ucha. Střední ucho
při vysokých hlasitostech pomalu napíná svaly aby ochránil sluch před dlouhodobým hlasitým zvukem
alenefungujepřednapříkladvýstřelemvtichu.Eustachovatrubicevyrovnávátlakpředazabubínkem.
Vnitřní ucho:
Hlemýžď je kůstka co vypadá jako hlemýžď a má 2,5 závitu. Vstupem do něj je oválné okénko, které
rozkmitá kapalinu uvnitř hlemýždě. Po celé délce hlemýždě se včetně kapaliny nachází i membrána a
cortiho orgán. Membrána v každé části hlemýždě reaguje pouze na určité frekvence kapaliny které
ji na tom místě rozkmitají. Membrána je pokrytá vlasovými buňkami (cortiho orgán) a když se
membrána na nějakém místě rozkmitá, tak to vlasové buňky excituje a vytvoří elektrický signál který
pošlou do mozku.
5.2 Fyziologe
Člověk pravděpodobně slyší kombinací 2 teorií.
1. Již zmíněná že membrána se rozvlní na jednom místě podle frekvence.
2. Druhá že malé frekvence excitují celého hlemýždě ale tím jak je to pomalý kmitání to mozek
rozpozná a podle toho určí frekvenci co slyšíme
7

Obrázek 11: Křivky stejné hlasitosti
Obrázek 12: Zpětné a dopředné maskování
Slyšímehlasitostnelineárněanakaždéfrekvencijinak"hlasitě".Jsmepřizpůsobenýnalidskouřečkde
jenutnýnejmenšítlak.Vidětjetonakřívkáchstejnéhlasitostivobr11.Nejdspodnějšíkřivkajeminimální
hlasitost co jsme schopni slyšet. S věkem se vše zhoršuje :(. Taky vnímáme hlasitost logaritmicky.
5.2.1 Maskování
Je několik možností jak zamaskovat nějaký zvuk který potom není slyšet.
1. puštěním hlasitějšího zvuku ve frekvenční blízkosti toho co maskuje. Tón na 150 Hz s hlasitostí 40
dB jde zamaskovat tónem na 250 Hz co má 60dB.
2. Zpětným a dopředným maskováním na stejné frekvenci viz obr 12
5.2.2 Lokalizace
Směr ze kterého se zvuk pohybuje se pozná:
1. Časovým rozdílem mezi levým a pravým uchem
2. Zvuková vlna se utlumí o hlavu na různých frekvencích při jejím "obcházení"a mozek to pozná.
3. boltcem který vlny směřuje do ucha
4. vzdálenost pozná podle hlasitosti
6 Elektrodynamický a elektrostatický měnič
Elektroakustické a elektromechanické měniče převádí elmag pole na akustické nebo naopak. Dělí se:
1. s magnetickým polem - elektrodynamický
2. s elektrickým polem - elektrostatickým, piezoelektrický
3. ostatní
Jak fungují je na videu.
8

Obrázek 13: Elektrodynamický měnič Obrázek 14: Elektrostatický měnič
6.1 Elektrodynamický
Má membránu která se změnou tlaku (zvukem) rozkmitá. K ní je připojena civka, která se tím taky
rozkmitá. Uprostřed cívky je nehybný magnet, který na pohybující cívce vytváří napětí které je následně
zachytáváno. Tak funguje mikrofon tohoto typu a platí pro něj indukční zákon u = −∂ϕ kde ϕ (fí) je
∂t
elektrický potenciál.
PoužítjdealeijakreproduktorpřikládánímnapětínacívkuaprotoplatíLorentzovasílaF⃗ =q(⃗v×B⃗)
kde F⃗ je síla, q je náboj částice,⃗v je rychlost částice, B⃗ je magnetická indokce a × je vektorový součin.
6.2 Elektrostatický
Místo membrány má kovovou destičku, která vibruje podle zvuku. Za touto destičkou je další destička
což tvoří kapacitu a pohybem se na kondenzátoru mění velikost napětí. Je navíc nutné aby byl připojený
phantom (napájení),protožedestičkymusíbýtnabitéabyfungovaly.Budsetořešíbaterkou,nebočastěji
napájením přes konektor. Jako mikrofon se na destičkách vytvoří náboj q =uC =uϵ s kde u je napětí,
0d
a C je kapacita.
Jako reproduktor funguje na principu elektrostatické síly F =ϵ Su2 kde F je síla mezi destičkami, ϵ
02d2 0
je permtivita vakua, S je plocha desky, u je napětí a d je vzdálenost.
V akustických měření se nejčastěji nachází tento typ protože je lepší (ale dražší).
7 Vzorkování, kvantování a zdrojové kódování obrazu
7.1 Vzorkování
Převod spojitého (analogového) signálu, kterým může být zvuk z mikrofonu, na diskrétní (digitální). S
nížší frekvencí se snižuje kvalita a u audia bývá nejčastěji použíáno 44,1 kHz a 48 kHz pro kvalitnější
produkce. Člověk slyší maximálně na 20 kHz a pro splnění vzorkovací podmínky musí být vzorkovací
frekvenceminimálnědvojnásobekmaximálnífrekvencezvuku.Dvojnásobekje40kHzaletojeminimum
aprotosepoužívávíc.Nesplněnípodmínkymůževzniknoutaliasingkdyvyššífrekvencemohouvypadat
jako nízké.
7.2 Kvantování
Analogovýsignálmánekonečněmnohoúvoníkterésemusípřevéstnakonečnýpočet.Fungujetopodobně
jako s jasem na televizi které mívají 8 bit což je 0-255 úrovní. Takto málo hodnot u zvuku ale člověk
snadno rozezná a proto audio nejčastěji používá 16 bitů nebo 24 bitů pro lepší produkce.
7.3 Zdrojové kódování
Snaha snížit objem dat, které se dosahuje pomocí komprese, která může být ztrátová i bezeztrátová.
Nejčastěji se používají ztrátové komprese, které využívají psychoakustické metody uahrnující maskování
9

Obrázek 15: Kvantizace a vzorkování
vysvětlené výše, omezení frekvencí které člověk špatně slyší a další. Nejčastěji používané audio komprese
jsou MP3, AAC nebo bezeztrátový FLAC.
10
