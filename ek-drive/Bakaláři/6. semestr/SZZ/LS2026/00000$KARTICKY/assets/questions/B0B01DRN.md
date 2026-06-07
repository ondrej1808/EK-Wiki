5 Lineární diferenciální rovnice vyšších řádů, soustavy lineárních dife-
renciálních rovnic. (Diferenciální rovnice a numerická matematika)
Definice Obyčejná diferenciální rovnice řádu n je rovnice tvaru
y(n) = F(x,y,y(cid:48),...,y(n−1)), (53)
kde F je funkce n+1 proměnných. Řešení (53) na (otevřeném) intervalu I je libovolná funkce y = y(x)
na intervalu I, která má derivace až do řádu n a pro všechna x ∈ I platí
y(n)(x) = F(x,y(x),y(cid:48)(x),...,y(n−1)(x)). (54)
Definice Jestliže se dá množina všech řešení dané ODR vyjádřit jedním vzorcem s parametry, značí se
toto řešení jako obecné řešení dané ODR. Jedno konkrétní řešení dané rovnice se nazývá partikulární
řešení.
Řešení diferenicální rovnic není jednoznačné bez udání konkrétních počátečních podmínek y(x ) =
0
y ,...,yn−1(x ) = y . Úloha, v níž je diferenciální rovnice zadaná s počátečními podmínkami se
0 0 n−1
nazývá Cauchyho úloha.
Definice Separovatelná obyčejná diferenciální rovnice 1. řádu je ODR zapsatelná ve tvaru y(cid:48) =
g(x)h(y) pro nějaké funkce g, h.
Separace proměnných lze rozšířit i na parciální diferenciální rovnice. Při řešení předpokládáme tvar
hledané funkce F(x,y,z) = X(x)Y(y)Z(z). Tímto způsobem lze například hledat řešení Helmholtzovy
rovnice
(cid:0) ∇2+k2(cid:1)
F(x) = 0. (55)
Věta (Existence) Uvažujeme separovatelnou ODR 1. řádu y(cid:48) = g(x)h(y). Předpokládejme, že g
je spojitá na nějaké otevřeném intervalu I ⊂ D(g) a h je spojitá na nějakém otevřeném intervalu
J ⊂ D(h). Jestliže h (cid:54)= 0 na J, pak existuje řešení dané rovnice na I.
Definice Lineární obyčejná diferenciální rovnice řádu n je ODR zapsaná ve tvaru
n
(cid:88)
a y(j)(x) = b(x), (56)
j
j=0
Tatorovnicesenazýváhomogenní,jestližeb(x) = 0.Vedruhémpřípadědefinujemepřidruženouhomo-
genní rovnici jako (cid:80)n a y(j) = 0. V dalším bude pro přehlednost zápisů zavedena sumační konvence,
j=0 j
ve výrazech s dvěma j se přes tento index sčítá, případně podle kontextu.
Věta (O existenci a jednoznačnosti pro lineární ODR) Uvažujeme lineární ODR a (x)y(j) =
j
b(x). Jsou-li a (x), b(x) spojité na otevřeném intervalu I, pak pro všechna x ∈ I a všechny počáteční
j 0
podmínky y ∈ R existuje řešení Cauchyho úlohy na I a je na tomto intervalu jednoznačné.
j
Věta (O struktuře množiny řešení homogenní lineární ODR) Uvažujme homogenní lineární
ODR a y(j) řádu n na otevřeném intervalu I, pak je množina všech řešení této rovnice na I vektorový
j
prostor dimenze n.
17

Definice Uvažujme lineární ODR a (x)y(j) = b(x). Předpokládejme, že a jsou spojité na otevřeném
j j
intervalu I. Fundamentální systém této rovnice je libovolná báze prostoru řešení její přidružené homo-
genní rovnice.
Definice Uvažujme lineární ODR s konstantními koeficienty (a (x) = a )
j j
a y(j) = b(x). (57)
j
Definujeme její chakteristickou rovnici jako
a λn+a λn−1···+a λ+a = 0. (58)
n n−1 1 0
Řešením této rovnice λ
j
se nazývají vlastní čísla dané ODR. Řešení k danému λ
j
má tvar y
j
(x) = eλjx.
Všechna tato řešení y
j
(x) definují lineárně nezávislou množinu řešení {eλjx}. Je-li vlastní číslo λ
j
ná-
sobnosti m, pak dané řešení má tvar y
j
(x) = eλj,xeλjx,...,xm−1eλjx. Platí-li λ
j
= α±iβ, β (cid:54)= 0, pak
má řešení tvar y (x) = eαx(cos(βx)±isin(βx)).
j
Věta (O struktuře řešení lineární ODR)Nechťy jenějaképartikulárnířešenídanélineárníODR
p
naotevřenémintervaluI.Funkcey(x)jeřešenímtétorovnicenaI právětehdy,pokudy = y +y ,y je
h p h
nějaké přidružené homogenní rovnice na I. Z čehož vyplývá, že je-li y nějaké obecné řešení přidružené
h
homogenní rovnice na I, pak y = y +y je obecné řešení dané rovnice na I.
h p
Věta (O odhadu řešení pro speciální pravou stranu) Uvažujeme lineární ODR řádu n s kon-
stantními koeficienty, kde b(x) má speciální tvar
a y(j) = eαx(P(x)cos(βx)+Q(x)sin(βx)), (59)
j
pro polynomy P(x), Q(x). Označme d = max(ord(P),ord(Q)) (ord() značí stupeň polynomu). Nechť
m > 1 je násobnost vlastního čísla λ = α±iβ. Pak existují polynomy p(x) a q(x) stupně nejvýšše d,
j
že
y(x) = xmeαx(p(x)cos(βx)+q(x)sin(βx)) (60)
je řešení dané rovnice na R.
5.1 Soustavy lineárních diferenciálních rovnic.
Definice Soustava lineárních ODR 1. řádu s konstatními koeficienty je soustava tvaru
 
 y(cid:48) a 11 a 12 ... a 1s  y (x)   b (x) 
. 1 a 21 a 22 ... a 2s 1 . 1 .
 
y
. .
(cid:48)
  =  

. .
.
... . .
.
 

 
y (
. .
x)
  + 
b (
. .
x)
  , (61)
n a a ... a n n
r1 r2 rs
zkráceně zapsáno jako y(cid:48) = Ay(x) + b(x). Většinou se uvažují soustavy, kde r = s. a ∈ R jsou
jk
koeficienty a b (x) jsou pravé strany. Soustava je homogenní pokud b(x) = o.
j
Fakt Každou soustavu n lineárních rovnic 1. řádu lze eliminací převést ekvivalentně na jednu lineární
ODR řádu n a obráceně.
Věta (O existenci a jednozačnosti pro soustavy) Uvažujme soustavu lineárních ODR 1. řádu.
Jsou-li b (x) spojité na otevřeném intervalu I, pak pro každé x ∈ I a všechna y ∈ R existuje řešení
j 0 0,j
18

příslušné Cauchyho úlohy na I a je jednoznačné.
Věta (O struktuře množiny řešení pro homogenní soustavy) Uvažujme soustavu lineárních
ODR y(cid:48) = Ay, kde A : Rn −→ Rn. Množina všech řešení této soustavy na nějakém otevřeném inter-
valu I je vektorový prostor dimenze n.
Definice Uvažujme soustavu lineárních ODR y(cid:48) = Ay, kde A : Rn −→ Rn. Fundamentální sys-
tém řešení rovnice y(cid:48) = Ay(x) + b(x) na otevřeném intervalu I je libovolná báze prostoru řešení
y(cid:48) = Ay na I. Pro konkrétní fundamentální systém {y ,...,y } definujeme fundamentální matici
1 n
řešení na I jako Y(x) = (y ... y ) (matice n×n). Obecné homogenní řešení této soustavy má tvar
1 n
y (x) = Y·c, c ∈ Rn.
h
Věta Uvažujme soustavu lineárních ODR y(cid:48) = Ay, kde A : Rn −→ Rn. Jestliže λ je vlastní číslo
A s vlastním vektorem v, pak y = veλx je řešením dané soustavy na R. Jsou-li λ různá čísla, pak
j j
odpovídající řešení tvoří lineárně nezávislou množinu.
Věta (O struktuře řešení pro soustavy) Nechť A : Rn −→ Rn je matice. Je-li y nějaké partiku-
p
lární řešení soustavy y(cid:48) = Ay(x)+b(x) na I, pak množina všech jejich řešení na I je
{y +y ,y je řešením y(cid:48) = AynaI}. (62)
p h h
6 Numerické metody řešení soustav lineárních rovnic, nelineárních
rovnic. Numerická kvadratura, numerické řešení diferenciálních rov-
nic. (Diferenciální rovnice a numerická matematika)
Při numerických výpočtech se vyskytují různé druhy chyb. Nejčastější jsou chyby ve vstupních datech,
chyby metody nebo chyby výpočtu.
Definice Nechť x je číslo a x je jeho odhad. Pak absolutní chyba je definovaná jako E = x−x a
(cid:98) x (cid:98)
relativní chybu ε = |x−x|/|x|. Libovolné číslo e splňující |E | ≤ e se nazývá odhad chyby.
x (cid:98) x x x
Definice Uvažujme číslo a ∈ R, nechť f, g jsou dvě funkce definované na nějakém (prstencovém) okolí
bodu a. Řekneme, že f ∈ O(g) pro x → a, jestliže existuje nějaká konstanta C na prstencovém okolí
P bodu a taková, že |f| ≤ C|g| na P. Číslo O(h) znační chybu úlohy pro h → 0. Čím vyšší mocninna
h se ve výrazu vyskytuje, tím je metoda přesnější.
6.1 Numerické řešení soustav lineárních rovnic
Všeobecně nejznámější metodou numerického řešení je Gaussova eliminační metoda. Hlavním cílem
metody je převést matici A do horního trojúhelníkového tvaru a skrz zpětnou substituci získat řešení
soustavy. Číslům na diagonále se říká pivot. Nejvýhodnější je mít na první pozici nejvíce dominujícího
pivota. Algoritmus dovoluje násobit řádky skalárem, prohazovat řádky v matici a řádky navzájem sčí-
tat.
Fakt Jestliže aplikujeme GEM na matice velikosti n×(n+b), kde b je konstanta nezávisející na n,
pak výpočetní náročnost je rovna
2
n3+O(n2). (63)
3
19

Fakt Zpětné a dopředné dosazení má výpočetní náročnost n2.
Gauss-Jordanova metoda je je jednoduchá modifikace GEM, při které se směřuje k diagonální matici
tak, že při výpočtu se nulují i prvky nad diagonálou a pivoti jsou na konci algorimtu rovni jedné.
Výpočetní náročnost této metody je
n3+O(n2). (64)
Metoda nepotřebuje již použití zpětného (resp. dopředného) dosazení. Pravá strana je přímo rovna
hledanému řešení. Pomocí Gauss-Jordanovy eliminace lze hledat i inverzní matice. Tato metoda lze
použít i pro hledání řešení soustav, jejichž matice mají více sloupců než řádků.
(A|E ) ⇒ (E |A) (65)
n n
Zkoušku řešení lze provést skrz reziduum
r = A·x −A·x = A·E ⇒ E = A−1r (66)
0 x x
Definice Uvažujeme n×n matici A reálných čísel. Řekneme, že n×n matice L, U, P jsou jejím LUP
rozkladem,jestližePjepermutačnímatice,Ujehornítrojúhelníkovámatice,Ljedolnítrojúhelníková
matice s jedničkami na diagonále a P·A = L·U. Pro každou čtvercovou matici existuje LUP rozklad.
Druhou možností řešení soustav rovnic je použití iteračních metod. Dvěma nejznámějšími metodami
jsou Jacobiho iterace a Gauss-Seidelova metoda. Iterace se provádějí do doby, dokud řešení nesplní
toleranci ε.
DefiniceUvažujemen×nmaticiA.Řekneme,žeAjeostřediagonální,jestližeprovšechnaj = 1,...,n
platí
(cid:88)
|a | > |a |. (67)
j,j j,k
j(cid:54)=k
Věta Jestliže je A ostře diagonální, pak Jacobiho iterace i Gauss-Seidelova metoda konvergují pro
libovolnou počáteční volbu vektoru.
Možnou iterační metodou je i superrelaxační metoda, kde se závádí parametr λ ∈ R.
U všech zmíněných metod je nutné zvážit možnost, zdali není matice A singulární.
6.2 Numerické řešení nelineárních rovnic
Při řešení nelineárních rovnic hledáme číslo r takové, které pro nějakou funkci f splňuje f(r) = 0.
Při hledání kořenů pomocí software je nutné brát v potaz reprezentaci čísel. Na přístrojích s přesností
∆ > 0 je toto číslo hranicí, k níž mohou čísla dokonvergovat.
Definice Uvažujeme určitou iterační metodu pro hledání kořene. Řekneme, že je to metoda řádu q,
nebo že má chybu řádu q, kde q > 0, jestliže splňuje jednu z následujících podmínek
• Prokaždouposloupnost{x }generovanoutoutometodoukonvergujícíkekořenir existujeK > 0
k
takové, že platí |r−x | ≤ K|r−x |q pro dostatečně velká k.
k+1 k
• Pro každou posloupnost {x } generovanou touto metodou konvergujicí ke koření r existuje horní
k
odhade pro|r−x |aK > 0takové,žeplatíe ≤ Keq prodostatečněvelkák.Tomutopojmu
k k k+1 k
se říká R-řád konvergence.
20

Fakt Nechť f je spojitá funkce na intervalu [a,b]. Jestliže f(a)·f(b) < 0 a f je spojitá na [a,b], pak
f musí mít v intervalu [a,b] řešení.
Fakt Tohoto se využívá v metodě bisekce, kdy se postupně podle aktuální změny znaménka posou-
vají meze intervalu a a b . Řešení se poté získá jako m = (a +b )/2. Podle této mezihodnoty se
k k k k k
určuje, která mez intervalu se posouvá. V dalším běhu je jedna z mezí rovná právě této mezihodnotě
a algoritmus se provádí znovu. Řešení je rovno r = m při dosažení chtěné přesnosti. Metoda bisekce
k
je lineárního řádu.
Dalším možným způsobem je metoda sečen. Zadáná funkce f spojitá na R a tolerance ε.
• Zvolíme x , x . Nechť k = 1.
0 1
x f(x )−x f(x )
• Nechť x = k−1 k k k−1 .
k+1 f(x )−f(x )
k k−1
Jestliže|x −r | < εnebo|f(x | < ε,algoritmuskončí,výstupjex .Jinakzvýšímek ojedničku
k+1 k k+1 k+1
a jdeme zpět na krok 2.
VětaJestližejekořenr jednoduchý,pakexistujíkonstantaK aN ∈ Ntakové,že|r−x | ≤ |r−x |α
√ k+1 k
pro k ≥ N, kde α = (1+ 5)/2. Jestliže má kořen r vyšší násobnost, pak je konvergence lineární.
Věta Nechť f je funkce spojitá na intervalu [a,b]. Předpokládejme, že je konvexní či konkávní na
[a,b] a f(a)f(b) < 0. Pak pro libovolné hodnoty x , x zvolené tak, aby f(x ) > 0, f(x ) > 0 pro
0 1 0 1
konvexní případ a f(x ), f(x ) < 0 pro konkávní případ, posloupnost {x } generovaná metodou sečen
0 1 k
konverguje ke kořeni r ∈ (a,b) funkce f.
Algoritmus (Newtonova metoda pro hledání kořene funkce). Nechť je zadána funkce f dife-
rencovatelná na R a tolerance ε.
• Zvolíme x . Nechť k = 0.
0
f(x )
• Nechť x = x − k ; Jestliže |x −r | < ε nebo |f(x | < ε, algoritmus končí, výstup je
k+1 k f(cid:48)(x ) k+1 k k+1
k
x . Jinak zvýšíme k o jedničku a jdeme zpět na krok 2.
k+1
VětaJestližejekořenr jednoduchý,pakexistujíkonstantaK aN ∈ Ntakové,že|r−x | ≤ |r−x |2
k+1 k
pro k ≥ N. Jestliže má kořen r vyšší násobnost, pak je konvergence lineární.
Věta Nechť f je funkce na intervalu [a,b] taková, že f(a)·f(b) < 0. Předpokládejme, že f je na (a,b)
dvakrát spojitě diferencovatelná a f(cid:48) (cid:54)= 0, f(cid:48)(cid:48) (cid:54)= 0 na (a,b). Jestliže je x ∈ (a,b) zvoleno tak, aby
0
f(x ) · f(cid:48)(cid:48)(x ) > 0, pak posloupnost {x } generovaná Newtonovou metodou konverguje k nějakému
0 0 n
kořeni r ∈ [a,b] funkce f.
Definice Je-li dána funkce ϕ, pak jejím pevným bodem rozumíme libovolní číslo x splňující ϕ(x ) =
f f
x .
f
Algoritmus (Iterační metoda pro hledání pevného bodu) Je zadána funke ϕ a tolerance ε.
• Zvolíme x . Nechť k = 0.
0
• Nechť x = ϕ(x ).
k+1 k
21

Jestliže |x −r | < ε, algoritmus končí, výstup je x . Jinak zvýšíme k o jedničku a jdeme zpět na
k+1 k k+1
krok 2.
Definice Nechť ϕ je funkce na intervalu I. Řekneme, že je tam kontraktivní nebo že je to kontrakce,
jestliže q < 1 takové, že pro všechna x,y ∈ I platí
|ϕ(x)−ϕ(y)| ≤ q·|x−y| (68)
Věta (Banachova o pevném bodě) Nechť ϕ je kontraktivní funkce na intervalu [a,b] s koeficientem
q taková, že ϕ(I) ⊂ I. Pak v I existuje právě jedno řešení x rovnice ϕ(x) = x, přičemž pro všechny
f
volby x ∈ I posloupnost x = ϕ(x ) konverguje k x a platí |x −x | ≤ q|x −x |.
0 k+1 k f f k+1 f k
Algoritmus (Metoda relaxace pro hledání pevného bodu) Je zadáná funkce ϕ a tolerance ε
• Zadefinujeme ϕ (x) = λϕ(x)+(1−λ)x, kde λ je relaxační parametr.
λ
• Zvolíme nějakou hodnotu pro λ, typicky 0 < λ ≤ 1, a aplikujeme iterační metodu na příslušné
ϕ (x).
λ
• Pokud jsme s průběhem iterace spokojeni, dokončíme ji a najdeme aproximaci x pevného bodu
k
x . Jinak zopakujeme 2 s jiným λ.
f
Metoda se nazývá konvergentní, jestliže se při zvyšování n blížíme s body y ke skutečnému řešení.
j
Metoda je stabilní, pokud chyby, které se při výpočtech objeví, neposiluje.
6.3 Numerické řešení diferenciálních rovnic
Algoritmus (Eulerova metoda) Eulerova metoda používá aproximaci tečny v okolí x . Je zadána
j
rovnice y(cid:48) = f(x,y) na [x ,x +T], počáteční podmínka y a n ∈ N.
0 0 0
• Nastavíme h = T a x = x +jh pro j = 1,...n.
n j 0
• y je ze zadání.
0
• Pro j = 0,...,n−1 definujeme y = y +f(x ,y )·h.
j+1 j j j
Definice Uvažujeme nějakou metodu pro řešení Cauchyho úloh. Pro konkrétní úlohu na [x ,x +T]
0 0
s řešením y(x) a pro každé n ∈ N nechť metoda generuje odhady {y } v bodech příslušné sítě {x },
j j
označme pak E = max |y(x )−y )|. Metoda je konvergentní, pokud pro všechny úlohy s Lipschit-
n j j j
zovskou f příslušná chyba splňuje E → 0.
n
Definice Uvažujeme jednokrokovou metodu pro řešení Cauchyho úloh. Pro konkrétní úlohu s řešením
y, dané n ∈ N s odpovídajícím krokem metody h a všechna j = 1,...,n definujeme lokální chybu
metody jako d (h) = y(x )−y , kde y bylo spočítáno metodou s použitím skutečné hodnoty y(x )
j j j j j−1
namísto y . Řekneme, že metoda je konzistentí, jestliže pro všechny úlohy platí, že odpovídající
j−1
lokální chyby splňují
(cid:18) (cid:19)
d (h)
j
lim = 0 (69)
h→0+ h
pro všechna j. Řekneme, že metoda je řádu p, popř. že má řád p, jestliže d (h) = O(hp+1) pro h → 0.
j
Věta Eulerova metoda kovnerguje a je řádu 1 pro počáteční úlohy, které mají Lipschitzovskou f a
dvakrát spojitě diferencovatelné řešení.
22
