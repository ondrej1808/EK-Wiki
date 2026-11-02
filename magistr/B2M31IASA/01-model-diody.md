# 1 Model diody

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf" target="_blank" rel="noopener">Diode6.pdf</a></small></p>

## Shockleyův vztah pro proud přechodem PN, modifikace s emisním činitelem

$$
i_{1, Shockley}=I_S(e^{\frac{q_{e}v_{AC}}{kT}}-1)
$$

$$
v_t = \frac{q}{kT}
$$

$$
i_{1, Shockley}=I_S(e^{\frac{v_{AC}}{nv_t}}-1)
$$

n je emisní koeficient.  $v_{ac}$ je napětí anoda-katoda.

## ⭐ <u>Linearizace ampérvoltové charakteristiky diody</u> (včetně Zenerova nedestruktivního průrazu, stačí znát obrázek)

![Linearizace diody se vším všudy](magistr/B2M31IASA/img/linearizace_diody.png)
*Linearizace diody se vším všudy*

## Metodika stanovení proudu přechodem PN v nových verzích programu PSpice (rozdíl přímého a zpětného proudu, znát jen princip, ne konkrétní složité vztahy)

$$
i_1=i_{1F}-i_{1R}
$$

Modelujeme diodu pomocí přímého a zpětného proudu. Přímý proud $i_{1F}$ je daný generací a rekombinací elektronů s děrami. Zpětný proud $i_{1R}$ je daný vztahy lavinové ionizace.

## Fyzikální princip difúzní kapacity, matematický vztah (v integrálním tvaru)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=16" target="_blank" rel="noopener">Diode6.pdf, s. 16–17</a></small></p>

Fyzikálně je způsobena setrvačností nahromaděných nosičů náboje (elektrony a díry). Při propustném směru se v okolí přechodu hromadí minoritní nosiče. Když se změní napětí, tento náboj se nestihne okamžitě přizpůsobit, a proto se přechod chová jako kapacita. Uplatní se hlavně v propustném směru, protože je úměrná proudu.

$$q_d=\tau_d i_1$$ $\tau_d$ je průletová doba – **průměrná doba, za kterou injektovaný minoritní nosič zrekombinuje**; $i_1$ je proud diodou ze Shockleyho vzorečku.

**Průletová doba $\tau_d$** (u BJT $\tau_F$) je průměrná doba, kterou injektovaný minoritní nosič „přežije“ v oblasti za přechodem, než zrekombinuje (u BJT: než projde bází do kolektoru). Čím déle tam nosiče vydrží, tím víc se jich při daném proudu nahromadí $\Rightarrow$ $Q_d = \tau_d\, i_1$ je větší $\Rightarrow$ větší difúzní kapacita a pomalejší dioda.

![Vznik difúzní kapacity: při propustném napětí se za přechodem hromadí minoritní nosiče (náboj $Q_d$). Kmitá-li napětí, musí se tento náboj dobíjet a vybíjet $\Rightarrow$ kapacita $C_d = dQ_d/dv_{AC}$ (ve wiki jako animace)](magistr/B2M31IASA/img/difuzni_kapacita.gif)
*Vznik difúzní kapacity: při propustném napětí se za přechodem hromadí minoritní nosiče (náboj $Q_d$). Kmitá-li napětí, musí se tento náboj dobíjet a vybíjet $\Rightarrow$ kapacita $C_d = dQ_d/dv_{AC}$ (ve wiki jako animace)*

## Fyzikální princip bariérové kapacity, matematický vztah, tři parametry modelu (v diferenciálním tvaru, komplikovaný integrální tvar uveden jen pro informaci)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=18" target="_blank" rel="noopener">Diode6.pdf, s. 18–20</a></small></p>

Fyzikálně je způsobena vyprázdněnou oblastí v okolí přechodu PN. Uplatní se při každém napětí $v_{AC} < \phi_0$ – vyprázdněná oblast tam existuje a s rostoucím napětím se zužuje (kapacita roste). Hlavně v **závěrném směru** (P na $-$, N na $+$), kde je jediná (difúzní kapacita je tam prakticky nulová). V propustném směru ji při větším proudu přebije difúzní kapacita.

$$
dq_b=c_b dv_{AC}
$$

$$
c_b = \frac{C_{J0}}{\left(1 - \frac{v_{AC}}{\phi_0}\right)^m}
$$

**Tři parametry modelu:**

- $C_{J0}$ – bariérová kapacita při nulovém napětí,
- $\phi_0$ – **difúzní (vestavěné) napětí přechodu** (v SPICE `VJ`, u Si typicky 0{,}6–0{,}8 V),
- $m$ – exponent (gradient) přechodu: $\frac12$ pro strmý (abruptní), $\frac13$ pro pozvolný (lineární) přechod.

**Co je $\phi_0$:** po spojení P a N se elektrony a díry difúzí přelijí přes přechod a zrekombinují. Po obou stranách zůstanou nevykompenzované pevné ionty (vyprázdněná oblast), které vytvoří vnitřní elektrické pole – potenciálovou bariéru o velikosti $\phi_0$. Ta další difúzi zastaví (rovnováha). Ve vzorci je $\phi_0$ napětí, při kterém by vyprázdněná oblast zmizela a $c_b \to \infty$ – proto se kapacita od $F_C\phi_0$ linearizuje (otázka 1.6). S rostoucí teplotou $\phi_0$ klesá (otázka 1.7).

## ⭐ <u>Linearizace rovnic modelu bariérové kapacity</u> (znát obrázek)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=21" target="_blank" rel="noopener">Diode6.pdf, s. 21</a></small></p>

![Linearizace barierové kapacity](magistr/B2M31IASA/img/barierova_kapacita.png)
*Linearizace barierové kapacity*

## Teplotně závislé parametry modelu diody, problém Schottkyho diod (tj. jaká je implicitní hodnota parametru $X_{TI}$ a jaká je jeho hodnota pro Schottkyho diody)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=23" target="_blank" rel="noopener">Diode6.pdf, s. 23–26</a></small></p>

$I_S$, $\phi_0$,$C_{J0}$, idk nebudu zkoumat dál

## <del>Tři typy šumu v modelu diody, fyzikální příčiny, matematické vztahy pro spektrální výkonové hustoty</del>
