# 3 Model JFET

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/JFET6.pdf" target="_blank" rel="noopener">JFET6.pdf</a></small></p>

## Náhradní zapojení modelu, základní parametry

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/JFET6.pdf#page=3" target="_blank" rel="noopener">JFET6.pdf, s. 2–3</a></small></p>

![Model tranzistoru JFET a jeho základní parametry](magistr/B2M31IASA/img/jfet_model.png)
*Model tranzistoru JFET a jeho základní parametry*

## ⭐ Výstupní charakteristiky (lineární a saturační oblast) a základní proudová rovnice (jen pro lineární oblast a pro případ $\gamma = 1$), umět <u>nakreslit charakteristiky JFET</u>

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/JFET6.pdf#page=6" target="_blank" rel="noopener">JFET6.pdf, s. 5–7</a></small></p>

![Základní proudová rovnice a výstupní charakteristiky JFET](magistr/B2M31IASA/img/jfet_vystupni.png)
*Základní proudová rovnice a výstupní charakteristiky JFET*

**Pro $\gamma = 1$ v lineární oblasti:**

$$
i_1 = (1+\lambda v_{\mathrm{DS}})\,\beta\left[2(v_{\mathrm{GS}} - V_T) - v_{\mathrm{DS}}\right] v_{\mathrm{DS}}
$$

- **Lineární oblast:** pro malé $v_{\mathrm{DS}}$ se tranzistor chová jako odpor řízený napětím $v_{\mathrm{GS}}$.
- **Saturace:** kanál je u drainu zaškrcen, proud už téměř neroste (jen mírný sklon daný $\lambda$).
- Hranice obou oblastí $v_{\mathrm{DS}} = v_{\mathrm{GS}} - V_T$ je parabola (červeně čárkovaně). Charakteristiky pro $v_{\mathrm{GS}} = 0$ a $v_{\mathrm{GS}} < 0$ – u N-JFET se proud záporným $v_{\mathrm{GS}}$ zmenšuje.

## Zvyklost zadávání prahového napětí (vědět o stále přetrvávající chybě v SPICE)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/JFET6.pdf#page=9" target="_blank" rel="noopener">JFET6.pdf, s. 8–10</a></small></p>

- Podle tradice programů SPICE je **prahové napětí $V_T$ zadáváno záporné pro N-kanálový i pro P-kanálový JFET**.

## ⭐ Teplotní vlastnosti, vědět, že je <u>JFET málo teplotně závislý a proč</u>, případně existence teplotně nezávislého bodu v charakteristikách

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/JFET6.pdf#page=14" target="_blank" rel="noopener">JFET6.pdf, s. 14–15</a></small></p>

![Teplotní závislosti modelu JFET](magistr/B2M31IASA/img/jfet_teplota.png)
*Teplotní závislosti modelu JFET*

$$
V_T' = V_T + \mathrm{vttc}\,(T' - T), \qquad
\beta' = \beta \cdot 1{,}01^{\,\mathrm{betatce}\,(T' - T)}
$$

- Se změnou teploty se mění **dva jevy**: *pohyblivost nosičů náboje* (s teplotou klesá $\Rightarrow$ proud klesá) a *průřez kanálu* (mění se šířka ochuzené oblasti přechodu gatu, tj. $V_T$ $\Rightarrow$ proud roste).
- Tyto jevy působí svým účinkem **proti sobě** $\Rightarrow$ <u>JFET je málo teplotně závislý</u>.
- V charakteristikách existuje **bod**, který je v relativně širokém intervalu teplot **teplotně nezávislý** – unikátní jev JFETu.

## <del>Šumový model, stačí znát osmitřetinový vztah pro šum kanálu</del>
