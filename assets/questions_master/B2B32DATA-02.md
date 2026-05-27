# Datová komunikace a sítě (B2B32DATA) - otázka 2

**Oficiální otázka:** Binární aritmetika a maskování nad IP adresou. Základy směrování v IP sítích, internet věcí a platformy pro vývoj aplikací M2M.

**Zdroj:** `complete-HEX-compost.pdf`, strany 165-171
## Strana PDF 165
Binární aritmetika a maskování nad IP adresou. Základy
směrování v IP sítích, internet věcí a platformy pro vývoj
aplikací M2M. (B2B32DATA)
HEX, Arixx_
Binární aritmetika a maskování nad IP adresou
IPv4 adresa jsou čtyři osmibitová čísla, která se zapisují v decimální soustavě oddělená tečkami.
Maskování nad IP adresou se provádí s pomocí binární aritmetiky. Maska podsítě určí, jak velká
část IP adresy je NET ID a jaká je HOST ID dle následujícího pravidla: IP adresa AND síťová
maska. Takže například pro IP adresu 147.32.192.35 a masku 255.255.255.0 je číslo 35 HOST ID
(stanice) a zbytek 147.32.192.0 NET ID (síť a subsíť).
Host část identifikuje zařízení. Čísla 1 v masce značí síťovou část adresy, 0 v masce znační host část
adresy.
IPv6 nepotřebuje masky. Je složená ze 128 bitových čísel.
Jsou tři třídy adres - síťové adresy- první adresa v síti, nebo podsíti - broadcast - poslendí adresa v
síti, nebo podsíti; umožňuje adresovat většímu počtu zařízení - loopback - pro testování, dělá to
přesně to jak se to jmenuje
Základy směrování v IP sítích
Směrování je proces nalezení optimální cesty v síti. Využívá k tomu informace obsažené v poli
adresa cíle v záhlaví IP paketu. Proces probíhá na třetí vrstvě RM OSI a fyzické prvky které jej
realizují se nazývají Směrovače (router).
Obrázek 1: Idea směrování
IP je nespojově orientovaný protokol. Každý IP paket obsahuje cílovou IP adresu. Směrovače tuto
1

## Strana PDF 166
adresu používají k určení dalšího kroku -> přes jaké rozhraní paket odeslat a jakému směrovači
ho předat. Síťová část adresy jednoznačně identifikuje IP síť, do které daný paket patří. Všechny
stanice, které mají shodnou síťovou část IP dresy, jsou ve stejné síti a mohou si spolu přímo
vyměňovat IP pakety třeba za pomocí protokolu ARP. Směrovače propojují IP sítě a nepřímo i
stanice v nich obsažené. Každý směrovač se rozhoduje nezávisle. To, že jeden směrovač zná cestu
do jiné sítě neznamená, že ji znají i ostatní. Pokud směrovač zná cestu do cílové sítě, neříká to nic
o tom, jaká cesta se použije pro komunikaci v opačném směru.
Kdy stanice využije služeb směrovače? Pokud cílová stanice patří do jiné sítě.
Jak stanice pozná, že má oslovit směrovač? Podle IP adresy stanice, masky a cílové IP adresy.
Kam směrovat? Pokud je to pro stanici samotnou existuje loopback adresa 127.x.x.x. Pokud je to
stanice ve stejné síti pozná se že mají stejný subnet. Stancie v jiné stíti bude mít jiný subnet.
Obrázek 2: Příklad lokální a mezisíťové komunikace
Výchozí brána (default route)
Směrovač nemusí (a obvykle nemá) mít ve směrovací tabulce záznamy o všech existujících sítích
v Internetu. Zná jen určitou podmnožinu sítí. Paket, pro který neexistuje odpovídající záznam
ve směrovací tabulce je odeslán směrovači značeném jako výchozí brána (default route), nebo
je zahozen, pokud ani výchozí brána není nastavena. Existuje-li výchozí brána, nezahodí nikdy
směrovač žádný paket z důvodu neexistence záznamu ve směrovací tabulce.
Statické směrování
Záznamy do směrovací tabulky se ukládají ručně - ip route 192.168.1.0 255.255.255.0 172.16.3.1
- route ADD 147.32.128.0 MASK 255.255.240.0 157.1.10.2 - ip route add dst-address=0.0.0.0/0
$$
gateway=192.168.1.42 - ip route add 147.32.0.0/16 via 192.168.33.33
$$
Výhody: směrovač se chová přesně tak, jak chceme. Nízká režie ve srovnání s dynamickými směro-
vacími protokoly a není potřeba směrovacích protokolů
Nevýhody: nedokáže reagovat na změnu topologie a není vhodné pro větší sítě (složitá administrace).
Dynamické směrování
Záznamy do směrovací tabulky jsou přidávány/ubírány automaticky na základě informací od
směrovacích protokolů. Směrovač sám určí optimální trasu, směrovače spolu komunikují a vyměňují
si informace o dostupných sítích.
Výhody: schopnost dynamicky reagovat na změny v síti, vhodné pro větší sítě -> loadbalancing
Nevýhody: zvýšené nároky na CPU, RAM, šířku použitého pásma
2

## Strana PDF 167
Autonomní systém
Autonomní systém je množina směrovačů (a sítí) pod jednotnou správou s jednotnou směrovací
politikou. Používá se to z důvodu omezení velikosti směrovacích tabulek. Každá autonomní systém je
identifikován číslem AS (IANA) – 16bitové číslo / 32bitové číslo -> globálně jedinečný identifikátor.
Metrika
Parametr pro porovnání “kvality” jednotlivých záznamů (cest). Jde o převod různých kvalitativních
parametrů na jedno číslo. Každý záznam ve směrovací tabulce má metriku. Použije se cesta s
nejnižší metrikou (= nejkratší cesta). Kritéria pro výpočet metriky: - počet směrovačů na cestě, -
přenosová rychlost, - zpoždení paketu, - zatížení linky, - spolehlivost.
Konvergence
Síť je zkonvergovaná právě tehdy, když mají všechny směrovače správné a kompletní informace
o celé síti. Je to stav, kterého chceme dosáhnout. Doba konvergence je doba, kterou směrovače
potřebují k výměně všech směrovacích informací, výpočtu nejlepších cest a aktualizaci směrovacích
tabulek. Až po zkonvergovaní je síť kompletně funkční. Čím kratší je doba konvergence, tím lepší je
protokol.
Směrovací protokoly typu Distance Vector
V pravidelných intervalech přeposílají kompletní obsah své směrovací tabulky všem sousedům. Na
základě obsahu těchto aktualizací si směrovač aktualizuje svou směrovací tabulku. To znamená
že zná kompletní topologii sítě pouze na základě informací od svých přímých sousedů. Cesty
jsou ohlašovány jako vektory vzdálenosti a směru, takže metrika odpovídá vzdálenosti a rozhraní
odpovídá směru (rozhraní).
Obrázek 3: Směrovací protokol typu DV
Výhody: relativně jednoduchá implementace a správa a relativně nízké nároky na zdroje (CPU,
RAM apod.)
Nevýhody: pomalá konvergence způsobená periodickými aktualizacemi, omezená rozšiřitelnost
(u rozlehlejší sítě je to problém -> více info pro update), směrovací smyčky mohou vzniknout z
neaktualizovaných nekonzistentních směrovacích tabulek vlivem pomalé konvergence
U DV směrovacích protokolů má každý uzel informace pouze o následujícím uzlu.
DV protokoly se v případě nekorektních informací rozhodují špatně (např. informace o přerušení
spojení se šíří postupně). Neaktuální tabulka znamená špatné směrování dokud směrovací algoritmus
znovu nezkonverguje.
3

## Strana PDF 168
Směrovací protokoly typu Link-State
Každý uzel zná kompletní topologii sítě. Pokud uzel vypadne, každý uzel v síti dokáže spočítat
novou cestu. Problém: Všechny uzly v síti musí mít shodný pohled na síť (topologickou databázi).
Ke konvergenci dojde, jestliže každý uzel v síti má kompletní informace o topologii sítě a informace
o stavu spojení mezi směrovači (link-state) rozesílány všem uzlům.
Obrázek 4: Směrovací protokol typu LS
Protokoly mají rychlou konvergenci. Po obdržení LSP, okamžité odeslání LSP na všechna rozhraní
(mimo zdrojové) -> rychlá konvergence. I v případě Triggered Updates je třeba před odesláním
aktualizace spustit aktualizaci směrovacích informací a aktualizovat směrovací tabulku.
Event-driven aktualizace znamená že LSP obsahuje informaci pouze o sítích, u nichž došlo ke změně.
Link-State protokoly zatěžují CPU více než Distance-vector, protože SPF algoritmus vyžaduje více
CPU pro vytvoření celé mapy topologie.
Link-State protokoly potřebují menší šířku pásma než Distance-vector,ale záplava LSP více zatěžuje
dostupnou šířku pásma při inicializaci (nebo nestabilitě sítě).
Link-State protokoly vyžadují více paměti než Distance-vector, protože používají link-state databáze
a vytvářejí SPF strom.
Internet věcí a platformy pro vývoj aplikací M2M
“IoT je skupina infrastruktur propojující připojené objekty a umožňující jejich řízení, shromažďování
dat a přístup k datům jimi generovanými.” Připojenými objekty se v této definici myslí senzory a
aktuátory vykonávající specifickou funkci a mající schopnost komunikovat s ostatními zařízeními.
Co to IoT je?
Je to globální síť propojující řadu každodenních předmětů. Základní prvky sítě IoT sbírají, sdílejí,
vyhodnocují informace a vyvolávají další akce bez nutnosti vnějšího zásahu člověka. Jedná se o
senzory, aktuátorya mikrosenzory.
Komunikace typu (Machine To Machine) M2M je vzájemná komunikace více zařízení, nikoliv
zařízení s člověkem. Je to podstatné protože to má jiný charakter než komunikace člověka, kdy se
většinou jedná o nějaký souvislý přenos dat. M2M komunikace vyžaduje nahodilé krátké zprávy,
většinou využívá nízké rychlosti které jsou energeticky méně náročné.
4

## Strana PDF 169
Obrázek 5: Topologie IoT sítí
Telekomunikační technologie pro IoT
Mobilní telekomunikační sítě -> Veřejné mobilní sítě (GSM, 3G, 4G, 5G, NB-IoT, LTE-M), WLAN,
LPWAN. Komunikovat se dá přes mobilní (celluar) sítě, nebo přes lokální sítě. Příkladem mobilních
sítí je například NB-IoT nebo LTE-M, které jsou součástí standardu Long Term Evolution (LTE),
čímž se společenství 3GPP snaží adresovat M2M komunikaci. Z lokálních sítí je pak možné použít
např. WiFi, Bluetooth Low Energy, LoRa, SIGFOX, nebo Zigbee. Každý má svoje výhody a
nevýhody, např. WiFi je hodně rozšířená ale energeticky není zrovna moc efektivní. Na druhou
stranu LoRa má velký dosah až několik kilometrů.
IoT v praxi
Níže jsou vyspány některé nápady využití IoT. U státnic si prostě vycucej z konečníku první IoT
věc co tě napadne, dá se to naroubovat na všechno od optimalizace výroby ve fabrice díky senzorům
až po IoT vibrátor.
Smart Cities - Monitorování parkovacích míst, Odpadové hospodářství, Inteligentní osvětlení
Asset management - Monitorování billboardů, Sledování zařízení/vybavení, Odpadové hospodář-
ství
Životní prostředí - Monitorování stavu ovzduší/radiace/vody/atp., Detekce překročení maximální
hladiny hluku, Počítadla ...
Bezpečnost - Detekce kouře a požáru, Detekce vniknutí do střeženého objektu, Detekce narušení
perimetru (otevření poklopu, vrat atp.)
Utility - Odečty stavu měřidel, Detekce anomálních stavů zařízení
IoT je nástroj, který umožňuje propojovat věci, to ale samo o sobě nestačí, pravé bohatství se
skrývá v informacích. IoT systémy jsou komplementární součástí současné IT infrastruktury, nemají
ambici ji nahradit. Každý IoT projekt je jiný, a proto je třeba vždy v návrhové fázi spočítat business
case. Koexistence miliard zařízení
Zákony jsou trochu proti. Informace nasbírané v jedné lokalitě jsou v místě původu legální, ale v
jiné oblasti sítě, kam putují, jsou klasifikována jako osobní a nesmí se shromažďovat. Odlišným
problémem může být využívání dat nasbíraných zařízeními ke kontrolním praktikám, aby nebyly
použity diskriminačním způsobem. Bude nutné vyřešit otázku zodpovědnosti za IoT zařízení, kdy v
důsledku použití IoT zařízení dojde ke škodám na majetku nebo životech.
5

## Strana PDF 170
Obrázek 6: Telekomunikační LPWAN technologie pro IoT
6

## Strana PDF 171
POP/POP3 (Post oﬃce protocol) se nejdříve musí autorizovat a poté proběhne fáze transakce jako:
seznam zpráv, stažení zprávy nebo smazání.
IMAP (Internet mail access protocol) je pokročilejší a slouží stejně jako POP k stažení zpráv ze
serveru, navíc nabízí také vyhledávací a třídící funkce.
Systém doménových jmen DNS
Doménové jméno je alfanumerický název serveru jako www.seznam.cz, to nahrazuje přímou ad-
resaci. DNS (Domain name system) je celosvětově distribuovaná databáze, která přiřazuje doménové
jméno k IP adrese stanice a má i další funkce. Předchůdcem DNS byl soubor HOSTS.TXT, který
bylo nutné pravidelně aktualizovat z centrálního serveru. Hiearchie DNS je reprezentována stromem
a je znázorněna na následujícím obrázku (nejvyšší doména root a další top-level domény (TLD) jsou
spravovány ICANN5):
Celé DNS jméno včetně teček musí být dlouhé max. 255 znaků a je kanonické (jednoznačné). Jen
část www je nekanonická a určuje jméno koncového zařízení. Na konci DNS jména v záznamu by měla
být tečka jako identifikátor kořene stromu. TLD jsou většinou geografické (cz, de, be) nebo organizační
a funkční (com, edu, gov, net). DNS klient resolver je aplikace na straně koncové stanice, která se
spojí s DNS serverem a předá DNS jméno, server poté vrátí jeho IP adresu. Každá zóna má svůj
primární DNS server (master) a několik sekundárních (slave). Jednotlivé domény (servery root, cz,
cvut.cz, fel.cvut.cz) lze dotazovat rekurzivně, kdy vše provede DNS server, nebo iteračně, kdy každou
doménu musí dotazovat sám resolver.
32 Vlastnosti polovodičů a polovodičové struktury (přechody PN a
MS, heteropřechody, struktura MIS), pasivní elektronické prvky
(struktury, vlastnosti, modely a aplikace). (B2B34ELP)
Vlastnosti polovodičů
•Proměnlivávodivostvzávislostinateplotě,steplotousevodivostzvyšuje(vyššípravděpodobnost
uvolnění elektronu z valenčního pásu do vodivostního).
•Vodivost ovlivňují příměsi (např.: přidáním příměsí fosforu vzniknou volné elektrony, příměsemi
boru vzniknou díry) a strukturální poruchy.
•Vodivost rozlišujeme na elektronovou (volné elektrony) a děrovou (chybějící elektrony, do děr
se přemisťují jiné elektrony). Nosičem náboje je vždy elektron (volný v mřížce nebo uvolněný z
kovalentní vazby mezi dvěma atomy)!
5Internet corporation for asigned names and numbers
136
