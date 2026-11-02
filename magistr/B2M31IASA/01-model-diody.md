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

$$q_d=\tau_d i_1$$ $\tau_d$ je průletová doba, $i_1$ je proud diodou ze Shockleyho vzorečku.

**Průletová doba $\tau_d$** (u BJT $\tau_F$) je průměrná doba, kterou injektovaný minoritní nosič „přežije“ v oblasti za přechodem, než zrekombinuje (u BJT: než projde bází do kolektoru). Čím déle tam nosiče vydrží, tím víc se jich při daném proudu nahromadí $\Rightarrow$ $Q_d = \tau_d\, i_1$ je větší $\Rightarrow$ větší difúzní kapacita a pomalejší dioda.

![Vznik difúzní kapacity: při propustném napětí se za přechodem hromadí minoritní nosiče (náboj $Q_d$). Kmitá-li napětí, musí se tento náboj dobíjet a vybíjet $\Rightarrow$ kapacita $C_d = dQ_d/dv_{AC}$ (ve wiki jako animace)](magistr/B2M31IASA/img/difuzni_kapacita.gif)
*Vznik difúzní kapacity: při propustném napětí se za přechodem hromadí minoritní nosiče (náboj $Q_d$). Kmitá-li napětí, musí se tento náboj dobíjet a vybíjet $\Rightarrow$ kapacita $C_d = dQ_d/dv_{AC}$ (ve wiki jako animace)*

## Fyzikální princip bariérové kapacity, matematický vztah, tři parametry modelu (v diferenciálním tvaru, komplikovaný integrální tvar uveden jen pro informaci)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=18" target="_blank" rel="noopener">Diode6.pdf, s. 18–20</a></small></p>

Fyzikálně je způsobena vyprázdněnou oblastí v okolí přechodu PN. Dioda je závěrně polarizovaná (P na - a N na +).

$$
dq_b=c_b dv_{AC}
$$

## ⭐ <u>Linearizace rovnic modelu bariérové kapacity</u> (znát obrázek)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=21" target="_blank" rel="noopener">Diode6.pdf, s. 21</a></small></p>

![Linearizace barierové kapacity](magistr/B2M31IASA/img/barierova_kapacita.png)
*Linearizace barierové kapacity*

## Teplotně závislé parametry modelu diody, problém Schottkyho diod (tj. jaká je implicitní hodnota parametru $X_{TI}$ a jaká je jeho hodnota pro Schottkyho diody)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/Diode6.pdf#page=23" target="_blank" rel="noopener">Diode6.pdf, s. 23–26</a></small></p>

$I_S$, $\phi_0$,$C_{J0}$, idk nebudu zkoumat dál

## <del>Tři typy šumu v modelu diody, fyzikální příčiny, matematické vztahy pro spektrální výkonové hustoty</del>
