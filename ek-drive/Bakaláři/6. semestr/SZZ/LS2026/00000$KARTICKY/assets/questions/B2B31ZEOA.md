B2B31ZEOA - HUS, Kmitočtová char., přechodový děj, PNUS
Harmonický ustálený stav. Fázory. Kmitočtové charakteristiky. Rezonance. Analýza přechodných
jevů. Lineární obvody v periodickém neharmonickém ustáleném stavu.
HUS a PNUS
Jako harmonický ustálený stav (HUS) nazýváme v obdvodech situaci, kdy zdroj napětí nebo proudu
má sinusovitý průběh a zároveň je obvod ve stavu odeznění všech přechodových jevů.
Periodický neharmonický ustálený stav (PNUS) je více individuálních zdrojů, na každý z nich se
aplikuje následně HUS a výsledek je jejich superpozice
Výkon se v HUS dělí na tři složky, na činný výkon 𝑃, jalový výkon 𝑄 a zdánlivý výkon 𝑆:
𝑃 = 𝑈𝐼cos(𝜃) [W] (1) 𝑄 = 𝑈𝐼sin(𝜃) [var] (2) 𝑆 = 𝑈𝐼 [VA] (3)
Fázory
K použití HUS v obvodech se velmi výhodně užívá fázorů, které transformují veličiny do komplexní
roviny pomocí Eulerova vzorce exp(j𝜃) = cos(𝜃)+jsin(𝜃) = ℜ{ej𝜃}+jℑ{ej𝜃}.
Fázor napětí je pak definován jako 𝑼̂ = 𝑈 ej𝜃
𝑚
𝑢(𝑡) = 𝑈 sin(𝜔𝑡+𝜃) = ℑ{𝑈 [cos(𝜔𝑡+𝜃)+jsin(𝜔𝑡+𝜃)]}
𝑚 𝑚
(4)
= ℑ{𝑈 ej(𝜔𝑡+𝜃)} = ℑ{𝑼̂}
𝑚
Pro derivaci a integraci pak platí následující přechody:
d𝜉(𝑡) 𝑡 1
→ j𝜔𝜉 (5) ∫ 𝜉(𝜏)d𝜏 → (6)
d𝑡 j𝜔𝜉
0
Mějme například sériový RLC obvod, který je popsán metodou smyčkových proudů rovnicí:
d𝑖(𝑡) 1 𝑡
𝐿 +𝑅𝑖(𝑡)+ ∫ 𝑖(𝜏)d𝜏 = 𝑢(𝑡) (7)
d𝑡 𝐶
0
Tuto rovnici můžeme přepsat pomocí fázorů do tvaru:
1
j𝜔𝐿𝑰̂+𝑅𝑰̂+ 𝑰̂= 𝑼̂
(8)
j𝜔𝐶
Impedanci zapisujeme jako, a platí pro ní:
1
𝒁̂ = 𝑅+j𝑋 [Ω] (9) 𝒁̂ = 𝑅 , 𝒁̂ = j𝜔𝐿 = 𝑋 , 𝒁̂ = = 𝑋 (10)
𝑅 𝐿 𝐿 𝐶 j𝜔𝐶 𝐶
𝒁̂ = 𝒁̂ +𝒁̂ (11) 𝒁̂ = ((𝒁̂ ) −1 +(𝒁̂ ) −1 ) −1 = 𝒁̂ 1 𝒁̂ 2 (12)
seriove 1 2 paralelne 1 2 𝒁̂ +𝒁̂
1 2
Existuje také admitance, a platí pro ní:
𝒁̂−1 = 𝒀̂ = 𝐺+j𝐵 [S] (13)
Výkon v HUS můžeme potom zapsat pomocí fázorů jako:
𝑃 = ℜ{𝑼̂𝑰̂} [W] (14) 𝑄 = ℑ{𝑼̂𝑰̂} [var] (15) 𝑆 = |𝑼̂𝑰̂| [VA] (16)

Kmitočtové charakteristiky
Kmitočtové charakteristky vyjadřují závislost absolutního zesílení |𝐻(j𝜔)| respektivě úhlového
zpoždění arg(𝐻(j𝜔)) frekvencí 𝜔 v systému popsaném přenosouvou funkcí 𝐻(j𝜔).
𝑼̂
𝐻(j𝜔) = out (17)
𝑼̂
in
Pro jednoduchý integrační článek RC má přenosová funkce tvar:
1
𝐻(j𝜔) = (18)
1+j𝜔𝑅𝐶
Grafy těchto charakteristik jsou potom často v trošku upraveném tvaru:
Amplitudová charakteristika plotuje výkon přenosu v dB přičemž se používá logaritmické měřítko
na kmitočtové ose, pro lepší pozorování chování přenosu na velký rozsah hodnot.
20log |𝐻(𝑗𝜔)| [dB]
10
0
−3
−20
−40
log (𝜔)
0.1𝜔 1𝜔 10𝜔 10
0 0 0
Obrázek 1: Amplitudová charakteristika integračního článku RC.
Bod 𝜔 , na němž klesne výkon o 3 dB, se nazývá zlomová frekvence.
0
Fázová charakteristika plotuje změnu fáze v rad přičemž se používá logaritmické měřítko na
kmitočtové ose, pro lepší pozorování chování přenosu na velký rozsah hodnot.
arg(𝐻(𝑗𝜔)) [rad]
0
−𝜋
4
−𝜋
2 log (𝜔)
0.1𝜔 1𝜔 10𝜔 10
0 0 0
Obrázek 2: Fázová charakteristika integračního článku RC.
Čtenář, který se určitě pilně a s předstihem připravuje na SZZ si určitě mohl povšimnout, že se
v obou grafech vyskytuje i druhý průběh. Jedná se o Bodeho aproximaci charakteristik, dá se tak
aproximovat díky přenosové funkci, která má podovný přepis jako funkce: 1 , kde 𝜔 = 1 .
1+𝑗𝜔 0 𝑅𝐶
𝜔0

Rezonance
Říkáme, že střídavý elektrický obvod je v rezonanci, jestliže napětí 𝑈 přiložené na obvod a proud 𝐼
protékající obvodem jsou ve fázi. Tedy při rezonanci je celková komplexní impedance obvodu reálná
a účiník je roven jedné.
𝑅 𝐿 𝐶
𝒁̂ = 𝑅+𝑋 +𝑋
𝐿 𝐶
1
= 𝑅+j𝜔𝐿+
𝑈 𝐼 j𝜔𝐶 (19)
1
= 𝑅+j(𝜔𝐿− )
𝜔𝐶
Obrázek 3: Sériový rezonanční obvod
1 1 1 1
𝜔 𝐿 = ⟶ 𝜔2 = ⟶ 𝜔 = √ ⟶ 𝑓 = √ (20)
0 𝜔 𝐶 0 𝐿𝐶 0 𝐿𝐶 0 2𝜋 𝐿𝐶
0
𝐼 𝑅 𝐿 𝐶 1
𝒀̂ = 𝐺+j(𝜔𝐶 − ) (21)
𝜔𝐿
Obrázek 4: Paralelní rezonanční obvod
Analýza přechodných jevů
Přechodové děje, nastávají mezi ustálenými stavy obvodu, vyskytují se při skokových změnách
zdrojů. Tomu odpovídá často sepnutí nebo rozepnutí okruhů obvodů případně zdrojů.
Přechodové děje nikdy teoreticky nezkončí, ale standardně se za konec přechodového děje považuje
3 nebo 5 násobek časové konstanty, kdy nastává ≈ 95.02% nebo ≈ 99.33% ustáleného stavu.
Protože obecná teorie by sama od sebe vypadala docela krypticky tak to bude s příkladem:
Obvod popíšeme rovnicí, a diferenciální členy na jednu stranu:
𝑅 𝑈 −𝑢 (𝑡) d𝑢 (𝑡)
𝑖 (𝑡) = 𝑖 (𝑡) ⟹ 1 2 −𝐶 2 = 0 (22)
𝑈 1 𝐶 𝑢 2 𝑅 𝐶 𝑅 d𝑡
𝑢 (𝑡) d𝑢 (𝑡) 𝑈
⟹ 2 + 2 = 1 (23)
Obrázek 5: RC článek 𝑅𝐶 d𝑡 𝑅𝐶
Homogení řešení rovnice dostaneme když bude pravá strana nulová
𝑢 (𝑡) d𝑢 (𝑡)
2 + 2 = 0 ⟹ 𝑢 (𝑡) = 𝐾e− 𝑡 (24)
𝑅𝐶 d𝑡 ℎ 𝑅𝐶
Partikulární řešení zjistíme tím, jak vypadá výstupní napětí po přechodovém jevu (𝑡 → ∞).
𝑢 = 𝑢 (𝑡 → ∞) = 𝑈 (25)
𝑝 2 1
Ještě zbývá zjistit konstantu 𝐾, dosadíme za 𝑡 = 0:
𝑢 2 (0) = 𝑢 ℎ (0)+𝑢 𝑝 (0) ⟹ 0 = 𝐾e− 𝑅 0 𝐶 +𝑈 1 ⟹ 𝐾 = −𝑈 1 (26)
Výsledek se tedy zapíše jako: 𝑢 2 (𝑡) = 𝑈 1 (1−e− 𝑅 𝑡 𝐶 ) (27)
