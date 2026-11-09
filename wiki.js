/* ═══════════════════════════════════════════════════════
 *  EK Wiki – unified subject-ordered index
 *  Renders: markdown (marked.js), LaTeX (KaTeX),
 *           TikZ (pre-rendered SVGs from tikz-cache/)
 *  PDF files open in an embedded iframe
 * ═══════════════════════════════════════════════════════ */
(() => {

  /* ── Path prefixes ── */
  const EK  = 'ek-drive/Bakaláři/6. semestr/SZZ/LS2026/';
  const SZZ = 'SZZ/';
  const AQ  = 'assets/questions/';
  const AM  = 'assets/questions_master/';

  /* ── Resource types ── */
  // note = SZZ Obsidian markdown note
  // pdf  = PDF document (iframe viewer)
  // sum  = assets/ question summary markdown

  /* ═══════════════════════════════════════════════════════
   *  MASTER SUBJECT INDEX (ordered by question_list.md)
   * ═══════════════════════════════════════════════════════ */
  const SECTIONS = [
    {
      section: '1 – Teoretický základ',
      subjects: [
        {
          code: 'B0B01LAGA', title: 'Lineární algebra a geometrie',
          resources: [
            { type: 'note', label: '01 – Lin. prostor, báze a dimenze',         src: SZZ + 'LAGA/01 Struktura linearniho prostoru, baze a dimenze.md' },
            { type: 'note', label: '02 – Maticový počet, determinant, vlastní čísla', src: SZZ + 'LAGA/02 Maticovy pocet, determinant, inverze, vlastni cisla.md' },
            { type: 'pdf',  label: 'AKLA 2023 (Kolář)',                         src: SZZ + 'LAGA/akla_2023_09_15.pdf' },
            { type: 'pdf',  label: 'laga2 (ek-drive)',                          src: EK  + 'LAGA/laga2.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',                      src: AQ  + 'B0B01LAGA.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',                         src: AM  + 'B0B01LAGA-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',                         src: AM  + 'B0B01LAGA-02.md' },
          ],
        },
        {
          code: 'B0B01MA1A', title: 'Matematická analýza 1',
          resources: [
            { type: 'note', label: '03 – Funkce jedné proměnné, limita, derivace', src: SZZ + 'MA1A/03 Funkce jedne promenne, limita, derivace, prubeh.md' },
            { type: 'note', label: '04 – Primitivní funkce a integrály',          src: SZZ + 'MA1A/04 Primitivni funkce a integraly.md' },
            { type: 'pdf',  label: 'ma1a-23 k2',  src: SZZ + 'MA1A/ma1a-23k2.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k3',  src: SZZ + 'MA1A/ma1a-23k3.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k4',  src: SZZ + 'MA1A/ma1a-23k4.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k6',  src: SZZ + 'MA1A/ma1a-23k6.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k7',  src: SZZ + 'MA1A/ma1a-23k7.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k8',  src: SZZ + 'MA1A/ma1a-23k8.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k9',  src: SZZ + 'MA1A/ma1a-23k9.pdf' },
            { type: 'pdf',  label: 'ma1a-23 k10', src: SZZ + 'MA1A/ma1a-23k10.pdf' },
            { type: 'pdf',  label: 'SZZ MA1A (ek-drive)',  src: EK + 'MA1A/SZZ___MA1A.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B0B01MA1A.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B0B01MA1A-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B0B01MA1A-02.md' },
          ],
        },
        {
          code: 'B0B01DRN', title: 'Diferenciální rovnice a num. metody',
          resources: [
            { type: 'note', label: '05 – Lineární dif. rovnice a soustavy',        src: SZZ + 'DRN/05 Linearni diferencialni rovnice a soustavy.md' },
            { type: 'note', label: '06 – Numerické metody rovnic, integrálů, DR', src: SZZ + 'DRN/06 Numericke metody rovnic integralu a diferencialnich rovnic.md' },
            { type: 'pdf',  label: 'dnbook (DN zápisky)',  src: SZZ + 'DRN/dnbook.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ  + 'B0B01DRN.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM  + 'B0B01DRN-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM  + 'B0B01DRN-02.md' },
          ],
        },
        {
          code: 'B0B01MA2A', title: 'Matematická analýza 2',
          resources: [
            { type: 'note', label: '07 – Funkce více proměnných, gradient, extrémy', src: SZZ + 'MA2A/07 Funkce vice promennych, gradient, extremy.md' },
            { type: 'note', label: '08 – Vícerozměrné integrály a integrální věty', src: SZZ + 'MA2A/08 Vicerozmerne integraly a integralni vety.md' },
            { type: 'pdf',  label: 'Diferenciální počet víc proměnných',            src: SZZ + 'MA2A/dipocet.pdf' },
            { type: 'pdf',  label: 'Integrální počet víc proměnných',               src: SZZ + 'MA2A/integralni_pocet_vice_prom.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ  + 'B0B01MA2A.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM  + 'B0B01MA2A-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM  + 'B0B01MA2A-02.md' },
          ],
        },
        {
          code: 'B0B01KANA', title: 'Komplexní analýza a transformace',
          resources: [
            { type: 'note', label: '09 – Komplexní funkce, integrál, singularity, rezidua', src: SZZ + 'KANA/09 Komplexni funkce integral singularity rezidua.md' },
            { type: 'note', label: '10 – Fourierova, Laplaceova a Z-transformace',          src: SZZ + 'KANA/10 Fourier Laplace Z transformace.md' },
            { type: 'note', label: '10a – Srovnání transformací (přehledová tabulka)',      src: SZZ + 'KANA/10a Srovnani transformaci Fourier Laplace Z.md' },
            { type: 'note', label: 'Vývar KANA – souhrnný přehled',                        src: SZZ + 'KANA/Vývar KANA.md' },
            { type: 'pdf',  label: 'testkom.pdf',                   src: SZZ + 'KANA/testkom.pdf' },
            { type: 'pdf',  label: 'transformace.pdf',              src: SZZ + 'KANA/transformace.pdf' },
            { type: 'pdf',  label: 'Komplexka – Kulhánek',          src: EK  + 'KANA/Komplexka-Kulhánek.pdf' },
            { type: 'pdf',  label: 'MA1, MA2, LAGA, DRN, KANA – KK', src: EK + 'KANA/MA1,MA2, LAGA, DRN, KANA_KK.pdf' },
            { type: 'pdf',  label: 'KANA 1+2 – Orri',               src: EK  + 'KANA/feeaci22_Orri_KANA-1,2_v3.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',          src: AQ  + 'B0B01KANA.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',              src: AM  + 'B0B01KANA-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',              src: AM  + 'B0B01KANA-02.md' },
          ],
        },
        {
          code: 'B0B01STP', title: 'Statistika a pravděpodobnost',
          resources: [
            { type: 'note', label: '11 – Náhodná veličina, vektor, rozdělení',   src: SZZ + 'PST/11 Nahodna velicina vektor rozdeleni charakteristiky.md' },
            { type: 'note', label: '12 – CLV, MLE, testování hypotéz',            src: SZZ + 'PST/12 CLV MLE testovani hypotez.md' },
            { type: 'pdf',  label: 'STP 1 (ek-drive)',  src: EK + 'STP/stp1.pdf' },
            { type: 'pdf',  label: 'STP 2 (ek-drive)',  src: EK + 'STP/stp2.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B0B01STP.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B0B01STP-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B0B01STP-02.md' },
          ],
        },
        {
          code: 'B2B02FY1', title: 'Fyzika 1',
          resources: [
            { type: 'pdf',  label: 'FY1+FY2 – KK (SZZ)',         src: SZZ + 'FY1-FY2_KK.pdf' },
            { type: 'pdf',  label: 'FY1 – 13. THUR main',        src: EK  + 'FY/13. THUR_main.pdf' },
            { type: 'pdf',  label: 'FY1 – Brajer v2',            src: EK  + 'FY/14_BRAJER_FY1_v2.pdf' },
            { type: 'pdf',  label: 'FY1+FY2 – KK (ek-drive)',    src: EK  + 'FY/FY1-FY2_KK.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',       src: AQ  + 'B2B02FY1.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',           src: AM  + 'B2B02FY1-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',           src: AM  + 'B2B02FY1-02.md' },
            { type: 'sum',  label: 'Otázka 3 (detail)',           src: AM  + 'B2B02FY1-03.md' },
          ],
        },
        {
          code: 'B2B02FY2', title: 'Fyzika 2',
          resources: [
            { type: 'pdf',  label: 'FY1+FY2 – KK (SZZ)',               src: SZZ + 'FY1-FY2_KK.pdf' },
            { type: 'pdf',  label: 'FY2 – 15. THUR main',              src: EK  + 'FY/15. THUR_main.pdf' },
            { type: 'pdf',  label: 'FY2 – Brajer v3',                  src: EK  + 'FY/16_BRAJER_FY2_v3.pdf' },
            { type: 'pdf',  label: 'FY2 – Anička 2',                   src: EK  + 'FY/17. ANICKA_FY2_2-1.pdf' },
            { type: 'pdf',  label: 'FY2 – Anička 3 (LaTeX)',           src: EK  + 'FY/18. ANICKA_FY2-3_latex.pdf' },
            { type: 'pdf',  label: 'FY2 – Anička kvantovka',           src: EK  + 'FY/18_FY2_ANICKA_Kvantovka.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',             src: AQ  + 'B2B02FY2.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',                 src: AM  + 'B2B02FY2-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',                 src: AM  + 'B2B02FY2-02.md' },
            { type: 'sum',  label: 'Otázka 3 (detail)',                 src: AM  + 'B2B02FY2-03.md' },
          ],
        },
        {
          code: 'GLOBALMETA', title: 'Přehledy / Meta',
          resources: [
            { type: 'note', label: 'SZZ – Teoretické okruhy', src: SZZ + 'SZZ - Teoretické okruhy.md' },
            { type: 'note', label: 'SZZ – Odborné okruhy',     src: SZZ + 'SZZ - Odborné okruhy.md' },
            { type: 'note', label: 'README (SZZ)',             src: SZZ + 'README.md' },
            { type: 'note', label: 'MA1A – kdecoje',           src: SZZ + 'MA1A/kdecoje.md' },
            { type: 'note', label: 'AI – agent pravidla',      src: SZZ + 'ai/agent-pravidla.md' },
            { type: 'note', label: 'AI – pracovní log',        src: SZZ + 'ai/pracovni-log.md' },
            { type: 'note', label: 'AI – context setup',       src: SZZ + 'ai/Summary_2024-05-22_Context_Setup.md' },
          ],
        },
      ],
    },

    {
      section: '2 – Odborná část',
      subjects: [
        {
          code: 'B2B31ZEOA', title: 'Základy elektrických obvodů',
          resources: [
            { type: 'note', label: '01 – Kirchhoff, Thévenin/Norton, MUN, MSP + řešený příklad', src: SZZ + 'ZEOA/01 Zakladni zakony Kirchhoff Thevenin Norton metody analyzy.md' },
            { type: 'note', label: '02 – HUS, kmitočtové char., rezonance, přechodné děje, dvojbrany', src: SZZ + 'ZEOA/02 HUS fazory kmitoctove charakteristiky rezonance prechodne deje.md' },
            { type: 'pdf', label: 'SZZ ZEOA (ek-drive)', src: EK  + 'ZEOA/SZZ___ZEOA.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů', src: AQ + 'B2B31ZEOA.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',    src: AM + 'B2B31ZEOA-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',    src: AM + 'B2B31ZEOA-02.md' },
          ],
        },
        {
          code: 'B2B31EO1', title: 'Elektronické obvody 1',
          resources: [
            { type: 'pdf', label: 'EO1-1 (ek-drive)',              src: EK  + 'EO1/feaci222_EO1-1.pdf' },
            { type: 'pdf', label: 'EO1-2 (ek-drive)',              src: EK  + 'EO1/feeaci22_EO1-2.pdf' },
            { type: 'pdf', label: 'Toleranční schéma – grafy (KK)', src: EK + 'EO1/hex_compost_tolerancni_schema_KK_grafy_DP_HP_PP_PZ_AI_pro_ruzne_aproximace.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',           src: AQ + 'B2B31EO1.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',               src: AM + 'B2B31EO1-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',               src: AM + 'B2B31EO1-02.md' },
          ],
        },
        {
          code: 'B2B38EMB', title: 'Elektronická měření a přístroje',
          resources: [
            { type: 'pdf', label: 'SZZ EMB (ek-drive)', src: EK  + 'EMB/SZZ___EMB.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů', src: AQ + 'B2B38EMB.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',    src: AM + 'B2B38EMB-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',    src: AM + 'B2B38EMB-02.md' },
          ],
        },
        {
          code: 'B2B32DITA', title: 'Digitální technika',
          resources: [
            { type: 'pdf', label: 'HEX DITA-1 (ek-drive)', src: EK  + 'DITA/7. HEX_DITA-1.pdf' },
            { type: 'pdf', label: 'MAX DITA-1 (ek-drive)', src: EK  + 'DITA/7. MAX_DITA-1.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',  src: AQ  + 'B2B32DITA.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',      src: AM  + 'B2B32DITA-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',      src: AM  + 'B2B32DITA-02.md' },
          ],
        },
        {
          code: 'B2B32DATA', title: 'Datová komunikace a sítě',
          resources: [
            { type: 'pdf', label: 'DATA-1 (ek-drive)',     src: EK  + 'DATA/DATA-1.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',  src: AQ  + 'B2B32DATA.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',      src: AM  + 'B2B32DATA-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',      src: AM  + 'B2B32DATA-02.md' },
          ],
        },
        {
          code: 'B2B34ELPA', title: 'Elektronické prvky',
          resources: [
            { type: 'note', label: '12 – MOSFET, BJT zesilovač + pracovní bod, usměrňovač, optoelektronika', src: SZZ + 'ELPA/12 Aktivni prvky MOSFET BJT zesilovac usmernovac optoelektronika.md' },
            { type: 'pdf', label: 'elp1 (ek-drive)',       src: EK  + 'ELPA/elp1.pdf' },
            { type: 'pdf', label: 'elp2 (ek-drive)',       src: EK  + 'ELPA/elp2.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',  src: AQ  + 'B2B34ELPA.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',      src: AM  + 'B2B34ELPA-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',      src: AM  + 'B2B34ELPA-02.md' },
          ],
        },
        {
          code: 'B2B17EMPA', title: 'Elektromagnetické pole',
          resources: [
            { type: 'note', label: '13 – El. a mag. pole, elektrostatika, kapacita', src: SZZ + 'EMPA/13 Elektricke a magneticke pole elektrostatika kapacita.md' },
            { type: 'note', label: '14 – Stacionární mag. pole, indukčnost, Faraday', src: SZZ + 'EMPA/14 Stacionarni magneticke pole indukcnost Faraday.md' },
            { type: 'pdf',  label: 'EMPA – complete edition',  src: SZZ + 'EMPA/empa_complete_edition.pdf' },
            { type: 'sim',  label: 'Odvození kapacity kondenzátoru (krok za krokem)', src: 'sim/empa_capacitor_derivation.html' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',     src: AQ  + 'B2B17EMPA.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',         src: AM  + 'B2B17EMPA-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',         src: AM  + 'B2B17EMPA-02.md' },
          ],
        },
        {
          code: 'B2B17ELD', title: 'Elektromagnetické vlny a vedení',
          resources: [
            { type: 'note', label: '15 – EM vlna v neomezeném prostředí a na rozhraní', src: SZZ + 'ELD/15 Elektromagneticka vlna v neomezenem prostredi a rozhrani.md' },
            { type: 'note', label: '16 – Vedené a evanescentní vlny, vlnovody',          src: SZZ + 'ELD/16 Vedene a evanescentni vlny vlnovody vedeni.md' },
            { type: 'pdf',  label: 'Elektromagnetická vlna 2021',  src: SZZ + 'ELD/Elektromagnetická vlna_13_5_2021.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',         src: AQ  + 'B2B17ELD.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',             src: AM  + 'B2B17ELD-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',             src: AM  + 'B2B17ELD-02.md' },
          ],
        },
        {
          code: 'B2B34SEE', title: 'Senzory a MEMS',
          resources: [
            { type: 'pdf', label: 'HEX-compost SEE (ek-drive)', src: EK  + 'SEE/HEX-compost_SEE.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',        src: AQ  + 'B2B34SEE.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',            src: AM  + 'B2B34SEE-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',            src: AM  + 'B2B34SEE-02.md' },
          ],
        },
        {
          code: 'B2B37SAS', title: 'Signály a soustavy',
          resources: [
            { type: 'note', label: '19 – Signály, reprezentace, vzorkování, náhodné procesy', src: SZZ + 'SAS/19 Signaly casova spektralni reprezentace vzorkovani nahodne procesy.md' },
            { type: 'note', label: '19a – Srovnání spektrálních reprezentací',                  src: SZZ + 'SAS/19a Srovnani spektralnich reprezentaci signalu.md' },
            { type: 'note', label: '20 – Soustavy LTI, konvoluce, stabilita, modulace',         src: SZZ + 'SAS/20 Soustavy LTI konvoluce stabilita pasmove signaly modulace.md' },
            { type: 'pdf',  label: 'SAS cvičení v0.96 (zápisky)', src: SZZ + 'SAS/sas_cviceni_v0.96_250225.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B2B37SAS.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B2B37SAS-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B2B37SAS-02.md' },
          ],
        },
        {
          code: 'B2B17TBK', title: 'Teorie bezdrátové komunikace',
          resources: [
            { type: 'note', label: '21 – Bezdrátová komunikace, modulace, VF parametry', src: SZZ + 'TBK/21 Bezdratova komunikace modulace VF parametry vysilace prijimace.md' },
            { type: 'note', label: '22 – Antény, šíření, návrh rádiových spojů',          src: SZZ + 'TBK/22 Anteny sireni navrh radiovych spoju vykonova bilance.md' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B2B17TBK.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B2B17TBK-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B2B17TBK-02.md' },
          ],
        },
        {
          code: 'B2B31CZS', title: 'Číslicové zpracování signálů',
          resources: [
            { type: 'note', label: '23 – Konvoluce, DFT, váhování, filtry, kvantování', src: SZZ + 'CZS/23 Konvoluce DFT vahovani casove frekvencni analyza filtry kvantovani.md' },
            { type: 'note', label: '24 – Filtrace, převzorkování, banky filtrů, predikce', src: SZZ + 'CZS/24 Filtrace ve frekvencni oblasti prevzorkovani banky filtru odhady analyza predikce.md' },
            { type: 'pdf',  label: 'CZS přednášky pr0',  src: SZZ + 'CZS/b2b31czs_pr0.pdf' },
            { type: 'pdf',  label: 'CZS přednášky pr1',  src: SZZ + 'CZS/b2b31czs_pr1_HANDOUT.pdf' },
            { type: 'pdf',  label: 'CZS DFT (pr3)',       src: SZZ + 'CZS/b2b31czs_pr3_DFT_HANDOUT.pdf' },
            { type: 'pdf',  label: 'CZS spektrum (pr4)',  src: SZZ + 'CZS/b2b31czs_pr4_spectrum_HANDOUT.pdf' },
            { type: 'pdf',  label: 'CZS filtry (pr5–8)',  src: SZZ + 'CZS/b2b31czs_pr5_filters_intro_HANDOUT.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B2B31CZS.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B2B31CZS-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B2B31CZS-02.md' },
          ],
        },
        {
          code: 'B2B37AVT', title: 'Audiovizuální technika',
          resources: [
            { type: 'note', label: '01 – Vidění, snímání a reprodukce obrazu, kódování', src: SZZ + 'AVT/01 Videni snimani a reprodukce obrazu zdrojove kodovani digitalni fotografie.md' },
            { type: 'note', label: '02 – Slyšení, měniče, vzorkování a kódování zvuku',   src: SZZ + 'AVT/02 Slyseni elektrodynamicky a elektrostaticky menic vzorkovani kodovani zvuku.md' },
            { type: 'pdf', label: 'AVT 1 (ek-drive)',     src: EK  + 'AVT/avt1.pdf' },
            { type: 'pdf', label: 'AVT 2 (ek-drive)',     src: EK  + 'AVT/avt2.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',  src: AQ  + 'B2B37AVT.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',      src: AM  + 'B2B37AVT-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',      src: AM  + 'B2B37AVT-02.md' },
          ],
        },
        {
          code: 'B2B34MIT', title: 'Mikroelektronika a technologie',
          resources: [
            { type: 'pdf', label: 'MIT 27–28 – Hlaváček',  src: EK  + 'MIT/27-28_Hlaváček_MIT.pdf' },
            { type: 'pdf', label: 'MIT 27 – Hlaváček',     src: EK  + 'MIT/27_Hlaváček_MIT.pdf' },
            { type: 'pdf', label: 'HEX-compost MIT',       src: EK  + 'MIT/hex_compost_MIT.pdf' },
            { type: 'sum', label: 'HEX – shrnutí okruhů',  src: AQ  + 'B2B34MIT.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',      src: AM  + 'B2B34MIT-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',      src: AM  + 'B2B34MIT-02.md' },
          ],
        },
        {
          code: 'B2B32TSI', title: 'Telefonní a mobilní sítě',
          resources: [
            { type: 'note', label: '29 – Komunikační kanál, digitální přenosy, telefonie, xDSL', src: SZZ + 'TSI/29 Komunikacni kanal digitalni prenosy telefonie xDSL.md' },
            { type: 'note', label: '30 – Buňkové mobilní sítě, GSM, GPRS, UMTS',                  src: SZZ + 'TSI/30 Bunkove mobilni site GSM GPRS EDGE UMTS.md' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů', src: AQ + 'B2B32TSI.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',    src: AM + 'B2B32TSI-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',    src: AM + 'B2B32TSI-02.md' },
          ],
        },
      ],
    },
  ];

  /* ── EK Magistr: samostatná kapitola (wiki.html?kap=magistr) ──
   *  Vlastní strom předmětů — v tomto režimu se SZZ obsah nezobrazuje
   *  a naopak; stav panelů se ukládá pod jinými klíči. */
  const MAGISTR = new URLSearchParams(window.location.search).get('kap') === 'magistr';
  const MG_IASA = 'magistr/B2M31IASA/';
  const MG_EPL = 'magistr/B2M34EPL/';
  const MAGISTR_SECTIONS = [
    {
      section: 'EK Magistr',
      subjects: [
        {
          code: 'B2M31IASA', title: 'Implementace analogových soustav',
          resources: [
            { type: 'note', label: '1 – Model diody',                     src: MG_IASA + '01-model-diody.md' },
            { type: 'note', label: '2 – Model bipolárního tranzistoru',   src: MG_IASA + '02-model-bipolarniho-tranzistoru.md' },
            { type: 'note', label: '3 – Model JFET',                      src: MG_IASA + '03-model-jfet.md' },
            { type: 'note', label: '4 – Model MESFET',                    src: MG_IASA + '04-model-mesfet.md' },
            { type: 'note', label: '5 – Model MOSFET (EKV a BSIM)',       src: MG_IASA + '05-model-mosfet-semiempiricky-ekv-a-bsim-sr.md' },
            { type: 'note', label: '6 – Přesnost modelů',                 src: MG_IASA + '06-presnost-modelu-prakticke-charakterizace.md' },
            { type: 'note', label: '7 – Modely přenosových vedení (nezkouší se)', src: MG_IASA + '07-modely-prenosovych-vedeni.md' },
            { type: 'cards', label: 'Kartičky ⭐ (podtržené otázky)',      src: 'set=json/magistr-iasa.json&subject=IASA' },
            { type: 'pdf',  label: 'Témata 2026 – modely (zadání)',       src: MG_IASA + 'pdf/Temata2026modely.pdf' },
            { type: 'pdf',  label: 'Semestrální test – celé PDF',         src: MG_IASA + 'pdf/IASA_sem_test.pdf' },
            { type: 'pdf',  label: 'Studentský materiál 2 – Pavel (sem. test v1)', src: MG_IASA + 'pdf/PAVEL_IASAsemTest_v1.pdf' },
            { type: 'pdf',  label: 'Prezentace – Dioda',                  src: MG_IASA + 'pdf/Diode6.pdf' },
            { type: 'pdf',  label: 'Prezentace – BJT',                    src: MG_IASA + 'pdf/BJT6.pdf' },
            { type: 'pdf',  label: 'Prezentace – JFET',                   src: MG_IASA + 'pdf/JFET6.pdf' },
            { type: 'pdf',  label: 'Prezentace – MESFET',                 src: MG_IASA + 'pdf/MESFET-Delay-Dispersion-B2M31IASA26.pdf' },
            { type: 'pdf',  label: 'Prezentace – MOSFET',                 src: MG_IASA + 'pdf/MOSFET6.pdf' },
            { type: 'pdf',  label: 'Kapitola 4 – MOSFET (kniha)',         src: MG_IASA + 'pdf/Kapitola4.MOSFET.pdf' },
            { type: 'pdf',  label: 'EKV vs. BSIM (IASA)',                 src: MG_IASA + 'pdf/EKVvsBSIMiasa26.pdf' },
            { type: 'pdf',  label: 'EKV vs. BSIM (přehled)',              src: MG_IASA + 'pdf/EKVvsBSIMoverview26.pdf' },
            { type: 'pdf',  label: 'EKV v2.6',                            src: MG_IASA + 'pdf/ekv_v262.pdf' },
            { type: 'pdf',  label: 'Prezentace – Přenosová vedení',       src: MG_IASA + 'pdf/TransmissionLine6.pdf' },
          ],
        },
        {
          code: 'B2M34EPL', title: 'Elektronika pevných látek',
          resources: [
            { type: 'note',  label: 'Otázky 1–50 (ověřené)',  src: MG_EPL + 'otazky.md' },
            { type: 'note',  label: 'Otázky 51–87 (z přednášek)', src: MG_EPL + 'otazky-51-87.md' },
            { type: 'cards', label: 'Kartičky – semestrální test (1–50)', src: 'set=json/magistr-epl.json&subject=EPL' },
            { type: 'cards', label: 'Kartičky – kompletní (1–87)',        src: 'set=json/magistr-epl-komplet.json&subject=EPL' },
            { type: 'note',  label: 'Applety, hystereze, literatura', src: MG_EPL + 'applety.md' },
            { type: 'pdf',   label: 'Zadání – seznam testových otázek 1–87', src: MG_EPL + 'pdf/otazky-zadani-1-87.pdf' },
            { type: 'pdf',   label: 'Přednáška 1 – Krystaly', src: MG_EPL + 'pdf/P01-krystaly.pdf' },
            { type: 'pdf',   label: 'Přednáška 2a – Vodík, kvantová jáma', src: MG_EPL + 'pdf/P02a-vodik-kvantova-jama.pdf' },
            { type: 'pdf',   label: 'Přednáška 2b – Vazby', src: MG_EPL + 'pdf/P02b-vazby.pdf' },
            { type: 'pdf',   label: 'Přednáška 3 – Reciproká mřížka, difrakce', src: MG_EPL + 'pdf/P03-reciproka-mrizka-difrakce.pdf' },
            { type: 'pdf',   label: 'Přednáška 4 – Kmity mřížky (fonony)', src: MG_EPL + 'pdf/P04-kmity-mrizky-fonony.pdf' },
            { type: 'pdf',   label: 'Přednáška 5a – Fázové přechody', src: MG_EPL + 'pdf/P05a-fazove-prechody.pdf' },
            { type: 'pdf',   label: 'Přednáška 5b – Růst krystalů', src: MG_EPL + 'pdf/P05b-rust-krystalu.pdf' },
            { type: 'pdf',   label: 'Přednáška 6a – Poruchy', src: MG_EPL + 'pdf/P06a-poruchy.pdf' },
            { type: 'pdf',   label: 'Přednáška 6b – Povrchy (Woodova notace)', src: MG_EPL + 'pdf/P06b-poruchy-povrchy.pdf' },
            { type: 'pdf',   label: 'Přednáška 7 – Pásový model', src: MG_EPL + 'pdf/P07-pasovy-model.pdf' },
            { type: 'pdf',   label: 'Přednáška 8 – Elektrony a díry', src: MG_EPL + 'pdf/P08-elektrony-a-diry.pdf' },
            { type: 'pdf',   label: 'Přednáška 9 – Transport', src: MG_EPL + 'pdf/P09-transport.pdf' },
            { type: 'pdf',   label: 'Přednáška 10 – Generace, rekombinace', src: MG_EPL + 'pdf/P10-generace-rekombinace.pdf' },
            { type: 'pdf',   label: 'Přednáška 11 – Dielektrika', src: MG_EPL + 'pdf/P11-dielektrika.pdf' },
            { type: 'pdf',   label: 'Přednáška 12 – Kovy', src: MG_EPL + 'pdf/P12-kovy.pdf' },
            { type: 'pdf',   label: 'Přednáška 13 – Supravodivost', src: MG_EPL + 'pdf/P13-supravodivost.pdf' },
            { type: 'pdf',   label: 'Přednáška 14 – Optické vlastnosti', src: MG_EPL + 'pdf/P14-opticke-vlastnosti.pdf' },
            { type: 'pdf',   label: 'Doplněk – Bodové grupy (EN)', src: MG_EPL + 'pdf/X-bodove-grupy-en.pdf' },
            { type: 'pdf',   label: 'Doplněk – Prostorové grupy (EN)', src: MG_EPL + 'pdf/X-prostorove-grupy-en.pdf' },
            { type: 'pdf',   label: 'Doplněk – Krystalizace, binární systémy', src: MG_EPL + 'pdf/X-krystalizace-binarni-systemy.pdf' },
            { type: 'pdf',   label: 'Doplněk – Rozdělovací funkce (statistiky)', src: MG_EPL + 'pdf/X-rozdelovaci-funkce-statistiky.pdf' },
            { type: 'pdf',   label: 'Doplněk – Elektronová mikroskopie', src: MG_EPL + 'pdf/X-elektronova-mikroskopie.pdf' },
            { type: 'pdf',   label: 'Doplněk – Ramanova spektroskopie', src: MG_EPL + 'pdf/X-ramanova-spektroskopie.pdf' },
            { type: 'pdf',   label: 'Doplněk – Skenovací sondová mikroskopie', src: MG_EPL + 'pdf/X-skenovaci-sondova-mikroskopie.pdf' },
            { type: 'pdf',   label: 'Doplněk – Mikroskopie opt./el./AFM (EN)', src: MG_EPL + 'pdf/X-mikroskopie-opt-el-AFM-en.pdf' },
            { type: 'pdf',   label: 'Doplněk – QuantumWise ATK (EN)', src: MG_EPL + 'pdf/X-QuantumWise-ATK-en.pdf' },
            { type: 'pdf',   label: 'Doplněk – Silvaco TCAD', src: MG_EPL + 'pdf/X-Silvaco-TCAD.pdf' },
            { type: 'pdf',   label: 'Doplněk – Feromagnetické polovodiče DMS (EN)', src: MG_EPL + 'pdf/X-DMS-feromagneticke-polovodice-en.pdf' },
          ],
        },
      ],
    },
  ];
  if (MAGISTR) SECTIONS.splice(0, SECTIONS.length, ...MAGISTR_SECTIONS);
  /** Klíč localStorage oddělený pro režim magistr.
   *  @param {string} k  základní klíč
   *  @returns {string}  k, v režimu magistr s příponou '_magistr' */
  const lsKey = k => MAGISTR ? k + '_magistr' : k;

  // Inject a CARDS subpage into every subject — links to the flashcard app
  // pre-filtered to that subject's short code (e.g. B2B02FY1 → FY1), which
  // matches subsetPath[0] in json/szz-open-micro.json one-to-one.
  for (const sec of SECTIONS) {
    for (const subj of sec.subjects) {
      if (subj.code === 'GLOBALMETA' || MAGISTR) continue;   // meta overviews / magistr have no flashcards
      subj.resources.push({ type: 'cards', label: 'Kartičky (CARDS)', src: subj.code.slice(5) });
    }
  }

  /* ── Section 3: Simulace — standalone interactive HTML simulations.
   *  Appended AFTER the cards-injection loop so sim subjects get no
   *  'cards'/'note' resources, only 'sim'. ── */
  const SIM = 'sim/';
  // All simulations link directly into their subjects (no separate "Simulace" category).
  const SIM_SUBJECTS = [
      {
        code: 'B0B01LAGA', title: 'Lineární algebra',
        resources: [
          { type: 'sim', label: 'Lineární transformace & vlastní vektory', src: SIM + 'laga_transform.html' },
        ],
      },
      {
        code: 'B0B01MA1A', title: 'Matematická analýza 1',
        resources: [
          { type: 'sim', label: 'Derivace (tečna) & Riemannův integrál', src: SIM + 'ma1a_calculus.html' },
        ],
      },
      {
        code: 'B0B01DRN', title: 'Diferenciální rovnice',
        resources: [
          { type: 'sim', label: 'Směrové pole & Eulerova metoda', src: SIM + 'drn_slopefield.html' },
          { type: 'sim', label: 'Numerické metody (kořen/integrál/ODR)', src: SIM + 'drn_methods.html' },
        ],
      },
      {
        code: 'B0B01MA2A', title: 'Matematická analýza 2',
        resources: [
          { type: 'sim', label: 'Integrální věty (Green/Gauss/Stokes)', src: SIM + 'ma2a_theorems.html' },
        ],
      },
      {
        code: 'B0B01STP', title: 'Statistika a pravděpodobnost',
        resources: [
          { type: 'sim', label: 'Centrální limitní věta', src: SIM + 'stp_clt.html' },
          { type: 'sim', label: 'Rozdělení (PDF, CDF) a odhad parametrů', src: SIM + 'stp_estimators.html' },
        ],
      },
      {
        code: 'B0B01KANA', title: 'Komplexní analýza a transformace',
        resources: [
          { type: 'sim', label: 'Póly a nuly – Laplace / Z, stabilita', src: SIM + 'kana_polezero.html' },
        ],
      },
      {
        code: 'B2B02FY1', title: 'Fyzika 1',
        resources: [
          { type: 'sim', label: 'Šikmý vrh', src: SIM + 'fy1_projectile.html' },
        ],
      },
      {
        code: 'B2B17ELD', title: 'EM vlny a vedení',
        resources: [
          { type: 'sim', label: 'Vlnovody – COAX / RECT (TE, TM, TEM)', src: 'waveguide_simulator.html' },
          { type: 'sim', label: 'Snellův zákon · lom, totální odraz', src: SIM + 'eld_snell.html' },
          { type: 'sim', label: 'Snellův zákon krok za krokem (ponder)', src: SIM + 'eld_snell_ponder.html' },
          { type: 'sim', label: 'Rozhraní – Fresnel, Brewster, kritický úhel', src: SIM + 'eld_fresnel.html' },
          { type: 'sim', label: 'λ/4 antireflexní vrstva (ponder)', src: SIM + 'eld_ar_coating_ponder.html' },
          { type: 'sim', label: 'Evanescentní vlna (totální odraz)', src: SIM + 'eld_evanescent.html' },
          { type: 'sim', label: 'Rozhraní – tečná/normálová složka E, H', src: SIM + 'eld_boundary.html' },
          { type: 'sim', label: 'Vlna rovinná / kulová / válcová / Gauss. svazek', src: SIM + 'eld_wavetypes.html' },
          { type: 'sim', label: 'Elementární zářič (dipól, blízké/vzdálené pole)', src: SIM + 'eld_radiator.html' },
        ],
      },
      {
        code: 'B2B31ZEOA', title: 'Základy elektrických obvodů',
        resources: [
          { type: 'sim', label: 'RC přechod & RLC kmitočtová char.', src: SIM + 'zeoa_rc_rlc.html' },
          { type: 'sim', label: 'Přechodné děje RC/RL (nabíjení/vybíjení)', src: SIM + 'zeoa_transients.html' },
        ],
      },
      {
        code: 'B2B31EO1', title: 'Elektronické obvody 1',
        resources: [
          { type: 'sim', label: 'Záporná zpětná vazba (A, β)', src: SIM + 'eo1_feedback.html' },
          { type: 'sim', label: 'Filtry RC/RLC – modulová & fázová char.', src: SIM + 'eo1_filters.html' },
        ],
      },
      {
        code: 'B2B32DITA', title: 'Digitální technika',
        resources: [
          { type: 'sim', label: 'Logická hradla & multiplexor', src: SIM + 'dita_logic.html' },
        ],
      },
      {
        code: 'B2B17EMPA', title: 'Elektromagnetické pole',
        resources: [
          { type: 'sim', label: 'ES · Pole bodového náboje',            src: SIM + 'empa_pointcharge.html' },
          { type: 'sim', label: 'ES · Dva náboje (siločáry, ekvipot.)', src: SIM + 'empa_two_charges.html' },
          { type: 'sim', label: 'ES · Zrcadlení podle vodivé plochy',   src: SIM + 'empa_image_method.html' },
          { type: 'sim', label: 'ES · Gaussova věta (tok, výpočet E)',  src: SIM + 'gaussova_veta_simulace.html' },
          { type: 'sim', label: 'ES · Pole nabité roviny / vodiče (ponder)', src: SIM + 'empa_plane_gauss_ponder.html' },
          { type: 'sim', label: 'MS · Biot–Savart (B kolem vodiče)',    src: SIM + 'empa_biot_savart.html' },
          { type: 'sim', label: 'MS · Ampérův zákon',                   src: SIM + 'empa_ampere.html' },
          { type: 'sim', label: 'MS · Síla mezi dvěma vodiči',          src: SIM + 'empa_two_wires.html' },
          { type: 'sim', label: 'MS · Závit a solenoid',               src: SIM + 'empa_loop_solenoid.html' },
          { type: 'sim', label: 'AC · Faradayův zákon (indukce)',       src: SIM + 'empa_faraday.html' },
          { type: 'sim', label: 'Reakce látky · polarizace & hystereze', src: SIM + 'empa_materials.html' },
          { type: 'sim', label: 'Vzájemná indukčnost (2 cívky)', src: SIM + 'empa_mutual.html' },
          { type: 'sim', label: 'Energie a hustota energie mag. pole', src: SIM + 'empa_energy.html' },
          { type: 'sim', label: 'Kapacita deskového kondenzátoru', src: SIM + 'empa_capacitor.html' },
        ],
      },
      {
        code: 'B2B02FY2', title: 'Fyzika 2',
        resources: [
          { type: 'sim', label: 'Coulombův zákon',  src: SIM + 'fy2_coulomb.html' },
          { type: 'sim', label: 'Carnotův cyklus',  src: SIM + 'fy2_carnot.html' },
          { type: 'sim', label: 'Carnotův cyklus a účinnost (ponder)', src: SIM + 'fy2_carnot_ponder.html' },
          { type: 'sim', label: 'Tenká čočka – spojka / rozptylka', src: SIM + 'fy2_lens.html' },
          { type: 'sim', label: 'Pohled pozorovatele skrz čočku', src: SIM + 'fy2_lens_view.html' },
          { type: 'sim', label: 'Dvojštěrbina – interference & koherence', src: SIM + 'fy2_doubleslit.html' },
          { type: 'sim', label: 'Huygensův & Fermatův princip', src: SIM + 'fy2_huygens.html' },
        ],
      },
      {
        code: 'B2B34ELPA', title: 'Elektronické prvky',
        resources: [
          { type: 'sim', label: 'Dioda PN / PIN / Schottky (Shockley)', src: SIM + 'elpa_diode.html' },
          { type: 'sim', label: 'Schottkyho bariéra (kov–polovodič, pásy)', src: SIM + 'elpa_schottky.html' },
          { type: 'sim', label: 'Fotodioda – fotovolt./fotovodiv. režim', src: SIM + 'elpa_photodiode.html' },
          { type: 'sim', label: 'BJT – výstupní charakteristika',       src: SIM + 'elpa_bjt.html' },
          { type: 'sim', label: 'BJT – charakteristické pole (4 kvadranty)', src: SIM + 'elpa_bjt_quadrants.html' },
          { type: 'sim', label: 'JFET – charakteristiky',               src: SIM + 'elpa_jfet.html' },
          { type: 'sim', label: 'JFET – zaškrcení kanálu (řez)',         src: SIM + 'elpa_jfet_pinch.html' },
          { type: 'sim', label: 'MOSFET (N, P)',                        src: SIM + 'elpa_mosfet.html' },
          { type: 'sim', label: 'MIS struktura (pásy) & Flash buňka',   src: SIM + 'elpa_mis.html' },
        ],
      },
      {
        code: 'B2B37SAS', title: 'Signály a soustavy',
        resources: [
          { type: 'sim', label: 'Skládání signálu',          src: SIM + 'sas_signal.html' },
          { type: 'sim', label: 'Fourierova transformace',   src: SIM + 'sas_transform.html' },
          { type: 'sim', label: 'Autokorelace',              src: SIM + 'sas_autocorr.html' },
          { type: 'sim', label: 'Křížová korelace (2 signály)', src: SIM + 'sas_crosscorr.html' },
          { type: 'sim', label: 'Vzorkování a spektrum',     src: SIM + 'sas_sampling.html' },
          { type: 'sim', label: 'Spektra: FS / FT / DTFT',    src: SIM + 'sas_spectra.html' },
          { type: 'sim', label: 'Náhodný proces – autokorelace, PSD, stacionarita', src: SIM + 'sas_random.html' },
        ],
      },
      {
        code: 'B2B31CZS', title: 'Číslicové zpracování signálů',
        resources: [
          { type: 'sim', label: 'Lineární vs cyklická konvoluce', src: SIM + 'czs_convolution.html' },
          { type: 'sim', label: 'Vzorkovací teorém / aliasing (ponder)', src: SIM + 'czs_sampling_ponder.html' },
          { type: 'sim', label: 'DFT / spektrální analýza, leakage (ponder)', src: SIM + 'czs_dft_ponder.html' },
          { type: 'sim', label: 'Decimace / interpolace (multirate)', src: SIM + 'czs_multirate.html' },
          { type: 'sim', label: 'Overlap-Add / Overlap-Save (dlouhé signály)', src: SIM + 'czs_overlap.html' },
        ],
      },
      {
        code: 'B2B32DATA', title: 'Datová komunikace',
        resources: [
          { type: 'sim', label: 'ISO/OSI – tok a zapouzdření', src: SIM + 'data_iso_osi.html' },
          { type: 'sim', label: 'Switch vs. router · podsítě', src: SIM + 'data_switch_router.html' },
        ],
      },
      {
        code: 'B2B32TSI', title: 'Telekomunikační systémy',
        resources: [
          { type: 'sim', label: 'Digitalizace hlasu – PCM (64 kbps)', src: SIM + 'tsi_pcm.html' },
        ],
      },
      {
        code: 'B2B17TBK', title: 'Bezdrátová komunikace',
        resources: [
          { type: 'sim', label: 'Výkonová bilance spoje (Friis)', src: SIM + 'tbk_friis.html' },
          { type: 'sim', label: 'Friisova rovnice krok za krokem (ponder)', src: SIM + 'tbk_friis_ponder.html' },
          { type: 'sim', label: 'Polarizace vlny (lin./kruh./elipt.)', src: SIM + 'tbk_polarization.html' },
          { type: 'sim', label: 'Antény – dipól/monopól/Yagi/trychtýř', src: SIM + 'tbk_antennas.html' },
          { type: 'pdf', label: 'TBK (ek-drive)', src: EK + 'TBK/tbk.pdf' },
        ],
      },
      {
        code: 'B2B37AVT', title: 'Audiovizuální technika',
        resources: [
          { type: 'sim', label: 'Bayerova maska & demozaika', src: SIM + 'avt_bayer.html' },
          { type: 'sim', label: 'JPEG komprese krok za krokem (ponder)', src: SIM + 'avt_jpeg_ponder.html' },
          { type: 'sim', label: 'Elektroakustické měniče (mikrofon/repro)', src: SIM + 'avt_transducers.html' },
          { type: 'sim', label: 'Snímač CCD vs CMOS (vyčítání)', src: SIM + 'avt_ccd_cmos.html' },
          { type: 'sim', label: 'JPEG – bloková DCT a kvantování', src: SIM + 'avt_jpeg.html' },
          { type: 'sim', label: 'MPEG – I/P/B snímky, pohyb. kompenzace', src: SIM + 'avt_mpeg.html' },
        ],
      },
  ];
  for (const ss of SIM_SUBJECTS) {
    for (const sec of SECTIONS) {
      const subj = sec.subjects.find(s => s.code === ss.code);
      if (subj) { subj.resources.push(...ss.resources); break; }
    }
  }

  /* ── Shared reference ── */
  const HEX_COMPOST = { type: 'pdf', label: 'hex_compost.pdf (hlavní reference)', src: SZZ + 'hex_compost.pdf' };

  /* ═══════════════════════════════════════════════════════
   *  DOM refs
   * ═══════════════════════════════════════════════════════ */
  const els = {
    topicList:   document.getElementById('topicList'),
    topicFilter: document.getElementById('topicFilter'),
    docTitle:    document.getElementById('docTitle'),
    docMeta:     document.getElementById('docMeta'),
    docBody:     document.getElementById('docBody'),

    wikiLayout:      document.getElementById('wikiLayout'),
    sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
    sidebarShowBtn:   document.getElementById('sidebarShowBtn'),

    contentToolbar:  document.getElementById('contentToolbar'),
    multiToggleBtn:  document.getElementById('multiToggleBtn'),
    mcWrap:          document.getElementById('mcWrap'),
    mcLayoutPicker:  document.getElementById('mcLayoutPicker'),
    mcCloseBtn:      document.getElementById('mcCloseBtn'),
    mcTabbar:        document.getElementById('mcTabbar'),
    mcGrid:          document.getElementById('mcGrid'),
  };

  /* ── State ── */
  let activeKey    = null;
  let filterText   = '';
  // code → bool (default false — sections start collapsed); ukládá se, aby rozbalení přežilo refresh
  const groupOpen  = (() => { try { return JSON.parse(localStorage.getItem(lsKey('wiki_group_open'))) || {}; } catch (e) { return {}; } })();

  /* ═══════════════════════════════════════════════════════
   *  Helpers
   * ═══════════════════════════════════════════════════════ */

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function encodePath(p) {
    return p.split('/').map(encodeURIComponent).join('/');
  }

  function matches(s) {
    return !filterText || s.toLowerCase().includes(filterText);
  }

  /* resource type → display tag */
  const TYPE_TAG = {
    note: { label: MAGISTR ? 'MD' : 'SZZ', cls: 'tag-note' },
    pdf:  { label: 'PDF', cls: 'tag-pdf'  },
    sum:  { label: 'HEX', cls: 'tag-sum'  },
    cards:{ label: 'CARDS', cls: 'tag-cards' },
    sim:  { label: 'SIM',  cls: 'tag-sim'  },
  };

  /* ═══════════════════════════════════════════════════════
   *  Obsidian pre-processing
   * ═══════════════════════════════════════════════════════ */

  function preprocessObsidian(text) {
    text = text.replace(/\[\[[^\]]*?\|([^\]]+)\]\]/g, '$1');
    text = text.replace(/\[\[[^\]]*?\.(pdf|png|jpg|gif|tex|svg)([^\]]*?)\]\]/gi, '');
    text = text.replace(/\[\[([^\]#|]+)\]\]/g, '$1');
    text = text.replace(/\[\[[^\]]*\]\]/g, '');
    text = text.replace(/^(>+[ \t]*)\[!(\w+)\](.*)/gm, (_, pre, type, rest) => {
      const label = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      return `${pre}**${label}:**${rest}`;
    });
    return text;
  }

  /* ═══════════════════════════════════════════════════════
   *  Math extraction (protect from marked)
   * ═══════════════════════════════════════════════════════ */

  function extractMath(text) {
    const blocks = [];
    const save = (type, math) => { const id = blocks.length; blocks.push({ type, math }); return `\x00M${id}\x00`; };
    const extract = seg => {
      seg = seg.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => save('display', m));
      seg = seg.replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => save('display', m));
      seg = seg.replace(/\\\((.+?)\\\)/g, (_, m) => save('inline', m));
      seg = seg.replace(/(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)/g, (_, m) => save('inline', m));
      return seg;
    };
    // Skip fenced code blocks (```...```) — math-like `$...$` inside TikZ/code
    // sources must reach marked/tikzjax verbatim, not be replaced by placeholders.
    text = text.split(/(```[\s\S]*?```)/g)
      .map((seg, i) => (i % 2 === 0 ? extract(seg) : seg))
      .join('');
    return { text, blocks };
  }

  function restoreMath(html, blocks) {
    return html.replace(/\x00M(\d+)\x00/g, (_, i) => {
      const { type, math } = blocks[+i];
      if (window.katex) {
        try { return katex.renderToString(math.trim(), { displayMode: type === 'display', throwOnError: false }); }
        catch { /* fall through */ }
      }
      return type === 'display'
        ? `<div class="math-raw">$$${math}$$</div>`
        : `<span class="math-raw">$${math}$</span>`;
    });
  }

  /* ═══════════════════════════════════════════════════════
   *  TikZ rendering
   *
   *  Primary:  @drgrice1/tikzjax (loaded in <head> of wiki.html)
   *            — compiled WITHOUT pthreads → no SharedArrayBuffer / COI needed
   *            — MutationObserver on document.body handles dynamic insertion
   *            — results cached in browser IndexedDB (instant on repeat visits)
   *
   *  Fast fallback: tikz-cache/index.json pre-rendered SVGs from CI or
   *                 render_tikz.ps1 / render_tikz.sh run locally
   * ═══════════════════════════════════════════════════════ */

  let tikzIndex = null;
  let tikzIndexPromise = null;

  function loadTikzIndex() {
    if (!tikzIndexPromise) {
      tikzIndexPromise = (async () => {
        try {
          const res = await fetch('tikz-cache/index.json');
          if (res.ok) tikzIndex = await res.json();
        } catch { /* no pre-render cache yet */ }
      })();
    }
    return tikzIndexPromise;
  }

  /** 16-char SHA-256 prefix — must match render_tikz.py block_hash() */
  async function tikzHash(src) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(src.trim()));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
  }

  /**
   * For each tikz placeholder <span>:
   *   1. If a pre-rendered SVG exists in tikz-cache/ → use it instantly.
   *   2. Otherwise insert <script type="text/tikz"> — tikzjax's MutationObserver
   *      picks it up and renders to SVG (cached in IndexedDB for next visits).
   */
  async function resolveTikzPlaceholders(placeholders) {
    if (placeholders.length) await loadTikzIndex();
    for (const ph of placeholders) {
      const src = ph.dataset.tikzSrc;

      const h = await tikzHash(src);
      const svgPath = tikzIndex?.[h];

      if (svgPath) {
        const img = document.createElement('img');
        img.src = svgPath;
        img.alt = 'TikZ diagram';
        img.className = 'tikz-svg';
        img.loading = 'lazy';
        ph.replaceWith(img);
      } else {
        // tikzjax expects tikzpicture content only — strip \begin{document} wrapper
        // (Obsidian notes wrap tikzpictures in a full document, tikzjax adds its own)
        let tikzSrc = src.trim();
        tikzSrc = tikzSrc.replace(/\\begin\{document\}/g, '').replace(/\\end\{document\}/g, '').trim();

        const script = document.createElement('script');
        script.type = 'text/tikz';
        script.textContent = tikzSrc;
        ph.replaceWith(script);
      }
    }
  }

  function setupTikzjax() {
    loadTikzIndex();  // load pre-render cache async
    // tikzjax is already initialised by its <script> tag in wiki.html
  }

  /* ═══════════════════════════════════════════════════════
   *  Full markdown render pipeline
   * ═══════════════════════════════════════════════════════ */

  function renderMarkdown(rawText) {
    let text = preprocessObsidian(rawText);
    const { text: safe, blocks } = extractMath(text);
    marked.setOptions({ gfm: true, breaks: false });
    let html = marked.parse(safe);
    html = restoreMath(html, blocks);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;

    // Convert ```tikz blocks → placeholder <span>s with source stored in dataset
    wrapper.querySelectorAll('pre > code.language-tikz').forEach(code => {
      const ph = document.createElement('span');
      ph.className = 'tikz-loading';
      ph.textContent = '⏳ TikZ…';
      ph.dataset.tikzSrc = code.textContent;
      code.closest('pre').replaceWith(ph);
    });

    return wrapper;
  }

  /* ═══════════════════════════════════════════════════════
   *  Opening documents
   * ═══════════════════════════════════════════════════════ */

  /** Render a resource (note/PDF/cards/summary) into an arbitrary set of
   *  {docTitle, docMeta, docBody} targets — shared by the single-document view
   *  and each multi-content pane. */
  /** Spočítá zoom PDF tak, aby černý okraj vedle stránky byl poloviční oproti
   *  „Automatické velikosti“ (stránka A4 na výšku celá na výšku rámu).
   *  @param {HTMLIFrameElement} frame  rám PDF, už vložený v DOM (kvůli rozměrům)
   *  @returns {string} '#zoom=N' (procenta), nebo '' když rozměry nejsou známé */
  function pdfZoomHash(frame) {
    const W = frame.clientWidth, H = frame.clientHeight;
    if (!W || !H) return '';
    const pageW100 = 595 * 96 / 72;                  // šířka A4 při 100 % (px)
    const fitW = Math.max(0, H - 70) * 595 / 842;    // šířka stránky při „celá stránka“ (lišta prohlížeče ~56 px)
    if (fitW >= W - 40) return '';                   // okraj už skoro není — nech výchozí
    const target = (W - 30 + fitW) / 2;              // polovina okraje
    return '#zoom=' + Math.round(target / pageW100 * 100);
  }

  /** Vytvoří lepicí lištu „Hledat v dokumentu“ (hlavně pro mobil, kde není Ctrl+F).
   *  Zvýrazní shody (<mark>) v textu mimo KaTeX/kód, šipky ▲▼ / Enter přeskakují mezi nimi.
   *  @param {HTMLElement} root  vykreslený obsah markdownu, ve kterém se hledá
   *  @returns {HTMLElement} element lišty (vložit před root) */
  function attachDocSearch(root) {
    const bar = document.createElement('div');
    bar.className = 'doc-search';
    bar.innerHTML =
      '<input type="search" placeholder="Hledat v dokumentu…" aria-label="Hledat v dokumentu">' +
      '<span class="doc-search-count"></span>' +
      '<button type="button" data-d="-1" aria-label="Předchozí">▲</button>' +
      '<button type="button" data-d="1" aria-label="Další">▼</button>';
    const input = bar.querySelector('input');
    const count = bar.querySelector('.doc-search-count');
    let marks = [], cur = -1, timer = 0;

    /** Odstraní všechna zvýraznění.  @returns {void} */
    function clear() {
      for (const m of marks) m.replaceWith(document.createTextNode(m.textContent));
      root.normalize();
      marks = []; cur = -1;
    }
    /** Přeskočí na shodu o d dál (cyklicky) a odroluje k ní.
     *  @param {number} d  +1 další, -1 předchozí  @returns {void} */
    function go(d) {
      if (!marks.length) return;
      if (cur >= 0) marks[cur].classList.remove('cur');
      cur = (cur + d + marks.length) % marks.length;
      marks[cur].classList.add('cur');
      marks[cur].scrollIntoView({ block: 'center' });
      count.textContent = `${cur + 1}/${marks.length}`;
    }
    /** Najde a zvýrazní dotaz (bez ohledu na velikost písmen a diakritiku).  @returns {void} */
    function search() {
      clear();
      const fold = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      const q = fold(input.value.trim());
      if (q.length < 2) { count.textContent = ''; return; }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: n => n.parentElement.closest('.katex, pre, script, style, svg')
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        // NFD fold zachová délku jen bez diakritiky → mapujeme po znacích
        const src = node.nodeValue, folded = [...src].map(fold).join('');
        if (folded.length !== src.length) continue;
        let idx = folded.indexOf(q), last = 0;
        if (idx < 0) continue;
        const frag = document.createDocumentFragment();
        while (idx >= 0) {
          frag.append(src.slice(last, idx));
          const m = document.createElement('mark');
          m.className = 'doc-hit';
          m.textContent = src.slice(idx, idx + q.length);
          frag.append(m); marks.push(m);
          last = idx + q.length;
          idx = folded.indexOf(q, last);
        }
        frag.append(src.slice(last));
        node.replaceWith(frag);
      }
      count.textContent = marks.length ? '' : '0';
      go(1);
    }
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(search, 200); });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(e.shiftKey ? -1 : 1); } });
    bar.addEventListener('click', e => { const d = e.target.dataset.d; if (d) go(+d); });
    return bar;
  }

  async function renderResourceInto(targets, label, src, type) {
    targets.docTitle.textContent = label;
    targets.docMeta.textContent  = src;
    if (type === 'pdf' || type === 'sim') {
      targets.docMeta.insertAdjacentHTML('beforeend',
        ` · <a href="${encodePath(src)}" target="_blank" rel="noopener" class="pdf-newtab-inline">↗ Otevřít v nové záložce</a>`);
    }

    if (type === 'pdf') {
      /* PDF: show iframe + new-tab link */
      const enc = encodePath(src);
      targets.docBody.classList.remove('status');
      targets.docBody.innerHTML =
        `<iframe class="pdf-frame" title="${esc(label)}"></iframe>`;
      const frame = targets.docBody.querySelector('.pdf-frame');
      // rozměry rámu jsou známé až po vykreslení (panely se teprve skládají)
      let tries = 0;
      (function setSrc() {
        if ((!frame.isConnected || !frame.clientWidth) && tries++ < 40) return setTimeout(setSrc, 50);
        // vlastní prohlížeč (pdf.js) — pamatuje si stránku a zoom po refreshi
        frame.src = 'pdfviewer.html?file=' + encodeURIComponent(enc);
      })();
      return;
    }

    if (type === 'cards') {
      /* CARDS: embed the flashcard app pre-filtered to this subject */
      targets.docBody.classList.remove('status');
      targets.docBody.innerHTML =
        `<iframe src="cards.html?${src.includes('=') ? src : 'subject=' + encodeURIComponent(src)}" class="cards-frame" title="${esc(label)}"></iframe>`;
      return;
    }

    if (type === 'sim') {
      /* SIM: embed a standalone interactive simulation HTML in an iframe */
      const enc = encodePath(src);
      targets.docBody.classList.remove('status');
      targets.docBody.innerHTML =
        `<iframe src="${enc}" class="sim-frame" title="${esc(label)}"></iframe>`;
      return;
    }

    /* Markdown */
    targets.docBody.innerHTML = '';
    targets.docBody.classList.add('status');
    targets.docBody.textContent = 'Načítám…';
    try {
      const res = await fetch(encodePath(src), { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();

      if (!window.katex) await waitFor(() => window.katex, 5000);

      const rendered = renderMarkdown(text);

      // Grab tikz placeholders BEFORE appending (so we have refs to them)
      const tikzPlaceholders = [...rendered.querySelectorAll('.tikz-loading')];

      targets.docBody.classList.remove('status');
      targets.docBody.innerHTML = '';
      targets.docBody.appendChild(attachDocSearch(rendered));
      targets.docBody.appendChild(rendered);

      // KaTeX fallback for any math that slipped through
      if (window.renderMathInElement) {
        renderMathInElement(targets.docBody, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '$',  right: '$',  display: false },
            { left: '\\(', right: '\\)', display: false },
          ],
          throwOnError: false,
        });
      }

      // Resolve TikZ placeholders → pre-rendered SVGs (or source fallback)
      resolveTikzPlaceholders(tikzPlaceholders);
    } catch (err) {
      targets.docBody.classList.add('status');
      targets.docBody.textContent = `Nepodařilo se načíst „${src}": ${err.message}`;
    }
  }

  /** Otevře zdroj podle režimu: na desktopu do aktivního panelu, na mobilu do jednoho okna.
   *  @param {string} key  klíč zdroje (kód|cesta)
   *  @param {{label:string, src:string, type:string}} r  popis zdroje
   *  @returns {Promise<void>} nic; aktualizuje strom a hash URL */
  async function openKey(key, r) {
    if (mcMode) {
      if (activePaneIdx >= multiState.panes.length) activePaneIdx = 0;
      openInPane(multiState.panes[activePaneIdx], { key, label: r.label, src: r.src, type: r.type });
      activeKey = key;
      renderSidebar();
      updateHash(key);
      return;
    }
    await openResource(key, r.label, r.src, r.type);
  }

  async function openResource(key, label, src, type) {
    if (key === activeKey) return;
    activeKey = key;
    renderSidebar();
    await renderResourceInto(els, label, src, type);
    updateHash(key);
  }

  function waitFor(cond, ms) {
    return new Promise(r => {
      if (cond()) return r();
      const t0 = Date.now();
      const id = setInterval(() => { if (cond() || Date.now()-t0 > ms) { clearInterval(id); r(); } }, 50);
    });
  }

  /* ═══════════════════════════════════════════════════════
   *  Hash routing
   * ═══════════════════════════════════════════════════════ */

  function updateHash(key) {
    const h = `doc=${encodeURIComponent(key)}`;
    if (window.location.hash.replace(/^#/, '') === h) return;
    history.replaceState(null, '', '#' + h);
  }

  function getKeyFromHash() {
    const raw = window.location.hash.replace(/^#/, '').trim();
    if (!raw) return null;
    return new URLSearchParams(raw).get('doc') || null;
  }

  function resolveKey(key) {
    for (const sec of SECTIONS)
      for (const subj of sec.subjects)
        for (const r of [...subj.resources, HEX_COMPOST])
          if (makeKey(subj.code, r.src) === key)
            return { label: r.label, src: r.src, type: r.type };
    return null;
  }

  function makeKey(code, src) { return `${code}|${src}`; }

  /* ═══════════════════════════════════════════════════════
   *  Sidebar
   * ═══════════════════════════════════════════════════════ */

  function renderSidebar() {
    els.topicList.innerHTML = '';

    /* Shared reference (jen SZZ) */
    if (!MAGISTR) {
    const hexKey = makeKey('GLOBAL', HEX_COMPOST.src);
    const hexBtn = makeResourceBtn(hexKey, HEX_COMPOST, 'GLOBAL');
    const hexRow = document.createElement('div');
    hexRow.style.cssText = 'padding:0 0 8px 0';
    hexRow.appendChild(hexBtn);
    els.topicList.appendChild(hexRow);
    }

    for (const sec of SECTIONS) {
      /* Section separator */
      const secHdr = document.createElement('div');
      secHdr.className = 'section-hdr';
      secHdr.textContent = sec.section;
      secHdr.style.pointerEvents = 'none';
      els.topicList.appendChild(secHdr);

      for (const subj of sec.subjects) {
        const visibleRes = visibleResources(subj.resources).filter(r =>
          matches(r.label) || matches(subj.title) || matches(subj.code)
        );
        if (visibleRes.length === 0) continue;

        const isOpen = groupOpen[subj.code] === true;
        const groupDiv = document.createElement('div');
        groupDiv.className = 'subject-group';

        const hdr = document.createElement('button');
        hdr.type = 'button';
        hdr.className = 'subject-hdr' + (isOpen ? ' open' : '');
        hdr.innerHTML =
          `<span class="subj-code">${esc(subj.code.slice(5))}</span>` +
          `<span class="subj-title">${esc(subj.title)}</span>` +
          `<span class="arr">▶</span>`;
        hdr.addEventListener('click', () => {
          groupOpen[subj.code] = !isOpen;
          try { localStorage.setItem(lsKey('wiki_group_open'), JSON.stringify(groupOpen)); } catch (e) { /* bez úložiště */ }
          renderSidebar();
        });

        const notesDiv = document.createElement('div');
        notesDiv.className = 'subject-notes' + (isOpen ? ' open' : '');

        for (const r of visibleRes) {
          const key = makeKey(subj.code, r.src);
          notesDiv.appendChild(makeResourceBtn(key, r, subj.code));
        }

        groupDiv.appendChild(hdr);
        groupDiv.appendChild(notesDiv);
        els.topicList.appendChild(groupDiv);
      }
    }
  }

  /** Filter resources for the sidebar. All types (note/pdf/sum/cards/sim)
   *  are now browsable — summaries ('sum') were previously hidden. */
  function visibleResources(resources) {
    return resources;
  }

  function makeResourceBtn(key, r, code) {
    const tag = TYPE_TAG[r.type] || TYPE_TAG.sum;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'topic-btn' + (key === activeKey ? ' active' : '');
    btn.innerHTML =
      `<span class="res-tag ${tag.cls}">${tag.label}</span>` +
      `<span class="res-label">${esc(r.label)}</span>`;
    btn.addEventListener('click', () => openKey(key, r));

    /* Drag into a multi-content pane */
    btn.draggable = true;
    btn.addEventListener('dragstart', e => {
      e.dataTransfer.setData('application/json', JSON.stringify({ key, label: r.label, src: r.src, type: r.type }));
      e.dataTransfer.effectAllowed = 'copy';
    });
    return btn;
  }

  /* ═══════════════════════════════════════════════════════
   *  Sidebar collapse (desktop)
   * ═══════════════════════════════════════════════════════ */

  function applySidebarCollapsed(collapsed) {
    els.wikiLayout.classList.toggle('sidebar-collapsed', collapsed);
  }

  function setSidebarCollapsed(collapsed) {
    applySidebarCollapsed(collapsed);
    localStorage.setItem(lsKey('wiki_sidebar_collapsed'), collapsed ? '1' : '');
  }

  applySidebarCollapsed(localStorage.getItem(lsKey('wiki_sidebar_collapsed')) === '1');

  els.sidebarToggleBtn.addEventListener('click', () =>
    setSidebarCollapsed(!els.wikiLayout.classList.contains('sidebar-collapsed'))
  );
  els.sidebarShowBtn.addEventListener('click', () => setSidebarCollapsed(false));

  /* ═══════════════════════════════════════════════════════
   *  Multi content (split panes + browser-style tabs)
   *  Desktop only — mobile always shows a single document.
   * ═══════════════════════════════════════════════════════ */

  const MC_LAYOUTS = { '1x1': 1, '1x2': 2, '2x1': 2, '2x2': 4, '1+2': 3 };
  let mcMode = false;
  let mcTabSeq = 0;

  function loadMultiState() {
    try {
      const raw = localStorage.getItem(lsKey('wiki_multi_state'));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.panes) || !parsed.tabs || !MC_LAYOUTS[parsed.layout]) return null;
      return parsed;
    } catch { return null; }
  }

  const multiState = loadMultiState() || { layout: '1x1', panes: [], tabs: {} };
  let activePaneIdx = 0;   // panel, do kterého se otevře klik ve stromu

  let mcSaveTimer = null;
  function saveMultiState() {
    clearTimeout(mcSaveTimer);
    mcSaveTimer = setTimeout(() => {
      localStorage.setItem(lsKey('wiki_multi_state'), JSON.stringify(multiState));
    }, 200);
  }

  function newTabId() { return `t${Date.now()}_${mcTabSeq++}`; }

  function ensurePaneCount(n) {
    while (multiState.panes.length < n) {
      multiState.panes.push({ id: `p${multiState.panes.length}_${Date.now()}_${mcTabSeq++}`, tabIds: [], activeTabId: null });
    }
    if (multiState.panes.length > n) {
      const removed = multiState.panes.splice(n);
      const target = multiState.panes[multiState.panes.length - 1];
      for (const pane of removed) {
        for (const tid of pane.tabIds) {
          if (!target.tabIds.includes(tid)) target.tabIds.push(tid);
        }
      }
      if (!target.activeTabId && target.tabIds.length) target.activeTabId = target.tabIds[target.tabIds.length - 1];
    }
  }

  /** Drop stale tabs whose resource no longer resolves (renamed/removed source). */
  function pruneStaleTabs() {
    let changed = false;
    for (const id of Object.keys(multiState.tabs)) {
      if (!resolveKey(multiState.tabs[id].key)) { delete multiState.tabs[id]; changed = true; }
    }
    for (const pane of multiState.panes) {
      const before = pane.tabIds.length;
      pane.tabIds = pane.tabIds.filter(id => multiState.tabs[id]);
      if (pane.tabIds.length !== before) changed = true;
      if (pane.activeTabId && !multiState.tabs[pane.activeTabId]) {
        pane.activeTabId = pane.tabIds[pane.tabIds.length - 1] || null;
        changed = true;
      }
    }
    if (changed) saveMultiState();
  }

  function setLayout(layoutId) {
    if (!MC_LAYOUTS[layoutId]) return;
    multiState.layout = layoutId;
    ensurePaneCount(MC_LAYOUTS[layoutId]);
    saveMultiState();
    renderMulti();
  }

  function openInPane(pane, resource) {
    activePaneIdx = Math.max(0, multiState.panes.indexOf(pane));
    let tabId = pane.tabIds.find(id => multiState.tabs[id] && multiState.tabs[id].key === resource.key);
    if (!tabId) {
      tabId = newTabId();
      multiState.tabs[tabId] = { key: resource.key, label: resource.label, src: resource.src, type: resource.type };
      pane.tabIds.push(tabId);
    }
    pane.activeTabId = tabId;
    saveMultiState();
    renderMulti();
  }

  function closeTab(tabId) {
    for (const pane of multiState.panes) {
      const idx = pane.tabIds.indexOf(tabId);
      if (idx === -1) continue;
      pane.tabIds.splice(idx, 1);
      if (pane.activeTabId === tabId) {
        pane.activeTabId = pane.tabIds[Math.min(idx, pane.tabIds.length - 1)] || null;
      }
    }
    if (!multiState.panes.some(p => p.tabIds.includes(tabId))) delete multiState.tabs[tabId];
    saveMultiState();
    renderMulti();
  }

  function moveTabToPane(tabId, targetPane, beforeTabId) {
    let sourcePane = null;
    for (const pane of multiState.panes) {
      const idx = pane.tabIds.indexOf(tabId);
      if (idx !== -1) { sourcePane = pane; pane.tabIds.splice(idx, 1); break; }
    }
    if (!sourcePane) return;
    if (sourcePane.activeTabId === tabId) {
      sourcePane.activeTabId = sourcePane.tabIds[sourcePane.tabIds.length - 1] || null;
    }
    let insertAt = targetPane.tabIds.length;
    if (beforeTabId) {
      const bi = targetPane.tabIds.indexOf(beforeTabId);
      if (bi !== -1) insertAt = bi;
    }
    targetPane.tabIds.splice(insertAt, 0, tabId);
    targetPane.activeTabId = tabId;
    saveMultiState();
    renderMulti();
  }

  function activateTab(pane, tabId) {
    if (pane.activeTabId === tabId) return;
    pane.activeTabId = tabId;
    saveMultiState();
    renderMulti();
  }

  function readDragData(e) {
    try {
      const raw = e.dataTransfer.getData('application/json');
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  function makeTabEl(tabId, tab, pane) {
    const tag = TYPE_TAG[tab.type] || TYPE_TAG.sum;
    const el = document.createElement('div');
    el.className = 'mc-tab' + (pane.activeTabId === tabId ? ' active' : '');
    el.draggable = true;
    el.innerHTML =
      `<span class="res-tag ${tag.cls}">${tag.label}</span>` +
      `<span class="mc-tab-label">${esc(tab.label)}</span>` +
      ((tab.type === 'pdf' || tab.type === 'sim')
        ? `<a class="mc-tab-open" href="${encodePath(tab.src)}" target="_blank" rel="noopener" title="Otevřít v nové záložce">↗</a>`
        : '') +
      `<button type="button" class="mc-tab-close" title="Zavřít">✕</button>`;
    el.addEventListener('click', e => {
      if (e.target.closest('.mc-tab-close, .mc-tab-open')) return;
      activateTab(pane, tabId);
    });
    el.querySelector('.mc-tab-close').addEventListener('click', e => {
      e.stopPropagation();
      closeTab(tabId);
    });
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('application/json', JSON.stringify({ mcTab: tabId }));
      e.dataTransfer.effectAllowed = 'move';
    });
    el.addEventListener('dragover', e => {
      if (!e.dataTransfer.types.includes('application/json')) return;
      e.preventDefault();
      el.classList.add('drag-over');
    });
    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag-over');
      const data = readDragData(e);
      if (data && data.mcTab && data.mcTab !== tabId) moveTabToPane(data.mcTab, pane, tabId);
    });
    return el;
  }

  function makePaneEl(pane) {
    const el = document.createElement('div');
    const idx = multiState.panes.indexOf(pane);
    el.className = 'mc-pane' + (multiState.panes.length > 1 && idx === activePaneIdx ? ' focused' : '');
    el.addEventListener('mousedown', () => {
      if (activePaneIdx === idx) return;
      activePaneIdx = idx;
      els.mcGrid.querySelectorAll('.mc-pane').forEach((p, i) =>
        p.classList.toggle('focused', multiState.panes.length > 1 && i === idx));
    });

    el.addEventListener('dragover', e => {
      if (!e.dataTransfer.types.includes('application/json')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed === 'move' ? 'move' : 'copy';
      el.classList.add('drag-over');
    });
    el.addEventListener('dragleave', e => {
      // Firefox: relatedTarget může být null nebo objekt mimo DOM (např. při opuštění iframe) → Node.contains by spadl
      const rt = e.relatedTarget;
      if (!(rt instanceof Node) || !el.contains(rt)) el.classList.remove('drag-over');
    });
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag-over');
      const data = readDragData(e);
      if (!data) return;
      if (data.mcTab) moveTabToPane(data.mcTab, pane);
      else if (data.key) openInPane(pane, data);
    });

    const tabId = pane.activeTabId;
    const tab = tabId ? multiState.tabs[tabId] : null;
    if (!tab) {
      el.innerHTML = `<div class="mc-pane-empty">Přetáhni sem téma ze seznamu vlevo (nebo záložku z lišty)</div>`;
      return el;
    }
    if (tab.type === 'pdf' || tab.type === 'cards') el.classList.add('compact');

    const title = document.createElement('h3');
    title.className = 'mc-pane-title';
    const meta = document.createElement('p');
    meta.className = 'mc-pane-meta';
    const body = document.createElement('div');
    body.className = 'mc-pane-body';
    el.appendChild(title);
    el.appendChild(meta);
    el.appendChild(body);

    renderResourceInto({ docTitle: title, docMeta: meta, docBody: body }, tab.label, tab.src, tab.type);
    return el;
  }

  function renderMulti() {
    if (!mcMode) return;
    ensurePaneCount(MC_LAYOUTS[multiState.layout] || 1);

    els.mcLayoutPicker.querySelectorAll('button').forEach(b =>
      b.classList.toggle('active', b.dataset.layout === multiState.layout));

    els.mcTabbar.innerHTML = '';
    for (const pane of multiState.panes) {
      for (const tabId of pane.tabIds) {
        const tab = multiState.tabs[tabId];
        if (tab) els.mcTabbar.appendChild(makeTabEl(tabId, tab, pane));
      }
    }

    els.mcGrid.className = `mc-grid layout-${multiState.layout}`;
    // Překreslit jen panely, kterým se změnila aktivní karta — ostatní nechat na místě,
    // jinak se jejich iframe (kartičky, PDF) načte znovu a markdown ztratí pozici posuvníku.
    // (Přesun iframe v DOM ho také znovu načte, proto se panely nikdy nepřesouvají.)
    const multi = multiState.panes.length > 1;
    multiState.panes.forEach((pane, i) => {
      const cur = els.mcGrid.children[i];
      const tabKey = pane.activeTabId || '';
      if (cur && cur.dataset.paneId === pane.id && cur.dataset.tab === tabKey) {
        cur.classList.toggle('focused', multi && i === activePaneIdx);
        return;
      }
      const el = makePaneEl(pane);
      el.dataset.paneId = pane.id;
      el.dataset.tab = tabKey;
      if (cur) els.mcGrid.replaceChild(el, cur);
      else els.mcGrid.appendChild(el);
    });
    while (els.mcGrid.children.length > multiState.panes.length) els.mcGrid.lastElementChild.remove();
  }

  function setMultiMode(on) {
    if (on && isMobile()) return; // no multi-view on mobile
    mcMode = on;
    els.multiToggleBtn.classList.toggle('active', on);
    document.querySelector('.content').classList.toggle('mc-active', on);
    els.wikiLayout.classList.toggle('mc-fullwidth', on);
    els.mcWrap.hidden = !on;
    els.docTitle.style.display = on ? 'none' : '';
    els.docMeta.style.display  = on ? 'none' : '';
    els.docBody.style.display  = on ? 'none' : '';
    localStorage.setItem(lsKey('wiki_multi_mode'), on ? '1' : '');
    if (on) {
      pruneStaleTabs();
      ensurePaneCount(MC_LAYOUTS[multiState.layout] || 1);
      renderMulti();
    }
  }

  els.multiToggleBtn.addEventListener('click', () => setMultiMode(!mcMode));
  els.mcCloseBtn.addEventListener('click', () => setMultiMode(false));
  els.mcLayoutPicker.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => setLayout(btn.dataset.layout));
  });

  window.addEventListener('resize', () => {
    if (mcMode && isMobile()) setMultiMode(false);
    else if (!mcMode && !isMobile()) setMultiMode(true);
  });

  /* ═══════════════════════════════════════════════════════
   *  Init
   * ═══════════════════════════════════════════════════════ */

  async function init() {
    if (MAGISTR) {
      document.title = 'EK Viki – Magistr';
      document.querySelectorAll('.panel h1, .mob-bar-title').forEach(e => { e.textContent = 'EK Magistr'; });
    }
    setupTikzjax();
    renderSidebar();

    if (!isMobile()) setMultiMode(true);
    const hasTabs = mcMode && multiState.panes.some(p => p.activeTabId);

    const fromHash = getKeyFromHash();
    if (fromHash) {
      const r = resolveKey(fromHash);
      if (r) {
        const open = mcMode && Object.values(multiState.tabs).some(t => t.key === fromHash);
        if (!open) await openKey(fromHash, r);
        else { activeKey = fromHash; renderSidebar(); }
        return;
      }
    }
    if (hasTabs) return;

    /* Default: first SZZ note (ELD-15) */
    const first = SECTIONS[0].subjects[0];
    const firstRes = first.resources[0];
    const firstKey = makeKey(first.code, firstRes.src);
    await openKey(firstKey, firstRes);
  }

  /** Desktop = vždy režim panelů (výchozí jedno okno); mobil = jedno okno. */
  function restoreMultiMode() {
    if (!isMobile() && !mcMode) setMultiMode(true);
  }

  /* ── Events ── */
  els.topicFilter.addEventListener('input', () => {
    filterText = els.topicFilter.value.trim().toLowerCase();
    renderSidebar();
  });

  window.addEventListener('hashchange', () => {
    const key = getKeyFromHash();
    if (!key || key === activeKey) return;
    const r = resolveKey(key);
    if (r) openKey(key, r);
  });

  /* ── Mobile drawer ── */
  const panel     = document.getElementById('wikiPanel');
  const overlay   = document.getElementById('mobOverlay');
  const menuBtn   = document.getElementById('mobMenuBtn');
  const contentEl = document.querySelector('.content');

  function isMobile() { return window.innerWidth <= 900; }

  function openDrawer() {
    panel.classList.add('drawer-open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    panel.classList.remove('drawer-open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', () =>
    panel.classList.contains('drawer-open') ? closeDrawer() : openDrawer()
  );
  overlay.addEventListener('click', closeDrawer);

  // Close drawer and scroll to top of content when a topic is tapped on mobile
  document.getElementById('wikiLayout').addEventListener('click', e => {
    if (!isMobile()) return;
    if (e.target.closest('.topic-btn')) {
      setTimeout(() => {
        closeDrawer();
        contentEl.scrollTop = 0;
      }, 60);
    }
  });

  void init();
  restoreMultiMode();
})();
