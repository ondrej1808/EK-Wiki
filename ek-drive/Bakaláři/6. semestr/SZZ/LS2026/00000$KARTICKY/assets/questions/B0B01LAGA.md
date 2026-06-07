LAGA

Státnicové okruhy

Jan Sadílek
19. února 2025

Obsah
1 Struktura line´arn´ıho prostoru, B´aze a dimenze, Rˇeˇsen´ı
soustav line´arn´ıch rovnic, Line´arn´ı zobrazen´ı, Skal´arn´ı souˇcin,
Ortogonalizace 3
1.1 Struktura line´arn´ıho prostoru . . . . . . . . . . . . . . . . . . . . 3
1.1.1 Vlastnosti sˇc´ıt´an´ı vektor˚u . . . . . . . . . . . . . . . . . . 4
1.1.2 Vlastnosti n´asoben´ı skal´arem . . . . . . . . . . . . . . . . 4
1.2 B´aze a dimenze . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.2.1 B´aze . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.2.2 Dimenze . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
1.3 Rˇeˇsen´ı soustav line´arn´ıch rovnic . . . . . . . . . . . . . . . . . . . 5
1.3.1 GEM - Gaussova Eliminaˇcn´ı Metoda . . . . . . . . . . . . 5
1.3.2 Cramerovo pravidlo . . . . . . . . . . . . . . . . . . . . . 6
1.3.3 Cramerovo pravidlo - vysvˇetlen´ı . . . . . . . . . . . . . . 6
1.4 Line´arn´ı zobrazen´ı . . . . . . . . . . . . . . . . . . . . . . . . . . 7
1.4.1 Podm´ınky pro identifikaci zobrazen´ı jako line´arn´ı . . . . . 7
1.4.2 Line´arn´ı zobrazen´ı - vysvˇetlen´ı . . . . . . . . . . . . . . . 7
1.4.3 Klasifikace line´arn´ıho zobrazen´ı . . . . . . . . . . . . . . . 8
1.5 Skal´arn´ı souˇcin . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
1.5.1 Podm´ınky skal´arn´ıho souˇcinu . . . . . . . . . . . . . . . . 8
1.5.2 Skal´arn´ı souˇcin - vysvˇetlen´ı . . . . . . . . . . . . . . . . . 9
1.6 Ortogonalizace . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2 Maticovy´ poˇcet, Determinant a inverze matice, Vlastn´ı vektory
a vlastn´ı ˇc´ısla, Podobnost a diagonalizace matic 9
2.1 Maticovy´ poˇcet . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.1.1 Sˇc´ıt´an´ı matic . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.1.2 N´asoben´ı matice skal´arem . . . . . . . . . . . . . . . . . . 9
2.1.3 N´asoben´ı matic . . . . . . . . . . . . . . . . . . . . . . . . 10
2.1.4 Transponov´an´ı matic . . . . . . . . . . . . . . . . . . . . . 10
2.1.5 Inverzn´ı matice . . . . . . . . . . . . . . . . . . . . . . . . 11
2.1.6 Determinant . . . . . . . . . . . . . . . . . . . . . . . . . 11
2.2 Determinant a inverze matice . . . . . . . . . . . . . . . . . . . . 11
2.2.1 Inverzn´ı matice . . . . . . . . . . . . . . . . . . . . . . . . 11
2.2.2 Determinant . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.3 Vlastn´ı vektory a vlastn´ı ˇc´ısla . . . . . . . . . . . . . . . . . . . . 13
2.3.1 Vlastn´ı ˇc´ıslo . . . . . . . . . . . . . . . . . . . . . . . . . . 14
2.3.2 Vlastn´ı vektor . . . . . . . . . . . . . . . . . . . . . . . . 14
2.4 Podobnost a diagonalizace matic . . . . . . . . . . . . . . . . . . 15
2.4.1 Podobnost matic . . . . . . . . . . . . . . . . . . . . . . . 15
2.4.2 Diagonalizace matic . . . . . . . . . . . . . . . . . . . . . 15
2

1 Struktura line´arn´ıho prostoru, B´aze a
ˇ
dimenze, Reˇsen´ı soustav line´arn´ıch rovnic,
Line´arn´ı zobrazen´ı, Skal´arn´ı souˇcin,
Ortogonalizace
1.1 Struktura line´arn´ıho prostoru
Line´arn´ı prostor nad R je mnoˇzina L
ve kter´e plat´ı:
• operace sˇc´ıt´an´ı (+)
– Nulovy´ prvek
– Asociativita
– Komutativita
– opaˇcny´ vektor
• operace n´asoben´ı (·)
– Nulovy´ prvek
– Asociativita
– Distributivn´ı z´akon
– N´asoben´ı jednotkovy´m skal´arem
• existence nulov´eho prvku (⃗o)
3

1.1.1 Vlastnosti sˇc´ıt´an´ı vektor˚u
a) sˇc´ıt´an´ı s nulovy´m vektorem:
Existuje vektor ⃗o∈L takovy´, ˇze pro kaˇzd´e ⃗x∈L plat´ı:
⃗x+⃗o=⃗o+⃗x=⃗x
b) Asociativita sˇc´ıt´an´ı:
Pro vˇsechna ⃗x,⃗y,⃗z ∈L plat´ı:
(⃗x+⃗y)+⃗z =⃗x+(⃗y+⃗z)
c) Komutativita sˇc´ıt´an´ı:
Pro vˇsechna ⃗x,⃗y ∈L plat´ı:
⃗x+⃗y =⃗y+⃗x
d) Existence opaˇcn´eho vektoru:
Pro kaˇzdy´ ⃗x∈L existuje pr´avˇe jeden ⃗y ∈L takovy´, ˇze:
⃗x+⃗y =⃗o
Tento vektor ⃗y =−⃗x oznaˇcujeme jako opaˇcny´.
1.1.2 Vlastnosti n´asoben´ı skal´arem
a) n´asoben´ı nulov´eho prvku:
Pro kaˇzd´e ⃗x∈L plat´ı:
0·⃗x=⃗o
b) N´asoben´ı jednotkovy´m skal´arem:
Pro kaˇzd´e ⃗x∈L plat´ı:
1·⃗x=⃗x
c) Asociativita n´asoben´ı skal´arem:
Pro vˇsechna a,b∈R a ⃗x∈L plat´ı:
a·(b·⃗x)=(a·b)·⃗x
d) Distributivn´ı z´akon:
Pro vˇsechna a,b∈R, ⃗x∈L plat´ı:
(a+b)·⃗x=a·⃗x+b·⃗x
1.2 B´aze a dimenze
1.2.1 B´aze
Line´arnˇenez´avisl´emnoˇzinˇeB,kter´agenerujeprostorL,ˇr´ık´ameb´aze prostoru
L. Je-li B koneˇcn´a, pak seznamu prvk˚u B ˇr´ık´ame uspoˇr´adan´a b´aze.
4

• Dodatek:Line´arnˇenez´avisl´amnoˇzinajetakov´amnoˇzina,kdynem˚uˇzeˇs
ani jeden vektor z dan´e mnoˇziny ”vyrobit”kombinac´ı jiny´ch 2 vektor˚u.
Pˇr´ıklad LN mnoˇziny je:
     
1 0 0
⃗v
1
=0, ⃗v
2
=1, ⃗v
3
=0
0 0 1
nebo:
(cid:20) (cid:21) (cid:20) (cid:21)
0 1
⃗v = , ⃗v =
1 1 2 0
1.2.2 Dimenze
Line´arn´ı prostor L m´a dimenzi n (znaˇc´ıme: dim(L) = n), pokud existuje b´aze
B prostoru L, kter´a obsahuje pr´avˇe n prvk˚u, kde n je pˇrirozen´e ˇc´ıslo.
• Dodatek:
Pˇr´ıkladvy´poˇctudimenze:pokudm´amdimenzi(dim(L))generovanoub´az´ı
B, kter´a je:
     
1 0 0
 
B = 0, 1, 0
 0 0 1 
tak m˚uˇzemeˇr´ıci, ˇze:
dim(L)=n
neboli:
dim(L)=3
jelikoˇz obsahuje pr´avˇe 3 prvky.
1.3 Rˇeˇsen´ı soustav line´arn´ıch rovnic
1.3.1 GEM - Gaussova Eliminaˇcn´ı Metoda
Povolen´e u´pravy pro GEM:
• Pˇriˇcten´ı skal´arn´ıho n´asobkuˇr´adku matice k jin´emuˇr´adku matice
• Prohozen´ı dvouˇr´adk˚u v matici
• Vyn´asoben´ıˇr´adku matice nenulovy´m skal´arem
Vy´sledkem je horn´ı troj˚uheln´ıkovy´ tvar:
 
1 1 1
A=0 1 1
0 0 1
5

1.3.2 Cramerovo pravidlo
Podm´ınky pro pouˇzit´ı Cramerova pravidla:
• Matice mus´ı by´t ˇctvercov´a
• Matice mus´ı by´t regul´arn´ı
• Matice mus´ı obsahovat line´arnˇe nez´avisl´eˇr´adky
1.3.3 Cramerovo pravidlo - vysvˇetlen´ı
Proveden´ı Cramerova pravidla je v´ıcem´enˇe ”trivi´aln´ı”. V R2 nahrad´ım pravou
stranoumatice(prav´astranasoustavy)prvn´ınebodruhy´ sloupecmaticeA,dle
volby promˇenn´e pro kterou to poˇc´ıt´ame . D´ale spoˇc´ıt´am determinant t´eto novˇe
vznikl´e matice A′ ze vztahu:
det(A′)
x =
i det(A)
Pˇr´ıklad:
Mˇejme matici A a chceme z´ıskat hodnoty pro jednotliv´e x, y, z:
 
1 1 3 1
A= 2 2 1 1 
1 3 2 1
Nejprve spoˇcteme determinant p˚uvodn´ı matice, pro podrobny´ postup 2.2.2.Pro
potˇreby tohoto pˇr´ıkladu jej pouze nap´ıˇsu:
det(A)=10
pro x:
 
1 1 3
A x = 1 2 1 
1 3 2
Udˇel´ame determinant:
det(A )=3
x
N´aslednˇe dosad´ıme do vztahu vy´ˇse:
det(A ) 3
x= x =
det(A) 10
pro y:
 
1 1 3
A y = 2 1 1 
1 1 2
Udˇel´ame determinant:
det(A )=1
y
6

N´aslednˇe dosad´ıme do vztahu vy´ˇse:
det(A ) 1
y = y =
det(A) 10
pro z:
 
1 1 1
A z = 2 2 1 
1 3 1
Udˇel´ame determinant:
det(A )=2
z
N´aslednˇe dosad´ıme do vztahu vy´ˇse:
det(A ) 2
z = z =
det(A) 10
Vy´sledkem je tedy x= 3 , y = 1 , z = 2
10 10 10
• Doplnˇek:Maticejeregul´arn´ıpr´avˇetehdy,kdyˇzm´anenulovy´determinant
a existuje nverze t´eto matice. tj. det(A) ̸= 0. D´ale je ˇctvercov´a pr´avˇe
tehdy, kdyˇz m´a rozmˇer N x N.
1.4 Line´arn´ı zobrazen´ı
1.4.1 Podm´ınky pro identifikaci zobrazen´ı jako line´arn´ı
Necht’ L ,L jsou line´arn´ı prostory nad tˇelesem F. Zobrazen´ı f :L →L , pro
1 2 1 2
kter´e plat´ı:
• Additivita (zachov´an´ı sˇc´ıt´an´ı):
f(⃗x+⃗y′)=f(⃗x)+f(⃗y′)
pro vˇsechna ⃗x,⃗x′ ∈L .
1
• Homogenita (zachov´an´ı n´asoben´ı skal´arem):
f(a·⃗x)=a·f(⃗x)
pro vˇsechna a∈F a ⃗x∈L .
1
1.4.2 Line´arn´ı zobrazen´ı - vysvˇetlen´ı
Takov´e zobrazen´ı, kter´e splnˇuje pˇredchoz´ı podm´ınky vy´ˇse, nazy´v´ame line´arn´ı
zobrazen´ı z L do L .
1 2
Tak´e se to d´a popsat tak, ˇze pokud zobraz´ım jednotliv´e vektory, tak dostanu
stejnou mnoˇzinu M jako kdyˇz zobraz´ım celou mnoˇzinu:
(cid:32) n (cid:33) n
(cid:88) (cid:88)
f a ·⃗x = a ·f(⃗x )
i i i i
i=1 i=1
Vy´ˇse je vysvˇetleno na line´arn´ı kombinaci vˇsech vektor˚u v M.
7

1.4.3 Klasifikace line´arn´ıho zobrazen´ı
• Monomorfismus, pokud je f injektivn´ı (tak´e: prost´e) zobrazen´ı.
– Toto zobrazen´ı pˇriˇrad´ı jednomu prvku z L pr´avˇe jeden prvek z L .
2 1
Tud´ıˇz toto zobrazen´ı nic nepˇrid´av´a, ale ani nic neztr´ac´ı. Je to jako
zam´ıchat karty a pak vˇsechny postupnˇe pˇriˇrazovat pozici od 1 do 32.
– Prost´e znamen´a, ˇze ˇz´adn´e dva r˚uzn´e prvky v A se nezobraz´ı na
stejny´ prvek v B.
• Isomorfismus, pokud je f bijektivn´ı (tak´e: prost´e a na) zobrazen´ı.
– Toto zobrazen´ı, lidskyˇreˇceno, pˇriˇrad´ı prvku v L pr´avˇe jeden prvek
2
z L . M˚uˇze ale nastat, ˇze se m˚uˇze slouˇcit v´ıce prvk˚u z L do L .
1 2 1
– Prost´e a Na znamen´a, ˇze kaˇzdy´ prvek v B m´a pr´avˇe jeden
odpov´ıdaj´ıc´ı prvek v A.
• Epimorfismus, pokud je f surjektivn´ı (tak´e: na) zobrazen´ı.
– Kaˇzdy´ prvek v mnoˇzinˇe L m´a sv˚uj vzor v mnoˇzinˇe L . V mnoˇzinˇe
2 1
L m˚uˇze by´t i v´ıce prvk˚u jak v mnoˇzinˇe L , neboli jeden prvek z L
2 1 1
m˚uˇze ukazovat i na v´ıce jak pr´avˇe jeden prvek v L
2
– Na znamen´a, ˇze kaˇzdy´ prvek v B m´a odpov´ıdaj´ıc´ı prvek v A.
Body a), e) z p˚uvodn´ı mnoˇziny se prom´ıtnou na v´ıce jak jeden prvek
v c´ılov´e mnoˇzinˇe.
Body b), d) se prom´ıtnou pra´vˇe na jeden prvek z p˚uvodn´ı mnoˇziny.
Bodc)seneprom´ıtnedoc´ılov´emnoˇziny,aletovepimorfismunevad´ı,
jelikoˇz v c´ılov´e mnoˇzinˇe jsou vˇsechny body, kter´e maj´ı sv˚uj vzor v
p˚uvodn´ı.
1.5 Skal´arn´ı souˇcin
1.5.1 Podm´ınky skal´arn´ıho souˇcinu
• Komutativita:
⟨⃗x|⃗y⟩=⟨⃗y |⃗x⟩.
8

• Linearita ve druh´e souˇradnici:
zobrazen´ı ⟨⃗x|−⟩:L→R je line´arn´ı.
• Pozitivn´ı definitnost:
⟨⃗x|⃗x⟩≥0, ⟨⃗x|⃗x⟩=0 iff ⃗x=⃗o.
1.5.2 Skal´arn´ı souˇcin - vysvˇetlen´ı
Skal´arn´ı souˇcin je zadefinov´an jako:
⟨⃗x|⃗y⟩=∥⃗x∥·∥⃗y∥·cosφ
a z tohoto vztahu plynou dan´e podm´ınky vy´ˇse. Hlavn´ı hodnotou, kterou n´am
m˚uˇze skal´arn´ı souˇcit udat je: ⟨⃗x|⃗y⟩ = 0, pr´avˇe tato hodnota n´am ˇr´ık´a, ˇze jsou
v˚uˇci sobˇe tyto dva vektory ”ortogon´aln´ı”, neboli sv´ıraj´ı pravy´ u´hel. D´ale plat´ı,
ˇze skal´ar jak´ehokoliv vektoru s nulovy´m vektorem je roven 0. tj ⟨⃗o|⃗y⟩=0
1.6 Ortogonalizace
Slide 340
2 Maticovy´ poˇcet, Determinant a inverze
matice, Vlastn´ı vektory a vlastn´ı ˇc´ısla,
Podobnost a diagonalizace matic
2.1 Maticovy´ poˇcet
2.1.1 Sˇc´ıt´an´ı matic
Sˇc´ıt´an´ı matic je trivi´aln´ı. Kaˇzdy´ prvek matice A pˇriˇctu k stejn´emu prvku na
stejn´e pozici matice B. tj.
   
a a a b b b
11 12 13 11 12 13
A=a 21 a 22 a 23 B =b 21 b 22 b 23
a a a b b b
31 32 33 31 32 33
Souˇcet tˇechto matic vypad´a takto:
     
a a a b b b a +b a +b a +b
11 12 13 11 12 13 11 11 12 12 13 13
a 21 a 22 a 23 + b 21 b 22 b 23= a 21 +b 21 a 22 +b 22 a 23 +b 23
a a a b b b a +b a +b a +b
31 32 33 31 32 33 31 31 32 32 33 33
2.1.2 N´asoben´ı matice skal´arem
N´asoben´ı matice A skal´arem znamen´a, ˇze kaˇzdy´ prvek matice vyn´asob´ıme
dany´m skal´arem a.
 
c c c
11 12 13
C =c 21 c 22 c 23
c c c
31 32 33
9

kde a je skal´arn´ı n´asobitel,
   
c c c a·c a·c a·c
11 12 13 11 12 13
a·c 21 c 22 c 23= a·c 21 a·c 22 a·c 23
c c c a·c a·c a·c
31 32 33 31 32 33
2.1.3 N´asoben´ı matic
Podm´ınky pro n´asoben´ı matic:
• Matice D mus´ı m´ıt stejny´ poˇcetˇr´adk˚u jako matice E sloupc˚u.
• N´asoben´ı nen´ı komutitativn´ı. To znamen´a, ˇze D·E ̸=E·D
N´asoben´ı matic je jiˇz komplikovanˇejˇs´ı. Plat´ı, ˇze se n´asob´ı nejprve ˇr´adek prvn´ı
matice D a prvn´ı sloupec druh´e matice E a seˇctou se. Vy´sledn´a matice bude o
velikosti A ·B
ˇra´dky sloupce
   
d d d e e e
11 12 13 11 12 13
d
21
d
22
d 23·e
21
e
22
e 23=
d d d e e e
31 32 33 31 32 33
 
d ·e +d ·e +d ·e d ·e +d ·e +d ·e d ·e +d ·e +d ·e
11 11 12 21 13 31 11 12 12 22 13 32 11 13 12 23 13 33
d 21 ·e 11 +d 22 ·e 21 +d 23 ·e 31 d 21 ·e 12 +d 22 ·e 22 +d 23 ·e 32 d 21 ·e 13 +d 22 ·e 23 +d 23 ·e 33
d ·e +d ·e +d ·e d ·e +d ·e +d ·e d ·e +d ·e +d ·e
31 11 32 21 33 31 31 12 32 22 33 32 31 13 32 23 33 33
2.1.4 Transponov´an´ı matic
Transponov´an´ı matice znamen´a ozrcadlen´ı podle hlavn´ı diagon´aly.
 
f f f
11 12 13
F =f 21 f 22 f 23
f f f
31 32 33
Transponovan´a FT:
 
f f f
11 21 31
FT =f 12 f 22 f 32
f f f
13 23 33
Je to moˇzn´e i pro neˇctvercov´e matice:
(cid:20) (cid:21)
g g g
G= 11 12 13
g g g
21 22 23
Transponovan´a matice GT:
 
g g
11 21
GT =g 12 g 22
g g
13 23
10

2.1.5 Inverzn´ı matice
V´ıce v kapitole 2.2.1
2.1.6 Determinant
V´ıce v kapitole 2.2.2
2.2 Determinant a inverze matice
2.2.1 Inverzn´ı matice
• pomoc´ı GEM:
D´am si vedle sebe matici A, kter´e chci inverzi, a jednotkovou matici E
3
(cid:18) (cid:19)
1 0 1 0
A=
1 3 0 1
Nyn´ı odeˇctu od druh´ehoˇr´adku R jedenkr´at R
2 1
(cid:18) (cid:19)
1 0 1 0
A=
0 3 0 1
A n´aslednˇe podˇel´ım tˇrema R
2
(cid:18) (cid:19)
1 0 1 0
A=
0 1 0 1/3
Moment´alnˇe je vlevo jednotkov´a matice E a vpravo je A−1
2
(cid:18) (cid:19)
1 0
A−1 =
0 1/3
• pomoc´ı Adjungovan´e matice:
Mˇejme matici B, kter´e chceme inverzi B−1:
 
b b b
11 12 13
B = b 21 b 22 b 23 
b b b
31 32 33
Pot´e Vytvoˇr´ıme matici doplnˇk˚u, kde jeden doplnˇek je zadefinov´an t´ımto
vztahem, kde i a j, jsouˇr´adek a sloupec B:
A =(−1)i+j ·det(M )
ij ij
Lidsk´e vysvˇetlen´ı podstaty vzorce. Prvn´ı ˇclen, kde mocn´ıme -1 ud´av´a,
zdali bude doplnˇek kladny´, nebo z´aporny´. (sud´a mocnina = kladny´, lich´a
mocnina = z´aporny´). Dalˇs´ım krokem je, si vyˇskrtnout si i a j -ty´ ˇr´adek.
11

V tu chv´ıli n´am vznikne pouze matice typu 2x2 z 3x3. Zde je pˇr´ıklad, jak
toto vypad´a pro i = 1 a j = 1 :
(cid:18) (cid:19)
b b
M = 22 23
11 b b
32 33
V tuto chv´ıli m˚uˇzemeˇr´ıct, ˇze:
(cid:18) (cid:19)
b b
c =(−1)1+1·det 22 23
11 b b
32 33
Z t´eto matice pot´e udˇel´ame determinant a m´ame prvn´ı prvek matice
doplnˇk˚u. Pot´e, co takto udˇel´ame celou matici z´ık´ame novou matici o
stejn´em rozmˇeru jako byla p˚uvodn´ı. To je 3x3:
 
c c c
11 12 13
C = c 21 c 22 c 23 
c c c
31 32 33
Matici doplnˇk˚u trasnformujeme a z´ısk´ame adjungovanou matici:
adj(B)=CT
V tuto chv´ıli jiˇz m˚uˇzeme koneˇcnˇe pouˇz´ıt vztah na vy´slednou inverzn´ı
matici:
1
B−1 = ·adj(B)
det(B)
D˚uraznˇe tento postup doporuˇcuji u matic vˇetˇs´ıch jak 3x3. Ide´aln´ı velikost
je4x4,kdyjsmeschopniprodoplnˇekpouˇz´ıtSarussovopravidlo,ALEst´ale
potˇrebujeme z´ıskat p˚uvodn´ı derminant 4x4 matice.
12

2.2.2 Determinant
• Sarrusovo pravidlo:
– Pouze pro matice 2x2 a 3x3!
Nejzn´amˇejˇs´ı je asi ze stˇredn´ı ˇskoly Sarrusovo pravidlo. To n´am ˇr´ık´a, ˇze
determinant matice A je souˇcet souˇcin˚u vˇsech prvk˚u na hlavn´ı diagon´ale
ku rozd´ılu souˇctu souˇcin˚u na vedlejˇs´ı diagon´ale.
Pˇr´ıklad v R2:
(cid:18) (cid:19)
a a
A= 11 12
a a
21 22
det(A)=a ·a −a ·a
11 22 12 21
Pˇr´ıklad v R3:
 
b b b
11 12 13
B = b 21 b 22 b 23 
b b b
31 32 33
det(B)=b ·b ·b +b ·b ·b +b ·b ·b −b ·b ·b −b ·b ·b −b ·b ·b
11 22 33 13 21 32 12 23 31 11 23 32 12 21 33 13 22 31
• pomoc´ı GEM:
– Pro libovolnˇe velk´e matice.
 
a a a
11 12 13
A= 0 a 22 a 23
0 0 a
33
det(A)=a ·a ·a
11 22 33
 
b b b b
11 12 13 14
B =   0 b 22 b 23 b 24 
 0 0 b 33 b 34
0 0 0 b
44
det(B)=b ·b ·b ·b
11 22 33 44
2.3 Vlastn´ı vektory a vlastn´ı ˇc´ısla
Definice:
Pro line´arn´ı zobrazen´ı f : L → L je λ ∈ F vlastn´ı ˇc´ıslo, pokud existuje
nenulovy´ vektor x, splnˇuj´ıc´ı rovnost f(x)=λ·x.
Kaˇzd´emu takov´emu nenulov´emu vektoru x ˇr´ık´ame vlastn´ı vektor pˇr´ısluˇsny´
hodnotˇe λ.
13

2.3.1 Vlastn´ı ˇc´ıslo
Vlastn´ı ˇc´ıslo dostaneme ze vztahu:
det(A−λE )=0
n
Uvedu na pˇr´ıkladˇe:
 
1 0 1
A=0 1 0
1 0 1
Determinant t´eto matice det(A) = 0, coˇz splnˇuje podm´ınku o singularitˇe.
N´aslednˇe aplikujeme A−λE =0:
n
   
1 0 1 λ 0 0
A=0 1 0 λE
3
=0 λ 0
1 0 1 0 0 λ
Po vyn´asoben´ı:
 
1−λ 0 1
A= 0 1−λ 0 
1 0 1−λ
Pot´e determinant matice A−λE =0:
n
det(A−λE )=(1−λ)3−(1−λ)=0
n
Rˇeˇsen´ı t´eto kubick´e rovnice je λ=−1,0,1. Tyto hodnoty jsou vlastn´ı ˇc´ısla
• Doplnˇek:
Pro singul´arn´ı matici (nem´a inverzi a det(A)=0) plat´ı, ˇze alesponˇ jedno
vlastn´ı ˇc´ıslo je λ=0.
Naopak pro regul´arn´ı matici matici (m´a inverzi a det(A) ̸= 0) plat´ı, ˇze
ˇz´adnˇe vlastn´ı ˇc´ıslo je λ=0.
2.3.2 Vlastn´ı vektor
Vlastn´ı vektor je takovy´ vektor ⃗x, ktery´ je nenulovy´ (⃗x̸=⃗o), ktery´ splnˇuje:
f(⃗x)=λ·⃗x
Neboli,vektor ⃗x se zobraz´ı pomoc´ı funkce f tak, ˇze je pouze v nov´em prostoru
ˇsk´alov´an skal´arem. Tento skal´ar je vlastn´ım ˇc´ıslem.
Pokraˇcov´an´ı pˇr´ıkladu pro vlastn´ı ˇc´ısla:
λ=−1,0,1
Vy´sledny´m tvarem bude vektor, ktery´ bud’to bude posunuty´, nebo zaˇc´ın´a od
⃗o. D´ale podle n´asobnosti koˇrenu λ urˇc´ıme, kolik vektor˚u bude ve spanu.
Moment´alnˇe zavedeme eigen, ktery´ je vlastnˇe matice det(A − λE ), kdy
n
14

dosad´ıme za λ hodnotu vlastn´ıho ˇc´ısla.
eigen(-1, A):
   
1−(−1) 0 1 2 0 1
A= 0 1−(−1) 0  =0 2 0
1 0 1−(−1) 1 0 2
eigen(0, A):
   
1−0 0 1 1 0 1
A= 0 1−0 0  =0 1 0
1 0 1−0 1 0 1
eigen(1, A):
   
1−1 0 1 0 0 1
A= 0 1−1 0  =0 0 0
1 0 1−1 1 0 0
Nyn´ızkontrolujeme,zda-linejsounˇekter´eˇr´adkyLine´arnˇeNez´avisl´e.Apr´avˇe
takov´a je matice pro λ=0 neboli eigen(0,A). Tu tedy GEM uprav´ıme na:
   
1 0 1 1 0 1
eigen(0,A)=0 1 0 =0 1 0
1 0 1 0 0 0
Nyn´ıchcemedos´ahnouthomogenn´ıhoˇreˇsen´ı,neboliprav´astranab=⃗o,tomuto
seˇr´ık´a ker(A−λ·E ), pro λ=0 je ker(A−0·E ):
3 3
 
1 0 1 0
ker(A−0·E 3 )= 0 1 0 0 
0 0 0 0
Nyn´ı vid´ıme, ˇze y = 0 a x, z si m˚uˇzeme zvolit za podm´ınky: z =−x
V tuto chv´ıli m´ame volnou ruku nad volen´ım x nebo y. A tento splnˇuj´ıc´ı vektor
obal´ıme spanem aˇrekneme, ˇze je toˇreˇsen´ı neboli vlastn´ı vektor pro tuto λ:
   
1 0 1 0 −1
ker(A−0·E 3 )= 0 1 0 0 =span 0 
0 0 0 0 1
• Doplnˇek:
Spanmiud´av´anˇejaky´prostor,ktery´jegenerov´anvektory,nebovektorem
ve spanu.
2.4 Podobnost a diagonalizace matic
2.4.1 Podobnost matic
Slide 254
2.4.2 Diagonalizace matic
Slide 258
15

Definice (Ortogonální projekce a ortogální rejekce) Ať W je podprostor lineárního prostoru L
se skalárním součinem. Ať v je libovolný vektor v prostoru L. Vektor

projyy (v) (9)

s následujícíma dvěma vlastnostmi

1. vektor projy; (v) leží v podprostoru W,
2. vektor v — projy; (v) je kolmý na každý vektor podprostoru W,
se nazývá ortogální projekce na podprostor W. Vektor v — projy (v) = rejpy (v) se nazývá ortogonální

rejekce na podprostor W. Pro celý problém existuje maticový zápis, výhodný zejména ve výpočetní
technice.

Definice (Ortogonální báze) Uspořádaná báze b; lineárního prostoru se skalárním součinem (—|—)
se nazývá ortogální, jestliže platí (b;|b;) = 0, kdykoliv = j.

Tvrzení (Výpočet ortogonální projekce na prostor s ortogální bází) Ať W je podprostor
lineárního prostoru L se skalárním součinem (—|—) a ať má dimensi k > 0. Pro každý vektor v platí

MCT 0)

projpy (v) = Tau)
kde u; je jakákoliv báze podprostoru W.

Věta Ortogonalisace:Gram-Schmidt Ať L je lineární prostor a B = (b1,...,bn) je jeho báze.
Potom existuje ortogonální báze C = (c1,...,Cn) prostoru L tak, že pro každé k = 1,...,n platí
rovnost span (b1,..., bk) = span (c1,...,Cx). Jednotlivé složky báze C lze získat výběrem jednoho
vektoru z původní báze a následných ortogonálních rejekcí na něj a další takto vzniklé vektory. Proces
se nazývá ortonormalisace, pokud jsou vektory normalizovány k jejich velikostem. Pro takto vzniklou
bází platí (v|w) = dj.

Definice (Diagonalisace matic). Pro matici A : F" — F"' hledáme diagonální matici

A1 0... 0
0. A... 0
0.0... X%

pro niž platí A = D a A; označují příslušná vlastní čísla.

Důsledek Ať f : L —> L je lineární zobrazení, dim (L) = n. Jestliže charakteristický polynom má n
různých kořenů, pak f je diagonalisovatelné lineární zobrazení.

Definice (Vlastní hodnota a vlastní vektor) Nenulový vektor v se nazývá vlastním vektorem
lineárního zobrazení f : L — L, pokud existuje takový skalár A z tělesa F, že platí rovnost

f(v)=A- v. (7

Skalár A se nazývá vlastní hodnota příslušná vlastnímu vektoru v. Je-li zobrazení representováno ma-
ticí, pak rovnice (17) přejde do tvaru A -v=A-v.

Tvrzení Skalár A je vlastní hodnotou matice A : F" —> F" právě tehdy, když platí
det(A—A-E,)=0. (18)
Takto vzniklý polynom se nazývá charakteristický polynom a jeho kořeny jsou právě vlastními čísly.

Vlastní vektor vý lze získat zpětným dosazením příslušného vlastního čísla Aj zpět do rovnice (18) a
šení. Je-li vlastní číslo k—násobné, pak pro něj nalezneme k vlastních vektorů.

nalézt jedno netriviální

Podobné matice mají stejný charakteristický polynom, ovšem opačná implikace neplatí. Dvě matice
mající stejný charakteristický polynom nemusí být podobné.

Definice (Vlastní prostor) Prostor ker (f — A- id) se nazývá, vlastní prostor příslušný vlastní hod-
notě A. Značí se cigen (A, f). Jsou-li dvě vlastní hodnoty Aj navzájem různé, pak průnik jejich vlastních
prostorů je prázdná množina.
