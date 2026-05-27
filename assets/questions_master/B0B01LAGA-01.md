# Lineární algebra a geometrie (B0B01LAGA) - otázka 1

**Oficiální otázka:** Struktura lineárního prostoru, báze a dimenze. Řešení soustav lineárních rovnic. Lineární zobrazení. Skalární součin, ortogonalizace.

**Zdroj:** `complete-HEX-compost.pdf`, strany 4-10
## Strana PDF 4
1 Struktura line´arn´ıho prostoru, B´aze a
ˇ
dimenze,
Reˇsen´ı soustav line´arn´ıch rovnic,
Line´arn´ı zobrazen´ı, Skal´arn´ı souˇcin,
Ortogonalizace
1.1 Struktura line´arn´ıho prostoru
Line´arn´ı prostor nad R je mnoˇzina L
ve kter´e plat´ı:
• operace sˇc´ıt´an´ı (+)
– Nulov´y prvek
– Asociativita
– Komutativita
– opaˇcn´y vektor
• operace n´asoben´ı (·)
– Nulov´y prvek
– Asociativita
– Distributivn´ı z´akon
– N´asoben´ı jednotkov´ym skal´arem
• existence nulov´eho prvku (⃗o)
3

## Strana PDF 5
1.1.1 Vlastnosti sˇc´ıt´an´ı vektor˚u
a) sˇc´ıt´an´ı s nulov´ym vektorem:
Existuje vektor ⃗o∈L takov´y, ˇze pro kaˇzd´e ⃗x∈L plat´ı:
$$
\vec x+ \vec o= \vec o+ \vec x= \vec x
$$
b) Asociativita sˇc´ıt´an´ı:
Pro vˇsechna ⃗x,⃗y,⃗z∈L plat´ı:
$$
(\vec x+ \vec y) + \vec z= \vec x+ (\vec y+ \vec z)
$$
c) Komutativita sˇc´ıt´an´ı:
Pro vˇsechna ⃗x,⃗y∈L plat´ı:
$$
\vec x+ \vec y= \vec y+ \vec x
$$
d) Existence opaˇcn´eho vektoru:
Pro kaˇzd´y ⃗x∈L existuje pr´avˇe jeden ⃗y∈L takov´y, ˇze:
$$
\vec x+ \vec y= \vec o
$$
Tento vektor ⃗y=−⃗x oznaˇcujeme jako opaˇcn´y.
1.1.2 Vlastnosti n´asoben´ı skal´arem
a) n´asoben´ı nulov´eho prvku:
Pro kaˇzd´e ⃗x∈L plat´ı:
b) N´asoben´ı jednotkov´ym skal´arem:
Pro kaˇzd´e ⃗x∈L plat´ı:
$$
0\cdot\vec x= \vec o
1\cdot\vec x= \vec x
$$
c) Asociativita n´asoben´ı skal´arem:
Pro vˇsechna a,b∈R a ⃗x∈L plat´ı:
$$
a\cdot(b\cdot\vec x) = (a\cdot b)\cdot\vec x
$$
d) Distributivn´ı z´akon:
Pro vˇsechna a,b∈R, ⃗x∈L plat´ı:
$$
(a+ b)\cdot\vec x= a\cdot\vec x+ b\cdot\vec x
$$
1.2 B´aze a dimenze
1.2.1 B´aze
Line´arnˇe nez´avisl´e mnoˇzinˇe B, kter´a generuje prostor L, ˇr´ık´ame b´aze prostoru
L. Je-li B koneˇcn´a, pak seznamu prvk˚u B ˇr´ık´ame uspoˇr´adan´a b´aze.
4

## Strana PDF 6
• Dodatek: Line´arnˇe nez´avisl´a mnoˇzina je takov´a mnoˇzina, kdy nem˚uˇzeˇs
ani jeden vektor z dan´e mnoˇziny ”vyrobit”kombinac´ı jin´ych 2 vektor˚u.
Pˇr´ıklad LN mnoˇziny je:
$$
\vec v_{1} = \begin{bmatrix} 1
$$
0
1
0
$$
\end{bmatrix} , \vec v_{2} = \begin{bmatrix} 0
$$
0
0
$$
\end{bmatrix} , \vec v_{3} = \begin{bmatrix} 0
$$
1
 
$$
nebo:
\vec v_{1} =
$$
0
$$
1 , \vec v_{2} =
$$
1
0
1.2.2 Dimenze
Line´arn´ı prostor L m´a dimenzi n (znaˇc´ıme: dim(L) = n), pokud existuje b´aze
B prostoru L, kter´a obsahuje pr´avˇe n prvk˚u, kde n je pˇrirozen´e ˇc´ıslo.
• Dodatek:
B, kter´a je:
Pˇr´ıklad v´ypoˇctu dimenze: pokud m´am dimenzi (dim(L)) generovanou b´az´ı
$$
B=
$$
  
 1
0
0
 ,
1
 0
0
 ,
0
 0
1
 
  
tak m˚uˇzeme ˇr´ıci, ˇze:
$$
dim(L) = n
neboli:
dim(L) = 3
$$
jelikoˇz obsahuje pr´avˇe 3 prvky.
1.3
ˇ
Reˇsen´ı soustav line´arn´ıch rovnic
1.3.1 GEM - Gaussova Eliminaˇcn´ı Metoda
Povolen´e ´upravy pro GEM:
• Pˇriˇcten´ı skal´arn´ıho n´asobku ˇr´adku matice k jin´emu ˇr´adku matice
• Prohozen´ı dvou ˇr´adk˚u v matici
• Vyn´asoben´ı ˇr´adku matice nenulov´ym skal´arem
V´ysledkem je horn´ı troj˚uheln´ıkov´y tvar:
$$
A= \begin{bmatrix}
$$
0 1 1
1 1 1

0 0 1

5

## Strana PDF 7
1.3.2 Cramerovo pravidlo
Podm´ınky pro pouˇzit´ı Cramerova pravidla:
• Matice mus´ı b´yt ˇctvercov´a
• Matice mus´ı b´yt regul´arn´ı
• Matice mus´ı obsahovat line´arnˇe nez´avisl´e ˇr´adky
1.3.3 Cramerovo pravidlo - vysvˇetlen´ı
Proveden´ı Cramerova pravidla je v´ıcem´enˇe ”trivi´aln´ı”. V R2 nahrad´ım pravou
stranou matice (prav´a strana soustavy) prvn´ı nebo druh´y sloupec matice A, dle
volby promˇenn´e pro kterou to poˇc´ıt´ame . D´ale spoˇc´ıt´am determinant t´eto novˇe
vznikl´e matice A′ze vztahu:
$$
det(A′)
xi =
det(A)
$$
Pˇr´ıklad:
Mˇejme matici A a chceme z´ıskat hodnoty pro jednotliv´e x, y, z:
2 2 1 1
$$
A=  1 1 3 1
$$
1 3 2 1
 
Nejprve spoˇcteme determinant p˚uvodn´ı matice, pro podrobn´y postup 2.2.2.Pro
potˇreby tohoto pˇr´ıkladu jej pouze nap´ıˇsu:
$$
det(A) = 10
$$
pro x:
1 2 1
$$
Ax =  1 1 3
$$
1 3 2
 
Udˇel´ame determinant:
$$
det(Ax) = 3
$$
N´aslednˇe dosad´ıme do vztahu v´yˇse:
$$
det(Ax)
$$
3
$$
x=
$$
=
pro y:
Udˇel´ame determinant:
$$
det(A)
$$
10
2 1 1
$$
Ay =  1 1 3
$$
1 1 2
 
$$
det(Ay ) = 1
$$
6

## Strana PDF 8
1
10
 
2
10
N´aslednˇe dosad´ıme do vztahu v´yˇse:
$$
y=
det(Ay )
det(A)
$$
=
pro z:
2 2 1
$$
Az =  1 1 1
$$
1 3 1
Udˇel´ame determinant:
N´aslednˇe dosad´ıme do vztahu v´yˇse:
$$
z=
det(Az ) = 2
det(Az )
$$
=
$$
det(A)
$$
V´ysledkem je tedy x=
3
1
2
10 , y=
10 , z=
10
• Doplnˇek: Matice je regul´arn´ı pr´avˇe tehdy, kdyˇz m´a nenulov´y determinant
a existuje nverze t´eto matice. tj. det(A) ̸= 0. D´ale je ˇctvercov´a pr´avˇe
tehdy, kdyˇz m´a rozmˇer N x N.
1.4 Line´arn´ı zobrazen´ı
1.4.1 Podm´ınky pro identifikaci zobrazen´ı jako line´arn´ı
Necht ’ L1,L2 jsou line´arn´ı prostory nad tˇelesem F. Zobrazen´ı f : L1 →L2, pro
kter´e plat´ı:
• Additivita (zachov´an´ı sˇc´ıt´an´ı):
$$
f(\vec x+ \vec y′) = f(\vec x) + f(\vec y′)
pro vˇsechna \vec x,\vec x′\inL1.
$$
• Homogenita (zachov´an´ı n´asoben´ı skal´arem):
$$
f(a\cdot\vec x) = a\cdot f(\vec x)
$$
pro vˇsechna a∈F a ⃗x∈L1.
1.4.2 Line´arn´ı zobrazen´ı - vysvˇetlen´ı
Takov´e zobrazen´ı, kter´e splˇnuje pˇredchoz´ı podm´ınky v´yˇse, naz´yv´ame line´arn´ı
zobrazen´ı z L1 do L2.
Tak´e se to d´a popsat tak, ˇze pokud zobraz´ım jednotliv´e vektory, tak dostanu
stejnou mnoˇzinu M jako kdyˇz zobraz´ım celou mnoˇzinu:
f
n
$$
i=1
ai\cdot\vec xi =
$$
n
$$
i=1
ai\cdot f(\vec xi)
$$
V´yˇse je vysvˇetleno na line´arn´ı kombinaci vˇsech vektor˚u v M.
7

## Strana PDF 9
1.4.3 Klasifikace line´arn´ıho zobrazen´ı
• Monomorfismus, pokud je f injektivn´ı (tak´e: prost´e) zobrazen´ı.
– Toto zobrazen´ı pˇriˇrad´ı jednomu prvku z L2 pr´avˇe jeden prvek z L1.
Tud´ıˇz toto zobrazen´ı nic nepˇrid´av´a, ale ani nic neztr´ac´ı. Je to jako
zam´ıchat karty a pak vˇsechny postupnˇe pˇriˇrazovat pozici od 1 do 32.
– Prost´e znamen´a, ˇze ˇz´adn´e dva r˚uzn´e prvky v A se nezobraz´ı na
stejn´y prvek v B.
• Isomorfismus, pokud je f bijektivn´ı (tak´e: prost´e a na) zobrazen´ı.
– Toto zobrazen´ı, lidsky ˇreˇceno, pˇriˇrad´ı prvku v L2 pr´avˇe jeden prvek
z L1. M˚uˇze ale nastat, ˇze se m˚uˇze slouˇcit v´ıce prvk˚u z L2 do L1.
– Prost´e a Na znamen´a, ˇze kaˇzd´y prvek v B m´a pr´avˇe jeden
odpov´ıdaj´ıc´ı prvek v A.
• Epimorfismus, pokud je f surjektivn´ı (tak´e: na) zobrazen´ı.
– Kaˇzd´y prvek v mnoˇzinˇe L2 m´a sv˚uj vzor v mnoˇzinˇe L1. V mnoˇzinˇe
L2 m˚uˇze b´yt i v´ıce prvk˚u jak v mnoˇzinˇe L1, neboli jeden prvek z L1
m˚uˇze ukazovat i na v´ıce jak pr´avˇe jeden prvek v L2
– Na znamen´a, ˇze kaˇzd´y prvek v B m´a odpov´ıdaj´ıc´ı prvek v A.
Body a), e) z p˚uvodn´ı mnoˇziny se prom´ıtnou na v´ıce jak jeden prvek
v c´ılov´e mnoˇzinˇe.
Body b), d) se prom´ıtnou pr´avˇe na jeden prvek z p˚uvodn´ı mnoˇziny.
Bod c) se neprom´ıtne do c´ılov´e mnoˇziny, ale to v epimorfismu nevad´ı,
jelikoˇz v c´ılov´e mnoˇzinˇe jsou vˇsechny body, kter´e maj´ı sv˚uj vzor v
p˚uvodn´ı.
1.5 Skal´arn´ı souˇcin
1.5.1 Podm´ınky skal´arn´ıho souˇcinu
• Komutativita:
$$
⟨\vec x|\vec y⟩= ⟨\vec y|\vec x⟩.
$$
8

## Strana PDF 10
• Linearita ve druh´e souˇradnici:
$$
zobrazen´ı ⟨\vec x|-⟩: L\toR je line´arn´ı.
$$
• Pozitivn´ı definitnost:
$$
⟨\vec x|\vec x⟩\ge0, ⟨\vec x|\vec x⟩= 0 iff \vec x= \vec o.
$$
1.5.2 Skal´arn´ı souˇcin - vysvˇetlen´ı
Skal´arn´ı souˇcin je zadefinov´an jako:
$$
⟨\vec x|\vec y⟩= ∥\vec x∥\cdot∥\vec y∥\cdot cos \varphi
$$
a z tohoto vztahu plynou dan´e podm´ınky v´yˇse. Hlavn´ı hodnotou, kterou n´am
m˚uˇze skal´arn´ı souˇcit udat je: ⟨⃗x|⃗y⟩= 0, pr´avˇe tato hodnota n´am ˇr´ık´a, ˇze jsou
v˚uˇci sobˇe tyto dva vektory ”ortogon´aln´ı”, neboli sv´ıraj´ı prav´y ´uhel. D´ale plat´ı,
ˇze skal´ar jak´ehokoliv vektoru s nulov´ym vektorem je roven 0. tj ⟨⃗o|⃗y⟩= 0
1.6 Ortogonalizace
Slide 340
2 Maticov´y poˇcet, Determinant a inverze
matice, Vlastn´ı vektory a vlastn´ı ˇc´ısla,
Podobnost a diagonalizace matic
2.1 Maticov´y poˇcet
2.1.1 Sˇc´ıt´an´ı matic
Sˇc´ıt´an´ı matic je trivi´aln´ı. Kaˇzd´y prvek matice A pˇriˇctu k stejn´emu prvku na
stejn´e pozici matice B. tj.
$$
A= \begin{bmatrix}
$$
a21 a22 a23
a11 a12 a13

a31 a32 a33
B= 
b21 b22 b23
b11 b12 b13

b31 b32 b33

Souˇcet tˇechto matic vypad´a takto:

a21 a22 a23
a11 a12 a13

a31 a32 a33
+ 
b21 b22 b23
b11 b12 b13

b31 b32 b33
= 
a21 + b21 a22 + b22 a23 + b23
a11 + b11 a12 + b12 a13 + b13

a31 + b31 a32 + b32 a33 + b33

2.1.2 N´asoben´ı matice skal´arem
N´asoben´ı matice A skal´arem znamen´a, ˇze kaˇzd´y prvek matice vyn´asob´ıme
dan´ym skal´arem a.
$$
C= \begin{bmatrix}
$$

c21 c22 c23
c11 c12 c13
c31 c32 c33

9
