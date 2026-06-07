# Lineární algebra a geometrie (B0B01LAGA) - otázka 2

**Oficiální otázka:** Maticový počet. Determinant a inverze matice. Vlastní vektory a vlastní čísla, podobnost a diagonalizace matic.

**Zdroj:** `complete-HEX-compost.pdf`, strany 11-17
## Strana PDF 11
kde a je skal´arn´ı n´asobitel,
a· c11 c12 c13

c21 c22 c23
c31 c32 c33
= 
$$
a\cdot c_{21} a\cdot c_{22} a\cdot c_{23}
a\cdot c_{11} a\cdot c_{12} a\cdot c_{13}
$$

$$
a\cdot c_{31} a\cdot c_{32} a\cdot c_{33}
$$

2.1.3 N´asoben´ı matic
Podm´ınky pro n´asoben´ı matic:
• Matice D mus´ı m´ıt stejn´y poˇcet ˇr´adk˚u jako matice E sloupc˚u.
$$
• N´asoben´ı nen´ı komutitativn´ı. To znamen´a, ˇze D\cdot E ̸= E\cdot D
$$
N´asoben´ı matic je jiˇz komplikovanˇejˇs´ı. Plat´ı, ˇze se n´asob´ı nejprve ˇr´adek prvn´ı
matice D a prvn´ı sloupec druh´e matice E a seˇctou se. V´ysledn´a matice bude o
velikosti Aˇr´adky·Bsloupce

d21 d22 d23
d11 d12 d13

d31 d32 d33
·
e21 e22 e23
e11 e12 e13

e31 e32 e33
=

d21·e11 + d22·e21 + d23·e31 d11·e11 + d12·e21 + d13·e31 d31·e11 + d32·e21 + d33·e31 d21·e12 + d22·e22 + d23·e32 d11·e12 + d12·e22 + d13·e32 d31·e12 + d32·e22 + d33·e32 2.1.4 Transponov´an´ı matic
Transponov´an´ı matice znamen´a ozrcadlen´ı podle hlavn´ı diagon´aly.
$$
F= \begin{bmatrix} 
$$
f11 f12 f13
f21 f22 f23
f31 f32 f33
 
$$
d_{21}\cdot e_{13} + d_{22}\cdot e_{23} + d_{23}\cdot e_{33}
d_{11}\cdot e_{13} + d_{12}\cdot e_{23} + d_{13}\cdot e_{33}
$$

$$
d_{31}\cdot e_{13} + d_{32}\cdot e_{23} + d_{33}\cdot e_{33}
$$

Transponovan´a FT :
FT
= 
f11 f21 f31
f12 f22 f32


f13 f23 f33

Je to moˇzn´e i pro neˇctvercov´e matice:
$$
G=
$$
g11 g12 g13
g21 g22 g23
Transponovan´a matice GT :
GT
= 

g12 g22
g11 g21
g13 g23

10

## Strana PDF 12
2.1.5 Inverzn´ı matice
V´ıce v kapitole 2.2.1
2.1.6 Determinant
V´ıce v kapitole 2.2.2
2.2 Determinant a inverze matice
2.2.1 Inverzn´ı matice
• pomoc´ı GEM:
D´am si vedle sebe matici A, kter´e chci inverzi, a jednotkovou matici E3
$$
A=
$$
1 0 1 0
1 3 0 1
Nyn´ı odeˇctu od druh´eho ˇr´adku R2 jedenkr´at R1
$$
A=
$$
1 0 1 0
0 3 0 1
A n´aslednˇe podˇel´ım tˇrema R2
$$
A=
$$
1 0 1 0
0 1 0 1/3
Moment´alnˇe je vlevo jednotkov´a matice E2 a vpravo je A−1
A−1
=
1 0
0 1/3
• pomoc´ı Adjungovan´e matice:
Mˇejme matici B, kter´e chceme inverzi B−1:
b21 b22 b23
$$
B=  b_{11} b_{12} b_{13}
$$
b31 b32 b33
 
Pot´e Vytvoˇr´ıme matici doplˇnk˚u, kde jeden doplnˇek je zadefinov´an t´ımto
vztahem, kde i a j, jsou ˇr´adek a sloupec B:
$$
Aij = (-1)i+j \cdot det(Mij )
$$
Lidsk´e vysvˇetlen´ı podstaty vzorce. Prvn´ı ˇclen, kde mocn´ıme -1 ud´av´a,
zdali bude doplnˇek kladn´y, nebo z´aporn´y. (sud´a mocnina = kladn´y, lich´a
mocnina = z´aporn´y). Dalˇs´ım krokem je, si vyˇskrtnout si i a j -t´y ˇr´adek.
11

## Strana PDF 13
b22 b23
b32 b33
V tu chv´ıli n´am vznikne pouze matice typu 2x2 z 3x3. Zde je pˇr´ıklad, jak
$$
toto vypad´a pro i = 1 a j = 1 :
M_{11} =
$$
V tuto chv´ıli m˚uˇzeme ˇr´ıct, ˇze:
$$
c_{11} = (-1)1+1
$$
·det b22 b23
b32 b33
Z t´eto matice pot´e udˇel´ame determinant a m´ame prvn´ı prvek matice
doplˇnk˚u. Pot´e, co takto udˇel´ame celou matici z´ık´ame novou matici o
stejn´em rozmˇeru jako byla p˚uvodn´ı. To je 3x3:
$$
C=  c_{11} c_{12} c_{13}
$$
c21 c22 c23
c31 c32 c33
 
Matici doplˇnk˚u trasnformujeme a z´ısk´ame adjungovanou matici:
$$
adj(B) = CT
$$
V tuto chv´ıli jiˇz m˚uˇzeme koneˇcnˇe pouˇz´ıt vztah na v´yslednou inverzn´ı
$$
matici:
$$
1
B−1
=
$$
\cdot adj(B)
det(B)
$$
D˚uraznˇe tento postup doporuˇcuji u matic vˇetˇs´ıch jak 3x3. Ide´aln´ı velikost
je 4x4, kdy jsme schopni pro doplnˇek pouˇz´ıt Sarussovo pravidlo, ALE st´ale
potˇrebujeme z´ıskat p˚uvodn´ı derminant 4x4 matice.
12

## Strana PDF 14
2.2.2 Determinant
• Sarrusovo pravidlo:
– Pouze pro matice 2x2 a 3x3!
Nejzn´amˇejˇs´ı je asi ze stˇredn´ı ˇskoly Sarrusovo pravidlo. To n´am ˇr´ık´a, ˇze
determinant matice A je souˇcet souˇcin˚u vˇsech prvk˚u na hlavn´ı diagon´ale
ku rozd´ılu souˇctu souˇcin˚u na vedlejˇs´ı diagon´ale.
Pˇr´ıklad v R2:
$$
A=
$$
a11 a12
a21 a22
$$
det(A) = a_{11}\cdot a_{22}-a_{12}\cdot a_{21}
$$
Pˇr´ıklad v R3:
b21 b22 b23
$$
B=  b_{11} b_{12} b_{13}
$$
b31 b32 b33
 
$$
det(B) = b_{11}\cdot b_{22}\cdot b_{33}+b_{13}\cdot b_{21}\cdot b_{32}+b_{12}\cdot b_{23}\cdot b_{31}-b_{11}\cdot b_{23}\cdot b_{32}-b_{12}\cdot b_{21}\cdot b_{33}-b_{13}\cdot b_{22}\cdot b_{31}
$$
• pomoc´ı GEM:
– Pro libovolnˇe velk´e matice.
$$
A= \begin{bmatrix}
$$
0 a22 a23
a11 a12 a13

0 0 a33

$$
det(A) = a_{11}\cdot a_{22}\cdot a_{33}
B=
$$
   
b11 b12 b13 b14
0 b22 b23 b24
0 0 b33 b34
0 0 0 b44
   
$$
det(B) = b_{11}\cdot b_{22}\cdot b_{33}\cdot b_{44}
$$
Vlastn´ı vektory a vlastn´ı ˇc´ısla
2.3 Definice:
Pro line´arn´ı zobrazen´ı f : L → L je λ ∈ F vlastn´ı ˇc´ıslo, pokud existuje
$$
nenulov´y vektor x, splˇnuj´ıc´ı rovnost f(x) = \lambda\cdot x.
$$
Kaˇzd´emu takov´emu nenulov´emu vektoru x ˇr´ık´ame vlastn´ı vektor pˇr´ısluˇsn´y
hodnotˇe λ.
13

## Strana PDF 15
2.3.1 Vlastn´ı ˇc´ıslo
Vlastn´ı ˇc´ıslo dostaneme ze vztahu:
$$
det(A-\lambdaEn) = 0
$$
Uvedu na pˇr´ıkladˇe:
$$
A= \begin{bmatrix}
$$
0 1 0
1 0 1

1 0 1

Determinant t´eto matice det(A) = 0, coˇz splˇnuje podm´ınku o singularitˇe.
$$
N´aslednˇe aplikujeme A-\lambdaEn = 0:
A= \begin{bmatrix}
$$
0 1 0
1 0 1

1 0 1
$$
\lambdaE3 = \begin{bmatrix}
$$
0 λ 0
λ 0 0

0 0 λ

Po vyn´asoben´ı:
$$
A= \begin{bmatrix}
$$
0 1−λ 0
1−λ 0 1

1 0 1−λ

$$
Pot´e determinant matice A-\lambdaEn = 0:
det(A-\lambdaEn) = (1-\lambda)3
-(1-\lambda) = 0
$$
ˇ
Reˇsen´ı t´eto kubick´e rovnice je λ=−1,0,1. Tyto hodnoty jsou vlastn´ı ˇc´ısla
• Doplnˇek:
Pro singul´arn´ı matici (nem´a inverzi a det(A) = 0) plat´ı, ˇze alespoˇn jedno
$$
vlastn´ı ˇc´ıslo je \lambda= 0.
$$
Naopak pro regul´arn´ı matici matici (m´a inverzi a det(A) ̸= 0) plat´ı, ˇze
$$
ˇz´adnˇe vlastn´ı ˇc´ıslo je \lambda= 0.
$$
2.3.2 Vlastn´ı vektor
$$
Vlastn´ı vektor je takov´y vektor \vec x, kter´y je nenulov´y (\vec x̸= \vec o), kter´y splˇnuje:
f(\vec x) = \lambda\cdot\vec x
$$
Neboli,vektor ⃗x se zobraz´ı pomoc´ı funkce f tak, ˇze je pouze v nov´em prostoru
ˇsk´alov´an skal´arem. Tento skal´ar je vlastn´ım ˇc´ıslem.
Pokraˇcov´an´ı pˇr´ıkladu pro vlastn´ı ˇc´ısla:
$$
\lambda=-1,0,1
$$
V´ysledn´ym tvarem bude vektor, kter´y bud’to bude posunut´y, nebo zaˇc´ın´a od
⃗o. D´ale podle n´asobnosti koˇrenu λ urˇc´ıme, kolik vektor˚u bude ve spanu.
Moment´alnˇe zavedeme eigen, kter´y je vlastnˇe matice det(A−λEn), kdy
14

## Strana PDF 16
dosad´ıme za λ hodnotu vlastn´ıho ˇc´ısla.
eigen(-1, A):
$$
A= \begin{bmatrix}
$$
0 1−(−1) 0
1−(−1) 0 1

1 0 1−(−1)
= 
0 2 0
2 0 1

1 0 2

eigen(0, A):
$$
A= \begin{bmatrix}
$$
0 1−0 0
1−0 0 1

1 0 1−0
= 
0 1 0
1 0 1

1 0 1

eigen(1, A):
$$
A= \begin{bmatrix}
$$
0 1−1 0
1−1 0 1

1 0 1−1
= 
0 0 0
0 0 1

1 0 0

Nyn´ı zkontrolujeme, zda-li nejsou nˇekter´e ˇr´adky Line´arnˇe Nez´avisl´e. A pr´avˇe
takov´a je matice pro λ= 0 neboli eigen(0,A). Tu tedy GEM uprav´ıme na:
0 1 0
$$
eigen(0,A) = \begin{bmatrix} 1 0 1
$$
0 1 0
1 0 1
 =  1 0 1
0 0 0
 
Nyn´ı chceme dos´ahnout homogenn´ıho ˇreˇsen´ı, neboli prav´a strana b= ⃗o, tomuto
$$
se ˇr´ık´a ker(A-\lambda\cdot E_{3}), pro \lambda= 0 je ker(A-0\cdot E_{3}):
ker(A-0\cdot E_{3}) = \begin{bmatrix}
$$
0 1 0 0
1 0 1 0
0 0 0 0


Nyn´ı vid´ıme, ˇze y = 0 a x, z si m˚uˇzeme zvolit za podm´ınky: z=−x
V tuto chv´ıli m´ame volnou ruku nad volen´ım x nebo y. A tento splˇnuj´ıc´ı vektor
obal´ıme spanem a ˇrekneme, ˇze je to ˇreˇsen´ı neboli vlastn´ı vektor pro tuto λ:
$$
ker(A-0\cdot E_{3}) = \begin{bmatrix}
$$
0 1 0 0
1 0 1 0
0 0 0 0

0
= span  −1
1
 
• Doplnˇek:
ve spanu.
Span mi ud´av´a nˇejak´y prostor, kter´y je generov´an vektory, nebo vektorem
2.4 Podobnost a diagonalizace matic
2.4.1 Podobnost matic
Slide 254
2.4.2 Diagonalizace matic
Slide 258
15

## Strana PDF 17
<!-- Strana nemá extrahovatelnou textovou vrstvu. -->
