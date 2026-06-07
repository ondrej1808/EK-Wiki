B2B38EMB - Přístroje pro měření
Přístroje pro měření elektrického proudu, napětí a výkonu, kmitočtu a fázového rozdílu a základních
parametrů pasivních prvků (odpor, indukčnost, kapacita).
RMS ⁇
U měření střídavých veličin, si musíme dát pozor, že některé měřící přístroje pouze upravují
naměřenou střední hodnotu konstantou, zatímco jiné opravdu měří efektivní hodnotu, rozdíl mezi
nimi je ve značení RMS a True RMS.
1 𝑇 1 𝑇
𝜉 avg = 𝑇 ∫ |𝜉(𝑡)|d𝑡 (1) 𝜉 rms = √ 𝑇 ∫ |𝜉(𝑡)|2d𝑡 (2)
0
0
Pro harmonické průběhy platí následující (levné střídavé měřící přístroje toho zneužívají):
𝜋
𝜉 rms = 𝜉 avg ⋅ √ (3)
2 2
Měření proudu
Pro měření proudu se využívají ampérmetry. Tyto ampérmetry se pak zapojí do obvodu sériově, aby
jimi proud protékal. Chceme aby měli ideálně co nejmenší odpor, pro minimalizaci tráty napětí.
Může se jednat o analogové (magnetoelelektrické,
elektrodynamické nebo feromagnetické) ampérmetry, kde
je proud přímo měřená veličina, která nějak vychýlí ručku.
Nebo se může jednat o digitální ampérmetry, kde se neměří
přímo proud, ale ztráta napětí, kterou proud způsobí na
bočníku. Pro přepínání proudových rozsahů se používá
Ayrtonův bočník.
Pro měření proudu taky existují klešťové měřící přístroje,
umožňující rozevřít čelisti a obepnout jimi měřený vodič,
dokáží měřit střídavý proud, ale pokud mají hallovu sondu
tak i stejnosměrný proud.
Obrázek 1: Ayrtonův bočník
Měření napětí
Měření napětí je obdobné jako u měření proudu, používají se
analogové, nebo digitální voltmetry.
Pro přepínání napěťových rozsahů se používá jednoduchý
napěťový dělič (snad nemusím dělat ilustraci).
Pro měření fázoru napětí lze využít vektorvoltmetr.
Měření napětí je asi to druhé nejpřesnější měření co dokážeme,
takže většina multimetrů převádí všeljaké veličiny na napětí,
potom je tyto měřící přístroje posílají do převodníků ADC, jde ale
Obrázek 2: Principiální blokové
pro nejlepší přesnost figuruje například sigma delta převodník.
schéma vektorvoltmetru
Takže vlastně nejčastější a nejpřesnější veličina, kterou měříme je
kmitočet, neboli perioda.

Měření výkonu
AC výkon:
Okamžitý výkon: DC výkon:
1 𝑇 1 𝑇
𝑝(𝑡) = 𝑢(𝑡)𝑖(𝑡) (4) 𝑃 = 𝑈𝐼 (5) 𝑃 = ∫ 𝑝(𝑡)d𝑡 = ∫ 𝑢(𝑡)𝑖(𝑡)d𝑡 (6)
𝑇 𝑇
0 0
Pro harmonické průběhy platí: činný výkon: 𝑃 = 𝑈 𝐼 cos(𝜑) (7)
ef ef
√
𝑢(𝑡) = 𝑈 2sin(𝜔𝑡) (8) jalový výkon: 𝑃 = 𝑈 𝐼 sin(𝜑) (9)
ef ef ef
√
𝑖(𝑡) = 𝑈 2sin(𝜔𝑡+𝜑) (10) zdánlivý výkon: 𝑃 = 𝑈 𝐼 [VA] (11)
ef ef ef
Měření výkonu stejnosměrného proudu lze přímím měřením pomocí wattmetru, nebo nepřímým
měřením za pomocí ampérmetru a voltmetru. Podle toho co se měří dříve, se nepřímého měření
jmenuje VA nebo AV metoda.
Metoda AV se hodí pro velké výkony. Metoda VA se hodí pro malé výkony.
Obrázek 4: Schéma metody VA
Obrázek 3: Schéma metody AV
Korekce chyby metody: Korekce chyby metody:
𝑃 = 𝑈 (𝐼 −𝐼 ) (12) 𝑃 = 𝐼 (𝑈 −𝑈 ) (14)
𝑍 𝐴 𝑉 𝐴 𝑉 𝐴
𝐼 = 𝑈 /𝑅 (13) 𝑈 = 𝐼 𝑅 (15)
𝑉 𝑍 𝑍 𝐴 𝐴 𝐴
Měření výkonu střídavého proudu v jednofázové síti. Zde se už kvůli nutnosti znát fázi, se použije
wattmetr, přiřemž existují znovu dvě metody, buďto zapojíme dříve proudové nebo napěťové svorky.
Obrázek 5: Obvodové zapojení měření výkonu
Wattmetry taky známe jako elektrohodiny, ty staré analogové šli ojebat, když jste vedle nich dali
dost silnej magnet tak se netočili :D bohužel na ty nový digitální to neplatí :(
Obrázek 6: Principiální blokové schéma elektronického (statického) elektroměru
Δ𝑁 𝑡 𝑡 𝑡
𝑓 = ; 𝑁 = ∑Δ𝑁 = ∑𝑓Δ𝑡 = ∑𝑘𝑃Δ𝑡 = 𝑘Δ𝑊 (16)
Δ𝑡
0 0 0
Btw Rovnice 16 je přímo z přednášky Svatoše. Takže její zápis nejenom že nedává smysl, ale taky
nebudu hádat ani hledat proč měla. Hlavní je, že to „počítá“ impulsy, jejichž frekvence je velikost
výkonu, takže větší výkon vyústí ve více impulsů a více impulsů se sečte za čas na větší číslo.

Měření kmitočtu
Nejběžnějšímí přístroji používanými pro měření kmitočtu jsou čítače.
𝑁
𝑓 = (17)
𝑥 𝑇
𝑁
Obrázek 7: Principiální blokové schéma čítače pro měření kmitočtu
Měření fázového rozdílu
K měření fáze lze použít osciloskop. Prvním způsobem
je X-Y, kdy se fáze měří s referenčním signálem. Na
vícekanálovém osciloskopu je v možné fázi získat odečtením
z horizontální osy. Při stejné fázi se na obrazovce objeví
kružnice, při rozdílných fázích elipsa. Lepším způsobem je
Obrázek 8: Principiální blokové
použití fázoměrů.
schéma měřiče fáze
Měření odporu
Při měření odporů lze využít Ohmovu metodu, založenou na využití ampérmetru a voltmetru.
Můžeme taky použít převodníky 𝑅 → 𝑈. Nebo i Wheatstoneův můstek, s nebo bez OZ. Při měření
malých odporů si musíme dát na svodové odpory, a používá se i čtyřsvorkové připojení.
Obrázek 9: Ohmova metoda Obrázek 11: Linearizovaný
Obrázek 10: Převodník 𝑅 → 𝑈
pro měření odporu Wheatstoneův můstek s OZ
𝑈 𝑈 Δ𝑅
𝑅 = 𝑍 = (18) 𝑅 = − 2𝑅 (19) 𝑈 = −𝑈 (20)
𝑋 𝐼 𝑥 𝑈 𝑁 2 𝑍2𝑅
𝑟 0
Měření indukčnosti a kapacity
Měření parametrů cívek a kondezátoru většinou vychází z měření jejich impedancí. Číslicové měření
impedancí je založeno na fázorovém principu za pomocí převodníků 𝑍 → 𝑈 a 𝐺 → 𝑈.
Obrázek 12: Převodník 𝑍 → 𝑈 Obrázek 13: Převodník 𝐺 → 𝑈
𝑅 ℜ{𝑈 } 𝑅 ℑ{𝑈 } ℜ{𝑈 } ℑ{𝑈 }
𝑅 = − 𝑁 2 ;𝐿 = − 𝑁 2 (21) 𝐺 = − 2 ;𝐶 = − 2 (22)
𝑋 𝑈 𝑋 𝜔𝑈 𝑋 𝑅 𝑈 𝑋 𝜔𝑅 𝑈
1 1 𝑁 1 𝑁 1

B2B38EMB - Chyby přístrojů, ADC & DAC, multimetry a
osciloskopy
Chyby přístrojů a nejistoty měření. AD a DA převodníky. Multimetry, osciloskopy.
Chyby přístrojů
Při měření za pomoci nějakých přístrojů, je výsledek tohoto měření neúplný bez údaje jeho přesnosti.
Klasický způsob vyjádření přesnosti měření - chyba měření:
Absolutní chyba měření: Relativní chyba měření:
Δ = 𝑋 −𝑋 (1) 𝛿 = Δ /𝑋 (2)
𝑋 𝑀 𝑆 𝑋 𝑋 𝑀
Kde 𝑋 je naměřená hodnota, 𝑋 je pravá (správná) hodnota, která ale není známa.
𝑀 𝑆
Standartní nejistota = standardní (směrodatná) odchylka veličiny, se označuje 𝑢.
Nejistota měření obecně obsahuje řadu složek, jako 𝑢 a 𝑢 .
𝐴 𝐵
Standartní nejistoty typu (kategorie) A (𝑢 ), jsou v podstatě náhodné chyby, kterých se lze zbavit
𝐴
pouze statistickou analýzu série naměřených hodnot.
1 𝑛 1 𝑛
𝑢 = √ ∑(𝑥 −𝑥)2 ; 𝑥 = ∑(𝑥 ) (3)
𝐴 𝑛(𝑛−1) 𝑖 𝑛 𝑖
𝑖=1 𝑖=0
Standartní nejistoty typu (kategorie) B (𝑢 ), jsou Chyba přístroje Δ je u analogových přístrojů
𝐵 𝑝
potom systematické chyby, způsobené například definována třídou přesnosti TP a měřícím
metodou měření nebo přímo měřícím přístrojem. rozsahem 𝑀.
Δ TP
𝑢 = √ 𝑝 (4) Δ = 𝑀
𝐵 3 ⎵ 𝑝 ⎵⎵1⎵00⎵ (5)
Analog
U číslicových přístrojů pak chyba přístore přímo určuje maximální možnou odchylku od hodnoty
skutečné, takže vlastně Δ = Δ a lze ji získat dvěma způsoby:
𝑝 𝑋
𝛿 𝛿 𝛿
1. Δ = 1 𝑋 + 2 𝑀 (6) 2. Δ = 1 𝑋 +𝑁𝑅 (7)
𝑋 100 100 𝑋 100
Kde 𝛿 a 𝛿 jsou chyby z odečtené hodnoty a rozsahu, 𝑁 je kvantizační krok a 𝑅 je hodnota měřené
1 2
veličiny odpovídající kvantizačnímu kroku.
Kombinovaná standartní nejistota 𝑢 , je sloučení nejistot typu (kategorie) A a B.
𝐶
𝑢 (𝑥) = √𝑢2(𝑥)𝑢2(𝑥) (8)
𝐶 𝐴 𝐵
Rozšířená nejistora, je pak takové navýšení nejistoty, abyjsme zvětšili pravděpodobnost výskytu
reálné hodnoty v našem výsledku. Nejčastěji platí 𝑘 ∈ ⟨2,3⟩.
𝑟
𝑈(𝑥) = 𝑘 𝑢 (𝑥) (9)
𝑟 𝑐

AD převodníky
Analogově – číslicové převodníky (ADC), diskretizují signál v
časové i amplitudové doméně. Ale častěji se říká, že vzorkují a
následně kvantizují, což znamená totéž.
Obrázek 1: Jednoduchý
Pro vzorkování, se používají Sample & Hold (S&H) obvody, které vzorkovací obvod
zajišťují nízké zatížení měřeného obvodu, rychlou dobu odběru
vzorku a dostatečně dlouhou dobu držení tohoto vzorku.
Kvantizace, tedy diskretizace amplitudy pak nastává v obvodu,
podle kterého je typicky pojmenován celý převodník.
Kvantizační šum, je slovní spojení pro vyjádření moc malého
rozlišení, jako třeba schodovité změny barvy v obraze.
Komparační převodník - Flash
Flash převodník je velmi rychlý a velmi drahy, aplikace je třeba
v osciloskopu. Odporový žebřík se stará aby každý napěťový Obrázek 2: Komparační
komparátor měl unikátní úroveň, priorizační dekodér pak vyhodí převodník
už binární kód.
Kompenzační A/D - SAR
SAR převodník používá postupnout aproximaci jako metodu
měření. Převodník postupně mění generované napětí ve vnitřním
D/A převodníku, toto napětí potom porovná a měří zdali musí
přidat nebo ubrat, jakmile dosáhne nejmenší možné změny tak Obrázek 3: Kompenzační
pošle na výstup binární kód. převodník
Integrační A/D
Integrační převodníky fungují na principu nabíjení a aktivního RC článku s OZ, tedy Integrátoru.
s dvoutaktní integrací
Integrační převodník s dvojitou integrací,
taky nazýván jako „Dual-slope“. Funguje
tak: Integrátor se nabíjí fixní dobu, potom
se vybájí fixním napětím, doba vybíjení
je závislá na velikosti napětí nabíjecího
(neznámého). Přímo se tedy měří čas Obrázek 5: Průběh v
Obrázek 4: Dual-slope
vybíjení pomocí čítače. Dual-slope integrátoru
převodník
s modulátorem Sigma Delta
[Σ-Δ] převodník, převádí velikost měřeného napětí na střední hodnotu obdelníkového signálu.
Obrázek 6: Σ-Δ převodník Obrázek 7: Průběh v Σ-Δ integrátoru

DA převodníky
Digitálně - analogové převodníky (DAC), jsou nejčastěji založeny zpětné kvantizaci. LSB a MSB
se přiřadí nejmenší a největší hodnota, superpozicí proudů přes různé přepínače korespondující k
různým bitům pak vzniká pro každé binární slovo unikátní velikost napětí na výstupu D/A.
Jak bylo řečeno nejčastěji se využívá superpozice proudů, zdroje proudů často dávají D/A
převodníkům jejich název, nejčastěji se setkáme s spínanými zdroji proudu a R-2R síť.
𝑅 𝑛−1
𝑈 = −𝑈 𝑜 ∑2𝑖𝑧 (10)
𝑜 𝑟16𝑅 𝑖
𝑖=0
𝑧 = {0,1} (11)
𝑖
Obrázek 8: Čtyřbitový D/A převodník R-2R
Multimetry
Číslicové multimetry nepřímo měří různé elektrické veličiny jako napětí, proud, odpor, atd… tak, že
ji pomocí různých převodníků převedou na napětí, které následně měří pomocí A/D převodníků.
Obrázek 9: Principiální blokové schéma multimetru
Osciloskopy
Používají se pro zobrazování průběhů napětí. Číslicové osciloskopy pracují s enormním počtem dat.
Většinou u nich nejsou vysoké nároky na bitovou přesnost, avšak na rychlost převodu (flash ADC).
Obrázek 10: Principiální blokové schéma číslicového osciloskopu
