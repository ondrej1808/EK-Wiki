# Základy elektrických obvodů (B2B31ZEOA) - otázka 2

**Oficiální otázka:** Harmonický ustálený stav. Fázory. Kmitočtové charakteristiky. Rezonance. Analýza přechodných jevů. Lineární obvody v periodickém neharmonickém ustáleném stavu.

**Zdroj:** `complete-HEX-compost.pdf`, strany 108-110
## Strana PDF 108
B2B31ZEOA - HUS, Kmitočtová char., přechodový děj, PNUS
Harmonický ustálený stav. Fázory. Kmitočtové charakteristiky. Rezonance. Analýza přechodných
jevů. Lineární obvody v periodickém neharmonickém ustáleném stavu.
HUS a PNUS
Jako harmonický ustálený stav (HUS) nazýváme v obdvodech situaci, kdy zdroj napětí nebo proudu
má sinusovitý průběh a zároveň je obvod ve stavu odeznění všech přechodových jevů.
Periodický neharmonický ustálený stav (PNUS) je více individuálních zdrojů, na každý z nich se
aplikuje následně HUS a výsledek je jejich superpozice
Výkon se v HUS dělí na tři složky, na činný výkon 𝑃, jalový výkon 𝑄 a zdánlivý výkon 𝑆:
$$
𝑃 = 𝑈𝐼 cos(𝜃) [W] (1) 𝑄 = 𝑈𝐼 sin(𝜃) [var] (2) 𝑆 = 𝑈𝐼 [VA] (3)
$$
Fázory
K použití HUS v obvodech se velmi výhodně užívá fázorů, které transformují veličiny do komplexní
$$
roviny pomocí Eulerova vzorce exp(j𝜃) = cos(𝜃) + j sin(𝜃) = ℜ{ej𝜃} + jℑ{ej𝜃}.
$$
Fázor napětí je pak definován jako ̂
𝑼 = 𝑈𝑚ej𝜃
$$
𝑢(𝑡) = 𝑈𝑚 sin(𝜔𝑡 + 𝜃) = ℑ{𝑈𝑚[cos(𝜔𝑡 + 𝜃) + j sin(𝜔𝑡 + 𝜃)]}
= ℑ{𝑈𝑚ej(𝜔𝑡+𝜃)} = ℑ{ ̂
$$
𝑼} (4)
Pro derivaci a integraci pak platí následující přechody:
d𝜉(𝑡)
d𝑡
$$
\to j𝜔𝜉 (5) \int𝑡
$$
0
1
$$
𝜉(𝜏) d𝜏 \to
$$
j𝜔𝜉 (6)
Mějme například sériový RLC obvod, který je popsán metodou smyčkových proudů rovnicí:
d𝑖(𝑡)
𝐿
d𝑡
+ 𝑅𝑖(𝑡) +
1
𝐶 ∫𝑡
0
$$
𝑖(𝜏) d𝜏 = 𝑢(𝑡) (7)
$$
Tuto rovnici můžeme přepsat pomocí fázorů do tvaru:
̂
̂
j𝜔𝐿
𝑰 + 𝑅
𝑰 +
1
j𝜔𝐶
̂
̂
𝑰 =
Impedanci zapisujeme jako, a platí pro ní:
̂
$$
𝒁 = 𝑅 + j𝑋 [Ω] (9)
$$
𝑼 (8)
̂
𝒁seriove =
̂
𝒁1 +
̂
𝒁2 (11)
̂
𝒁𝑅 = 𝑅 ,
̂
$$
𝒁paralelne= (( ̂
$$
𝒁1)−1
̂
$$
𝒁𝐿 = j𝜔𝐿 = 𝑋𝐿 ,
$$
̂
𝒁𝐶 =
+ ( ̂
𝒁2)−1)−1
1
j𝜔𝐶
$$
= 𝑋𝐶 (10)
$$
=
̂
𝒁1̂
𝒁2
̂
𝒁1 +
(12)
̂
𝒁2
Existuje také admitance, a platí pro ní:
̂
𝒁−1 =
̂
𝒀 = 𝐺 + j𝐵 [S] Výkon v HUS můžeme potom zapsat pomocí fázorů jako:
(13)
$$
𝑃 = ℜ{ ̂
$$
̂
𝑼
$$
𝑰} [W] (14) 𝑄 = ℑ{ ̂
$$
̂
𝑼
$$
𝑰} [var] (15) 𝑆 = | ̂
$$
̂
𝑼
𝑰| [VA] (16)

## Strana PDF 109
Kmitočtové charakteristiky
Kmitočtové charakteristky vyjadřují závislost absolutního zesílení |𝐻(j𝜔)| respektivě úhlového
zpoždění arg(𝐻(j𝜔)) frekvencí 𝜔 v systému popsaném přenosouvou funkcí 𝐻(j𝜔).
̂
𝑼out
$$
𝐻(j𝜔) =
$$
(17)
̂
𝑼in
Pro jednoduchý integrační článek RC má přenosová funkce tvar:
1
$$
𝐻(j𝜔) =
$$
1 + j𝜔𝑅𝐶 (18)
Grafy těchto charakteristik jsou potom často v trošku upraveném tvaru:
Amplitudová charakteristika plotuje výkon přenosu v dB přičemž se používá logaritmické měřítko
na kmitočtové ose, pro lepší pozorování chování přenosu na velký rozsah hodnot.
20 log10|𝐻(𝑗𝜔)| [dB]
0
−3
−20
−40
0.1𝜔0 1𝜔0 10𝜔0 log10(𝜔)
Obrázek 1: Amplitudová charakteristika integračního článku RC.
Bod 𝜔0, na němž klesne výkon o 3 dB, se nazývá zlomová frekvence.
Fázová charakteristika plotuje změnu fáze v rad přičemž se používá logaritmické měřítko na
kmitočtové ose, pro lepší pozorování chování přenosu na velký rozsah hodnot.
arg(𝐻(𝑗𝜔)) [rad]
0
𝜋
−
4
𝜋
−
2
0.1𝜔0 1𝜔0 10𝜔0 log10(𝜔)
Obrázek 2: Fázová charakteristika integračního článku RC.
Čtenář, který se určitě pilně a s předstihem připravuje na SZZ si určitě mohl povšimnout, že se
v obou grafech vyskytuje i druhý průběh. Jedná se o Bodeho aproximaci charakteristik, dá se tak
aproximovat díky přenosové funkci, která má podovný přepis jako funkce: 1
1+𝑗𝜔
, kde 𝜔0 =
1
𝑅𝐶.𝜔0

## Strana PDF 110
Rezonance
Říkáme, že střídavý elektrický obvod je v rezonanci, jestliže napětí 𝑈 přiložené na obvod a proud 𝐼
protékající obvodem jsou ve fázi. Tedy při rezonanci je celková komplexní impedance obvodu reálná
a účiník je roven jedné.
𝑅 𝐿 𝐶
𝑈
𝐼
Obrázek 3: Sériový rezonanční obvod
𝜔0𝐿 =
1
𝜔0𝐶 ⟶ 𝜔2
0 =
1
𝐿𝐶 ⟶ 𝜔0 =
𝐼 𝑅 𝐿 𝐶
̂
$$
𝒁 = 𝑅 + 𝑋𝐿 + 𝑋𝐶
= 𝑅 + j𝜔𝐿 +
= 𝑅 + j(𝜔𝐿 -
$$
1
j𝜔𝐶
1
𝜔𝐶 )
(19)
1
1
⟶ 𝑓0 =
$$
2𝜋\sqrt𝐿𝐶 (20)
$$
1
𝜔𝐿) (21)
√𝐿𝐶
̂
$$
𝒀 = 𝐺 + j(𝜔𝐶 -
$$
Obrázek 4: Paralelní rezonanční obvod
𝑅
d𝑢2(𝑡)
=
Analýza přechodných jevů
Přechodové děje, nastávají mezi ustálenými stavy obvodu, vyskytují se při skokových změnách
zdrojů. Tomu odpovídá často sepnutí nebo rozepnutí okruhů obvodů případně zdrojů.
Přechodové děje nikdy teoreticky nezkončí, ale standardně se za konec přechodového děje považuje
3 nebo 5 násobek časové konstanty, kdy nastává ≈ 95.02% nebo ≈ 99.33% ustáleného stavu.
Protože obecná teorie by sama od sebe vypadala docela krypticky tak to bude s příkladem:
Obvod popíšeme rovnicí, a diferenciální členy na jednu stranu:
𝑅
𝐶
𝑈1 𝑢2
𝑈1− 𝑢2(𝑡)
$$
𝑖𝑅(𝑡) = 𝑖𝐶(𝑡) ⟹
$$
− 𝐶 d𝑢2(𝑡)
d𝑡
$$
= 0 (22)
$$
⟹
Obrázek 5: RC článek
𝑢2(𝑡)
𝑅𝐶 +
d𝑡
𝑈1
𝑅𝐶 (23)
Homogení řešení rovnice dostaneme když bude pravá strana nulová
𝑢2(𝑡)
𝑅𝐶 +
d𝑢2(𝑡)
d𝑡
𝑡
$$
= 0 ⟹ 𝑢ℎ(𝑡) = 𝐾e-
$$
𝑅𝐶 (24)
Partikulární řešení zjistíme tím, jak vypadá výstupní napětí po přechodovém jevu (𝑡 → ∞).
𝑢𝑝
$$
= 𝑢2(𝑡 \to \infty) = 𝑈1 (25)
$$
Ještě zbývá zjistit konstantu 𝐾, dosadíme za 𝑡 = 0:
0
$$
𝑢2(0) = 𝑢ℎ(0) + 𝑢𝑝(0) ⟹ 0 = 𝐾e-
𝑅𝐶 + 𝑈1 ⟹ 𝐾 = -𝑈1 (26)
Výsledek se tedy zapíše jako: 𝑢2(𝑡) = 𝑈1(1 - e-
$$
𝑡
𝑅𝐶 ) (27)
