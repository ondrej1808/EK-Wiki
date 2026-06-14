50. Otázka – MIT 1
Integrované obvody – význam integrace, architektury IO, metody návrhu;
Mikroelektronické aktivní a pasivní prvky a komponenty, technologie pro
mikroelektronické systémy.
50.1. Integrované obvody (IO, IC)
Integrovaný obvod vynalezl Jack Kilby v r. 1958, tomu předcházel
Shockleyho vynález tranzistoru v r. 1947. Gordon E. Moore předpověděl, že
každých 18 měsíců se počet tranzistorů na čipu zdvojnásobí při stejné ceně
(Moorův zákon). V roce 2025 je nejmenší dosažená šířka kanálu 2 nm. (TSMC).
Nanometry udávají délku kanálu tranzistoru, tedy vzdálenost mezi DRAINEM a
SOURCEM.
50.2. Význam integrace
Integrace umožňuje vyšší výkon nebo nižší ztráty při zachování stejných
rozměrů zařízení. SoC (System on Chip) integrují více funkcí do jednoho čipu
a tím umožňují miniaturizaci zařízení.
Nevýhody integrace jsou vyšší proudová hustota a Větší vliv přechodového
odporu.
50.3. architektury IO
Dvě hlavní rozdělení.
50.3.1. Podle struktury paměti

> 🎥 **How do SSDs Work?** (Branch Education) — Flash paměť, plovoucí hradlo, NAND buňky

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/5Mh3o886qpg" title="How do SSDs Work" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>
Von Neumannova architektura
• Společná paměť pro data a program.
• Výhoda: jednodušší návrh.
• Nevýhoda: tzv. Von Neumann bottleneck (úzké hrdlo mezi CPU a pamětí).
Harvardská architektura
• Oddělená paměť pro data a program.
• Výhoda: paralelní přístup k datům a instrukcím.
Modifikovaná Harvardská architektura
• Kombinuje výhody obou přístupů.

50.3.2. Podle komplexnosti instrukční sady
CISC (Complex Instruction Set Computer)
• Velká instrukční sada (200+ instrukcí).
• Složitější implementace, lepší zpětná kompatibilita.
• Menší počet registrů, více režimů adresace.
RISC (Reduced Instruction Set Computer)
• Malá, pravidelná instrukční sada.
• Jednodušší a rychlejší provádění instrukcí.
• Vyžaduje složitější kompilátory.
50.4. Metody návrhu
Nejdříve je třeba navrhnout topologii čipu. V některých případech
aplikačně specifických IO lze použít již existující topologii (Hradlová pole,
standardní buňky, programovatelné obvody). Celý vlastní návrh přináší výhody
jako: flexibilita, efektivní využití plochy a rychlost. Ale vyplatí se jen ve velkých
sériích. Příkladem návrhového programu je Cadence nebo OrCAD.
50.4.1. Jednotlivé kroky návrhu
1. logický návrh
Vytvoření funkčního zapojení samotného obvodu k vytváření logického
návrhu. Grafický návrh (schéma) nebo HDR jazyk jako například VHDL
nebo Verilog který slouží pro popis hardwaru.
2. syntéza
Vstupem je například behaviorální popis obvodu pomocí HDR jazyku
výstupem je netlist (zapojení obvodu).
3. umístění as propojení
4. verifikace (kontrola)

50.5. Mikroelektronické aktivní a pasivní prvky a komponenty
Mikroelektronické systémy se skládají z celé řady aktivních a pasivních
součástek, které jsou buď integrovány přímo na čipu (monolitická integrace),
nebo připojeny jako externí komponenty.
50.5.1. Aktivní prvky
• Tranzistory: Bipolární (BJT), unipolární (MOSFET) – základ logických i
analogových obvodů.
• Dioda: Usměrnění, ochrana, detekce.
• Integrované zesilovače (např. operační zesilovače).
50.5.2. Pasivní prvky
• Rezistory, kondenzátory, cívky: Omezení proudů, ukládání energie, filtrace.
• Integrated passive components (IPD): Pasivní prvky vyrobené přímo na
čipu – úspora místa.
50.6. Technologie pro mikroelektronické systémy.
50.6.1. Litografické technologie
Fotolitografie
• Nanesení fotorezistu na povrch čipu.
• Osvícení UV světlem přes masku.
• Vyvolání a odstranění ozářených/neozařených částí.
• Nejrozšířenější metoda ve výrobě čipů.
Elektronová litografie
• Používá elektronový svazek místo UV světla.
• Vyšší rozlišení a přesnost než fotolitografie.
• Pomalejší proces, vhodný pro masky nebo výzkum.
Rentgenová litografie
• Princip jako u fotolitografie, ale s rentgenovým zářením (kratší vlnová
délka).
• Umožňuje jemnější struktury díky lepšímu rozlišení.
• Náročnější technologie, méně rozšířená.

HiTZ

=-
> “ Čeehnogre MMS hero €

Vyuzie m-kro nosní bn mém broh, pohonu Byslů, Votes v Spo[*4/
+ r- o
5 eleleroní fom PRO medicihu, Jnd, pra 20b 5
— ú „JM M
Je o maly“ přestěí PU dok »bbra Serrová vyroby

lo wm Syté

s Senzory
Roz dělen“ Abno ery
ap o) É Klos Buk tn

K lrosy seen Ciše T nr 1 špa)

MĚN

V
| je v
. KPéda Tednolov'e : yočre! do SKS Poe 0 54 NA by

Lepei O% da molo Vsucho cesta )
: pérí (
Mesn Z Mepsř: ve S vesta, Zo torezí SE, Véh : OdSer ění Kémor,
ole sd? ! 26 |
F Oh „oto re Se, mý 56 PÁR en, V

noloh ec Vy pevne P P) zle
polysslcon NOS Z

L —
A lállotbo PE zelo ,

14% byo zrcítkO >> Juice zroštek ) kýbeme osaoc k 04
Jcelerometry > přou o ohblej Ge: des buble

7 k L onm

-ly přtky PO j 2m - Po
vd Weolod ze C010 Pony VPZA 4 JEDMOÝM a ll DPrm
< o/l* Vřelonín  Š1OS,

— Kuonedv k?

BEE | Um le C orrU

*Opeiele 5 (n+egroV dnÉ é oboýí
ň (a Koe0hy

— Podbnč" el. IO prac
det véTOVY
a

podulatory, LW Yiro zbočavněi [
-Prace S vlnovody : lasery

na uje dkomm 2u BSEr3CA

= Krom Žova (Fosonika np s CHOS vý Fable
křem E Ale |lbo em'éé svědo , Př Ame 7EnP lasery
ba A
TA 3 Tndun KST JI
oborycosé"

com M-
i =
- Apl lace * Dozovo cekéh) 17

Senzory

|LIDDAR (Lighé detect'om / Rare)
Leka? Se ví M

Kvansove vypočt7

P

« leseowar 7
Č č . Sea A
Vyaže“í simulačních sw pDL (HDL 2605)

Úrova/ců ETL (konerda 2) A P
čysora spěl m2)

ez) s5E úl0 E04

ře, 0 o
= Kentrol probe ha na různých
(DRY LY" Ene)

-ee DB ordinál pav Npymidí ved

ivS - Loyoté vs Chen é
Fee -Electre rules clal k
Analýea „eesliedho prope"!

ká Dm. 05 ondý 22

dala gposřěly

ro Ké oimulace ha | úvovni
nrzlou cpe eba

M k

Ver filace p

SZZURBRAN RAN RRRNÝ

M
