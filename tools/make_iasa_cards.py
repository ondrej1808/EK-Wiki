"""Vygeneruje json/magistr-iasa.json — kartičky k podtrženým (⭐) otázkám B2M31IASA.

Odpovědi jsou psané jako do testu: 10 otázek, na každou cca 2 cm výšky A4
(4–5 řádků), jednoznačně a bez zbytečného žargonu.
Spuštění z kořene repa: python tools/make_iasa_cards.py
"""
import json
import re
from pathlib import Path

IMG = 'magistr/B2M31IASA/img/'
PAGES = 'https://ondrej1808.github.io/EK-Wiki/'  # obrázky pro Anki přes absolutní URL

# (kapitola, otázka, odpověď, obrázek nebo None)
CARDS = [
    ('Dioda', 'Linearizace ampérvoltové charakteristiky diody (včetně Zenerova průrazu) – nakreslete a popište.',
     'Charakteristika má 3 části: v propustném směru **exponenciála** $i = I_S(e^{v/nv_T}-1)$, '
     'která se od určitého proudu nahradí **přímkou** (tečnou), aby proud při simulaci „neutekl“ do nekonečna. '
     'V závěrném směru teče jen malý proud $-I_S$. Při průrazovém napětí $-B_V$ proud prudce roste '
     '(opět exponenciála) a dál se nahradí přímkou. Zenerův průraz je nedestruktivní – po snížení napětí dioda funguje dál.',
     IMG + 'linearizace_diody.png'),
    ('Dioda', 'Linearizace rovnic modelu bariérové kapacity – nakreslete a vysvětlete.',
     'Bariérová kapacita $c_b = C_{J0}/(1 - v/\\phi_0)^m$ by při $v \\to \\phi_0$ rostla **do nekonečna**. '
     'Proto se od napětí $F_C\\phi_0$ (typicky $F_C = 0{,}5$) původní průběh nahradí **přímkou (tečnou)**. '
     'Kapacita pak roste jen lineárně a simulace nespadne. Pod $F_C\\phi_0$ platí původní vzorec.',
     IMG + 'barierova_kapacita.png'),

    ('BJT', 'Mechanismus poklesu zesílení BJT při velkém proudu kolektoru (obrázek $\\ln i_B, \\ln i_C$ vs. $v_{BE}/v_T$, směrnice).',
     'V grafu jsou $\\ln i_C$ a $\\ln i_B$ přímky. Při středních proudech mají obě **směrnici 1** → jsou rovnoběžné '
     'a zesílení $\\beta$ je stálé. Nad proudem $I_{KF}$ nastane **vysoká injekce** (nosičů v bázi je tolik jako dotace báze) '
     'a směrnice $i_C$ klesne na **½**, kdežto $i_B$ roste dál se směrnicí 1 → přímky se sbližují → **β klesá**.',
     IMG + 'bjt_lnIB_lnIC.png'),
    ('BJT', 'Závislost zesílení BJT na proudu kolektoru (obrázek $\\ln\\beta$ vs. $\\ln i_C$, směrnice).',
     'Graf má tvar „kopce“. Při **malých proudech** zesílení roste se směrnicí asi **½** – část proudu báze tvoří '
     'svodový (rekombinační) proud, který do $i_C$ nepřispívá. Uprostřed je **maximum $\\beta_F$**. '
     'Při **velkých proudech** zesílení klesá se směrnicí asi **−1** (vysoká injekce).',
     IMG + 'bjt_ln_beta.png'),
    ('BJT', 'Výstupní charakteristiky BJT, Earlyho napětí, kde charakteristiky začínají?',
     'Graf $i_C(v_{CE})$ pro několik $i_B$: strmý náběh (saturace), pak téměř vodorovná část (aktivní režim, $i_C \\approx \\beta i_B$). '
     'Ta mírně stoupá, protože s napětím se zužuje báze. Když tyto přímky prodloužíme doleva, protnou se v bodě '
     '$-V_{AF}$ = **Earlyho napětí**. Charakteristiky **nezačínají přesně v nule** – při $v_{CE}=0$ teče malý záporný proud.',
     IMG + 'bjt_vystupni_early.png'),
    ('BJT', 'Závislost bázového odporu na proudu báze (obrázek, 3 parametry).',
     'Odpor báze s rostoucím proudem báze **klesá** – proud se při velkém proudu stlačí k okraji emitoru '
     'a teče kratší cestou. Tři parametry: **$r_B$** = odpor při malém proudu (maximum), '
     '**$r_{Bm}$** = minimální odpor při velkém proudu, **$I_{rB}$** = proud, kdy je odpor zhruba v půli mezi nimi.',
     IMG + 'bjt_rb_iB.png'),
    ('BJT', 'Závislost průletové doby BJT na přímém proudu (obrázek).',
     'Při malých a středních proudech je průletová doba **konstantní** $\\tau_F$ (doba, za kterou nosiče projdou bází). '
     'Při **velkých proudech** (nad $I_{\\tau F}$) **prudce roste** – báze se efektivně rozšíří do kolektoru '
     '(Kirkův jev), nosiče mají delší cestu. Následek: tranzistor je pomalejší (klesá mezní kmitočet).',
     IMG + 'bjt_tauf_if.png'),

    ('JFET', 'Výstupní charakteristiky JFET a proudová rovnice pro lineární oblast ($\\gamma = 1$). Nakreslete.',
     'Graf $i_D(v_{DS})$ pro několik $v_{GS}$ (největší proud pro $v_{GS}=0$, se záporným $v_{GS}$ klesá). '
     '**Lineární oblast** (malé $v_{DS}$): tranzistor = odpor řízený napětím, '
     '$i_D = (1+\\lambda v_{DS})\\,\\beta\\,[2(v_{GS}-V_T) - v_{DS}]\\,v_{DS}$. '
     '**Saturace** ($v_{DS} \\ge v_{GS}-V_T$): kanál se u drainu zaškrtí, proud už téměř neroste. Hranice oblastí je parabola.',
     IMG + 'jfet_vystupni.png'),
    ('JFET', 'Proč je JFET málo teplotně závislý?',
     'S teplotou se mění dvě věci, které působí **proti sobě**: '
     '1) klesá **pohyblivost** nosičů → proud **klesá**; '
     '2) zužuje se vyprázdněná oblast gatu, kanál je **širší** (posun $V_T$) → proud **roste**. '
     'Oba vlivy se z velké části vyruší, a dokonce existuje pracovní bod, kde je proud na teplotě téměř nezávislý.',
     None),

    ('MESFET', 'Jak se v modelu MESFET modeluje kmitočtová disperze charakteristik?',
     'Charakteristiky MESFET jsou pro **stejnosměrný signál jiné než pro vysoké kmitočty**. '
     'Do modelu se proto paralelně k hlavnímu zdroji proudu přidá **druhý řízený zdroj $I_d\'$** s odporem $R_d\'$, '
     'připojený přes **kondenzátor $C_d\'$**. Pro DC kondenzátor nevede → platí stejnosměrné charakteristiky. '
     'Na vysokých kmitočtech vede → přidaný zdroj upraví proud na vf hodnoty.',
     IMG + 'mesfet_disperze.png'),
    ('MESFET', 'Typický tvar napěťové závislosti kapacit MESFET (a mikrovlnných varaktorů).',
     'Kapacita gate-source / gate-drain má **lomený průběh**: pod prahovým napětím je malá a skoro konstantní, '
     'v úzké oblasti kolem prahu ($V_A$ až $V_B$) **skokově vzroste** a nad prahem dál roste jako kapacita '
     'Schottkyho přechodu. Stejný tvar mají mikrovlnné varaktory, proto je lze popsat stejným modelem.',
     IMG + 'mesfet_kapacity.png'),

    ('MOSFET', 'Příčný řez MOSFET s vyznačenými geometrickými parametry.',
     'Nakreslit: source a drain (dvě dotované oblasti), mezi nimi kanál, nad ním tenký oxid a gate (gate). '
     'Parametry: **$L$** = délka gatu, **$W$** = šířka, **$t_{ox}$** = tloušťka oxidu, '
     '**$X_J$** = hloubka přechodu S/D, **$X_{JL}$** = o kolik S/D zasahuje pod gate, '
     '**$L_e$** = efektivní délka kanálu ($L_e = L - 2X_{JL}$).',
     IMG + 'mosfet_rez.png'),
    ('MOSFET', 'Závislost proudu kanálem na napětí gate-source, podprahový režim (obrázek).',
     'Pod prahovým napětím $V_T$ proud **není nulový** – teče malý proud, který s $v_{GS}$ roste **exponenciálně** '
     '(podprahový režim, slabá inverze). Nad napětím $V_{on}$ (o něco větší než $V_T$) roste proud **kvadraticky** '
     '(silná inverze). Model obě části plynule napojí v bodě $V_{on}$.',
     IMG + 'mosfet_podprah.png'),
    ('MOSFET', 'Výstupní charakteristiky MOSFET – odporová a saturační oblast.',
     'Graf $i_D(v_{DS})$ pro několik $v_{GS}$. **Odporová (lineární) oblast**: při malém $v_{DS}$ proud roste '
     'přibližně lineárně – tranzistor se chová jako odpor řízený napětím $v_{GS}$. '
     '**Saturační oblast** ($v_{DS} > v_{GS}-V_T$): kanál se u drainu zaškrtí a proud dál roste už jen mírně.',
     IMG + 'mosfet_vystupni.png'),
    ('MOSFET', 'EKV vs. BSIM – koncepce výstavby modelu.',
     '**EKV** je **nábojový** model (charge-based) – rovnice vychází z náboje v kanálu, napětí se vztahují '
     'k **substrátu**, takže je přirozeně **symetrický** vůči source a drain. '
     '**BSIM** je založený na **prahovém napětí** (threshold-voltage based), napětí vztahuje k **source** a používá '
     'mnoho korekčních (fitting) funkcí – může mít problémy se symetrií (např. při $V_{DS}=0$).',
     None),
    ('MOSFET', 'EKV vs. BSIM – pro jaké obvody se který hodí?',
     '**EKV**: moderní **analogové** a low-power obvody – přesný ve **slabé a střední inverzi**. '
     '**BSIM**: průmyslový standard pro **číslicové (rychlé spínací)** obvody a hluboký submikron – přesný v **silné inverzi**.',
     None),
    ('MOSFET', 'EKV vs. BSIM – spojitost rovnic.',
     '**EKV** má **jedinou spojitou rovnici** od slabé po silnou inverzi i od lineární oblasti po saturaci; '
     'derivace (např. $g_m$) jsou hladké. **BSIM** (starší verze BSIM3, BSIM4) má **rovnice pro různé oblasti** '
     'propojené vyhlazovacími funkcemi – nespojitosti vyšších derivací.',
     None),
    ('MOSFET', 'EKV vs. BSIM – složitost modelu.',
     '**EKV**: kompaktní, řádově **desítky parametrů**, snadno se určí z měření. '
     '**BSIM**: **stovky až tisíce parametrů** (i geometrické koeficienty), extrakce je velmi náročná.',
     None),
    ('MOSFET', 'Koncepce pinch-off napětí v modelu EKV.',
     '$V_P$ **není napětí mezi drainem a sourcem**, ale **potenciál kanálu** (vůči substrátu), při kterém se '
     '**hustota inverzního náboje vyrovná hustotě náboje ochuzené oblasti**. Vyjadřuje, jak moc gate otevřel kanál: '
     '$V_P \\approx (V_G - V_{T0})/n$. Když $V_D > V_P$, kanál se u drainu zaškrtí → saturace ($V_{D,sat} = V_P - V_S$).',
     None),
    ('MOSFET', 'Základní vztah pro dopředný proud v modelu EKV.',
     'Proud je rozdíl **dopředného a zpětného** proudu $I_D = I_F - I_R$ (podobně jako u BJT). '
     'Dopředný proud $I_F = I_S\\,i_f$, kde interpolační funkce s **ln a exp** je '
     '$i_f = [\\ln(1 + e^{(V_P - V_S)/2U_T})]^2$ a $I_S = 2n\\mu C_{ox} U_T^2 W/L$. '
     'Pro slabou inverzi z ní vyjde **exponenciála**, pro silnou **kvadratická** závislost – přechod je hladký, '
     'bez skoků v transkonduktanci (důležité pro analogový návrh).',
     None),
]


def main():
    """Sestaví JSON kartiček a uloží ho do json/magistr-iasa.json.

    Parametry: žádné.
    Vrací: nic; vypíše počet kartiček.
    """
    qs = []
    for chapter, q, a, img in CARDS:
        qs.append({
            'type': 'open',
            'question': q,
            'subsetPath': ['IASA', chapter],
            'answer_parts': [{'title': '', 'text': a, 'image': {'src': img} if img else None}],
        })
    out = {'title': 'EK Magistr – B2M31IASA (⭐ podtržené otázky)', 'questions': qs}
    Path('json/magistr-iasa.json').write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf8')

    # statický export pro Anki (stejný formát jako tlačítko „Export Anki“ v cards.html)
    def anki(t):
        """Převede markdown/LaTeX text na HTML pro Anki (MathJax \\( \\)).

        Parametry:
            t -- text odpovědi nebo otázky
        Vrací: HTML řetězec bez tabulátorů a nových řádků.
        """
        t = re.sub(r'\$\$(.+?)\$\$', r'\\[\1\\]', t, flags=re.S)
        t = re.sub(r'\$([^$]+?)\$', r'\\(\1\\)', t)
        t = re.sub(r'\*\*([^*]+)\*\*', r'<b>\1</b>', t)
        return t.replace('\t', ' ').replace('\n', '<br>')
    lines = ['#separator:tab', '#html:true', '#tags column:3']
    for chapter, q, a, img in CARDS:
        back = anki(a) + (f'<br><img src="{PAGES}{img}">' if img else '')
        lines.append('\t'.join([anki(q), back, f'IASA {chapter} priorita']))
    Path('magistr/B2M31IASA/anki-iasa-priorita.txt').write_text('\n'.join(lines) + '\n', encoding='utf8')
    print(len(qs), 'karticek')


if __name__ == '__main__':
    main()
