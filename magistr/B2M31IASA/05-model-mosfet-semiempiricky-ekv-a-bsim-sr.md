# 5 Model MOSFET (semiempirický, EKV a BSIM srovnání)

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf" target="_blank" rel="noopener">MOSFET6.pdf</a></small></p>

## ⭐ Technologická struktura MOSFET (<u>příčný řez MOSFET</u> s vyznačenými geometrickými parametry) a technologické parametry modelu MOSFET

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=4" target="_blank" rel="noopener">MOSFET6.pdf, s. 4</a></small></p>

![Příčný řez MOSFET s geometrickými parametry](magistr/B2M31IASA/img/mosfet_rez.png)
*Příčný řez MOSFET s geometrickými parametry*

- **Geometrické (neelektrické) parametry:** $L$ – délka hradla, $W$ – šířka kanálu, $t_{\mathrm{ox}}$ – tloušťka oxidu, $L_e$ – efektivní délka kanálu, $X_J$ – hloubka přechodu source/drain, $X_{JL}$ – laterální difúze (o kolik se S/D podsune pod hradlo, $L_e = L - 2X_{JL}$).
- **Technologické parametry:** např. $N_{SUB}$ (dotace substrátu), $N_{SS}$ (povrchová hustota stavů), $T_{PG}$ (typ hradla), $\mu_0$ (pohyblivost), $R_{SH}$ (vrstvový odpor).

## Model MOSFET, základní parametry modelu, náhradní obvod modelu

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=3" target="_blank" rel="noopener">MOSFET6.pdf, s. 2–3</a></small></p>

![Model tranzistoru MOSFET a jeho základní parametry](magistr/B2M31IASA/img/mosfet_model.png)
*Model tranzistoru MOSFET a jeho základní parametry*

## Dvojznačnost zadávání parametrů modelu MOSFET (dvojí) – jen princip, není třeba znát matematické vztahy (vědět jen, v čem může být problém při zadávání)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MOSFET6.pdf#page=5" target="_blank" rel="noopener">MOSFET6.pdf, s. 5–6</a></small></p>

![Dvojznačnost definic parametrů MOSFET](magistr/B2M31IASA/img/mosfet_dvojznacnost.png)
*Dvojznačnost definic parametrů MOSFET*

1. **Hodnota vs. hodnota na plochu:** např. $R_D$ lze zadat přímo, nebo jako vrstvový odpor $R_{SH}$ a počet čtverců $N_{RD}$ ($R_D = R_{SH} N_{RD}$).
1. **Elektrické vs. technologické parametry:** elektrické parametry ($K_P$, $V_{TO}$, $\varphi$, …) lze zadat přímo, nebo je simulátor *vypočítá* z technologických ($\mu_0$, $t_{\mathrm{ox}}$, $N_{SUB}$, $N_{SS}$, …).

**Problém:** když se zadají obě varianty (nebo jen část), není zřejmé, která má přednost – simulátor některé hodnoty tiše přepočítá/ignoruje, takže model nemusí dělat to, co uživatel čekal.

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

- Hradlo se chová jako deskový kondenzátor $C_{\mathrm{ox}} = \frac{\varepsilon_{\mathrm{ox}}}{t_{\mathrm{ox}}} L_e W$, kapacity jsou ale vysoce nelineární v závislosti na $v_{\mathrm{GS}}$.
- **Akumulace / pod prahem** ($V_{GS} < V_{\mathrm{on}}$): kanál není, $C_{GB} \approx C_{\mathrm{ox}}$, $C_{GS} = C_{GD} = 0$.
- **Saturace** ($0 < V_{GS} - V_{\mathrm{on}} < V_{DS}$): $C_{GB} \to 0$, $C_{GS} \approx \frac23 C_{\mathrm{ox}}$, $C_{GD} \approx 0$.
- **Lineární oblast** ($V_{GS} - V_{\mathrm{on}} > V_{DS}$): $C_{GS}$ a $C_{GD}$ se blíží $\frac12 C_{\mathrm{ox}}$.

## Vědět, že v „krátkokanálových“ modelech EKV a BSIM se používá nábojově řízený (Wardův) model hradlové kapacity (jeho rovnice jsme pro složitost nedefinovali, Wardovy rovnice jste dostali prostřednictvím poslané kapitoly z naší knihy)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Kapitola4.MOSFET.pdf" target="_blank" rel="noopener">Kapitola4.MOSFET.pdf</a></small></p>

Meyerův model počítá s kapacitami $C(v)$ a *nezachovává náboj*. V EKV a BSIM se proto používá **nábojově řízený Wardův model** – modelují se přímo náboje hradla, kanálu a substrátu ($q_G$, $q_D$, $q_S$, $q_B$, dělení náboje kanálu mezi D a S) a proudy jsou jejich časové derivace $\Rightarrow$ zachování náboje (obdoba integrální formulace u diody).

## Základní odlišnosti modelů EKV a BSIM (dokázat jednoduše slovně vysvětlit)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/EKVvsBSIMiasa26.pdf" target="_blank" rel="noopener">EKVvsBSIMiasa26.pdf</a></small></p>

### ⭐ Koncepce výstavby modelu (<u>charge-based vs. threshold-voltage based</u>)

EKV vychází z **náboje** inverzní vrstvy (proud jako funkce náboje), BSIM vychází z **prahového napětí** (klasický přístup $v_{\mathrm{GS}} - V_T$ s mnoha korekcemi).

### ⭐ Pro jaké typy obvodů jsou spíše modely EKV a BSIM vhodné (zjednodušeně řečeno <u>moderní analogové vs. rychlé spínací</u>)

EKV – **moderní analogové** obvody (nízké napětí, slabá a střední inverze, přesné $g_m/I_D$). BSIM – **rychlé spínací** (číslicové) obvody v silné inverzi.

### ⭐ Spojitost rovnic (<u>jediná spojitá rovnice vs. matematicky propojené rovnice pro různé oblasti funkce</u>)

EKV má **jedinou spojitou rovnici** pro všechny oblasti (slabá $\to$ silná inverze, lineární $\to$ saturace). BSIM má **samostatné rovnice pro jednotlivé oblasti**, které jsou matematicky propojeny (vyhlazovacími funkcemi).

### ⭐ Složitost modelu (<u>desítky parametrů vs. stovky parametrů</u>)

EKV – **desítky parametrů** (fyzikálně názorné), BSIM – **stovky parametrů** (empirické, náročná identifikace).

## ⭐ Koncepce pinch-off napětí v modelu EKV (přesněji definované jako potenciál kanálu, při kterém se <u>hustota inverzního náboje vyrovná hustotě náboje ochuzené oblasti</u>)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/ekv_v262.pdf" target="_blank" rel="noopener">ekv_v262.pdf</a></small></p>

Pinch-off napětí $V_P$ je **potenciál kanálu**, při kterém je hustota inverzního náboje rovna hustotě náboje ochuzené oblasti (hranice slabé a silné inverze). Přibližně $V_P \approx (V_G - V_{T0})/n$, kde $n$ je faktor sklonu. Všechna napětí se v EKV vztahují k substrátu (bulk) – model je symetrický vůči S a D.

![Pinch-off napětí v EKV (schematicky): a) náboje podél kanálu – v bodě $V_P$ se vyrovnají, b) $V_P$ roste s napětím hradla se sklonem $1/n$](magistr/B2M31IASA/img/pinchoff.png)
*Pinch-off napětí v EKV (schematicky): a) náboje podél kanálu – v bodě $V_P$ se vyrovnají, b) $V_P$ roste s napětím hradla se sklonem $1/n$*

- **a)** Když roste potenciál kanálu $V_{ch}$ (např. směrem k drainu), inverzní náboj (elektrony, které vedou proud) **ubývá**, kdežto náboj ochuzené oblasti **mírně přibývá**. Bod, kde jsou si rovny, je $V_P$. Vlevo od něj je silná inverze (vodivý kanál), vpravo slabá inverze (kanál prakticky zaškrcený).
- **b)** $V_P$ vyjadřuje, jak moc hradlo „otevřelo“ kanál: začíná od prahového napětí $V_{T0}$ a roste pomaleji než $V_G$ (sklon $1/n$, $n \approx 1{,}2$–$1{,}5$), protože část napětí hradla „spotřebuje“ ochuzená oblast.
- Režim tranzistoru EKV určí porovnáním $V_S$ a $V_D$ s $V_P$: oba menší než $V_P$ $\Rightarrow$ silná inverze (lineární oblast), $V_S < V_P < V_D$ $\Rightarrow$ saturace, oba větší $\Rightarrow$ slabá inverze.

## ⭐ Základní vztah pro dopředný proud v modelu EKV (jen vědět, že se podobně jako např. v modelu bipolárního tranzistoru určuje jako rozdíl dopředného a zpětného proudu, přičemž v rovnici pro dopředný proud se používá interpolační funkce s <u>ln a exp, která umožňuje automatický přechod do exponenciální závislosti v slabé inverzi a do kvadratické závislosti v silné inverzi</u>, aniž by docházelo k nespojitostem v transkonduktancím, což je velmi důležité pro návrh analogových obvodů)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/ekv_v262.pdf" target="_blank" rel="noopener">ekv_v262.pdf</a></small></p>

$$
I_D = I_F - I_R, \qquad
I_{F(R)} = I_S \ln^2\!\left[1 + e^{\frac{V_P - V_{S(D)}}{2 v_T}}\right]
$$

- Proud je rozdíl **dopředného** $I_F$ (řízen $V_S$) a **zpětného** $I_R$ (řízen $V_D$) proudu – obdoba Ebersova–Mollova modelu BJT.
- Interpolační funkce $\ln^2(1 + e^x)$: pro $x \ll 0$ (slabá inverze) $\to e^{x}$ – **exponenciální**, pro $x \gg 0$ (silná inverze) $\to x^2/4$ – **kvadratická** závislost.
- Přechod je hladký, bez nespojitostí v $g_m$ – důležité pro analogový návrh.
