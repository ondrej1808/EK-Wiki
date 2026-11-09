# B2M34EPL – otázky 51–87

Druhá polovina otázek (za semestrálním testem). Odpovědi sestavené z přednášek P07–P13; u každé je uveden zdroj. Otázky 1–50 jsou v samostatné stránce.

## Otázka 51: Kdy vznikají Landauovy hladiny

V **silném magnetickém poli** $\vec B$ (a při nízké teplotě, kdy $\hbar\omega_c \gg k_BT$ a elektron stihne oběhnout dráhu mezi srážkami, $\omega_c\tau \gg 1$). Lorentzova síla nutí elektrony obíhat po **cyklotronových drahách** v rovině kolmé na $\vec B$ → pohyb v této rovině se kvantuje a spojitá disperze se rozpadne na diskrétní **Landauovy hladiny**:
$$E_n = \left(n + \tfrac12\right)\hbar\omega_c + \frac{\hbar^2 k_z^2}{2m^*},\qquad \omega_c = \frac{eB}{m^*}$$
Ve směru $\vec B$ ($k_z$) zůstává pohyb volný. Důsledky: změna hustoty stavů (ostré maxima), zvětšení efektivní šířky zakázaného pásu o $\hbar\omega_c/2$, Zeemanovo štěpení, kvantový Hallův jev, oscilace de Haas–van Alphen.

![](magistr/B2M34EPL/img/slide-landau.png)

*Zdroj: P07, s. 48*

## Otázka 52: Popište Hallův jev

Vodič/polovodič protékaný proudem $I$ (ve směru $x$) v magnetickém poli $B_z$: na nosiče působí **Lorentzova síla** $\vec F = q\vec v\times\vec B$ → nosiče se hromadí na jedné straně vzorku → vznikne příčné **Hallovo pole** $E_y$, které v rovnováze sílu vyrovná: $qE_y = qv_xB_z$.  
  
Hallovo napětí $U_H = \dfrac{IB}{qnt}$ ($t$ = tloušťka), Hallova konstanta $R_H = \dfrac{E_y}{j_xB_z} = \dfrac{1}{qn}$.  
  
**Využití:** znaménko $U_H$ určí **typ nosičů** (n/p), velikost jejich **koncentraci** $n$, spolu s vodivostí **pohyblivost** $\mu = |R_H|\sigma$; Hallovy sondy pro měření $B$.

![](magistr/B2M34EPL/img/slide-hall.png)

*Zdroj: P12, s. 10*

## Otázka 53: Nakreslete závislost E(k) pro elektrony a díry v Si

Si je **nepřímý** polovodič: maximum valenčního pásu je v bodě $\Gamma$ ($k = 0$), minimum vodivostního pásu leží mimo $\Gamma$ ve směru [100] blízko bodu $X$ (~85 % cesty, 6 ekvivalentních minim – „doliny“). $E_g \approx 1{,}12$ eV (300 K). Ve valenčním pásu v $\Gamma$ degenerují pásy **lehkých a těžkých děr** (+ odštěpený pás). Optický přechod vyžaduje účast fononu.

![](magistr/B2M34EPL/img/slide-Ek-Si-GaAs.png)

*Zdroj: P07, s. 44; P08, s. 3*

## Otázka 54: Nakreslete závislost E(k) pro elektrony a díry v GaAs

GaAs je **přímý** polovodič: minimum vodivostního pásu i maximum valenčního pásu jsou v bodě $\Gamma$ ($k = 0$), $E_g \approx 1{,}42$ eV (300 K). Dolina $\Gamma$ je úzká (malá $m^* \approx 0{,}067\,m_0$), výš leží boční doliny $L$ (~0,3 eV nad Γ) a $X$ s velkou efektivní hmotností. Valenční pás: lehké a těžké díry degenerované v $\Gamma$. Přímý přechod → účinná emise světla (LED, lasery).

![](magistr/B2M34EPL/img/slide-Ek-Si-GaAs.png)

*Zdroj: P07, s. 44; P08, s. 3*

## Otázka 55: Jaké vlastnosti elektronu je možno získat ze závislosti E(k) ve vodivostním pásu polovodiče

- **Efektivní hmotnost** ze zakřivení pásu: $\left(\dfrac{1}{m^*}\right)_{ij} = \dfrac{1}{\hbar^2}\dfrac{\partial^2E}{\partial k_i\partial k_j}$ (v okolí minima parabolická aproximace $E = E_c + \hbar^2k^2/2m^*$).  
- **Grupovou rychlost** elektronu: $\vec v = \dfrac1\hbar\nabla_k E(\vec k)$.  
- **Hybnost krystalu** $\hbar\vec k$ a odezvu na sílu: $\hbar\,\dfrac{d\vec k}{dt} = \vec F$.  
- Polohu minim (přímý/nepřímý polovodič, šířku $E_g$, počet ekvivalentních dolin) → **hustotu stavů** a anizotropii.

*Zdroj: P07, s. 27–29*

## Otázka 56: Nakreslete průběh Maxwell-Boltzmannovy funkce pro 300 K

$$f_{MB}(E) = \exp\left(-\frac{E - E_F}{k_BT}\right)$$
Klesající exponenciála (v lineárním měřítku), v semilog. měřítku přímka se sklonem $-1/k_BT$; při 300 K je $k_BT \approx 26$ meV. Pro $E = E_F$ dává 1, pro $E < E_F$ by vycházela > 1 → je to jen aproximace Fermiho-Diracovy funkce pro $E - E_F > 3$–$4\,k_BT$ (nedegenerovaný polovodič). Platí pro rozlišitelné klasické částice.

![](magistr/B2M34EPL/img/slide-FD-MB.png)

*Zdroj: P08, s. 5–8*

## Otázka 57: Nakreslete průběh Fermiho-Diracovy funkce pro 0 K a 300 K

$$f_{FD}(E) = \frac{1}{1 + \exp\left(\frac{E - E_F}{k_BT}\right)}$$
- **0 K:** schod – $f = 1$ pro $E < E_F$, $f = 0$ pro $E > E_F$.
- **300 K:** schod se „rozmaže“ v pásmu několika $k_BT$ (~0,1 eV) kolem $E_F$; vždy $f(E_F) = \tfrac12$, průběh je středově souměrný kolem bodu $(E_F, \tfrac12)$.

![](magistr/B2M34EPL/img/slide-rozdelovaci-funkce.png)

*Zdroj: P08, s. 6–8*

## Otázka 58: Co určuje Fermiho-Diracova funkce

**Pravděpodobnost, že stav s energií $E$ je obsazen elektronem** v termodynamické rovnováze při teplotě $T$ (pro fermiony – nerozlišitelné částice se spinem ½, splňující Pauliho princip). $1 - f(E)$ je pravděpodobnost obsazení dírou. Koncentrace nosičů: $n = \int g_c(E)\,f(E)\,dE$, $p = \int g_v(E)\,[1 - f(E)]\,dE$. **Fermiho hladina** $E_F$ = energie, kde $f = \tfrac12$.

*Zdroj: P08, s. 5–9*

## Otázka 59: Napište rovnici proudové hustoty pro elektrony v polovodiči

Drift-difúzní aproximace:
$$\vec j_n = e\,n\,\mu_n\vec E + e\,D_n\,\nabla n$$
(driftová + difúzní složka), Einsteinův vztah $D_n = \mu_n k_BT/e$. Ekvivalentně pomocí kvazifermiho hladiny: $\vec j_n = n\,\mu_n\nabla E_{Fn}$. Pro díry: $\vec j_p = e\,p\,\mu_p\vec E - e\,D_p\nabla p$.

*Zdroj: P09, s. 34–35*

## Otázka 60: Napište Poissonovu rovnici, co vyjadřuje

$$\nabla\cdot(\varepsilon\nabla\psi) = -\rho = -e\,(p - n + N_D^+ - N_A^-)$$
(pro homogenní $\varepsilon$: $\nabla^2\psi = -\rho/\varepsilon$, $\vec E = -\nabla\psi$). Vyplývá z Maxwellovy rovnice $\operatorname{div}\vec D = \rho$. Vyjadřuje vztah mezi **rozložením prostorového náboje** (volné nosiče + ionizované příměsi) a **elektrostatickým potenciálem/polem** v polovodiči – spolu s rovnicemi kontinuity tvoří základ simulace součástek.

*Zdroj: P09, s. 26–29*

## Otázka 61: Čím je určena poloha Fermiho hladiny ve vlastním polovodiči

Z podmínky elektrické neutrality $n = p = n_i$:
$$E_F = E_i = \frac{E_c + E_v}{2} + \frac{k_BT}{2}\ln\frac{N_v}{N_c} = \frac{E_c + E_v}{2} + \frac{3}{4}k_BT\ln\frac{m_p^*}{m_n^*}$$
Leží tedy **téměř uprostřed zakázaného pásu**; posun od středu je dán **poměrem efektivních hmotností** (efektivních hustot stavů) děr a elektronů a teplotou.

*Zdroj: P08, s. 11, 23*

## Otázka 62: Co jsou to kvazifermiho hladiny

V **nerovnovážném stavu** (injekce, osvětlení, přiložené napětí) už nelze koncentrace popsat jednou Fermiho hladinou. Elektrony ve vodivostním pásu a díry ve valenčním pásu jsou ale každé zvlášť v rovnováze (rychlá relaxace uvnitř pásu) → zavádí se zvlášť $E_{Fn}$ a $E_{Fp}$:
$$n = N_c\exp\frac{E_{Fn} - E_c}{k_BT},\qquad p = N_v\exp\frac{E_v - E_{Fp}}{k_BT},\qquad np = n_i^2\exp\frac{E_{Fn} - E_{Fp}}{k_BT}$$
V rovnováze $E_{Fn} = E_{Fp} = E_F$. Gradient kvazifermiho hladiny je hnací síla proudu: $\vec j_n = n\mu_n\nabla E_{Fn}$.

*Zdroj: P08, s. 33*

## Otázka 63: Napište difúzní rovnici pro nadbytečné elektrony v polovodiči typu P

Rovnice kontinuity + drift-difúze, bez pole (neutralita):
$$\frac{\partial\Delta n_p}{\partial t} = D_n\frac{\partial^2\Delta n_p}{\partial x^2} - \frac{\Delta n_p}{\tau_n} + G$$
kde $\Delta n_p = n_p - n_{p0}$ jsou nadbyteční (minoritní) elektrony, $\tau_n$ jejich doba života. Ustálený stav bez generace: $\Delta n_p(x) = \Delta n_p(0)\,e^{-x/L_n}$, **difúzní délka** $L_n = \sqrt{D_n\tau_n}$.

*Zdroj: P10, s. 48–49*

## Otázka 64: Na čem závisí rychlost fononové rekombinace elektronů v polovodiči typu P

Fononová (SRH) rekombinace přes rekombinační centra. V P-typu při slabé injekci limituje **záchyt minoritních elektronů**:
$$R = \frac{\Delta n}{\tau_n},\qquad \tau_n = \frac{1}{\sigma_n\,v_{th}\,N_t}$$
Závisí tedy na **koncentraci rekombinačních center $N_t$**, jejich **záchytném průřezu pro elektrony $\sigma_n$**, **tepelné rychlosti $v_{th}$** (teplotě), na **nadbytečné koncentraci elektronů $\Delta n$** a na **energetické poloze centra $E_t$** (nejúčinnější jsou hluboká centra blízko středu zakázaného pásu, např. Au v Si).

*Zdroj: P10, s. 8–13*

## Otázka 65: Jak se liší vliv pastí od vlivu rekombinačních center v polovodiči

Obojí jsou lokalizované hladiny v zakázaném pásu. Rozhoduje poměr pravděpodobnosti, že zachycený nosič bude **znovu emitován** zpět do pásu (G), nebo že centrum zachytí **nosič opačného typu** (R): $K = R/G$.  
- **Past** ($K < 1$): nosič je zachycen a po čase **uvolněn zpět** do téhož pásu → nosiče nezanikají, jen se zpožďují (pomalé přechodové jevy, snížení pohyblivosti/fotovodivost). Typicky mělké hladiny blízko okraje pásu.  
- **Rekombinační centrum** ($K > 1$): zachytí elektron i díru → **pár zanikne** (zkracuje dobu života). Typicky hluboké hladiny blízko středu $E_g$.

![](magistr/B2M34EPL/img/slide-pasti-centra.png)

*Zdroj: P10, s. 9–10*

## Otázka 66: Co je to Augerova rekombinace

**Třičásticový** proces: elektron rekombinuje s dírou a uvolněnou energii (~$E_g$) **předá třetímu nosiči** (elektronu nebo díře), který se dostane vysoko do pásu a energii pak ztratí srážkami (teplo). Rychlost $R_{Auger} = C_n n^2p + C_p np^2$ – roste se **třetí mocninou koncentrace**, proto je významná při **silné dotaci** nebo **silné injekci/excitaci** (emitory, lasery). Opačný proces k **nárazové ionizaci**.

![](magistr/B2M34EPL/img/slide-auger.png)

*Zdroj: P10, s. 22–23*

## Otázka 67: Proč dochází k povrchové rekombinaci

Na povrchu je přerušena periodicita krystalu → **nenasycené (volné) vazby**, adsorbované nečistoty a poruchy vytvoří velké množství **povrchových stavů** s energiemi v zakázaném pásu (spojité rozložení). Ty působí jako SRH rekombinační centra. Popisuje se **rychlostí povrchové rekombinace** $s$ (cm/s): tok nosičů do povrchu $= s\cdot\Delta n$. Snižuje se **pasivací** povrchu (SiO₂, H-terminace).

*Zdroj: P10 (povrchová rekombinace)*

## Otázka 68: Jaký vztah platí pro koncentrace elektronů a děr v nedegenerovaném polovodiči a proč

**Zákon působících hmot:** $$n_0\,p_0 = n_i^2 = N_cN_v\exp\left(-\frac{E_g}{k_BT}\right)$$
**Proč:** v nedegenerovaném polovodiči lze Fermiho-Diracovu funkci nahradit Maxwell-Boltzmannovou → $n_0 = N_c e^{-(E_c - E_F)/kT}$, $p_0 = N_v e^{-(E_F - E_v)/kT}$; v součinu se $E_F$ **vykrátí**. Součin tedy nezávisí na dotaci, jen na materiálu ($E_g$, $m^*$) a teplotě. Platí jen v **termodynamické rovnováze**.

*Zdroj: P08, s. 10–11, 23*

## Otázka 69: Nakreslete průběh závislosti pohyblivosti elektronů na koncentraci příměsí v křemíku pro 300 K

Při nízké dotaci (< ~$10^{15}$ cm⁻³) je pohyblivost elektronů v Si konstantní **~1400 cm²/Vs** (omezena rozptylem na fononech). Nad ~$10^{16}$ cm⁻³ začne převládat **rozptyl na ionizovaných příměsích** → pohyblivost klesá (esovitá křivka v log-log) k ~**70–90 cm²/Vs** při $10^{19}$–$10^{20}$ cm⁻³. Díry: ~470 → ~45 cm²/Vs. Empiricky Arorův / Caughey-Thomasův model: $\mu = \mu_{min} + \dfrac{\mu_{max} - \mu_{min}}{1 + (N/N_{ref})^\alpha}$.

![](magistr/B2M34EPL/img/slide-pohyblivost-dotace.png)

*Zdroj: P09, s. 44–46*

## Otázka 70: Na čem závisí rychlost fononové rekombinace elektronů v polovodiči typu N

V N-typu jsou elektrony **majoritní** – rekombinační centra jsou jimi téměř stále obsazená, takže rychlost SRH rekombinace je limitována **záchytem minoritních děr**:
$$R = \frac{\Delta p}{\tau_p},\qquad \tau_p = \frac{1}{\sigma_p\,v_{th}\,N_t}$$
Závisí na **koncentraci center $N_t$**, **záchytném průřezu pro díry $\sigma_p$**, **tepelné rychlosti** (teplotě), **nadbytečné koncentraci minoritních děr $\Delta p$** (= nadbytečných elektronů) a **energetické poloze $E_t$** centra. Na koncentraci majoritních elektronů při slabé injekci prakticky nezávisí.

*Zdroj: P10, s. 8–13*

## Otázka 71: Čím se liší nedegenerovaný a degenerovaný polovodič

- **Nedegenerovaný:** $E_F$ leží v zakázaném pásu dál než ~$3k_BT$ od okrajů pásů (střední dotace) → lze použít **Maxwell-Boltzmannovu** statistiku, $n = N_c e^{-(E_c - E_F)/kT}$, platí $np = n_i^2$.  
- **Degenerovaný:** velmi silná dotace (~$10^{19}$ cm⁻³ a víc) → $E_F$ je blízko okraje pásu nebo **přímo v pásu** → nutno použít **Fermiho-Diracovu** statistiku (Fermiho integrál $F_{1/2}$); polovodič se chová skoro jako kov, příměsové hladiny splývají v pás, zužuje se $E_g$ (bandgap narrowing).

*Zdroj: P08, s. 10–20, 33*

## Otázka 72: Nakreslete průběh závislosti rychlosti elektronů v GaAs na intenzitě el. pole

Při malém poli lineární nárůst $v = \mu E$ (velká pohyblivost, ~8500 cm²/Vs). Rychlost dosáhne **maxima ~$2\times10^7$ cm/s** při ~3–4 kV/cm, pak **klesá** (oblast **záporné diferenciální pohyblivosti**) a saturuje na ~$1\times10^7$ cm/s. Důvod: elektrony získají energii a přejdou z úzké doliny $\Gamma$ (malá $m^*$) do bočních dolin $L$ s velkou $m^*$ a malou pohyblivostí (**přenos mezi dolinami**, Gunnův jev). Si pro srovnání roste monotónně do saturace ~$10^7$ cm/s.

![](magistr/B2M34EPL/img/slide-saturace-rychlosti.png)

*Zdroj: P09, s. 49–52*

## Otázka 73: Jaké jsou mechanizmy polarizace dielektrika

- **Elektronová** – posun elektronového obalu vůči jádru (všechny látky, nejrychlejší, do ~$10^{15}$ Hz).  
- **Iontová** – vzájemný posun kationtů a aniontů v mřížce (iontové krystaly, do ~$10^{13}$ Hz, IR).  
- **Orientační (dipólová)** – natáčení permanentních dipólů do směru pole (polární molekuly, H₂O; do ~$10^{9}$–$10^{11}$ Hz, závisí na teplotě).  
- **Prostorová (mezivrstvová, Maxwell-Wagnerova)** – hromadění nábojů na rozhraních a poruchách (nejpomalejší, nízké frekvence).

![](magistr/B2M34EPL/img/slide-iontova-polarizace.png)

*Zdroj: P11, s. 12–20*

## Otázka 74: Jak závisí polarizace na frekvenci vnějšího elektrického pole

S rostoucí frekvencí jednotlivé mechanismy **přestávají stíhat** sledovat pole a „vypadávají“ → $\varepsilon_r(\omega)$ klesá **schodovitě**: nejprve prostorová (Hz–kHz), pak orientační (relaxační průběh v MHz–GHz, Debyeův model, maximum ztrát $\varepsilon$), pak iontová (rezonance v IR, ~$10^{13}$ Hz), nakonec elektronová (rezonance v UV, ~$10^{15}$ Hz). Nad UV zůstává $arepsilon_r 	o 1$. U relaxačních mechanismů je pokles plynulý s maximem ztrát, u rezonančních (iontová, elektronová) je rezonanční „zákmit“.

*Zdroj: P11*

## Otázka 75: Nakreslete hysterezní křivku feroelektrika, vyznačte významné hodnoty

Závislost polarizace $P$ na intenzitě pole $E$ je **hysterezní smyčka** (pod Curieovou teplotou). Významné hodnoty:  
- **$P_s$ – spontánní (saturační) polarizace** (extrapolace nasyceného úseku na $E = 0$),  
- **$P_r$ – remanentní polarizace** (při $E = 0$ po předchozí polarizaci),  
- **$E_c$ – koercitivní pole** (pole potřebné ke zrušení polarizace, $P = 0$).  
Při prvním zapnutí pole vychází z počátku **panenská křivka**. Plocha smyčky = ztráty na cyklus. Nad $T_C$ zaniká (paraelektrikum). Příklady: BaTiO₃, PZT.

![](magistr/B2M34EPL/img/hystereze-feroelektrik.jpg)

*Zdroj: P11, s. 31–33; Moodle – hystereze feroelektrik*

## Otázka 76: Popište piezoelektrický jev

**Přímý jev:** mechanické namáhání (tlak, tah) krystalu bez středu symetrie → posun iontů → změna polarizace → na plochách vzniká **elektrický náboj/napětí**: $P = d\cdot\sigma$ ($d$ = piezoelektrický koeficient).  
**Nepřímý (obrácený) jev:** přiložené elektrické pole → **mechanická deformace** krystalu.  
Podmínka: krystal **bez středu souměrnosti** (20 z 32 bodových grup). Materiály: křemen (SiO₂), PZT, BaTiO₃, ZnO, AlN. Každé feroelektrikum je piezoelektrické, ne naopak. Využití: senzory tlaku a zrychlení, krystalové oscilátory, ultrazvuk, aktuátory, SAW filtry.

*Zdroj: P11, s. 31, 38–43*

## Otázka 77: Jaké jsou mechanizmy průrazu dielektrika

Při velmi vysoké intenzitě pole se dielektrikum stane vodivým:  
- **Tepelný** – ztráty zahřívají materiál → roste vodivost (iontová) → ještě víc tepla (kladná zpětná vazba).  
- **Lavinový (elektrický)** – urychlené elektrony nárazovou ionizací uvolní další elektrony → lavina.  
- **Výbojový** – částečné výboje v dutinách/pórech postupně erodují materiál („stromečky“).  
- **Elektrolytický (elektrochemický)** – pohybem iontů a vlivem vlhkosti se postupně tvoří vodivé cesty.  
Elektrická pevnost závisí na homogenitě, geometrii, typu namáhání (DC/AC/puls) a okolí (vlhkost, teplota).

*Zdroj: P11, s. 49–52*

## Otázka 78: Jaký je vztah mezi elektrickou a tepelnou vodivostí kovů

**Wiedemannův-Franzův zákon:** v kovech přenášejí náboj i teplo hlavně **volné elektrony**, proto je poměr tepelné (elektronové) a elektrické vodivosti úměrný teplotě:
$$\frac{\kappa}{\sigma} = L\,T,\qquad L = \frac{\pi^2}{3}\left(\frac{k_B}{e}\right)^2 \approx 2{,}45\times10^{-8}\ \mathrm{W\,\Omega\,K^{-2}}$$
($L$ = Lorenzovo číslo). Dobré elektrické vodiče jsou i dobré tepelné vodiče (Ag, Cu).

*Zdroj: P12, s. 5*

## Otázka 79: Popište Harissonovu konstrukci Fermiho ploch kovů

Konstrukce Fermiho ploch v **modelu téměř volných elektronů**: kolem **každého bodu reciproké mřížky** se opíše **Fermiho koule** o poloměru $k_F$ (daném koncentrací valenčních elektronů, $k_F = (3\pi^2n)^{1/3}$). Bod $\vec k$, který leží **uvnitř alespoň $n$ koulí, patří do $n$-té Brillouinovy zóny** (je obsazen v $n$-tém pásu). Části ploch v jednotlivých zónách se pak posunutím o vektory $\vec G$ přenesou do 1. BZ (redukované schéma). Vznikají tak „kapsy“ elektronů a děr.

![](magistr/B2M34EPL/img/slide-harrison.png)

*Zdroj: P12, s. 11–14*

## Otázka 80: Naznačte odvození Langevinova vztahu pro diamagnetickou susceptibilitu

V magnetickém poli $B$ konají elektrony atomu **Larmorovu precesi** s $\omega_L = \dfrac{eB}{2m}$. $Z$ elektronů tak vytváří proud $I = -Ze\dfrac{\omega_L}{2\pi} = -\dfrac{Ze^2B}{4\pi m}$.
Magnetický moment proudové smyčky $\mu = I\cdot\pi\langle\rho^2\rangle = -\dfrac{Ze^2B}{4m}\langle\rho^2\rangle$, kde $\langle\rho^2\rangle = \langle x^2 + y^2\rangle = \tfrac23\langle r^2\rangle$ (sférická symetrie).
Pro $N$ atomů v objemu: $$\chi = \frac{\mu_0 N\mu}{B} = -\frac{\mu_0 N Z e^2}{6m}\langle r^2\rangle$$
**Záporná**, malá (~$10^{-6}$) a **nezávislá na teplotě** – indukovaný moment působí proti poli (Lenzovo pravidlo).

*Zdroj: P12, s. 27*

## Otázka 81: Uveďte Curieův zákon pro susceptibilitu paramagnetik

$$\chi = \frac{C}{T},\qquad C = \frac{\mu_0 N\mu_{eff}^2}{3k_B},\quad \mu_{eff} = g_J\sqrt{J(J+1)}\,\mu_B$$
Susceptibilita paramagnetika je **kladná** a **nepřímo úměrná teplotě** – tepelný pohyb ruší uspořádání permanentních magnetických momentů do směru pole. (Pro feromagnetika nad $T_C$: **Curieův-Weissův** zákon $\chi = C/(T - T_C)$.)

*Zdroj: P12, s. 40*

## Otázka 82: Uveďte mechanismy výměnné interakce u feromagnetických látek

Výměnná interakce je kvantový jev (Pauliho princip + Coulomb), Heisenbergův hamiltonián $\hat H = -2\sum J_{ij}\hat S_i\cdot\hat S_j$ ($J > 0$ feromagnetické, $J < 0$ antiferomagnetické uspořádání):  
- **Přímá výměna** – přímý překryv vlnových funkcí sousedních atomů, krátkodosahová (3d kovy Fe, Co, Ni).  
- **Nepřímá – supervýměna (superexchange)** – zprostředkovaná nemagnetickým aniontem (O²⁻) mezi magnetickými ionty (oxidy, ferity; často antiferomagnetická).  
- **Nepřímá – RKKY** – zprostředkovaná **vodivostními elektrony**, dalekodosahová, oscilující se vzdáleností (vzácné zeminy 4f).  
(+ dvojná výměna – double exchange v manganitech.)

*Zdroj: P12, s. 48–53*

## Otázka 83: Jaké typy rozhraní mezi doménami se vyskytují ve feromagnetických materiálech

Doménová stěna = přechodová oblast, ve které se směr magnetizace postupně stáčí (~stovky atomových vzdáleností; kompromis mezi výměnnou a anizotropní energií).  
- **Blochova stěna** – magnetizace se stáčí **v rovině stěny** (rotuje kolem normály stěny) → nevznikají magnetické póly na stěně; typická pro objemové materiály.  
- **Néelova stěna** – magnetizace se stáčí **v rovině kolmé ke stěně** (v rovině vzorku); výhodná v **tenkých vrstvách**.  
Podle úhlu mezi doménami: 180° a 90° stěny.

![](magistr/B2M34EPL/img/slide-domenove-steny.png)

*Zdroj: P12, s. 56*

## Otázka 84: Uveďte základní charakteristiky supravodivého stavu

Pod **kritickou teplotou $T_c$**:  
- **Ideální vodivost** – nulový stejnosměrný elektrický odpor (perzistentní proudy).  
- **Ideální diamagnetismus – Meissnerův-Ochsenfeldův jev** – vnější magnetické pole je vytlačeno z objemu ($\chi = -1$), nezávisle na historii (odlišnost od pouhého ideálního vodiče); pole proniká jen do hloubky $\lambda_L$ (Londonova hloubka vniku).  
- Existence **zakázaného pásu $2\Delta$** v energetickém spektru a **Cooperových párů** (BCS), **kvantování magnetického toku** $\Phi_0 = h/2e$, Josephsonovy jevy, skok měrného tepla v $T_c$.

*Zdroj: P13, s. 1–16*

## Otázka 85: Na jakých veličinách závisí existence supravodivého stavu konkrétního materiálu

Supravodivý stav existuje jen uvnitř oblasti ohraničené třemi **kritickými parametry** (kritická plocha v prostoru $T$–$B$–$J$):  
- **teplota** $T < T_c$,  
- **magnetické pole** $B < B_c(T)$, přibližně $B_c(T) = B_c(0)\left[1 - (T/T_c)^2\right]$,  
- **proudová hustota** $J < J_c$.  
Po překročení kterékoli z nich přejde materiál do normálního stavu. (Ovlivňuje to i tlak, složení, izotop – izotopový jev $T_c \sim M^{-1/2}$.)

*Zdroj: P13, s. 16–18*

## Otázka 86: Porovnejte supravodiče 1. a 2. druhu

- **1. druhu:** čisté kovy (Hg, Pb, Sn, Al, Nb…), nízká $T_c$ a nízké kritické pole $H_c$. **Dokonalý diamagnetismus** až do $H_c$, pak skokem přechod do normálního stavu. Proud teče jen v povrchové vrstvě. Prakticky nevyužitelné.  
- **2. druhu:** slitiny a sloučeniny (NbTi, Nb₃Sn, YBCO – vysokoteplotní). Dvě kritická pole: pod $H_{c1}$ Meissnerův stav, mezi $H_{c1}$ a $H_{c2}$ **smíšený (vírový) stav** – pole proniká v kvantovaných **vírech** (Abrikosovova mříž, tok $\Phi_0$), nad $H_{c2}$ normální stav. $H_{c2}$ může být velmi vysoké → **supravodivé magnety** (MRI, LHC). Rozlišení podle Ginzburgova-Landauova parametru $\kappa = \lambda/\xi$ ($< 1/\sqrt2$ → 1. druh).

![](magistr/B2M34EPL/img/slide-supravodice-I-II.png)

*Zdroj: P13, s. 8, 21–24*

## Otázka 87: Popište stejnosměrný a střídavý Josephsonův jev

Josephsonův přechod: dva supravodiče oddělené tenkou bariérou (izolant ~1 nm). **Cooperovy páry tunelují** a vlnové funkce na obou stranách jsou korelované (fázový rozdíl $\varphi$).  
- **Stejnosměrný jev:** **bez přiloženého napětí** teče supravodivý proud $I = I_c\sin\varphi$ až do kritického proudu $I_c$.  
- **Střídavý jev:** při **konstantním napětí $V$** se fáze mění $\dfrac{d\varphi}{dt} = \dfrac{2eV}{\hbar}$ → proud **osciluje** s frekvencí $f = \dfrac{2eV}{h} \approx 483{,}6$ GHz/mV (vyzařování).  
Využití: SQUID (měření velmi slabých mag. polí), napěťový etalon, supravodivé qubity.

![](magistr/B2M34EPL/img/slide-josephson-dc.png)

*Zdroj: P13, s. 53–57*
