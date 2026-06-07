Statistika a Pravděpodobnost - státnicové otázky Orri
1. Náhodná veličina, náhodný vektor, distribuční funkce, hustota a prav-
děpodobnostní funkce náhodné veličiny. Střední hodnota a rozptyl náhodné
veličiny a jejich odhady. Korelace a nezávislost náhodných veličin.
Nechť A je σ-algebra definovaná na Ω. Dále nechť P je pravděpodobnostní funkce definovaná na A,
pak
1. 0≤P(A)≤1∀A∈A
2. P je monotonni: A,B ∈A,A⊂B →P(A)≤P(B)
3. p(Ac)=1−P(A)
4. P(A∪B)=P(A)+P(B)−P(A∪B)
5. A,B ∈A,A⊂B →P(B−A)=P(B)−P(A)
6. prokaždouposloupnostdisjunktníchjevů{A }∞ ,takových,že(cid:83)∞ A =Ω,platíP( (cid:83)∞ A )=
j j=1 j=1 j j=1 j
(cid:80)∞
P(A )=1
j=1 j
Reálná funkce X definovaná na Ω se nazývá náhodná veličina, jestliže X je měřitelné zobrazení
X :(ω,A)→(R,B) pro libovolnou borelovskou množinu B ∈B. Neboli náhodná veličina je, když
náhodnému jevu přiřadíme číslo.
Nechť X je náhodná veličina. Její distribuční funkce je reálná funkce F reálné proměnné x
X
definovaná jako
F (x)=P(X ≤x)=P({ω :X(ω)≤x})x∈R
X
splňující vlastnosti:
1. je neklesající
2. zprava spojitá v libovolném bodě x∈R
3. lim F (x)=0
x=→−∞ X
4. lim F (x)=1
x→∞ X
Náhodné veličiny se dělí potom na spojité a diskrétní, jediný rozdíl je ve výpočtu (cid:82) × (cid:80)
Náhodná veličina X se nazývá absolutně spojitá, jestliže existuje nezáporná integrovatelná funkce
f taková, že platí
X
(cid:90) x
F (x)=P(X ≤x)= f (t)dt
X X
−∞
s vlastnostmi:
1. f (x)= dFX(x)
X dx
2. (cid:82)∞ f (x)dx=1
−∞ X
3. P(a<X ≤b)=F (b)−F (a)= (cid:82)b f (x)dx pro libovolná realná čísla a a b, kde a≤b
X X a X
Funkce f se nazývá hustota pravděpodobnosti náhodné veličiny X. V diskrétním případě se
X
tato funkce nazývá zkráceně pravděpodobnostní funkce.
Nechť X je náhodná veličina definovaná na pravděpodobnostním prostoru. Střední hodnota EX
náhodné veličiny je definována jako
(cid:90) ∞
EX = xf (x)dx
X
−∞
1

Statistika a Pravděpodobnost - státnicové otázky Orri
Nechť X je náhodná veličina. Hodnota EXn se nazývá n-tý moment náhodné veličiny X. Hodnota
E(X−EX)n se nazývá n-tý centrální moment náhodné veličiny X. Druhý centrální moment se
nazývá rozptyl a lze pro něj odvodit zjednodušený vztah
varX =E(X2)−(EX)2 =σ2
X
Odmocninaztétohodnotysenazývásměrodatná odchylkaaznačímezeintervalu,donějžspadne
67% hodnot. Ze znalosti střední hodnoty a variance lze rozdělení normovat na novou náhodnou
veličinu Z, pro niž platí EZ =0 a varZ =1.
Máme zobrazení ω →Rn, vektorXXX =(X ,...,X )T nazýváme náhodný vektor.
1 n
Pro náhodný vektor XXX se obdobně zavádí reálná funkce n reálných proměnných distribuční
(sdružená) funkce FX, definovaná vztahem
F (x)=P(X ≤x ,...,X ≤x
XXX 1 1 n n
Náhodný vektor X n náhodných veličin má absolutně spojité rozdělení, jestliže existuje nezáporná
funkce f n reálných proměnných taková, že
X
(cid:90) xn
F (x)= f (t )dnxxx
XXX XXX n
−∞
Funkce f se nazývá hustota rozdělení pravděpodobnosti náhodného vektoruXXX.
XXX
Pro vektor náhodných veličin se zavádějí číselné charakteristiky podobné jako pro jednu náhodnou
veličinu.
• Vektor středních hodnot:
EXXX =(EX ,...,EX )T
1 n
• Kovariační matice (na diagonále jsou variance jednotlivých veličin) definována jako matice
n×n s prvky:
cov(X ,X )=E(X −EX )(X −EX )
j k j j k k
• Korelační matice s prvky
cov(X ,X )
corr(X ,X )= j√ k
j k (cid:112)varX varX
j k
Korelačnímaticepředstavujenormovanoukovarianci.Kovariancemůženabývatlibovolnýchhodnot,
alekorelačnímaticemározpětíhodnotvintervalu[−1,1].Jsou-lidvěnáhodnéveličinyX,Y nezávislé,
pak pro ně platí cov(X,Y)=0.
Platí-li poslední rovnost, pak říkáme, že náhodné veličiny jsou nekorelované. Z nekorelovanosti však
obecně neplyne nezávislost.
Ne vždy máme k dispozici přesnou střední hodnotu a varianci. Ze souboru realizací náhodné veličiny
lze tyto charakteristiky odhadnout. Funkce náhodného výběru
n
1 (cid:88)
X = X
n n j
j=1
se nazývá výběrový průměr a funkce
n
1 (cid:88)
S2 = (X −X )2
n n−1 j n
j=1
se nazývá výběrový rozptyl.
2

Statistika a Pravděpodobnost - státnicové otázky Orri
V následujících grafech je uvedeno několik základních pravděpodobnostních rozdělení
3

Statistika a Pravděpodobnost - státnicové otázky Orri
2. Centrální limitní věta. Metoda maximální věrohodnosti. Základní prin-
cipy statistického testování hypotéz, testy střední hodnoty. Chí-kvadrát
test dobré shody.
Centrální limitní věta
Podstatou centrální limitní věty je tvrzení, že náhodná veličina X, která vznikla jako součet N
nezávislých náhodných veličin, má asymptoticky normální (Gaussovo) rozdělení. Samotná věta má
několik různých verzí, nejčastější je pravděpodobně Lévy-Lindebergova.
Věta Nechť X ,...,X jsou nezávislé stejně rozdělené náhodné veličiny se střední hodnotou µ a ko-
1 n
nečným rozptylem σ2. Označme
(cid:80)n
X −nµ
Z = j=√1 j
n
nσ2
dále označme F (x) distribuční funkci Z . Potom lim F (x)=Ψ(x) pro všechny x∈R, kde
n n n→∞ n
Ψ(x) je distribuční funkce normálního rozdělení. Věta zjednodušeně říká, že při velkém počtu
nezávislých veličin přechází pravděpodobnostní rozdělení na normální rozdělení N(µ,σ2).
Metoda maximální věrohodnosti V situaci, kdy známe typ pravděpodobnostního rozdělení, ale
neznáme jeho parametr θ, lze použít dostupné realizace náhodného vektoruXXX a pomocí metody
maximální věrohodnosti tento parametr určit z věrohodnostní funkce
L(θ)=Πn P (X =x )
j=1 θ 1 j
Obvykle je lepší pracovat s logaritmickou podobou této funkce
l(θ)=ln(L(θ))
Hledaný parametr θ se získá jako kořen rovnice
dl(θ)
=0
dθ
Jedná se vlastně o polohu maxima věrohodnostní funkce.
4

Statistika a Pravděpodobnost - státnicové otázky Orri
Testování hypotéz
Definice Nechť X =(X ,...,X )T je náhodný výběr z rozdělení, které závisí na parametru θ ∈Θ.
1 n
Chceme-li zjistit, zdali θ patří do nějaké podmnožiny parametrů Θ , nazveme tuto domněnku
0
hypotézou, značení H :θ ∈Θ , a na základě výběru X testujeme tuto hypotézu proti alternativě
0 0
H :θ ∈Θ\Θ . Pro testy se volí tzv. hladina testu α (většinou 0.05 ale i menší)
A 0
Střední hodnota lze testovat pomocí intervalových odhadů nebo t-testy, založených na studentově
t-rozdělení.
DefiniceMějměnáhodnývýběrX =(X ,...,X )T ačísloα∈(0,1).Dvojice(θ (X ,...,X ),θ (X ,...,X ))
1 n L 1 n U 1 n
se nazývá intervalový odhad parametru θ o spolehlivosti 1−α, jestliže
P((θ (X ,...,X ))<θ <P(θ (X ,...,X ))=1−α
L 1 n U 1 n
Konstrukce intervalového odhadu závisí na typu odhadovaného parametru a pravděpodobnostním
rozdělení, z něhož daný výběr pochází.
Nechť X = (X ,...,X )T je náhodný výběr z rozdělení N(µ,σ2),µ ∈ R je neznámý parametr,
1 n
σ2 >0 známá konstanta. Pak
(cid:16) σ σ (cid:17)
X −u √ , X +u √
n 1−α/2 n n 1−α/2 n
je intervalový odhad µ o spolehlivosti 1−α. Při neznáme varianci se použije její odhad z dat S .
n
TentoprincipsS lzepřipředpokladuCLVaasymptotickéspolehlivosti1−αaplikovatnalibovolné
n
rozdělení
Tímto principem lze pak testovat střední hodnotu µ, zdali náleží do určitého intervalu (popř. je
větší než určitý odhad) spolehlivosti (µ ,µ ).
L H
Obvykle se používá opačný postup, místo hledání intervalů pro testovaný parametr se z dat a
testované hodnoty vypočítává hodnota, která je realizaci nějaké náhodné veličiny, a ta se posléze
porovná s příslušným kvantilem. Tyto testy jsou založené na t-rozdělení transformaci výběrového
průměru, nazýváme je t-testy.
χχχ222-rozdělení
nnn
NechťX ,...,X jsounezávisléstejněrozdělenénáhodnéveličinysrozdělenímiN(0,1).Paknáhodná
1 n
veličina
n
(cid:88)
Y = X2
j
j=1
má tzv. χ2-rozdělení
n
Studentovottt-rozdělení NechťX jenáhodnáveličinasrozdělenímN(0,1)aY jenáhodnáveličina
s rozdělením χ2. Pak náhodná veličina
n
X √
Z = √ n
Y
má tzv. t -rozdělení o n stupních volnosti.
n
5

Statistika a Pravděpodobnost - státnicové otázky Orri
Jednovýběrový ttt-test Nechť (X ,...,X )T je náhodný výběr z N(µ,σ2), kde σ2 > 0, a před-
1 n
pokládejme, že ani jeden parametr není znám. Testujeme-li H : µ = µ oproti H : µ > µ pak
0 0 A 0
výpočet probíhá následovně.
√
1. Vypočteme hodnotu T = Xn−µ0 n
0 Sn
2. Pokud T ≥t zamítáme H . V opačném případě pak H nezamítáme.
0 1−α,n−1 0 0
S mírnými úpravami se provádějí testy pro situaci, zda je hodnota rovna či menší µ .
0
Pro t-test existují další varianty s ohledem na různé aplikace. Dalšími typy jsou například párový
t-test, dvouvýběrový t-test nebo testování normality.
Má-li binomické rozdělení více možných výsledků než jen úspěch a neúspěch, závádí se tzv. multino-
mické rozdělení.Předpokládejme,ževurčitémpokusumůženastatprávějedenzjevůA ,...,A a
1 k
označme pravděpodobnosti p =P(A ). Opakujme tento pokus n-krát a označme X počet výskytu
j j j
jevu A v těchto n pokusech. Pak
j
n!
P(X =x ,...,X =x )= px1...pk1
1 1 k k x !...x ! 1 k
1 k
a rozdělení vektoru (X ,...,X )T se nazývá multinomické.
1 n
Chceme-li testovat H , že skutečné hodnoty dílčích pravděpodobností jsou rovny předem zadaným
0
číslům p ,...,p , oproti alternativě, že aspoň jedna hodnota p je jiná, postupujeme následovně.
1 k j
1. Vypočteme hodnotu χ2 = (cid:80)k (Xj−npj)2
j=1 npj
2. Je-li χ2 >χ2 zamítáme H . V opačném případě pak H nezamítáme.
1−α,k−1 0 0
Test se nazývá Chi kvadrát test dobré shody
Příklady se mi psát nechce
6
