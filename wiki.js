/* ═══════════════════════════════════════════════════════
 *  EK Wiki – unified subject-ordered index
 *  Renders: markdown (marked.js), LaTeX (KaTeX), TikZ (tikzjax)
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
      ],
    },

    {
      section: '2 – Odborná část',
      subjects: [
        {
          code: 'B2B31ZEOA', title: 'Základy elektrických obvodů',
          resources: [
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
            { type: 'note', label: '20 – Soustavy LTI, konvoluce, stabilita, modulace',       src: SZZ + 'SAS/20 Soustavy LTI konvoluce stabilita pasmove signaly modulace.md' },
            { type: 'pdf',  label: 'SAS cvičení v0.96 (zápisky)', src: SZZ + 'SAS/sas_cviceni_v0.96_250225.pdf' },
            { type: 'sum',  label: 'HEX – shrnutí okruhů',         src: AQ  + 'B2B37SAS.md' },
            { type: 'sum',  label: 'Otázka 1 (detail)',             src: AM  + 'B2B37SAS-01.md' },
            { type: 'sum',  label: 'Otázka 2 (detail)',             src: AM  + 'B2B37SAS-02.md' },
          ],
        },
        {
          code: 'B2B17TBK', title: 'Teorie bezdrátové komunikace',
          resources: [
            { type: 'sum', label: 'HEX – shrnutí okruhů', src: AQ + 'B2B17TBK.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',    src: AM + 'B2B17TBK-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',    src: AM + 'B2B17TBK-02.md' },
          ],
        },
        {
          code: 'B2B31CZS', title: 'Číslicové zpracování signálů',
          resources: [
            { type: 'sum', label: 'HEX – shrnutí okruhů', src: AQ + 'B2B31CZS.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',    src: AM + 'B2B31CZS-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',    src: AM + 'B2B31CZS-02.md' },
          ],
        },
        {
          code: 'B2B37AVT', title: 'Audiovizuální technika',
          resources: [
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
            { type: 'sum', label: 'HEX – shrnutí okruhů', src: AQ + 'B2B32TSI.md' },
            { type: 'sum', label: 'Otázka 1 (detail)',    src: AM + 'B2B32TSI-01.md' },
            { type: 'sum', label: 'Otázka 2 (detail)',    src: AM + 'B2B32TSI-02.md' },
          ],
        },
      ],
    },
  ];

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
  };

  /* ── State ── */
  let activeKey    = null;
  let filterText   = '';
  const groupOpen  = {};  // code → bool (default true)

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
    note: { label: 'SZZ', cls: 'tag-note' },
    pdf:  { label: 'PDF', cls: 'tag-pdf'  },
    sum:  { label: 'HEX', cls: 'tag-sum'  },
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
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => save('display', m));
    text = text.replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => save('display', m));
    text = text.replace(/\\\((.+?)\\\)/g, (_, m) => save('inline', m));
    text = text.replace(/(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)/g, (_, m) => save('inline', m));
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
   *  TikZ handling
   * ═══════════════════════════════════════════════════════ */

  // Whether tikzjax's CDN script has loaded and its MutationObserver is ready
  let tikzjaxReady = false;
  // Queue of elements waiting to be rendered once tikzjax loads
  const tikzPendingEls = [];

  function setupTikzjax() {
    if (!window.crossOriginIsolated) {
      // COI not active — show warning banner
      const banner = document.getElementById('coiBanner');
      if (banner) banner.style.display = 'block';
      return;
    }

    // tikzjax was conditionally loaded in wiki.html
    // Listen for our custom event dispatched when its <script> fires 'load'
    document.addEventListener('tikzjax-script-loaded', () => {
      tikzjaxReady = true;
      // Process any elements that were added before tikzjax was ready
      tikzPendingEls.forEach(el => insertTikzScript(el));
      tikzPendingEls.length = 0;
    }, { once: true });

    // Fallback: if tikzjax-load-finished fires (after initial render), mark ready
    document.addEventListener('tikzjax-load-finished', () => {
      tikzjaxReady = true;
    }, { once: true });
  }

  /**
   * Insert a tikz script element into the document so tikzjax's MutationObserver
   * processes it. Replaces the placeholder <span> that sits in its place.
   */
  function insertTikzScript(placeholder) {
    const script = document.createElement('script');
    script.type = 'text/tikz';
    script.textContent = placeholder.dataset.tikzSrc;
    placeholder.replaceWith(script);
  }

  /**
   * Schedule TikZ elements for rendering. If tikzjax is ready, insert immediately;
   * otherwise queue them (setupTikzjax will flush when ready).
   */
  function scheduleTikz(placeholders) {
    if (placeholders.length === 0) return;

    if (!window.crossOriginIsolated) {
      // Replace placeholders with a friendly "no COI" message
      placeholders.forEach(ph => {
        const msg = document.createElement('div');
        msg.className = 'tikz-nocoi';
        msg.innerHTML =
          '⚠️ TikZ diagram — rendering unavailable ' +
          '(Cross-Origin Isolation not active). ' +
          '<a href="javascript:location.reload()" style="color:inherit;font-weight:600">Obnovit stránku</a>.';
        ph.replaceWith(msg);
      });
      return;
    }

    if (tikzjaxReady) {
      placeholders.forEach(insertTikzScript);
    } else {
      tikzPendingEls.push(...placeholders);
    }
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

    // Convert ```tikz blocks → placeholder <span>s (actual script elements
    // are inserted by scheduleTikz() to control timing relative to tikzjax)
    wrapper.querySelectorAll('pre > code.language-tikz').forEach(code => {
      const ph = document.createElement('span');
      ph.className = 'tikz-loading';
      ph.textContent = '⏳ TikZ — renderuji diagram…';
      ph.dataset.tikzSrc = code.textContent;
      code.closest('pre').replaceWith(ph);
    });

    return wrapper;
  }

  /* ═══════════════════════════════════════════════════════
   *  Opening documents
   * ═══════════════════════════════════════════════════════ */

  function showStatus(msg) {
    els.docBody.innerHTML = '';
    els.docBody.className = 'status';
    els.docBody.textContent = msg;
  }

  async function openResource(key, label, src, type) {
    if (key === activeKey) return;
    activeKey = key;
    els.docTitle.textContent = label;
    els.docMeta.textContent  = src;
    renderSidebar();

    if (type === 'pdf') {
      /* PDF: show iframe + new-tab link */
      const enc = encodePath(src);
      els.docBody.className = '';
      els.docBody.innerHTML =
        `<div class="pdf-toolbar">` +
          `<a href="${enc}" target="_blank" rel="noopener" class="pdf-newtab">↗ Otevřít v nové záložce</a>` +
        `</div>` +
        `<iframe src="${enc}" class="pdf-frame" title="${esc(label)}"></iframe>`;
      return;
    }

    /* Markdown */
    showStatus('Načítám…');
    try {
      const res = await fetch(encodePath(src), { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();

      if (!window.katex) await waitFor(() => window.katex, 5000);

      const rendered = renderMarkdown(text);

      // Grab tikz placeholders BEFORE appending (so we have refs to them)
      const tikzPlaceholders = [...rendered.querySelectorAll('.tikz-loading')];

      els.docBody.className = '';
      els.docBody.innerHTML = '';
      els.docBody.appendChild(rendered);

      // KaTeX fallback for any math that slipped through
      if (window.renderMathInElement) {
        renderMathInElement(els.docBody, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '$',  right: '$',  display: false },
            { left: '\\(', right: '\\)', display: false },
          ],
          throwOnError: false,
        });
      }

      // Schedule TikZ rendering (waits for tikzjax if not ready yet)
      scheduleTikz(tikzPlaceholders);

      updateHash(key);
    } catch (err) {
      showStatus(`Nepodařilo se načíst „${src}": ${err.message}`);
    }
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

    /* Shared reference */
    const hexKey = makeKey('GLOBAL', HEX_COMPOST.src);
    const hexBtn = makeResourceBtn(hexKey, HEX_COMPOST, 'GLOBAL');
    const hexRow = document.createElement('div');
    hexRow.style.cssText = 'padding:0 0 8px 0';
    hexRow.appendChild(hexBtn);
    els.topicList.appendChild(hexRow);

    for (const sec of SECTIONS) {
      /* Section separator */
      const secHdr = document.createElement('div');
      secHdr.className = 'section-hdr';
      secHdr.textContent = sec.section;
      secHdr.style.pointerEvents = 'none';
      els.topicList.appendChild(secHdr);

      for (const subj of sec.subjects) {
        const visibleRes = subj.resources.filter(r =>
          matches(r.label) || matches(subj.title) || matches(subj.code)
        );
        if (visibleRes.length === 0) continue;

        const isOpen = groupOpen[subj.code] !== false;
        const groupDiv = document.createElement('div');
        groupDiv.className = 'subject-group';

        const hdr = document.createElement('button');
        hdr.type = 'button';
        hdr.className = 'subject-hdr' + (isOpen ? ' open' : '');
        hdr.innerHTML =
          `<span class="subj-code">${esc(subj.code.replace('B0B01','').replace('B2B',''))}</span>` +
          `<span class="subj-title">${esc(subj.title)}</span>` +
          `<span class="arr">▶</span>`;
        hdr.addEventListener('click', () => {
          groupOpen[subj.code] = !isOpen;
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

  function makeResourceBtn(key, r, code) {
    const tag = TYPE_TAG[r.type] || TYPE_TAG.sum;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'topic-btn' + (key === activeKey ? ' active' : '');
    btn.innerHTML =
      `<span class="res-tag ${tag.cls}">${tag.label}</span>` +
      `<span class="res-label">${esc(r.label)}</span>`;
    btn.addEventListener('click', () => openResource(key, r.label, r.src, r.type));
    return btn;
  }

  /* ═══════════════════════════════════════════════════════
   *  Init
   * ═══════════════════════════════════════════════════════ */

  async function init() {
    setupTikzjax();
    renderSidebar();

    const fromHash = getKeyFromHash();
    if (fromHash) {
      const r = resolveKey(fromHash);
      if (r) { await openResource(fromHash, r.label, r.src, r.type); return; }
    }

    /* Default: first SZZ note (ELD-15) */
    const first = SECTIONS[0].subjects[0];
    const firstRes = first.resources[0];
    const firstKey = makeKey(first.code, firstRes.src);
    await openResource(firstKey, firstRes.label, firstRes.src, firstRes.type);
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
    if (r) openResource(key, r.label, r.src, r.type);
  });

  void init();
})();
