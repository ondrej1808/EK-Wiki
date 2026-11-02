# 2 Model bipolárního tranzistoru

> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). <del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf" target="_blank" rel="noopener">BJT6.pdf</a></small></p>

## Základní prvky (jen jádro) modelu bipolárního tranzistoru (jádro modelu je dáno proudy $i_1$ až $i_9$, toto jádro je společné všem hlavním programům typu SPICE)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=2" target="_blank" rel="noopener">BJT6.pdf, s. 2</a></small></p>

<div style="display:flex;gap:12px;align-items:flex-end;justify-content:space-between"><figure style="flex:0 1 56%;min-width:0;margin:0"><img src="magistr/B2M31IASA/img/bjt_jadro.png" alt="" style="width:100%"><figcaption style="text-align:center;font-size:.9em"><em>Celý model (BJT6.pdf, s. 2)</em></figcaption></figure><figure style="flex:0 1 40%;min-width:0;margin:0"><img src="magistr/B2M31IASA/img/bjt_jadro_only.png" alt="" style="width:100%"><figcaption style="text-align:center;font-size:.9em"><em>Jen jádro ($i_1$–$i_9$), tranzistor NPN</em></figcaption></figure></div>

*Model BJT – jádro, kvazisaturační a substrátová část*

| Proud | Prvek | Popis |
|---|---|---|
| $i_1$ | dioda b–e | přechod báze-emitor, $i_1 = \frac{i_f}{\beta_F} + i_e$ |
| $i_2$ | dioda b–c | přechod báze-kolektor, $i_2 = \frac{i_r}{\beta_R} + i_c$ |
| $i_3$ | řízený zdroj c–e | **hlavní zdroj** (zesílení), $i_3 = k_i k_v (i_f - i_r)$ |
| $i_4$ | odpor $r_b$ (B–b) | bázový odpor, závisí na proudu báze |
| $i_5$ | odpor $r_C$ (C–c) | sériový odpor kolektoru |
| $i_6$ | odpor $r_E$ (E–e) | sériový odpor emitoru |
| $i_7$ | kapacita b–e | bariérová + difúzní kapacita přechodu B-E |
| $i_8$ | kapacita b–c | vnitřní část kapacity B-C (podíl $X_{CJC}$) |
| $i_9$ | kapacita B–c | vnější část kapacity B-C ($1 - X_{CJC}$) |

Nakreslené jádro je pro tranzistor **NPN** (diody mají anodu na bázi). U PNP jsou obě diody i směr zdroje $i_3$ obrácené (na slidu naznačeno vedle diod). Kvazisaturační část ($i_{12}$–$i_{14}$) a substrátová část ($i_{10}$, $i_{11}$) jsou doplňky, které jádro rozšiřují.

## Základní vztah pro proud hlavním řízeným proudovým zdrojem modelu

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=6" target="_blank" rel="noopener">BJT6.pdf, s. 6–8</a></small></p>

$$
\boldsymbol{i_3 = k_i\,k_v\,(i_f - i_r)}
$$

Proud hlavního zdroje je **rozdíl dopředného $i_f$ a zpětného $i_r$ proudu**, upravený dvěma korekčními činiteli $k_i$ a $k_v$.

| Veličina | Vzorec | Význam |
|---|---|---|
| $i_f$ | $\boldsymbol{I_S\left(e^{\frac{v_{\mathrm{be}}}{n_F v_T}} - 1\right)}$ | dopředný proud (řízen $v_{\mathrm{be}}$) |
| $i_r$ | $I_S\left(e^{\frac{v_{\mathrm{bc}}}{n_R v_T}} - 1\right)$ | zpětný proud (řízen $v_{\mathrm{bc}}$) |
| $k_i$ | $\dfrac{2}{1 + \left[1 + 4\left(\frac{i_f}{I_{KF}} + \frac{i_r}{I_{KR}}\right)\right]^{n_K}}$ | pokles zesílení při velkých proudech; při malých $k_i \approx 1$ |
| $k_v$ | $1 - \frac{v_{\mathrm{be}}}{V_{AR}} - \frac{v_{\mathrm{bc}}}{V_{AF}}$ | sklon výstupních charakteristik (Earlyho jev) |
| $I_S$ |  | saturační proud |
| $n_F$, $n_R$ |  | emisní koeficienty (dopředný, zpětný) |
| $v_T$ | $kT/q$ | teplotní napětí ($\approx 26$ mV) |
| $I_{KF}$, $I_{KR}$ |  | zlomové proudy („knee“) – začátek vysoké injekce |
| $n_K$ |  | exponent poklesu zesílení ($\approx 0{,}5$) |
| $V_{AF}$, $V_{AR}$ |  | Earlyho napětí (dopředné, zpětné) |

Proudy diod jádra: $i_1 = \frac{i_f}{\beta_F} + i_e$, \quad $i_2 = \frac{i_r}{\beta_R} + i_c$.

![Základní statické proudy modelu BJT (BJT6.pdf, s. 7)](magistr/B2M31IASA/img/bjt_rovnice.png)
*Základní statické proudy modelu BJT (BJT6.pdf, s. 7)*

## Mechanismus poklesu zesílení bipolárního tranzistoru při malém proudu kolektorem (stačí vyložit pojem „svodový“ (leakage) proud)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=9" target="_blank" rel="noopener">BJT6.pdf, s. 9, 13</a></small></p>

![Pokles zesílení při malých proudech – užitečná část proudu báze $i_f/\beta_F$ vs. svodový proud $i_e$](magistr/B2M31IASA/img/bjt_svodovy.png)
*Pokles zesílení při malých proudech – užitečná část proudu báze $i_f/\beta_F$ vs. svodový proud $i_e$*

- Proud báze má dvě složky: **užitečnou** $i_f/\beta_F$ (souvisí s proudem kolektoru) a **svodovou (leakage)** $i_e = I_{SE}\left(e^{\frac{v_{\mathrm{be}}}{n_E v_T}} - 1\right)$ – rekombinace v přechodu báze-emitor, která do kolektoru vůbec nedoteče.
- Svodový proud má emisní koeficient $n_E \approx 2$, roste tedy s napětím *pomaleji* než užitečný proud ($n_F \approx 1$).
- **Velké proudy** (0{,}8 V): $i_e = 527$ nA $\ll i_f/\beta_F = 278\,\mu$A $\Rightarrow$ svod je zanedbatelný, $\beta$ plné.
- **Malé proudy** (0{,}4 V): $i_e = 230$ pA $>$ $i_f/\beta_F = 52{,}7$ pA $\Rightarrow$ většinu proudu báze tvoří svod, kolektorový proud je proti němu malý $\Rightarrow$ **zesílení $\beta = i_C/i_B$ klesá**.

## ⭐ Mechanismus poklesu zesílení bipolárního tranzistoru při velkém proudu kolektorem (znát obrázek „<u>Závislost logaritmu bázového a kolektotvého proudu…</u>“, stačí znát jen přibližné číselné hodnoty pro směrnice (1 a $\frac{1}{2}$))

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=10" target="_blank" rel="noopener">BJT6.pdf, s. 10, 12</a></small></p>

![Závislost logaritmu bázového a kolektorového proudu na $v_{\mathrm{BE}}/v_T$](magistr/B2M31IASA/img/bjt_lnIB_lnIC.png)
*Závislost logaritmu bázového a kolektorového proudu na $v_{\mathrm{BE}}/v_T$*

**Vysvětlení:** V grafu $\ln i$ vs. $v_{\mathrm{BE}}/v_T$ odpovídá exponenciála $e^{v_{\mathrm{BE}}/(n v_T)}$ přímce se směrnicí $1/n$.

- **Střední proudy:** $i_C$ i $i_B$ rostou se stejnou směrnicí $1/n_F \approx 1$ (ideální stav, $n_F \approx 1$). Přímky jsou rovnoběžné, jejich vzdálenost je $\ln\beta_F$, takže zesílení je konstantní.
- **Velké proudy** (nad $\approx I_{KF}$, *knee current*): nastává *vysoká injekce* – koncentrace injektovaných minoritních nosičů v bázi je srovnatelná s dotací báze. Kolektorový proud pak roste pomaleji, směrnice klesne na $(1-n_K)/n_F \approx \frac{1}{2}$ (pro $n_K \approx 0{,}5$), tj. $i_C \sim e^{v_{\mathrm{BE}}/2v_T}$.
- Bázový proud ale dál roste se směrnicí $1/n_F \approx 1$ $\Rightarrow$ přímky se přibližují, poměr $\beta = i_C/i_B$ **klesá**.
- (Pro úplnost: při *malých* proudech má $i_B$ směrnici $1/n_E \approx \frac{1}{2}$ kvůli svodovému/rekombinačnímu proudu, $n_E \approx 2$ – proto zesílení klesá i tam.)

Stručně: *směrnice $i_C$ se při velkém proudu zlomí z 1 na $\frac12$ (vysoká injekce), $i_B$ zůstává na 1 $\Rightarrow$ $\beta$ klesá.*

## ⭐ Závislost zesílení bipolárního tranzistoru na přímém proudu, znát obrázek „<u>Závislost logaritmu proudového zesílení…</u>“, opět stačí jen přibližné číselné hodnoty směrnic, tj. $\frac{1}{2}$ a $-1$)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=11" target="_blank" rel="noopener">BJT6.pdf, s. 11</a></small></p>

![Závislost logaritmu proudového zesílení na logaritmu kolektorového proudu](magistr/B2M31IASA/img/bjt_ln_beta.png)
*Závislost logaritmu proudového zesílení na logaritmu kolektorového proudu*

## ⭐ <u>Výstupní charakteristiky tranzistoru</u>, Earlyho napětí, detail počátku (kde charakteristiky začínají?)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=14" target="_blank" rel="noopener">BJT6.pdf, s. 14</a></small></p>

![Výstupní charakteristiky tranzistoru a Earlyho napětí](magistr/B2M31IASA/img/bjt_vystupni_early.png)
*Výstupní charakteristiky tranzistoru a Earlyho napětí*

**Vysvětlení:**

- **Výstupní charakteristiky** $i_C = f(v_{\mathrm{CE}})$ pro různé $i_B$ (parametr): po strmém náběhu (saturace) přejdou do aktivní oblasti, kde $i_C \approx \beta_F i_B$ jen mírně roste s $v_{\mathrm{CE}}$.
- **Earlyho napětí $V_{AF}$:** mírný sklon je způsoben modulací šířky báze (s rostoucím $v_{\mathrm{CB}}$ se rozšiřuje ochuzená oblast kolektorového přechodu a efektivní báze se zužuje $\Rightarrow$ $i_C$ roste). Prodloužené přímkové části všech charakteristik se protnou v jednom bodě na záporné ose $v_{\mathrm{CE}}$ v $-V_{AF}$. V modelu činitel $k_v = 1 - \frac{v_{\mathrm{be}}}{V_{AR}} - \frac{v_{\mathrm{bc}}}{V_{AF}}$.
- **Detail počátku:** charakteristiky *nezačínají přesně v nule* – při $v_{\mathrm{CE}} = 0$ jsou oba přechody otevřené a teče záporný (zpětný) kolektorový proud, nulou $i_C$ prochází až při malém kladném $v_{\mathrm{CE}}$ (řádově desítky mV, tzv. offsetové napětí).

## ⭐ Závislost bázového odporu na proudu báze (znát obrázek „<u>Proudová závislost bázové rezistance</u>“, tři parametry modelu, složitý vzorec samozřejmě není nutný)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=15" target="_blank" rel="noopener">BJT6.pdf, s. 15–18</a></small></p>

![Proudová závislost bázové rezistance](magistr/B2M31IASA/img/bjt_rb_iB.png)
*Proudová závislost bázové rezistance*

**Vysvětlení:**

- Bázový odpor $r_b$ **klesá s rostoucím proudem báze** – příčinou je *vytlačování proudu k okraji emitoru* (current crowding): úbytek na bázovém odporu způsobí, že se emitor otevírá hlavně na okrajích u bázového kontaktu, proud teče kratší cestou bází $\Rightarrow$ efektivní odpor je menší.
- **Tři parametry modelu:**
    - $r_B$ – odpor báze při nulovém (malém) proudu (maximální hodnota),
    - $r_{Bm}$ – minimální odpor báze při velkém proudu (asymptota),
    - $I_{rB}$ – proud, při kterém $r_b$ klesne zhruba na průměr $\frac{r_B + r_{Bm}}{2}$.
- Průběh tedy monotónně klesá z $r_B$ k $r_{Bm}$.

## Kvazisaturace tranzistoru (znát obrázek), jaká je fyzikální příčina kvazisaturace?

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=19" target="_blank" rel="noopener">BJT6.pdf, s. 19–21</a></small></p>

![Kvazisaturace – výstupní charakteristiky](magistr/B2M31IASA/img/bjt_kvazisaturace.png)
*Kvazisaturace – výstupní charakteristiky*

**Vysvětlení:**

- **Definice:** kvazisaturace je zvláštní mód činnosti tranzistoru – *vnitřní* přechod báze-kolektor se **otevírá**, zatímco *vnější* přechod báze-kolektor zůstává **uzavřen**.
- **Fyzikální příčina:** **rozšiřování báze do kolektoru** (do slabě dotované epitaxní oblasti). Při velkém proudu je na odporu epitaxní vrstvy kolektoru velký úbytek, takže vnitřní přechod B-C se otevře, i když na vnějších svorkách je ještě $v_{\mathrm{BC}} < 0$; injektované nosiče zaplaví část kolektoru a ta se chová jako prodloužená báze.
- **V obrázku:** při velkých $i_B$ (červená, fialová křivka) přechází charakteristika do aktivní oblasti *pozvolna* – mezi saturací a aktivní oblastí je oblast kvazisaturace. Rozlišuje se *ohmická* kvazisaturace (lineární úsek, odpor epitaxe) a *neohmická* (zakřivený úsek, rozšíření báze).
- V modelu ji popisuje kvazisaturační část (proud $i_{12}$ v epitaxní oblasti, Kullův model, parametry $r_{C0}$, $\gamma$, $V_0$).

## ⭐ <u>Závislost průletové doby tranzistoru na přímém proudu</u> (znát obrázek, ne vztahy)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=23" target="_blank" rel="noopener">BJT6.pdf, s. 23–24</a></small></p>

![Závislost průletové doby $\tau_f$ na přímém proudu $i_f$](magistr/B2M31IASA/img/bjt_tauf_if.png)
*Závislost průletové doby $\tau_f$ na přímém proudu $i_f$*

**Vysvětlení:**

- Při **malých a středních proudech** je průletová doba konstantní $\tau_f = \tau_F$ (ideální průletová doba – parametr modelu).
- Při **velkých proudech** (nad $\approx I_{\tau F}$) průletová doba **prudce roste** – vysoká injekce a Kirkův jev (rozšíření báze do kolektoru), nosiče musí překonat delší oblast $\Rightarrow$ roste difúzní náboj $q_f = \tau_f i_f$ a klesá mezní kmitočet $f_T$.
- V bodě $\ln I_{\tau F}$ je nárůst zhruba o $\tau_F/2$; strmost nárůstu určuje $X_{\tau F}$, závislost na $v_{\mathrm{bc}}$ pak $V_{\tau F}$.

## Princip dělení bariérových kapacit bipolárního tranzistoru na vnitřní a vnější (zejména pro kolektorovou kapacitu, vědět proč se kapacity v modelu vlastně dělí, není nutné znát podrobnosti)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=31" target="_blank" rel="noopener">BJT6.pdf, s. 31–32</a></small></p>

**Vysvětlení:**

- Reálný přechod báze-kolektor je *rozprostřený* – část leží pod emitorem (*vnitřní* báze, za bázovým odporem $r_b$), část mimo něj až k bázovému kontaktu (*vnější* báze, přímo na svorce B).
- Proto se kolektorová kapacita v modelu **dělí** parametrem $X_{CJC} \in \langle 0,1\rangle$: podíl $X_{CJC}$ je připojen k vnitřní bázi, zbytek $(1-X_{CJC})$ k vnější bázi (před $r_b$). Analogicky $X_{CJC2}$ u kvazisaturačního modelu a $X_{CJS}$ u substrátové kapacity.
- **Proč:** jediná soustředěná kapacita na vnitřní bázi by vedla ke špatnému *kmitočtovému chování* – rozdělení lépe aproximuje rozprostřenou RC strukturu báze (kapacita vs. $r_b$), a tím přesněji modeluje zesílení a fázi na vysokých kmitočtech.

## Modelování zpoždění mikrovlnných tranzistorů, Besselova funkce (jen vědět, že se touto funkcí zpoždění aproximuje)

<p class="zdroj"><small><em>Zdroj:</em> <a href="magistr/B2M31IASA/pdf/BJT6.pdf#page=35" target="_blank" rel="noopener">BJT6.pdf, s. 35–40</a></small></p>

**Vysvětlení:**

- U mikrovlnných obvodů se ukázalo, že **změřený fázový posun** kolektorového proudu je *větší*, než předpovídá model se soustředěnými (difúzními a bariérovými) kapacitami.
- Na velmi vysokých kmitočtech se báze chová jako obvod s *rozprostřenými* parametry (krátké přenosové vedení) – rigorózní parciální diferenciální rovnice by ale model neúměrně zkomplikovaly.
- Proto se **fázové zpoždění aproximuje Besselovou funkcí** (2. řádu) v kmitočtové oblasti:
$$
\Phi(s) = \frac{3\omega_0^2}{s^2 + 3\omega_0 s + 3\omega_0^2}, \qquad I_f'(s) = I_f(s)\,\Phi(s)
$$

Besselův filtr má maximálně plochou skupinovou dobu zpoždění, tj. aproximuje čisté zpoždění. Velikost dodatečné fáze určuje parametr $\varphi_{\tau F}$ (při $f = 1/(2\pi\tau_F)$).

## Teplotní závislost proudového zesilovacího činitele bipolárního tranzistoru

## <del>Šumový model bipolárního tranzistoru (znát jen typy šumu, ne náhradní obvod)</del>
