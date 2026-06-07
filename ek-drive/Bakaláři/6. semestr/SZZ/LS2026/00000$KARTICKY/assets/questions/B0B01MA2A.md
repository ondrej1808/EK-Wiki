Poznámka Existuje i implitcitní Eulerova metoda, kde se v algoritmu bere funkční hodnota v j +1.
Vylepšení těchto dvou značně nepřesných metod se nazývá Heunova metoda, která používá odhadu
y a tento odhad v následných krocích zlepší. Tato metoda je druhého řádu.
j+1
Metody Runge-Kutta se nazývá soubor metod, přesnější než předchozí. Využívá se stejného principu s
aproximací tečny, avšak tato tečna je nejprve v N odhadech předpočítána. Metody jsou druhého řádu
(RK2) a čtvrtého řádu (RK4).
6.4 Numerické řešení integrace
Newton-Cotesovy metody numerické integrace jsou založeny na aproximaci funkce pomocí polynomů
a využívají ekvidistantní rozvržení uzlových bodů. Jsou dva hlavní druhy metod, otevřené a uzavřené,
v závistlosti na zahrnutí krajních bodů do integrace. Základem uzvařených NC metod je volba para-
materu n ∈ N. Interval [a,b] se pak rozdělí na n stejných úseků o velikosti h = (b−a)/n, tomuto číslu
se říká krok metody.
Na každém intervalu [x ,x ] nahradíme funkci vhodně zvolenou konstantou, vybranou podle f v
j−1 j
rámci tohoto intervalu. Na výběr máme buď spodní nebo horní hranici tohoto intervalu, které jsou si
rovnocenné a obě jsou lineárního řádu
n−1
(cid:88)
I = h f(a+hj)+O(h). (70)
j=0
Druhým způsobem je aproximace úsečkou vedoucí z krajních bodů intervalů.
 
n−1 n
(cid:88) (cid:88)
I = h f(x
j
)+ f(x
j
)+O(h2) (71)
j=0 j=1
Další možné řešení pro numerickou integraci je Simpsonova metoda, kde, pokud je n sudé, lze apro-
ximovat dvojici intervalů za pomocí paraboly. Tato metoda má řád chyby O(h4). Modifikací tohoto
způsobu je Simpsonovo 3/8 pravidlo, která používá aproximaci přes tři intervaly neboli čtyři body
pomocí kubické křivky.
Gaussova metoda je založena na neekvidistantním dělení intervalu. Členy v sumaci jsou váhovány
váhovacími koecienty w , a rozdělení bodů se bere podle kořenů zvolených polynomů (Legendrovy
n
polynomy, Chebyshevovy polynomy atd.). Hlavní výhoda těchto metod je možnost použití menšího
počtu bodů k dosažení dobrých výsledků, než kolik jich potřebují předchozí metody.
7 Funkční a mocninné řady, základní kritéria konvergence. Tayloro-
vův rozvoj funkce, Fourierův rozvoj. Funkce více proměnných, gra-
dient, derivace složené funkce. Lokální a vázané extrémy, Lagran-
geova metoda. (Matematická analýza 2)
7.1 Řady
Definice Funkční řady se používají k vyjádření funkce f pomocí jejího rozkladu do známé funkční
báze ψ
n
∞
(cid:88)
f(x) = a ψ (x) (72)
n n
n=0
23

Matematická Analýza 2 - státnicové otázky Orri
1. Funkce více proměnných
Funkce více proměnných se označuje zobrazení f : M → R, kde M ⊂ Rn je definiční obor.
Zobecněním je vektorové pole, z nichž každá může být funkcí n proměnných.
Funkce f :M →R je spojitá v bodě x ∈M, pokud je x izolovaný bod množiny M, nebo pokud
0 0
existuje limita:
lim f(x)=f(x )
0
x→x0
Funkce f je spojitá, pokud je spojitá v každém bodě svého definičního oboru. Je stejnoměrně
spojitá, pokud pro každé ε>0 existuje δ >0 tak, že pro všechna x,y ∈M platí:
|f(x)−f(y)|<ε, kdykoliv ||x−y||≤δ x,y ∈M
Každá funkce spojitá na uzavřené omezené množině v euklidovském prostoru je stejnoměrně spojitá.
Nechť f : M → R, kde M ⊂ Rn je otevřená množina. Směrovou derivací v bodě x ∈ M ve
0
směru vektoru h nazýváme limitu:
f(x +th)−f(x )
lim 0 0
t→0 t
Nechť f :M →R, kde M ⊂Rn je otevřená množina. Parciální derivace f v bodě x∈M podle
x (pro j=1,...,n) je směrová derivace ve směru jednotkového vektoru e . Značí se:
j j
∂f(x)
∂x
j
Gradient funkce f je definován jako vektor
(cid:16)∂f(xxx) ∂f(xxx)(cid:17)T
∇f(xxx)= ...
∂x ∂x
1 n
a značí směr největšího růstu funkce. Gradient lze dále použít pro počítání směrových derivací
∂ f(xxx)=hhh·∇f(xxx)
h
Nechť f : M → R, kde M ⊂ Rn je otevřená množina. Lineární zobrazení L : Rn → R nazveme
totálním diferenciálem funkce f v bodě x ∈M, pokud platí:
0
f(xxx +hhh)−f(xxx )−L(hhh)
lim 0 0 =0
hhh→0 ||hhh||
Zobrazení, které má v bodě x diferenciál, nazýváme diferencovatelné. Diferenciál funkce f v
0
bodě x značíme df(x ) a jeho hodnotu vektorového argumentu h značíme df(x )[h]. Pro funkci f
0 0 0
s n proměnnými platí zjednodušený zápis:
∂f ∂f
df = dx +...+ dx
∂x 1 ∂x n
1 n
1

Matematická Analýza 2 - státnicové otázky Orri
Složená derivaceNechť(a,b)⊂Rjeintervalax (t),...,x (t)jsoudiferencovatelnéna(a,b).Nechť
1 n
f :Rn →R má diferenciál. Potom složená funkce t→f(x (t),...,x (t)) je diferencovatelná a platí:
1 n
d ∂f dx ∂f dx
f(x ,...,x )= 1 +...+ n
dt 1 n ∂x dt ∂x dt
1 n
Nechť M ⊂Rn je otevřená množina a f :M →R má spojité smíšené parciální derivace podle
x a x v bodě x∈M. Potom platí:
j k
∂2f ∂2f
=
∂x ∂x ∂x ∂x
j k k j
2. Extrémy funkcí
Lokální extrém Funkce f :Rn →R má v boděxxx∈Rn lokální minimum (resp. maximum), pokud
existuje okolí U boduxxx, že pro všechnayyy ∈U platí:
f(xxx)≤f(yyy) (resp. f(xxx)≥f(yyy)) pro všechnayyy ∈U
Nechť M ⊂Rn je otevřená množina f :M →R je funkce třídy C1. Pokud f nabývá v bodě x∈M
lokální extrém, pak platí:
∂ f(xxx)=0
h
Nechť f je funkce třídy C2 na otevřené množině M euklidovského prostoru Rn a nechť x ∈ M je
stacionární bod. Je-li kvadratická forma
∂ ∂ 2 x f 2 1 ... ∂ ∂ 2 x f 2 1  h1 
1 1
d2f(xxx)[hhh,hhh]=(h1...h n )    . . . ... . . .      . . .   =h j h k ∂ jk f
∂2fp ... ∂2fp h n
∂x2 ∂x2
1 n
(i) pozitivně definitní, pak je vxxx ostré lokální minimum
(ii) negativně definitní, pak je vxxx ostré lokální maximum
(iii) indefinitní, pak vxxx není lokální extrém (sedlový bod)
Hessova matice v R2 má tvar:
(cid:32) ∂2f(x,y) ∂2f
(x,y)
(cid:33)
H(x,y)= ∂x2 ∂y∂x
∂2f
(x,y)
∂2f(x,y)
∂x∂y ∂y2
2

Matematická Analýza 2 - státnicové otázky Orri
Lagrangeovy multiplikátory Nechť f, g , ... , g jsou funkce třídy C1 na otevřené množině
1 p
G⊂Rn, kde n>p. Mějme množinu M zadanou
p
(cid:92)
M = {xxx∈Rn|g (x)=0}⊂G
j
j=1
Za předpokladu, že vektory grad g (x), grad g (x), ..., grad g (x) jsou lineárně nezávislé ve všech
1 2 p
bodechmnožinyM,je-lix ∈M bodemlokálníhoextrémufcef,pakexistujítakováčíslaλ ,...,λ ∈
0 1 p
R, že bod x je stacionární bod Lagrangeovy funkce
0
p
(cid:88)
L=f(x)− λ g (x) ∇L=⃗0
i i
i=1
Pokud je kvadratická forma d2L(x )[hhh,hhh] uvažovaná pouze pro vektoryhhh z množiny
0
p
(cid:92)
T = {xxx∈Rn|xxx⊥∇g(x )}
0
j=1
 
pozitivně definitní minimum
 
je negativně definitní . Pak funkce f má v bodě x ostré lokální maximum
0
indefinitní extrém
nenastává
vzhledem k množině G.
3

Matematická Analýza 2 - státnicové otázky Orri
Příklad
Uvažujeme funkci f(x,y)=x2−y2 na množině M ={(x,y)∈R2|y+e−2x2 −1=0}
Má nějaký extrém? je zde jedna vazební podmínka:
g(x,y)=y+e−2x2
−1=0
Nejdřív zjistíme body vyhovující první podmínce
L(x,y)=f(x,y)−λg(x,y)
Příslušné tvary vypadají následovně:
∂f ∂g
−λ =0 tj.
2x+2λxe−x2
∂x ∂x
∂f ∂g
−λ =0 tj. −2y−λ=0
∂y ∂y
rozdělením na dva případy: λ=0 a λ̸=0, v prvním případě dostaneme řešení x=y =λ=0, tedy
1 λ
e−x2
=− a y =−
λ 2
dosazením do g(x,y)=0 dostaneme následující
λ 1
− − −1=0
2 λ
λ2+2λ+2=0
nemá reálné řešení, našli jsme pouze jediný bod vyhovující podmínce a to x =(00)T.
0
Dle druhé podmínky vezmeme druhý diferenciál d2L(xxx ) s λ=0, který je dán Hessovou maticí
0
∂f ∂f
=2 a =−2
∂x2 ∂y2
(cid:18) (cid:19)
2 0
d2L(xxx )=
0 0 −2
Zjistíme formu pomocí Hessovy matice prohhh takovou, že
hhh⊥∇g(x ), tj.hhh⊥(01)T
0
To jsou vektory ve tvaruhhh=(h0)T
(cid:18) (cid:19)(cid:18) (cid:19)
2 0 h
d2L(x )[hhh,hhh]=(h0) =2||hhh||2
0 0 −2 0
Vidíme že je tato forma pozitivně definitní. Z věty o extrémech plyne, že bod x je ostré lokální
0
minimum fce f ∈M
4

Matematická Analýza 2 - státnicové otázky Orri
3. Dvojný integrál
Zobrazení V , které uzavřenému obdelníku T ∈ R2 a funkci f : T → R spojité a nezáporné na T
přiřadí nezáporné číslo V(f,T), se nazývá objem množiny M(f,T), jestliže splňuje následující dva
axiomy
1. aditivita:
V(f,T )+V(f,T )=V(f,T ∪T )
1 2 1 2
2. monotonie:
min·obsah(T)≤V(f,T)≤max(f)·obsah(T)
T T
Nechť funkce f je spojitá na obdélníku T =[a ,a ]×[b ,b ]. Pak funkce φ(x) a ψ(y) dané integrály
1 2 1 2
jsou spojité
(cid:90) b2 (cid:90) a2
φ(x)= f(x,y)dy ψ(y)= f(x,y)dx
b1 a1
Fubiniho věta Pokud máme zobrazení, které přiřadí dvojnásobný (nebo vícenásobný) integrál
nezáporné spojité funkce f přes uzavřený obdélník T, pak toto zobrazení vyhovuje axiomům (A) a
(M). Ze speciálního výsledku Fubiniho věty vyplývá, že hodnota násobných integrálů nezávisí na
pořadí integrace.
Nechť T ∈R2 je základní oblast a nechť f :T →R je spojitá funkce. Dvojný integrál funkce f
přes množinu T je
(cid:90) (cid:90) a2 (cid:90) s2(x)
f dT = f(x,y)dxdy
T a1 s1(x)
Nechť T je základní oblast a nechť Ψ:R2 →R2 je afinní zobrazení
(cid:90) (cid:90)
obsah(Ψ(T))=|det(Ψ)|·obsah(T) v int. tvaru: 1= |det(Ψ)|
ψ(T) T
Nechť G⊂Rn je otevřená množina a nechťψψψ :G→Rn je zobrazení
 
ψψψ (x ,...,x )
1 1 n
.
ψψψ(x ,...,x )= . 
1 n  . 
ψψψ (x ,...,x )
n 1 n
5

Matematická Analýza 2 - státnicové otázky Orri
Jestliže všechny složky ψ ,...,ψ mají společné první parciální derivace podle všech proměnných
1 n
x ,...,x , říkáme že zobrazeníψψψ je třídy C na G. Je-li tato podmínka splněna, pak matice
1 n 1
∂ψ1 ... ∂ψ1 
∂x1 ∂xn
. .
JJJ = . . 
ψψψ  . . 
∂ψn ... ∂ψn
∂x1 ∂xn
se nazývá Jacobiho matice zobrazeníψψψ. Determinant této matice se nazývá jakobián zobrazení
∆ (x).
ψψψ
Nechťψψψ:::TTT →→→RRR222 je zobrazení třídy C1 prosté na T ⊂R2. Nechť f :R2 →R2 je spojitá naψψψ(T),
pak
(cid:90) (cid:90)
0 f = f(ψψψ)∆
ψψψ
ψψψ(T) T
Těžiště, základní oblast M ={(x,y)|x∈T,y ∈V}, kde T,V jsou oblasti R, pro souřadnice (x,y)
platí:
(cid:82)(cid:82) (cid:82)(cid:82)
xρ y ρ
x t = (cid:82)(cid:82) M a y t = (cid:82)(cid:82) M
ρ ρ
M M
4. Trojný integrál
Nechť P je základní těleso, T je základní oblast a nechť f : R3 → R je spojitá na P. Trojným
integrálem funkce f přes množinu P nazýváme
(cid:90) (cid:90) a2 (cid:90) s2(x)(cid:90) h2(x)
f dP = f(x,y,z)dzdydx
P a1 s1(x) h1(x)
Pořadí integrace je opět libovolné a uvažuje se v závislosti na výhodnosti výpočtu.
5. Substituce
Použití sférických souřadnic:
⃗r(x,y,z)=(x,y,z)
x=r cos(φ)sin(θ)
y =r sin(φ)sin(θ)
z =r cos(φ) φ∈[0,2π], θ ∈[0,π]
2
r(r,φ,θ)=(r cos(φ)sin(θ),r sin(φ)sin(θ),r cos(θ))
 ∂r1 ∂r1 ∂r1  
cos(φ)sin(θ) −r sin(φ)sin(θ) r cos(φ)cos(θ)

∂r ∂φ ∂θ
∆
⃗r
=det

∂
∂
r
r
2 ∂
∂
r
φ
2 ∂
∂
r
θ
2

=detsin(φ)sin(θ) −r cos(φ)sin(θ) r sin(φ)cos(θ)=r2sin(θ)
∂r3 ∂r3 ∂r3 cos(θ) 0 −r sin(θ)
∂r ∂φ ∂θ
6

Matematická Analýza 2 - státnicové otázky Orri
Příklady dS a dV pro polární/sférické/válcové souřadnice
x=cos(φ)sin(θ)
x=r cos(ϕ)
→ dS =r dS[r,φ] y =sin(φ)sin(θ) → dS =r dS[φ,θ]
y =r sin(φ)
z =cos(φ)
x=r cos(φ) x=r cos(φ)sin(θ)
y =r sin(φ) → dV = dV[z,r,φ] y =r sin(φ)sin(θ) → dV =r2sin(θ)dV[r,φ,θ]
z =z z =r cos(φ)
6. Geometrický význam determinantu
basically v R2 determinant odpovídá obsahu a v R3 odpovídá objemu
(cid:18) (cid:19)
a b
obsahR=|det 1 1 |
a b
2 2
7. Křivkový integrál
Množina C ⊂Rn se nazývá oblouk, jestliže existuje spojité zobrazení
φ:[a,b]→C
intervalu [a,b] na množinu C , splňující následující podmínky:
1. zobrazení φ je prosté na [a,b] s jedinou možnou vyjímkou koncových bodů
2. derivace φ′ je spojitá na intervalu [a,b], kde v krajních bodech intervalu uvažujeme příslušné
jednostranné derivace, a φ′(t)̸=0 na (a,b).
Množina C ⊂Rn se nazývá křivka, jestliže existuje spojité zobrazení
φ:[a,b]→C
takové, že existuje dělení D intervalu [a,b], že na každém podintervalu I ∈ D jsou splněny poža-
davky 1. a 2.
Zobrazení, které každému oblouku C přiřadí nezáporné číslo l(C) se nazývá délkou, jestliže
splňuje axiomy aditivity a monotonie. Takové zobrazení existuje jediné
(cid:90) b
l(C)= ||φ′(t)||dt
a
Nechť f je spojitá funkce definovaná na oblouku C. Číslo S(f,C), které získáme jako hodnotu
zobrazení splňujícího axiomy aditivity a monotonie, se nazývá křivkový integrál funkce f podél
oblouku C
(cid:90)
f dl
C
7

Matematická Analýza 2 - státnicové otázky Orri
Nechť f je spojitá funkce definovaná na oblouku C. Pro každou parametrizaci φ:[a,b]→C platí
(cid:90) (cid:90) b
f dl= f(φ(t))||φ′(t)||dt
C a
Nechť A⊂Rn. Zobrazení F :A→Rn(n≥1) se nazývá vektorové pole na množině A.
NechťC jekřivkaparametrizacíφ:[a,b]→C.Vektorovépoleτ definovanévkaždémboděφ(t)∈C,
kde φ′(t)̸=0, předpisem
φ′(t)
τ(φ(t))=
||φ′(t)||
se nazývá jednotkové tečné vektorové pole křivky C
Nechť (C)=(C,τ) je orientovaná křivka a nechť F je spojité vektorové pole na C. Křivkový
integrál z vektorového pole F podél orientované křivky (C) je definován rovností
(cid:90) (cid:90) (cid:90) b
FFF dlll= (FFF ·τ)dl= FFF(φ(t))·φ′(t)dt
C C a
Křivkový integrál jako práce: A= (cid:82) F⃗ d⃗s=−mg (cid:82) ⃗hd⃗s
(C) (C)
(cid:12) (cid:12)
Křivkový integrál jako průtok: P(V⃗,C)= (cid:82) (V⃗ ·⃗n)ds=(cid:12)⃗n=(τ ,−τ )(cid:12)= (cid:82) (−V ,V )
(C) (cid:12) 2 1 (cid:12) (C) 2 1
8. Plošný integrál
Množina M ⊂R3 se nazývá elementární plochou, pláti-li následujcí definice případně její permutace
v proměnných,
M ={(x,y,z)|z =g(x,y),(x,y)∈D
kde g(x,y) je funkce spojitá na základní oblasti D ∈R2 a třídy C1 na vnitřku D.
Zobrazení S, obsah plochy M, která každé základní oblasti D ⊂T přiřadí číslo S(g,D), existuje a je
jediné. Platí přitom, že pro každou elementární plochu M =M(g,T) danou C1 funkcí g na základní
oblasti T je
(cid:115)
(cid:90)(cid:90) (cid:16)∂g(cid:17)2 (cid:16)∂g(cid:17)2
obsah(M)=S(g,T)= 1+ +
∂x ∂y
T
Souvislá množina M ⊂R3 se nazývá plocha, jestliže existují elementární plochy M ,M ,...,M
1 2 k
takové, že
(i) M =M ∪M ∪...∪M
1 2 k
(ii) Je-li i̸=j, pak M ∩M ⊂K(M )∩K(M ), přičemž průnik M ∩M je buďto křivka nebo
i j i j i j
nekonečná či prázdná množina
Množinu elementárních ploch {M ,M ,...,M } splňujících výše uvedené požadavky nazýváme
1 2 k
rozkladem plochy M.
8

Matematická Analýza 2 - státnicové otázky Orri
Pokud máme spojitou parametrizace nějaké funkce ΨΨΨ = (Ψ ,Ψ ,Ψ ) : T → R3 na ploše M, za
1 2 3
předpokladu třídy C1 na vnitřku T a že zobrazení
ε=(Ψ ,Ψ ):T →D
1 2
je prosté a má nenulový jakobián ∆ na vnitřku T, pak
ε
(cid:90) (cid:12)(cid:12)∂Ψ ∂Ψ(cid:12)(cid:12)
obsah(M)= (cid:12)(cid:12) × (cid:12)(cid:12)
(cid:12)(cid:12)∂s ∂t (cid:12)(cid:12)
T
Nechť f je spojitá funkce na elementární ploše M. Číslo P(f,M) se nazývá plošný integrál funkce f
vzhledem k ploše M
(cid:90)(cid:90)
f dS
M
Nechť M =M(g,T) je elementární plocha daná grafem funkce g na oblasti T a f :M →R spojitá
funkce. Existuje pouze jediné zobrazení P, které každé elementární ploše K ⊂ M přiřadí číslo
kvantity (hmotnost, el. náboj)P(f,K) tak, že jsou splněny axiomy (A) a (M).
(cid:115)
(cid:90)(cid:90) (cid:16)∂g(cid:17)2 (cid:16)∂g(cid:17)2
P(f,M)= f(x,y,g(x,y)) 1+ +
∂x ∂y
T
NechťM jeelementárníplocha.Jednotkovénormálovévektorovépole⃗nplochyM jespojitévektorové
pole, které každému bodu (x,y,z) ∈ M\K(M) přiřadí jednotkový normálový vektor ⃗n(x,y,z) k
ploše M v bodě (x,y,z).
(cid:16) (cid:17)
− ∂g,−∂g,1
∂x ∂y
±
(cid:114)
(cid:16) (cid:17)2 (cid:16) (cid:17)2
1+ ∂g + ∂g
∂x ∂y
Nechť (M) = (M ,⃗n ),...,(M ,⃗n ) je orientovaná plocha. Nechť F je spojité vektorové pole
1 1 k k
definované na ploše M. Plošný integrál
(cid:90)(cid:90)
=F⃗ dS⃗
(M)
pole F⃗ vzhledem k orientované ploše (M) je definován rovností
(cid:90)(cid:90) (cid:90)(cid:90) (cid:90)(cid:90)
F⃗ dS⃗ = F⃗ ·⃗n dS+...+ M F⃗ ·⃗n dS
1 k k
(M) M1
9

Matematická Analýza 2 - státnicové otázky Orri
9. Integrální věty
Gaussova věta Nechť P ⊂R3 je základní těleso, jehož hranice ∂P je plocha orientovaná vnějším
normálovým polem. Je-li F vektorové pole třídy C1 na P. Pak
(cid:90) (cid:90)
∇·FdV= F·dS
P (∂P)
Greenova věta Nechť T ⊂R2 je základní oblast, jejíž hranice ∂T je kladně orientovaná vzhledem
k T. Nechť F =(F ,F ) je vektorové pole třídy C1 na T. Pak platí
1 2
(cid:90) (cid:90) (cid:16)∂F ∂F (cid:17)
= 2 − 1
∂x ∂y
∂T T
Stokesova věta Nechť vektorové pole F je třídy C1 na otevřené množině obsahující elementární
plochu M. Předpokládejme, že kraj plochy M je uzavřená jednoduchá křivka C = K(M). Při
souhlasné orientaci plochy M a křivky C platí
(cid:90) (cid:90)
F·dl= ∇×F·dS
(∂M) (M)
do not forget
∇ → gradient
∇· → divergence
∇× → rotace
10
