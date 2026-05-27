Střídavý třífázový (AC) motor využívá cívek (většinou šesti - střídavě navinutých na jednotlivé
fáze) ve svém statoru pro roztáčení rotoru složeného z magnetů opačných polarit. Brushless DC (bez-
kartáčový, BLDC) motor funguje stejně - jeho kontrolor (ESC = electronic speed control) generuje ze
stejnosměrného vstupu třífazový výstup do motoru.
Dynamo funguje na stejném principu, přetváří mechanickou energii na elektrickou. Rotace cívky v
magnetickém poli zapříčiní pohyb elektronů - el. proud.
36 Elektromagnetická vlna v neomezeném prostředí. Maxwellovy rov-
nice, Vlna rovinná, kulová a válcová. Gaussův svazek.Vlna na roz-
hraní dvou prostředí, Totální odraz, evanescentní vlna. polarizace
vlny odrazem (B2B17ELD)
36.1 Maxwellovy rovnice
Maxwellovy rovnice slouží k úplnému popisu elektromagnetického pole. Na vstupu je elektrický
proud I a náboj Q. V těchto rovnicích jsou skryty všechny základní principy elektromagnetismu. V
integrálním tvaru jsou zapsány jako
˛
D·dS = Q, (550)
∂˛V
B·dS = 0, (551)
∂˛V ˆ
∂D
H ·dl = I + ·dS, (552)
∂t
∂˛S ˆ S
∂B
E ·dl = − ·dS. (553)
∂t
∂S S
Pomocí integrálních vět
˛ ˆ
F ·dS = ∇·FdV, (554)
˛∂V ˆ V
F ·dl = ∇×F ·dS, (555)
∂S S
lze výše uvedený tvar přepsat na soustavu diferenciálních rovnic, vhodnější pro řešení polí s rozptýle-
nými parametry
∇·D = ρ , (556)
Q
∇·B = 0, (557)
∂D
∇×H = J + , (558)
Q
∂t
∂B
∇×E = − . (559)
∂t
152

Tato soustava rovnic se obvykle doplňuje materiálovými vztahy a rovnicí kontinuity
D = ε E +P, (560)
0
B = µ (H +M), (561)
0
∂ρ
Q
+∇·J = 0. (562)
Q
∂t
Rozhodně nejelegantnějším vyjádřením Maxwellových rovnic je zápis s tensorem elektromagnetismu
Fµν = ∂µAν −∂νAµ, definovaným skrz čtyřpotenciály a čtyřgradient
∂ Fµν = µ Jµ. (563)
ν 0
Při nalezní vhodné gradientní transformace z tohoto tvaru ihned vyplývá vlnová rovnice pro elektro-
magnetickou vlnu
(cid:18) 1 ∂2 (cid:19)
∇2− Aµ = −µ Jµ. (564)
c2∂t2 0
Případ pro vakuum získáme položením pravé straně rovno nule a jednotlivé složky pole pak získáme
skrz vztahy
∂A
E = −∇φ− , (565)
∂t
B = ∇×A. (566)
Z Maxwellových rovnic je odvoditelný tzv. Poyntingův teorém, který ukazuje, že pro elektromag-
netické pole neplatí zákon zachování energie
∂(cid:37)
W
+∇·S = −J ·E. (567)
∂t
V této relaci (cid:37) je hustota energie elektromagnetického pole
W
1
(cid:37) = (E ·D+H ·B) (568)
W
2
aS = E×H jePoyntingůvvektorvyjadřujícíplošnouhustotuvýkonuvurčitémmístě.Celkovývýkon
prošlý plochou A získáme skrz
ˆ
S = (E ×H)·dA. (569)
A
Výraz J ·E je výkon (Jouleův výkon), který se v jednotce objemu přeměňuje v teplo.
36.2 Elektromagnetická vlna v neomezeném prostředí
Alternativní odvození lze získat z diferenciálního tvaru Maxwellových rovnic, kde J = 0 a ρ = 0.
Q Q
Navíc platí vztahy D = ε E a B = µ H
0 0
∇·E = 0, (570)
∇·B = 0, (571)
∂E
∇×B = µ ε , (572)
0 0
∂t
∂B
∇×E = − . (573)
∂t
153

Při provedení operace rotace na (573) a substituce z (572) získáme tvar
∂2E
∇×∇×E +ε µ = 0. (574)
0 0 ∂t2
Operátor dvojité rotace při použití identity obsahuje člen s divergencí elektrické intenzity, jenž je
nulová. Výsledný tvar se tedy velmi zjednodušší na
(cid:18) 1 ∂2 (cid:19)
∇2− E = 0. (575)
c2∂t2
Stejná rovnice lze odvodit i pro B. Předpokládáme-li rovinou harmonickou vlnu, lze za pomocí Fourie-
rovytransformaceodvoditvztahymezivektoryE,B ak.Diferenciálníoperátorypřejdouv∇· → −ik·,
∇× → −ik× a ∂/∂t → −iω
k·E = 0, (576)
k·B = 0, (577)
−ik×B = ω2ε µ E, (578)
0 0
ik×E = ω2B. (579)
Ztěchtovztahůvyplývá,žetrojice(E,B,k)tvořípravoúhlýsouřadnýsystém.Provede-liseFourierova
transformace na (575), získáme rovnici pro disperzní relaci
(cid:18) ω2(cid:19)
−k2+ E = 0 ⇒ ω = ck. (580)
c2
Uvažujeme-li složitější prostředí, jež je charakterizováno trojcí ε, µ a σ. Mají rovnice tvar (rovnice
s divergecemi jsou pouze doplňující podmínky, pro odvozování postačí rovnice s rotacemi)
∂E
∇×H = σE +ε , (581)
∂t
∂H
∇×E = −µ , (582)
∂t
kde je uvažován proud J = σE při provedení ∇× na druhou rovnici a dosazením magnetické indukce
Q
první, dostaneme tvar
∂2E ∂E
∇×∇×E +εµ +µσ = 0. (583)
∂t2 ∂t
Přepokládáme-li, že hustota náboje ρ je nulová, rovnice se dále zjednodušší. Dále zavedeme náhradu
Q
časových derivací ∂/∂t → iω. Obdržený tvar je
∇2E +(−iωµ(iωε+σ))E = 0. (584)
(cid:112)
k = −iωµ(iωε+σ) = β−iα (vlastní číslo Laplaceova operátoru) se nazývá konstanta šíření. Obecně
se jedná o komplexní číslo, kde reálná část β se nazývá fázová konstanta a imaginární část α se nazývá
měrnýútlum.Značeníαaβ jepermutovánovzávislostinaučebnici.Pokudbychomuvažovalirovinnou
harmonickou vlnu, viz dále, lze mezi elektrickou intenzitou a magnetickou intenzitou odvodit vztah
(cid:114)
iωµ
Z = [Ω], (585)
iωε+σ
kterýseoznačujejakovlnováimpedance.Můžemerozlišitdvalimitnístavyprostředí,nevodivéadobře
vodivé prostředí
154

ωε >> σ ωε << σ
√ √
konstanta šíření k = ω
c
µ
r
ε
r
k = 1√−
2
i ωµσ
(cid:113) (cid:113)
vlnová impedance Z = 120π µr Z = ωµeiπ 4
εr σ
Hodnota 120π Ω se označuje jako impedance vakua. Pro takovou vlnu se dále definuje vlnová délka
2π
λ = , (586)
β
fázová rychlost
ω
v = , (587)
f
β
a grupová rychlost
dω
v = . (588)
g
dβ
Jako skinovou hloubku uvažujeme vzdálenost, kde se vlna utlumí na e−1 původní amplitudy. V dobře
vodivém prostředí se bere tato vzdálenost jako
(cid:114)
1 2
δ = = . (589)
α ωµσ
V prostředí, kde jsou materiály v konstantě šíření samy závisé na frekvenci, je nutné zvolit alter-
nativní přístup.
(cid:107)k(cid:107)2 = −iωµ(ω)(iωε(ω)+σ(ω)) ⇒ ω = ω((cid:107)k(cid:107)) (590)
Výsledné pole lze vždy získat zpětnou transformací fourierovských modů,
ˆ
1
E(r,t) = E (k)ei(k·r+ω((cid:107)k(cid:107))t)dk, (591)
(2π)3 0
k
kde E (k) je vlnový balík. Z uvedeného integrálu lze získat pole pro případ, kde
0
ω((cid:107)k(cid:107)) = ±c(cid:107)k(cid:107). (592)
Pokud máme ovšem složitější disperzní relaci (590), pak je uvedený postup v tomto tvaru prakticky
nemyslitelný. Z rovnice nelze vyjádřit jednodušše ω jako funkce (cid:107)k(cid:107) ani obráceně. Volí se tedy jiná
konvence, v níž se vyjádří
(cid:113)
k = ± k2−k2 −k2. (593)
z x y
k2 se bere jako určité číslo dané vzorcem v (590) a hýbe složkami k a k . V k se rozlišují dvě
x y z
znaménka. Záporné se uvažuje pro kladný směr z > 0 a kladné se uvažuje pro z záporný směr z < 0.
Vzorec pro zpětnou transformaci nabývá tvaru
ˆ
√
1
E(r,t) = (2π)3 E 0 +(k x ,k y ,ω)ei(kxx+kyy+ωt)e−i k2−k x 2−k y 2z+
kx,ky,ω
√
E 0 −(k x ,k y ,ω)ei(kxx+kyy+ωt)e−i k2−k x 2−k y 2zdk x dk y dω. (594)
155

První člen je pro kladný směr šíření a druhý člen je pro záporný směr. Integrace přes k a k běží přes
x y
celé R, avšak k2 je konečné číslo. Následující obrázek ilustruje celou situaci.
k
y
k
k
x
Vmodrémkruhuležík reálná.Vnětohotokruhuležík komplexní.Zdejepotřebazavéstkonvenci,
z z
která zajistí integrovatelnost předchozího výrazu. Zvolíme podmínku
Im[k ] < 0. (595)
z
Pole pak dělíme do dvou případů
ˆ
√
1
E(x,y,z > 0,t) = (2π)3 E 0 +(k x ,k y ,ω)ei(kxx+kyy+ωt)e−i k2−k x 2−k y 2zdk x dk y dω, (596)
kx,kyˆ,ω
√
1
E(x,y,z < 0,t) = (2π)3 E 0 −(k x ,k y ,ω)ei(kxx+kyy+ωt)ei k2−k x 2−k y 2zdk x dk y dω. (597)
kx,ky,ω
Uvažujeme-li z = 0, získáme
E(x,y,z = 0,t) = F−1 {E (k ,k ,ω)}. (598)
kx,ky,ω 0 x y
Vzhledem ke spojitosti pole se musí nutně rovnat E+ = E−. Celkové pole získáme z výrazu
0 0
(cid:110) (cid:111)
E(r,t) = F−1 F {E(x,y,z = 0,t)}e−ikzz . (599)
kx,ky,ω x,y,t
Zeznalostipolevx,y avtdostanemepolevcelémprostoru7.Pomocípředchozíchúvahapředpokladů
nyní lze ukázat jedno podstatné pozorování
k2 > k2 +k2 - vlna se šíří prostorem neomezeně, (600)
x y
k2 < k2 +k2 - vlna exponenciálně klesá, evanescentní vlna. (601)
x y
V prostorových proměnných můžeme sledovat podobné trendy jako ve frekvenční reprezentaci signálů.
Pomalé změny jsou ve spektru zastoupeny malými složkami k, rychlé změny jsou zastoupeny velkými
složkami.Připozorovánímajívelkék ak tendenciexponenciálněklesat.Projejichpozorovánímusíme
x y
zvyšit k samotné.
7Já vím, je to trochu schizofrenní
156

36.3 Vlna rovinná, válcová a sférická
Při řešení vlnové rovnice pro elektromagnetická pole bez zdrojů vycházíme z Helmholtzovy rovnice
(∇2+k2)F = 0, (602)
kde k2 = iωµ(σ −iωε) 8 je vlastní číslo Laplaceova operátoru a F reprezentuje libovolně E, D, H
nebo B. Vzhledem k vektorovému charakteru předchozí rovnice, je nutné nalézt tři složky řešení. To
je velmi jednoduché v případě kartézských souřadnic, avšak při složitějších souřadnicových systémech
je to cesta do pekel. Pro získání vlnových řešení je tedy nutné zvolenou cestu mírně obejít. Hledáme
skalární funkci ψ splňující skalární Helmholtzovu rovnici
(∇2+k2)ψ = 0. (603)
Nechť a je libovolný jednotkový vektor. Pomocí ψ a a nyní sestrojíme tři vektorová řešení
L = ∇ψ, (604)
M = ∇×aψ, (605)
1
N = ∇×M. (606)
k
JakmilepoložímeF rovnoL,M neboN,jevidět,žerovnice(602)jesplněnaidentickykrovnici(603).
Konkrétní řešení (603), která jsou konečná a spojitá formují diskrétní množinu. Označíme-li kterékoliv
z těchto řešení jako ψ , získáme pro ně také konkrétní L , M nebo N . Obecné řešení pro rovnici
n n n n
(602) s vektorovým potenciálem pak získáme jako
1
A = − (a M +b N +c L ), (607)
n n n n n n
iω
neboli celkové řešení je lineární kombinací předchozích. Při provedení rotace na A ihned dostaneme
vyjádření jednotlivých složek elektrického a magnetického pole
E = −(a M +b N ), (608)
n n n n
k
H = − (a M +b N ). (609)
n n n n
iωµ
Samotná funkce ψ nabývá různé podoby pro jednotlivé souřadnice.
n
Rovinná vlna
Rovinná vlna nabývá na rovinné ploše konstantní fázi. Řešení rovnice (603) má tvar
ψ ∝ eix·k,(E(r,t) = E cos(ωt−r·k+ϕ)). (610)
0
Amplituda je s rostoucí vzdáleností od počátku konstantní.
Válcová vlna
Válcová vlna je vlna konstantní fáze na válci. Obdobně pro cylindrický souřadnicový systém lze
odvodit řešení
ψ ∝ H(2)(k ρ)eimφeikz, (611)
m ρ
(2)
kde H je Hankelova funkce druhé typu. Pro vzdálené pole lze pak uvažovat pokles amplitudy jako
m
1
A ∝ √ (612)
ρ
8Zde je použitá odlišná časová konvence, ∂/∂t→−iω.
157

Sférická vlna
Sférická vlna je vlna konstantní fáze na sféře. Ve sférickém souřadnicovém systému má řešení tvar
A
ψ ∝ h(2)(kr)Y (ψ,θ),(E(r,t) = exp(−i(ωt−r·k+ϕ))), (613)
m mn r
(2)
kde h je sférická Hankelova funkce druhého typu a Y (ψ,θ) jsou sférické harmoniky. Ve velké
m mn
vzdálenosti od počátku lze vlnu efektivně aproximovat vztahem
e−ikr
ψ (cid:39) . (614)
r
36.4 Gaussův svazek
Gaussův svazek má Gaussovo rozložení energie, rotačně symetrickou strukturu a má malou rozbí-
havost (většina světla se šíří ve směru z).
Budeme uvažovat rovnici ve směru šířící se vlny z konce části o vlně v neomezeném prostředí.
ˆ
√
1
E(x,y,z > 0,t) = (2π)3 E 0 +(k x ,k y ,ω)e−i(kxx+kyy+ωt)ei k2−k x 2−k y 2zdk x dk y dω (615)
kx,ky,ω
Zajímají nás situace, v níž se vlna šíří převážně ve směru kolmém na rovinu xy.
Uvažujeme relaci
k2 +k2
x y
<< 1 (616)
k2
Člen v předchozím vztahu nezanedbáme, avšak odmocninu rozvedeme do Taylorova rozvoje
(cid:113) k2 +k2
k2−k2 −k2 T = R k− x y (617)
x y 2k
Při zvolení počátečního pole (A je amplituda)
(cid:18) (cid:19)
1
E = A πw2exp − w2(k2 +k2) (618)
0 ⊥0 0 4 0 x y
158

lze získat analytický vztah pro výsledné pole
E ⊥ (x,y,z > 0,ω) = A ⊥0 w 0 e−ikz (cid:16) 1 (cid:17) e − w0 2 x (cid:18) 2 1 + − y z i 2 R z (cid:19) (619)
w 1− iz
0 zR
Gaussovský svazek je vynikající aproximací laseru. Ze vztahu lze vidět, že ze začátku se svazek chová
jako rovinná vlna a od určitého bodu se začne projevovat jako kulová vlna. Dále lze vidět, že dochází k
výraznému útlumu v radiálním směru ve směru útlumu. Důležitější, než odvození samotného vztahu,
jsou níže uvedené relace. Jejich význam je patrný z následujícího obrázku,
Obrázek 68: Gaussovský svazek
w je apertura svazku. Rayleighova vzdálenost je
0
1 πw2
z = kw2 = 0 (620)
R 2 0 λ
Jedná se o bod, kde se paprsek začne výraznější utlumovat ve směru šíření (přestává se chovat jako
rovinná vlna) a začíná se projevovat jako kulová vlna. To, jak moc je svatek zakřiven udává poloměr
zakřivení:
(cid:16) z2 (cid:17)
R(z) = z 1+ R (621)
z2
V aplikacích se dále používá parametr paprsková divergence
λ
θ = . (622)
πw
0
Tento údaj představuje úhel mezi asymptotickými přímkami.
36.5 Vlna na rozhraní
Vsituaci,kdydopadárovinnáelektromagnetickávlnanarozhranídvoumateriálů,sečástjejíhový-
konu odrazí a část projde pod určitým úhlem do druhého prostředí. Pro zjednodušení popisu vzhledem
sedefinujeněkolikpojmů.Jakorovina rozhraní sedefinujerovina,kteráoddělujeprostředísrozdílnými
159

vlastnostmi, např. (x,y). Dále se definuje rovinu dopadu, na níž se vlnoplochy zobrazují jako přímky.
Pokud předpokládáme, že E je rovnoběžná s rovinou dopadu, mluvíme o rovnoběžné polarizaci,
také p-polarizaci. V případě, že uvažujeme H rovnoběžnou s rovinou dopadu, pak mluvíme o kolmé
polarizaci, neboli s-polarizaci. Máme-li dvě veličiny popisující pole v této situaci.
E = E ei(kI·r−ωIt)+E ei(kR·r−ωRt), (623)
1 I R
E = E ei(kT·r−ωTt), (624)
2 T
lzenaléztzapomocípodmíneknarozhraní,kdynarozhraníjenulovýnábojanulovýpovrchovýproud,
n·(D −D ) = 0 n·(B −B ) = 0
1 2 1 2
(625)
n×(E −E ) = 0 n×(H −H ) = 0
1 2 1 2
vztahy mezi příchozí, odraženou a průchozí vlnou. Prvním z nich je zákon odrazu
θ = θ ≡ θ . (626)
I R 1
Vlnaseodpovrchuodrážípodstejnýmúhlem(kekolmicistyčnéplochy),podkterýmdopadá.Obdobně
pro druhé prostředí lze odvodit Snellův zákon lomu
n sin(θ ) = n sin(θ ), (627)
1 1 2 2
kde n a n jsou indexy lomu jednotlivých prostředí. Po technické stránce je zajímavý případ, kdy
1 2
dochází k úplnému odrazu resp. do druhého média se nepřenáší žádný výkon. K tomuto jevu dochází,
když θ = π/2 a n > n . Úhel, kdy nastává totální odraz se nazývá kritický a platí pro něj vztah
2 1 2
n
2
sin(θ ) = . (628)
C
n
1
Pro prošlou a odraženou vlnu se zavadí činitel odrazu
(cid:18) (cid:19)
E Z cos(θ )−Z cos(θ )
R 1 1 2 2
R = = , (629)
p
E Z cosθ )+Z cos(θ )
I p 1 1 2 2
(cid:18) (cid:19)
E Z cos(θ )−Z cos(θ )
R 2 1 1 2
R = = , (630)
s
E Z cos(θ )+Z cos(θ )
I s 2 1 2 2
a činitel propusti
(cid:18) (cid:19)
E 2Z cos(θ )
T 2 1
T = = , (631)
p
E Z cos(θ )+Z cos(θ )
I p 1 1 2 2
(cid:18) (cid:19)
E 2Z cos(θ )
T 2 1
T = = . (632)
s
E Z cos(θ )+Z cos(θ )
I s 2 1 2 2
Z výkonového hlediska platí
Z
|R|2+|T|2 1 = 1 (633)
Z
2
Situace se velmi zjednodušší pokud uvažujeme kolmé dopady a pouze dielektrické materiály (µ = 1).
r
Propopisvícevrstvýchmateriálůsevyužívámaticovýpopis.Vtakovýchprostředísepakmohouobjevit
po splění určitých podmínek půvlnné bezodrazové vrstvy, nebo čtvrtvlnné odrazové vrstvy (čtvrtvlnný
transformátor).
Jakmile prošlá vlna prochází ztrátovým materiálem, dochází ve směru šíření k jejímu exponenciál-
nímu tlumení. Taková se nazývá evanescentní. Vlna při dopadu na rozhraní změní směr a šíří se podél
něho.
160

Polarizace
Podpojmempolarizaceelektromagnetickévlnyserozumínatočeníveličinelektromagnetickéhopole
vprostoru.Obvykleseudávásohledemnanaintenzituelektrickéhopole.Pokudvezmemeelektromag-
netickou vlnu, kde složky vektoru intenzity nemají vůči sobě fázový posun (φ = 0), nazývá se tento
typ polarizace lineární. Pokud je tento posun roven π/2, mluvíme pak o kruhově polarizované vlně.
Obecných případech pak hovoříme o eliptické polarizaci.
Kdyždopadánarozhranínepolarizovanávlna,takzaurčitýchpodmínekmůžedojítkjejípolarizaci.
Při dopadu se jedna její složka odrazí a druhá naopak projde, čímž vzniká polarizovaná vlna. Rozlišují
se dva mezní případy; p-polarizace (rovnoběžná), kde je vektor intenzity elektrického pole rovnoběžný
s rovinou dopadu a s-polarizace (kolmá), kde je vektor elektrického pole kolmý na tuto rovinu.
37 Vedené a evanescentní vlny. Mody, impedance, fázová a skupi-
nová rychlost šíření, přenos výkonu. Zdroje vln - elementární zá-
řiče.Blízké, přechodné a vzdálené pole zářičů.Vlna v anizotropním
prostředí (B2B17ELD)
37.1 Vedené a evanescentní vlny
Elektromagnetické vlny mohou být vedeny kolem speciálních cest. Speciální konfigurace vodivých
a dielektrických materiálů, jenž jsou k tomuto účelu užívány, se nazývají vlnovody. Při výpočtech se
vychází z několika předpokladů geometrie vlnovodu
– homogenní kolem osy z.
– nekonečně dlouhé,
– dokonalý vodič.
Dále se předpokládá harmonické pole e−iωt. Obecná podoba rovnic pro elektrickou a magnetickou
intenzitu se z těchto předpokladů upraví na
E(r) = (E (r )+e E (r ))eiγz, (634)
⊥ ⊥ z z ⊥
H(r) = (H (r )+e H (r ))eiγz, (635)
⊥ ⊥ z z ⊥
kde γ = α+iβ je komplexní konstanta šíření. Pole jsou harmonická, rovnice ∇·E = 0 a ∇·H = 0
jsou splněny automaticky a celá soustava Maxwellových rovnic se redukuje na (∂/∂t → iω)
∇×E = iωµH, (636)
∇×H = −iωεE. (637)
Po rozepsání do složek a několika algebraických úpravách lze získat čtyři nezávislé rovnice pro kolmé
složky ze složek E a H
z z
(cid:18) (cid:19)
i ∂E ∂H
z z
H = ωε −β , (638)
x k2 ∂y ∂x
c
(cid:18) (cid:19)
i ∂E ∂H
z z
H = − ωε −β , (639)
y k2 ∂x ∂y
c
(cid:18) (cid:19)
i ∂E ∂H
z z
E = − β +ωµ , (640)
x k2 ∂x ∂y
c
(cid:18) (cid:19)
i ∂E ∂H
z z
E = −β −ωµ , (641)
y k2 ∂y ∂x
c
161

kde k2 = k2−β2 je mezní vlnové číslo. Složky E a H je poté možné získat z Helmholtzovy rovnice
c z z
(∇2+k2)E = 0, (642)
z
(∇2+k2)H = 0. (643)
z
Pokud položíme E = 0, získáme transverzálně elektrické vlny (elektrická intezita má pouze složky
z
kolmé na směr šíření). Podobně pokud položíme H = 0, získáme transverzálně magnetické vlny (mag-
z
netickáintenzitamápouzesložkykolménasměršíření).Ztěchtodvoupředpokladůaobecnépodmínky
n×E| = 0 vyplývají hraniční podmínky
S
E | = 0 TM vlny (644)
z S
∂H
z
| = 0 TE vlny (645)
S
∂n
Jakékoliv řešení lze následně složit právě z těchto dvou složek.
Obdelníkové vlnovody
Při obdelníkové geometrii mají rovnice pro složky ve směru z tvar
(cid:18) ∂2 ∂2 (cid:19)
TM: + +k2 E = 0, (646)
∂x2 ∂y2 c z
(cid:18) ∂2 ∂2 (cid:19)
TE: + +k2 H = 0. (647)
∂x2 ∂y2 c z
(648)
Jedná se klasický problém vlastních čísel pro Laplaceův operátor v kartézském moru a výsledná pole
mají tvar
(cid:16)mπx(cid:17) (cid:16)nπy(cid:17)
E = Esin sin , (649)
z,mn
a b
(cid:16)mπx(cid:17) (cid:16)nπy(cid:17)
H = Hcos cos . (650)
z,mn
a b
Pro obě je spektrum vlastních čísel stejné a nabývá tvar
(cid:114)
(cid:16)mπ(cid:17)2 (cid:16)nπ(cid:17)2
k = + . (651)
c,mn
a b
Z mezního vlnového čísla vyplývá i mezní frekvence
(cid:114)
c (cid:16)mπ(cid:17)2 (cid:16)nπ(cid:17)2
ω = √ + . (652)
c,mn
µ ε a b
r r
Kruhové vlnovody
Podélnésložkyseurčujíobdobněprokruhovougeometrii.Laplaceůvoperátornabývásložitějšítvar
a soustava je zapsána jako
(cid:18) ∂2 1 ∂ 1 ∂2 (cid:19)
TM: + + +k2 E = 0, (653)
∂ρ2 ρ∂ρ ρ2∂ϕ2 c z
(cid:18) ∂2 1 ∂ 1 ∂2 (cid:19)
TE: + + +k2 H = 0. (654)
∂ρ2 ρ∂ρ ρ2∂ϕ2 c z
(655)
162

Složky ρ vedou na Besselovy funkce prvního druhu a řešení je zapsáno jako
(cid:16)u (cid:17)
E = E J mn ρ einϕ, (656)
z,mn 0 m
R
(cid:16)w (cid:17)
H = H J mn ρ einϕ, (657)
z,mn 0 m
R
kde u jsou kořeny Besselových funkcí J a w jsou kořeny jejích prvních derivací. Z těchto hodnot
mn m mn
jsou určovány i v závislosti na poloměru R mezní frekvence a vlnové čísla.
TEM vlny
V případě, že obě složky H i E jsou rovny nule, mluvíme o transverzálně-elektromagnetických
z z
vlnách. Podmínkou pro jejich existenci jsou dva oddělené vodiče. Většinou se uvažují buď ve formě
koaxiálních kabelů, nebo symetrického páru. Řešení se hledá nehledá z Helholtzovy rovnice, ale z
Laplaceovy rovnice pro skalární potenciál φ(ρ,ϕ). Pro koaxiální kabel má tato rovnice tvar
1 ∂ (cid:18) ∂φ (cid:19) 1 ∂2φ
ρ + = 0. (658)
ρ∂ρ ∂ρ ρ2∂ϕ2
Výsledná intenzita elektrického a magnetického pole je
U
E = 0 e−γze , (659)
ρ
ρln(b/a)
I
H = 0 e−γze . (660)
ϕ
2πρ
Na rozdíl od TE a TM vln vedou TEM vlny již nulové frekvence.
Vlny na homogenním vedení se modelují náhradním obvodem, který zahrnuje vlasnosti tohoto vedení
pomocí sériové indukčnosti a odporu a paralelní vodivosti a kapacity.
i(t,z) R L i(t,z+dz)
u(t,z) G C u(t,z+dz)
Obrázek 69: Náhradní model vedení.
Tento model pomáhá analyzovat obvody s rozprostřenými parametry (mění se v čase i podél pro-
strových souřadnic). Při troše algebry a uvažování harmonických průběhů získáme pro tento obvod
popisující rovnice
dUˆ(z)
+(R+iωL)Iˆ(z) = 0, (661)
dz
dIˆ(z)
+(G+iωC)Uˆ(z) = 0. (662)
dz
163

Při eliminaci proudu Iˆ(z) z první rovnice obdržíme rovnici pro napěťové vlny
d2Uˆ(z)
−(R+iωL)(G+iωC)Uˆ(z) = 0, (663)
dz2
jejíž řešení má tvar
Uˆ(z) = C e−γz +C eγz, (664)
1 2
kde C a C jsou obecně komplexní konstanty a γ2 = (R+iωL)(G+iωC) vyjadřuje konstantu šíření.
1 2
První člen na pravé straně vyjadřuje vlnu jdoucí ve směru z a druhý jdoucí proti směru z. Napěťové
a proudové vlny jsou k sobě navzájem uměrné pomocí charakteristické impedance
Uˆ Uˆ (cid:114) R+iωL
Zˆ = + = − = . (665)
0 Iˆ Iˆ G+iωC
+ −
Budeme-li uvažovat vedení na vysokých frekvencích nebo bezeztrátové vedení obecně, vyplyne z před-
chozích vztahů několik zajímavých vlastností. Konstanta šíření má obecně tvar γ = α+iβ. Při R = 0
a G = 0 obdržíme pouze část s β
√ √
γ = iβ = iω LC = iω εµ (666)
Rovnost LC = εµ je obecná vlastnost vedení s vlnou TEM. Pro bezeztrátové vedení platí stejný vztah
pro vlnovou délku jako pro pro bezeztrátové prostředí. Dále impedance pro takové vedení nabývá tvaru
(cid:114)
L
Zˆ = . (667)
0
C
Pro výpočty na vedení má velký význam vztah mezi koncovou a počáteční impedancí respektive vztah
pro transformaci impedance podél vedení
Zˆ +Zˆ tanh(γl)
Zˆ = Zˆ K 0 , (668)
P 0 Zˆ +Zˆ tanh(γl)
0 K
kde pro bezeztrátové vedení se uvažuje itan(βl). Zavadí se dále užitečný činitel, který se nazývá kom-
plexní činitel odrazu na vedení
Zˆ −Zˆ
K 0
R = , (669)
Zˆ +Zˆ
K 0
kde index K označuje konec vedení. Z tohoto vztahu se dále určuje činitel stojatého vedení
1+|R|
SWR = . (670)
1−|R|
V ideálním případě, jehož se snažíme vždy dosáhnout, je impedance zátěže/konce Zˆ = Zˆ , čímž se
K 0
dosáhne R = 0 a SWR = 1. Vznik stojatého vedení je vždy nežádoucí. Odrazy na vedení způsobují
ztráty a mohou vést až k poškození vedení nebo přijímače.
Evanescentní vlny
Jedná se o vlnu, která dopadá na rozhraní pod kritickým úhlem. Taková vlna se neodraží a ani
neprocházídáledodruhéhoprostředí,alepohybujeseprávěpodélrozhraní.Jejíintenzitaexponenciálně
klesá se vzdáleností od rozhraní.
Elektromagnetická vlna šířící se podél rozhraní dvou prostředí s odlišnými vlastnostmi. Zajišťuje
spojitost normálovvých složek, tj. splnění podmínek na rozhraní.
164

37.2 Vlastnosti vln
Mody
Vlnové rovnice mají nekoněčně mnoho řešení. Libovolná vlna se dá ve vlnovodou určit jako lineární
kombinace vln TE a TM. Jednotlivé mody jsou frekvenčně závislé a nevybudí se dokud frekvence
nedosáhné nějaké určité hodnoty. U obdelníkových vlnovodů je vztah pro vybuzení módů následující
(cid:114)
c (cid:16)mπ(cid:17)2 (cid:16)nπ(cid:17)2
ω = √ + . (671)
c,mn
µ ε a b
r r
Dokud platí ω > ω, tak nedochází k vybuzení modu TE a TM .
c,mn mn mn
Impedance
Složky pole E a H jsou spolu svázány vztahem
ZH = kˆ ×E (672)
kde kˆ je směr šíření vlny. Pro TE mody platí
(cid:114)
E E ωµ ε 1
x y
= − = = = Z (673)
(cid:113) (cid:113) TE
H y H x k2−k c 2 ,mn µ 1− (cid:0)ω ω c (cid:1)2
Pro TM mody platí
(cid:113)
E E k2−k c 2 ,mn (cid:114) ε (cid:114) (cid:16)ω (cid:17)2
x y c
= − = = 1− = Z (674)
TM
H H ωε µ ω
y x
Fázová rychlost
Fázová rychlost vyjadřuje rychlost, s jakou prostupují prostorem vlnoplochy s kontantní fází. Při
(cid:112)
zavedení faktoru β = k2−k2 lze fázovou rychlost vyjádřit jako
c
ω
v = . (675)
f
β
Fázová rychlost může dosahovat rychlostí větších jak c. Pro TE a TM vlny platí
c 1
v = √ . (676)
f (cid:113)
µ r ε r 1− (cid:0)ωc (cid:1)2
ω
Grupová rychlost
Grupová rychlost vyjadřuje rychost přenosu vlnového balíku neboli přenos energie. Z důsledku
konečnosti rychlosti šíření informace nabývá vždy rychlostí menších jak c. Platí pro ni vztah
∂ω
v = . (677)
g
∂β
Pro TE a TM vlny lze opět zapsat
(cid:114)
c (cid:16)ω (cid:17)2
c
v = √ 1− (678)
g
µ ε ω
r r
Při porovnání obou vztahů získáme vztah mezi fázovou a grupovou rychlostí
c2
v v = . (679)
f g
µ ε
r r
165

37.3 Zdroje vln
37.4 Vlny v anizotropním prostředí
V případě vln v nehomogenním prostředích je nutné upravit Maxwellovy rovnice, aby vystihovaly
chovánívlnvtěchtoprostředích.Místokonstantpermeabilityapermitivitysezavadítenzorypopisující
magnetické a elektrické vlastnosti. V jednodušších případech lze nalézt v materiálech vlastní vektory a
tenzorydiagonalizovat.Vesložitějšíchpřípadechsejednáopopisskalárníminebotenzorovýmifunkcemi
D(r) = ε(r)E(r), (680)
B(r) = µ(r)H(r). (681)
Při práci s Maxwellovými rovnicemi je nutno vzít v potaz, že s operacemi zahrnující tenzory je nutné
jednat mnohem obezřetněji, než se skaláry.
38 Tranzistorové zesilovače (jednostupňové, diferenční stupeň, kaskoda),
Reálné vlastnosti operačních zesilovačů a jejich vliv na obvodové
struktury, výkonové zesilovače - požadavky na vlastnosti, třídy,
možnosti realizace, srovnání řídy AB a D. (B2B31EO2)
38.1 Tranzistorové zesilovače
V případě malého rozsahu vstupního napětí je možné použít tranzistory k zesílení střídavého sig-
nálu. Z hlediska frekvečních vlastností se takové zesilovače provozují ve středním frekvenčním pásmu,
kteréjeohraničenofrekvencemi,nanichžklesáamplitudasignáluo3dB.Lzeukázat,ževtomtopásmu
se neuplatní parazitní kapacity nelineárních prvků, jenž lze poté nahradit pouze odporovými modely.
Frekvenční charakteristiky se vypočítavají metodou časových konstant s použitím Millerova teorému
pro převod impedancí na výhodnější model.
Z
U Z Z U
i 1 2 o
U U
i o
Obrázek 70: Millerův teorém. Pro vstupní a výstupní napětí platí U = KU. Obě náhradní impedance
o i
jsou určitelné ze vzorců.
U bipolárních tranzistorů se ze způsobu připojení vstupního signálu a odběru výstupního signálu
rozlišují typy
– společný emitor SE,
– společný kolektor SC,
– společná báze SB.
Zesilovače s unipolárními tranzistory se dělí na
166
