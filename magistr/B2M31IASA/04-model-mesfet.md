# 4 Model MESFET

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf</a></small></p>

## Univerzální model použitelný i pro reprezentaci pHEMT

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=3" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 3–4</a></small></p>

![Náhradní obvod modelu MESFET](magistr/B2M31IASA/img/mesfet_model.png)
*Náhradní obvod modelu MESFET*

![Rovnice statické části modelu MESFET](magistr/B2M31IASA/img/mesfet_staticke.png)
*Rovnice statické části modelu MESFET*

- Hlavní napěťově řízený proudový zdroj: $I_D = \beta (V_{gs} - V_{T1})^{n_2}(1 + \lambda V_{ds})\tanh(\alpha V_{ds})$ pro $V_{gs} > V_{T1}$, jinak $0$.
- Obecný exponent $n_2$ (místo pevné kvadratické závislosti) a funkce $\tanh$ (plynulý přechod lineární $\to$ saturační oblast) dělají model dostatečně pružný, takže **tytéž vztahy lze použít i pro přesné modelování pHEMT**.
- Pro inverzní mód ($V_{ds} < 0$) platí obdobné vztahy (záměna $V_{gs} \leftrightarrow V_{gd}$).

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

![Příklad identifikace parametrů modelu GaAsFET (výstupní charakteristiky)](magistr/B2M31IASA/img/mesfet_vystupni.png)
*Příklad identifikace parametrů modelu GaAsFET (výstupní charakteristiky)*

- Charakteristiky mají strmý lineární náběh (popsaný $\tanh(\alpha V_{ds})$) a saturační oblast.
- U pHEMT (a výkonových MESFET) může proud v saturaci s rostoucím $V_{ds}$ **klesat** – **negativní diferenciální vodivost** $\partial I_D / \partial V_{ds} < 0$. Příčinou je hlavně *samoohřev* (vyšší ztrátový výkon $\Rightarrow$ vyšší teplota $\Rightarrow$ nižší pohyblivost) a jevy pastí; v modelu záporné $\lambda$.

## ⭐ <u>Typický tvar napěťové závislosti kapacit MESFET</u> a mikrovlnných varaktorů … samozřejmě není nutné znát složité vztahy, stačí charakterizovat obrázkem

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=8" target="_blank" rel="noopener">MESFET-Delay-Dispersion-B2M31IASA26.pdf, s. 8–10</a></small></p>

![Typický tvar napěťových závislostí kapacit gate-source a gate-drain MESFET](magistr/B2M31IASA/img/mesfet_kapacity.png)
*Typický tvar napěťových závislostí kapacit gate-source a gate-drain MESFET*

- Kapacity gate-source a gate-drain mají **charakteristický lomený průběh**: pod prahem (kanál zaškrcen, $V_g < V_A$) malá, téměř konstantní kapacita, v přechodové oblasti $V_A$–$V_B$ ($V_A = V_{T1} - 0{,}15$ V, $V_B = V_{T1} + 0{,}08$ V) **skok**, nad prahem rostoucí kapacita jako u Schottkyho přechodu $\sim (1 - V_g/\phi_0)^{-m}$.
- Podobný průběh mají i **mikrovlnné varaktory** $\Rightarrow$ lze je popsat stejnými funkcemi.
- *Nepoužívat simulátory, které nemají tyto zalomené charakteristiky!*

## <del>Metodika modelování zpoždění mikrovlnných tranzistorů Besselovou funkcí (jde o stejnou funkci a stejný přístup jako byl u modelování zpoždění mikrovlnných BJT)</del>
