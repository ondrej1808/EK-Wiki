# 4 Model MESFET

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf</a></small></p>

## Univerzální model použitelný i pro reprezentaci pHEMT

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=3" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 3–4</a></small></p>

> **Odpověď:** Hlavní zdroj proudu modelu je $I_D = \beta (V_{gs} - V_{T1})^{n_2}(1 + \lambda V_{ds})\tanh(\alpha V_{ds})$ (obrázek níže). Obecný exponent $n_2$ (místo pevné kvadratické závislosti) a funkce $\tanh$ (plynulý přechod lineární $\to$ saturační oblast) dělají model dost pružný, takže **tytéž vztahy lze použít i pro pHEMT**.

<div style="display:flex;gap:12px;align-items:flex-end;justify-content:space-between"><figure style="flex:0 1 48%;min-width:0;margin:0"><img src="magistr/B2M31IASA/img/mesfet_model.png" alt="" style="width:100%"><figcaption style="text-align:center;font-size:.9em"><em>Náhradní obvod</em></figcaption></figure><figure style="flex:0 1 48%;min-width:0;margin:0"><img src="magistr/B2M31IASA/img/mesfet_staticke.png" alt="" style="width:100%"><figcaption style="text-align:center;font-size:.9em"><em>Rovnice statické části</em></figcaption></figure></div>

*Model MESFET (MESFET-Delay-Dispersion, s. 3–4)*

Pro inverzní mód ($V_{ds} < 0$) platí obdobné vztahy (záměna $V_{gs} \leftrightarrow V_{gd}$).

## ⭐ <u>Způsob modelování kmitočtové disperze charakteristik</u> dodatečným řízeným proudovým zdrojem (*není třeba* znát celý model, jen vyložit část modelování disperze)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=3" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 3</a></small></p>

![Část modelu MESFET pro disperzi charakteristik](magistr/B2M31IASA/img/mesfet_disperze.png)
*Část modelu MESFET pro disperzi charakteristik*

- Charakteristiky (výstupní vodivost, transkonduktance) jsou pro **DC jiné než na vysokých kmitočtech** – kmitočtová disperze.
- K hlavnímu zdroji $I_d$ je paralelně přidán **dodatečný řízený zdroj $I_d'$** s odporem $R_d'$, připojený přes **kapacitu $C_d'$**.
- **DC:** $C_d'$ rozpojená $\Rightarrow$ větev se neuplatní, platí statické charakteristiky.
- **VF:** $C_d'$ zkratuje $\Rightarrow$ $I_d'$ upraví proud na vf hodnoty. Přechod mezi oběma stavy určuje časová konstanta $R_d' C_d'$.

## Závislost prahového napětí na napětí drain-source typická pro mikrovlnné tranzistory (podobná vlastnost jako u MOSFET)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=4" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 4</a></small></p>

$$
V_{T1} = V_{T0} - \sigma V_{ds}
$$

- Prahové napětí **klesá s rostoucím $V_{ds}$** (parametr $\sigma$) – u krátkého kanálu drain ovlivňuje potenciálovou bariéru v kanálu (obdoba DIBL u MOSFET).
- Projevuje se jako zvýšená výstupní vodivost v saturaci. Stejný princip (parametr $\sigma$) je použit u MOSFET, viz .

## Příklady výstupních charakteristik MESFET nebo pHEMT, oblast negativní diferenciální vodivosti

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=5" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 5–6</a></small></p>

> **Odpověď:** Výstupní charakteristiky MESFET/pHEMT mají strmý lineární náběh a pak saturační oblast. **Oblast záporné diferenciální vodivosti** je ta část saturace, kde proud $I_D$ **s rostoucím $V_{DS}$ klesá** ($\partial I_D/\partial V_{DS} < 0$) – u pHEMT na obrázku níže u horních křivek ($V_{GS} = 0{,}5$ a $0$ V) za maximem při $V_{DS} \approx 2$ V (červeně). V modelu ji umožní záporné $\lambda$.

![Výstupní charakteristiky pHEMT (MESFET-Delay-Dispersion, s. 6) – vyznačena oblast záporné diferenciální vodivosti](magistr/B2M31IASA/img/mesfet_phemt_ndr.png)
*Výstupní charakteristiky pHEMT (MESFET-Delay-Dispersion, s. 6) – vyznačena oblast záporné diferenciální vodivosti*

Příčinou poklesu je hlavně *samoohřev* (vyšší ztrátový výkon $\Rightarrow$ vyšší teplota $\Rightarrow$ nižší pohyblivost) a jevy pastí.

## ⭐ <u>Typický tvar napěťové závislosti kapacit MESFET</u> a mikrovlnných varaktorů … samozřejmě není nutné znát složité vztahy, stačí charakterizovat obrázkem

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=8" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 8–10</a></small></p>

> **Odpověď:** Kapacity gate-source a gate-drain mají **lomený průběh** (obrázek níže): pod prahem malá, téměř konstantní kapacita, kolem prahu **skok**, nad prahem roste jako u Schottkyho přechodu. Stejný tvar mají mikrovlnné varaktory.

![Typický tvar napěťových závislostí kapacit gate-source a gate-drain MESFET](magistr/B2M31IASA/img/mesfet_kapacity.png)
*Typický tvar napěťových závislostí kapacit gate-source a gate-drain MESFET*

- Kapacity gate-source a gate-drain mají **charakteristický lomený průběh**: pod prahem (kanál zaškrcen, $V_g < V_A$) malá, téměř konstantní kapacita, v přechodové oblasti $V_A$–$V_B$ ($V_A = V_{T1} - 0{,}15$ V, $V_B = V_{T1} + 0{,}08$ V) **skok**, nad prahem rostoucí kapacita jako u Schottkyho přechodu $\sim (1 - V_g/\phi_0)^{-m}$.
- Podobný průběh mají i **mikrovlnné varaktory** $\Rightarrow$ lze je popsat stejnými funkcemi.
- *Nepoužívat simulátory, které nemají tyto zalomené charakteristiky!*

## <del>Metodika modelování zpoždění mikrovlnných tranzistorů Besselovou funkcí (jde o stejnou funkci a stejný přístup jako byl u modelování zpoždění mikrovlnných BJT)</del>
