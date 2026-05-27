Obrázek 99: Blokové schéma spektrálního analyzátoru.
Vstupní signál se utlumí a je demodulován v směšovači. Pásmovou propustí se vybere konkrétní
měřené pásmo ve vybraném SPAN (celkové měřené frekvenční pásmo). Obvody DSP a následným
post-processingem se zobrazuje signál na zobrazovači.
Analyzátor signálu
V předmětu mu nebyla věnována prakticky žádná pozornost. Zjednodušeně by se dal popsat jako
hybrid osciloskopu se spektrálním analyzátorem.
Podle Haasze je analyzátor signálu přístroj, schopný vyhodnocovat přístroj v časové oblasti a
explicitně prohlašuje osciloskopy a zapisovače signálu jako analyzátory signálu.
Jsou to přístroje schopné počítat FFT, DFT a inverzní DFT. Mívají většinou dva identické vstupní
kanály. Díky tomu jscou schopné měřit nejen frekvenční spektrum a zobrazovat signál v časové ob-
lasti, ale i zobrazit autokorelační funkci, výkonovou spektrální hustotu a vzájemnou korelační funkci a
koherenční funkci.
46 Lineární a cyklická konvoluce, zpracování dlouhých signálů, vlast-
nosti DFT, váhování, časově-frekvenční analýza, číslicové filtry,
kvantování a jeho důsledky
(B2B31CZS)
Diskrétní Fourierova transformace (DFT) je numerický algoritmus pro výpočet Fourierovy transfor-
mace. Při jeho výpočtu se vychází ze základního vzorce
N−1
X[k] =
(cid:88) x[n]e−i2
N
πnk
(729)
n=0
Kvůli konečnosti numericky zpracované posloupnosti se jedná pouze o odhad spektra signálu délky N.
Vztah mezi DFT a Fourierovou transformací je následující.
204

Máme signál s(t) se spektrem S(ω). Filtrací frekvenčního spektra a následným vzorkováním zís-
káme signál s[n] = s(nT ) a periodické spojité spektrum S(Ω). Poté omezíme délku posloupnosti z
s
teoretické nekonečné délky na konečný počet vzorků N, čímž dojde i k vzorkování spektra a získame
tedy výslednou dvojici s[n] a S[k].
DFT sdílí většinu vlastností s Fourierovou transformací. Pro konvoluci dvou signálů platí
F{x(t)∗y(t)} = X(ω)·Y(ω). (730)
avšak zároveň z duality Fouerierovy transformace platí i
F{x(t)y(t)} = X(ω)∗Y(ω). (731)
Tato vlastnost se projeví negativně při zkracování signálů, které lze modelovat jakožto přenásobení
původního signálu obdélníkovou funkcí. V diskrétním signálu dochází k prosakování ve spektru, repre-
zentovaným v následujícím obrázku.
25
20
15
10
5
0
0 5 10 15 20 25 30 35 40 45 50
Frekvence f [Hz]
|)ω(H|
adutilpmA
Zkracovácímu oknu se říká okénková funkce. Pro redukci prosakování se používají jiná váhovací okna,
mající lepší spektrální vlastnosti (rychlejší útlum vyšších frekvenčních složek). Nejrozšířenějšímí okén-
kovými funkcemi jsou Hammingova, Hannova, Blackamannova nebo Kaiserova váhovací funkce. Okén-
kové funkce sice potlačí prosakování, ale dochází k rozštěpení spektrálních čar. V situaci, kdy máme k
dispozici pouze málo vzorků, se spektrum interpoluje nulami pro zvýšení jednoznačnosti.
DFT má výpočetní náročnost O(n2), což je pro větší N nepřijatelné. Její podstatné vylepšení je Fast
Fouerier Transform (FFT), které se neliší nijak v definici původního problémů, pouze v efektivní
implementaci založené na rozmělňování na sudé a liché posloupnosti. Algoritmus FFT má složitost
O(nlog(n)).
Pročasově-frekvenčníanalýzusepoužíváspektrogram,kdesevyužívározkladsignálůnavícesegmentů,
z nichž se poté počítá spektrum. Pro zobrazení se používá rozpoložení x osa čas, y osa frekvence a
205

8
7
6
5
4
3
2
1
0
1 2 3 4 5 6 7 8 9 10 11
Time (ms)
)zHk(
ycneuqerF
Obrázek 100: Příklad spektrogramu
barva značí amplitudu v decibelech. Na spektrogram se přenáší Heisenbergův princip neurčitosti
(cid:126)
∆t∆E ≥ , (732)
2
znějžvyplývá,žerozlišeníčasovéafrekvenčníosynemůžebýtlibovolné,neboliženenímožnélibovolně
přesně lokalizovat signál ve frekvenci a zároveň v čase bez opakovaného výpočtu spektrogramu. Tento
závěr vyplývá i z Fouerierovy transformace.
Diskrétní systémy se popisují na zakládě impulsové odezvy a přenosové funkce. Pro získání výstupního
signálu y[n] se používá konvoluce vstupního signálu x[n] délky N s impulsovou odezvou h[n] délky M
M
(cid:88)
y[n] = x[n]∗h[n] = x[n−j]h[j]. (733)
j=0
Výsledná délka posloupnosti y[n] je rovna L = M +N −1. Podobně jako DFT má lineární konvoluce
kvadratickou algoritmickou složitost. Využívá se vlasnosti (730), avšak pro získání ekvivalentních vý-
sledků je nutné interpolovat oba signály x[n] a h[n] na délku L nulami. Tato metoda se nazývá cyklická
konvoluce a má řád stejný jako FFT. Výsledná posloupnost y[n] se získá použitím inverzní DFT.
Cyklická konvoluce se převážně používá v situacích, kdy je na vstupu systému dlouhý signál. Při zpra-
covávání například telefonního hovoru je nutné získavat výsledky průběžně. K tomu se používájí dvě
metody OLA - overlap-and-add a OLS - overlap-and-save, v nichž dochází k segmentaci příchozích
bloků signálu a jejich zpracování za pomocí impulsové odezvy.
206

Číslicové filtry patří mezi nejzákladnější bloky v zpracování číslicových signálů, které bez nich nemůže
prakticky vůbec existovat. Třemi základními operacemi jsou sčítání
x [n]
1
y[n] = x [n]+x [n]
1 2
x [n]
2
násobení,
a
x[n] y[n] = ax[n]
a zpoždění.
x[n] z−1 y[n] = x[n−1]
Jejich popis se provádí pomocí schémat, impulsové odezvy h[n], konvoluce, diferenční rovnice, pře-
nosové funkce a frekvenční charakteristiky, nebo z diagramu nul a pólů. Všechny zmíněné způsoby jsou
ekvivalentní a výsledky jednoho jsou obvykle vstupy druhého. Při spojování systémů platí komuta-
tivita, asociativita a distributivita. Oproti analogovým systémům je v číslicových soustavách možné
realizovat systémy s nekonečnou (Infinite Impulse Response - IIR) i s konečnou (Finite Impulse Re-
sponse - FIR) impulsovou odezvou. U FIR systému jsou koeficienty filtru přímo hledanou impulsovou
odezvou h[n].
b b
x[n] 0 y[n] x[n] 0 y[n]
b 1 a 1
z−1 z−1
(a) FIR systém (b) IIR systém
Řád filtru se určuje ze zpožďovacích členů.
V IIR filtrech se používájí číslicové ekvivalenty analogových aproximací (Butterworth, Chebys-
hev, Cauer...). Pro návrh FIR filtrů se používájí metoda okna, optimalizační metoda nebo metoda
nejmenších čtverců. S jejich pomocí lze realizovat i systémy v analogových soustavách nerealizovatelné
(klouzavý průměr, hřebenový filtr...) IIR postačuje nízký řád, avšak je u nich nutné kontrolovat jejich
stabilitu, jsou navíc zatíženy zkreslením vlivem nelineární fázové charakteristiky. FIR filtry potřebují
oproti IIR mnohem vyšší řád, což zanáší do systému zpoždění. Není u nich ovšem nutná kontrola
stability a jsou zatíženy mnohem menším zkreslením výstupního signálu než IIR.
Návrh filtrů se provadí z tolerančního pole, v němž jsou zadány maximální zvlnění v propustném
a nepropustném pásmu a kritické frekvence. Obecně platí
– menší zvlnění v přechodném pásu → šiřší přechodové pásmo
– vyšší řád → užší přechodové pásmo
– menší zvlnění nebo užší přechodové pásmo → větší nelinearita fázové charakteristiky
207

– strmost v přechodovém pásmu závisí na typu aproximace
Má-li filtr symetrickou impulsovou odezvu (sudá nebo lichá), pak má lineární fázovou charakte-
ristiku - nezkreslený výstup. Řád filtru je roven počtu pamětí transverzální struktury, počet členů
impulsové odezvy je roven řád+1.
Při implementaci číslicových filtrů se používají kanonické transformace, které zefektivní výsledný
obvod.
Kvantování
Kvantování je operace následující po vzorkování signálů. Jedná se o diskretizaci v amplitudě. Defi-
nuje se pro něj několik základních pojmů
– kvantizační krok - určuje přesnost zobrazení čísel a lze jej chápat jako nejmenší možnou změnu
hodnoty o velikosti ∆ = X 2−B, kde X je použité měřítko a B počet bitů.
M M
– kvantizační chyba - rozdíl mezi přesnou a kvantovanou chybou
– typy kvantování - zakrouhlování a usekávání
– dynamický rozsah - D = 20log(X /X )
max min
Kvantování je nelineární operace, generuje šum a nelze pro ni použít princip superpozice. Šum je
generován při operacích násobení a součtu, kde může nastat přetékání do vyšších řádů.
Při kvantování číslicových systémů dochází ke kvantování koeficientů filtru, čímž dochází ke změně
polohy pólů a zhoršení vlastnosti filtrů, v kritických případech i k nestabilitě systému. Dále může
při kvantování mezivýsledků v IIR systémech vznikat limitní cykly - autonomní stejnosměrný nebo
střídavý signál s různou amplitudou. Tento jev je silně nežádoucí. Pro redukci vlivů kvantování se
používá rozklad filtru na sekce druhého řádu a jejich kaskádní nebo paralelní zapojení.
Analýza kvantovaných systému se provádí na základě statistického popisu, simulací nebo determ-
nistickou analýzou. Každá z těchto metod má své výhody i nevýhody.
47 Filtrace ve frekvenční oblasti, převzorkování, banky filtrů, od-
had parametrů náhodných signálů, spektrální a korelační analýza
(B2B31CZS)
47.1 Filtrace ve frekvenční oblasti
Filtrace ve frekvenční oblasti je součin spektra signálu se spektram impulsové odezvy
filtru
Y(ω) = H(ω)·X(ω). (734)
Normálně se filtrace provádí skrz lineární konvoluci
M−1
(cid:88)
y[n] = h[n]∗x[n] = h[k]x[n−k]. (735)
k=0
Tento přístup je při rostoucí délce vstupních posloupností velmi výpočetně náročny (O(n2)). Mnohem
výhodnější je převést signály na jejich spektra
Y(eiΘ) = H(eiΘ)·X(eiΘ) (736)
208

a tato spektra diskretizovat. Spektra se diskretizací zperiodizují, navíc většinou nemají ani stejnou
délku-nelzejemeziseboučíslicověnásobit.Výslednádélkavýstupníhosignáluy[n]zlineárníkonvoluce
je L = M +N −1, kde M je délka impulsové odezvy a N je délka vstupního signálu. Tato podmínka
je zohledněna doplěním nul za signály x[n] a h[n] na délku L. Následně se signály převedou DFT na
spektra,kterásemeziseboupřenásobí,apoužitímiDFTsezískávýslednáposloupnosty[n].Filtraceve
frekvenční oblasti má složitost pouze O(nlog(n)). Při velkých N jsou rozdíly ve výpočetní náročnosti
neskutečné.
47.2 Převzorkování
Převzorkovánípatříkzákladnímoperacímvčíslicovémzpracovánísignálů.Realizujísesnímnapříklad
banky filtrů nebo Σ-∆ modulace.
Snížení vzorkovací frekvence se provádí operací decimace faktorem M ve dvou krocích.
x[n] y[n]

F (cid:121)M
Obrázek 102: Schéma decimace.
Signál prochází prvně decimačním filtrem pro omezení šířky pásma. Blok decimátor následně po-
nechává každý M-tý vzorek. Decimace zužuje šířku pásma signálu neboť snižuje vzorkovací frekvenci
f na f(cid:48) = f /M. Decimátor není časově invariantní, ale je invariantní s periodou M.
s s s
Zvýšení vzorkovací frekvence se provádí operací interpolace faktorem L ve dvou krocích
x[n] y[n]
(cid:120)
L F
Obrázek 103: Schéma interpolace.
Signál se prvně doplní L−1 nulami mezi vzorky, z čehož ve spektru vznikají spektrální zrcadla. In-
terpolačním filtrem se zrcadla posléze odstraňují. Interpolace zvyšuje vzorkovací frekvenci fs(cid:48) = fs·L
a tím zvětšuje šířku pásma signálu. Expandér není časově invariantní, ale je invariantní s periodou L.
ZměnavzorkovacífrekvencevneceločíselnémpoměruL/M seprovádíkaskádnímzapojeníminterpolace
a decimace.
x[n] y[n]
(cid:120) 
L F F (cid:121)M
1 2
Obrázek 104: Schéma kaskády interpolace a decimace.
Hledáme největší společný dělitel D vstupní f a výstupní f vzorkovací frekvence. Filtr ve sché-
i o
matu se používa jen jeden (ten s přísnějšími nároky). Pro větší hodnoty změny vzorkovací frekvence je
nutné rozložit decimaci i interpolaci na káskádu dílčích operací.
Pro decimaci a interpolaci existuje několik identit, které se používají pro výhodnější implementaci
soustav (polyfázový rozklad).
209

x[n] y[n] x[n] y[n]
 
z−M (cid:121)M (cid:121)M z−1
x[n] y[n] x[n] y[n]
 
(cid:121)M H(z) H(zM) (cid:121)M
x[n] y[n] x[n] y[n]
(cid:120) (cid:120)
z−1 L L z−L
x[n] y[n] x[n] y[n]
(cid:120) (cid:120)
H(z) L L H(zL)
Zapojení vlevo a vpravo jsou si navzájem rovné.
47.3 Banky filtrů
Skupina číslicových filtrů vyhovující jistým podmínkám (podmínky perfektní rekonstrukce).
(cid:120)
 L F (z)
H (z) (cid:121)2 0
0
x[n] y[n]

H (z) (cid:121)2 (cid:120)
1 L F (z)
1
Obrázek 106: Dvoupásmová banka filtrů. Vlevo je analyzující banka a vpravo syntetizující banka.
Výstup dolní propusti H (z) je aproximace původního signálu a výstup horní propusti H (z) obsa-
0 1
huje detaily. Analyzující banka rozkládá decimací a filtrací signál do frekvenčních pásem. Syntetizující
banka dílčí signály interpoluje a slučuje. Podmínky perfektní rekonstrukce pro dvojpásmový rozklad
jsou
– žádné překrývání: H (−z)F (z)+H (−z)F (z) = 0
0 0 1 1
– žádné zkreslení: H (z)F (z)+H (z)F (z) = 2z−D
0 0 1 1
Výstup je pak roven
y[n] = x[n−D], (737)
kde D je zpoždění. Důsledkem těchto podmínek je svázanost jednotlivých filtrů, které nemohou být
libovolné. Pro dvojpásmovou banku z těchto podmínek vyplývají vztahy F (z) = H (−z) a F (z) =
0 1 1
−H (−z).UvedenéschémaprodvoupásmovýrozkladlzezobecnitnaM pásem.Interpolaceadecimační
0
faktor je pak roven M. Další možností je stromová struktura, v níž se signály rozmělňují do binárního
stromu.
210

Obrázek 107: Stromová struktura banky filtrů.
Bankou filtrů lze počítat i transformace. Samotný princip rychlé Fourierovy transformace je za-
ložen na bankách filtrů. Při nelineárním dělení frekvenčních pásem lze počítat diskrétní Waveletová
transformace.
47.4 Odhad parametrů náhodných signálů
Při zpracování signálů máme k dispozici většinou signály zatížené šumem. Navíc všechny signály
jsoukonečné→místoskutečnýchempirickýchcharakteristik(středníhodnota,variance,korelace)pra-
cujeme pouze s jejich odhady. Většinou se u signálu předpokládá ergodicita (empirické charakteristiky
jsou pro tyto procesy nenáhodné (mají nulový rozptyl), provádí se jejich segmentace a tyto celky se
pak analyzují jako kvazistacionární.
Chybyodhadůlzerozdělitnasystématickéanáhodné.Systématickéchybysecharakterizujívychýlením
(φˆ je odhad je charakteristiky φ)
b[φˆ] = φ−Eφ (738)
Rozlišují se tři možné situace
– b[φˆ] (cid:54)= 0 je vychýlený odhad
– b[φˆ] = 0 je nechýlený odhad
– lim b[φˆ] = 0 je asymptoticky nevychýlený odhad
T→∞
Náhodné chyby jsou popsány variancí
varφˆ= E(φˆ−Eφˆ)2 (739)
V případě, že lim varφˆ = 0 se jedná o konzistentní odhad (zároveň je asymptoticky nestranný).
T→∞
Pomocí definovaných veličin se celková chyba vyjádří jako
(cid:32) (cid:33)2
b[φˆ] varφˆ
ε2 = ε2+ε2 = + (740)
b r φ φ2
211

Odhad střední hodnoty Provádí se pro segment o délce N stacionárního a ergodického procesu,
N−1
1 (cid:88)
µˆ = x[n], (741)
X
N
n=0
je nevychýlený a konzistentní. Pro nestacionární proces se signály segmentují a střední hodnota se
počítázvlášťprokaždýsegment.Výsledekmáschodovitýtvaraoznačujesejakotrendsignálu.Provádí
se pomocí regresní analýzy. Střední hodnota se provádí pro aditivní rozklad signálu - centrování.
Odhad variance Pro segment délky N stacionárního a ergodického procesu se počítá jako
N−1
1 (cid:88)
σˆ2 = (x[n]−µˆ )2. (742)
X N X
n=0
Je asymptoticky nevychýlený a konzistentní. Podobně se odhaduje i výkon Pˆ , který je s variancí
X
svázan vztahem
σˆ2 = Pˆ −µˆ2 (743)
X X X
Při nestacionárním ergodickém procesu se provádí segmentace a výpočet rozptylu, načež se následně
vytváří multiplikativní rozklad signálu.
Odhad korelace Pro segment délky T stacionárního a ergodického procesu pro diskrétní signál
N−1−|m|
1 (cid:88)
Rˆ [m] = x[n+m]x∗[n]. (744)
X
N
n=0
Odhad je asymptoticky nevychýlený a konzistentní. Druhou možností odhadu je použití vzorce
N−1−|m|
1 (cid:88)
Rˆ [m] = x[n+m]x∗[n]. (745)
X
N −|m|
n=0
Výsledek je sice nevychýlený, ale má větší chybu odhadu (nekonzistentní). Na růst chyby odhadu má
větší vliv pokles délky signálu než zvětšování zpoždění m.
47.5 Korelační a spektrální analýza
Korelační analýza určuje míru podobnosti dvou signálů, případně podobnost signálu
sebe se sebou samým. Lze s jejím použitím zjistit například zpoždění širokopásmového šumu a jeho
zpožděné repliky. Dále lze s jejím použitím určit, zdali je nějaký signál periodický a popřípadě jeho
periodu (posunuté repliky signálu vrátí jeho maximální hodnotu v setkání period).
Spektrální analýza se používá k zjišťování frekvenčních vlastností signálů (zastoupení
jednotlivých frekvencí v signálu). Standardním nástrojem k jejímu získání je Fouerierova trans-
formace a její různé formy. Patří mezi základní postupy při analýze signálů.
48 Fyziologie a anatomie vidění. Snímání a reprodukce obrazu. Zdro-
jové kódování obrazové informace a přenosové video systémy. Di-
gitální fotografie, metody předzpracování. (A2B37MMT)
48.1 Fyziologie a anatomie vidění
Oko - uložené uvnitř lebeční kosti
Rohovka-společněsčočkousepodílínalomusvětla,průhlednákopulovitězakřivenávrstvapokrývající
212
