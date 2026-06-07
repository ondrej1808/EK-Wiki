#!/usr/bin/env python3
"""Comprehensive LaTeX patch for ELD.json.
Fixes: unicode Greek/math inside $...$, prose wrapped in $...$, improper notation."""
import json, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
path = ROOT / "ELD.json"
backup = path.with_suffix(path.suffix + ".bak2")
if not backup.exists():
    shutil.copy(path, backup)

data = json.loads(path.read_text(encoding="utf-8"))
qs = data["questions"]

def A(qi, ai, text):          # 1-based indices
    qs[qi-1]["answer_parts"][ai-1]["text"] = text

# ── Q2: differential Maxwell equations ──────────────────────────────────────
A(2, 1,
"Vztahy odvozené pomocí integrálních vět pro pole s rozptýlenými parametry:\n"
r"1) $\nabla \cdot \mathbf{D} = \rho_Q$" + "\n"
r"2) $\nabla \cdot \mathbf{B} = 0$" + "\n"
r"3) $\nabla \times \mathbf{H} = \mathbf{J}_Q + \dfrac{\partial \mathbf{D}}{\partial t}$" + "\n"
r"4) $\nabla \times \mathbf{E} = -\dfrac{\partial \mathbf{B}}{\partial t}$"
)

# ── Q3: material relations + continuity equation ─────────────────────────────
A(3, 1,
"Doplňují Maxwellovy rovnice pro popis prostředí:\n"
r"$\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$" + "\n"
r"$\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M})$" + "\n"
r"Rovnice kontinuity vyjadřující zákon zachování náboje:"
r" $\dfrac{\partial \rho_Q}{\partial t} + \nabla \cdot \mathbf{J}_Q = 0$"
)

# ── Q5: wave equation for E in vacuum ────────────────────────────────────────
A(5, 1,
r"Odvozuje se aplikací rotace na Faradayův zákon při nulových zdrojích"
r" ($\rho_Q = 0$, $\mathbf{J}_Q = 0$):" + "\n"
r"$\nabla^2 \mathbf{E} - \dfrac{1}{c^2} \dfrac{\partial^2 \mathbf{E}}{\partial t^2} = 0$"
)

# ── Q6: plane wave properties ────────────────────────────────────────────────
A(6, 1,
r"Vektory $\mathbf{E}$, $\mathbf{B}$ a vlnový vektor $\mathbf{k}$ tvoří"
r" pravoúhlý souřadný systém (jsou na sebe kolmé)." + "\n"
r"Disperzní relace pro vakuum je $\omega = c \|\mathbf{k}\|$."
)

# ── Q7: propagation constant ─────────────────────────────────────────────────
A(7, 1,
r"Komplexní číslo $k$ vyjádřené jako"
r" $k^2 = -i\omega\mu(i\omega\varepsilon + \sigma) = \beta - i\alpha$." + "\n"
r"$\beta$ je fázová konstanta, $\alpha$ je měrný útlum."
)

# ── Q8: wave impedance ───────────────────────────────────────────────────────
A(8, 1,
r"Vyjadřuje poměr mezi elektrickou a magnetickou intenzitou:"
r" $Z = \sqrt{\dfrac{i\omega\mu}{i\omega\varepsilon + \sigma}}$." + "\n"
r"Pro vakuum nabývá hodnoty $Z_0 = 120\pi\,\Omega$."
)

# ── Q9: skin depth ───────────────────────────────────────────────────────────
A(9, 1,
r"Vzdálenost, na které se amplituda vlny utlumí na $e^{-1}$ své původní hodnoty." + "\n"
r"V dobře vodivém prostředí ($\omega\varepsilon \ll \sigma$) je"
r" $\delta = 1/\alpha = \sqrt{\dfrac{2}{\omega\mu\sigma}}$."
)

# ── Q10: evanescent wave in unbounded medium ─────────────────────────────────
A(10, 1,
r"Nastává, pokud prostorové frekvence složek splňují $k^2 < k_x^2 + k_y^2$." + "\n"
r"Vlnové číslo $k_z$ se stává imaginárním a vlna ve směru osy $z$ se nešíří,"
r" nýbrž exponenciálně klesá."
)

# ── Q11: plane wave ──────────────────────────────────────────────────────────
A(11, 1,
"Vlna, která má na rovinné ploše konstantní fázi.\n"
r"Skalární řešení je úměrné $e^{i\,\mathbf{x} \cdot \mathbf{k}}$."
r" Amplituda je s rostoucí vzdáleností konstantní."
)

# ── Q12: cylindrical wave ────────────────────────────────────────────────────
A(12, 1,
"Vlna s konstantní fází na válcové ploše.\n"
r"Řešení v cylindrických souřadnicích je popsáno pomocí Hankelovy funkce"
r" druhého druhu $H_m^{(2)}(k_\rho \cdot \rho)$." + "\n"
r"Ve vzdáleném poli klesá její amplituda s rostoucí vzdáleností jako $1/\sqrt{\rho}$."
)

# ── Q13: spherical wave ──────────────────────────────────────────────────────
A(13, 1,
"Vlna s konstantní fází na sféře.\n"
r"Řešení je vyjádřeno pomocí sférické Hankelovy funkce druhého druhu $h_m^{(2)}(kr)$"
r" a sférických harmonik $Y_{mn}(\psi, \theta)$." + "\n"
r"Ve velké vzdálenosti od počátku klesá amplituda jako $1/r$ a řešení lze"
r" aproximovat jako $e^{-ikr}/r$."
)

# ── Q14: Gaussian beam ───────────────────────────────────────────────────────
A(14, 1,
r"Vlna s Gaussovým rozložením energie, rotačně symetrickou strukturou"
r" a malou rozbíhavostí ve směru šíření $z$." + "\n"
r"Ze začátku se chová jako rovinná vlna, od Rayleighovy vzdálenosti $z_R$"
r" se projevuje jako kulová vlna s výrazným útlumem v radiálním směru."
)

# ── Q15: Rayleigh distance ───────────────────────────────────────────────────
A(15, 1,
r"Vzdálenost $z_R = \dfrac{1}{2} k w_0^2 = \dfrac{\pi w_0^2}{\lambda}$,"
r" kde $w_0$ je apertura svazku." + "\n"
"Určuje bod, od kterého se paprsek začíná výrazněji rozbíhat a měnit"
" z rovinného charakteru na kulový."
)

# ── Q18: Snell's law + reflection ────────────────────────────────────────────
A(18, 1,
r"Zákon odrazu: $\theta_I = \theta_R$ (úhel dopadu se rovná úhlu odrazu)." + "\n"
r"Snellův zákon lomu: $n_1 \sin\theta_1 = n_2 \sin\theta_2$,"
r" kde $n_1$, $n_2$ jsou indexy lomu prostředí."
)

# ── Q19: total internal reflection ───────────────────────────────────────────
A(19, 1,
"Jev, kdy se do druhého média nepřenáší žádný reálný výkon a vše se odrazí.\n"
r"Nastává při přechodu z opticky hustšího do opticky řidšího prostředí"
r" ($n_1 > n_2$) pro úhel lomu $\theta_2 = \pi/2$." + "\n"
r"Kritický úhel splňuje vztah: $\sin(\theta_C) = n_2 / n_1$."
)

# ── Q20: evanescent wave at interface ────────────────────────────────────────
A(20, 1,
r"Vzniká při totálním odrazu (dopad pod úhlem $\theta_1 > \theta_C$)." + "\n"
"Vlna se šíří podél rozhraní a zajišťuje splnění spojitostních podmínek na rozhraní,"
" přičemž její amplituda exponenciálně klesá se vzdáleností od rozhraní"
" do vnitřku druhého prostředí."
)

# ── Q21: polarization by reflection ─────────────────────────────────────────
A(21, 1,
r"Při dopadu nepolarizované vlny na rozhraní se činitelé odrazu $R_p$ a $R_s$ liší." + "\n"
"Za určitých podmínek se jedna složka odrazí více a druhá méně (případně projde),"
" čímž dochází k polarizaci odražené vlny."
)

# ── Q22: types of polarization ───────────────────────────────────────────────
A(22, 1,
r"Určuje se podle prostorového chování vektoru $\mathbf{E}$:" + "\n"
r"1) Lineární: složky intenzity nemají vůči sobě fázový posun ($\varphi = 0$)." + "\n"
r"2) Kruhová: fázový posun mezi složkami je $\pi/2$ a mají stejnou amplitudu." + "\n"
"3) Eliptická: obecný případ s libovolným fázovým posunem či rozdílnými amplitudami."
)

# ── Q24: TE and TM modes ─────────────────────────────────────────────────────
A(24, 1,
r"TE (Transverzálně Elektrické): podélná složka elektrického pole je nulová"
r" ($E_z = 0$). Elektrická intenzita má pouze složky kolmé na směr šíření." + "\n"
r"TM (Transverzálně Magnetické): podélná složka magnetického pole je nulová"
r" ($H_z = 0$). Magnetická intenzita má pouze složky kolmé na směr šíření."
)

# ── Q25: cut-off frequency in rectangular waveguide ─────────────────────────
A(25, 1,
r"$\omega_{c,mn} = \dfrac{c}{\sqrt{\mu_r \varepsilon_r}}"
r"\sqrt{\left(\dfrac{m\pi}{a}\right)^2 + \left(\dfrac{n\pi}{b}\right)^2}$,"
r" kde $a$, $b$ jsou rozměry vlnovodu." + "\n"
r"Mod $\mathrm{TE}_{mn}$ nebo $\mathrm{TM}_{mn}$ se vybudí a šíří pouze tehdy,"
r" pokud je pracovní frekvence vyšší než mezní ($\omega > \omega_{c,mn}$)."
)

# ── Q26: TEM waves ───────────────────────────────────────────────────────────
A(26, 1,
r"Transverzálně-elektromagnetické vlny, kde jsou obě podélné složky nulové"
r" ($E_z = 0$, $H_z = 0$)." + "\n"
"Pro jejich existenci jsou vyžadována alespoň dva oddělené vodiče"
" (např. koaxiální kabel, symetrický pár).\n"
r"Na rozdíl od TE/TM vln se mohou šířit již od nulové frekvence ($\omega_c = 0$)."
)

# ── Q27: telegrapher's equations ─────────────────────────────────────────────
A(27, 1,
"Odvozeno z náhradního modelu s parametry $R$, $L$, $G$, $C$:\n"
r"$\dfrac{d^2 U(z)}{dz^2} - (R + i\omega L)(G + i\omega C)\cdot U(z) = 0$" + "\n"
r"Řešení má tvar $U(z) = C_1 e^{-\gamma z} + C_2 e^{\gamma z}$,"
r" kde $\gamma$ je konstanta šíření vedení."
)

# ── Q28: characteristic impedance ───────────────────────────────────────────
A(28, 1,
r"$Z_0 = \sqrt{\dfrac{R + i\omega L}{G + i\omega C}}$" + "\n"
r"Pro bezeztrátové vedení ($R = 0$, $G = 0$) se zjednodušuje na"
r" $Z_0 = \sqrt{L/C}$."
)

# ── Q29: SWR and reflection coefficient ──────────────────────────────────────
A(29, 1,
r"Činitel odrazu na konci vedení:"
r" $\Gamma = \dfrac{Z_K - Z_0}{Z_K + Z_0}$, kde $Z_K$ je zátěž." + "\n"
r"Činitel stojatého vlnění: $\mathrm{SWR} = \dfrac{1 + |\Gamma|}{1 - |\Gamma|}$." + "\n"
r"Ideální stav (přizpůsobení) nastává pro $Z_K = Z_0$,"
r" kdy $\Gamma = 0$ a $\mathrm{SWR} = 1$."
)

# ── Q30: waveguide impedance ─────────────────────────────────────────────────
A(30, 1,
r"$Z_\mathrm{TE} = \sqrt{\dfrac{\mu}{\varepsilon}}"
r" \cdot \dfrac{1}{\sqrt{1 - (\omega_c/\omega)^2}}$" + "\n"
r"$Z_\mathrm{TM} = \sqrt{\dfrac{\mu}{\varepsilon}}"
r" \cdot \sqrt{1 - (\omega_c/\omega)^2}$" + "\n"
"Vyjadřují vlnovou impedanci v závislosti na pracovní frekvenci vůči"
" mezní frekvenci daného modu."
)

# ── Q31: phase and group velocity ────────────────────────────────────────────
A(31, 1,
r"Fázová rychlost $v_f = \omega/\beta$ vyjadřuje rychlost postupu vlnoplochy"
r" s konstantní fází (může být větší než $c$)." + "\n"
r"Grupová rychlost $v_g = \partial\omega/\partial\beta$ vyjadřuje rychlost"
r" přenosu energie či vlnového balíku (vždy menší než $c$)." + "\n"
r"Pro TE a TM mody platí součinový vztah: $v_f \cdot v_g = c^2 / (\mu_r \varepsilon_r)$."
)

# ── Q32: anisotropic medium ──────────────────────────────────────────────────
A(32, 1,
"Prostředí, kde materiálové vlastnosti závisí na směru."
" Permitivita a permeabilita již nejsou skalární konstanty, ale zavedou se jako tenzory.\n"
r"Materiálové vztahy pak mají tvar"
r" $\mathbf{D}(\mathbf{r}) = \boldsymbol{\varepsilon}(\mathbf{r})\mathbf{E}(\mathbf{r})$"
r" a $\mathbf{B}(\mathbf{r}) = \boldsymbol{\mu}(\mathbf{r})\mathbf{H}(\mathbf{r})$."
)

path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"ELD.json patched — {32 - 4} questions updated.")  # Q1,Q4,Q16,Q23 were done before
