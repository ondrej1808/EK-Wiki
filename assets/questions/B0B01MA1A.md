Matematická Analýza 1 - státnicové okruhy Orri
MA1A - 1
1. Funkce jedné proměnné
Definice Reálná funkce reálné proměnné je zobrazení f :A→R, kde A⊂R. Množina A se nazývá
definiční obor zobrazení f a značí se D(f). Množina f(A) = {f(x) | x ∈ A}1 se nazývá obor
hodnot zobrazení f a je značena jako H(f).
Definice Funkce f :A→R se nazývá
1. prostá, pokud různým vzorům odpovídají různé obrazy, tj. pro x,y ∈A,x̸=y, je f(x)̸=f(y)
2. na R, pokud její obor hodnot je R
3. vzájemně jednoznačné (bijekce), pokud je funkce prostá a zároveň na
4. inverzní, pokud je f prostá, f (x)=y ⇔ f(y)=x,D(f )=H(f)
−1 −1
Definice Máme funkci f :A→R. Funkce g :H(f)→A se nazývá inverzní k zobrazení f, pokud
(g◦f)=x,∀x∈A.2
Definice funkce f je na množině A⊂D(f)
omezená, jestli existuje S ∈R tak, že pro vš. x∈A platí: |f(x)|≤S,
nebo pokud je omezená shora a zdola
zdola omezená, jestli existuje L∈R tak, že pro vš. x∈A platí: L≤|f(x)|,
shora omezená, jestli existuje K ∈R tak, že pro vš. x∈A platí: |f(x)|≥K.
Definice funkce f je na množině A⊂D(f)3
neklesající, jestli f(x )≤f(x ) ∀x ,x ∈A,x <x ,
1 2 1 2 1 2
nerostoucí, jestli f(x )≥f(x ) ∀x ,x ∈A,x <x ,
1 2 1 2 1 2
monotonní, je-li na A neklesající nebo nerostoucí
rostoucí, jestli f(x )<f(x ) ∀x ,x ∈A,x <x ,
1 2 1 2 1 2
klesající, jestli f(x )>f(x ) ∀x ,x ∈A,x <x ,
1 2 1 2 1 2
ryze monotonní, je-li na A rostoucí nebo klesající.
Definice Funkce f se nazývá
1. sudá, pokud f(−x)=f(x) pro ∀x z definičního oboru funkce f,
1zahrnujef(x)provšechnyxzmnožinyA
2"◦"znamenásloženáfunkce,tj.(g◦f)(x)=g(f(x))
3"∀"znamenáprovšechna,zahrnutívšechxn zmnožinyA
1

Matematická Analýza 1 - státnicové okruhy Orri
2. lichá, pokud f(−x)=−f(x) pro ∀x z definičního oboru funkce f.
Součet sudých(lichých) funkcí je funkce sudá (lichá). Součin a podíl sudých funkcí je funkce sudá,
součin a podíl dvou lichých funkcí je funkce sudá, součin a podíl sudé a liché funkce je funkce lichá.
Definice Funkce f se nazve periodická s periodou T >0, pokud pro každé x∈D(f) platí
f(x+T)=f(x−T)=f(x), x±T ∈D(f)
2. limita a spojitost
Definice: Funkce f definovaná v prstencovém okolí bodu a∈R má v bodě a limitu b∈R, pokud
ke každému okolí U bodu b existuje prstencové okolí P bodu a tak, že f(P)⊂U.4
lim f(x)=b
x→a
Věta Limita funkce ve vlastním bodě existuje právě tehdy, pokud v tomto bodě existují obě
jednostranné limity a jsou si rovny.
vlastní limita ve vlastním bodě: x ∈R,a∈R lim f(x)=a
0 x→x0
nevlastní limita ve vlastním bodě: x ∈R,a∈±∞ lim f(x)=±∞
0 x→x0
vlastní limita ve nevlastním bodě: x ∈±∞,a∈R lim f(x)=a
0 x→±∞
nevlastní limita ve nevlastním bodě: x ∈±∞,a∈±∞ lim f(x)=±∞
0 x→±∞
Věta (Heineho věta)Nechťf jefunkcedefinovanávprstencovémokolíbodua.Paklim f(x)=
x→a
b právě tehdy, když pro každou posloupnost (a )∞ čísel z D(f)\{a} s limitou rovnou a platí
n n=1
lim f(a )=b.
n→∞ n
Věta Má-li funkce f v bodě a vlastní limitu, pak je omezená na některém prstencovém okolí bodu a.
Věta (Jednoznačnost limity) Každá funkce má v každém bodě nejvýše jednu limitu.
Věta (O sevření) Je-li lim f(x)=lim g(x)=b a f ≤h≤g, pak lim h(x)=b
x→a x→a x→a
Věta (Limita součtu, rozdílu, součinu a podílu) Jestliže pro funkce f , g existují limity
lim f(x) a lim g(x) (vlastní nebo nevlastní), pak
x→a x→a
lim(f(x)±g(x))= lim f(x)± lim g(x)
x→a x→a x→a
(cid:16) (cid:17) (cid:16) (cid:17)
lim(f(x)·g(x))= lim f(x) · lim g(x)
x→a x→a x→a
(f(x) lim f(x)
lim = x→a
x→a g(x) lim x→a g(x)
Věta (limita složené funkce) Nechť a∈R a
4R=R∪{−∞,+∞},nebolivšechnareálnáčíslavčetně±nekonečna
2

Věta 3.11 (limita složené funkce):

Jestliže „Jim f(x) = a, jim g(y) = b a platí alespoň
jedna z následujících podmínek:

a) f(x) 7 a na nějakém P(x),

b) £ je spojitá v a,

pak „Jim (gof)(x) = „Jim s(f(x)) = b.

Matematická Analýza 1 - státnicové okruhy Orri
1. lim f(x)=b∈R
x→a
2. lim g(y)=c∈R
y→b
3. g(b)=c nebo f(x)̸=b na některém prstencovém okolí bodu a
pak lim (g◦f)(x)=b.
x→a
Definice Funkce f je spojitá v bodě a ∈ D(f), jestliže pro každé okolí U(f(a)) hodnoty funkce
f v bodě a existuje okolí U(a) bodu a takové, že pro všechna x∈U(a)∩D(f) platí
f(x)∈U(f(a))
analogicky spojitost zleva a zprava
Věta Funkce f definovaná v okolí bodu a je v tomto bodě spojitá právě tehdy, když lim f(x)=
x→a
f(a).
Věta Je-li funkce f spojitá v bodě a, funkce g spojitá v bodě f(a), pak funkce g◦f je spojitá
v bodě a.
Věta (maximum a minimum funkce) Spojitá funkce na uzavřeném intervalu nabývá největší
a nejmenší hodnoty.
3. Derivace, její vlastnosti a význam
Definice Nechť f je funkce definovaná na okolí bodu a. Derivace funkce f v bodě a je
(cid:12)
df(x)(cid:12) f(a+h)−f(a)
(cid:12) =f′(x)= lim
dx (cid:12) (cid:12) h→0 h
x=a
Funkce má v bodě derivaci právě tehdy, má-li v tomto bodě obě jednostranné derivace.
Definice Nechť funkce f má v každém bodě otevřeného intervalu I vlastní derivaci. Derivace funkce
f na intervalu I je funkce f′ :x→f′(x),∀x∈I. Derivace sudé funkce je lichá funkce. Derivace liché
funkce je sudá funkce.
Věta Funkce je spojitá v každém bodě, ve kterém má vlastní derivaci.
Věta (Derivace součtu, rozdílu, součinu a podílu) Jsou-li f,g funkce, které mají vlastní
derivaci v bodě a, pak platí:
1. (f ±g)′(a)=f′(a)±g′(a)
2. (f ·g)′(a)=f′(a)g(a)+f(a)g′(a)
3. je-li g(a)̸=0, pak
(cid:16)
f
(cid:17)′
(a)= f′(a)g(a)−f(a)g′(a)
g g(a)2
Věta (Derivace složené funkce)Má-lifunkcef vlastníderivacivboděa,funkceg vlastníderivaci
v bodě f(a)=b, pak funkce h=g◦f má v bodě a vlastní derivaci
h′(a)=g′(b)·f′(a)=g′(f(a))·f′(a)
3

Matematická Analýza 1 - státnicové okruhy Orri
Rovnice tečny t a normály n grafu funkce f v bodě (a,f(a)) lze vyjádřit jako
t:y =f′(a)x+const
1
n:y =− x+const, f′(a)̸=0
f′(a)
příslušné konstanty lze najít po dosazení (x,y)=(a,f(a))
Věta (Rolleova) Nechť pro funkci f definovanou na intervalu [a,b] platí
1. f je spojitá na intervalu [a,b]
2. f má derivaci na každém bodě v intervalu [a,b]
3. f(a)=f(b)
Pak existuje bod c∈(a,b) takový, že pro něj platí f′(c)=0.
4

Matematická Analýza 1 - státnicové okruhy Orri
Věta (Lagrangeova o přírustku funkce) Nechť funkce f je spojitá na intervalu [a,b] a má
derivaci v každém bodě intervalu (a,b). Pak existuje bod c∈(a,b) takový, že platí
f(b)−f(a)=f′(c)·(b−a)
Věta (Cauchyova): Nechť funkce f, g jsou spojité na intervalu [a,b], mají vlastní derivaci na
intervalu (a,b) a g′ ̸=0 v intervalu (a,b). Pak existuje bod c∈(a,b) takový, že platí
4. Průběh funkce a lokální extrémy
Funkce f nabývá na množině M ⊂ D(f) svého globálního maxima (globálního minima)
A v bodě x , jestliže x ∈M,f(x )=A a pro každé x∈M platí
0 0 0
f(x)≤f(x ) (f(x)≥f(x ))
0 0
globální extrémy - globální maximum, globální minimum
Funkce f nabývá v bodě x lokálního maxima (lokálního minima) f(x ), jestliže existuje okolí
0 0
U(x ) bodu x takové, že pro každé x∈U(x ) platí
0 0 0
f(x)≤f(x ) (f(x)≥f(x ))
0 0
lokální extrémy - lokální maximum, lokální minimum
Věta Jestliže funkce f nabývá lokálního extrému v bodě x a existuje f′(x ), pak f′(x )=0.
0 0 0
Definice Řekneme, že funkce f je rostoucí (klesající) v bodě x ∈ D(f), jestliže existuje okolí
0
U(x )⊂D(f) bodu x takové, že pro každé x∈U(x ) platí
0 0 0
a) je-li x<x , pak f(x)<f(x )(f(x)>f(x ))
0 0 0
a) je-li x>x , pak f(x)>f(x )(f(x)<f(x ))
0 0 0
pokud je f′(x )>0(f′(x )<0), pak je f v x rostoucí (klesající)
0 0 0
5

Matematická Analýza 1 - státnicové okruhy Orri
Ověřování lokálních extrémů pomocí 2. derivace:
f′(x )=0 a f′′(x )>0(f′′(x )<0), pak f má v x lokální minimum (lokální maximum)
0 0 0 0
Má-li funkce f druhou derivaci na (a,b), pak:
• je-li na (a,b)f′′ >0(f′′ ≥0|f′′ <0|f′′ ≤0), pak je f na (a,b) ryze konvexní (konvexní | ryze
konkávní | konkávní)
• má-li f v x ∈(a,b) inflexi a existuje-li f′′(x ), pak f′′(x )=0
0 0 0
• je-li x ∈(a,b),f′′(x )=0 a f′′ mění v x znaménko, pak f má v x inflexi
0 0 0 0
Definice:
• Řekneme, že funkce f má v bodě x ∈R svislou asymptotu, jestliže alespoň jedna jedno-
0
stranná limita v x existuje a je nevlastní. Rovnice této asymptoty je x=x
0 0
• Řekneme, že funkce f má v bodě x =+∞(−∞) asymptotu y =kx+q(k,q ∈R), jestliže
0
lim (f(x)−(kx+q))=0
x→x0
5. Aproximace Taylorovým polynomem
f′′(x ) f′′′(x ) f(n)(x )
T (x)=f(x )+f′(x )(x−x )+ 0 (x−x )2+ 0 (x−x )3+...+ 0 (x−x )n =
n 0 0 0 2 0 2·3 0 n! 0
= (cid:88) n f(k)(x 0 ) (x−x )k
k! 0
k=0
Le Taylorův polynom :D
T (x)=f(x )+f′(x )(x−x )
1 0 0 0
f′′(x )
T (x)=f(x )+f′(x )(x−x )+ 0 (x−x )2
2 0 0 0 2 0
6

Matematická Analýza 1 - státnicové okruhy Orri
MA1A - 2
1. Primitivní funkce a neurčitý integrál
Definice: Funkce F je primitivní funkcí k funkci f na intervalu I, jestliže pro každé x ∈ I
existuje F′(x) a platí:
F′(x)=f(x)
Věta Je-li F primitivní funkcí k funkci f na intervalu I, potom pro každé je F +c také primitivní
funkcí k funkci f na intervalu I.
Pokud existuje alespoň jedna primitivní funkce F k funkci f na intervalu I, nazýváme množinu
všech primitivních funkcí f neurčitým integrálem funkce f na intervalu I, značíme ji
(cid:90)
f(x)dx
Věta (o substituci v integrálu) Nechť I,J jsou otevřené intervaly, funkce φ:I →J má derivaci
φ′ na intervalu I, funkce f :J →R má primitivní funkci F na intervalu J, pak platí
(cid:90) (cid:90)
f(x)dx= f(φ(t))φ′(t)dt=F(φ(t))+c, t∈I
Věta (integrování per partes) Nechť na intervalu I existují u′,v′, (cid:82) u′v, pak
(cid:90) (cid:90)
uv′ =uv− u′v, naI
Mimo tabulkové integrály jsou metody základními způsoby výpočtu integrálů, dle typu problému
lze použít různé substituce, univerzální substitucí je tan(x). Racionální lomené funkce se počítají
2
pomocí rozkladu na parciální zlomky.
2. Určitý integrál
Definice Nechť f je omezená funkce na intervalu [a,b], D je množina všech dělení intervalu [a, b],
S(f,D) a S(f,D) jsou dolní a horní integrální součty funkce f . Pokud
supS(f,D) : D ∈D =infS(f,D) : D ∈D
pak je tato hodnota nazvána určitým (přesněji Riemannovým) integrálem funkce f na intervalu
[a,b], a je symbolicky zapisována jako (cid:82)b f.
a
Tvrzení Nechť f je omezená funkce na intervalu [a,b]. Určitý integrál (cid:82)b f(x) dx existuje právě
a
tehdy, když existuje posloupnost (D )∞ dělení intervalu [a,b] taková, že
n n=1
lim S(f,D )= lim S(f,D )
n n
n→∞ n→∞
výraz (cid:82)b f(x)dx je pak roven těmto limitám.
a
7

Matematická Analýza 1 - státnicové okruhy Orri
Věta Je-li f monotonní funkce na intervalu [a,b], pak infbf(x)dx existuje
a
Věta Je-li f spojitá funkce na intervalu [a,b], pak infbf(x)dx existuje
a
Věta Je-li f je omezená funkce na intervalu [a,b], c∈R a (cid:82)b f(x)dx existuje, pak platí
a
(cid:12) (cid:12)
(cid:12)(cid:90) b (cid:12) (cid:90) b
(cid:12) f(x)dx(cid:12)≤ |f(x)|dx
(cid:12) (cid:12)
(cid:12) a (cid:12) a
Věta Nechť f je omezená funkce na intervalu [a,b],a<c<b. Pak (cid:82)b f(x)dx existuje právě tehdy,
a
když existují (cid:82)c f(x)dxa(cid:82)b f(x)dx. V takovém případě platí
a c
(cid:90) b (cid:90) c (cid:90) b
f(x)dx= f(x)dx+ f(x)dx
a a c
Věta (Newton-Leibnizova formule)Nechťf jeomezenáfunkcenaintervalu[a,b]anechťexistuje
(cid:82)b f(x)dx a primitivní funkce F k funkci f na intervalu [a,b]. Pak 1
a
(cid:90) b
f(x)dx= lim F(x)− lim F(x)
a x→b− x→a+
Věta.Nechťfunkcef jedefinovánanaintervalu(a,b),−∞≤a≤b≤∞,anechťprokaždýinterval
[c,d]⊂[a,b] je f omezená na [c,d] a existuje (cid:82)d f(x)dx.
c
Věta Nechť funkce 4 je definována na intervalu (a,b),−∞≤a≤b≤∞, a nechť pro každý interval
[c,d] ⊂ [a,b] je f omezená na [c,d] a existuje (cid:82)d f(x) dx. Jestliže funkce f není omezená nebo
c
interval (a,b) není omezený, pak následující zápis definuje nevlastní integrál 2
(cid:90) b (cid:90) e (cid:90) d
f(x)dx= lim f(x)dx+ lim f(x)dx
a c→a+ c d→b− a
Definice Nechť a,b∈R a nechť (cid:82)b f(x)dx konverguje. Střední hodnota funkce f na intervalu [a,b]
a
je definována jako
1 (cid:90) b
x= f(x)dx
b−a
a
Věta Nechť funkce f,g jsou po částech spojité na intervalu [a,b],a,b ∈ R,f ≤ g. Obsah plochy
{(x,y)∈R2 :x∈(a,b),f(x)≤y ≤g(x)} je
(cid:90) b
(g(x)−f(x))dx
a
Věta Nechť funkce f má po částech spojitou derivaci na intervalu (a,b),a,b∈R
(cid:90) b
(cid:112)
1−(f′(x))2 dx
a
1tohlejeúplněstejnýjakupotenciálu
2pokudvýrazvpravojedefinovánproněkterée∈(a,b).Je-livlastní,pakintegrálkonverguje.
8

Matematická Analýza 1 - státnicové okruhy Orri
představuje hodnotu délky grafu funkce f
Věta Nechť funkce f je po částech spojitá [a,b],a,b∈R. Obsah rotačního tělesa {(x,y,z)∈R3 :
x∈(a,b),y2+z2 ≤(f(x))2} je
(cid:90) b
π (f(x))2 dx
a
Věta Nechť funkce f má po částech spojitou derivaci na intervalu [a,b],a,b∈R. Obsah množiny
{(x,y,z)∈R3 :x∈(a,b),y2+z2 =(f(x))2} (plášť rotačního tělesa) je
(cid:90) b
(cid:112)
2π f(x) 1−(f(x))2 dx
a
9
