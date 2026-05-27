# Komplexní analýza a transformace (B0B01KANA) - otázka 1

**Oficiální otázka:** Funkce komplexní proměnné a jejich derivace. Křivkový integrál. Singularity. Mocninné řady, Taylorovy a Laurentovy rozvoje. Rezidua, reziduová věta a její aplikace.

**Zdroj:** `complete-HEX-compost.pdf`, strany 45-49
## Strana PDF 45
Komplexní Analýza - státnicové okruhy Orri
KANA - 1
1. Funkce komplexní proměnné a jejich derivace
Pro zjednodušení zápisu se využívá imaginární jednotka definovaná: i = √−1
$$
Množina komplexních čísel C je množina uspořádaných dvojic: C = [(x,y)|x,y\inR], vybavené dvěmi
operacemi:
+ : C \timesC \toC : (x_{1},y_{1}) + (x_{2},y_{2}) = (x_{1} + x_{2},y_{1} + y_{2})
\cdot: C \timesC \toC : (x_{1},y_{1})\cdot(x_{2},y_{2}) = (x1x2-y1y2,x1y2 + x2y1)
$$
Každé zobrazení C →C se nazývá komplexní funkce komplexní proměnné, množina
$$
D(f) = [z \inC|f(z) existuje ] je pak definiční obor funkce f . Limita se s ohledem na několik
$$
skutečností v C zavádí podobně.
$$
korektní zápis komplexního čísla je vyjádřeno: z= x+ iy
$$
Dále se definuje operace Re() pro reálnou složku a Im() pro imaginární složku komplexního
čísla
$$
tj. Re(z) = x a Im(z) = y
Číslem komplexně sdruženým rozumíme: (z)∗= (x+ iy)∗
Absolutní hodnota z je definována: |z|= \sqrtz∗z
$$
Argument komplexního čísla:
= x−iy
$$
arg(z) =
$$
    
arctan y
x
$$
Re(z) \ge0, z̸= 0
$$
arctan y
$$
x + \pi Re(z) \le0, Im(z) \ge0
$$
arctan y
$$
x-\pi Re(z) \ge0, Im(z) <0.
polární(exponenciální) tvar komplexního čísla: z= x+ iy= |z|ei arg(z)
Moivreova věta: (z)n = (|z|ei arg(z))n = |z|nei narg(z)
$$
Pro komplexní proměnné se definuje derivace stejně jako pro funkce reálné proměnné. Komplexní
funkce f se často rozkládá na její reálnou a imaginární část
$$
f(z) = u(x,y) + iv(x,y)
$$
Věta Nechť f : C →C má složky f= u+ iv a nechť z= x+ iy∈C. Pak následující je ekvivalentní
f′(z) existuje
Cauchy-Riemannovy podmínky: u a v mají totální diferenciál v bodě (x,y) a platí
$$
\partialu(x,y)
\partialv(x,y)
\partialx=
\partialu(x,y)
$$
∂y
$$
\partialv(x,y)
$$
=−
∂y
∂x
1

## Strana PDF 46
Komplexní Analýza - státnicové okruhy Orri
navíc platí, že
$$
f′(z) = \partialu(x,y)
\partialx + i \partialv(x,y)
\partialv(x,y)
$$
∂y
=
$$
\partialx-i \partialv(x,y)
$$
∂y
Definice Nechť G∈C je otevřená množina. Řekneme, že komplexní funkce f je holomorfní1 na
G, jestliže f′(z) existuje ve všech bodech množiny G. Tyto funkce se nazývají holomorfní. Funkce
holomorfní na množině G je spojitá na G. Jestliže má funkce f spojité druhé derivace, pak platí
Laplaceova rovnice ∇2f = 0 a tato funkce se nazývá harmonická.
$$
například: f(x,y) = x_{2}
$$
−y2
∂2f
$$
\partialx2 = 2,
=-2, \to \nabla2f = 2-2 = 0
$$
∂y2
PoznámkaVkomplexnímoborujefunkceexponenciályperiodická.Logaritmusjetzv.vícehodnotová
funkce (pro jedno z nabývá nekonečně mnoho hodnot)
∂2f
2. Křivkový integrál
V komplexní proměnné má největší význam křivkový integrál komplexní funkce. Zjednodušeně se
jedná o analogii křivkového integrálu vektorového pole podél křivky. Následující definice zavádí tento
pojem.
Definice Nechť C je křivka s parametrizací φ: [a,b] →C a nechť f : C →C je komplexní funkce
spojitá v bodech křivky C . Křivkový integrál funkce f podél křivky C je
C
$$
f(z)dz=
$$
b
f(φ(t))φ′(t)dt
a
z křivkového integrálu vychází následující věty
Věta Cauchyho Nechť G⊂C je jednoduše souvislá oblast a nechť f je holomorfní funkce na G.
Pak pro každou jednoduchou křivku C ⊂G platí
$$
f(z)dz= 0
$$
C
Cauchyův integrální vzorec Nechť G⊂C je jednoduše souvislá oblast a nechť f je holomorfní
na G. Pak pro každou jednoduchou uzavřenou křivku C ⊂G kladně orientovanou a pro každý bod
z0 ∈C platí
C
f(z)dz
z−z0
$$
= 2\piif(z_{0})
$$
Definice Poloměr konvergence označuje největší okolí bodu z0, na němž součet mocninné řady
konverguje.
Definice Mocninná řada konverguje bodově na množině M, jestliže pro každé z∈M existuje vlastní
limita S(z) částečných součtů
$$
S(z) = lim
n\to\infty
$$
Sn(z)
1holomorfní fuknce splňuje C-R podmínky, je komplexně diferencovatelná v každém bodě množiny
2

## Strana PDF 47
Komplexní Analýza - státnicové okruhy Orri
V opačném případě řada diverguje v bodě z. Řada konverguje absolutně, pokud konverguje řada
|an||z−z0|n
∞
$$
n=0
$$
Řada konverguje stejnoměrně na množině M, jestliže existuje funkce S(z) taková, že
$$
lim
z\inMsup(|Sm(z)-S(z)|) = 0
$$
Konvergence řad se vyšetřuje odmocninovým a limitním kritériem, z nichž vyplývá i případný
poloměr konvergence.
Věta Nechť f je funkce daná mocninnou řadou∞
$$
n=0 |an||z-z_{0}|n. Pak tato funkce má derivace
$$
všech řádů na kruhu konvergence a pro koeficienty řady existuje vzorec
f(n)(z0)
$$
= an, pro všechna n\ge0
$$
n!
Věta Nechť f je holomorfní na oblasti G⊂C a nechť z0 ∈G. Pak existují koeficienty an ∈C, že
$$
f(z) =
$$
∞
$$
n=0
$$
an(z−z0)n
pro všechna z ležící v největším otevřeném kruhu konvergence se středem v z0 a obsaženém v G.
Stručně řečeno; každá holomorfní funkce je lokálně reprezentovatelná mocninnou řadou. Z této věty
vyplývá i tzv. zobecněný Cauchyův integrální vzorec
$$
fn(z_{0}) = n!
$$
2πi C
f(z)dz
(z−z0)n+1
Věta Nechť D⊂C je jednoduše souvislá oblat a nechť f je komplexní funkce spojitá na D. Pak
následující tvrzení jsou ekvivalentní
1. f je holomorfní na D
2. Platí Cauchyův integrální vzorec
$$
3. C f(z)dz= 0 pro každou uzavřenou jednoduchou křivku C \subsetD
$$
4. f je lokálně reprezentovatelná mocninou řadou
Definice Řada tvaru
∞
$$
n=-\infty
$$
an(z−z0)n
=
∞
a−n(z−z0)−n
=
∞
an(z−z0)n
$$
n=1
n=0
$$
se nazývá Laurentova řada. První část na pravé straně rovnosti se nazývá hlavní část Laurentovy
řady s poloměrem konvergence r. Druhá část se nazývá regulární část Laurentovy řady s poloměrem
konvergence R. Řada konverguje v daném boděz∈C, konvergují-li v tomto bodě současně obě její
části.
$$
Věta Nechť f je funkce holomorfní na mezikruží P(z_{0},r,R), kde 0 \ler < R \le\infty. Pak existují
$$
koeficienty an ∈C,n∈Z, že∞
$$
n=0 an(z-z_{0})n
$$
3

## Strana PDF 48
Komplexní Analýza - státnicové okruhy Orri
pro všechna z∈P(z−0,r,R). Přitom koeficienty této Laurentovy řady jsou určeny jednoznačně a
platí
1
2πi C
$$
an =
$$
f(w)dw
(w−z0) , n∈Z
kde C je libovolná kladně orientovaná jednoduše uzavřená křivka ležící v mezikruží P(z0,r,R) a
mající bod z0 ve své vnitřní oblasti.
3. Singularity
Definice Nechť platí, že f je holomorfní funkce v otevřené množině obsahující U(z0,ϵ)\z0, přičemž
bod z0 ∈C ∪[∞]není v definičním oboru funkce f . Bod z0 se nazývá izolovaným singulárním bodem
funkce f (singularitou). Řekneme, žez0 je
1. odstranitelná singularita funkce f, existuje-li vlastní limita funkce f v bodě z0
$$
2. pól funkce f , je-li limz\toz0 f(z) = \infty
$$
3. podstatná singularita funkce f , jestliže f nemá limitu v bodě z0.
U kořenů a polů rovnic definujeme jejich řád. Kořen z0 funkce f má řád k, platí-li
$$
f(z) = (z-z_{0})kg(z)
$$
případně pól řádu k, platí-li
$$
f(z) = g(z)
$$
(z−z0)k
$$
kde v obou rovnostích platí, že g(z_{0}) ̸= 0
Laurentův rozvoj f(z) =\infty
n=-\inftyan(z-z_{0})n v prstencovém okolí bodu z_{0} \inC má f v bodě z_{0}
$$
1. odstranitelnou singularitu právě tehdy. když všechny koeficienty hlavní části Laurentovy
řady jsou nulové.
2. pól násobnosti k právě tehdy, když an = 0 pro všechna n<−k a a−k ̸= 0
3. podstatnou singularitu právě tehdy, když nekonečně mnoho koeficientů hlavní části Lau-
rentovy řady je nenulových.
4

## Strana PDF 49
Komplexní Analýza - státnicové okruhy Orri
4. Rezidua, reziduová věta a její aplikace
Z integrálního vzorce pro koeficienty mocninné řady holomorfní funkce f, lze vypozorovat jeden
speciální případ, kdy n=−1 a vztah přechází
a−1 =
1
2πi C
f(w)dw
Na pravé straně rovnice se objevil integrál ze samotné funkce f. Umíme-li tedy nálezt koeficient
řady a−1 Laurentovy řady, dokážeme vyčíslit křivkový integrál z funkce f.
Definice Nechť z0 ∈C je singularita funkce f. Koeficient a−1 Laurentovy řady funkce f se středem
v bodě z0 se nazývá reziduum funkce f v bodě z0 a značí se resz0 f(z).
Tvrzení Nechť z0 ∈C je k-násobný pól funkce f. Pak
$$
resz0 f(z) = lim
$$
z→z0
1
(k−1)!
dk−1
dzk−1 (z−z0)kf(z)
V některých speciálních případech existují jednodušší vzorce. Dále lze definovat i reziduum v
nekonečnu a pomocí něj uvést velmi elegantní rovnost
k
$$
j=1
$$
Věta (Reziduová věta) Předpokládejme, že funkce f je holomorfní v množině G\[z1 ,...,zn],
kde Gje oblast v C. Nechť C je jednoduchá uzavřená kladně orientovaná křivka ležící v G, která má
ve svém vnitřku body z1 ,...,zk,k≤n. Předpokládejme dále, že G obsahuje vnitřní oblast křivky
C . Potom
C
Reziduová věta má široké využití, s její pomocí lze počítat určité integrály s nekonečny, zjednodušeně
počítat integrální transformace nebo ji lze dokonce použít k výpočtu součtu nekonečných řad.
$$
reszj f(z) + res\inftyf(z) = 0
f(z)dz= 2\pii
$$
k
$$
j=1
$$
reszj f(z)
5
