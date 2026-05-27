# Základy elektrických obvodů (B2B31ZEOA) - otázka 1

**Oficiální otázka:** Základní zákony a teorémy. Kirchhoffovy zákonů. Nortonův a Theveninův teorém. Elementární a obecné metody analýzy obvodů, metoda uzlových napětí a smyčkových proudů.

**Zdroj:** `complete-HEX-compost.pdf`, strany 97-107
## Strana PDF 97
Základní zákony a teorémy. Kirchhoffovy zákony. Nortonův a
Theveninův teorém. Elementární a obecné metody analýzy
obvodů, metoda uzlových napětí a smyčkových proudů.
HEX
Základní ideální obvodové prvky
Rezistor
vyjadřuje nevratné přeměny el. energie v obvodech
Obrázek 1: Symbol rezistoru
Ohmův zákon - vztah mezi u(t) a i(t) na rezistoru R
$$
u = R\cdot i
$$
okamžitý výkon
$$
p(t) = u(i)\cdot i(t)
p(t) = Ri2(t) = Gu2(t) = u_{2}(t)
$$
R
Kapacitor
vyjadřuje energii el. pole akumulovanou v obvodech
$$
q= Cu
$$
dq
$$
dt= i
$$
1

## Strana PDF 98
Obrázek 2: Symbol kapacitoru
vztah mezi u(t) a i(t) na kapacitoru C
$$
u =
i= C du
$$
dt
1
C idt
Energie (el. pole kondenzátoru)
$$
W=
$$
1
2Cu2
Induktor
zásobník energie magnetického pole
Obrázek 3: Symbol induktoru
2

## Strana PDF 99
Φ = Li
dΦ
$$
u =
$$
dt
vztah mezi u(t) a i(t) na induktoru L
$$
u = L di
$$
dt
$$
i=
$$
1
L udt
Energie (mag. pole cívky)
1
$$
W=
$$
Li2
2
Ekvivalence obvodových prvků
sériové řazení R
$$
R=
$$
n
$$
i=1
$$
Ri
Obrázek 4: Sériové řazení rezistorů
paralelní řazení R
$$
G=
$$
1
$$
R=
$$
n
$$
i=1
$$
n
$$
i=1
$$
Gi
1
Ri
3

## Strana PDF 100
sériové řazení C
paralelní řazení C
sériové řazení L
paralelní řazení L
Obrázek 5: Paralelní řazení rezistorů
1
$$
C=
$$
n
$$
i=1
$$
1
Ci
Obrázek 6: Sériové řazení kapacitorů
$$
C=
$$
n
$$
i=1
$$
Ci
$$
L=
$$
n
$$
i=1
$$
Li
1
$$
L=
$$
n
$$
i=1
$$
1
Li
4

## Strana PDF 101
Obrázek 7: Paralelní řazení kapacitorů
Obrázek 8: Sériové řazení induktorů
5

## Strana PDF 102
Obrázek 9: Sériové řazení induktorů
Ekvivalence ideálních zdrojů
ekvivalence zdrojů napětí
$$
u(t) =
$$
n
$$
k=1
$$
uk (t)
Obrázek 10: ekvivalence zdrojů napětí
ekvivalence zdrojů proudu
$$
i(t) =
$$
n
$$
k=1
$$
ik (t)
6

## Strana PDF 103
Obrázek 11: ekvivalence zdrojů proudu
Dělič napětí
7

## Strana PDF 104
Dělič proudu
Elementární a obecné metody analýzy obvodů
terminologie
elementární (heuristické, speciální
jednoduché metody a postupy bez sestavování rovnic
řešitel volí metody podle znalostí a okolností, není dán pevný postup řešení
použitelné pro jednoduché obvody
algoritmické
pevný algoritmus, který vede k cíli
obvodové rovnice
Princip superpozice
platí pouze pro lineární obvody
Působí-li několik nezávislých zdrojů u a i, pak je možné libovolnou obvodovou veličinu zjistit jako
součet odezev při působení každého zdroje zvlášť
Ostatní zdroje musíme korektně vyřadit
8

## Strana PDF 105
Metoda postupného zjednodušování
princip řešení - postupné zjednodušování obvodu (sériově a paralelně řazených prvků) až na obvod
obsahující jeden zdroj a jeden rezistor
výhody - jednoduchá metoda - použití základních matematických operací - vhodné pro „ruční
výpočty“
nevýhody - zdlouhavá a pracná metoda - analýza pouze jednodušších obvodů s jediným zdrojem -
postup řešení je „individuální “ (vyžaduje zkušenost) - některé obvody nelze takto řešit
Metoda uzlových napětí
popis pomocí I. Kirchhoffova zákona
popis všech uzlů vůči referenčnímu pomocí uzlových napětí d = u – 1
napětí na prvcích, které nejsou spojeny s referenčním uzlem, se vyjádří jako rozdíl uzlových napětí
1. zvolíme a označíme referenční uzel
2. očíslujeme všechny ostatní uzly
3. v obvodech s plovoucími zdroji popíšeme řez (superuzel)
4. pro zdroje napětí spojené s referenčním uzlem nesestavujeme rovnice
5. prouzlysneznámýmnapětímsestavímeobvodovérovnice(proudyvytékajícízuzlupovažujeme
za kladné)
6. nalezneme neznámá hledaná uzlová napětí
7. vypočteme všechna napětí
8. vypočteme všechny proudy
Metoda smyčkových proudů
popis pomocí II. Kirchhoffova zákona
popis všech nezávislých smyček pomocí smyčkových proudů
proudy ve společných větvích jsou dány superpozicí příslušných smyčkových proudů
1. zvolíme nezávislé smyčky a vyznačíme smyčkové proudy
• kladné smysly proudů volíme
• zdroje proudů musí být v nezávislé větvi
9

## Strana PDF 106
2. pro smyčky se zdroji proudu nesestavujeme rovnice
3. sestavíme obvodové rovnice pro neznámé smyčkové proudy
4. nalezneme neznámé hledané smyčkové proudy
5. vypočteme všechny proudy
6. vypočteme všechna napětí
planární struktura -> není nutno kreslit graf obvodu
soustava jednoduchých smyček = soustava nezávislých smyček
hledaný neznámý smyčkový proud nelze vést zdrojem proudu
PRO SMYČKY SE ZDROJI PROUDU ROVNICI NESESTAVUJI
1. Kirchhoffův zákon – proudový, KCL
Představte si dvě spojené potrubí. Prvním protéká litr vody za sekundu, druhým pak dva litry
vody za sekundu. Kolik vody vytéká z jejich spoje?
Tuto myšlenku můžeme rozšířit na libovolný počet vodičů, které se spojují ve stejném uzlu, nebo
svorce zařízení, a psát
10

## Strana PDF 107
n
$$
Ik = 0
k=1
$$
2. Kirchhoffův zákon – napěťový (KVL)
n
$$
Uk = 0
k=1
$$
11
