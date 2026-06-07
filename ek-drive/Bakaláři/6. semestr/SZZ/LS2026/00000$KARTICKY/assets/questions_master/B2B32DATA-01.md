# Datová komunikace a sítě (B2B32DATA) - otázka 1

**Oficiální otázka:** Vrstvové modely datové komunikace. Topologie sítě a její popis pomocí grafů. Lokální datové sítě a metody přístupu k médiu.

**Zdroj:** `complete-HEX-compost.pdf`, strany 157-164
## Strana PDF 157
Vrstvové modely datové komunikace. Topologie sítě a její popis
pomocí grafů. Lokální datové sítě a metody přístupu k médiu.
HEX
Vrstvové modely datové komunikace
Jednotlivé funkcionality jsou rozděleny do samostatných vrstev. Každá vrstva může pouze komu-
nikovat s vrstvou v její bezprostřední blízkosti (nahoře/dole). Při komunikaci se tak informace
chovají jako balíčky z Číny, nejdřív se vezme balík, nalepí se na něj cedulka, která se po cestě ještě
několikrát přelepí a ty pak doma odloupáváš cedulky protože tě zajímá kudy to šlo. Každá vrstva
tak v dalším uzlu může komunikovat pouze se stejnou vrstvou (např. síťová - síťová).
Obrázek 1: Komunikace mezi systémy
referenční modely: - ISO/OSI - TCP/IP
Referenční model ISO/OSI
Reakce na vznik proprietárních standardů -> pokus vytvořit univerzální síťovou architekturu, což
se moc nepovedlo. Je vhodný pouze jako síťový model, bez protokolů, ty byly vyvíjeny dodatečně
shodné funkce ve shodných vrstvách
7 vrstev -> zdá se, že to je zbytečně moc
Fyzická vrstva - zajišťuje přenos bitových posloupností fyzikálním prostředím (kódování, časování,
synchronizace, popř. modulace)
1

## Strana PDF 158
Obrázek 2: RM OSI
2

## Strana PDF 159
Obrázek 3: RM OSI
Spojová vrstva - definuje rámec = blok dat, topologie sítě, fyzickou adresu; zajišťuje zabezpečený
přenos rámců, detekce popř. korekce chyb (parita, CRC, FCS), spolehlivý přenos rámců (ARQ,
metoda okna), přístup k médiu, synchronizace na úrovni rámců, rozpoznání začátku rámce
Síťová vrstva - zajišťuje doručení bloků dat (paketů) -> k adresátovi, nalezení optimální cesty
přes mezilehlé uzly (směrovače), směrování (routing); označení uzlů adresami (logickými) -> IP
adresa, X.25 adresa
Topologie sítě
Je to způsob vzájemného propojení prvků v síti. Každé propojení má své výhody a nevýhody.
Mesh topology
Každé zařízení je spojené s jiným zařízením vlastním kanálem. Výhodou je velmi rychlá komunikace
mezi jednotlivými body a robusnost. Pokud se objeví chyba na nějakém spoji je jednoduché ji obejít,
takže je komunikace velmi spolehlivá. Nevýhodou je velký počet spojů které je nutné realizovat,
takže je to drahý na instalaci i údržbu.
Star topology
Všechny body jsou spojeny s jedním centrálním bodem, kterému se říká “hub”. Výhodou je
jednoduchá realizace, každé zařízení je připojeno pouze jedním spojem. Pokud nastane chyba ve
spoji je velmi jednoduše odhalitelná a nedostupné je pouze jedno zařízení. Hlavní nevýhodou je
jeden centrální bod poruchy při kterém dojde ke kompletnímu znefunkčnění sítě. Výkon (rychlost)
celé sítě je pak limitován tímto centrálním bodem. Dále je tento typ sítě drahá na instalaci.
Bus topology
Každé zařízení je připojeno k jednomu centrálnímu vedení. Jde o obousměrné vícebodové vedení.
Takhle fungoval starý Ethernet, k realizaci se používali koaxiální kabely. Nepotřebuje mezi spoji
žádné prvky. Jeho jednoduchost je však i jeho nevýhodou, při poruše (např. když v kanclu zaměstnáš
gothičku, ona si vezme boty s okovy a přešlápne ti kabel) se síť rozpadá na víc podsítí. Rovněž je k
realizaci potřeba hodně kabelu.
3

## Strana PDF 160
Obrázek 4: Zapojení topologií
Ring topology
Každé zařízení je spojeno s dvěma sousedními zařízeními. Většinou bývá jednosměrné, ale může
být i obousměrné. Lze dosahovat velkých přenosových rychlostí a je malá pravděpodobnost kolize.
Je levné na instalaci a rozšiřování. Pokud je jednosměrná pak při přerušení jednoho spoje může
přerušit komunikaci v celé síti. Pokud je obousměrná pak při přerušení jednoho spoje existuje druhá
záložní cesta a všechna zařízení vesele fungují dál.
Hierarchical (tree) topology
Síť se postupně větví od jednoho prvku. Výhodou je že může být propojeno hodně zařízením jedním
centrálním bodem. Koncové body mohou být od sebe odděleny a je tak možnost zvýšit bezpečnost.
Nevýhodou je znovu jeden centrální bod poruchy.
Hybrid
Jednotlivé topologie je možné kombinovat a vytvářet tak nechutný cursed sítě, který nedávají smysl.
Lokální datové sítě
Je to prostředek datové komunikace, pracují na fyzické a spojové vrstvě modelu OSI, mají lokální
(místní) charakter -> většinou byt nebo dům, jen pár uživatelů. Podporují přístup k mediu a
adresování.
Vývoj
• jednosegmentové sítě
• vícesegmentové sítě s opakovači - opakovač, repeater
• vícesegmentové sítě s mosty - most, bridge
• vícesegmentové sítě s přepínači - přepínač, switch, L2 switch
• vícesegmentové sítě s VLAN přepínači - L2 switch
4

## Strana PDF 161
• vícesegmentové sítě s přepínači na více vrstvách - L2, L3 ... L7 switch
Klíčové komponenty datové sítě
Obrázek 5: Klíčové komponenty datové sítě
Hub
Rozbočovač je asi to nejjednodušší zařízení co je. Je to jenom impedančně přizpůsobená rozbočka
kabelů, vlastně jako kdybych dráty fyzicky svázal k sobě. Pracuje na fyzické vrstvě OSI modelu.
Signály detekované na jednom portu replikuje na portu ostatní. Repeater je dvouportový hub.
Přepínače – Switches
Pracují na druhé vrstvě OSI modelu. Na svých portech přijímají všechny rámce. Záhlaví (zdrojová
a cílová adresa) slouží ke správné funkci přepínače. Data jsou pro přepínač transparentní.
Jsou různé metody přeposílání a pamatování si kam chci přeposlat. Metody přeposílání: Store and
Forward, Cut Through, Fragment Free. Jde o to jak bude přepínač fungovat. Data můžou být
dlouhá a tak by k jejich dočasnému uschovaní před přeposláním šla využít například fronta. Abych
nepotřeboval tak velkou frontu tak je můžu rozsekat na kousky a brát to vždy po kouskách.
VLAN Logicky segmentuje přepínanou síť -> oddělení logické topologie od fyzické. Umožňují
segmentaci služeb dříve realizováno až směrovači. Řeší problémy s bezpečností, správou sítí, pro-
pustností dat, škálovatelností adres. Propojovací spoj mezi přepínači přes který jde více VLAN se
nazývá trunk.
Přepínač má více portů. Untagged porty jsou porty kde není VLAN hlavička odesílaná. Většinou
jde o porty pro koncová zařízení, počítač nebo kamera většinou VLAN vůbec neznají a neuměly by
pak komunikovat. Druhou možností jsou tagged porty které posílají rámce s VLAN hlavičkou.
Směrovače (router)
Většinou je součástí lokální sítě jenom jeden, v případě že by byly dva mohli by se mezi sebou
mlátit. Funguje na třetí vrstvě OSI modelu (takže využívá IP adresy). Jeho úkolem je směřování
packetů.
5

## Strana PDF 162
Obrázek 6: Metody přesílání a)Store and Forward, b) Cut Throught, c) Fast Forward
6

## Strana PDF 163
Většinou je jedna z jeho funkcí i překlad NAT. Network Address Translation je mechanismus kdy
se jednomu zařízení přiřadí adresa a ostatní zařízení jí využívají. Zavedlo se to protože bylo málo
IPv4 adres, cílem bylo zpomalit jejich úbytek. Router má jednu IP adresu a počítače ho využívají
jako zprostředkovatele komunikace s vnější sítí.
Metody přístupu k médiu
Jde o způsob, jak regulovat a řídit přístup jednotlivých stanic ke společně sdílenému přenosovému
médiu.
Obrázek 7: Různé přístupy k řešení problému
Proč řídit přístup k médiu? - mám jeden přenosový kanál, ale více stanic - stanice se nevyskytují
na stejném místě - neexistuje vzájmená komunikace mezi komunikačními uzly (kromě sdíleného
média) - v jeden okamžik může vysílat pouze jedna stanice
Problém existuje pouze při vysílání, příjem informací na sdíleném médiu je bez problémů. Přístupové
metody jsou implementovány v MAC podvrstvě spojové vrstvy.
Vužívají se pouze u vícebodových technologií jako jsou sběrnice, kruh, hvězda, nebo strom. Vyskytuje
se převážně u LAN technologií např. Ethernet, u spojení typu P2P (Point-to-Point) tento problém
nenastává. WAN technologie používají dvoubodové spoje mezi uzly
Řízení přístupu k mediu
Je více různých způsobů
Doména soupeření
Zařízení v síti „soupeří“ o přístup k médiu. Vysílat smí stanice, která detekuje „klid“ na mediu. To
ale vnáší možnost vzniku kolize. Má decentralizované řízení, typické sítě např. Ethernet.
Předávání tokenu
Token (pešek) je krátký paket, cyklicky předávaný mezi stanicemi v síti. Vysílat smí pouze stanice,
která obdrží token. Jde o centralizované řízení, typické sítě např. FDDI, Token Ring, Token Bus.
CSMA/CD
Zkratka Název Význam
CS Carrier Sense Hovoří někdo?
MA Multiple Access Slyším, co ostatní
CD Collision Detection Hovoří nás více! -> Chvilku počkám a pak tozkusím znovu
7

## Strana PDF 164
CSMA -uzel ověřuje nepřítomnost dalšího provozu před vysíláním na sdíleném fyzickém médiu, jako
například elektrickém propojovacím vedení či pásmu elektromagnetického spektra -> používáme při
normálním telefonním hovoru.
8
