Komplexní Analýza - státnicové okruhy Orri
KANA - 1
1. Funkce komplexní proměnné a jejich derivace
√
Pro zjednodušení zápisu se využívá imaginární jednotka definovaná: i= −1
MnožinakomplexníchčíselCjemnožinauspořádanýchdvojic:C=[(x,y)|x,y ∈R],vybavenédvěmi
operacemi:
+:C×C→C:(x ,y )+(x ,y )=(x +x ,y +y )
1 1 2 2 1 2 1 2
·:C×C→C:(x ,y )·(x ,y )=(x x −y y ,x y +x y )
1 1 2 2 1 2 1 2 1 2 2 1
Každé zobrazení C→C se nazývá komplexní funkce komplexní proměnné, množina
D(f) = [z ∈ C|f(z) existuje ] je pak definiční obor funkce f . Limita se s ohledem na několik
skutečností v C zavádí podobně.
korektní zápis komplexního čísla je vyjádřeno: z =x+iy
Dále se definuje operace Re() pro reálnou složku a Im() pro imaginární složku komplexního
čísla
tj. Re(z)=x a Im(z)=y
Číslem komplexně sdruženým rozumíme: (z)∗ =(x+iy)∗ =x−iy
√
Absolutní hodnota z je definována: |z|= z∗z
Argument komplexního čísla:

arctan
(cid:0)y(cid:1)
Re(z)≥0, z ̸=0
 x
arg(z)= arctan
(cid:0)y(cid:1)
+π Re(z)≤0, Im(z)≥0
x
arctan (cid:0)y(cid:1)
−π Re(z)≥0, Im(z)<0.
x
polární(exponenciální) tvar komplexního čísla: z =x+iy =|z|eiarg(z)
Moivreova věta: (z)n =(|z|eiarg(z))n =|z|neinarg(z)
Pro komplexní proměnné se definuje derivace stejně jako pro funkce reálné proměnné. Komplexní
funkce f se často rozkládá na její reálnou a imaginární část
f(z)=u(x,y)+iv(x,y)
Věta Nechť f :C→C má složky f =u+iv a nechť z =x+iy ∈C. Pak následující je ekvivalentní
f′(z) existuje
Cauchy-Riemannovy podmínky: u a v mají totální diferenciál v bodě (x,y) a platí
∂u(x,y) ∂v(x,y)
=
∂x ∂y
∂u(x,y) ∂v(x,y)
=−
∂y ∂x
1

Komplexní Analýza - státnicové okruhy Orri
navíc platí, že
∂u(x,y) ∂v(x,y) ∂v(x,y) ∂v(x,y)
f′(z)= +i = −i
∂x ∂y ∂x ∂y
Definice Nechť G ∈ C je otevřená množina. Řekneme, že komplexní funkce f je holomorfní1 na
G, jestliže f′(z) existuje ve všech bodech množiny G. Tyto funkce se nazývají holomorfní. Funkce
holomorfní na množině G je spojitá na G. Jestliže má funkce f spojité druhé derivace, pak platí
Laplaceova rovnice ∇2f =0 a tato funkce se nazývá harmonická.
například: f(x,y)=x2−y2
∂2f ∂2f
=2, =−2, → ∇2f =2−2=0
∂x2 ∂y2
PoznámkaVkomplexnímoborujefunkceexponenciályperiodická.Logaritmusjetzv.vícehodnotová
funkce (pro jedno z nabývá nekonečně mnoho hodnot)
2. Křivkový integrál
V komplexní proměnné má největší význam křivkový integrál komplexní funkce. Zjednodušeně se
jednáoanalogiikřivkovéhointegráluvektorovéhopolepodélkřivky.Následujícídefinicezavádítento
pojem.
Definice Nechť C je křivka s parametrizací φ:[a,b]→C a nechť f :C→C je komplexní funkce
spojitá v bodech křivky C. Křivkový integrál funkce f podél křivky C je
(cid:90) (cid:90) b
f(z)dz = f(φ(t))φ′(t)dt
C a
z křivkového integrálu vychází následující věty
Věta Cauchyho Nechť G⊂C je jednoduše souvislá oblast a nechť f je holomorfní funkce na G.
Pak pro každou jednoduchou křivku C ⊂G platí
(cid:90)
f(z)dz =0
C
Cauchyův integrální vzorec Nechť G⊂C je jednoduše souvislá oblast a nechť f je holomorfní
na G. Pak pro každou jednoduchou uzavřenou křivku C ⊂G kladně orientovanou a pro každý bod
z ∈C platí
0
(cid:90) f(z)dz
=2πif(z )
z−z 0
C 0
Definice Poloměr konvergence označuje největší okolí bodu z , na němž součet mocninné řady
0
konverguje.
DefiniceMocninnářadakonvergujebodověnamnožiněM,jestližeprokaždéz ∈M existujevlastní
limita S(z) částečných součtů
S(z)= lim S (z)
n
n→∞
1holomorfnífukncesplňujeC-Rpodmínky,jekomplexnědiferencovatelnávkaždémboděmnožiny
2

Komplexní Analýza - státnicové okruhy Orri
V opačném případě řada diverguje v bodě z. Řada konverguje absolutně, pokud konverguje řada
∞
(cid:88)
|a ||z−z |n
n 0
n=0
Řada konverguje stejnoměrně na množině M, jestliže existuje funkce S(z) taková, že
lim sup(|S (z)−S(z)|)=0
m
z∈M
Konvergence řad se vyšetřuje odmocninovým a limitním kritériem, z nichž vyplývá i případný
poloměr konvergence.
Věta Nechť f je funkce daná mocninnou řadou (cid:80)∞ |a ||z−z |n. Pak tato funkce má derivace
n=0 n 0
všech řádů na kruhu konvergence a pro koeficienty řady existuje vzorec
f(n)(z )
0 =a , pro všechna n≥0
n! n
Věta Nechť f je holomorfní na oblasti G⊂C a nechť z ∈G. Pak existují koeficienty a ∈C, že
0 n
∞
(cid:88)
f(z)= a (z−z )n
n 0
n=0
pro všechna z ležící v největším otevřeném kruhu konvergence se středem v z a obsaženém v G.
0
Stručně řečeno; každá holomorfní funkce je lokálně reprezentovatelná mocninnou řadou. Z této věty
vyplývá i tzv. zobecněný Cauchyův integrální vzorec
n! (cid:90) f(z)dz
fn(z )=
0 2πi (z−z )n+1
C 0
Věta Nechť D ⊂C je jednoduše souvislá oblat a nechť f je komplexní funkce spojitá na D. Pak
následující tvrzení jsou ekvivalentní
1. f je holomorfní na D
2. Platí Cauchyův integrální vzorec
3. (cid:82) f(z)dz =0 pro každou uzavřenou jednoduchou křivku C ⊂D
C
4. f je lokálně reprezentovatelná mocninou řadou
Definice Řada tvaru
∞ ∞ ∞
(cid:88) (cid:88) (cid:88)
a (z−z )n = a (z−z )−n = a (z−z )n
n 0 −n 0 n 0
n=−∞ n=1 n=0
se nazývá Laurentova řada. První část na pravé straně rovnosti se nazývá hlavní část Laurentovy
řady s poloměrem konvergence r. Druhá část se nazývá regulární část Laurentovy řady s poloměrem
konvergence R. Řada konverguje v daném bodě z ∈C, konvergují-li v tomto bodě současně obě její
části.
Věta Nechť f je funkce holomorfní na mezikruží P(z ,r,R), kde 0 ≤ r < R ≤ ∞. Pak existují
0
koeficienty a ∈C,n∈Z, že (cid:80)∞ a (z−z )n
n n=0 n 0
3

Komplexní Analýza - státnicové okruhy Orri
pro všechna z ∈P(z−0,r,R). Přitom koeficienty této Laurentovy řady jsou určeny jednoznačně a
platí
1 (cid:90) f(w)dw
a = , n∈Z
n 2πi (w−z )
C 0
kde C je libovolná kladně orientovaná jednoduše uzavřená křivka ležící v mezikruží P(z ,r,R) a
0
mající bod z ve své vnitřní oblasti.
0
3. Singularity
Definice Nechť platí, že f je holomorfní funkce v otevřené množině obsahující U(z ,ϵ)\z , přičemž
0 0
bodz ∈C∪[∞]nenívdefiničnímoborufunkcef .Bodz senazýváizolovanýmsingulárnímbodem
0 0
funkce f (singularitou). Řekneme, že z je
0
1. odstranitelná singularita funkce f, existuje-li vlastní limita funkce f v bodě z
0
2. pól funkce f , je-li lim f(z)=∞
z→z0
3. podstatná singularita funkce f , jestliže f nemá limitu v bodě z .
0
U kořenů a polů rovnic definujeme jejich řád. Kořen z funkce f má řád k, platí-li
0
f(z)=(z−z )kg(z)
0
případně pól řádu k, platí-li
g(z)
f(z)=
(z−z )k
0
kde v obou rovnostích platí, že g(z )̸=0
0
Laurentův rozvoj f(z)= (cid:80)∞ a (z−z )n v prstencovém okolí bodu z ∈C má f v bodě z
n=−∞ n 0 0 0
1. odstranitelnou singularitu právě tehdy. když všechny koeficienty hlavní části Laurentovy
řady jsou nulové.
2. pól násobnosti k právě tehdy, když a =0 pro všechna n<−k a a ̸=0
n −k
3. podstatnou singularitu právě tehdy, když nekonečně mnoho koeficientů hlavní části Lau-
rentovy řady je nenulových.
4

Komplexní Analýza - státnicové okruhy Orri
4. Rezidua, reziduová věta a její aplikace
Z integrálního vzorce pro koeficienty mocninné řady holomorfní funkce f, lze vypozorovat jeden
speciální případ, kdy n=−1 a vztah přechází
1 (cid:90)
a = f(w)dw
−1 2πi
C
Na pravé straně rovnice se objevil integrál ze samotné funkce f. Umíme-li tedy nálezt koeficient
řady a Laurentovy řady, dokážeme vyčíslit křivkový integrál z funkce f.
−1
Definice Nechť z ∈C je singularita funkce f. Koeficient a Laurentovy řady funkce f se středem
0 −1
v bodě z se nazývá reziduum funkce f v bodě z a značí se res f(z).
0 0 z0
Tvrzení Nechť z ∈C je k-násobný pól funkce f. Pak
0
1 dk−1 (cid:16) (cid:17)
res f(z)= lim (z−z )kf(z)
z0 z→z0 (k−1)!dzk−1 0
V některých speciálních případech existují jednodušší vzorce. Dále lze definovat i reziduum v
nekonečnu a pomocí něj uvést velmi elegantní rovnost
k
(cid:88)
res f(z)+res f(z)=0
zj ∞
j=1
Věta (Reziduová věta) Předpokládejme, že funkce f je holomorfní v množině G\[z ,...,z ],
1 n
kde G je oblast v C. Nechť C je jednoduchá uzavřená kladně orientovaná křivka ležící v G, která má
ve svém vnitřku body z ,...,z ,k ≤n. Předpokládejme dále, že G obsahuje vnitřní oblast křivky
1 k
C. Potom
(cid:90) k
(cid:88)
f(z)dz =2πi res f(z)
zj
C
j=1
Reziduovávětamáširokévyužití,sjejípomocílzepočítaturčitéintegrálysnekonečny,zjednodušeně
počítat integrální transformace nebo ji lze dokonce použít k výpočtu součtu nekonečných řad.
5

Komplexní Analýza - státnicové okruhy Orri
KANA - 2
1. F Fourierova transformace
Věta (Existence a spojistost Fourierovy transformace) Je-li funkce f : R → C absolutně
integrovatelná na R, tj.
(cid:90) ∞
|f(t)|dt<∞
−∞
potom F :R→C existuje a je to spojitá funkce na R
Množinu všech absolutně integrovatelných funkcí na R budeme značit L1(R), je-li f ∈L1(R), potom
platí lim |F(ω)|=0
ω→±∞
Fourierova transformace lze chápat jako konvoluci funkce f(t) s konvolučním jádrem e(−iωt), kdy se
funkce f(t) (vzor) zobrazí na její obraz F(ω). Zapsáno též jako
(cid:90) ∞
F(ω)=F[f(t)](ω)= f(t)e−iωtdω
−∞
Fouerirova transformace je vzájemně jednoznačně zobrazení. Ke každému obrazu existuje pevně
daný vzor. Pro zpětný převod z obrazu do vzoru se používá inverzní Fourierova transformace.
1 (cid:90) ∞
f(t)=F−1[F(ω)](t)= F(ω)eiωtdω
2π
−∞
tedy převod mezi FT a IFT je
F[f(t)](ω)=2πF−1[f(t)](−ω), tj.f(t)=F−1[f(t)](−ω)
Základní algebraické vlastnosti F transformace pro zjednodušení výpočtu
F[f(t)+ag(t)](ω)=F[f(t)](ω)+aF[g(t)](ω)
Věty o posunutí a změně měřítka
Pro a∈R:F[f(t−a)](ω)=e−iωaF[f(t)](ω)
Pro a∈R:F[eiatf(t)](ω)=F[f(t)](ω−a)
1 (cid:16)ω(cid:17)
Pro a∈R\[0]:F[f(at)](ω)= F[f(t)]
|a| a
Věta (Derivace obrazu) Jestliže f(t) a tf(t) leží v L1(R), pak
d
F[tf(t)](ω)=i F[f(t)](ω)
dω
v případě tn: F[tnf(t)](ω)=in dn F[f(t)](ω)
dωn
Věta (Obraz derivace) Jestliže n∈N a f,f′,...,f(n) ∈L1(R) jsou spojité, pak
(cid:104) (cid:105)
F f(n)(t) (ω)=(iω)nF[f(t)](ω)
6

Komplexní Analýza - státnicové okruhy Orri
Obraz konvoluce, konvoluce signálů je násobení spekter
F[f(t)∗g(t)](ω)=F(ω)·G(ω)
matematické využití je pro řešení diferenciálních rovnic, př.
d2f(t) df(t) 1
+4 +4f(t)= e−|t|
dt2 dt 2
použitím F dostaneme následující
1
−ω2F(ω)+i4ωF(ω)+4F(ω)=
ω2+1
algebraickou úpravou a F−1 dostaneme řešení
2. L Laplaceova transformace
Definice Laplaceova transformace funkce f :[0,∞)→C je komplexní funkce L[f]=F definovaná
pro s∈C předpisem
(cid:90) ∞
F(s)= f(t)e−stdt
0
Množinu všech po částech spojitých funkcí f :[0,∞)→C, které jsou nejvýše exponenciálního řádu,
budeme značit symbolem L .
0
Základní algebraické vlastnosti L transformace pro zjednodušení výpočtu
L[f(t)+ag(t)](s)=L[f(t)](s)+aL[g(t)](s)
Heavisideova funkce 1(t):R→R je definována jako
(cid:40)
1, pokud t≥0
1(t)=
0, pokud t<0
Další vlastností jsou věty o posunu a změně měřítka
1 (cid:16)s(cid:17)
L[f(at)](s)= L[f(t)]
a a
L[eatf(t)](s)=L[f(t)](s−a)
L[f(t−a)1(t−a)](s)=e−asL[f(t)](s)
L[f(t)1(t−a)](s)=e−asL[f(t+a)](s)
Věta (O derivaci obrazu) Jestliže f ∈L , pak
0
d
L[tf(t)](s)=− L[f(t)](s)
ds
7

Komplexní Analýza - státnicové okruhy Orri
Věta (O obrazu derivace ) Nechť n ∈ N,f,f′,...f(n−1) ∈ L jsou spojité a f(n) je po částech
0
spojitá, potom platí
L[f(n)(t)](s)=snL[f(t)](s)−sn−1f(0)−sn−2f′(0)−...−f(n−1)(0)
pro první až třetí derivaci:
L[f′(t)](s)=sF(s)−f(0)
L[f′′(t)](s)=s2F(s)−sf(0)−f′(0)
L[f′′(t)](s)=s3F(s)s2f(0)−sf′(0)−f′′(0)
(cid:82)t
Obraz konvoluce Nechť f,g ∈L . Konvoluce funkcí f a g je (f∗g)(t)= f(τ)g(t−τ)dτ, potom
0 0
obrazem je
L[(f ∗g)(t)](s)=L[f(t)](s)·L[g(t)](s)
Inverzní Laplaceova transformace
1 (cid:90)
f(t)=L−1[F(s)](t)= F(s)estds
2πi
C
při používání L se nejčastěji vychází ze slovníků, kde jsou jednoznačně přiřazeny vzory a obrazy.
Obvzláště výhodná je Laplaceova transformace na popis LTI systémů, kde se diferenciální rovnice
zjednodušší na algebraické a nulové počáteční podmínky nevnesou do systému další členy.
Věta (O obrazu periodické funkce) Nechť f ∈L je periodická na intervalu [0,∞) s periodou
0
T >0, potom
(cid:82)T f(t)e−stdt 1
L[f(t)](s)= 0 = L[f(t)(1(t)−1(t−T))](s)
1−e−sT 1−e−sT
3. Z Z-transformace
Z-transformace je analogií Laplaceovy transformace pro diskrétní problémy.
Řekneme,žeposloupnost(a )∞ komplexníchčíseljenejvýšeexponenciálníhořádu,jestližeexistuje
n n=0
α∈R a M >0 takové, že |a |≤Meαn pro každé n∈N . Množinu všech komplexních posloupností,
n 0
které jsou nejvýše exponenciálního řádu, značíme symbolem Z .
0
Definice Z-transformace posloupnosti (a )∞ komplexních čísel je funkce Z[a ](z)=F(z) defino-
n n=0 n
vána jako
∞
F(z)= (cid:88) a n, z ∈U(∞)
z
n
n=0
8

Komplexní Analýza - státnicové okruhy Orri
linerarita: Z[αa +b ](z)=αZ[a ](z)+Z[b ](z)
n n n n
vlastnosti o posunu a změně měřítka
(cid:16)z(cid:17)
Z[αna ](z)=Z[a ]
n n α
d
Z[na ](z)=−z Z[a ](z)
n dz n
Věta (O obrazu posunuté posloupnost, posun vlevo) Jestliže (a )∞ ∈Z a k ∈N, pak
n n=0 0
(cid:16) a a (cid:17)
Z[a ](z)=zk Z[a ](z)−a − 1 −...− k−1 =zkZ[a ](z)−a zk−a zk−1−...−a z
n+k n 0 z zk−1) n 0 1 k−1
Z[a ](z)=zF(z)−a z
n+1 0
Z[a ](z)=z2F(z)−a z2−a z
n+2 0 1
Z[a ](z)=z3F(z)−a z3−a z2−a z
n+3 0 1 2
konvoluce: c = (cid:80)n a b , pro každé n∈N
n k=0 k n−k 0
Obraz konvoluce
Z[a ∗b ](z)=Z[a ](z)Z[b ](z)
n n n n
Inverzní transformace a =Z−1[F(z)](n) v integrálním tvaru
n
1 (cid:90)
a = F(z)zn−1dz,n∈N
n 2πi 0
C
Inverzní Z-transformace metodou reziudí Necht’ F ∈H je holomorfní na C až na konečně
∞
mnoho izolovaných singularit. Potom pro n∈N platí
0
(cid:88)
a =Z−1[F(z)](n)= res F(z)zn−1
n zj
zj
Využítí Z-transformace nachází zejména v diskrétních soustavách, kde se pomocí ní určují odezvy
systémů. Rovnice pro LTI se opět zjednodušší kvůli nulovosti záporných koeficientů.
9
