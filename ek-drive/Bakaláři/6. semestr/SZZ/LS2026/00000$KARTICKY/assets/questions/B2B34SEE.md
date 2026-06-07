40 Základní fyzikální jevy a principy používané u senzorů, energetické
domény, mikrosystém, mikroaktuátor, MEMS, statické a dyna-
mické parametry, zpracování senzorových signálů. (B2B34SEE)
Nasvětěexistujeněkolikdoménschopnýchprodukovatenergiipřeměnitelnounaelektrickýsignál.Tyto
domény se nazývají energetické a lze je dělit na
1. elektrické 4. magnetické
2. mechanické 5. chemické
3. teplotní 6. záření
Senzory jsou defakto převodníky signálů získaných z těchto jednotlivých domén na elektrický sig-
nál. Na opačném principu fungují mikroaktuátory (ovládání mikrozrcátek, displej, generace posuvu,
vibrace,...), které naopak převádí elektrický signál na jednu z těchto domén a mohou sloužit jakožto
regulační členy (korekce chyb měření, internet of things). Celková soustava senzorů, mikroaktuátorů a
vyhodnocovacích jednotek se jednotně nazývá mikrosystémy.
Při využití principů více enegetických domén vznikají systémy založené na výhodách použitých
domén. Aktuálně nejrozšírenějšími jsou MEMS - mikroelektronicko-mechanické systémy. Jedná se o
mechanické systémy vyrobené podobným způsobem jako integrované obvody. V senzorech se MEMS
používají například v elektronových mikroskopech.
Zpracování signálů U většiny senzorů se používají dva základní typy obvodů pro vyhodnocování.
Pro senzory založené na změné odporu se použivájí Wheatstoneovy můstky.
R R
S
U
s
U
1
R R
R
Obrázek 89: Můstkový vyhodnocovací obvod.
Na rozváženém můstku se měří napětí na diagonále. Můstek je většinou doplněn dalšími rezistory,
či se použivá diferenciální zapojení senzoru pro redukci chyby vnějších vlivů.
U druhého typu obvodů se vyhodnocuje přímo napěťový signál, který je ovšem často velmi slabý
na přímé zpracování, proto se operačními zesilovači zesiluje na vyšší úroveň.
178

+
− U s
U
o
R
2
R
1
Obrázek 90: Neinvertující operační zesilovač
Voboupřípadechjevýstupnínapětípoužitéhoobvodupřivedenonavstupvoltmetru,navzorkováno
a převedno na digitální signál. V obvodech DSP je následně signál vyhodnocen a na zobrazovačích
zobrazen. Často se stále objevují klasické analogové obvody, avšak oproti digitálnímu zpracování jsou
dnes již dražší a nepřináší žádné podstatné výhody.
Parametry senzorů Z vyhodnocování signálů plyne několik důležitých parametrů senzorů, jenž
musí být brány v potaz.
Základní dělení je na statické a dynamické. Mezi statické parametry se řadí
1. převodní charakteristika 5. detekovatelný signál
2. přesnost 6. hystéreze a reprodukovatelnost
3. rozlišovací schopnost 7. výstupní impedance
4. selektivita a citlivost 8. šum
a mezi dynamické se řadí
1. odezva senzoru
2. frekvenční charakteristiky
Principy a fyzikálni jevy používané v senzorech Většina principů se opírá o pasivní obvodové
prvky, kdy sledujeme změnu odporu rezistoru, změnu kapacity kondezátoru, nebo změnu indukčnosti
cívky. Dále se využívá několik principů z klasické a kvantové mechaniky pro převod neelektrických
veličin na elektrické.
1. Piezoodporovýjev-přimechanickémnamáhání(tlak,působenísíly)tělesadocházíkezměnějeho
odporu. Tato změna je následně vyhodnocována. Souvisí s Hookovým zákonem (popis deformace
materiálů při působení síly).
2. Piezoelektrický jev - vzniká změnou polarizace deskového kondezátoru. Přiložením vnější mecha-
nické síly se deformují dipóly v dielektriku a na povrchu tak vzniká náboj. Existuje i inverzní
piezoelektrický jev. S piezoelektrickým jevem souvisí použít povrchové akustické vlny (SAW) -
závislost mechanické rezonanční frekvence na deformaci vyvolané vnějším působením.
179

3. Elektromagnetický princip - napětí indukované na cívce.
4. Hallův jev - protéka-li tělesem v magnetickém poli elektrický proud, lze na jeho bočních stěnách
naměřit napětí.
5. Magnetoodporový jev - působením vnějšího magnetického pole dojde ke stáčení směru proudo-
vého hustoty, což ve výsledku způsobí změnu odporu.
6. Magnetodiody a magnetotranzistory - za působení magnetického pole se mění jejich charakteris-
tiky.
7. Josephsonův jev - vznik proudu mezi dvěma supravodiči oddělenými tenkou vrstovou (v řádu
nanometrů). Speciální případ kvantového tunelového jevu.
8. Dopplerův jev - změna frekvence v závislosti na rychlosti.
9. Seebeckův jev - vznik napětí na přechodu dvou kovů s různou výstupní prácí elektronu. V uza-
vřené smyčce ze dvou různých kovů, kde spoje mají různou teplotu, protéká proud.
10. Peltierůvjev-inverzníkSeebeckovějevu.Zprocházejícíhoproudulzeudržovatrozdílnouteplotu
dvou kovů
41 Senzory teploty, mechanického namáhání, průtoku, hladiny, mag-
netických veličin, záření, chemické analýzy - principy činnosti,
elektronická zapojení, vlastnosti.
(B2B34SEE)
Senzory teploty
Odporové kovové senzory jsou nejrozšířenějšími senzory teploty a jsou tvořeny z čistých kovů (Pt,
Ni, Cu), jejich teplotní závislost je téměř lineární. Lze je realizovat spirálovým vinutím okolo izolantu,
vinutím v keramickém pouzdře nebo formou tenkého filmu. Změnou teploty se mění odpor senzoru,
odpor se převádí na jinou elektricky měřitelnou veličinu (např. můstkovým zapojením na napětí nebo
s operačními zesilovači). Charakteristika odporových kovových teploměrů: malý odpor (100 Ω), široký
rozsah teplot, dobrá citlivost a přesnost.
Odporové polovodičové senzory (Termistory) jsou dvou typů PTC (pozistory) a NTC (ne-
gistory). Jejich teplotní závislost není lineární a je třeba ji linearizovat (zejména u NTC) například
nelineárním zesilovačem nebo paralelním odporem. Charakteristika: větší odpor, malé rozměry a nižší
cena. Existují také monokrystalické polovodičové (např. Si) odporové senzory pracující na principu
odporu šíření.
180

Obrázek 91: Teplotní závislost pro PTC a NTC odporové senzory
Teplotní senzory s P-N přechodem vycházejí z Shockleyho rovnice. Lze použít jakoukoliv diodu,
ale varikapy mají nejlepší vlastnosti. Lze využít také tranzistory a řešení integrovat na čip společně
s vyhodnocovacím obvodem (převodník T → I). Integrovat lze i jako CMOS technologii, což se moc
nevyužívá kvůli nelinearitě, ale lze to aplikovat pro hlídání teploty procesoru.
Kovové termočlánky využívají dva různé kovy (případně polovodiče) a Seebeckův jev (Pokud má
spoj dvou různých kovů jinou teplotu než konce těchto vodičů, naměříme na nich elektromotorické
napětí). Toto řešení lze také přímo integrovat na čip.
Senzory mechanického namáhání
Piezoodporový jev popisujezměnyelektrickéhoodporumateriáluvlivemmechanickéhonamáhání.
Piezoodporový jev v kovech se nazývá tenzometrický jev, který měříme tenzometrem. Lze měřit
prodloužení,tlak,kroutícímomentyadalší.Tenzometrymajímalouhmotnostarozměry,dlouhodobou
stabilitu parametrů a malou chybu senzoru
l
R = f(F) = ρ , (691)
S
kde ρ je měrný odpor. Tenzometry se dělí na drátkové (nelepené s volným drátkem nebo lepené) a
fóliové.
Piezoodporový jev je mnohonásobně větší v polovodičích. Změna odporu je způsobena změnou
pohyblivosti nosičů proudu vlivem mechanického napětí. Existují lepené a difuzní polovodičové tenzo-
metry. Důležitým parametrem je teplotní součinitel odporu. Vyhodnocovat tenzometry lze Wheatsone-
ovým můstkem, lzetamzapojitdvatenzometry(jeden namáhaný adruhýne) proteplotníkompenzaci
nebo oba namáhané (v opačných směřech) pro lepší citlivost. Existují také zapojení s operačním zesi-
lovačem pro tenzometrický můstek. Aplikace tenzometrů: siloměry, měření namáhání (lopatky turbíny,
staveb,...).
181

Obrázek 92: Teplotní kompenzace při vyhodnocování tenzometrů Wheatsoneovým můstek
Polovodičové tlakové senzory mohou být piezoelektrické, piezoodporové či kapacitní. Tlakové
senzory mají využití například v automobilovém průmyslu.
SAW senzory mohou být také použity pro měření mechanického namáhání a tlaku. Pracují na
principu povrchových akustických vln.
Senzory průtoku
Proudění se liší dle vlastností tekutin (typ, viskozita, hustota), pro měření je důležité rozlišit lami-
nární nebo turbulentní proudění. Senzory mohou měřit rychlostní, objemový nebo hmotnostní průtok.
Tlakové gradientní senzory využívají Bernoulliho rovnosti zařazením užšího úseku trubice (úseku
s odporem) a měří rozdíl tlaků před a za tímto segmentem.
Elektromagnetické (indukční) senzory fungují pro elektricky vodivé kapaliny. Na trubce jsou ze
dvoustranumístěnyelektrodyapřestrubkujeaplikovánomagneticképole,naelektrodáchseindukuje
napětí úměrné průtočné rychlosti dle u = Bvl.
Ultrazvukové (Dopplerovy) senzory průtoku využívajíodlišnou rychlostultrazvukuv materiá-
lech.Měříserozdílováfrekvence,kterápřímoodpovídárychlostiprůtoku,nebofázovýposun.Výhodou
je, že není třeba přímý kontakt s kapalinou, a proto je vhodný třeba k měření průtoku krve.
Rychlostní senzory průtoku využívají turbínu / lopatkové kolo.
Senzory hladiny
Kměřenívýškyhladinylzepoužítcelouřadusenzorůnaprincipuměřenívzdálenosti:ultrazvukový,
radar nebo optický. Další senzory měří hladinu změnou kapacity nebo tlaku. Některé senzory plavou
na hladině jako magnetické plovákové spínače. Vodivostní hladinové spínače mají dvě elektrody, které
se vlivem vodivé kapaliny zkratují.
182
