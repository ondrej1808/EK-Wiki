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

#### K čemu maska vlastně slouží?

1. **Zjistit adresu sítě** – operací AND (IP & maska) zařízení pozná, do které sítě paket patří.
2. **Rozhodnout, zda je cíl lokální, nebo vzdálený** – pokud cíl leží ve stejné síti, komunikuje zařízení přímo; jinak pošle paket na výchozí bránu (default gateway).
3. **Rozdělit velkou síť na podsítě (subnetting)** – jedna přidělená adresa se dá rozdělit na více menších sítí, což šetří adresní prostor a zlepšuje organizaci.

**Příklad rozhodnutí.** Mám IP `192.168.1.42/24` a chci komunikovat s `192.168.1.100`:

```
192.168.1.42  AND 255.255.255.0 = 192.168.1.0   ← moje síť
192.168.1.100 AND 255.255.255.0 = 192.168.1.0   ← cílová síť
```

Stejná síť → komunikuji **přímo** (bez routeru). Kdybych chtěl `8.8.8.8`:

```
8.8.8.8 AND 255.255.255.0 = 8.8.8.0   ← jiná síť
```

Jiná síť → paket pošlu na **výchozí bránu**.

**Zkrácený zápis (CIDR).** Místo `255.255.255.0` se píše `/24` – číslo udává počet jedničkových bitů v masce. Např. `255.255.0.0` = `/16`, `255.0.0.0` = `/8`. Čím větší číslo za lomítkem, tím větší síťová část a tím menší podsíť (méně hostů).
IPv6 nepotřebuje masky. Je složená ze 128 bitových čísel.
Jsou tři třídy adres - síťové adresy- první adresa v síti, nebo podsíti - broadcast - poslendí adresa v
síti, nebo podsíti; umožňuje adresovat většímu počtu zařízení - loopback - pro testování, dělá to
přesně to jak se to jmenuje
Základy směrování v IP sítích

> 🎥 **OSI Model Deep Dive** (Kevin Wallace) — vrstvový model komunikace

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/oVVlMqsLdro" title="OSI Model Deep Dive" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>

> 🎥 **Introducing the OSI Model** (krátké shrnutí)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/L4A_cH23uCY" title="OSI Model intro" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>

> 🎥 **MAC adresy** (linková vrstva)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/5LBrO4xwmR8" title="MAC Addresses" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>

> 🎥 **Typy IPv4/IPv6 komunikace** (unicast/multicast/broadcast)

<div style="position:relative;padding-bottom:56.25%;height:0;margin:14px 0;max-width:680px;border-radius:8px;overflow:hidden">
<iframe src="https://www.youtube-nocookie.com/embed/EABf5cFlJH8" title="IPv4 IPv6 communication flows" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
</div>
Směrování je proces nalezení optimální cesty v síti. Využívá k tomu informace obsažené v poli
adresa cíle v záhlaví IP paketu. Proces probíhá na třetí vrstvě RM OSI a fyzické prvky které jej
realizují se nazývají Směrovače (router).
Obrázek 1: Idea směrování
IP je nespojově orientovaný protokol. Každý IP paket obsahuje cílovou IP adresu. Směrovače tuto
1

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
gateway=192.168.1.42 - ip route add 147.32.0.0/16 via 192.168.33.33
Výhody: směrovač se chová přesně tak, jak chceme. Nízká režie ve srovnání s dynamickými směro-
vacími protokoly a není potřeba směrovacích protokolů
Nevýhody:nedokážereagovatnazměnutopologieanenívhodnéprovětšísítě(složitáadministrace).
Dynamické směrování
Záznamy do směrovací tabulky jsou přidávány/ubírány automaticky na základě informací od
směrovacích protokolů. Směrovač sám určí optimální trasu, směrovače spolu komunikují a vyměňují
si informace o dostupných sítích.
Výhody: schopnost dynamicky reagovat na změny v síti, vhodné pro větší sítě -> loadbalancing
Nevýhody: zvýšené nároky na CPU, RAM, šířku použitého pásma
2

Autonomní systém
Autonomní systém je množina směrovačů (a sítí) pod jednotnou správou s jednotnou směrovací
politikou.Používásetozdůvoduomezenívelikostisměrovacíchtabulek.Každáautonomnísystémje
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
spojenísešířípostupně).Neaktuálnítabulkaznamenášpatnésměrovánídokudsměrovacíalgoritmus
znovu nezkonverguje.
3

Směrovací protokoly typu Link-State
Každý uzel zná kompletní topologii sítě. Pokud uzel vypadne, každý uzel v síti dokáže spočítat
novou cestu. Problém: Všechny uzly v síti musí mít shodný pohled na síť (topologickou databázi).
Ke konvergenci dojde, jestliže každý uzel v síti má kompletní informace o topologii sítě a informace
o stavu spojení mezi směrovači (link-state) rozesílány všem uzlům.
Obrázek 4: Směrovací protokol typu LS
Protokoly mají rychlou konvergenci. Po obdržení LSP, okamžité odeslání LSP na všechna rozhraní
(mimo zdrojové) -> rychlá konvergence. I v případě Triggered Updates je třeba před odesláním
aktualizace spustit aktualizaci směrovacích informací a aktualizovat směrovací tabulku.
Event-drivenaktualizaceznamenážeLSPobsahujeinformacipouzeosítích,unichždošlokezměně.
Link-State protokoly zatěžují CPU více než Distance-vector, protože SPF algoritmus vyžaduje více
CPU pro vytvoření celé mapy topologie.
Link-StateprotokolypotřebujímenšíšířkupásmanežDistance-vector,alezáplavaLSPvícezatěžuje
dostupnou šířku pásma při inicializaci (nebo nestabilitě sítě).
Link-StateprotokolyvyžadujívícepamětinežDistance-vector,protožepoužívajílink-statedatabáze
a vytvářejí SPF strom.
Internet věcí a platformy pro vývoj aplikací M2M
“IoTjeskupinainfrastrukturpropojujícípřipojenéobjektyaumožňujícíjejichřízení,shromažďování
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
věccotěnapadne,dásetonaroubovatnavšechnoodoptimalizacevýrobyvefabricedíkysenzorům
až po IoT vibrátor.
Smart Cities - Monitorování parkovacích míst, Odpadové hospodářství, Inteligentní osvětlení
Asset management - Monitorování billboardů, Sledování zařízení/vybavení, Odpadové hospodář-
ství
Životní prostředí -Monitorovánístavuovzduší/radiace/vody/atp.,Detekcepřekročenímaximální
hladiny hluku, Počítadla ...
Bezpečnost - Detekce kouře a požáru, Detekce vniknutí do střeženého objektu, Detekce narušení
perimetru (otevření poklopu, vrat atp.)
Utility - Odečty stavu měřidel, Detekce anomálních stavů zařízení
IoT je nástroj, který umožňuje propojovat věci, to ale samo o sobě nestačí, pravé bohatství se
skrývá v informacích. IoT systémy jsou komplementární součástí současné IT infrastruktury, nemají
ambicijinahradit.KaždýIoTprojektjejiný,aprotojetřebavždyvnávrhovéfázispočítatbusiness
case. Koexistence miliard zařízení
Zákony jsou trochu proti. Informace nasbírané v jedné lokalitě jsou v místě původu legální, ale v
jiné oblasti sítě, kam putují, jsou klasifikována jako osobní a nesmí se shromažďovat. Odlišným
problémem může být využívání dat nasbíraných zařízeními ke kontrolním praktikám, aby nebyly
použity diskriminačním způsobem. Bude nutné vyřešit otázku zodpovědnosti za IoT zařízení, kdy v
důsledku použití IoT zařízení dojde ke škodám na majetku nebo životech.
5

868 MHz (Evropa) 868 MHz (Evropa)

ACE 868 MHz (Evropa) 700-900
: 915 MHz (S. Amerika) © 915 MHz (S. Amerika)
pásma 915 MHz (USA) MHz
433 MHz (Asie) 433 MHz (Asie)
200 kHz
Šířka pásma 100 Hz < 500 kHz nebo
sdíleno
bezlicenční bezlicenční bezlicenční licenční
Maxim 30 - 50 km (venku) .
15-20 km několik set metrů 10- 15 km
dosah 3- 10 km (město)
Rychlost < s < a
až 100 bps až 10 kbps až 20 kbps až 1 Mbps
přeno:
Zivotnost
> 10let > 10let > 10let > 10let

baterie
již dostupné již dostupné již dostupné ? ři

Obrázek 6: Telekomunikační LPWAN technologie pro IoT
