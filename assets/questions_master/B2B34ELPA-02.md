# Elektronické prvky (B2B34ELPA) - otázka 2

**Oficiální otázka:** Aktivní elektronické prvky (tranzistory MOSFET, BJT, JFET), výkonové spínací součástky, optoelektronické prvky, logická hradla a paměti – principy, struktury, charakteristiky, modely a aplikace.

**Zdroj:** `complete-HEX-compost.pdf`, strany 177-182
## Strana PDF 177
33 Aktivní prvky (tranzistory MOSFET, BJT, JFET), výkonové spí-
nací součástky, optoelektr. prvky, logická hradla a paměti – prin-
cipy, struktury, charakteristiky, modely a aplikace. (B2B34ELP)
Aktivní prvky
Obrázek 64: Přehled typů tranzistorů
MOSFET
Metal Oxide Semiconductor Field Eﬀect Transistor (MOSFET) je polem řízený tranzistor, kde je
vodivost kanálu mezi elektrodami Source (S) a Drain (D) ovládána elektrickým polem vytvářeným ve
struktuře kov-oxid-polovodič napětím mezi Gate (G) a Source. Elektroda Bulk (B) je připojena na
substrát a většinou spojuje se sourcem nebo se uzemňuje. MOSFET využívá strukturu MIS (Metal-
Insulator-Semiconductor) popsanou v předchozí kapitole, dielektrikem je zde SiO2, které se nachází
mezi hradlem a kanálem.
Mosfety rozdělujeme:
•Dle typu polovodiče hradla (Gatu)
– PMOS
– NMOS
•Dle typu vodivého kanálu
– S indukovaným kanálem - nevodí při UGS = 0, prahové napětí UT >0
– S zabudovaným kanálem - vodivý kanál při UGS = 0, UT <0
142

## Strana PDF 178
Obrázek 65: Výstupní voltampérová charakteristika - indukovaný kanál - NMOS (zabudovaný kanál
by vodil i s UGS mírně v minusu, PMOS je to stejný graf jen ve třetím kvadrantu - vše záporné)
Obrázek 66: Řez N-kanálovým MOSFETem
Vlastnosti MOSFETů a důvody proč se využívají pro tranzistory na čipu (kromě integrovaných obvodů
se využívají také pro elementární logická hradla, spínače a CMOS logiku):
•Substrát je dobře odizolován od Sourcu, Drainu a kanálu - to umožňuje vysokou hustotu integrace
•Menší teplotní závislost než BJT
•Vysoký vstupní odpor
•Velmi malá spotřeba proudu - proto tolik netopí
143

## Strana PDF 179
JFET
Junction Field Eﬀect Transistor (JFET) je velmi podobný MOSFETu. Hlavním rozdílem je, že je
JFET při nulovém napětí na Gate maximálně otevřený. Používá se v zesilovačích, oscilátorech nebo
jako napětím řízený odpor (v odporové oblasti výstupní charakteristiky).
BJT
BJT je oproti FETům bipolárním tranzistorem (obsahuje dva PN přechody) a je řízen proudem
do báze. Při dostatečném proudu se tranzistor otevře a mezi bází (B) a emitorem (E) se objeví napětí
okolo 0,7 V. Poslední elektrodou je kolektor (C). Rozlišujeme dva základní typy, podle poskládání
dotovaných polovodičů:
•NPN (šipka ven) - kolektorový proud tvoří elektrony - je rychlejší
•PNP
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

## Strana PDF 180
Triak
Triak je spínač střídavého proudu, je schopný vést proud oběma směry. Pro sepnutí musí být na
hlavních elektrodách dostatečně velké napětí a do řídící elektrody musí být přiveden proudový impulz.
Triak zůstane sepnutý, dokud se velikost protékajícího proudu nesníží pod hodnotu vratného proudu.
IGBT
Insulated Gate Bipolar Transistor jedná se o transistor který má izolovaný gate. Používá se na vy-
soké napětí a výkony. Schématicky lze nahradit darlingtonovým zapojením. Běžně používaná výkonové
součástka (lokomotivy, tramvaje, zdroje)
Optoelektonické prvky
Interakce záření a hmoty může probíhat jedním ze tří mechanismů a to: absorpcí , spontánní enmisí
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

## Strana PDF 181
Energeticky nezávislá paměť (non-volatile) udrží obsah i bez napájení. ROM je paměť pouze
pro čtení. EEPROM je vymazatelná, ale složitá s nižsí hustotou a vyšší cenou, EEPROM využívá
speciálních NMOS tranzistorů. FLASH je organizována po blocích a každý lze přepisovat samostatně,
je základem SSD, USB úložišť nebo SD karet.
34 Klasifikace prostředí. Pole vírové a potenciální. Náboje jako zdroj
pole- princip superpozice a jeho aplikace, metoda zrcadlení. Elek-
trostatické pole - Gaussova v. pro elektrostatiku, kondenzátor,
výpočet kapacity a průrazného napětí (B2B17EMP)
Klasifikace typů elektromagnetických polí
POZOR:Pankrác ve svých podkladech používá bezrozměrný vektor "r12"nebo "r0", v otázkách EMP
je to dodrženo, jinde lze narazit na "r0
".
r
Pro usnadnění lze studovat elektrické a magnetické pole odděleně. Pole nepohyblivých nábojů nazý-
váme elektrostatické pole. Elektrické pole nábojů, které se pohybují ustáleným pohybem v podobě
stacionárního elektrického proudu, nazýváme stacionární proudové pole, díky pohybu nábojů je
přítomno i stacionární magnetické pole.
Elektrické pole je potenciální platí-li:
pole.
V obecném případě vyvolává vždy časová změna elektrického pole magnetické pole a časová změna
magnetického pole elektrické pole. Existuje tedy jedno duální pole, pole elektromagnetické, obě složky
je nutné sledovat současně. V tomto případě mluvíme o nestacionárním elektromagnetickém poli.
$$
E= -\nabla\varphi, (519)
$$
kde φ je elektrický potenciál, který popisuje potenciální energii náboje ve stacionárním el. poli. Mag-
netické pole je pole vírové, takové pole odnikud nevytéká a je tvořeno polem zřídlovým, kterým je el.
Náboje jako zdroj pole
O částicích, které působí elektromagnetickými silami na své okolí, říkáme, že nesou elektrický
náboj. Existují dva typy náboje: kladný a záporný (příklad částic: proton a elektron, jejich velikost
je 1,6·10−19 = elementární náboj). Jednotkou elektrického náboje je Coulomb. V elektrickém poli
se náboje stejného znaménka odpuzují, náboje různých znamének přitahují. Náboje nikdy nevznikají
a nezanikají, jen se přemisťují a hromadí.
Částice s nábojem na sebe vzájemně působí elektromagnetickými silami, vzniká tak elektromag-
netické silové pole. Síly rozdělujeme na elektrické a magnetické. Magnetické síly se projevují pouze
mezi pohybujícími se částicemi.
odpuzují - vzniká mezi nimi silové elektrické pole.
1
Q1Q2
$$
F_{12} =
$$
4πϵ0
Bodový nábojje abstrakce používaná v příkladech. Je to náboj konečné velikosti na zanedbatelně
velkémtělese.ElektrickásílamezidvěmabodovýminábojivyplývázColombovazákona.Sílasezvětšuje
s velikostí nábojů a zmenšuje se vzdáleností. Náboje opačného znaménka se přitahují, stejného se
r2 r12 (520)
Superpozice pole bodových nábojů je sečtení polí jednotlivých bodových nábojů v nabitém
tělese. Pro spočítání superpozice potřebujeme znát rozložení náboje - tvar pole. Pole dokážeme sečíst
jen pokud je náboj rozložen na určité ploše, v objemu nebo podél linie.
146

## Strana PDF 182
![Strana PDF 182](pdf_pages/page-181.png)
