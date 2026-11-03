# 6 Přesnost modelů – praktické charakterizace

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/EKVvsBSIMoverview26.pdf" target="_blank" rel="noopener">EKVvsBSIMoverview26.pdf</a></small></p>

Z mnoha předvedených praktických charakterizací (včetně cenného podrobného srovnání EKV a BSIM v ON Semiconductor) si jen odnést jakousi představu, s jakou přesností aktuální nelineární modely elektronické prvky reprezentují a v kterých částech charakteristik bývají větší chyby (např. u bipolárního tranzistoru v oblasti kvazisaturace apod.)

> **Odpověď:** Identifikované modely odpovídají měření typicky s **rms chybou jednotek procent**, maximální odchylka $\delta_{\max}$ bývá **desítky procent**. **Kapacity přechodů** se modelují velmi přesně (rms $\approx$ 2–3 %). **Větší chyby** bývají u BJT v **oblasti kvazisaturace** (pokud ji model nemá), u **průletové doby**, u **výkonových** MOSFET, u JFET v **počátku** charakteristik a u MOSFET ve **výstupní vodivosti** $g_{DS}$ v saturaci.

$\text{rms} = \sqrt{\frac{1}{n_p}\sum_i \left(\frac{y_i^{(\mathrm{ident})} - y_i^{(\mathrm{meas})}}{y_i^{(\mathrm{meas})}}\right)^2} \cdot 100\,\%$, \quad $\delta_{\max} = \max_i \left|\frac{y_i^{(\mathrm{ident})} - y_i^{(\mathrm{meas})}}{y_i^{(\mathrm{meas})}}\right| \cdot 100\,\%$ (relativní odchylky identifikovaného modelu od měření).

| Prvek | Charakteristika (součástka) | rms | $\delta_{\max}$ | Kde / proč větší chyby |
|---|---|---|---|---|
| dioda | V-A charakteristika | 13 % | 26,3 % | – |
| BJT | výstupní DC, KC508, *bez* kvazisaturace | 9,61 % | 43,1 % | **oblast kvazisaturace** |
|  | výstupní DC, KC508, *s* kvazisaturací | 3,51 % | 14,9 % | doplnění kvazisaturace chybu výrazně sníží |
|  | inverzní DC, KC508 | 4,85 % | 20,0 % | bez kvazisaturace |
|  | vstupní DC ($i_B$), KC508 | 13,5 % | 35,0 % | – |
|  | kapacity přechodů E, C | 1,6 % | 2,7 % | velmi přesné |
|  | průletová doba (přechodový děj) | 31,8 % | 94,4 % | **velká** – „svislá“ míra chyby na strmých hranách |
|  | výstupní DC, mikrovlnný KT391 | 16,0 % | 61,7 % | oscilace při měření; ve stabilní oblasti 5,99 % / 22,2 % |
| MOSFET | PMOS 2N3608 (indukovaný kanál) | 2,18 % | 5,41 % | nejpřesnější |
|  | výkonový NMOS BUZ345 | 8,67 % | 28,8 % | **výkonové prvky** – větší chyby |
|  | NMOS KF521 (zabudovaný kanál) | 4,06 % | 14,5 % | – |
|  | kapacity S, D (KF521) | 2,7–3,2 % | 4,4–6,9 % | přesné |
|  | EKV vs. BSIM (ON Semi.) | \multicolumn{2}{l}{jen grafy} | obě $I_D$ dobře; největší rozdíly v $g_{DS}$ v saturaci$^{*}$ |
| JFET | výstupní DC, PJFET 2N2498 | 10,4 % | 42,4 % | **počátek** charakteristik (malé $v_{DS}$) |
| MESFET | výstupní DC, GaAsFET | 2,73 % | 8 % | – |
|  | výstupní DC, pHEMT | 2,38 % | 8,24 % | – |
|  | kapacita varaktoru (gate) | 4,52 % | 13,7 % | oblast skoku kapacity |
|  | kapacita varaktoru (source) | 4 % | 6,87 % | – |

{ $^{*}$ odečteno z grafů (u srovnání EKV/BSIM nejsou uvedena čísla). U „oblast skoku kapacity“ jde také o odhad z grafu.}

*Zdroje:* [optimizationIASAen26.p4.pdf, s. 12–24](magistr/B2M31IASA/pdf/optimizationIASAen26.p4.pdf#page=12) (BJT, MOSFET, JFET); [Diode6.pdf, s. 30](magistr/B2M31IASA/pdf/Diode6.pdf#page=30) (dioda); [MESFET-Delay-Dispersion, s. 5–10](magistr/B2M31IASA/pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf#page=5) (MESFET, pHEMT, varaktory); [EKVvsBSIMiasa26.pdf, s. 5–8](magistr/B2M31IASA/pdf/EKVvsBSIMiasa26.pdf#page=5) (EKV vs. BSIM).
