# Komplexní analýza a transformace (B0B01KANA) - otázka 2

**Oficiální otázka:** Fourierovy řady, Fourierova a Laplaceova transformace – význam, gramatika, věty o inverzi. Přímá a zpětná transformace Z. Aplikace transformací na řešení diferenciálních a diferenčních rovnic.

**Zdroj:** `complete-HEX-compost.pdf`, strany 50-53
## Strana PDF 50
Komplexní Analýza - státnicové okruhy Orri
KANA - 2
1. F Fourierova transformace
Věta (Existence a spojistost Fourierovy transformace) Je-li funkce f : R →C absolutně
integrovatelná na R, tj.
∞
|f(t)|dt<∞
−∞
potom F : R →C existuje a je to spojitá funkce na R
Množinu všech absolutně integrovatelných funkcí na R budeme značit L1(R), je-li f ∈L1(R), potom
$$
platí lim\omega\to\pm\infty|F(\omega)|= 0
$$
Fourierova transformace lze chápat jako konvoluci funkce f(t) s konvolučním jádrem e(−iωt), kdy se
funkce f(t) (vzor) zobrazí na její obraz F(ω). Zapsáno též jako
$$
F(\omega) = F [f(t)](\omega) =
$$
∞
f(t)e−iωtdω
−∞
Fouerirova transformace je vzájemně jednoznačně zobrazení. Ke každému obrazu existuje pevně
daný vzor. Pro zpětný převod z obrazu do vzoru se používá inverzní Fourierova transformace.
$$
f(t) = F-1[F(\omega)](t) = 1
$$
2π
∞
−∞
F(ω)eiωtdω
tedy převod mezi FT a IFT je
$$
F [f(t)](\omega) = 2\piF-1[f(t)](-\omega), tj. f(t) = F-1[f(t)](-\omega)
$$
Základní algebraické vlastnosti F transformace pro zjednodušení výpočtu
$$
F [f(t) + ag(t)](\omega) = F [f(t)](\omega) + aF [g(t)](\omega)
$$
Věty o posunutí a změně měřítka
$$
Pro a\inR : F [f(t-a)](\omega) = e-i\omegaaF [f(t)](\omega)
Pro a\inR : F [eiatf(t)](\omega) = F [f(t)](\omega-a)
Pro a\inR\[0] : F [f(at)](\omega) = 1
$$
|a|F [f(t)] ω
a
Věta (Derivace obrazu) Jestliže f(t) a tf(t) leží v L1(R), pak
$$
F [tf(t)](\omega) = i d
$$
dωF [f(t)](ω)
$$
v případě tn: F [tnf(t)](\omega) = in dn
$$
dωn F [f(t)](ω)
Věta (Obraz derivace) Jestliže n∈N a f,f′,...,f(n) ∈L1(R) jsou spojité, pak
$$
F f(n)(t) (\omega) = (i\omega)nF [f(t)](\omega)
$$
6

## Strana PDF 51
Komplexní Analýza - státnicové okruhy Orri
Obraz konvoluce, konvoluce signálů je násobení spekter
$$
F [f(t) ∗g(t)](\omega) = F(\omega)\cdot G(\omega)
$$
matematické využití je pro řešení diferenciálních rovnic, př.
d2f(t)
dt2 + 4 df(t)
$$
dt + 4f(t) = 1
$$
e−|t|
2
použitím F dostaneme následující
$$
-\omega2F (\omega) + i_{4}\omegaF (\omega) + 4F (\omega) = 1
$$
ω2 + 1
algebraickou úpravou a F−1 dostaneme řešení
2. L Laplaceova transformace
$$
Definice Laplaceova transformace funkce f : [0,\infty) \toC je komplexní funkce L [f] = F definovaná
$$
pro s∈C předpisem
$$
F(s) =
$$
0
∞
f(t)e−stdt
Množinu všech po částech spojitých funkcí f : [0,∞) →C, které jsou nejvýše exponenciálního řádu,
budeme značit symbolem L0.
Základní algebraické vlastnosti L transformace pro zjednodušení výpočtu
$$
L [f(t) + ag(t)](s) = L [f(t)](s) + aL [g(t)](s)
Heavisideova funkce 1(t) : R \toR je definována jako
1(t) = 1, pokud t\ge0
$$
0, pokud t<0
Další vlastností jsou věty o posunu a změně měřítka
$$
L [f(at)](s) = 1
$$
a
L [f(t)] s
a
$$
L [eatf(t)](s) = L [f(t)](s-a)
L [f(t-a)1(t-a)](s) = e-asL [f(t)](s)
L [f(t)1(t-a)](s) = e-asL [f(t+ a)](s)
$$
Věta (O derivaci obrazu) Jestliže f ∈L0, pak
$$
L [tf(t)](s) =-
$$
d
dsL [f(t)](s)
7

## Strana PDF 52
Komplexní Analýza - státnicové okruhy Orri
Věta (O obrazu derivace ) Nechť n ∈N,f,f′,...f(n−1) ∈L0 jsou spojité a f(n) je po částech
spojitá, potom platí
$$
L [f(n)(t)](s) = snL [f(t)](s)-sn-1f(0)-sn-2f′(0)-
$$
...−f(n−1)(0)
pro první až třetí derivaci:
$$
L [f′(t)](s) = sF(s)-f(0)
L [f′′(t)](s) = s2F(s)-sf(0)-f′(0)
L [f′′(t)](s) = s3F(s)s2f(0)-sf′(0)-f′′(0)
Obraz konvoluce Nechť f,g\inL0. Konvoluce funkcí f a g je (f∗g)(t) = t
$$
0 f(τ)g(t−τ)dτ, potom
obrazem je
$$
L [(f ∗g)(t)](s) = L [f(t)](s)\cdot L [g(t)](s)
$$
Inverzní Laplaceova transformace
$$
f(t) = L-1[F(s)](t) = 1
$$
2πi C
F(s)estds
při používání L se nejčastěji vychází ze slovníků, kde jsou jednoznačně přiřazeny vzory a obrazy.
Obvzláště výhodná je Laplaceova transformace na popis LTI systémů, kde se diferenciální rovnice
zjednodušší na algebraické a nulové počáteční podmínky nevnesou do systému další členy.
Věta (O obrazu periodické funkce) Nechť f ∈L0 je periodická na intervalu [0,∞) s periodou
T >0, potom
$$
L [f(t)](s) =
$$
T
0 f(t)e−stdt
1−e−sT
=
1
1−e−sT L [f(t) (1(t)−1(t−T))](s)
3. Z Z-transformace
Z-transformace je analogií Laplaceovy transformace pro diskrétní problémy.
Řekneme, že posloupnost (an)∞
n=0 komplexních čísel je nejvýše exponenciálního řádu, jestliže existuje
$$
\alpha\inR a M >0 takové, že |an|\leMe\alphan pro každé n\inN0. Množinu všech komplexních posloupností,
$$
které jsou nejvýše exponenciálního řádu, značíme symbolem Z0.
Definice Z-transformace posloupnosti (an)∞
$$
n=0 komplexních čísel je funkce Z [an](z) = F(z) defino-
$$
vána jako
$$
F(z) =
$$
∞
$$
n=0
$$
an
, z∈U(∞)
zn
8

## Strana PDF 53
Komplexní Analýza - státnicové okruhy Orri
$$
linerarita: Z [\alphaan + bn](z) = \alphaZ [an](z) + Z [bn](z)
$$
vlastnosti o posunu a změně měřítka
$$
Z [\alphanan](z) = Z [an] z
$$
α
d
$$
Z [nan](z) =-z
$$
dzZ [an](z)
Věta (O obrazu posunuté posloupnost, posun vlevo) Jestliže (an)∞
$$
n=0 \inZ0 a k\inN, pak
Z [an+k](z) = zk Z [an](z)-a_{0}-
$$
a1
z−
...−
ak−1
zk−1)
$$
= zkZ [an](z)-a0zk
$$
−a1zk−1
−
...−ak−1z
$$
Z [an+1](z) = zF(z)-a0z
Z [an+2](z) = z2F(z)-a0z2
Z [an+3](z) = z3F(z)-a0z3
$$
−a1z
−a1z2
−a2z
$$
konvoluce: cn =
$$
n
$$
k=0 akbn-k, pro každé n\inN0
$$
Obraz konvoluce
$$
Z [an ∗bn](z) = Z [an](z)Z [bn](z)
Inverzní transformace an = Z-1[F(z)](n) v integrálním tvaru
an =
$$
1
2πi C
F(z)zn−1dz,n∈N0
Inverzní Z -transformace metodou reziudí Necht’ F ∈H∞je holomorfní na C až na konečně
mnoho izolovaných singularit. Potom pro n∈N0 platí
$$
an = Z-1[F(z)](n) =
$$
zj
reszj F(z)zn−1
Využítí Z-transformace nachází zejména v diskrétních soustavách, kde se pomocí ní určují odezvy
systémů. Rovnice pro LTI se opět zjednodušší kvůli nulovosti záporných koeficientů.
9
