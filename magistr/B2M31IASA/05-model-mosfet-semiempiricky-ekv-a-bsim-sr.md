# 5 Model MOSFET (semiempirický, EKV a BSIM srovnání)

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf" target="_blank" rel="noopener">MOSFET6.pdf</a></small></p>

## ⭐ Technologická struktura MOSFET (<u>příčný řez MOSFET</u> s vyznačenými geometrickými parametry) a technologické parametry modelu MOSFET

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=4" target="_blank" rel="noopener">MOSFET6.pdf, s. 4</a></small></p>

![Příčný řez MOSFET s geometrickými parametry](magistr/B2M31IASA/img/mosfet_rez.png)
*Příčný řez MOSFET s geometrickými parametry*

| Druh | Parametr | Význam |
|---|---|---|
| geometrický | $L$ | délka gatu |
|  | $W$ | šířka kanálu |
|  | $t_{\mathrm{ox}}$ | tloušťka oxidu |
|  | $L_e$ | efektivní délka kanálu ($L_e = L - 2X_{JL}$) |
|  | $X_J$ | hloubka přechodu source/drain |
|  | $X_{JL}$ | laterální difúze (o kolik S/D zasahuje pod gate) |
| technologický | $N_{SUB}$ | dotace substrátu |
|  | $N_{SS}$ | povrchová hustota stavů |
|  | $T_{PG}$ | typ materiálu gatu |
|  | $\mu_0$ | pohyblivost nosičů |
|  | $R_{SH}$ | vrstvový odpor |

## Model MOSFET, základní parametry modelu, náhradní obvod modelu

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=3" target="_blank" rel="noopener">MOSFET6.pdf, s. 2–3</a></small></p>

![Model tranzistoru MOSFET a jeho základní parametry](magistr/B2M31IASA/img/mosfet_model.png)
*Model tranzistoru MOSFET a jeho základní parametry*

## Dvojznačnost zadávání parametrů modelu MOSFET (dvojí) – jen princip, není třeba znát matematické vztahy (vědět jen, v čem může být problém při zadávání)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=5" target="_blank" rel="noopener">MOSFET6.pdf, s. 5–6</a></small></p>

> **Odpověď:** Některé parametry lze zadat **dvojím způsobem**: (1) přímo, nebo **na plochu** (např. $R_D = R_{SH} N_{RD}$), (2) jako **elektrický** parametr ($K_P$, $V_{TO}$, …), nebo ho simulátor **spočítá z technologických** ($\mu_0$, $t_{\mathrm{ox}}$, $N_{SUB}$, …). **Problém:** když se zadá obojí, není jasné, která hodnota platí – model pak nemusí dělat to, co uživatel čekal.

## Závislost prahového napětí MOSFET na napětí drain-source a její velký význam pro krátkokanálové tranzistory (stačí jen vědět o sekundárním parametru $\sigma$)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=7" target="_blank" rel="noopener">MOSFET6.pdf, s. 7–8</a></small></p>

![Závislost prahového napětí na $v_{\mathrm{DS}}$](magistr/B2M31IASA/img/mosfet_vt_vds.png)
*Závislost prahového napětí na $v_{\mathrm{DS}}$*

- Prahové napětí **klesá s rostoucím $v_{\mathrm{DS}}$** (člen $-\sigma v_{\mathrm{DS}}$) – u krátkého kanálu drain snižuje potenciálovou bariéru (DIBL).
- Sekundární parametr $\sigma = \eta\,\frac{8{,}15\cdot10^{-22}}{\frac{\varepsilon_{\mathrm{ox}}}{t_{\mathrm{ox}}} L_e^3}$ – pozor, **$\sim 1/L_e^3$**! Pro dlouhý kanál zanedbatelné, pro **krátkokanálové tranzistory velmi významné**.

## ⭐ <u>Závislost proudu kanálem na napětí gate-source, podprahový režim tranzistoru</u> (obrázek, exponenciální, kvadratická část charakteristiky)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=9" target="_blank" rel="noopener">MOSFET6.pdf, s. 9</a></small></p>

![Převodní charakteristika MOSFET s podprahovým režimem](magistr/B2M31IASA/img/mosfet_podprah.png)
*Převodní charakteristika MOSFET s podprahovým režimem*

*Poznámka ke slidu:* slovo „lineární“ je na slidu přeškrtnuté – transkonduktance nad $V_{\mathrm{on}}$ se považuje za **neexponenciální** (v nejjednodušším případě **kvadratickou**), ne lineární.

- Pod prahem $V_T$ proud není nulový – **podprahový režim** (slabá inverze), proud roste **exponenciálně** s $v_{\mathrm{GS}}$ (difúzní proud jako u BJT).
- Nad napětím $V_{\mathrm{on}}$ (o něco výše než $V_T$) je závislost **kvadratická** (silná inverze, driftový proud); v grafu zjednodušeně téměř lineární.
- $V_{\mathrm{on}}$ je napětí, od něhož je transkonduktance považována za kvadratickou – obě části se v něm napojí.

## ⭐ Výstupní charakteristiky tranzistoru MOSFET, <u>odporová a saturační oblast</u> (obrázek výstupních charakteristik)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=10" target="_blank" rel="noopener">MOSFET6.pdf, s. 10–11</a></small></p>

![Výstupní charakteristiky MOSFET](magistr/B2M31IASA/img/mosfet_vystupni.png)
*Výstupní charakteristiky MOSFET*

- **Lineární odporová oblast** (malé $v_{\mathrm{DS}}$): tranzistor se chová jako odpor řízený $v_{\mathrm{GS}}$.
- **Saturační oblast** ($v_{\mathrm{DS}} > v_{\mathrm{GS}} - V_T$): kanál zaškrcen, proud jen mírně roste (modulace délky kanálu $\lambda$, resp. parametr $\kappa$).

## Dělení bariérových kapacit MOSFET na postranní kapacity a kapacitu dna, odlišné exponenty napěťové závislosti obou kapacit (znát jen princip dělení kapacit)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=12" target="_blank" rel="noopener">MOSFET6.pdf, s. 12</a></small></p>

![Bariérové kapacity MOSFET – dno a boční stěny](magistr/B2M31IASA/img/mosfet_bar_kap.png)
*Bariérové kapacity MOSFET – dno a boční stěny*

- Přechod bulk-drain (bulk-source) má **dno** (plocha $A_D$, parametr $C_J$) a **boční stěny** (obvod $P_D$, parametr $C_{JSW}$).
- Obě části mají jiný profil dotace $\Rightarrow$ **jiný exponent** napěťové závislosti: $m$ pro dno (blízko $\frac12$, strmý přechod) a $m_p$ pro boční stěny (blízko $\frac13$, pozvolný přechod).
- Celková kapacita $= C_{Db} + C_{Dp}$; pro $v_{\mathrm{BD}} \ge X_{CJ}\phi_J$ se průběh linearizuje (jako u diody).

## Meyerův model hradlové kapacity MOSFET (obrázek napěťových závislostí kapacit gate-bulk, gate-source a gate-drain)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=13" target="_blank" rel="noopener">MOSFET6.pdf, s. 13–14</a></small></p>

![Meyerův model – kapacity $C_{GB}$, $C_{GS}$, $C_{GD}$ (normováno na $C_{\mathrm{ox}}$)](magistr/B2M31IASA/img/mosfet_meyer.png)
*Meyerův model – kapacity $C_{GB}$, $C_{GS}$, $C_{GD}$ (normováno na $C_{\mathrm{ox}}$)*

- Gate se chová jako deskový kondenzátor $C_{\mathrm{ox}} = \frac{\varepsilon_{\mathrm{ox}}}{t_{\mathrm{ox}}} L_e W$, kapacity jsou ale vysoce nelineární v závislosti na $v_{\mathrm{GS}}$.
- **Akumulace / pod prahem** ($V_{GS} < V_{\mathrm{on}}$): kanál není, $C_{GB} \approx C_{\mathrm{ox}}$, $C_{GS} = C_{GD} = 0$.
- **Saturace** ($0 < V_{GS} - V_{\mathrm{on}} < V_{DS}$): $C_{GB} \to 0$, $C_{GS} \approx \frac23 C_{\mathrm{ox}}$, $C_{GD} \approx 0$.
- **Lineární oblast** ($V_{GS} - V_{\mathrm{on}} > V_{DS}$): $C_{GS}$ a $C_{GD}$ se blíží $\frac12 C_{\mathrm{ox}}$.

## Vědět, že v „krátkokanálových“ modelech EKV a BSIM se používá nábojově řízený (Wardův) model hradlové kapacity (jeho rovnice jsme pro složitost nedefinovali, Wardovy rovnice jste dostali prostřednictvím poslané kapitoly z naší knihy)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Kapitola4.MOSFET.pdf#page=18" target="_blank" rel="noopener">Kapitola4.MOSFET.pdf, s. 18 (v knize s. 63)</a></small></p>

> **Odpověď:** V krátkokanálových modelech EKV a BSIM se hradlová kapacita nepočítá Meyerovým modelem (kapacity $C(v)$), ale **nábojově řízeným (Wardovým) modelem**: modelují se přímo **náboje** gatu, kanálu a substrátu ($q_G$, $q_D$, $q_S$, $q_B$) a proudy jsou jejich časové derivace. Tím se **zachovává náboj**, což Meyerův model nezaručuje.

## Základní odlišnosti modelů EKV a BSIM (dokázat jednoduše slovně vysvětlit)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/EKVvsBSIMoverview26.pdf#page=2" target="_blank" rel="noopener">EKVvsBSIMoverview26.pdf, s. 2–3</a></small></p>

> **Odpověď:** EKV je **nábojový**, kompaktní model se **spojitými rovnicemi**, vhodný pro **analogové a low-power** obvody. BSIM je **semiempirický model založený na prahovém napětí** s mnoha korekcemi, průmyslový standard pro **číslicové** obvody. Podrobně v tabulce:

|  | EKV | BSIM |
|---|---|---|
| ⭐ a) koncepce | **charge-based** – rovnice odvozené z náboje v kanálu; napětí vztažená k substrátu $\Rightarrow$ přirozená **symetrie** S/D | **threshold-voltage based** – napětí vztažená k source, spousta korekčních (fitting) funkcí; problémy se symetrií např. při $V_{DS} = 0$ |
| ⭐ b) obvody | **moderní analogové**, low-power; přesný ve slabé a střední inverzi | **rychlé spínací** (číslicové), hluboký submikron; přesný v silné inverzi |
| ⭐ c) spojitost | **jediná spojitá rovnice** od slabé po silnou inverzi i od lineární oblasti po saturaci; hladké derivace ($g_m$) | starší verze (BSIM3, BSIM4) – **rovnice pro různé oblasti propojené** vyhlazovacími funkcemi; nespojitosti vyšších derivací |
| ⭐ d) složitost | **desítky parametrů**, snadná extrakce | **stovky až tisíce parametrů**, náročná extrakce |

Novější BSIM (BSIM6, BSIM-CMG) už také přecházejí na nábojový přístup.

## ⭐ Koncepce pinch-off napětí v modelu EKV (přesněji definované jako potenciál kanálu, při kterém se <u>hustota inverzního náboje vyrovná hustotě náboje ochuzené oblasti</u>)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/EKVvsBSIMoverview26.pdf#page=4" target="_blank" rel="noopener">EKVvsBSIMoverview26.pdf, s. 4–5</a></small></p>

> **Odpověď:** Pinch-off napětí $V_P$ v EKV **není napětí mezi drainem a sourcem**, ale **potenciál kanálu** (vůči substrátu), při kterém se **hustota inverzního náboje vyrovná hustotě náboje ochuzené oblasti** (obrázek níže). Vyjadřuje, jak moc gate „otevřel“ kanál: $V_P \approx (V_G - V_{T0})/n$. Porovnáním $V_S$ a $V_D$ s $V_P$ model určí režim tranzistoru a díky tomu zůstává **symetrický** vůči source a drainu.

![Pinch-off napětí v EKV (schematicky, vlastní kresba): a) náboje podél kanálu – v bodě $V_P$ se vyrovnají, b) $V_P$ roste s napětím gatu se sklonem $1/n$](magistr/B2M31IASA/img/pinchoff.png)
*Pinch-off napětí v EKV (schematicky, vlastní kresba): a) náboje podél kanálu – v bodě $V_P$ se vyrovnají, b) $V_P$ roste s napětím gatu se sklonem $1/n$*

- **Režimy:** $V_S < V_P$ $\Rightarrow$ kanál je u source otevřený, teče dopředný proud $I_F$; $V_D < V_P$ $\Rightarrow$ otevřený i u drainu (teče i $I_R$). Když $V_D$ stoupne nad $V_P$, kanál se u drainu zaškrtí, $I_R$ je zanedbatelný $\Rightarrow$ **saturace**, $V_{D,\mathrm{sat}} = V_P - V_S$.
- $n$ je podprahový faktor sklonu (kapacitní dělič mezi gatem a kanálem), proto $V_P$ roste pomaleji než $V_G$.

**Po lopatě (N-MOSFET):**

- Substrát je typu P. Kladné napětí na gatu „odtlačí“ díry od povrchu – zůstanou tam **pevné záporné ionty akceptorů** (to je ochuzená oblast, náboj $Q_B$, nic se tam nehýbe). Při ještě větším napětí se k povrchu přitáhnou **volné elektrony** – vznikne N kanál v P substrátu (inverzní vrstva, náboj $Q_{inv}$, ten vede proud).
- Porovnávají se tedy **volné elektrony v kanálu** a **pevné ionty v ochuzené oblasti** – *ne* elektrony a díry (děr je u povrchu naopak skoro nula).
- $V_P$ **není napětí, které připojím na gate.** Napětí na gate je $V_G$ (to nastavím). $V_P$ je **napětí kanálu** (proti substrátu), při kterém se elektronů v kanálu udělá právě tolik, kolik je iontů v ochuzené oblasti. Pro dané $V_G$ je $V_P$ jedno konkrétní číslo, s větším $V_G$ roste.
- Představa: kanál je řeka elektronů. Kde je potenciál kanálu menší než $V_P$ (typicky u source), je řeka „hluboká“ – silná inverze. Kde je potenciál větší než $V_P$ (u drainu při velkém $V_{DS}$), řeka „vyschne“ na tenký pramínek – slabá inverze, kanál je zaškrcený. $V_P$ je hladina, kde se to láme.

## ⭐ Základní vztah pro dopředný proud v modelu EKV (jen vědět, že se podobně jako např. v modelu bipolárního tranzistoru určuje jako rozdíl dopředného a zpětného proudu, přičemž v rovnici pro dopředný proud se používá interpolační funkce s <u>ln a exp, která umožňuje automatický přechod do exponenciální závislosti v slabé inverzi a do kvadratické závislosti v silné inverzi</u>, aniž by docházelo k nespojitostem v transkonduktancím, což je velmi důležité pro návrh analogových obvodů)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/EKVvsBSIMoverview26.pdf#page=6" target="_blank" rel="noopener">EKVvsBSIMoverview26.pdf, s. 6</a></small></p>

> **Odpověď:** Proud drainu je (podobně jako u BJT) **rozdíl dopředného a zpětného proudu** $I_D = I_F - I_R$. Dopředný proud je $I_F = I_S\, i_f$ s interpolační funkcí

$$
i_f = \left[\ln\left(1 + e^{\frac{V_P - V_S}{2 U_T}}\right)\right]^2 ,
$$

která přechází **automaticky** do **exponenciální** závislosti ve slabé inverzi a do **kvadratické** v silné inverzi – **bez nespojitostí v transkonduktanci**, což je důležité pro analogový návrh.

| Veličina | Význam |
|---|---|
| $I_S = 2 n \mu C_{ox} U_T^2 \frac{W}{L}$ | specifický (normalizační) proud |
| $n$ | faktor strmosti podprahové oblasti |
| $\mu$, $C_{ox}$ | pohyblivost nosičů, kapacita oxidu na plochu |
| $U_T = kT/q$ | teplotní napětí ($\approx 26$ mV), v EKV se značí $U_T$ |
| $V_S$, $V_P$ | napětí source vůči substrátu, pinch-off napětí (5.11) |
| $I_R$ | stejný tvar, jen místo $V_S$ je $V_D$ |

Limity funkce: pro $x \ll 0$ (slabá inverze) $\ln^2(1+e^x) \to e^{2x}$ (exponenciála), pro $x \gg 0$ (silná inverze) $\to x^2$ (kvadratická).
