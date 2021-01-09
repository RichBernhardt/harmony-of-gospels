const mt = [
  [
    // 1  ~ Jézus, a Messiás családfája (#A) ~
    `Ez a Messiás Jézus családfája, aki Dávid leszármazottja, Dávid pedig Ábrahám leszármazottja.`,
    // 2
    `Ábrahám fia Izsák,
Izsák fia Jákób,
Jákób fiai Júda és testvérei.`,
    // 3
    `Júda fiai Fáresz és Zerah, akiket Támár szült.
Fáresz fia Heszrón,
Heszrón fia Arám,`,
    // 4
    `Arám fia Aminádáb,
Aminádáb fia Nahson,
Nahson fia Szalmón,`,
    // 5
    `Szalmón fia Boáz, akit Ráháb szült.
Boáz fia Óbéd, akit Ruth szült.
Óbéd fia Isai,`,
    // 6
    `Isai fia Dávid, a király.
Dávid fia Salamon, akit Úriás felesége szült.`,
    // 7
    `Salamon fia Roboám,
Roboám fia Abijjá,
Abijjá fia Ászá,`,
    // 8
    `Ászá fia Jósafát,
Jósafát fia Jórám,
Jórám fia Uzziás,`,
    // 9
    `Uzziás fia Jótám,
Jótám fia Áház,
Áház fia Ezékiás,`,
    // 10
    `Ezékiás fia Manassé,
Manassé fia Ámón,
Ámón fia Jósiás.`,
    // 11
    `Jósiás unokái voltak Jekonjás és testvérei, akik abban az időben éltek, amikor a népet száműzetésbe hurcolták Babilóniába.`,
    // 12
    `A babiloni száműzetés ideje alatt született Jekonjás fia, Sealtiél.
Sealtiél fia Zerubbábel,`,
    // 13
    `Zerubbábel fia Abihud,
Abihud fia Eljákim,
Eljákim fia Azzur,`,
    // 14
    `Azzur fia Cádók,
Cádók fia Jákin,
Jákin fia Elihud,`,
    // 15
    `Elihud fia Eleázár,
Eleázár fia Mattán,
Mattán fia Jákób.`,
    // 16
    `Jákób fia József, aki annak a Máriának a 
<span 
  class="has-tooltip-before"
  data-tooltip="Valószínűleg Mária ”apja”-ként értendő (”férje” helyett)
  • Egyfelől hogy értelmet nyerjen a felmenők eltérése Lk 3:23-38 -hoz képest,
  • Valamint hogy kiadódjon a teljes 14 generáció

  Ez a megjegyzés nem része az ERV-HU Biblia fordításnak"
>férje</span>
    volt, akitől Jézus, a Messiás született.`,
    // 17
    `A nemzedékek száma tehát Ábrahámtól Dávidig tizennégy, Dávidtól a babiloni fogságba vitelig szintén tizennégy, a babiloni fogságba viteltől a Messiás születéséig ismét tizennégy.`,
    // 18  ~ Jézus születése (#B) ~
    `Jézusnak, a Messiásnak születése a következőképpen történt: Mária, Jézus anyja, József jegyese volt. Azonban még mielőtt összeházasodtak volna, kiderült, hogy Mária gyermeket vár, mert a Szentlélek által áldott állapotba került.`,
    // 19
    `József istenfélő ember volt, és a menyasszonyát meg akarta kímélni a nyilvános megszégyenítéstől. Ezért elhatározta, hogy inkább titokban küldi el Máriát, és így válik el tőle.`,
    // 20
    `Ahogy ezen gondolkodott, álmában megjelent neki az Örökkévaló egyik angyala, és ezt mondta: „József, Dávid fia! Ne félj feleségül venni Máriát, mert a méhében lévő gyermek a Szentlélektől fogant!`,
    // 21
    `Fiút szül majd, akit te nevezz el Jézusnak, (#a) mert ő fogja megszabadítani népét a bűneikből.”`,
    // 22
    `Így teljesedett be, amit az Örökkévaló mondott a próféta által:`,
    // 23
    `„Nézzétek! A szűz gyermeket vár,
     és fiút fog szülni,
     akinek Immánuel lesz a neve.” (#b)
Ez a név azt jelenti: „Isten velünk van”.`,
    // 24
    `Azután József felébredt az álomból, és mindent úgy tett, ahogy az Örökkévaló angyala parancsolta.
Feleségül vette Máriát,`,
    // 25
    `de nem volt közöttük szexuális kapcsolat, amíg Mária meg nem szülte a fiát, akinek József a „Jézus” nevet adta.`
  ],
  [
    // 2  ~ A keleti bölcsek imádják Jézust ~
    `Jézus a júdeai Betlehemben született, Heródes király uralkodása idején. Ezután bölcsek érkeztek keletről Jeruzsálembe,`,
    // 2
    `és azt kérdezték: „Hol van az a kisgyermek, aki a zsidók királyának született? Ugyanis láttuk feltűnni a csillagát keleten - és eljöttünk, hogy imádjuk őt.”`,
    // 3
    `Heródes királyt ez a hír nagyon nyugtalanította, és vele együtt Jeruzsálem egész népe is felbolydult.`,
    // 4
    `Heródes emiatt összehívott minden főpapot és törvénytanítót, és megkérdezte tőlük, hol kell megszületnie a Messiásnak.`,
    // 5
    `„A júdeai Betlehemben - válaszolták ők -, ahogyan megírta a próféta:`,
    // 6
    `»Betlehem, Júda földjén,
     nem vagy te jelentéktelen Júda fejedelmei között,
mert belőled származik majd az uralkodó,
     aki pásztora lesz népemnek, Izráelnek!«” (#c)`,
    // 7
    `Ekkor Heródes titokban magához hívatta a bölcseket, és aprólékosan kikérdezte őket, hogy mikor látták meg először a csillagot.`,
    // 8
    `Ezután elküldte őket Betlehembe. „Menjetek el - mondta nekik -, és tudjatok meg mindent a gyermekről! Ha megtaláljátok, hozzatok nekem hírt róla, hogy én is elmenjek, és imádjam őt!”`,
    // 9
    `A bölcsek meghallgatták a királyt, majd útra keltek. Ekkor hirtelen feltűnt előttük ugyanaz a csillag, amelyet már keleten is láttak. A csillag előttük ment, majd megállt a hely fölött, ahol a gyermek volt.`,
    // 10
    `Amikor meglátták a csillagot, ujjongó öröm töltötte be őket.`,
    // 11
    `Bementek a házba, és ott találták a gyermeket, anyjával, Máriával együtt. Leborultak a gyermek előtt, és imádták. Majd felnyitották kincsesládáikat, és ajándékokat adtak neki: aranyat, tömjént és mirhát.`,
    // 12
    `Mivel Isten álmukban figyelmeztette a bölcseket, hogy ne menjenek vissza Heródeshez, ezért más úton tértek haza.`,
    // 13  ~ Menekülés Egyiptomba ~
    `Miután a bölcsek elmentek, Józsefnek álmában megjelent az Örökkévaló egyik angyala, és ezt mondta: „Kelj fel, vedd a gyermeket és anyját, menekülj Egyiptomba, és maradj ott, amíg ismét szólok neked! Heródes ugyanis kutatni fog a gyermek után, mert meg akarja ölni.”`,
    // 14
    `József azonnal felkelt, és még azon az éjjelen a gyermekkel és annak anyjával együtt Egyiptomba indult.`,
    // 15
    `Ott is maradt egészen Heródes haláláig. Így teljesedett be, amit az Örökkévaló mondott a próféta által:
„Egyiptomból hívtam ki a fiamat.” (#d)`,
    // 16  ~ Heródes megöleti a betlehemi gyermekeket ~
    `Amikor Heródes fölismerte, hogy a bölcsek túljártak az eszén, őrjöngött dühében. Kiküldte a katonáit, hogy öljenek meg Betlehemben és a környékén minden fiúgyermeket, aki kétéves, vagy annál fiatalabb volt. A két éves kort azért szabta meg, mert a bölcsektől megtudta a csillag feltűnésének idejét.`,
    // 17
    `Ekkor teljesedett be, amit Isten Jeremiás próféta által mondott:`,
    // 18
    `„Kiáltozás hallatszott Rámában,
     nagy sírás és jajgatás:
Ráhel siratta gyermekeit,
     és nem akart megvigasztalódni,
     mert meghaltak.” (#e)`,
    // 19  ~ Visszatérés Egyiptomból ~
    `József és családja Egyiptomban éltek, amikor Heródesnek vége lett. Akkor az Örökévaló egyik angyala megjelent Józsefnek álmában,`,
    // 20
    `és ezt mondta: „Kelj fel, vedd a gyermeket és az anyját, és térj vissza Izráel földjére, mert akik meg akarták ölni a gyermeket, már meghaltak!”`,
    // 21
    `József útrakelt, és hazatért a gyermekkel és Máriával Izráel földjére.`,
    // 22
    `De nem mert Júdeába menni, mert meghallotta, hogy ott Arkhelaosz, Heródes fia uralkodik. Akkor Isten tanácsot adott Józsefnek álmában, aki így a családjával együtt Galileába ment,`,
    // 23
    `és odaérve Názáret városában telepedett le.
Így teljesedett be, amit Isten a próféták által mondott a Messiásról:
„Názáretinek (#f) fogják őt nevezni.”`
  ],
  [
    // 3  ~ Bemerítő János utat készít a Messiásnak (#C) ~
    `Eljött az idő, amikor Bemerítő János megjelent Júdea pusztájában, és ezt az üzenetet hirdette:`,
    // 2
    `„Változtassátok meg a gondolkodásotokat és az életeteket, mert Isten Királysága megérkezett!”`,
    // 3
    `Őróla mondta ezt Ézsaiás próféta:
„Egy hang kiált a pusztában:
»Készítsetek az Örökkévaló útját,
     készítsetek számára egyenes utat!«” (#g)`,
    // 4
    `Bemerítő János teveszőrből készült ruhát viselt a derekán bőrövvel, és sáskát meg vadmézet evett.`,
    // 5
    `Sokan jöttek hozzá Jeruzsálemből, egész Júdeából és a Jordán környékéről, hogy hallgassák.`,
    // 6
    `Miután megvallották bűneiket, János bemerítette őket a Jordán folyóba.`,
    // 7
    `Amikor azonban látta, hogy a farizeusok és a szadduceusok közül is sokan jönnek bemerítkezni, ezt mondta nekik: „Mérges kígyók! Ki figyelmeztetett titeket, hogy meneküljetek Isten közelgő haragja elől?`,
    // 8
    `Tetteitekkel mutassátok meg, hogy gondolkodásotok és az életetek valóban megváltozott!`,
    // 9
    `Ne gondoljátok, hogy abban bízhattok: »Mi Ábrahám fiai vagyunk!« Tudjátok meg, hogy Isten még ezekből a kövekből is képes fiakat teremteni Ábrahámnak.`,
    // 10
    `A fejszét már fölemelték, hogy gyökerestől kivágják a fákat. Bizony ki is vágnak, és tűzbe dobnak minden fát, amely nem terem jó gyümölcsöt.`,
    // 11
    `Én vízbe merítem be azokat, akik megváltoztatják a gondolkodásukat és visszatérnek Istenhez. De aki utánam jön, annyival hatalmasabb nálam, hogy még arra sem vagyok méltó, hogy a saruját levegyem. Ő majd Szentlélekbe és tűzbe merít be titeket.`,
    // 12
    `A kezében szórólapát van, amellyel elválasztja a búzát a pelyvától. A tiszta búzát magtárába gyűjti, a pelyvát pedig olthatatlan tűzzel megégeti.”`,
    // 13  ~ Jézus bemerítkezik (#D) ~
    `Azután Jézus eljött Galileából a Jordán folyóhoz, hogy János őt is merítse be.`,
    // 14
    `János azonban megpróbálta lebeszélni: „Inkább nekem lenne szükségem arra, hogy bemeríts, mégis te jössz hozzám?”`,
    // 15
    `Jézus így válaszolt: „Engedd meg, hogy ez most így történjen! Meg kell tennünk mindazt, amit Isten kíván.” Ekkor János engedett neki.`,
    // 16
    `Miután Jézus bemerítkezett, azonnal feljött a vízből. Ekkor hirtelen megnyílt a Menny, és János látta, amint Isten Lelke galamb formájában leereszkedik, és Jézusra száll.`,
    // 17
    `A Mennyből pedig hang hallatszott: „Ő a Fiam, akit nagyon szeretek, s akiben gyönyörködöm!”`
  ],
  [
    // 4  ~ Jézust próbára teszi a Sátán (#E) ~
    `Ezután a Szentlélek a pusztába vezette Jézust, hogy ott próbára tegye a Sátán.`,
    // 2
    `Miután Jézus negyven nap és negyven éjjel böjtölt, végül nagyon megéhezett.`,
    // 3
    `A Sátán (#h) ekkor odalépett hozzá, és megszólította: „Ha Isten Fia vagy, parancsolj, hogy ezek a kövek változzanak kenyérré!”`,
    // 4
    `Ő azonban így felelt: „Meg van írva:
»Nem csak a kenyér élteti az embert,
     hanem Isten minden kimondott szava is.«” (#i)`,
    // 5
    `Ezután a szent városba, Jeruzsálembe vitte őt a Sátán, és a Templom területének szélére, egy szakadék fölé állította.`,
    // 6
    `„Ha Isten Fia vagy - mondta neki -, vesd le magad a mélybe, hiszen meg van írva:
»Angyalainak parancsot ad,
     hogy vigyázzanak rád.
A tenyerükön hordoznak,
     nehogy kőbe üsd a lábad.«” (#j)`,
    // 7
    `Jézus így válaszolt: „Az is meg van írva:
»Ne tedd próbára az Örökkévalót, Istenedet!«” (#k)`,
    // 8
    `Ezután a Sátán egy nagyon magas hegyre vitte fel Jézust. Megmutatta neki a világ összes királyságát és azoknak minden dicsőségét.`,
    // 9
    `„Ezt mind neked adom - mondta -, ha leborulva imádsz engem.”`,
    // 10
    `Jézus erre így válaszolt: „Menj el tőlem, Sátán! Meg van írva:
»Az Örökkévalót, Istenedet imádd,
     és csak őt tiszteld!«” (#l)`,
    // 11
    `Ekkor a Sátán elment, és angyalok jöttek Jézushoz, hogy szolgálatára legyenek.`,
    // 12  ~ Jézus Galileában kezdi meg a munkáját (#F) ~
    `Amikor Jézus meghallotta, hogy Bemerítő Jánost börtönbe vetették, visszament Galileába.`,
    // 13
    `Elhagyta Názáretet, és a Galileai-tó melletti Kapernaumba költözött, Zebulon és Naftáli határvidékére,`,
    // 14
    `hogy beteljesedjen Ézsaiás próféta szava:`,
    // 15
    `„Figyeljetek rám, akik Zebulon és Naftáli földjén éltek,
     a tengerparti út vidékén,
     a Jordánon túli területen,
     az idegen népek Galileájában!`,
    // 16
    `A sötétségben élő nép
     nagy világosságot látott.
Akik halál földjén és árnyékában laktak,
     azoknak hajnali világosság támadt.” (#m)`,
    // 17
    `Jézus ettől fogva kezdte hirdetni: „Változtassátok meg, ahogy gondolkodtok, és térjetek vissza Istenhez, mert Isten Királysága megérkezett!”`,
    // 18  ~ Maga mellé szólítja tanítványait (#G) ~
    `Amikor Jézus a Galileai-tó mellett járt, meglátott két testvért: Simont (akit Péternek is neveztek), és Andrást, akik éppen a hálójukat vetették a tóba, ugyanis halászok voltak.`,
    // 19
    `Jézus szólt nekik: „Gyertek velem! Én majd másféle halásszá teszlek titeket: halak helyett embereket fogtok összegyűjteni.”`,
    // 20
    `A testvérek azonnal otthagyták hálóikat, és csatlakoztak Jézushoz.`,
    // 21
    `Mikor továbbment onnan, Jézus meglátott egy másik testvérpárt is: Jakabot és Jánost, Zebedeus fiait. Ők apjukkal együtt éppen hálókat javítgattak a halászbárkában. Jézus szólt ennek a testvérpárnak is,`,
    // 22
    `ők pedig azonnal otthagyták a bárkát és apjukat, és csatlakoztak Jézushoz.`,
    // 23  ~ Tanít és gyógyít (#H) ~
    `Jézus bejárta egész Galileát. Tanított a zsinagógákban, hirdette az Isten Királyságról szóló örömüzenetet, és meggyógyított mindenféle betegséget, és erőtlenséget a nép között.`,
    // 24
    `Elterjedt a híre még Szíria egész tartományában is. Ezért hozzá vittek mindenféle beteget: epilepsziásokat, bénákat, és olyanokat, akik különböző fájdalmaktól szenvedtek, meg akikben gonosz szellem volt. Jézus pedig meggyógyította őket.`,
    // 25
    `Ezért nagy tömeg vette körül, és kísérte. Galileából, a Tízvárosból, Jeruzsálemből, Júdeából és a Jordán folyón túlról jöttek.`
  ],
  [
    // 5  ~ Boldogok és áldottak vagytok! (#I) ~
    `Amikor Jézus látta, hogy milyen sokan gyűltek össze, fölment a domb oldalára. Mikor leült, a tanítványai köré gyűltek.`,
    // 2
    `Ő pedig így kezdte őket tanítani:`,
    // 3
    `„Milyen boldogok és áldottak,
     akik felismerik, hogy szükségük van Istenre,
mert övék Isten Királysága!`,
    // 4
    `Milyen boldogok és áldottak,
     akik most gyászolnak és sírnak,
mert Isten majd megvigasztalja őket!`,
    // 5
    `Milyen boldogok és áldottak
     a szelídek és alázatosak,
mert ők fogják örökölni a földet!`,
    // 6
    `Milyen boldogok és áldottak,
     akik éheznek és szomjaznak az igazságosságra,
mert Isten megadja nekik, amire vágynak!`,
    // 7
    `Milyen boldogok és áldottak,
     akik irgalmasan bánnak másokkal,
mert Isten is irgalmasan bánik velük!`,
    // 8
    `Milyen boldogok és áldottak
     a tiszta szívűek,
mert ők meglátják Istent!`,
    // 9
    `Milyen boldogok és áldottak,
     akik békességet teremtenek,
mert őket Isten gyermekeinek (#n) nevezik!`,
    // 10
    `Milyen boldogok és áldottak,
     akiket azért üldöznek, mert igazságosak!
Övék Isten Királysága!”`,
    // 11
    `„Boldogok és áldottak vagytok, amikor miattam üldöznek, bántanak titeket, vagy mindenféle rosszat mondanak rólatok ok nélkül.`,
    // 12
    `Örüljetek és ujjongjatok, mert igen nagy jutalom vár rátok a Mennyben! Így üldözték azokat a prófétákat is, akik előttetek éltek.”`,
    // 13  ~ Só és világosság (#J) ~
    `„Ti olyanok vagytok az emberek között, mint a só. De ha a só elveszti az ízét, hogyan lehet azt helyreállítani? Bizony, akkor már semmire sem jó, ezért az emberek kidobják és eltapossák.`,
    // 14
    `Ti vagytok a világosság az egész világ számára. A hegy tetejére épített várost sem lehet elrejteni.`,
    // 15
    `Ugyanígy, aki olajmécsest gyújt, nem rejti edény alá, hanem a mécstartóra teszi, hogy mindenkinek világítson, aki a házban van.`,
    // 16
    `Így ragyogjon a világosságotok az embereknek: hadd lássák, milyen jó, amit tesztek, és dicsérjék érte Mennyei Atyátokat!”`,
    // 17  ~ Jézus és a Törvény ~
    `„Ne gondoljátok, hogy azért jöttem, hogy érvénytelenné tegyem a Mózesi Törvényt, vagy a próféták tanítását! Ellenkezőleg, azért jöttem, hogy beteljesítsem!`,
    // 18
    `Igazán mondom nektek: amíg az Ég és a Föld létezik, a Törvényből egyetlen betű vagy pont sem veszíti el érvényességét, amíg mind be nem teljesedik.`,
    // 19
    `Ha valaki nem tart fontosnak akár csak egyet is a Törvény parancsai közül, és nem engedelmeskedik annak, sőt, még a többieket is erre tanítja, az lesz a legkisebb Isten Királyságában. Aki viszont megtartja a Törvény parancsait, és erre tanítja a többieket is, az nagy lesz Isten Királyságában.`,
    // 20
    `Igazán mondom nektek: ha csak annyira éltek Istennek tetsző módon, mint a törvénytanítók és a farizeusok, akkor sohasem fogtok bemenni Isten Királyságába.”`,
    // 21  ~ A haragról ~
    `„Hallottátok, hogy őseinknek megmondták: »Ne gyilkolj! Aki pedig mégis gyilkol, azt el kell ítélni.« (#o)`,
    // 22
    `Én azonban azt mondom nektek: ha valaki haragot táplál magában a másik ember ellen, azt már el kell ítélni. Ha pedig haragjában azt mondja valakinek: »Te hitvány bolond!« - azt a Főtanács fogja elítélni. Ha pedig odáig megy, hogy a másikat »istentelen hülyének« nevezi, az megérdemli, hogy az örök tüzre dobják.`,
    // 23
    `Ezért, ha áldozati ajándékot viszel az oltárhoz, és ott eszedbe jut, hogy valakinek panasza van ellened,`,
    // 24
    `hagyd az oltár előtt ajándékodat, menj el, és békülj ki a haragosoddal! Csak azután menj vissza az oltárhoz, hogy felajánljad áldozatodat Istennek!`,
    // 25
    `Békülj ki hamar ellenfeleddel, amíg úton vagytok a bíróság felé. Különben ellenfeled a bíró kezébe adhat, a bíró meg a börtönőrnek, s így végül börtönbe zárnak!`,
    // 26
    `Igazán mondom neked: ki nem jössz onnan, amíg az utolsó fillérig ki nem fizetted tartozásodat!”`,
    // 27  ~ A szexuális bűnökről ~
    `„Hallottátok, hogy megmondták: »Ne kövess el házasságtörést!« (#p)`,
    // 28
    `Én viszont azt mondom nektek: ha valaki a házasságtörés vágyával néz más feleségére, az magában már el is követte a házasságtörés bűnét.`,
    // 29
    `Ezért, ha a jobb szemed vinne bűnbe, még azt is inkább vájd ki, és hajítsd el! Jobban jársz, ha a tested egy részét elveszíted, mint ha ép testtel dobnak a gyehennára!`,
    // 30
    `Ha pedig a jobb kezed vinne bűnbe, még azt is vágd le, és dobd el! Jobban jársz, ha a tested egy részét elveszíted, mint ha ép testtel vetnek a gyehennára!”`,
    // 31  ~ A válásról (#K) ~
    `„Ezt is mondták nektek: »Aki elválik a feleségétől, adjon neki válólevelet!« (#q)`,
    // 32
    `Én viszont azt mondom: maga hajtja a feleségét a házasságtörés bűnébe az a férfi, aki bármilyen okból - egyet kivéve - elválik a feleségétől. A kivétel pedig az, ha a feleség házasságtörést követett el. S aki az elbocsátott asszonyt feleségül veszi, az is házasságtörést követ el.”`,
    // 33  ~ Az esküről ~
    `„Hallottátok, hogy őseinknek azt mondták: »Ha megesküszöl valamire, azt ne szegd meg! Amit esküvel ígértél az Örökkévalónak, azt teljesítsd!« (#r)`,
    // 34
    `Én viszont azt mondom nektek: egyáltalán ne esküdjetek, se az Égre, mert az Isten királyi trónja,`,
    // 35
    `se a Földre, mert az Isten lábtartója, se Jeruzsálemre, mert az a Nagy Király városa!`,
    // 36
    `Még a saját fejedre se esküdj, mert egyetlen hajszáladat sem tudod feketévé vagy fehérré tenni!`,
    // 37
    `Ha »igent« gondoltok, akkor mondjatok igent, ha »nemet« - akkor mondjatok nemet! Amit ezen kívül még hozzátesztek, az már a Gonosztól van.”`,
    // 38  ~ Ne fizess rosszal a rosszért! (#L) ~
    `„Hallottátok, hogy megmondták: »Szemet szemért és fogat fogért!« (#s)`,
    // 39
    `Én viszont azt mondom nektek: ne üssetek vissza annak, aki kárt okoz nektek! Ha valaki arcul üt az egyik oldalról, tartsd oda neki a másik arcodat is!`,
    // 40
    `Ha valaki el akarja perelni tőled a kabátodat, add oda neki az ingedet is!`,
    // 41
    `Ha valaki arra kényszerít, hogy vidd a csomagját egy mérföldre, vidd el neki kettőre!`,
    // 42
    `Ha valaki kölcsönkér tőled valamit, azt add kölcsön neki! Ha pénzt kér kölcsön, ne utasítsd el!”`,
    // 43  ~ Szeressétek ellenségeiteket! (#M) ~
    `„Hallottátok, hogy megmondták: »Szeresd a honfitársaidat, de gyűlöld az ellenségeidet!« (#t)`,
    // 44
    `Én viszont azt mondom nektek: Szeressétek ellenségeiteket, és imádkozzatok azokért, akik üldöznek titeket!`,
    // 45
    `Így valóban Mennyei Atyátok fiai lesztek. Ő ugyanis felhozza a Napot, amely az övé, hogy világítson a gonoszoknak és a jóknak is. Hasonlóképpen, esőt küld az igazságosaknak és a bűnösöknek egyaránt.`,
    // 46
    `Ha tehát csak azokat szeretitek, akik szeretnek titeket, ugyan milyen jutalmat kaptok? Ennyit a vámszedők is megtesznek!`,
    // 47
    `Ha csak a testvéreiteknek köszöntök, ugyan mennyivel tesztek többet, mint mások? Ezt még azok is megteszik, akik nem ismerik Istent!`,
    // 48
    `Legyetek tehát tökéletesek, mint ahogy Mennyei Atyátok tökéletes!”`
  ],
  [
    // 6  ~ Az adakozásról ~
    `„Vigyázzatok, hogy ne az emberek szeme láttára tegyetek jót! Ne azért tegyétek, hogy mindenki lássa, különben nem kaptok semmi jutalmat Mennyei Atyátoktól!`,
    // 2
    `Ha adsz valamit a szegényeknek, ne kürtöld szét a hírét, hogy mindenki rád figyeljen! Ezt a képmutatók teszik a zsinagógákban és az utcákon, hogy dicsérjék és tiszteljék őket! Igazán mondom nektek: ezzel már meg is kapták az összes jutalmukat.`,
    // 3
    `Te azonban úgy adakozz a szegényeknek, hogy még a bal kezed se tudja, mit ad a jobb kezed!`,
    // 4
    `Amit adsz, azt titokban add! Mennyei Atyád, aki jól látja, amit titokban teszel, megjutalmaz majd érte.”`,
    // 5  ~ Az imádkozásról (#N) ~
    `„Amikor imádkoztok, ne legyetek olyanok, mint a képmutatók, akik szeretnek felállni és hangosan imádkozni a zsinagógában és az utcasarkon, hogy mindenki lássa és hallja őket! Igazán mondom nektek: ezzel már meg is kapták az összes jutalmukat.`,
    // 6
    `Amikor imádkozol, menj be a szobádba, zárd be az ajtót, és titokban imádkozz Mennyei Atyádhoz! Ő látja, amit titokban teszel, és megjutalmaz érte!`,
    // 7
    `Amikor imádkoztok, ne legyetek bőbeszédűek, mint azok, akik nem ismerik Istent, és azt hiszik, hogy akkor teljesül a kérésük, ha sokszor ismételgetik.`,
    // 8
    `Ne utánozzátok őket! Mennyei Atyátok jól tudja, mire van szükségetek, még mielőtt kérnétek tőle.`,
    // 9
    `Inkább így imádkozzatok:
»Atyánk, aki a Mennyben vagy,
     legyen megszentelve a neved!`,
    // 10
    `Jöjjön el királyi uralmad,
     és akaratod teljesüljön itt a Földön is,
     ahogy a Mennyben teljesül!`,
    // 11
    `A mindennapi kenyerünket add meg nekünk ma!`,
    // 12
    `Bocsásd meg a bűneinket,
     ahogyan mi is megbocsátottunk azoknak,
     akik ellenünk vétkeztek!`,
    // 13
    `Ne engedd, hogy kísértésekkel próbára tegyenek bennünket,
     és szabadíts meg minket a gonosztól!« (#u)`,
    // 14
    `Mert ha megbocsátjátok az embereknek bűneiket, akkor Mennyei Atyátok is megbocsát nektek.`,
    // 15
    `De ha nem bocsátotok meg másoknak, akkor Mennyei Atyátok sem bocsát meg nektek.”`,
    // 16  ~ A böjtölésről ~
    `„Amikor böjtöltök, ne legyen szomorú az arcotok, mint a képmutatóké, akik elgyötört arckifejezésükkel mutatják, hogy böjtölnek. Igazán mondom nektek: ezzel már meg is kapták az összes jutalmukat.`,
    // 17
    `Te azonban úgy öltözz és viselkedj, hogy`,
    // 18
    `senki se vegye észre, amikor böjtölsz! Csak Mennyei Atyád lássa, aki titokban figyel, s ő majd megjutalmaz.”`,
    // 19  ~ Nem szolgálhatsz egyszerre két úrnak! (#O) ~
    `„Ne a földön gyűjtsetek magatoknak kincseket, ahol elpusztítja a moly, a rozsda, vagy ellopják a tolvajok és a betörők!`,
    // 20
    `Inkább a Mennyben gyűjtsetek kincseket, mert ott sem moly, sem rozsda nem teszi tönkre, sem a tolvajok nem lopják el!`,
    // 21
    `Mert ahol az értékeid vannak, oda húz a szíved.`,
    // 22
    `Egész lényedet a tekinteted világítja meg. Ezért, ha jóindulattal és adakozásra készen tekintesz az emberekre, akkor egész lényedet elárasztja a világosság.`,
    // 23
    `Ha viszont önző és zsugori módon nézel rájuk, akkor egész lényed elsötétül. Ha pedig a tekinteted, vagyis a mécsesed elsötétül, akkor valóban nagy sötétségbe kerültél! (#v)`,
    // 24
    `Egyetlen szolga sem szolgálhat egyszerre két úrnak, mert vagy az egyiket gyűlöli, és a másikat szereti, vagy az egyikhez ragaszkodik, a másikat pedig megveti. Nem szolgálhatjátok egyszerre Istent és a Pénzt!” (#w)`,
    // 25  ~ Isten Királysága legyen az első! (#P) ~
    `„Ezért azt mondom nektek: Ne aggódjatok életetek miatt, hogy mit fogtok enni és inni, se testetek miatt, hogy mibe fogtok öltözködni! Hiszen nagyobb dolog életet adni, mint az ételről gondoskodni! Nagyobb dolog testet alkotni, mint ruhát készíteni!`,
    // 26
    `Figyeljétek meg az égi madarakat! Nem vetnek, nem aratnak, élelmet sem gyűjtenek magtárba - Mennyei Atyátok mégis táplálja őket. Ti azonban sokkal értékesebbek vagytok, mint a madarak!`,
    // 27
    `Ki tudná közületek aggodalmaskodásával akár csak egy órával is meghosszabbítani az életét?`,
    // 28
    `Miért aggódtok a ruhák miatt? Figyeljétek meg a mezőn a vadvirágokat, hogyan növekednek, pedig nem fáradoznak, hogy ruhát készítsenek maguknak!`,
    // 29
    `Mégis azt mondom nektek, Salamon király a dicsősége csúcsán sem öltözködött olyan szépen, mint ezek közül bármelyik.`,
    // 30
    `Látjátok, ezek a növények ma még virágzanak, holnapra pedig már elszáradnak, és a tűzbe dobják őket, Isten mégis milyen gyönyörűen öltözteti őket! Mennyivel inkább fog titeket öltöztetni?! Ne legyetek hát kishitűek!`,
    // 31
    `Ne aggódjatok, és ne kérdezzétek: »Mit fogunk enni, és mit fogunk inni?«, vagy: »Mibe öltözzünk?«`,
    // 32
    `Azok törtetnek szüntelen ilyen dolgok után, akik nem ismerik Istent. Mennyei Atyátok jól tudja, hogy mindezekre szükségetek van.`,
    // 33
    `Isten Királyságával és azzal törődjetek, amit Isten igazságossága kíván - erre törekedjetek mindenek előtt! Isten pedig majd törődik azzal, amire szükségetek van.`,
    // 34
    `Ne aggódjatok tehát a holnap miatt! A holnap majd magával hozza az új gondokat és az új megoldásokat is. Minden napnak elég a maga gondja-baja.”`
  ],
  [
    // 7  ~ Ne ítéljetek el senkit! (#Q) ~
    `„Ne ítéljetek el senkit, hogy titeket se ítéljenek majd el!`,
    // 2
    `Ha mégis ítéletet mondtok mások fölött, akkor titeket is úgy ítélnek majd, ahogyan ti ítéltek másokat. Amilyen mértékkel mértek másokat, olyan mértékkel mérnek majd titeket is.`,
    // 3
    `Miért nézed a szálkát a másik szemében, ha a magadéban még a gerendát sem veszed észre?`,
    // 4
    `Hogy mondhatod neki: »Hadd vegyem ki a szálkát a szemedből!« - amikor a te szemedben gerenda van?`,
    // 5
    `Képmutató! Vedd ki előbb a saját szemedből a gerendát! Akkor majd elég tisztán látsz ahhoz, hogy a szálkát is kivehesd más szeméből.`,
    // 6
    `Nem dobjuk a kutyák elé azt a szent húst, amit Istennek áldozunk. Ti se adjátok a kutyáknak, ami szent, mert csak ellenetek fordulnak, és megmarnak! Gyöngyeiteket se szórjátok a disznók elé, mert csak a sárba tapossák!”`,
    // 7  ~ Kitartóan kérjetek Istentől! (#R) ~
    `„Kitartóan kérjétek, és megkapjátok! Kitartóan keressétek, és megtaláljátok! Kitartóan kopogtassatok, és kinyitják nektek az ajtót!`,
    // 8
    `Mert aki kitartóan kéri, megkapja, amit kér. Aki kitartóan keresi, az megtalálja, amit keres. Aki kitartóan kopogtat, annak kinyitják az ajtót.`,
    // 9
    `Melyik apa adna a fiának követ, ha az kenyeret kér tőle?`,
    // 10
    `Vagy ha a fia halat kér, kígyót ad-e neki?`,
    // 11
    `Ha tehát még ti is - bár romlottak vagytok - tudtok jó ajándékot adni gyerekeiteknek, mennyivel inkább Mennyei Atyátok! Ő biztosan megad minden jót azoknak, akik elkérik tőle!”`,
    // 12  ~ A Törvény lényege ~
    `„Ezért úgy bánjatok az emberekkel, ahogy szeretnétek, hogy veletek bánjanak! Ez a lényege a Mózes Törvényének és a próféták tanításának.”`,
    // 13  ~ Szűk kapu és keskeny ösvény (#S) ~
    `„A szűk kapun menjetek be! Mert tágas az a kapu, és széles az az út, amely a pusztulásba vezet, és sokan járnak rajta.`,
    // 14
    `De az életre vezető ajtó szűk, az ösvény keskeny, és csak kevesen találják meg.”`,
    // 15  ~ A hamis prófétákról (#T) ~
    `„Óvakodjatok a hamis prófétáktól, akik juhoknak álcázva közelednek hozzátok, de belül olyanok, mint a ragadozó farkasok!`,
    // 16
    `Arról ismerhetitek fel őket, hogy mit tesznek, és annak mi az eredménye. Hiszen a tövises bokor nem teremhet szőlőt, vagy a bogáncskóró fügét.`,
    // 17
    `Ugyanígy minden jó fa jó gyümölcsöket terem, a rossz fa pedig rosszakat.`,
    // 18
    `A jó fa nem terem rossz gyümölcsöt, és a rossz fa sem hoz jót.`,
    // 19
    `Minden fát, amely nem terem jó gyümölcsöt, kivágnak, és tűzre dobnak.`,
    // 20
    `Tehát ezeket a hamis prófétákat is a tetteik eredményei alapján ismeritek fel.`,
    // 21
    `Nem mindenki fog bemenni Isten Királyságába, aki azt mondja nekem: »Uram, Uram!« Csak az megy be, aki megteszi, amit Mennyei Atyám akar.`,
    // 22
    `Sokan mondják majd nekem azon a napon: »Uram, Uram! Hát nem a te nevedben prófétáltunk? Nem a te nevedben űztük ki a gonosz szellemeket? Nem a te nevedben tettünk sok csodát?«`,
    // 23
    `Akkor világosan megmondom nekik: »Semmi közötök hozzám, sohasem ismertelek titeket! Menjetek előlem, ti törvényszegők!«”`,
    // 24  ~ A bölcs és az ostoba háza (#U) ~
    `„Aki meghallgatja szavaimat, és meg is teszi, amit mondok, az olyan, mint a bölcs, aki a házát sziklára alapozta.`,
    // 25
    `Esett az eső, jött az árvíz, fújt a szél, és nekitámadt a háznak, de az mégsem dőlt össze, mert sziklára építették.`,
    // 26
    `Aki pedig hallgatja a szavaimat, de nem teszi meg, amit mondok, az olyan, mint az ostoba, aki homokra építette a házát.`,
    // 27
    `Esett az eső, jött az árvíz, fújt a szél, és rázúdult a házra, az pedig teljesen romba dőlt.”`,
    // 28
    `Mikor Jézus befejezte a beszédet, az egész tömeg csodálkozott a tanításán,`,
    // 29
    `mert nem úgy tanította őket, mint a törvénytanítóik, hanem úgy, mint akinek teljes hatalma van.`
  ],
  [
    // 8  ~ Akarom, gyógyulj meg! (#V) ~
    `Miután Jézus lejött a hegyről, nagy tömeg követte.`,
    // 2
    `Ekkor odalépett hozzá egy leprás férfi, leborult előtte, és ezt mondta: „Uram, ha akarod, te meg tudsz gyógyítani engem!”`,
    // 3
    `Akkor Jézus kinyújtotta a kezét, megérintette, és így válaszolt: „Igen, akarom! Gyógyulj meg!” Ekkor a férfiról azonnal eltűnt a lepra.`,
    // 4
    `Jézus ezt mondta neki: „Vigyázz, senkinek se beszélj erről! Menj, és mutasd meg magad a papnak! (#x) Azután vidd fel az áldozatot, ahogy Mózes megparancsolta, hogy bizonyíték legyen a számukra!”`,
    // 5  ~ A római százados hite (#W) ~
    `Amikor Jézus Kapernaumba ért, egy római százados lépett hozzá, és így könyörögött:`,
    // 6
    `„Uram, a szolgám megbénult, otthon fekszik, és nagy fájdalmai vannak.”`,
    // 7
    `„Megyek, és meggyógyítom” - válaszolta Jézus.`,
    // 8
    `A százados azonban így felelt: „Uram, nem vagyok rá méltó, hogy a házamba jöjj. Elég, ha szólsz egy szót, és meggyógyul a szolgám.`,
    // 9
    `A feletteseimnek vagyok alárendelve, s ők felhatalmaztak arra, hogy a katonáimnak parancsoljak. Ha azt mondom az egyiknek: »Menj el!« - az el is megy. Vagy, ha szólok a másiknak: »Gyere ide!« - az odajön hozzám. És ha azt mondom a szolgámnak: »Tedd meg ezt!« - az meg is teszi.”`,
    // 10
    `Ezen a válaszon Jézus nagyon elcsodálkozott, és ezt mondta azoknak, akik őt követték: „Igazán mondom nektek: egész Izráelben nem találtam ilyen nagy hitet senkiben.`,
    // 11
    `Bizony, sokan eljönnek majd az egész világról, kelettől nyugatig a nemzetek közül, és asztalhoz ülnek Ábrahámmal, Izsákkal és Jákóbbal együtt Isten Királyságában.`,
    // 12
    `Akik pedig arra születtek, hogy a Királyság örökösei legyenek, azokat kidobják a külső sötétségbe, ahol fájdalmukban sírnak majd és a fogukat csikorgatják.”`,
    // 13
    `Majd a századoshoz fordult: „Menj haza nyugodtan! Legyen meg, amit kértél, a hited szerint!” Ezzel egy időben a százados szolgája valóban meggyógyult.`,
    // 14  ~ Ő hordozta betegségeinket (#X) ~
    `Egyszer Jézus Péter házába érkezett, és látta, hogy Péter anyósa lázas betegen fekszik.`,
    // 15
    `Jézus megfogta a beteg kezét, akinek azonnal elmúlt a láza. Föl is kelt az asszony, és megvendégelte Jézust.`,
    // 16
    `Amikor leszállt az este, sok olyan embert vittek hozzá, akikben gonosz szellemek laktak. Jézus egy szavával kiűzte a gonosz szellemeket, és minden beteget meggyógyított.`,
    // 17
    `Így teljesedett be, amit Ézsaiás próféta mondott:
„Ő vette el gyengeségeinket,
     és ő hordozta betegségeinket.” (#y)`,
    // 18  ~ Te csak kövess engem! (#Y) ~
    `Amikor Jézus látta, milyen sokan gyűltek köré, szólt a tanítványainak, hogy evezzenek át a tó túlsó partjára.`,
    // 19
    `Ekkor azonban egy törvénytanító lépett hozzá, és ezt mondta: „Mester, követni foglak téged, akárhová mész.”`,
    // 20
    `Jézus így válaszolt: „A rókáknak van tanyájuk, az égi madaraknak is van fészkük, de az Emberfiának nincs hol lehajtania a fejét.”`,
    // 21
    `Egyszer az egyik tanítványa azt kérte Jézustól: „Uram, engedd meg, hogy előbb elmenjek, és eltemessem apámat!” (#z)`,
    // 22
    `Jézus azonban így válaszolt: „Te csak kövess engem, és hagyd a halottakra, hogy temessék el a halottaikat!”`,
    // 23  ~ Jézus lecsendesíti a vihart (#Z) ~
    `Jézus beszállt egy bárkába, tanítványai pedig követték.`,
    // 24
    `Miután eltávolodtak a parttól, hirtelen akkora vihar támadt, hogy a hullámok majdnem elborították a bárkát. Eközben Jézus aludt.`,
    // 25
    `Tanítványai odamentek hozzá, és ezzel ébresztették fel: „Uram, ments meg bennünket! Mindjárt elmerülünk!”`,
    // 26
    `Jézus így válaszolt: „Miért féltek, kishitűek?” Azután felállt, ráparancsolt a szélre és a tóra. Ekkor elállt a szél, elsimultak a hullámok, és nagy csend lett.`,
    // 27
    `A tanítványok csodálkozva kérdezték: „Kicsoda ez, hogy még a szél és a víz is engedelmeskedik neki?”`,
    // 28  ~ Kiűzi a gonosz szellemek seregét (#AA) ~
    `Amikor Jézus megérkezett a túlsó partra, Gadara (#aa) vidékére, két ember jött elé, akikben gonosz szellemek laktak. A sírbarlangokban tanyáztak, és olyan veszélyesek voltak, hogy senki sem járhatott miattuk azon az úton.`,
    // 29
    `Így kiabáltak: „Mi közöd hozzánk, Isten Fia?! Azért jöttél, hogy idő előtt megkínozz bennünket?”`,
    // 30
    `A távolban egy nagy disznókonda legelt.`,
    // 31
    `A gonosz szellemek ekkor azt kérték Jézustól: „Ha kiűzöl minket, küldj azokba a disznókba!”`,
    // 32
    `„Menjetek!” - válaszolta ő. Akkor a gonosz szellemek elhagyták azt a két embert, és bementek a disznókba. Azok pedig mind egy szálig lerohantak a meredek lejtőn, egyenesen a tóba, és belefulladtak a vízbe.`,
    // 33
    `Ekkor a pásztorok, akik a disznókat őrizték, elfutottak a városba, és elmondtak mindent - azt is, ami a két megszállottal történt.`,
    // 34
    `A város egész lakossága kiment, hogy Jézussal találkozzon. Amikor meglátták, kérték, hogy menjen el arról a vidékről.`
  ],
  [
    // 9  ~ Jézus meggyógyít egy béna férfit (#AB) ~
    `Ezután Jézus beszállt egy bárkába, átkelt a tavon, és a saját városába ment.`,
    // 2
    `Ott néhányan egy béna férfit vittek hozzá hordágyon. Jézus látta azoknak a hitét, akik hordozták a beteget, ezért odafordult a bénához: „Bízzál fiam, a bűneid meg vannak bocsátva!”`,
    // 3
    `Ezt hallotta néhány törvénytanító is, akik egymás között így tanakodtak: „Ez az ember Istent gyalázza!”`,
    // 4
    `Mivel Jézus tudta, hogy mit gondolnak, ezt mondta nekik: „Miért gondoltok ilyen rosszat?`,
    // 5
    `Mi könnyebb? Azt mondani, hogy meg vannak bocsátva a bűneid, vagy azt, kelj fel, és menj el?`,
    // 6
    `Győződjetek meg róla: az Emberfia felhatalmazást kapott, hogy itt a földön megbocsássa a bűnöket.” Ekkor a beteghez fordulva így szólt: „Kelj fel, fogd a hordágyat, és menj haza!”`,
    // 7
    `Ekkor a férfi felkelt, és hazament.`,
    // 8
    `Amikor látta ezt az összegyűlt sokaság, félelem és csodálat töltötte el őket, és dicsőítették Istent, aki ilyen nagy hatalmat adott az embernek.`,
    // 9  ~ Máté (Lévi) elhívása (#AC) ~
    `Amikor Jézus továbbment onnan, meglátott egy Máté nevű férfit, aki a vámszedő helyen ült, és megszólította: „Kövess engem!” Máté pedig felkelt, és csatlakozott Jézushoz.`,
    // 10
    `Egyszer Jézus Máté házában vendégeskedett. Sokan mások is odajöttek: vámszedők és mindenféle rosszhírű bűnösök, akikkel Jézus és a tanítványai együtt vacsoráztak.`,
    // 11
    `Amikor a farizeusok látták, hogy Jézus ilyen emberekkel eszik együtt, ezt kérdezték a tanítványoktól: „Hogy lehet az, hogy a ti mesteretek vámszedőkkel és mindenféle bűnössel együtt ül asztalhoz?”`,
    // 12
    `Amikor Jézus ezt meghallotta, ő válaszolt a farizeusoknak: „Nem az egészségeseknek van szükségük orvosra, hanem a betegeknek!`,
    // 13
    `Menjetek, és értsétek meg végre, mit jelent ez: »Irgalmasságot kívánok, nem áldozatokat!« (#ab) Nem azért jöttem, hogy az igazakat, hanem hogy a bűnösöket hívjam.”`,
    // 14  ~ Az új bort új tömlőbe kell tölteni (#AD) ~
    `Majd Bemerítő János tanítványai jöttek Jézushoz, és megkérdezték tőle: „Mi és a farizeusok gyakran böjtölünk. A te tanítványaid miért nem böjtölnek?”`,
    // 15
    `Jézus így felelt: „Vajon gyászolnak-e a lakodalomban a vendégek, amíg velük van a vőlegény? De eljön az idő, amikor a vőlegényt elviszik tőlük. Akkor majd ők is böjtölni fognak.`,
    // 16
    `Senki sem varr régi ruhára új szövetből foltot, mert az csak tovább szakítaná a régit, és még nagyobb lenne a szakadás.`,
    // 17
    `Senki sem tölt új bort régi bortömlőbe, mert azok kiszakadnának és tönkre mennének, ráadásul a bor is szétfolyna. Az új bort mindig új tömlőkbe töltik, és így mindkettő megmarad.”`,
    // 18  ~ Feltámaszt egy kislányt és meggyógyít egy beteg asszonyt (#AE) ~
    `Miközben ezt mondta, odalépett hozzá a zsinagóga egyik vezetője, leborult előtte, és úgy kérte: „Éppen most halt meg a kislányom. Kérlek, jöjj, tedd rá a kezed, akkor újra élni fog!”`,
    // 19
    `Jézus felállt, és elindult vele, s a tanítványai is követték.`,
    // 20
    `Eközben egy asszony, aki már tizenkét éve olyan betegségben szenvedett, amely állandó vérzéssel járt, Jézus közelébe férkőzött, és hátulról megérintette a ruhája szélét.`,
    // 21
    `Ezt gondolta magában: „Ha csak a ruháját megérinthetem, meggyógyulok.”`,
    // 22
    `Jézus hátrafordult, ránézett az asszonyra, és ezt mondta: „Bízzál, leányom: mivel hittél, meggyógyultál!” Ebben a pillanatban az asszony meggyógyult.`,
    // 23
    `Amikor Jézus a zsinagógai vezető házához ért, látta a jajgató tömeget és a hangszereseket.`,
    // 24
    `Azonnal rájuk szólt: „Menjetek innen! A kislány nem halt meg, csak alszik.” De azok kinevették.`,
    // 25
    `Miután az embereket elküldték, Jézus bement a szobába, megfogta a kislány kezét, aki azonnal feltámadt.`,
    // 26
    `Ennek az egész vidéken híre ment.`,
    // 27  ~ Legyen a hitetek szerint! ~
    `Jézus továbbment onnan, és két vak férfi ment utána. Folyton ezt kiabálták: „Dávid Fia, könyörülj rajtunk!”`,
    // 28
    `Amikor Jézus bement egy házba, követték a vakok is. Jézus megkérdezte tőlük: „Hiszitek-e, hogy meg tudom tenni, amit kértek?”
„Igen, Uram!” - válaszolták.`,
    // 29
    `Jézus megérintette a szemüket, és ezt mondta nekik: „Legyen a hitetek szerint!”`,
    // 30
    `Ekkor helyreállt a látásuk. Jézus szigorúan rájuk parancsolt: „Vigyázzatok, meg ne tudja senki!”`,
    // 31
    `Ők mégis elterjesztették Jézus hírét az egész vidéken.`,
    // 32
    `Amint elmentek, hoztak Jézushoz egy embert, aki néma volt, mert egy gonosz szellem lakott benne.`,
    // 33
    `Jézus kiűzte belőle a gonosz szellemet, mire az ember megszólalt. A tömeg csodálkozva mondta: „Ilyen dolog még soha nem történt Izráelben!”`,
    // 34
    `A farizeusok azonban azt mondták: „A gonosz szellemek fejedelmének segítségével űzi ki a gonosz szellemeket.”`,
    // 35  ~ Sok az aratnivaló, de kevés az arató ~
    `Jézus bejárta az összes várost és falut, tanított a zsinagógákban, és hirdette az Isten Királyságáról szóló örömüzenetet. Meggyógyított minden betegséget és erőtlenséget.`,
    // 36
    `Amikor látta, milyen sokan összegyűltek, megszánta őket, mert elgyötörtek és elesettek voltak: mint a pásztor nélküli juhnyáj.`,
    // 37
    `Ekkor a tanítványaihoz fordult: „Látjátok, milyen sok a gabona, de milyen kevés az arató!`,
    // 38
    `Imádkozzatok hát, és kérjétek az Aratás Urát: küldjön még több aratót, hogy learassák a gabonáját!”`
  ],
  [
    // 10  ~ A tizenkét apostol kiküldése (#AF) ~
    `Jézus magához hívta tizenkét tanítványát, és felhatalmazta őket, hogy kiűzzék a gonosz szellemeket, és meggyógyítsanak minden betegséget és erőtlenséget.`,
    // 2
    `Ez a tizenkét apostol neve:
az első Simon (akit Péternek is hívtak)
és a testvére, András,
továbbá Jakab és a testvére, János - Zebedeus fiai,`,
    // 3
    `Fülöp és Bertalan;
Tamás és Máté, a vámszedő;
Jakab, Alfeus fia, és Taddeus;`,
    // 4
    `Simon, a zélóta,
és Iskáriótes Júdás (aki később elárulta Jézust).`,
    // 5
    `Ezt a tizenkettőt küldte ki Jézus, és meghagyta nekik: „Ne menjetek olyan vidékre, ahol az idegen nemzetek laknak, se Samária városaiba!`,
    // 6
    `Csak Izráel népének elveszett juhaihoz menjetek,`,
    // 7
    `és hirdessétek nekik: »Megérkezett hozzátok Isten Királysága!«`,
    // 8
    `Gyógyítsátok meg a betegeket, támasszátok fel a halottakat, tisztítsátok meg a leprásokat és űzzétek ki a gonosz szellemeket! Ingyen kaptátok ezt a hatalmat, ezért ti is ingyen végezzétek ezt a munkát!`,
    // 9
    `Ne vigyetek magatokkal aranypénzt, ezüstpénzt, de még rézpénzt se!`,
    // 10
    `Ne vigyetek semmilyen útravaló csomagot, se tartalék ruhát, vagy sarut, se vándorbotot! Aki dolgozik, az megérdemli, hogy gondoskodjanak róla.`,
    // 11
    `Ha bementek egy faluba vagy városba, keressétek meg ott azt, aki bizalomra méltó, és nála szálljatok meg. Maradjatok a házánál, amíg tovább nem mentek abból a faluból vagy városból!`,
    // 12
    `Amikor beléptek hozzá, köszöntsétek,`,
    // 13
    `és ha az a család méltó rá, akkor a békességetek és áldásotok szálljon rájuk. Ha nem méltó, térjen vissza rátok a békességetek.`,
    // 14
    `Ha valaki nem fogad be, és nem hallgat rátok, még a port is verjétek le a lábatokról, amikor kimentek abból a házból vagy városból! (#ac)`,
    // 15
    `Igazán mondom, még Sodoma és Gomora lakosainak is tűrhetőbb dolga lesz az ítélet napján, mint nekik.”`,
    // 16  ~ Figyelmeztetés az üldözésre (#AG) ~
    `„Vigyázzatok, mert úgy küldelek ki benneteket, mint juhokat a farkasok közé. Ezért legyetek okosak, mint a kígyók, és ártatlanok, mint a galambok!`,
    // 17
    `Legyetek óvatosak, mert miattam le fognak tartóztatni titeket, bíróság elé állítanak, a zsinagógáikban megkorbácsolnak,`,
    // 18
    `kormányzók és királyok elé állítanak és kihallgatnak benneteket. Akkor majd nekik is tanúskodjatok rólam!`,
    // 19
    `Amikor letartóztatnak, ne aggódjatok, hogy mit mondjatok, mert idejében meg fogjátok tudni!`,
    // 20
    `Valójában nem is ti fogtok beszélni, hanem Mennyei Atyátok Lelke szól majd rajtatok keresztül.`,
    // 21
    `Abban az időben egymás ellen fordulnak a testvérek, elárulják és kiszolgáltatják egymást azoknak, akik megölik őket. Hasonlóképpen az apák a gyermeküket, a gyermekek pedig a szüleiket adják halálra.`,
    // 22
    `Mindenki gyűlölni fog benneteket miattam, de aki mindvégig állhatatosan kitart, az üdvözül.`,
    // 23
    `Ha egyik városban üldöznek benneteket, meneküljetek a másikba! Igazán mondom: be sem tudjátok járni Izráel összes városát, mielőtt az Emberfia visszajön.`,
    // 24
    `A tanítvány nem nagyobb a mesterénél, a rabszolga sem nagyobb az uránál.`,
    // 25
    `A tanítvány elégedett lehet, ha olyan lesz, mint a mestere, vagy a rabszolga, mint az ura. Ha a családfőt a gonosz szellemek fejedelmének nevezték, akkor még rosszabb dolgokat fognak mondani a család többi tagjáról!”`,
    // 26  ~ Istent tiszteljétek, ne az emberektől féljetek! (#AH) ~
    `„Tehát ne féljetek tőlük, mert minden eltitkolt dolog nyilvánosságra fog kerülni, és minden titok kitudódik!`,
    // 27
    `Amit sötétben és titokban mondok nektek, azt a világosságban hirdessétek mindenkinek! Amit a fületekbe súgok, azt a háztetőkről kiáltsátok ki!`,
    // 28
    `Ne féljetek az emberektől, mert ők csak a testeteket képesek megölni, a lelketeket nem! Istent tiszteljétek és féljétek, aki mind a testet, mind a lelket el tudja pusztítani a gyehennában!`,
    // 29
    `Gondoljátok meg, két veréb ára egy fillér (#ad) , mégsem pusztulhat el közülük egy sem Mennyei Atyátok tudta nélkül!`,
    // 30
    `Ő még a hajszálaitokat is számon tartja,`,
    // 31
    `tehát ne féljetek: ti sok-sok verébnél értékesebbek vagytok!”`,
    // 32  ~ Ki tartozik Jézushoz? (#AI) ~
    `„Aki az emberek előtt vállalja, hogy hozzám tartozik, azt én is vállalom Mennyei Atyám előtt.`,
    // 33
    `Aki azonban nem vállal engem az emberek előtt, arról én is azt fogom mondani Mennyei Atyám előtt, hogy semmi köze hozzám.”`,
    // 34  ~ Jézus követésének ára (#AJ) ~
    `„Ne gondoljátok, hogy azért jöttem, hogy békességet hozzak a Földre! Nem azért jöttem, hogy békét, hanem hogy kardot hozzak.`,
    // 35
    `Azért jöttem, hogy
»szembeállítsam a fiút az apjával,
     leányt az anyjával,
     menyet az anyósával.`,
    // 36
    `Így az embernek a saját családtagjai
     lesznek az ellenségei.« (#ae)`,
    // 37
    `Aki tehát jobban szereti apját vagy anyját, mint engem, az nem méltó arra, hogy hozzám tartozzon. Aki jobban szereti fiát vagy leányát, mint engem, az nem méltó arra, hogy hozzám tartozzon.`,
    // 38
    `Aki nem veszi vállára a keresztjét, és nem azzal együtt követ engem, az nem méltó rá, hogy hozzám tartozzon.`,
    // 39
    `Aki meg akarja tartani az életét, az el fogja veszíteni, aki viszont énértem feladja, az meg fogja találni.”`,
    // 40  ~ Aki titeket befogad, engem fogad be (#AK) ~
    `„Aki titeket befogad, az engem fogad be - aki pedig engem befogad, azt fogadja be, aki engem elküldött.`,
    // 41
    `Aki azért fogad be egy prófétát, mert az illető próféta, az megkapja ugyanazt a jutalmat, amely a prófétának jár. Aki azért fogad be egy igazságos embert, mert az illető igazságos, az megkapja ugyanazt a jutalmat, amely az igazságos embernek jár.`,
    // 42
    `Aki csak egyetlen pohár friss vizet ad az én kedvemért egyik kis tanítványomnak, igazán mondom nektek, hogy megkapja a jutalmát!”`
  ],
  [
    // 11  ~ Jézus Bemerítő Jánosról (#AL) ~
    `Miután Jézus befejezte a tizenkét tanítvány útbaigazítását, továbbment a környező galileai városokba. Tanította az embereket, és hirdette az örömüzenetet.`,
    // 2
    `Bemerítő János a börtönben hallott a Messiás tetteiről, ezért elküldte hozzá néhány tanítványát,`,
    // 3
    `hogy kérdezzék meg tőle: „Te vagy-e az, akinek el kell jönnie, vagy mást várjunk?”`,
    // 4
    `Jézus így válaszolt nekik: „Menjetek vissza Jánoshoz, és mondjátok el neki mindazt, amit hallotok és láttok:`,
    // 5
    `a vakok látnak, a bénák járnak, a leprások megtisztulnak, a süketek hallanak, halottak támadnak föl, és a szegényeknek az örömüzenetet hirdetik.`,
    // 6
    `Boldog, aki nem kételkedik bennem, hanem kitart mellettem.”`,
    // 7
    `Amikor Bemerítő János tanítványai elmentek, Jézus ezt mondta róla az összegyűlt sokaságnak: „Azért mentetek ki a pusztába, hogy széltől hajlongó nádszálat lássatok?`,
    // 8
    `Vagy talán azért, hogy egy drága ruhába öltözött férfit lássatok? Hiszen akik drága ruhákban járnak és kényelemben élnek, azok a királyi udvarban és palotákban laknak!`,
    // 9
    `Akkor miért mentetek ki? Kit akartatok látni? Talán egy prófétát? Bizony, valóban prófétát láttatok, sőt, azt mondom nektek: még prófétánál is nagyobbat!`,
    // 10
    `Mert János az, akiről ezt mondja az Írás:
»Elküldöm hírvivő követemet,
     aki előtted fog menni,
     hogy utat készítsen a számodra.« (#af)`,
    // 11
    `Igazán mondom, hogy azok között, akik asszonytól születtek, Bemerítő János a legnagyobb, Isten Királyságában azonban a legkisebb is nagyobb nála.`,
    // 12
    `Bemerítő János megjelenésétől kezdve Isten Királysága erőteljesen terjeszkedik, és sokan teljes erejükkel igyekeznek, hogy bejussanak.`,
    // 13
    `Mert a Mózesi Törvény és a próféták is mindannyian addig prófétáltak, amíg Bemerítő János a színre lépett.`,
    // 14
    `Ha készek vagytok elfogadni, akkor tudjátok meg, hogy ő az a bizonyos »Illés«, akinek az eljöveteléről a próféciák szóltak.`,
    // 15
    `Akinek van füle, hallja meg!`,
    // 16
    `Mihez is hasonlítsam ezt a nemzedéket? Olyanok, mint a piactéren játszó gyerekek, akik így kiáltanak egymásnak:`,
    // 17
    `»Táncnótát furulyáztunk nektek,
     de nem táncoltatok.
Siratót énekeltünk,
     de nem sírtatok.«`,
    // 18
    `Mert eljött Bemerítő János, aki böjtölt, és nem ivott bort, erre azt mondták róla, hogy gonosz szellem lakik benne.`,
    // 19
    `Azután eljött az Emberfia, aki ugyanúgy evett és ivott, mint mások. Róla meg azt mondják: »Nézzétek, milyen falánk és részeges! Vámszedőkkel és bűnösökkel barátkozik!« Ezzel maguk bizonyították a saját ostobaságukat azok, akik ilyenféle »bölcsességeket« szoktak mondani.”`,
    // 20  ~ Szemrehányást tesz a hitetlen városoknak (#AM) ~
    `Ezután Jézus szemrehányást tett azoknak a városoknak, amelyekben a legtöbb csodát tette, amiért nem hittek neki, nem változtatták meg a gondolkodásukat, és nem tértek vissza Istenhez:`,
    // 21
    `„Jaj neked, Korazin népe! Jaj nektek, Bétsaida lakói! Mert ha Tíruszban vagy Szidónban történtek volna azok a csodák, amelyek nálatok, már régen zsákruhában és hamuban ülve megbánták volna a bűneiket.`,
    // 22
    `Igazán mondom nektek: az ítélet napján Tírusz és Szidón népének tűrhetőbb lesz a sorsa, mint a tiétek.`,
    // 23
    `És ti, Kapernaum lakói, azt hiszitek, hogy az égig fognak magasztalni titeket? A halál országába fogtok süllyedni! Mert ha Sodomában történtek volna azok a csodák, amelyeket ti láttatok, megmaradt volna mind a mai napig.`,
    // 24
    `Igazán mondom nektek: Sodoma népének elviselhetőbb lesz a sorsa az ítélet napján, mint nektek.”`,
    // 25  ~ Jöjjetek hozzám, akik elfáradtatok! (#AN) ~
    `Jézus ezt mondta: „Dicsőítelek, Atyám, Menny és Föld Ura, hogy ezeket elrejtetted a bölcsek és okosak elől, de megmutattad azoknak, akik olyanok, mint a kisgyermekek.`,
    // 26
    `Igen, Atyám, mert így láttad jónak!”`,
    // 27
    `„Atyám mindent átadott nekem. Senki más nem ismeri a Fiút, csak az Atya. Senki más nem ismeri az Atyát, csak a Fiú, és azok, akikkel a Fiú meg akarja ismertetni őt.”`,
    // 28
    `„Jöjjetek közel hozzám mind, akik belefáradtatok súlyos terheitek cipelésébe! Nálam megnyugvást találtok.`,
    // 29
    `Azt az igát vegyétek fel, amelyet én adok rátok, s tanuljátok meg tőlem, hogy én szívből szelíd és alázatos vagyok -, akkor meg fogtok nyugodni.`,
    // 30
    `Mert az iga, amelyet én teszek rátok, nem nehéz! A teher, amelyet én helyezek a vállaitokra, könnyű.”`
  ],
  [
    // 12  ~ Az Emberfia a szombatnak is Ura (#AO) ~
    `Akkoriban Jézus a tanítványaival együtt egy gabonaföldön ment keresztül. A tanítványok éhesek voltak, ezért kalászokat téptek le, és a gabonaszemeket eszegették. Történetesen éppen szombat volt.`,
    // 2
    `Amikor a farizeusok ezt meglátták, így szóltak Jézushoz: „Nézd csak, mit tesznek a tanítványaid! A Törvény szerint szombaton ezt nem lenne szabad!”`,
    // 3
    `Erre Jézus ezt kérdezte tőlük: „Nem olvastátok, hogy mit tett Dávid, amikor ő és a kísérői megéheztek?`,
    // 4
    `Bement Isten házába, és embereivel együtt megette az Istennek felajánlott szent kenyereket! Pedig ezeket a Törvény szerint sem neki, sem a kísérőinek nem lett volna szabad megenniük, csak a papoknak.`,
    // 5
    `Vagy nem olvastátok a Törvényben, hogy szombatonként a papok a Templomban nem tartják be a szombatra vonatkozó parancsot, de mégsem vétkeznek?`,
    // 6
    `Igazán mondom nektek: nagyobb van itt a Templomnál!`,
    // 7
    `Ha megértettétek volna, mit jelent ez: »Irgalmasságot akarok tőletek, nem áldozatot«, (#ag) akkor most nem ítéltétek volna el azokat, akik semmi rosszat nem tettek.`,
    // 8
    `Mert az Emberfia úr a szombat ünnepe fölött is”.`,
    // 9  ~ Jézus szombaton is gyógyít (#AP) ~
    `Jézus ezután a zsinagógájukba ment.`,
    // 10
    `Volt ott egy béna kezű férfi. Megkérdezték Jézust: „A Törvény szerint szabad-e szombaton gyógyítani?” (#ah) Azért kérdezték ezt, hogy megvádolhassák.`,
    // 11
    `Ő azonban ezt felelte: „Ha valakinek közületek szombaton gödörbe esik az egyetlen báránya, vajon nem húzza-e ki azonnal?`,
    // 12
    `Az ember pedig sokkal értékesebb, mint a bárány! Tehát szombaton is szabad jót tenni.”`,
    // 13
    `Ezután a beteg férfihoz fordult: „Nyújtsd ki a kezedet!” Ő kinyújtotta a kezét, amely azonnal meggyógyult, és éppen olyan egészséges lett, mint a másik.`,
    // 14
    `A farizeusok ekkor kimentek a zsinagógából, és elhatározták, hogy végeznek Jézussal.`,
    // 15  ~ Isten kiválasztott szolgája ~
    `Jézus azonban tisztában volt vele, hogy mit terveznek ellene, ezért elment onnan. Sokan követték, ő pedig minden beteget meggyógyított.`,
    // 16
    `Azt azonban szigorúan megparancsolta nekik, hogy ne terjesszék a hírét.`,
    // 17
    `Így teljesedett be, amit Ézsaiás próféta mondott:`,
    // 18
    `„Nézzétek szolgámat, akit választottam,
     akit szeretek, akiben én gyönyörködöm!
Betöltöm őt Lelkemmel,
     és igazságosan fogja ítélni a nemzeteket.`,
    // 19
    `Nem vitatkozik, nem hangoskodik,
     s hangját nem hallják az utcákon.`,
    // 20
    `A megrepedt nádszálat nem töri el,
     a pislákoló mécsest nem oltja ki,
     amíg győzelemre nem viszi az igazságos ítéletet,`,
    // 21
    `s benne reménykednek majd az Izráelen kívüli nemzetek.” (#ai)`,
    // 22  ~ Kinek a hatalmával űzi ki Jézus a gonosz szellemeket? (#AQ) ~
    `Ezután egy vak és néma férfit vittek hozzá, akiben egy gonosz szellem lakott. Jézus meggyógyította a férfit, aki ettől fogva tudott beszélni és tisztán látott.`,
    // 23
    `Ezen az egész sokaság nagyon elcsodálkozott, és ezt mondták: „Csak nem ő az, Dávidnak az a bizonyos Fia?”`,
    // 24
    `Amikor ezt a farizeusok meghallották, kijelentették: „Ez az ember csak azért tudja kiűzni a gonosz szellemeket, mert a Sátán, a gonosz szellemek fejedelme segít neki.”`,
    // 25
    `Jézus tudta, hogyan gondolkoznak, ezért így válaszolt nekik: „Ha egy királyság egyik része a másik ellen támad, az egész elpusztul. Ugyanúgy elpusztul az a város, vagy család is, amelyben belső harcok dúlnak.`,
    // 26
    `Ha tehát a Sátán a saját szolgáit, a gonosz szellemeket űzi ki (#aj) , akkor valójában önmaga ellen fordul, és a királysága nem állhat fenn tovább.`,
    // 27
    `Másrészt, ha én a Sátán erejével űzöm ki a gonosz szellemeket, akkor a ti tanítványaitok kinek az erejével űzik ki őket? A saját tanítványaitok fognak elítélni titeket!`,
    // 28
    `Ha viszont én Isten Lelkével űzöm ki a gonosz szellemeket, akkor nyilvánvaló, hogy Isten Királysága megérkezett hozzátok.`,
    // 29
    `Gondoljátok meg, ha valaki be akar törni egy erős ember házába, hogy kirabolja, akkor előbb meg kell kötöznie őt, csak azután foszthatja ki a házát.`,
    // 30
    `Aki nem az én oldalamon áll, az ellenem van. Aki nem velem együtt takarítja be gabonát, az szétszórja a termést.`,
    // 31
    `Ezért figyelmeztetlek benneteket: az emberek mindenféle bűnös tettükre és Istent gyalázó beszédükre kaphatnak bűnbocsánatot. De van egy kivétel: aki a Szentlelket gyalázza, az nem nyer bocsánatot soha.`,
    // 32
    `Még az is kaphat bűnbocsánatot, aki az Emberfia ellen beszél, de aki a Szentlélek ellen szól, az sem ebben a korszakban, sem a következőben nem kaphat bocsánatot.`,
    // 33  ~ A kétfajta gyümölcs (#AR) ~
    `Ha egy gyümölcsfát jónak ítéltek, akkor annak a gyümölcse is jó. Ha pedig a fát rossznak ítélitek, akkor annak a gyümölcse is rossz, mert a fát a gyümölcsei alapján lehet megítélni.`,
    // 34
    `Ti, viperák, hogyan is mondhatnátok jó dolgokat, mikor romlottak vagytok! Mert azt mondja ki az ember, amivel tele van a szíve.`,
    // 35
    `A jó ember jó dolgokat gyűjt össze a szívében, és azért mond és tesz jó dolgokat. A gonosz ember pedig gonosz dolgokat tartogat a szívében, és ezért mond és tesz gonoszságokat.`,
    // 36
    `Figyelmeztetlek benneteket, hogy az ítélet napján minden meggondolatlanul kimondott kártékony szavatokról számot kell majd adnotok!`,
    // 37
    `A saját szavaitok alapján fognak felmenteni vagy elítélni benneteket.”`,
    // 38  ~ A farizeusok csodát kívánnak Jézustól (#AS) ~
    `Ekkor néhány farizeus és törvénytanító azt kérte Jézustól, hogy bizonyítékul tegyen valami csodát.`,
    // 39
    `Jézus így válaszolt: „Ez a gonosz és hűtlen (#ak) nemzedék mindenáron valamilyen csodás jelt kíván bizonyítékul, de nem fognak más csodát látni, csupán azt, amely Jónás (#al) prófétával történt!`,
    // 40
    `Mert ahogy Jónás három nap és három éjjel volt a nagy tengeri lény gyomrában, úgy lesz az Emberfia is három nap és három éjjel a föld belsejében.`,
    // 41
    `Ninive (#am) lakói egyszerre támadnak majd fel ezzel a nemzedékkel, és elítélnek titeket, mert ők Jónás üzenetére megváltoztatták az életüket. Hozzátok pedig eljött valaki, aki nagyobb Jónásnál, mégsem hallgattok rá!`,
    // 42
    `Az ítélet napján Dél királynője (#an) együtt fog feltámadni ezzel a nemzedékkel, és elítél titeket, mert ő igen messziről utazott ide, hogy Salamon király bölcsességét hallja. Hozzátok pedig az jött el, aki nagyobb Salamonnál, mégsem hallgattok rá!”`,
    // 43  ~ A gonosz szellemekről (#AT) ~
    `„Amikor egy gonosz szellem kimegy az emberből, olyan helyeken kóborol, ahol nincs víz. Nyugalmat keres, de nem talál.`,
    // 44
    `Akkor ezt mondja: »Visszamegyek a házamba, ahonnan kijöttem.« Tehát visszamegy, és azt üresen, kisöpörve, sőt feldíszítve találja.`,
    // 45
    `Akkor elmegy, és maga mellé vesz hét másik szellemet, akik még nála is gonoszabbak, mind beleköltöznek abba az emberbe, és ott laknak. Így végül annak az állapota még rosszabb lesz, mint először volt. Bizony, így fog járni ez a gonosz nemzedék is!”`,
    // 46  ~ Jézus igazi családja: a tanítványai (#AU) ~
    `Miközben Jézus ezeket mondta, anyja és testvérei megérkeztek, és beszélni szerettek volna vele.`,
    // 47
    `Valaki szólt Jézusnak: „Édesanyád és a testvéreid kinn állnak, és beszélni akarnak veled!”`,
    // 48
    `De Jézus így válaszolt: „Ki az én anyám, és kik a testvéreim?”`,
    // 49
    `Majd tanítványaira mutatott, és ezt mondta: „Itt vannak a testvéreim és anyám!`,
    // 50
    `Aki megteszi, amit Mennyei Atyám akar, az az én testvérem és anyám.”`
  ],
  [
    // 13  ~ Példázat a magvetésről (#AV) ~
    `Ugyanezen a napon történt, hogy Jézus kiment a házból, és leült a tó partján.`,
    // 2
    `Sokan gyűltek össze körülötte, ezért beszállt egy halászbárkába, ott leült, az emberek pedig a parton álltak.`,
    // 3
    `Sok mindenre tanította őket jelképes történetekkel.
Ezt mondta: „Egy földműves kiment a szántóföldjére vetni.`,
    // 4
    `Ahogy szórta a vetőmagot, egy részük az útra esett. Odarepültek a madarak, és mind felcsipegették.`,
    // 5
    `Más magok köves talajra hullottak, ahol sekély volt a termőföld. Ezek gyorsan kikeltek, mert nem voltak mélyen a földben.`,
    // 6
    `Amikor a nap fölkelt, megperzselte a növényeket, és mivel nem gyökereztek mélyen, teljesen elszáradtak.`,
    // 7
    `Megint más magok tüskés gyomok közé hullottak, ahol kikeltek, de a felnövő gyomok elnyomták és megfojtották őket.`,
    // 8
    `A magok egy része azonban jó termőföldbe esett, felnőtt és termést hozott. Az egyik százszor, a másik hatvanszor, ismét másik harmincszor annyit termett, mint amennyit a gazda vetett.`,
    // 9
    `Akinek van füle, hallja és értse meg!”`,
    // 10  ~ Ti megérthetitek Isten Királyságának titkait (#AW) ~
    `Tanítványai megkérdezték Jézust: „Miért használsz jelképes történeteket, amikor tanítasz?”`,
    // 11
    `Ő így válaszolt: „Ti megérthetitek Isten Királyságának titkos igazságait, de a többiek nem.`,
    // 12
    `Akinek van, az még többet kap, hogy még fölöslege is lesz. Akinek azonban nincs, attól még azt is elveszik, amije eddig volt.`,
    // 13
    `Azért tanítom őket történetek segítségével, mert néznek ugyan, de nem látnak, és hallják ugyan, de nem értik meg, amit mondok.`,
    // 14
    `Beteljesedik rajtuk Ézsaiás próféciája:
»Hallani fogtok,
     de nem értitek meg,
néztek ugyan,
     de nem láttok,`,
    // 15
    `mert megkeményedett a nép szíve.
Fülükkel alig hallanak,
     szemüket becsukták,
hogy ne lássanak,
     ne halljanak,
ne értsenek,
     és ne forduljanak hozzám,
hogy meggyógyíthassam őket.« (#ao)`,
    // 16
    `Ti azonban boldogok vagytok, mert a ti szemetek lát, és a fületek hall.`,
    // 17
    `Igazán mondom nektek: sok próféta és igaz ember szerette volna látni, amit ti láttok, de nem látták, és szerették volna hallani, amit ti hallotok, de nem hallották.”`,
    // 18  ~ A magvetés történetének magyarázata (#AX) ~
    `„Most pedig értsétek meg a magvetésről szóló történet magyarázatát!`,
    // 19
    `Mit jelent az, amikor a mag az útra esik? Arról az emberről szól, aki hallja az Isten Királyságáról szóló üzenetet, de nem érti meg, ezért a gonosz elrabolja a szívébe vetett magokat.`,
    // 20
    `Mit jelent az, amikor a mag köves talajba hullik? Arról szól, aki meghallgatja az üzenetet, és azonnal örömmel fogadja,`,
    // 21
    `de az nem gyökerezik meg a szívében, és csak rövid ideig él benne. Az ilyen ember hamar elveszti a hitét, amikor üldöztetés vagy valami baj éri az üzenet miatt.`,
    // 22
    `A tüskés gyomok közé esett mag azt jelképezi, amikor valaki meghallgatja ugyan az üzenetet, de azután a földi élet gondjai, vagy a meggazdagodásra való törekvés elfojtja benne Isten üzenetét, ezért nem hoz termést.`,
    // 23
    `Végül pedig a jó talajba vetett mag azt jelképezi, amikor valaki hallja az üzenetet, meg is érti, és termést is hoz: az egyik a vetőmag százszorosát, a másik a hatvanszorosát, ismét másik pedig a harmincszorosát.”`,
    // 24  ~ Példázat a gyomokról és a búzáról ~
    `Másik történetet is mondott nekik. „Isten Királysága hasonló ehhez: egy ember tiszta búzát vetett a szántóföldjébe.`,
    // 25
    `Amikor mindenki aludt, eljött az ellensége, és gyommagokat (#ap) szórt a vetés közé, majd elment.`,
    // 26
    `A búza felnőtt, és kalászt hozott, de közben a gyomok is megnőttek.`,
    // 27
    `A szolgák ekkor megkérdezték a gazdájukat: »Uram, te jó magot vetettél a földedbe. Akkor hogyan kerültek oda a gyomok?«`,
    // 28
    `»A gyomokat az ellenség vetette« - felelte a gazda.
A szolgák tovább kérdezték: »Akarod, hogy kigyomláljuk?«`,
    // 29
    `»Ne tegyétek - válaszolta -, mert akkor esetleg a búzát is kitépnétek a gyomokkal!`,
    // 30
    `Hagyjátok csak együtt nőni mindkettőt az aratásig! Akkor szólok majd az aratóknak: Szedjétek össze először a gyomokat, kössétek csomókba, és égessétek el, a tiszta búzát pedig gyűjtsétek a raktáramba!«”`,
    // 31  ~ A mustármag és a kovász példázata (#AY) ~
    `Ezután egy másik hasonlatot is mondott nekik: „Isten Királysága hasonló ahhoz, mikor egy ember a kertjébe mustármagot vet.`,
    // 32
    `Ez a legkisebb a magok között, de mire felnő, nagyobb lesz minden más kerti növénynél. Szinte fává nő, rászállnak a madarak, és fészket raknak az ágai között.”`,
    // 33
    `Mondott nekik egy másik hasonlatot is: „Isten Királysága hasonló ehhez: egy asszony kovászt kevert három mérce (#aq) lisztbe, majd állni hagyta, amíg az egész tészta megkelt.”`,
    // 34
    `Jézus mindig ilyen jelképes történetek segítségével tanította az embereket, példázatok nélkül nem mondott nekik semmit.`,
    // 35
    `Így teljesedett be, amit Isten a prófétán keresztül mondott:
„Példázatok és hasonlatok által szólok.
     Olyan titkokról beszélek,
     amelyek a világ teremtése óta rejtve voltak.” (#ar)`,
    // 36  ~ A búza és a gyomok példázatának magyarázata ~
    `Ezután Jézus elbocsátotta az embereket, és hazament. Tanítványai odamentek hozzá, és kérték: „Magyarázd el nekünk a búza és a gyomok példázatát!”`,
    // 37
    `Jézus így válaszolt: „Aki a jó magot veti, az az Emberfia.`,
    // 38
    `A szántóföld a világ. A jó mag azokat jelképezi, akik Isten Királyságához tartoznak, a gyomok pedig azokat, akik a Gonoszhoz tartoznak.`,
    // 39
    `Az ellenség, aki a gyomokat veti, a Sátán. Az aratás ennek a korszaknak a vége (#as) , az aratók pedig az angyalok.`,
    // 40
    `Ahogy a gyomokat összeszedik és elégetik, úgy fog történni ennek a korszaknak a végén is.`,
    // 41
    `Az Emberfia elküldi angyalait, hogy válogassák ki és gyűjtsék össze Királyságából mindazokat, akik gonosz dolgokat tesznek, és akik miatt az emberek vétkeznek.`,
    // 42
    `Ezeket tüzes kemencébe dobják, ahol sírás és fogcsikorgatás lesz.`,
    // 43
    `Ekkor azok, akik szeretik az igazságot, ragyogni fognak majd Mennyei Atyjuk Királyságában, mint a nap. Akinek van füle, hallja és értse meg, amit mondok!”`,
    // 44  ~ Példázat a kincsről és az igazgyöngyről ~
    `„Isten Királysága hasonló ehhez: egy ember elrejtett kincset talált a szántóföldben. Azután visszatemette, majd nagy örömmel elment, minden vagyonát eladta, és megvette azt a földet, amelyben a kincs volt.`,
    // 45
    `Isten Királysága hasonló ehhez: volt egy kereskedő, aki igazgyöngyökkel kereskedett.`,
    // 46
    `Egyszer talált egy nagyon értékes gyöngyöt. Akkor elment, eladta minden vagyonát, és megvette azt az egyetlen gyöngyöt.”`,
    // 47  ~ Példázat a halászhálóról ~
    `„Isten Királysága hasonló ehhez: a halászok kerítőhálójukkal mindenféle halat összefogtak,`,
    // 48
    `majd mikor egészen megtelt, kihúzták a partra. Ezután leültek, és kiválogatták a zsákmányt: a jó ízű halakat edényekbe gyűjtötték, a rosszakat pedig félredobták.`,
    // 49
    `Így lesz majd ennek a korszaknak a végén is: eljönnek az angyalok, és kiválogatják a gonoszokat az igazságosak közül.`,
    // 50
    `A gonoszokat tüzes kemencébe dobják, ahol sírás és fogcsikorgatás lesz.”`,
    // 51
    `„Értitek már, mit jelentenek ezek a példázatok?” - kérdezte Jézus.
„Igen” - felelték a tanítványai.`,
    // 52
    `Ekkor ő így folytatta: „Tehát minden törvénytanító, aki Isten Királyságának követője lett, ahhoz a házigazdához hasonlít, aki a kamrájából új és régi dolgokat is előhoz.”`,
    // 53  ~ Jézus Názáretben (#AZ) ~
    `Miután Jézus befejezte ezeket a történeteket, elment onnan.`,
    // 54
    `Visszatért a saját városába, és ott is tanított a zsinagógában. Mindenki nagyon csodálkozott rajta, és ezt kérdezgették egymástól: „Honnan szerzett ilyen bölcsességet és csodatevő erőt?`,
    // 55
    `Hiszen ez csak az ács fia! Ismerjük az egész családját: anyját, Máriát, és a testvéreit, Jakabot, Józsefet, Simont és Júdást,`,
    // 56
    `meg a húgait, akik mind itt élnek közöttünk! Honnan vette hát ezt a bölcsességet és a csodatevő erőt?”`,
    // 57
    `Ezért nem fogadták el Jézust, hanem visszautasították és elfordultak tőle.
Jézus ekkor ezt mondta nekik: „A prófétát mindenhol tisztelik, csak a saját városában és családjában nem.”`,
    // 58
    `Ebben a városban nem is tett sok csodát, mert nem hittek benne.`
  ],
  [
    // 14  ~ Heródes Jézusról (#BA) ~
    `Abban az időben Heródes, Galilea fejedelme is hallott Jézusról.`,
    // 2
    `Ezt mondta a szolgáinak: „Ez nem lehet más, mint Bemerítő János. Nyilván feltámadt a halálból, és azért van ilyen csodatevő ereje.”`,
    // 3  ~ Bemerítő János halála ~
    `Ez a Heródes volt az, aki korábban Bemerítő Jánost letartóztatta, megbilincseltette, és börtönbe záratta. Mindez Heródiás miatt történt, aki Fülöpnek, Heródes testvérének volt a felesége.`,
    // 4
    `Ugyanis korábban János többször is mondta Heródesnek: „A Törvény szerint nem szabad együtt élned Heródiással!”`,
    // 5
    `Ezért Heródes meg akarta öletni Jánost, de félt a néptől, mert Jánost prófétának tartották.`,
    // 6
    `Amikor azonban eljött Heródes születésnapja, Heródiás leánya táncolt a vendégek előtt. Annyira megtetszett Heródesnek,`,
    // 7
    `hogy megesküdött, akármit kér tőle a leány, megadja neki.`,
    // 8
    `Anyja tanácsára a leány ezt kérte: „Add nekem Bemerítő János fejét egy tálon!”`,
    // 9
    `A király elszomorodott, de esküje és a vendégek miatt nem akarta a leányt visszautasítani, hanem megparancsolta, hogy teljesítsék a kérését.`,
    // 10
    `Elküldte szolgáit, és azok lefejezték Jánost a börtönben.`,
    // 11
    `Majd elhozták a leánynak János fejét egy tálon, ő meg átadta az anyjának.`,
    // 12
    `Később eljöttek János tanítványai a holttestért, és eltemették, majd elmentek Jézushoz, és mindezt elmondták neki.`,
    // 13  ~ Jézus enni ad több, mint ötezer embernek (#BB) ~
    `Amint ezt Jézus meghallotta, beszállt egy bárkába, és elvonult egy lakatlan helyre, mert egyedül akart lenni. Az emberek azonban megtudták, hová tart, és gyalogosan utánamentek a városokból.`,
    // 14
    `Amikor Jézus partra szállt, és látta az összegyűlt sokaságot, megsajnálta őket, és meggyógyította a betegeiket.`,
    // 15
    `Mikor már esteledett, a tanítványai azt mondták Jézusnak: „Lakatlan ez a hely, és késő van már. Küldd el az embereket, hogy a környező falvakban valami ennivalót vehessenek maguknak!”`,
    // 16
    `Jézus így felelt: „Nem kell elmenniük, ti adjatok nekik enni!”`,
    // 17
    `„Nincs nálunk más, csak öt kenyér és két hal” - felelték.`,
    // 18
    `„Hozzátok ide!” - mondta Jézus.`,
    // 19
    `Ezután szólt az embereknek, hogy üljenek le a fűbe, majd kezébe vette az öt kenyeret és a két halat. Felnézett az égre, hálát adott Istennek, azután tört a kenyerekből, és odaadta a tanítványainak, azok pedig szétosztották.`,
    // 20
    `Mindenki evett és jóllakott. Végül összeszedték a maradékot, és 12 kosarat töltöttek meg a darabokkal.`,
    // 21
    `Körülbelül ötezer férfi volt ott, s ezen felül asszonyok és gyermekek, akik mind ettek ebből.`,
    // 22  ~ Jézus és Péter a vízen jár (#BC) ~
    `Közvetlenül ezután Jézus megparancsolta a tanítványainak, hogy szálljanak be a bárkába, és evezzenek át a túlsó partra, amíg ő hazaküldi az embereket.`,
    // 23
    `Miután elbocsátotta a sokaságot, Jézus felment a hegyre imádkozni. Késő estig ott is maradt egyedül.`,
    // 24
    `Eközben a bárka már jó messzire volt a parttól, a hullámok erősen csapkodták és dobálták, mivel ellenszél fújt.`,
    // 25
    `Valamikor hajnali három és hat óra között Jézus a vízen járva a tanítványokhoz ment.`,
    // 26
    `Amikor meglátták őt, ahogy a tó vizén jár, nagyon megrémültek, mert azt gondolták, hogy kísértetet látnak, és ijedtükben kiáltozni kezdtek.`,
    // 27
    `Jézus azonnal megszólította őket: „Nyugodjatok meg! Én vagyok az, ne féljetek!”`,
    // 28
    `Péter erre azt mondta: „Uram, ha valóban te vagy az, parancsolj, hogy hozzád mehessek a vízen!”`,
    // 29
    `„Gyere!” - felelte Jézus.
Péter ki is lépett a csónakból, és a vízen járva elindult Jézus felé,`,
    // 30
    `de mikor látta, hogy milyen erősen fúj a szél, megijedt. Ekkor süllyedni kezdett, és felkiáltott: „Ments meg, Uram!”`,
    // 31
    `Jézus azonnal utána nyúlt, megragadta, és ezt mondta: „Kishitű, miért kételkedtél?”`,
    // 32
    `Amikor Jézus és Péter beszállt a bárkába, azonnal elállt a szél.`,
    // 33
    `A tanítványok leborultak Jézus előtt, imádták őt, és azt mondták: „Valóban Isten Fia vagy!”`,
    // 34  ~ Jézus betegeket gyógyít Genezáretben (#BD) ~
    `Miután átkeltek a tavon, Genezáretbe értek.`,
    // 35
    `Az ott lakók felismerték Jézust, és az egész környéken elhíresztelték, hogy megérkezett. Így azután minden beteget odavittek hozzá,`,
    // 36
    `és kérték, hogy legalább a ruhája szélét érinthessék. Akik csak megérintették, mind meg is gyógyultak.`
  ],
  [
    // 15  ~ Isten szava fontosabb, vagy az emberi hagyományok? (#BE) ~
    `Ekkor farizeusok és törvénytanítók jöttek Jézushoz Jeruzsálemből. Ezt kérdezték tőle:`,
    // 2
    `„Tanítványaid nem végzik el a kézmosás szertartását, mielőtt esznek. Miért nem engedelmeskednek a régi vallási vezetők rendeleteinek?”`,
    // 3
    `Jézus kérdéssel válaszolt: „Ti pedig miért toljátok félre Isten parancsait a hagyományok kedvéért?`,
    // 4
    `Isten ugyanis ezt mondta: »Tiszteld apádat és anyádat!« (#at) , és ezt is: »Aki apját vagy anyját gyalázza, az halállal bűnhődjön!« (#au)`,
    // 5
    `Ezzel szemben ti azt tanítjátok, hogy ha valaki már felajánlotta a Templom javára azt, amivel a szüleinek segíthetne, akkor inkább a Templomnak adja, mint a szüleinek.`,
    // 6
    `Ezzel valójában azt tanítjátok, hogy nem fontos, amit Isten mond, és nem neki kell engedelmeskednünk. Fontosabb, hogy mindenki a ti hagyományaitokat kövesse.`,
    // 7
    `Milyen képmutatók vagytok! Jól mondta rólatok Ézsaiás próféta:`,
    // 8
    `»Ez a nép csak a szájával tisztel engem,
     de szíve távol van tőlem.`,
    // 9
    `Látszólag tisztelnek ugyan engem,
     de nem ér az semmit,
mert tanításaik csak emberi parancsok!«” (#av)`,
    // 10
    `Ekkor magához szólította az embereket, és ezt mondta nekik: „Figyeljetek rám, és értsétek meg:`,
    // 11
    `nem az teszi tisztátalanná az embert, ami a száján bemegy, hanem, ami a száján kijön.”`,
    // 12
    `Ekkor odamentek hozzá a tanítványai, és ezt kérdezték: „Tudod-e, hogy a farizeusok felháborodtak azon, amit mondtál?”`,
    // 13
    `„Mennyei Atyám gyökerestől kitép majd minden facsemetét, amelyet nem ő ültetett - válaszolta Jézus. -`,
    // 14
    `Ezért ne is törődjetek a farizeusokkal, hiszen vakok ők, akik a többi vakot vezetik! Ha pedig vak vezet világtalant, akkor mindketten gödörbe esnek.”`,
    // 15
    `Ekkor Péter megkérte: „Magyarázd meg nekünk, mit jelent az előbbi hasonlat!”`,
    // 16
    `„Hát még ti sem értitek? - kérdezte Jézus. -`,
    // 17
    `Hiszen tudjátok, hogy az étel, amelyet megeszünk, a szájon át a gyomorba kerül, végül pedig kiürül onnan.`,
    // 18
    `Ami viszont a szádból kijön - vagyis, amit mondasz -, az a szívedből származik, és az tehet téged tisztátalanná!`,
    // 19
    `Mert az ember szívéből származnak a gonosz gondolatok, a gyilkosság, a házasságtörés, a szexuális bűnök, a lopás, a hazugság és a gyalázkodás.`,
    // 20
    `Ezek teszik tisztátalanná az embert, nem pedig az, ha nem végzi el a szertartásos kézmosást étkezés előtt.”`,
    // 21  ~ Jézus segít egy kánaáni asszonyon (#B) ~
    `Azután Jézus továbbment onnan Tírusz és Szidón vidékére.`,
    // 22
    `Ekkor egy kánaáni asszony jött oda hozzá, aki azon a vidéken lakott. Folyvást így kiáltozott: „Uram, Dávid Fia, könyörülj rajtam! A leányomat kegyetlenül gyötri egy gonosz szellem!”`,
    // 23
    `Jézus azonban nem válaszolt neki. Ekkor a tanítványai hozzá fordultak: „Kérünk, küldd el ezt az asszonyt! Utánunk jön, és szüntelen kiáltozik!”`,
    // 24
    `Jézus így válaszolt: „Az Atya engem csak Izráel népének elveszett juhaihoz küldött.”`,
    // 25
    `Az asszony ekkor Jézus elé lépett, leborult előtte, és így kérte: „Uram, segíts rajtam!”`,
    // 26
    `Jézus így válaszolt: „Nem helyes, ha elvesszük a gyerekektől a kenyeret, és a kutyáknak dobjuk.”`,
    // 27
    `„Igazad van, Uram! - válaszolt az asszony. - De még a kutyáknak is jut valami maradék a gazdájuk asztaláról.”`,
    // 28
    `Erre Jézus így felelt: „Asszony, milyen nagy hited van! Legyen úgy, ahogyan kívánod!” - és abban az órában meggyógyult az asszony leánya.`,
    // 29  ~ Sokakat meggyógyít ~
    `Jézus ezután visszatért a Galileai-tó partjára. Felment egy dombra, és leült.`,
    // 30
    `Sokan jöttek hozzá, akik sántákat, vakokat, bénákat, süketnémákat, és mindenféle más beteget hoztak. Letették őket Jézus lába elé, ő pedig mindegyiket meggyógyította.`,
    // 31
    `Az emberek nem tudtak hová lenni a csodálkozástól, amikor látták, hogy a süketnémák megszólalnak, a bénák meggyógyulnak, a sánták járnak, a vakok látnak - és dicsőítették Izráel Istenét.`,
    // 32  ~ Enni ad több, mint négyezer embernek (#C) ~
    `Jézus magához hívta tanítványait, és ezt mondta nekik: „Sajnálom ezt a sokaságot! Már három napja velem vannak, és kifogytak minden ennivalóból. Nem akarom éhesen elküldeni őket, nehogy összeessenek az úton.”`,
    // 33
    `„Honnan vehetnénk ezen az elhagyatott helyen annyi kenyeret, hogy ekkora tömeget jóllakassunk?” - kérdezték a tanítványok.`,
    // 34
    `Jézus megkérdezte: „Hány kenyeretek van?”
„Hét - válaszolták -, és néhány kisebb halunk.”`,
    // 35
    `Ezután Jézus szólt az embereknek, hogy telepedjenek le a földre.`,
    // 36
    `Majd fogta a hét kenyeret és a halakat, és miután hálát adott Istennek, tört az ételből, és kezdte osztani a tanítványainak, azok pedig az embereknek.`,
    // 37
    `Mindnyájan ettek, és jóllaktak. Utána összeszedték a maradékot, és hét kosarat töltöttek meg a darabokkal.`,
    // 38
    `A tömegben körülbelül négyezer férfi volt, s rajtuk kívül még az asszonyok és a gyerekek.`,
    // 39
    `Miután Jézus elbocsátotta az embereket, beszállt egy bárkába, és Magadán vidékére ment.`
  ],
  [
    // 16  ~ A vallási vezetők próbára akarják tenni Jézust (#D) ~
    `Farizeusok és a szadduceusok jöttek Jézushoz, hogy próbára tegyék. Arra kérték, hogy tegyen valami csodát, mutasson nekik mennyei jelt bizonyítékul Istentől.`,
    // 2
    `Ő azonban így válaszolt nekik: „Napnyugta idején felnéztek az égre, és azt mondjátok: »Holnap szép idő lesz, mert vörös az ég alja.«`,
    // 3
    `Korán reggel felnéztek az égre, és azt mondjátok: »Ma vihar lesz, mert az ég vörös és felhős.« Mikor látjátok az égbolt képét, megértitek milyen idő következik, igaz? Akkor a mostani idők jeleit miért nem értitek meg?`,
    // 4
    `Ez a gonosz és hűtlen nemzedék mindenáron valamilyen csodás jelt akar látni Istentől származó bizonyítékul. De nem fognak semmilyen csodát látni, csupán azt, amely Jónás (#d) prófétával történt!” Ezzel otthagyta őket, és továbbment.`,
    // 5  ~ Óvakodjatok a farizeusok kovászától! (#E) ~
    `A tanítványok áteveztek a tó túlsó partjára, de elfelejtettek kenyeret vinni magukkal.`,
    // 6
    `Jézus ezt mondta nekik: „Legyetek óvatosak: tartsátok távol magatokat a farizeusok és szadduceusok kovászától!”`,
    // 7
    `Ők meg így tanakodtak egymás között: „Biztosan azért mondta ezt, mert elfelejtettünk kenyeret hozni.”`,
    // 8
    `Jézus tudta, miről beszélnek, és ezt mondta: „Miért tanakodtok azon, hogy nincs nálatok kenyér?`,
    // 9
    `Még mindig nem értitek?! Nem emlékeztek az ötezer emberre, az öt kenyérre, és hogy hány kosár maradékot szedtetek össze?`,
    // 10
    `Vagy a négyezerre, a hét kenyérre, és a maradékokkal teli kosarakra?`,
    // 11
    `Hát nem értitek, hogy nem kenyérről beszéltem? Azt mondtam, hogy legyetek óvatosak, és tartsátok távol magatokat a farizeusok és szadduceusok kovászától!”`,
    // 12
    `Ekkor értették meg a tanítványok, hogy miről beszélt. Nem arról, hogy óvakodjanak a kovásztól, amely a kenyeret megkeleszti, hanem hogy a farizeusok és szadduceusok tanításaitól tartsák távol magukat.`,
    // 13  ~ Te vagy a Messiás, az élő Isten Fia! (#F) ~
    `Amikor Jézus Cézárea Filippi vidékén járt, megkérdezte tanítványaitól: „Mit mondanak az emberek rólam, kicsoda az Emberfia?”`,
    // 14
    `„Egyesek azt mondják, hogy te vagy Bemerítő János, mások Illésnek, vagy Jeremiásnak, vagy a régi próféták közül az egyiknek tartanak” - válaszolták.`,
    // 15
    `„Hát ti mit mondtok rólam, ki vagyok én?” - kérdezte tovább.`,
    // 16
    `Simon Péter így válaszolt: „Te vagy a Messiás, az élő Isten Fia.”`,
    // 17
    `Jézus ezt felelte: „Milyen áldott és boldog vagy Simon, Jóna fia, mert ezt nem magadtól mondtad, hanem Mennyei Atyám jelentette ki neked.`,
    // 18
    `Én pedig azt mondom, hogy te Péter vagy. Erre a sziklára fogom felépíteni az eklézsiámat, és a halál erői (#e) sem lesznek képesek azt legyőzni.`,
    // 19
    `Neked fogom adni Isten Királyságának a kulcsait, és amit megkötsz a földön, az meg lesz kötve a Mennyben, viszont amit feloldasz a földön, az fel lesz oldva a Mennyben.”`,
    // 20
    `Ezután szigorúan megparancsolta a tanítványoknak, hogy senkinek se mondják el, hogy ő a Messiás.`,
    // 21  ~ Jézus előre jelzi a halálát és feltámadását (#G) ~
    `Ettől kezdve beszélt Jézus a tanítványainak arról, hogy fel kell mennie Jeruzsálembe, s ott a nép vezetői, a főpapok és a törvénytanítók miatt sokat kell majd szenvednie. Végül megölik, de három nappal később fel fog támadni.`,
    // 22
    `Ekkor Péter félrehívta Jézust, szemrehányást tett neki, és helyre akarta igazítani: „Isten mentsen meg téged attól, Uram, hogy ez bekövetkezzen! Ilyesmi semmiképpen sem történhet meg veled!”`,
    // 23
    `De Jézus hátat fordított Péternek, és ezt mondta: „Takarodj a szemem elől (#f) , Sátán! El akarsz gáncsolni, mivel nem úgy gondolkodsz, mint Isten, hanem úgy, mint az emberek!”`,
    // 24
    `Ezután a tanítványaihoz fordult: „Aki engem akar követni, az tagadja meg magát, vegye fel és vigye a keresztjét, úgy kövessen.`,
    // 25
    `Aki megpróbálja magát megmenteni, az el fog veszni. Aki viszont értem feladja önmagát, az fogja igazán megtalálni az életét.`,
    // 26
    `Mit ér, ha az ember mindent megnyer, amit csak a világ adhat, de a lelkét elveszti? Milyen váltságdíjat adhatna a lelkéért cserébe?`,
    // 27
    `Bizony, az Emberfia eljön Atyja dicsőségében, és angyalai kiséretével, s akkor majd mindenkinek megadja, amit a tettei szerint megérdemel.`,
    // 28
    `Igazán mondom nektek: vannak köztetek, akik nem ízlelik meg a halált, amíg meg nem látják az Emberfiát, amint eljön királyi dicsőségében.”`
  ],
  [
    // 17  ~ Jézus megmutatkozik a dicsőségében (#H) ~
    `Hat nappal később Jézus felment egy magas hegyre. Csak Pétert, Jakabot és annak testvérét, Jánost vitte magával, senki más nem volt velük.`,
    // 2
    `A hegyen Jézus a tanítványok szeme láttára átváltozott: arca úgy ragyogott, mint a nap, a ruhája pedig fehéren fénylett.`,
    // 3
    `Majd hirtelen megjelent mellette Mózes és Illés, és beszélgettek vele.`,
    // 4
    `Péter ekkor Jézushoz fordult: „Uram, olyan jó itt lenni! Ha akarod, készítek három sátrat: neked, Mózesnek és Illésnek.”`,
    // 5
    `Mialatt ezt mondta, hirtelen fényes felhő takarta be őket. A felhőből hang hallatszott: „Ő a Fiam, akit szeretek, és akiben gyönyörködöm! Hallgassatok rá, és engedelmeskedjetek neki!”`,
    // 6
    `Amikor a tanítványok ezt meghallották, arccal a földre borultak, és nagyon megrémültek.`,
    // 7
    `Jézus hozzájuk lépett, megérintette őket, és ezt mondta: „Álljatok fel, ne féljetek!”`,
    // 8
    `Amikor felnéztek, már csak őt látták.`,
    // 9
    `Miközben lefelé jöttek a hegyről, Jézus megparancsolta nekik: „Ne mondjátok el senkinek, amit láttatok, amíg az Emberfiát fel nem támasztják a halottak közül!”`,
    // 10
    `Majd megkérdezték tőle a tanítványai: „Miért mondják a törvénytanítók, hogy a Messiás előtt Illésnek kell eljönnie?” (#g)`,
    // 11
    `Jézus így felelt: „Illés majd valóban eljön, és mindent helyreállít.`,
    // 12
    `Azt mondom nektek: Illés már el is jött, de az emberek nem ismerték fel, és kényük-kedvük szerint bántak vele. Ugyanígy fognak bánni az Emberfiával is.”`,
    // 13
    `Ekkor megértették a tanítványok, hogy Bemerítő Jánosról beszélt.`,
    // 14  ~ A megszállott fiút megszabadítja (#I) ~
    `Amikor Jézus visszament az összegyűlt sokasághoz, egy férfi jött hozzá, leborult előtte, és így kérlelte:`,
    // 15
    `„Uram, könyörülj meg a fiamon, mert szörnyű rohamai vannak, és borzasztóan szenved. Gyakran előfordul, hogy tűzbe vagy vízbe esik.`,
    // 16
    `Elhoztam őt a tanítványaidhoz, de ők nem tudták meggyógyítani.”`,
    // 17
    `Jézus ekkor ezt mondta: „Milyen hitetlen és romlott ez a nemzedék! Meddig kell még veletek maradnom?! Meddig szenvedjelek el még titeket? Hozzátok ide azt a fiút!”`,
    // 18
    `Akkor Jézus ráparancsolt a gonosz szellemre, aki kiment a fiúból. A fiú pedig azonnal meggyógyult.`,
    // 19
    `Amikor Jézus egyedül volt, odamentek hozzá a tanítványai, és megkérdezték: „Mi miért nem tudtuk kiűzni ezt a gonosz szellemet?”`,
    // 20
    `Ő ezt felelte: „Mert gyenge a hitetek. Igazán mondom nektek: ha van hitetek - még, ha csak egy mustármagnyi is -, és azt mondjátok ennek a hegynek: »Menj innen oda!«, akkor az oda is megy. Akkor semmi sem lesz lehetetlen a számotokra.`,
    // 21
    `Ezt a fajta gonosz szellemet csak böjtöléssel és imádkozással lehet kiűzni.”`,
    // 22  ~ Jézus előre jelzi a halálát és feltámadását (#J) ~
    `Később, amikor a tanítványok összegyűltek Galileában, Jézus ezt mondta nekik: „Az Emberfiát kiszolgáltatják az embereknek,`,
    // 23
    `akik meg fogják ölni, de ő a harmadik napon fel fog támadni.” Ezen a tanítványok nagyon elszomorodtak.`,
    // 24  ~ Az adóról ~
    `Egyszer Jézus és a tanítványai Kapernaumba érkeztek. Péter ott adószedőkkel találkozott, akik a Templom számára gyűjtötték az adót: fejenként két drachmát. Megkérdezték Pétert: „Mesteretek nem fizeti a templomadót?”`,
    // 25
    `„Dehogynem!” - válaszolta Péter. Azután bement a házba, de még mielőtt megszólalt volna, Jézus megkérdezte: „Simon, mit gondolsz? A földi királyok kitől szednek vámot és adót? A saját népüktől, vagy az idegenektől?”`,
    // 26
    `„Természetesen az idegenektől!” - felelte Péter.
„Ezek szerint a saját népüknek nem kell adót fizetniük - mondta Jézus. -`,
    // 27
    `De hogy fel ne háborítsuk őket, menj ki a tóhoz horgászni. Amikor kifogod az első halat, nyisd ki a száját, és egy négydrachmás ezüstpénzt találsz benne. Add oda az adószedőknek értem és érted!”`
  ],
  [
    // 18  ~ Ki a legnagyobb? (#K) ~
    `Abban az időben megkérdezték Jézustól a tanítványai: „Ki a legnagyobb Isten Királyságában?”`,
    // 2
    `Ekkor Jézus odahívott egy gyermeket, odaállította közéjük, és így felelt:`,
    // 3
    `„Igazán mondom nektek: meg kell változzon a gondolkodásotok, hogy olyanok legyetek, mint egy gyermek, különben semmiképpen sem mehettek be Isten Királyságába.`,
    // 4
    `Ezért az lesz a legnagyobb Isten Királyságában, aki megalázkodik, és olyan lesz, mint ez a gyermek.`,
    // 5
    `Aki pedig befogad egy ilyen gyermeket az én nevemben, az engem fogad be.”`,
    // 6  ~ Ne okozz megütközést! (#L) ~
    `„Ezek a kicsinyek hisznek bennem, de jaj annak, aki miatt közülük akár csak egy is elveszíti a hitét! Jobban járna, ha egy malomkövet kötnének a nyakára, és bedobnák a tengerbe, mielőtt ilyen bajt okozna.`,
    // 7
    `Jaj a világnak a bűnbe vivő kísértések miatt! Elkerülhetetlen ugyan, hogy a kísértések próbára tegyék őket, de jaj annak, aki miatt bűnbe esnek!`,
    // 8
    `Ezért, ha a saját kezed, vagy lábad visz bűnbe, még azt is inkább vágd le, és dobd el! Jobb, ha csonkán vagy fél lábbal jutsz be az örök életre, mint ha kezed-lábad épségben megmarad, és úgy dobnak az örök tűzbe.`,
    // 9
    `Ha a szemed visz bűnbe, még azt is inkább vájd ki, és dobd el! Jobb, ha fél szemmel jutsz be az örök életre, mint ha két szemed megmarad, és úgy dobnak a gyehenna tüzébe!”`,
    // 10
    `„Vigyázzatok! Egyet se nézzetek le ezek közül a gyermekek közül! Mert mondom nektek: a melléjük rendelt angyalok mindig látják Atyám arcát a Mennyben!`,
    // 11
    `Az Emberfia azért jött, hogy megmentse az elveszetteket”.`,
    // 12  ~ Az elveszett juh (#M) ~
    `Mit gondoltok? Ha valakinek száz juha van, és az egyik elkóborol, vajon nem hagyja-e ott a legelőn a kilencvenkilencet, hogy megkeresse azt az egyet?`,
    // 13
    `Igazán mondom nektek: mikor megtalálja, jobban örül annak az egynek, mint a többi kilencvenkilencnek, amely nem tévedt el.`,
    // 14
    `Ugyanígy Mennyei Atyátok sem akarja, hogy akár egy is elvesszen e gyermekek közül.”`,
    // 15  ~ Ha a testvéred vétkezik (#N) ~
    `„Ha Isten családjába tartozó testvéred vétkezik ellened, (#j) menj oda hozzá, négyszemközt figyelmeztesd, és mutass rá arra, amit rosszul tett! Ha hallgat rád, akkor sikerült elérned, hogy testvérek maradjatok.`,
    // 16
    `Ha nem hallgat rád, újra menj el hozzá, de ezúttal vigyél magaddal egy vagy két embert! Így mindent két, vagy három tanú (#k) bizonyíthat.`,
    // 17
    `Ha rájuk sem hallgat, mondd el a gyülekezetnek! Ha még a gyülekezetre sem hallgat, akkor úgy bánj vele, mint egy hitetlennel vagy vámszedővel!`,
    // 18
    `Igazán mondom nektek: amit megköttök a földön, az meg lesz kötve a Mennyben, viszont amit feloldotok a földön, az fel lesz oldva a Mennyben is.`,
    // 19
    `Igazán mondom nektek: ha közületek ketten összhangban vannak itt a földön, akkor kérhetnek akármit, Mennyei Atyám megadja nekik.`,
    // 20
    `Mert, amikor ketten vagy hárman egységre jutnak az én nevemben, akkor én is ott vagyok közöttük.”`,
    // 21  ~ Példázat az adós szolgáról ~
    `Ezután Péter lépett hozzá, és megkérdezte: „Uram, hányszor kell megbocsátanom az Isten családjába tartozó testvéremnek, aki többször is vétkezik ellenem? Akár hétszer is?”`,
    // 22
    `„Nemcsak hétszer, hanem akár hetvenszer hétszer (#l) is - válaszolta Jézus. -`,
    // 23
    `Mert Isten Királysága hasonlít ehhez: egyszer egy király elhatározta, hogy a szolgáival megfizetteti mindazt, amivel tartoztak neki.`,
    // 24
    `Miközben elszámolt velük, eléje hozták az egyiket, aki tízezer talentummal (#m) tartozott.`,
    // 25
    `Mivel a szolga nem tudta megfizetni az adósságát, a király megparancsolta, hogy adják el őt rabszolgának a feleségével és a gyermekeivel együtt, és adják el minden vagyonát is. Amit pedig ezekért kapnak, abból törlesszék az adósságot.`,
    // 26
    `A szolga ekkor leborult a király előtt, és így könyörgött: »Kérlek, légy türelmes hozzám! Minden adósságomat meg fogom fizetni!«`,
    // 27
    `A király megsajnálta, szabadon engedte, sőt az összes adósságát is elengedte.`,
    // 28
    `Miután ez a szolga elment, találkozott egy másik szolgatársával, aki viszont neki tartozott száz ezüstpénzzel. Torkon ragadta, fojtogatni kezdte, és azt mondta: »Add meg, amivel tartozol!«`,
    // 29
    `Az meg az első szolga lába elé borult, és így könyörgött: »Kérlek, légy türelmes hozzám! Minden adósságomat meg fogom fizetni!«`,
    // 30
    `Az első szolga azonban nem akart megkönyörülni rajta, hanem börtönbe záratta a szolgatársát, amíg az minden tartozását vissza nem fizeti.`,
    // 31
    `Amikor annak szolgatársai meglátták ezt, nagyon megdöbbentek, majd elmentek a királyhoz, és elmondták, mi történt.`,
    // 32
    `Ekkor a király behívatta az első szolgát, és ezt mondta neki: »Te gonosz szolga, én minden adósságodat elengedtem, mivel kegyelemért könyörögtél!`,
    // 33
    `Neked is ugyanúgy könyörülnöd kellett volna a szolgatársadon, ahogyan én könyörültem rajtad!«`,
    // 34
    `Majd a király haragjában átadta ezt a szolgáját a börtönőröknek, hogy tartsák fogva, amíg ki nem fizeti minden adósságát.`,
    // 35
    `Bizony, így bánik veletek Mennyei Atyám is, ha szívből meg nem bocsáttok annak a testvéreteknek, aki vétkezett ellenetek!”`
  ],
  [
    // 19  ~ A házasságról és a válásról (#O) ~
    `Miután Jézus befejezte ezeket a tanításokat, Galileából Júdeába ment, a Jordán folyón túlra.`,
    // 2
    `Nagy tömeg követte, és ő meggyógyította a betegeiket.`,
    // 3
    `Ekkor néhány farizeus jött hozzá, akik próbára akarták tenni. Azt kérdezték tőle: „Megengedi-e a Törvény, hogy a férj bármilyen okból elváljon a feleségétől?”`,
    // 4
    `Jézus megkérdezte tőlük: „Sohasem olvastátok az Írásban, hogy Isten a teremtéskor férfivá és nővé teremtette az embert, (#n) és`,
    // 5
    `azt mondta: »Ezért a férfi elhagyja apját és anyját, ragaszkodik a feleségéhez, és ketten egy testté válnak«? (#o)`,
    // 6
    `Ezután tehát már nem kettő, hanem egy. Amit pedig Isten tett eggyé, azt ember ne válassza szét!”`,
    // 7
    `A farizeusok azonban tovább faggatták: „Akkor miért adott Mózes olyan rendelkezést, amely megengedi, hogy a férfi elküldje a feleségét úgy, hogy válólevelet (#p) ad neki?”`,
    // 8
    `Jézus így válaszolt: „Mózes csak a szívetek keménysége miatt engedte meg, hogy elváljatok a feleségetektől, de kezdetben nem így volt.`,
    // 9
    `Én azonban azt mondom nektek: aki a feleségét elküldi - a felesége házasságtörésén kívül más, egyéb okból -, és mást vesz feleségül, az házasságtörést követ el.”`,
    // 10
    `Ekkor a tanítványok azt mondták: „Ha ez a helyzet a férj és felesége között, akkor jobb meg sem házasodni.”`,
    // 11
    `Jézus így válaszolt: „Erre nem mindenki képes, csak azok, akiket Isten képessé tesz rá.`,
    // 12
    `Többféle oka lehet annak, ha valaki nem házasodik meg. Vannak férfiak, akik már eleve úgy születtek, hogy nem alkalmasak a házasságra. Másokat viszont az emberek tettek erre alkalmatlanná. De vannak olyanok is, akik maguk döntöttek úgy, hogy nem fognak megházasodni Isten Királysága kedvéért. Aki képes arra, hogy ezt elfogadja, az fogadja el!”`,
    // 13  ~ Jézus megáldja a gyerekeket (#P) ~
    `Ekkor néhányan gyerekeket vittek Jézushoz, hogy tegye rájuk a kezét, és imádkozzon értük, de tanítványok rájuk szóltak, és el akarták őket zavarni.`,
    // 14
    `Jézus azonban ezt mondta: „Ne zavarjátok el őket! Engedjétek a gyerekeket hozzám jönni, hiszen Isten Királysága olyanoké, akik hozzájuk hasonlítanak!”`,
    // 15
    `Ezután a gyerekekre tette a kezét, majd továbbment.`,
    // 16  ~ A gazdagok nehezen mennek be Isten Királyságába (#Q) ~
    `Egyszer odajött Jézushoz egy férfi, és ezt kérdezte: „Mester! Mi az a jó, amit tennem kell, hogy örök életem legyen?”`,
    // 17
    `Válaszul Jézus megkérdezte tőle: „Miért kérdezed tőlem, hogy mi a jó? Egyedül Isten jó! Ha be akarsz menni az örök életre, kövesd a parancsolatokat!”`,
    // 18
    `„Milyen parancsolatokat?” - kérdezte a férfi.
Jézus így válaszolt: „Ne gyilkolj! Ne kövess el házasságtörést! Ne lopj! Ne tanúskodj hamisan!`,
    // 19
    `Tiszteld apádat és anyádat! (#q) Úgy szeresd embertársadat, (#r) mint saját magadat!” (#s)`,
    // 20
    `A fiatalember ezt felelte: „Ezeket mind megtartottam. Mit kell még tennem?”`,
    // 21
    `Jézus ezt mondta neki: „Ha tökéletes akarsz lenni, add el minden vagyonodat, és a pénzt oszd szét a szegények között! Így a Mennyben lesznek a kincseid. Azután gyere, és kövess engem!”`,
    // 22
    `A fiatalember ekkor szomorúan elment, mert nagyon gazdag volt.`,
    // 23
    `Jézus ekkor a tanítványaihoz fordult: „Igazán mondom nektek: a gazdagok nehezen mennek be Isten Királyságába!`,
    // 24
    `Mondom nektek: könnyebb egy tevének átmenni a tű fokán, mint egy gazdagnak Isten Királyságába bemenni.”`,
    // 25
    `A tanítványok ezen nagyon meglepődtek. Meg is kérdezték: „Hát akkor egyáltalán ki kaphat örök életet?”`,
    // 26
    `Jézus rájuk nézett, és ezt mondta: „Az emberek számára ez valóban lehetetlen, Istennek viszont minden lehetséges.”`,
    // 27
    `Ekkor Péter megkérdezte: „Látod, mi mindent otthagytunk, és követtünk téged. Velünk mi lesz?”`,
    // 28
    `Jézus így felelt: „Igazán mondom nektek: az újjászületéskor az Emberfia majd dicsőséges trónjára ül. Akkor majd ti is - akik követtek engem - tizenkét trónra ültök, hogy Izráel tizenkét törzse felett uralkodjatok.`,
    // 29
    `Mindenki, aki elhagyta értem házát, testvéreit, apját, anyját, gyermekeit vagy szántóföldjeit, százszor annyit kap vissza, és örök életet kap örökségül.`,
    // 30
    `De sokan, akik most az első helyeket foglalják el az életben, akkor majd utolsók lesznek. Ugyanakkor sokan, akik most az utolsó helyeken vannak, az első helyekre kerülnek.”`
  ],
  [
    // 20  ~ Példázat a szőlőmunkásokról ~
    `„Isten Királysága hasonló ehhez: egyszer egy szőlősgazda korán reggel kiment, hogy napszámosokat fogadjon a szőlőjébe.`,
    // 2
    `Megegyezett velük egy dénár napszámban, majd kiküldte őket a szőlőjébe dolgozni.`,
    // 3
    `Reggel kilenc óra körül ismét kiment a piactérre, s látott néhány férfit, akik tétlenül álldogáltak.`,
    // 4
    `Ezt mondta nekik: »Menjetek ti is a szőlőmbe, és ami jár, megkapjátok!«`,
    // 5
    `Azok el is mentek.
Délben, majd három óra körül ismét kiment, és újabb munkásokat fogadott fel, akiket szintén kiküldött a szőlőjébe dolgozni.`,
    // 6
    `Amikor délután öt óra körül kiment a piactérre, megint talált ott munka nélkül lézengőket, és megkérdezte tőlük: »Miért álldogáltok itt tétlenül egész nap?«`,
    // 7
    `»Mert még senki sem fogadott fel bennünket« - felelték.
»Menjetek ti is a szőlőmbe dolgozni!« - mondta nekik.`,
    // 8
    `Amikor beesteledett, a szőlősgazda szólt a munkások vezetőjének: »Hívd ide a munkásokat, és fizesd ki a bérüket! Az utolsókkal kezdd, és az elsőket fizesd ki utoljára!«`,
    // 9
    `Először jöttek azok, akik csak öt óra körül kezdték a munkát. Mindegyikük egy-egy dénárt kapott.`,
    // 10
    `Amikor az elsők következtek, azt remélték, hogy ők majd többet kapnak, de ők is csak egy-egy dénárt kaptak.`,
    // 11
    `Amikor átvették a bérüket, méltatlankodva mondták a gazdának:`,
    // 12
    `»Akik utoljára jöttek, azok csak egy órát dolgoztak. Te azonban ugyanúgy bántál velük, mint velünk, pedig mi egész nap keményen dolgoztunk a forró napon!«`,
    // 13
    `Ő így felelt egyiküknek: »Barátom! Nem vagyok igazságtalan hozzád! Nem abban egyeztünk meg, hogy egy dénár a napszám?`,
    // 14
    `Fogd a béredet, és menj! Ennek az utolsóként érkezett munkásnak is ugyanannyit akarok adni, mint neked.`,
    // 15
    `Vagy talán nincs jogom azt tenni a saját pénzemmel, amit akarok? Azért nézed ezt rossz szemmel és irigykedve, mert én nagylelkű vagyok hozzájuk?«`,
    // 16
    `Így lesznek az utolsókból elsők, és az elsőkből utolsók.”`,
    // 17  ~ Jézus előre jelzi a halálát és feltámadását (#R) ~
    `Amikor Jézus Jeruzsálembe ment, útközben félrehívta a tizenkét tanítványt, és ezt mondta:`,
    // 18
    `„Jól figyeljetek! Most fölmegyünk Jeruzsálembe. Ott az Emberfiát átadják a főpapoknak és a törvénytanítóknak. Azok halálra fogják ítélni,`,
    // 19
    `és átadják az idegeneknek, (#t) hogy kigúnyolják, megkorbácsolják és keresztre feszítve kivégezzék - de három nappal később fel fog támadni.”`,
    // 20  ~ Ki ülhet Jézus jobb és bal oldalán? (#S) ~
    `Ezután odament hozzá a Zebedeus felesége, a fiaival (#u) együtt. Leborult előtte a földre, mert kérni akart tőle valamit.`,
    // 21
    `„Mit szeretnél?” - kérdezte tőle Jézus.
Az asszony így felelt: „Azt szeretném, hogy Királyságodban az egyik fiam a jobb, másik pedig a bal oldaladon ülhessen! Kérlek, ígérd meg ezt nekem!”`,
    // 22
    `Jézus erre így válaszolt a két fiúnak: „Nem tudjátok, mit kértek! Ki tudjátok-e inni azt a poharat, amelyet nekem ki kell innom?” (#v)
„Igen, ki tudjuk inni” - felelték.`,
    // 23
    `Jézus így folytatta: „Valóban fogtok inni a poharamból. De azt, hogy ki ülhet majd a jobb és a bal oldalamon, nem én döntöm el, hanem Mennyei Atyám. Oda majd azok fognak kerülni, akiknek ő ezt a két helyet elkészítette.”`,
    // 24
    `Amikor ezt a másik tíz tanítvány meghallotta, megharagudtak a két testvérre.`,
    // 25
    `De Jézus odahívta magához mind a tizenkettőt, és ezt mondta: „Jól tudjátok, hogy a világ uralkodói hatalmuk alá kényszerítik alattvalóikat, és a nagy hatalmú vezetőik zsarnokoskodnak a népeken.`,
    // 26
    `Közöttetek azonban ne így legyen! Aki közületek nagy akar lenni, legyen a többiek szolgája!`,
    // 27
    `Aki pedig az első akar lenni közöttetek, az legyen a többiek rabszolgája!`,
    // 28
    `Így van ez az Emberfiával is. Ő sem azért jött a Földre, hogy neki szolgáljanak, hanem hogy ő szolgáljon másoknak. Azért jött, hogy életét váltságdíjul adja, és így sokakat megmentsen.”`,
    // 29  ~ Jézus meggyógyítja a jerikói vakokat (#T) ~
    `Amint elhagyták Jerikó városát, nagy tömeg követte Jézust.`,
    // 30
    `Az út szélén két vak ült, akik meghallották, hogy Jézus megy el mellettük, és kiáltozni kezdtek: „Dávid Fia, Urunk, könyörülj rajtunk!”`,
    // 31
    `Az emberek rájuk szóltak, hogy maradjanak csendben, de ők annál jobban kiabáltak: „Dávid Fia, Urunk, könyörülj rajtunk!”`,
    // 32
    `Jézus ekkor megállt, magához hívatta őket, és megkérdezte tőlük: „Mit kívántok? Mit tegyek veletek?”`,
    // 33
    `Így feleltek: „Urunk! Nyisd meg a szemünket, hogy lássunk!”`,
    // 34
    `Jézus megsajnálta őket, és megérintette a szemüket. Abban a pillanatban meggyógyult a szemük, és láttak. Azután követték Jézust.`
  ],
  [
    // 21  ~ Jézus királyként vonul be Jeruzsálembe (#U) ~
    `Jézus és tanítványai Jeruzsálemhez közeledtek. Az Olajfák hegyéhez értek, Betfagé falu szélére. Akkor Jézus előre küldte két tanítványát, és ezt mondta nekik:`,
    // 2
    `„Menjetek be ebbe a faluba! Találtok ott egy kikötött szamarat, a csikójával együtt. Oldjátok el mindkettőt, és vezessétek hozzám!`,
    // 3
    `Ha valaki szólna ezért, mondjátok meg neki, hogy az Úrnak van szüksége rájuk. Akkor azonnal elengedi őket.”`,
    // 4
    `Ez azért történt, hogy beteljesedjen, amit a próféta mondott:`,
    // 5
    `„Mondjátok meg Sion népének: (#w)
     »Nézd, itt jön a Királyod!
Alázatos, és szamáron ül,
     teherhordó állat csikóján.«” (#x)`,
    // 6
    `A tanítványok el is mentek, és mindent úgy tettek, ahogyan Jézus mondta.`,
    // 7
    `Elhozták a szamarat és a csikóját, ráterítették felsőruháikat, Jézus felült rá, és így közeledett Jeruzsálem felé.`,
    // 8
    `Nagy tömeg gyűlt össze, és Jézus elé, az útra terítették felsőruháikat. Mások ágakat vágtak le a fákról, és azokat szórták eléje az útra.`,
    // 9
    `Az előtte és utána vonuló sokaság így kiáltozott:
„Hozsánna (#y) Dávid Fiának!
     Áldott legyen, aki az Örökkévaló nevében jön! (#z)
Hozsánna a magasságban Istennek!”`,
    // 10
    `Amikor Jézus Jeruzsálembe ért, az egész város felbolydult. Mindenki azt kérdezte a másiktól: „Ki ez?”`,
    // 11
    `A Jézust kísérő sokaság így válaszolt: „Ez Jézus, a próféta, a galileai Názáretből.”`,
    // 12  ~ Kizavarja a kereskedőket a Templomból (#V) ~
    `Jézus ezután bement a Templom területére, és kizavarta onnan azokat, akik ott árultak és vásároltak. Felborította a pénzváltók asztalait és a galambárusok padjait,`,
    // 13
    `és rájuk szólt: „Ezt mondja az Írás: »Az én Házamat imádság házának fogják nevezni.« (#aa) Ti azonban »rablók barlangjává« tettétek!” (#ab)`,
    // 14
    `Akkor vakok és sánták mentek Jézushoz a Templom területén, és ő meggyógyította őket.`,
    // 15
    `A főpapok és a törvénytanítók látták Jézus csodálatos gyógyításait, és hallották, amint a gyerekek a Templom területén így kiáltoznak: „Hozsánna a Dávid Fiának!” Mindezek miatt nagyon megharagudtak,`,
    // 16
    `és megkérdezték Jézustól: „Nem hallod, mit kiabálnak ezek a gyerekek?!”
„Hallom! - válaszolta Jézus. - De bizonyára olvastátok ezt az Írásban: »A csecsemők és a kisgyermekek szája által szereztél magadnak dicséretet.«” (#ac)`,
    // 17
    `Ezzel otthagyta őket, kiment Jeruzsálemből, és Betániában töltötte az éjszakát.`,
    // 18  ~ A hit ereje (#W) ~
    `Másnap korán reggel Jézus elindult Jeruzsálembe, s közben megéhezett.`,
    // 19
    `Meglátott egy fügefát az út szélén, odament, de csak levelet talált rajta. Ezt mondta a fának: „Soha többé ne teremjen rajtad gyümölcs!” - az pedig azonnal kiszáradt.`,
    // 20
    `A tanítványok látták ezt, és csodálkozva kérdezték: „Hogyan száradhatott ki a fügefa ilyen hirtelen?”`,
    // 21
    `Jézus így felelt: „Igazán mondom nektek: ha hisztek, és nem kételkedtek, ti is megtehetitek, amit én tettem ezzel a fával. Sőt, még többet is: ha például azt mondjátok ennek hegynek: »Kelj fel, és zuhanj a tengerbe!« - az is megtörténik.`,
    // 22
    `Mindazt, amit imádságotokban hittel kértek, meg fogjátok kapni.”`,
    // 23  ~ Kitől származik Jézus hatalma? (#X) ~
    `Jézus ezután bement a Templom területére. Miközben ott tanított, a főpapok és a nép vezetői odamentek hozzá. Megkérdezték: „Miféle felhatalmazással teszed ezeket a dolgokat? Ki adta neked ezt a hatalmat?”`,
    // 24
    `Jézus így felelt: „Én is kérdezek tőletek valamit. Ha válaszoltok rá, akkor én is megmondom, hogy milyen felhatalmazással teszem mindezt.`,
    // 25
    `Mondjátok meg nekem: Az, hogy János bemerítette az embereket, Istentől volt, vagy emberektől?”
Azok így tanakodtak egymás közt: „Ha azt válaszoljuk, hogy Istentől, akkor majd azt kérdezi: »Akkor miért nem hittetek neki?«`,
    // 26
    `Ha viszont azt mondjuk, hogy emberektől, akkor félnünk kell a nép haragjától, hiszen Bemerítő Jánost mindenki prófétának tartja.”`,
    // 27
    `Ezért azt válaszolták Jézusnak: „Nem tudjuk, honnan származik János hatalma.”
Mire ő így felelt: „Akkor én sem mondom meg nektek, hogy kitől kaptam azt a hatalmat, amellyel ezeket a dolgokat teszem.”`,
    // 28  ~ Példázat a két fiúról ~
    `Majd így folytatta: „Mi a véleményetek erről? Volt egyszer egy ember, és annak két fia. Az apa ezt mondta az egyiknek: »Fiam, menj ki, és dolgozz ma a szőlőmben!«`,
    // 29
    `A fiú így válaszolt: »Nem megyek!« Később mégis meggondolta magát, és kiment dolgozni.`,
    // 30
    `Ezután az apa a másik fiától is ugyanezt kérte. Ő így válaszolt: »Igen, uram, megyek!« - de végül mégsem ment ki.`,
    // 31
    `Kettőjük közül melyik teljesítette az apja akaratát?”
„Az első” - válaszolták a vallási vezetők.
Akkor Jézus ezt mondta nekik: „Igazán mondom nektek, a vámszedők és a prostituáltak előbb be fognak menni Isten Királyságába, mint ti!`,
    // 32
    `Mert eljött hozzátok Bemerítő János, és megmutatta az útját, hogyan válhattok Isten számára elfogadhatóvá, de ti nem hittetek neki. A vámszedők és a prostituáltak azonban hittek neki. Ti láttátok ezt, mégsem tértetek jobb belátásra, hogy hittetek volna Jánosnak!”`,
    // 33  ~ Példázat a gyilkos szőlőmunkásokról (#Y) ~
    `„Most pedig hallgassatok meg egy másik történetet! Volt egy gazda, aki szőlőt telepített. Bekerítette, elkészítette a szőlőtaposó helyet, és őrtornyot épített a kertjébe. Majd az egészet bérbe adta gazdálkodóknak, és elutazott egy másik országba.`,
    // 34
    `Amikor eljött a szüret ideje, elküldte szolgáit a bérlőkhöz, hogy hozzák el a termésből a neki járó részt.`,
    // 35
    `A bérlők azonban megragadták a tulajdonos szolgáit, és megverték őket. Volt, amelyiket meg is öltek, megint másokat megköveztek.`,
    // 36
    `Ezután a gazda más szolgákat küldött hozzájuk, de a bérlők ezekkel is ugyanúgy bántak.`,
    // 37
    `Végül a gazda azt gondolta: »A fiamat talán mégis meg fogják becsülni!« Ezért a saját fiát küldte hozzájuk.`,
    // 38
    `Amikor a bérlők meglátták a fiút, azt mondták egymásnak: »Nézzétek, ő a szőlőskert örököse! Gyertek, öljük meg, akkor a miénk lesz az öröksége!«`,
    // 39
    `Ezért megragadták a fiút, kidobták a szőlőskertből, és meggyilkolták.`,
    // 40
    `Mit gondoltok, mit tesz majd a tulajdonos ezekkel a bérlőkkel, ha megérkezik?”`,
    // 41
    `A vallási vezetők ezt válaszolták: „Mivel kegyetlenek voltak, kegyetlenül elpusztítja őket, a szőlőt pedig olyan bérlőknek adja, akik szüret idején behozzák a neki járó termést.”`,
    // 42
    `Jézus ekkor azt mondta: „Az van megírva az Írásokban:
»Éppen az a kő lett a sarokkővé,
     amelyet az építők félredobtak.
Az Örökkévaló tette sarokkővé,
     mi pedig csodáljuk.« (#ad)
Sohasem olvastátok ezt?`,
    // 43
    `Igazán mondom nektek: Isten Királyságát el fogják venni tőletek. Olyan népnek adják majd, akik a Királysághoz méltó gyümölcsöket teremnek.`,
    // 44
    `Aki erre a kőre ráesik, az összetörik, akire pedig ez a kő rázuhan, azt szétzúzza.” (#ae)`,
    // 45
    `A főpapok és a farizeusok ekkor megértették, hogy Jézus róluk mondta ezt a jelképes történetet.`,
    // 46
    `Ezért szerették volna letartóztatni, de féltek az emberektől, akik Jézust prófétának tartották.`
  ],
  [
    // 22  ~ Példázat a királyi lakodalomról (#Z) ~
    `Jézus ezután egy másik jelképes történetet mondott:`,
    // 2
    `„Isten Királysága hasonlít ehhez: egy király fiának közeledett az esküvője, ezért a király nagy lakodalmat készített, amelyre sok vendéget hívott meg.`,
    // 3
    `Amikor elérkezett az ideje, elküldte a szolgáit, hogy gyűjtsék össze a vendégeket, de a meghívottak nem akartak eljönni.`,
    // 4
    `Ekkor más szolgákat küldött, és ezt mondta nekik: »Azt üzenem a meghívottaknak, hogy már mindent elkészítettem. Levágattam ökreimet és hízott állataimat, most hát jöjjenek a fiam lakodalmára, mert már minden készen áll!«`,
    // 5
    `A szolgák kimentek, de a meghívottak nem hallgattak rájuk, mert mindegyik valami mással volt elfoglalva. Az egyik kiment a szántóföldjére, a másik az üzletébe.`,
    // 6
    `A többiek megfogták a király szolgáit, megverték és meggyilkolták őket.`,
    // 7
    `A király ekkor nagyon megharagudott, elküldte a seregeit, hogy öljék meg a gyilkosokat, és égessék fel a városukat.`,
    // 8
    `Majd ezt mondta a szolgáinak: »A lakodalmi vacsora készen van, de a meghívottak nem voltak rá méltók.`,
    // 9
    `Ezért menjetek ki az útkereszteződésekhez, és hívjatok be mindenkit, akit csak ott találtok.«`,
    // 10
    `A szolgák ki is mentek az utakra, és mindenkit behívtak, akit csak találtak, jókat-rosszakat egyaránt. Így azután a vendégek megtöltötték a termet.`,
    // 11
    `Amikor a király bejött, hogy megnézze a vendégeket, észrevett ott valakit, aki nem a lakodalomhoz illő ruhába volt öltözve.`,
    // 12
    `»Barátom! - szólította meg a király. - Hogyan jöhettél ide lakodalomhoz illő ruha nélkül?« Az meg csak hallgatott.`,
    // 13
    `A király ekkor megparancsolta szolgáinak: »Kötözzétek meg kezét-lábát, és dobjátok ki a külső sötétségbe, ahol sírás és fogcsikorgatás lesz!«`,
    // 14
    `Mert sokan vannak a meghívottak, de kevesen vannak a kihívottak.”`,
    // 15  ~ Ravasz kérdés az adóról (#AA) ~
    `Ekkor a farizeusok otthagyták Jézust. Maguk között arról tanácskoztak, hogyan tudnák ravasz kérdésekkel csapdába csalni, hogy olyat mondjon, amit fel tudnak használni ellene.`,
    // 16
    `El is küldték hozzá néhány tanítványukat a Heródes-pártiakkal együtt. Azok ezt mondták Jézusnak: „Mester, tudjuk, hogy becsületes vagy, és nem törődsz azzal, hogy mások mit gondolnak rólad. Tudjuk, hogy nem vagy részrehajló, és Isten útját az igazságnak megfelelően tanítod.`,
    // 17
    `Mondd meg nekünk: helyesnek tartod-e, hogy adót fizessünk a császárnak, vagy nem?”`,
    // 18
    `Jézus azonban tudta, milyen alattomos szándék vezérli őket, ezért így válaszolt: „Képmutatók! Megpróbáltok csapdába csalni?!`,
    // 19
    `Mutassatok nekem egy pénzérmét, amellyel az adót fizetik!” Odanyújtottak neki egy ezüstpénzt.`,
    // 20
    `„Kinek a képmása és a felirata van rajta?” - kérdezte tőlük.`,
    // 21
    `„A császáré” - felelték azok.
„Akkor adjátok meg a császárnak, ami a császáré; és Istennek, ami Istené!” - mondta Jézus.`,
    // 22
    `Ezen a válaszon nagyon meglepődtek, majd otthagyták Jézust, és elmentek.`,
    // 23  ~ A szadduceusok alattomos kérdése (#AB) ~
    `Ugyanazon a napon odajöttek Jézushoz a szadduceusok is, akik azt mondják, hogy nincs feltámadás. Ezt kérdezték tőle:`,
    // 24
    `„Mester! Mózes azt parancsolta: ha egy férfi gyermektelenül hal meg, akkor a testvére vegye feleségül az özvegyet. Így kell a testvérnek gondoskodnia arról, hogy meghaltnak mégis legyen utódja. (#af)`,
    // 25
    `Volt közöttünk hét fiútestvér. Az első megnősült, de gyermektelenül halt meg, és fivérére hagyta a feleségét.`,
    // 26
    `Ugyanez történt a második fiúval, majd a harmadikkal is, egészen a hetedikig.`,
    // 27
    `Végül meghalt az asszony is.`,
    // 28
    `A feltámadáskor a hét fivér közül kinek lesz a felesége, hiszen azelőtt már mindegyiknek a felesége volt.”`,
    // 29
    `Jézus így felelt meg nekik: „Azért vagytok ilyen súlyos tévedésben, mert nem ismeritek sem az Írásokat, sem Isten hatalmát.`,
    // 30
    `Ugyanis a feltámadás után senki sem nősül meg, és senki sem megy férjhez. A feltámadottak olyanok lesznek, mint az angyalok a Mennyben.`,
    // 31
    `Ami pedig a halottak feltámadását illeti, biztosan olvastátok, amit Isten maga mondott:`,
    // 32
    `»Én vagyok Ábrahám Istene, Izsák Istene és Jákób Istene.« (#ag) Márpedig Isten nem a halottak, hanem az élők Istene.”`,
    // 33
    `Az emberek nagyon elcsodálkoztak ezen a tanításon.`,
    // 34  ~ Melyik a legfontosabb parancs a Törvényben? (#AC) ~
    `Amikor a farizeusok meghallották, hogy Jézus olyan választ adott a szadduceusoknak, amelyre azok nem tudtak mit felelni, mindannyian összegyűltek Jézus körül.`,
    // 35
    `Egyikük, aki törvénytanító volt, próbára akarta tenni Jézust, és megkérdezte tőle:`,
    // 36
    `„Mester, melyik a legfontosabb parancs a Törvényben?”`,
    // 37
    `Ő így válaszolt: „»Szeresd az Örökkévalót, Istenedet teljes szíveddel, egész lelkeddel és teljes értelmeddel!« (#ah)`,
    // 38
    `Ez az első és legfontosabb parancs.`,
    // 39
    `A második is hasonló: »Úgy szeresd embertársadat, (#ai) mint saját magadat!« (#aj)`,
    // 40
    `Ez a két parancsolat az egész Törvény és a próféták írásainak az alapja.”`,
    // 41  ~ A Messiás Dávidnak a Fia és az Ura (#AD) ~
    `Amíg a farizeusok együtt voltak, Jézus is feltett nekik egy kérdést:`,
    // 42
    `„Mit gondoltok a Messiásról? Kinek a fia?”
„Dávid fia” - felelték.`,
    // 43
    `Jézus tovább kérdezett: „Akkor hogyan lehet az, hogy Dávid a Szentlélek által Urának hívja őt? Ugyanis ezt mondta:`,
    // 44
    `»Így szólt Uramhoz az Örökkévaló:
     Ülj mellém jobb felől,
amíg ellenségeidet
     hatalmad alá (#ak) kényszerítem!« (#al)`,
    // 45
    `Ha Dávid Urának nevezi a Messiást, hogyan lehet a Messiás a fia?”`,
    // 46
    `Erre azonban egyik farizeus sem tudott válaszolni. Így attól a naptól kezdve már senki sem merte őt kérdésekkel próbára tenni.`
  ],
  [
    // 23  ~ Jézus véleménye a vallási vezetőkről (#AE) ~
    `Jézus ekkor az összegyűltekhez és a tanítványaihoz fordult:`,
    // 2
    `„A törvénytanítóknak és a farizeusoknak hatalmuk és tekintélyük van, hogy Mózes Törvényét magyarázzák és alkalmazzák.`,
    // 3
    `Ezért fogadjátok meg, amit mondanak, de ne tegyétek azt, amit ők tesznek, és ne kövessétek a példájukat! Mert ők csak tanítják a Törvényt, de maguk nem követik, és nem engedelmeskednek neki!`,
    // 4
    `Szigorú szabályokat állítanak föl, és ráerőltetik az emberekre. Ugyanakkor ők maguk meg sem próbálják követni ezeket.`,
    // 5
    `Mindent csak azért tesznek, hogy az emberek lássák őket. Ezért hordanak nagyobb imadobozokat és ezért hosszabbítják meg a ruhájuk szélén a rojtokat is.`,
    // 6
    `Szeretnek a vacsorákon és a zsinagógákban az előkelő helyeken ülni.`,
    // 7
    `Szeretik, ha a piactéren mindenki tisztelettel köszön nekik, és mesternek szólítja őket.`,
    // 8
    `Ti azonban ne engedjétek, hogy »Tanítónak« szólítsanak benneteket, mert csak egy Tanítótok van, ti pedig mindnyájan testvérek vagytok!`,
    // 9
    `»Atyának« (#am) se szólítsatok senkit a földön, mert csak egy Atyátok van - a Mennyben!`,
    // 10
    `Ne engedjétek azt sem, hogy »Mesternek« szólítsanak benneteket, mert csak egy Mesteretek van, a Messiás!`,
    // 11
    `Aki szolgál a többieknek, az lesz a legnagyobb közöttetek.`,
    // 12
    `Aki különbnek tartja magát másoknál, azt megalázzák. Aki viszont megalázza magát, azt magasra fogják emelni.`,
    // 13
    `Jaj nektek, képmutató törvénytanítók és farizeusok, mert bezárjátok Isten Királyságának kapuját az emberek előtt! Ti magatok nem mentek be rajta, de azokat sem engeditek, akik szeretnének bemenni.`,
    // 14
    `Jaj nektek képmutató törvénytanítók és farizeusok! Elveszitek az özvegyektől a vagyonukat, ugyanakkor pedig hosszasan imádkoztok, hogy az emberek figyeljenek rátok! Ezért súlyos büntetést fogtok kapni.`,
    // 15
    `Jaj nektek, képmutató törvénytanítók és farizeusok! Képesek vagytok keresztül-kasul utazni szárazon és vízen, hogy valakit megnyerjetek a vallásotok követőjének, és ha azzá lett, még biztosabban a Gyehennára külditek, mint amennyire ti arrafelé mentek!`,
    // 16
    `Jaj nektek, akik vezetitek a népet, pedig magatok is vakok vagytok! Azt mondjátok: »Ha valaki úgy ígér meg valamit, hogy a Templomra esküszik, azt fel lehet oldani a fogadalma alól, de ha aranyat ajánlott fel a Templomnak, akkor már nem.«`,
    // 17
    `Ostobák és vakok! Hát mi nagyobb, az arany, vagy maga a Templom, amely szentté teszi az aranyat?`,
    // 18
    `Ezt is mondjátok: »Ha valaki az oltárra esküszik, azt fel lehet oldani a fogadalma alól, de ha áldozati ajándékot ajánlott fel, akkor már nem.«`,
    // 19
    `Vakok! Hát mi nagyobb, az áldozati ajándék, vagy az oltár, amely szentté teszi az ajándékot?`,
    // 20
    `Hasonlóképpen: aki az oltárra esküszik, az mindarra esküszik, ami az oltáron van.`,
    // 21
    `Aki a Templomra esküszik, az arra esküszik, akinek neve abban lakik.`,
    // 22
    `Aki a Mennyre esküszik, az Isten trónjára esküszik, és magára Istenre, aki a trónon ül.`,
    // 23
    `Jaj nektek, képmutató törvénytanítók és farizeusok! Mert mindenből tizedet adtok, még a mentából, kaporból és köményből (#ao) is, de elhanyagoljátok ami a Törvény szerint nehezebb: igazságosan ítélni, könyörületet gyakorolni és hűségesen élni. Pedig ezeket feltétlenül meg kell tenni, és azokat sem kell elhanyagolni!`,
    // 24
    `Vak vezetők, kiszűritek a szúnyogot, de lenyelitek a tevét! (#ap)`,
    // 25
    `Jaj nektek, képmutató törvénytanítók és farizeusok! Azt gondoljátok, hogy nagyon fontos a testet kívülről lemosni. Mert ti csak a pohár és edény külsejét tisztogatjátok, belül azonban tele van mindenféle kapzsisággal és önzéssel!`,
    // 26
    `Vak farizeus, először tisztítsd meg előbb a pohár tartalmát, hogy azután a külseje is tiszta lehessen!`,
    // 27
    `Jaj nektek, képmutató törvénytanítók és farizeusok! Olyanok vagytok, mint a fehérre meszelt sírok, amelyek kívülről szépnek látszanak, belül azonban tele vannak a halottak csontjaival és tisztátalansággal. (#aq)`,
    // 28
    `Ugyanígy ti is csak kívülről, az emberek szemében látszotok igazságosnak, de belül tele vagytok képmutatással és törvényszegéssel.`,
    // 29
    `Jaj nektek, képmutató törvénytanítók és farizeusok! Síremléket építetek a prófétáknak, és feldíszítitek az igazak sírját.`,
    // 30
    `Ezt mondjátok: »Ha ősapáink idejében éltünk volna, mi nem vettünk volna részt a próféták megölésében.«`,
    // 31
    `Ezzel azonban ti magatok is beismeritek, hogy a próféták gyilkosainak a leszármazottjai vagytok.`,
    // 32
    `Akkor hát fejezzétek be, amit őseitek elkezdtek!`,
    // 33
    `Mérges kígyók és viperák fiai vagytok! Hogyan is menekülhetnétek meg attól, hogy az ítéletkor a Gyehennára kerüljetek?`,
    // 34
    `Ezért tehát prófétákat, bölcseket és törvénytanítókat küldök majd hozzátok. Lesznek majd, akiket megöltök, másokat keresztre feszítetek, megint másokat zsinagógáitokban megkorbácsoltok és városról városra üldöztök.`,
    // 35
    `Így végül elveszitek az ítéletet, amely mindazoknak igaz embereknek meggyilkolásáért jár, akiket ezen a földön öltek meg: az ártatlan Ábeltől kezdve egészen Barakiás fia, Zakariásig, (#ar) akit a Templom és az oltár között gyilkoltak meg.`,
    // 36
    `Igazán mondom nektek: mindezek ezt a nemzedéket fogják sújtani.”`,
    // 37  ~ Hányszor akartam összegyűjteni gyermekeidet! (#AF) ~
    `„Jeruzsálem, Jeruzsálem! Megölöd a prófétákat, és megkövezed azokat, akiket Isten hozzád küld! Hányszor akartam összegyűjteni a gyermekeidet, ahogy a tyúk szárnyai alá gyűjti a csibéit, de ti nem akartátok!`,
    // 38
    `Bizony üressé és elhagyatottá lesz a Házatok! (#as)`,
    // 39
    `Igazán mondom nektek: mostantól fogva nem láttok engem, amíg ezt nem mondjátok: »Áldott, aki az Örökkévaló nevében jön!«” (#at)`
  ],
  [
    // 24  ~ Jézus prófétál az utolsó időkről (#AG) ~
    `Jézus kijött a Templom területéről, és tovább akart menni. Ekkor odaléptek hozzá a tanítványai, hogy felhívják figyelmét a Templom épületeire.`,
    // 2
    `Ő azonban ezt mondta: „Jól nézzétek meg ezeket az épületeket! Igazán mondom nektek: nem marad itt kő kövön! Mindezt porig fogják rombolni.”`,
    // 3
    `Ezután felment az Olajfák hegyére, és ott leült. Amikor egyedül voltak vele, a tanítványai megkérdezték: „Mondd meg nekünk, mikor fog ez megtörténni! Milyen jel fogja mutatni, hogy eljössz, és a korszak a végéhez ér?”`,
    // 4
    `Jézus így válaszolt: „Vigyázzatok, nehogy valaki félrevezessen benneteket!`,
    // 5
    `Mert sokan jönnek majd az én nevemre hivatkozva, akik azt mondják, hogy én vagyok a Messiás, és sokakat félrevezetnek.`,
    // 6
    `Fogjátok hallani a háborúk zaját, és fogtok híreket hallani a távolban zajló háborúkról is, de ne rémüljetek meg! Ezeknek meg kell történniük, mielőtt a vég valóban elérkezik.`,
    // 7
    `Egyik nép rátámad a másikra, és egyik ország a másik ellen fog harcolni. Földrengések és éhínségek lesznek különböző helyeken.`,
    // 8
    `De mindez még csak a »szülési fájdalmak« kezdetét jelzi.`,
    // 9
    `Akkor majd letartóztatnak titeket, és átadnak azoknak, akik megkínoznak, sőt meg is ölnek benneteket. Minden nép gyűlölni fog titeket amiatt, hogy az én nevemet viselitek.`,
    // 10
    `Akkor sokan megtagadják a hitüket, elfordulnak tőlem, és elárulják, sőt gyűlölni fogják egymást.`,
    // 11
    `Akkor sok hamis próféta lép a nyilvánosság elé, akik sokakat félrevezetnek, hogy a hazugságokban higgyenek.`,
    // 12
    `Mivel a törvénytelenség teljességre jut, és a gonoszság megsokasodik, sok hívő emberben kihűl az isteni szeretet.`,
    // 13
    `Aki azonban mindvégig állhatatosan kitart, az üdvözül.`,
    // 14
    `Isten Királyságának örömüzenetét az egész világon mindenhol hirdetni fogják. Ez minden nemzet számára hiteles bizonyíték lesz. Csak azután érkezik el a vég.`,
    // 15
    `Dániel próféta beszélt arról az »utálatos dologról, amely gyilkol és pusztít«. (#au) Amikor látjátok, hogy ez a szent helyen áll - aki olvassa, értse meg! -,`,
    // 16
    `akkor, akik Júdeában vannak, meneküljenek a hegyekbe!`,
    // 17
    `Mindenki késedelem nélkül fusson el! Aki éppen felment a háza lapos tetejére, vissza se menjen a házba, hogy onnan elvigyen valamit!`,
    // 18
    `Aki a mezőn van, azonnal fusson, ne menjen vissza a házába, még a ruháiért se!`,
    // 19
    `Jaj a gyermeket váró asszonyoknak és szoptatós anyáknak azokban a napokban!`,
    // 20
    `Imádkozzatok, hogy ez a menekülés ne télen, se ne szombaton történjen!`,
    // 21
    `Akkor olyan nehéz és keserves időszakot kell átélnetek, amilyen még nem volt a világ kezdete óta, és nem is lesz többé.`,
    // 22
    `Ha Isten le nem rövidítené azt az időszakot, bizony senki sem élné túl, de a választottai kedvéért megrövidíti azt az időt.`,
    // 23
    `Ha akkor valaki azt mondja nektek: »Nézzétek, itt a Messiás!«, vagy: »Ott van!« - ne higgyetek neki!`,
    // 24
    `Mert hamis krisztusok és hamis próféták lépnek fel, akik nagy csodákat és jeleket (#av) tesznek, hogy félrevezessék, ha lehet, még a választottakat is.`,
    // 25
    `Emlékezzetek majd rá, hogy mindezt előre megmondtam!`,
    // 26
    `Ha tehát valaki azt mondja nektek: »A Messiás a pusztában van!«, ne menjetek ki oda! Vagy ha ezt mondják: »A Messiás a belső szobában van!«, azt se higgyétek el!`,
    // 27
    `Mert, amikor az Emberfia eljön, mindenki meg fogja látni őt! Olyan lesz, mint a villámlás az égen, amely kelettől nyugatig mindenhol látható.`,
    // 28
    `Ahol a holttest van, oda gyűlnek a keselyűk.`,
    // 29
    `Közvetlenül ezek után a nyomorúságos napok után:
»Elsötétül a Nap,
     a Hold sem világít többé,
lehullnak az égről a csillagok,
     s az égben lévő hatalmak is meginognak.« (#aw)`,
    // 30
    `Akkor megjelenik az égen az Emberfiának a jele, és a világon minden ember gyászolni és sírni fog. Mindannyian meg fogják látni az Emberfiát, amint eljön az ég felhőin hatalommal és nagy dicsőséggel.`,
    // 31
    `Hangos trombitaszóval elküldi angyalait, hogy összegyűjtsék választottait a négy égtáj felől, az ég egyik szélétől a másikig.`,
    // 32
    `Értsétek meg, amire a fügefa tanít! Amikor kizöldül az ága, és új leveleket hajt - tudjátok, hogy már közel a nyár.`,
    // 33
    `Így van ez azokkal a dolgokkal is, amelyekről beszéltem. Amikor látjátok, hogy ezek megtörténnek, akkor tudhatjátok, hogy ő (#ax) már közel van, szinte az ajtó előtt!`,
    // 34
    `Igazán mondom nektek, hogy ez a nemzet (#ay) el nem múlik, amíg mindezek a dolgok be nem teljesednek.`,
    // 35
    `Az ég és a föld elmúlik, de amit én mondok, az soha nem múlik el: mindig érvényes marad.”`,
    // 36  ~ Mindig álljatok készen! (#AH) ~
    `„Arról a napról és óráról azonban senki sem tudja, mikor jön el, sem az angyalok a Mennyben, sem a Fiú, csak az Atya.`,
    // 37
    `Ahogyan Nóé napjaiban volt, úgy lesz az Emberfia eljövetelének idejében is.`,
    // 38
    `Az Özönvíz előtti napokban is ettek, ittak, megnősültek és férjhez mentek, egészen addig a napig, amíg Nóé be nem ment a bárkába.`,
    // 39
    `Fogalmuk sem volt arról, hogy mi következik, egészen addig amíg az Özönvíz el nem söpörte őket. Ugyanígy lesz abban az időben is, amikor az Emberfia eljön.`,
    // 40
    `Akkor két férfi közül, akik a mezőn dolgoznak, az egyiket felviszik, a másik ott marad.`,
    // 41
    `Hasonlóképpen két asszony közül, akik a kézimalommal őrölnek, az egyiket felviszik, a másik ott marad.`,
    // 42
    `Ezért állandóan legyetek készen, mert nem tudjátok, melyik napon jön el Uratok.`,
    // 43
    `Jegyezzétek meg, ha tudná a házigazda, hogy az éjszaka melyik órájában jön a tolvaj, akkor ébren maradna, és nem engedné, hogy betörjön a házába.`,
    // 44
    `Ti is legyetek mindig készen, mert az Emberfia is akkor fog eljönni, amikor nem várjátok!”`,
    // 45  ~ Példázat a jó és a gonosz szolgáról (#AI) ~
    `„Amikor a ház gazdája elmegy, megbízza egyik szolgáját, hogy viseljen gondot az egész házanépére, és idejében adjon nekik enni. Miből látszik, hogy ez a szolga hűséges (#az) és bölcs?`,
    // 46
    `Abból, hogy amikor az ura megérkezik, a szolga éppen azt a munkát végzi, amit a gazdája rábízott! Milyen boldog és áldott az ilyen szolga!`,
    // 47
    `Igazán mondom nektek: ura rá fogja bízni egész birtokának igazgatását!`,
    // 48
    `Ha viszont az a szolga gonosz, akkor azt gondolja: »Uram még sokáig nem jön vissza!«`,
    // 49
    `Verni kezdi hát a szolgatársait, és a részegesekkel lakomázik együtt.`,
    // 50
    `Egy napon azonban - amikor a gonosz szolga nem várja, és nem is gondol rá - az ura hazaérkezik.`,
    // 51
    `Akkor az úr kegyetlenül megbünteti őt, és oda küldi, ahová a képmutatók kerülnek. Ott lesz majd sírás és fogcsikorgatás!”`
  ],
  [
    // 25  ~ Példázat a tíz szűzről ~
    `„Akkor Isten Királysága hasonló lesz ehhez: egyszer tíz szűz várta a vőlegényt, és kimentek elé. Mindegyiknek olajmécses volt a kezében.`,
    // 2
    `Közülük öt ostoba volt, öt pedig okos.`,
    // 3
    `Az ostobáknál csak mécses volt, de nem vittek magukkal olajat.`,
    // 4
    `Az okosaknál nemcsak a mécses volt, hanem korsóikban olajat is vittek.`,
    // 5
    `A vőlegény azonban késett, ezért mind a tízen elálmosodtak, sőt el is aludtak.`,
    // 6
    `Éjfélkor azonban felhangzott a kiáltás: »Itt jön a vőlegény! Jöjjetek ki elé, és fogadjátok!«`,
    // 7
    `Ekkor mind a tízen azonnal felébredtek, és rendbe hozták a mécsesüket.`,
    // 8
    `Az ostobák azt mondták az okosoknak: »Adjatok egy kis olajat, mert a mécseseink mindjárt kialszanak!«`,
    // 9
    `De azok így válaszoltak: »Nem lehet, mert akkor nem lesz elég sem nekünk, sem nektek. Menjetek inkább az olajárusokhoz, és vegyetek tőlük!«`,
    // 10
    `Mialatt az ostobák elmentek olajat venni, megérkezett a vőlegény. Azok a szüzek, akik felkészülten várták, bementek vele a lakodalomba, az ajtót pedig bezárták.`,
    // 11
    `Később megérkeztek az ostobák is. Kiáltozni kezdtek: »Uram! Uram! Nyisd ki az ajtót!«`,
    // 12
    `De a vőlegény így válaszolt: »Igazán mondom nektek, hogy nem ismerlek titeket!«`,
    // 13
    `Legyetek hát mindig éberek, mert nem tudjátok melyik napon, és melyik órában jön vissza az Emberfia!”`,
    // 14  ~ Példázat a talentumokról (#AJ) ~
    `„Akkor Isten Királysága hasonló lesz ehhez: egy ember külföldre akart utazni, ezért összehívta a rabszolgáit, és minden vagyonát a gondjaikra bízta.`,
    // 15
    `Egyiküknek öt talentumot (#ba) adott, a másiknak kettőt, a harmadiknak pedig egyet - mindenkinek a maga képességei szerint. Ezután elutazott.`,
    // 16
    `Aki az öt talentumot kapta, rögtön üzleti vállalkozásba fektette, és újabb öt talentumot nyert vele.`,
    // 17
    `Aki kettőt kapott, ugyanígy tett, és újabb két talentumra tett szert.`,
    // 18
    `Aki viszont egyet kapott, ásott egy gödröt, és oda rejtette az ura pénzét.`,
    // 19
    `Hosszú idő elteltével hazatért a gazdájuk. Előhívta rabszolgáit, hogy számoljanak el a rájuk bízott értékekkel.`,
    // 20
    `Aki öt talentumot kapott, összesen tízet hozott vissza. Ezt mondta: »Uram, öt talentumot bíztál rám, s ezzel öt másik talentumot szereztem!«`,
    // 21
    `Ura megdicsérte: »Jól van, hűséges és derék szolgám! Jól gazdálkodtál ezzel a kevéssel, ezért sokkal többet bízok rád. Gyere, és örülj velem együtt!«`,
    // 22
    `Ezután következett az, aki két talentumot kapott. Ezt mondta: »Uram, két talentumot bíztál rám. Nézd, újabb két talentumot szereztem vele!«`,
    // 23
    `Ura őt is megdicsérte: »Jól van, hűséges és derék szolgám! Jól gazdálkodtál ezzel a kevéssel, ezért sokkal többet bízok rád. Gyere, és örülj velem együtt!«`,
    // 24
    `Ezután jött az, aki egy talentumot kapott. Ő így számolt be: »Uram, tudom, hogy szigorú és kemény vagy. Még azt is learatod, amit nem te vetettél, és onnan is begyűjtöd a termést, ahová nem vetettél magot.`,
    // 25
    `Féltem tőled, ezért elástam a talentumot. Tessék, itt van, ami a tiéd!«`,
    // 26
    `Ekkor ura azt mondta neki: »Te gonosz és haszontalan (#bb) szolga! Azt gondoltad, hogy azt is learatom, amit nem én vetettem, és onnan is begyűjtöm a termést, ahová nem szórtam magot?!`,
    // 27
    `Akkor miért nem vitted pénzváltókhoz a pénzemet, hogy kamatozzon? Most kamattal megnövelve kaptam volna vissza!«`,
    // 28
    `Szolgáinak pedig azt parancsolta: »Vegyétek el tőle azt a talentumot, és adjátok oda annak, akinek tíz van!`,
    // 29
    `Mert aki jól gazdálkodik azzal, amit kapott, arra még többet fognak bízni, és bőségben lesz. Aki viszont nem használja, amit kapott, attól mindent el fognak venni. (#bc)`,
    // 30
    `Ezt a haszontalan szolgát pedig dobjátok ki a sötétségbe! Ott lesz majd sírás és fogcsikorgatás!«”`,
    // 31  ~ Kecskék és juhok ~
    `„Az Emberfia vissza fog jönni nagy dicsőségben összes angyalával együtt. Akkor majd leül dicsőséges trónjára,`,
    // 32
    `és a Föld minden lakosát összegyűjtik trónja elé. Ő pedig két csoportra választja majd őket, ahogy a pásztor elválasztja a juhokat a kecskéktől.`,
    // 33
    `A juhokat a jobb, a kecskéket pedig a bal oldalára állítja.`,
    // 34
    `Ezután a király így szól majd a jobb oldalán állókhoz: »Jöjjetek! Atyám megáldott benneteket, tiétek ez a Királyság, vegyétek birtokba, mert Isten számotokra készítette a világ kezdete óta!`,
    // 35
    `Igen, tiétek, mert amikor éhes voltam, enni adtatok nekem. Amikor szomjas voltam, inni adtatok. Amikor idegen voltam, behívtatok a házatokba, és vendégül láttatok.`,
    // 36
    `Amikor nem volt mibe öltöznöm, ruhát adtatok nekem. Amikor beteg voltam, gondoskodtatok rólam. Amikor börtönben voltam, meglátogattatok.«`,
    // 37
    `Ekkor így felelnek majd az igazságosak: »Uram, nem láttuk, hogy te éhes lettél volna. Mikor adtunk neked enni? Nem láttuk, hogy szomjas lettél volna. Mikor adtunk neked inni?`,
    // 38
    `Mikor történt az, hogy idegen voltál a városunkban, és mi szállást adtunk neked? Nem láttuk, hogy ruhára lett volna szükséged. Mikor adtunk neked ruhát?`,
    // 39
    `Nem láttunk téged a betegek között, sem a börtönben. Mikor látogattunk meg?«`,
    // 40
    `Akkor a király így válaszol majd: »Igazán mondom nektek: amikor segítettetek a testvéreimnek - akár a legkisebbnek is -, akkor nekem segítettetek.«`,
    // 41
    `Ezután a bal oldalán állókhoz fordul: »Menjetek előlem! Átkozottak vagytok! Menjetek az örök tűzbe, amely a Sátánnak és angyalainak készült!`,
    // 42
    `Menjetek, mert éhes voltam, de nem adtatok ennem! Szomjas voltam, de nem adtatok innom.`,
    // 43
    `Idegen voltam, de nem fogadtatok be a házatokba! Hiányzott a ruhám, de nem öltöztettetek fel! Beteg és fogoly voltam, de nem látogattatok meg!«`,
    // 44
    `Ők is ugyanazt fogják tőle kérdezni: »Uram, mi nem láttunk téged éhesnek, szomjasnak vagy idegennek. Nem láttunk téged, amikor nem volt mibe öltöznöd. Nem láttunk betegen, vagy a börtönben. Mikor volt az, amikor nem segítettünk rajtad?«`,
    // 45
    `Akkor a király így válaszol majd: »Igazán mondom nektek: amikor nem segítettetek a testvéreimnek - akár a legkisebbnek is -, akkor nekem nem segítettetek!«`,
    // 46
    `Akkor ezek elmennek az örök büntetésre, az igazságosak pedig az örök életre.”`
  ],
  [
    // 26  ~ A vallási vezetők Jézus megöletését tervezik (#AK) ~
    `Miután Jézus elmondta mindezeket, a tanítványaihoz fordult:`,
    // 2
    `„Mint tudjátok, két nap múlva lesz a Páska ünnepe. Akkor az Emberfiát kiszolgáltatják az ellenségeinek, és keresztre feszítik.”`,
    // 3
    `A főpapok és a nép vezetői összegyűltek Kajafás főpap palotájának udvarában.`,
    // 4
    `Azon tanácskoztak, hogyan lehetne Jézust titokban letartóztatni és kivégeztetni.`,
    // 5
    `Azt mondták: „Ne az ünnep alatt, nehogy zavargás törjön ki a nép között!”`,
    // 6  ~ Mire jó ez a pazarlás? (#AL) ~
    `Jézus Betániában, a leprás Simon házában vendégeskedett.`,
    // 7
    `Amikor helyet foglalt az asztalnál, odalépett hozzá egy asszony, aki alabástrom edényben drága illatszert hozott magával, és azt Jézus fejére öntötte.`,
    // 8
    `Ezt látva a tanítványok bosszankodtak, és azt mondták: „Mire jó ez a pazarlás?!`,
    // 9
    `Ezt a drága illatszert jó áron el lehetett volna adni, a pénzt meg a szegények között szétosztani!”`,
    // 10
    `Jézus észrevette, miről beszélnek, és ezt kérdezte: „Miért bántjátok ezt az asszonyt, hiszen jót tett velem?`,
    // 11
    `Szegények mindig lesznek köztetek, (#bd) de én nem leszek mindig veletek.`,
    // 12
    `Amikor rám öntötte ezt az illatszert, azzal már a temetésre készítette elő a testemet.`,
    // 13
    `Igazán mondom nektek: az egész világon, ahol csak hirdetni fogják az örömüzenetet, azt is elmondják majd, amit ez az asszony tett, és emlékezni fognak rá.”`,
    // 14  ~ Júdás megegyezik Jézus ellenségeivel (#AM) ~
    `Ekkor Iskáriótes Júdás, az egyik a tizenkét tanítvány közül, elment a főpapokhoz.`,
    // 15
    `Ezt kérdezte: „Mennyit fizettek nekem, ha a kezetekbe adom Jézust?” Azok pedig harminc ezüstpénzt adtak neki.`,
    // 16
    `Attól fogva kereste Júdás a megfelelő alkalmat, hogy a kezükre juttassa Jézust.`,
    // 17  ~ Az utolsó Páska-vacsora (#AN) ~
    `A kovásztalan kenyerek ünnepének első napján tanítványai azt kérdezték Jézustól: „Hol készítsük el számodra a Páska-vacsorát?”`,
    // 18
    `Ő így válaszolt: „Menjetek a városba ahhoz a bizonyos emberhez. Ezt mondjátok neki: »A Mester üzeni: közel van már az időm. A te házadban tartom meg a Páska ünnepét tanítványaimmal együtt.«”`,
    // 19
    `A tanítványok megtették, amit Jézus mondott, és mindent előkészítettek.`,
    // 20
    `Amikor beesteledett, Jézus asztalhoz telepedett tizenkét tanítványával.`,
    // 21
    `Vacsora közben ezt mondta: „Igazán mondom nektek: egyikőtök el fog árulni engem.”`,
    // 22
    `Erre ők nagyon elszomorodtak, és egyenként megkérdezték tőle: „Ugye nem én vagyok az, Uram?”`,
    // 23
    `Ő így válaszolt: „Aki velem együtt mártja kezét a tálba, az árul el engem.`,
    // 24
    `Az Emberfia elmegy, ahogy megírták róla az Írásban, de jaj annak, aki elárulja őt! Jobb lett volna neki, ha meg sem születik!”`,
    // 25
    `Ekkor megszólalt Júdás, az áruló: „Csak nem rólam beszélsz, Mester?!” „De bizony, te vagy az!” - válaszolta neki Jézus.`,
    // 26  ~ Az Új Szövetség megkötése (#AO) ~
    `Miközben ettek, Jézus kezébe vette a kenyeret, és miután hálát adott Istennek, tört belőle, és a tanítványainak adta. Közben ezt mondta: „Vegyetek belőle, és egyétek meg! Ez az én testem!”`,
    // 27
    `Azután egy pohár bort vett a kezébe, s miután hálát adott Istennek, odaadta tanítványainak. Közben ezt mondta: „Igyatok ebből mindnyájan,`,
    // 28
    `mert ez az én vérem, amely által az Új Szövetség érvénybe lép - s amely a bűnök megbocsátása végett fog kiömleni sokakért.`,
    // 29
    `Igazán mondom nektek: mostantól fogva nem iszom bort a szőlő terméséből mindaddig, amikor majd újból iszom veletek Atyám Királyságában.”`,
    // 30
    `Ezután elénekelték a zsoltárokat, majd kimentek az Olajfák hegyére.`,
    // 31  ~ Ma éjjel mind elhagytok engem! (#AP) ~
    `Ott Jézus ezt mondta a tanítványainak: „Ma éjjel mindnyájan elveszítitek a hiteteket bennem, és elhagytok. Mert ezt mondja az Írás:
»Megölöm a pásztort,
     és szétszóródnak a juhok.« (#be)`,
    // 32
    `De a feltámadásom után Galileába megyek, és előttetek fogok odaérni.”`,
    // 33
    `Péter azt mondta: „Ha mindenki más el is fordul tőled, én akkor sem hagylak el!”`,
    // 34
    `Jézus így válaszolt: „Igazán mondom neked: ma éjjel, még mielőtt a kakas kukorékol, háromszor le fogod tagadni, hogy ismersz engem.”`,
    // 35
    `Péter így fogadkozott: „Ha veled együtt meg is kell halnom, akkor sem fogom letagadni, hogy ismerlek téged.” A többi tanítvány is ugyanezt mondta.`,
    // 36  ~ Jézus a Gecsemáné kertben (#AQ) ~
    `Jézus ezután elment a tanítványaival egy olajfaligetbe, amelyet Gecsemánénak neveztek. „Üljetek le itt, amíg én elmegyek imádkozni!” - mondta nekik.`,
    // 37
    `Pétert és Zebedeus két fiát azonban magával vitte. Szomorú és nyugtalan lett.`,
    // 38
    `Ezt mondta nekik: „A lelkem halálosan szomorú. Várjatok meg itt, és virrasszatok velem!”`,
    // 39
    `Majd kissé előrement, arccal a földre borult, és imádkozni kezdett: „Atyám! Ha lehetséges, ne kelljen kiinnom ezt a poharat! (#bf) De ne úgy legyen, ahogy én szeretném, hanem, ahogy te akarod!”`,
    // 40
    `Ezután visszament a három tanítványhoz, de azok közben elaludtak. Azt mondta Péternek: „Még egy órát sem tudtatok velem együtt virrasztani?!`,
    // 41
    `Ne aludjatok, hanem imádkozzatok, hogy legyen erőtök ellenállni a kísértésnek! Mert a lélek ugyan készen áll, de az emberi természet gyenge.”`,
    // 42
    `Ezután másodszor is elment imádkozni, és ezt mondta: „Atyám, ha nem kerülhetem el ezt a poharat, és valóban ki kell innom, akkor legyen minden a te akaratod szerint!”`,
    // 43
    `Majd visszament hozzájuk, de megint alva találta őket, mert nem tudták nyitva tartani a szemüket.`,
    // 44
    `Így azután otthagyta őket, és újból elment. Harmadszor is ugyanazokkal a szavakkal imádkozott.`,
    // 45
    `Ezután visszament a tanítványokhoz, és azt mondta: „Most már aludhattok!
Nézzétek! Elérkezett az idő, amikor az Emberfiát a bűnösök kezébe adják!`,
    // 46
    `Keljetek fel, és induljunk! Látjátok? Már itt is jön, aki elárul engem!”`,
    // 47  ~ Jézust letartóztatják (#AR) ~
    `Jézus még beszélt, amikor megérkezett Júdás, a tizenkét tanítvány közül az egyik. Kardokkal és botokkal felfegyverzett nagy csoport jött vele, akiket a főpapok és a nép vezetői küldtek.`,
    // 48
    `Júdás, az áruló előre megbeszélte velük, miről ismerik meg, kit kell letartóztatniuk: „Akit csókkal köszöntök, azt fogjátok el!”`,
    // 49
    `Egyenesen Jézushoz ment. „Köszöntelek, Mester!” - mondta, és üdvözlésül megcsókolta az arcát.`,
    // 50
    `Jézus erre így felelt: „Barátom, tedd meg, amiért jöttél!”
Ekkor az emberek körülvették Jézust, megragadták, és letartóztatták.`,
    // 51
    `Jézus tanítványai közül az egyik a kardjához kapott, kirántotta, és rávágott a főpap szolgájára, de csak a fülét vágta le.`,
    // 52
    `Jézus azonban rászólt a támadóra: „Tedd csak vissza a kardodat a helyére! Aki kardot ránt, kard által hal meg!`,
    // 53
    `Azt gondolod, nem kérhetnék Atyámtól segítségül akár tizenkét sereg (#bg) angyalt is?`,
    // 54
    `De akkor hogyan teljesednének be az Írások, amelyek szerint ennek így kell történnie?”`,
    // 55
    `Ezután pedig a tömeghez fordult: „Kardokkal és botokkal jöttetek, hogy elfogjatok, mintha rabló lennék?! Minden nap ott tanítottam a Templom területén, és nem fogtatok el.`,
    // 56
    `De azért történt minden így, hogy beteljesedjen, amit a próféták megírtak.” Ezután minden tanítványa otthagyta Jézust, és futva menekült.`,
    // 57  ~ Jézus a vallási vezetők előtt (#AS) ~
    `Miután Jézust letartóztatták, Kajafás főpap házához vitték. Ott gyűltek össze a törvénytanítók és a nép vezetői.`,
    // 58
    `Péter távolról követte Jézust, egészen a főpap udvaráig. Bement, és leült az őrök közé, hogy lássa, mi fog történni.`,
    // 59
    `A főpapok és a Főtanács többi tagjai igyekeztek valami ürügyet találni, hogy Jézust halálra ítélhessék. Olyanokat kerestek, akik hajlandók voltak Jézus ellen hamisan tanúskodni.`,
    // 60
    `De nem találtak olyan okot, amely alapján elítélhették volna, pedig sok hamis tanú jelentkezett. Végül előállt két férfi,`,
    // 61
    `akik azt mondták: „Ez az ember (#bh) azt mondta: »Le tudom rombolni Isten Templomát, és három nap alatt újra felépítem.«”`,
    // 62
    `Ekkor a főpap fölállt, és azt kérdezte Jézustól: „Miért nem felelsz arra, amivel ezek vádolnak?”`,
    // 63
    `Jézus azonban nem szólt egy szót sem.
Végül a főpap azt mondta: „Az élő Istenre kényszerítelek, hogy eskü alatt mondd meg az igazat! Te vagy-e a Messiás, az Isten Fia?”`,
    // 64
    `Jézus ezt felelte: „Igen, úgy van, ahogy mondod! Sőt, azt mondom nektek: majd meglátjátok az Emberfiát a Mindenható (#bi) jobb oldalán ülni, és meglátjátok, hogy eljön az ég felhőin.”`,
    // 65
    `A főpap ekkor megszaggatta a ruháját, és felkiáltott: „Ezzel Istent gyalázta! Több tanúra nincs is szükségünk. Mindnyájan hallottátok, hogy Istent gyalázta!`,
    // 66
    `Hogyan határoztok?”
A vezetők mind azt válaszolták: „Bűnös, és meg kell halnia!”`,
    // 67
    `Ezután Jézus arcába köptek, és ököllel ütötték.`,
    // 68
    `Mások az arcába vágtak, és ezt mondták: „Most prófétáld meg, te »Messiás«, hogy ki ütött meg!”`,
    // 69  ~ Péter letagadja, hogy ismeri Jézust (#AT) ~
    `Péter ezalatt ott ült a főpap udvarán. Odament hozzá egy szolgálólány, és megszólította: „Ugye, te is a galileai Jézussal voltál?”`,
    // 70
    `De Péter mindenki füle hallatára letagadta: „Nem tudom, miről beszélsz!”`,
    // 71
    `Ezután kiment az udvarról, de a kapuban meglátta őt egy másik szolgálólány, és ezt mondta Péterről a többieknek: „Ez is a názáreti Jézussal volt.”`,
    // 72
    `Péter ismét letagadta, sőt még esküvel is megerősítette: „Nem is ismerem azt az embert!”`,
    // 73
    `Kicsivel később, akik ott álltak, ezt mondták Péternek: „Te valóban közéjük tartozol, mert a kiejtésed (#bj) is erről árulkodik.”`,
    // 74
    `Péter ekkor átok alatt megesküdött, (#bk) hogy igaz, amit mond: „Nem is ismerem azt a férfit!” Abban a pillanatban kukorékolt a kakas.`,
    // 75
    `Péternek azonnal eszébe jutott, amit Jézus korábban mondott neki: „Mielőtt a kakas kukorékol, háromszor le fogod tagadni, hogy ismersz engem.” Ezután Péter kiment a főpap udvarából, és keserves sírásra fakadt.`
  ],
  [
    // 27  ~ Jézus Pilátus előtt (#AU) ~
    `Amikor felvirradt a reggel, a főpapok és a nép vezetői határozatot hoztak, hogy Jézusnak meg kell halnia.`,
    // 2
    `Ezért megkötözték őt, elvitték Pilátushoz, a római helytartóhoz, és átadták neki.`,
    // 3  ~ Júdás megbánja tettét (#AV) ~
    `Amikor Júdás, az áruló látta, hogy Jézust halálra ítélték, megbánta, amit tett. Visszavitte a harminc ezüstpénzt a főpapok és a rangidős vezetők csoportjához,`,
    // 4
    `és ezt mondta: „Bűnt követtem el, mert ártatlan embert adtam ellenségei kezébe, hogy megöljék.”
Azok így feleltek: „Mi közünk hozzá? Ez a te dolgod.”`,
    // 5
    `Erre Júdás az ezüstpénzeket szétszórta a Templomban, majd elment, és felakasztotta magát.`,
    // 6
    `A papok összeszedték a pénzt, és azt mondták: „Törvényünk tiltja, hogy ezt a pénzt a Templom kincstárába tegyük, mert vérdíj.”`,
    // 7
    `Elhatározták tehát, hogy megveszik belőle azt a területet, amelyet „Fazekas-mezőnek” neveztek, hogy oda temessék az idegeneket.`,
    // 8
    `Ezért nevezik azt a mezőt mind a mai napig „Vérmezőnek”.`,
    // 9
    `Így teljesedett be, amit Jeremiás próféta mondott:
„Izráel népe megegyezett, hogy harminc ezüstpénzt fizetnek az életéért, mert ennyire becsülték őt.`,
    // 10
    `Fogták ezt a harminc ezüstöt, és megvették rajta a Fazekas-mezőt, ahogyan az Örökkévaló parancsolta nekem.” (#a)`,
    // 11  ~ Pilátus kihallgatja Jézust (#C) ~
    `Jézust a római helytartó, Pilátus elé állították, aki megkérdezte tőle: „Te vagy a zsidók királya?”
„Igen, ahogy mondod” - felelte Jézus.`,
    // 12
    `De amikor a főpapok és a rangidős vezetők vádolták, nem szólt egy szót sem.`,
    // 13
    `Pilátus megkérdezte: „Nem hallod, mennyi mindennel vádolnak? Miért nem válaszolsz?”`,
    // 14
    `Ő azonban nem felelt a vádakra. Ezen Pilátus nagyon elcsodálkozott.`,
    // 15  ~ Pilátus halálra ítéli Jézust (#D) ~
    `A páska ünnepén a helytartó minden évben szabadon szokott engedni egy foglyot az emberek kívánsága szerint.`,
    // 16
    `Akkor éppen volt a börtönben egy hírhedt bűnöző, akit Barabbásnak (#b) hívtak.`,
    // 17
    `Pilátus megkérdezte az összegyűltektől: „Egy foglyot szabadon engedek a kedvetekért. Mit kívántok, kit engedjek el: Barabbást, vagy Jézust, akit Messiásnak neveznek?”`,
    // 18
    `Tudta ugyanis, hogy Jézust féltékenységből adták át neki.`,
    // 19
    `Miközben ez történt, Pilátus a bírói székében ült. Ekkor a felesége üzent neki: „Ne avatkozz ennek az igazságos embernek az ügyébe! Ma éjjel álmodtam róla, és ez nagyon felkavart!”`,
    // 20
    `A főpapok és a rangidős vezetők azonban rábeszélték az összegyűlt sokaságot, hogy Barabbás elengedését és Jézus kivégzését kérjék Pilátustól.`,
    // 21
    `A helytartó ismét megkérdezte az összegyűlteket: „A két fogoly közül melyiket engedjem szabadon?”
„Barabbást!” - válaszolták.`,
    // 22
    `Pilátus ekkor ezt kérdezte: „Mi legyen Jézussal, akit Messiásnak neveznek?”
Mindannyian ezt kiáltották: „Feszítsd keresztre!”`,
    // 23
    `„Miért? Mi rosszat tett?” - kérdezte őket.
De azok még hangosabban ordibáltak: „Feszítsd keresztre!”`,
    // 24
    `Pilátus látta, hogy semmit sem tud elérni, sőt, hogy ebből még lázadás is lehet. Vizet hozatott hát, megmosta a kezét (#c) az emberek előtt, és kihirdette: „Nem vagyok felelős ennek az ártatlan embernek a haláláért. Ez a ti dolgotok!”`,
    // 25
    `Erre az összegyűltek mind ezt kiabálták: „Vállaljuk a felelősséget a haláláért, a leszármazottjainkkal együtt!”`,
    // 26
    `Akkor Pilátus szabadon engedte Barabbást, ahogy kérték, Jézust pedig megkorbácsoltatta, majd átadta a katonáknak, hogy feszítsék keresztre, és így végezzék ki.`,
    // 27  ~ A római katonák kigúnyolják Jézust (#E) ~
    `Ezután Pilátus katonái a helytartó palotájába vitték Jézust. Ott az egész csapat köréje gyűlt,`,
    // 28
    `levetkőztették, és bíborszínű köpenyt adtak rá.`,
    // 29
    `Tövises ágakból koszorút fontak, és azt nyomták a fejébe, a jobb kezébe meg nádszálat adtak. Ezután csúfolkodva letérdeltek előtte, és így gúnyolták: „Éljen a zsidók királya!”`,
    // 30
    `Majd leköpdösték, azután kivették a kezéből a nádszálat, és a fejéhez verték.`,
    // 31
    `Miután befejezték a gúnyolódást, levették róla a köpenyt, újra ráadták a saját ruháit, és elvezették, hogy keresztre feszítsék.`,
    // 32  ~ Jézus kivégzése: a keresztre feszítés (#F) ~
    `Miközben kifelé mentek a városból, találkoztak egy Simon nevű férfival, aki Ciréne városából származott. Arra kényszerítették, hogy ő vigye Jézus keresztfáját.`,
    // 33
    `Kimentek a „Golgota” nevű helyre. Ez a szó azt jelenti: „Koponya-hely”.`,
    // 34
    `Itt bort adtak Jézusnak, amelybe epét (#d) kevertek. Ő megkóstolta, de nem akarta meginni.`,
    // 35
    `Ezután a katonák Jézust keresztre feszítették, ruháit kisorsolták és elosztották maguk között.`,
    // 36
    `Majd leültek, és őrizték.`,
    // 37
    `A feje fölé odatették az ellene szóló vádiratot: „ jézus a zsidók királya .”`,
    // 38
    `Ugyanakkor két rablót is megfeszítettek: az egyiket Jézus jobb oldalán, a másikat a bal oldalán.`,
    // 39
    `Az arra járók szidalmazták és gúnyolták Jézust. A fejüket csóválták,`,
    // 40
    `és ezt mondták: „Szóval, te vagy az, aki lerombolod a Templomot, és három nap alatt újra fölépíted? Akkor most mentsd meg magad! Ha tényleg Isten Fia vagy, akkor szállj le a keresztről!”`,
    // 41
    `Hasonlóképpen gúnyolták a főpapok, a törvénytanítók és a rangidős vezetők is.`,
    // 42
    `Azt mondták: „Másokat megmentett, de magát nem tudja megmenteni! Ha tényleg ő Izráel királya, akkor most jöjjön le a keresztről, majd akkor hiszünk benne!`,
    // 43
    `Istenben bízott, hát mentse meg őt Isten maga, ha akarja! Hiszen azt mondta: »Isten Fia vagyok«.”`,
    // 44
    `A vele együtt megfeszített bűnözők is ugyanígy gúnyolták.`,
    // 45  ~ Jézus halála (#G) ~
    `Déli tizenkét órától délután háromig sötétség borította az egész földet. (#e)`,
    // 46
    `Három óra körül Jézus hangosan felkiáltott: „ Éli, Éli, lamá sabaktáni? ” Ez azt jelenti: „Istenem, Istenem, miért hagytál el engem?” (#f)`,
    // 47
    `Néhányan, akik ott álltak, hallották, és azt mondták: „Illést hívja!” (#g)`,
    // 48
    `Egyikük gyorsan elfutott, és hozott egy szivacsot. Ecetbe mártotta, majd egy nádszálra tűzte, és felnyújtotta, hogy Jézus igyon belőle. (#h)`,
    // 49
    `De a többiek azt mondták: „Hagyd csak! Nézzük, vajon eljön-e Illés, hogy megszabadítsa!”`,
    // 50
    `Jézus ekkor ismét hangosan felkiáltott, és meghalt (#i) .`,
    // 51
    `Abban a pillanatban a Templom belsejében a függöny felülről lefelé, egészen az aljáig kettéhasadt. Rengett a föld, és a sziklák megrepedtek.`,
    // 52
    `A sírok megnyíltak, és Isten korábban meghalt szent emberei közül sokan feltámadtak,`,
    // 53
    `és kijöttek a sírokból. Miután Jézus feltámadt a halálból, ezek bementek a szent városba, és sokaknak megjelentek.`,
    // 54
    `A százados és a katonák, akik Jézust őrizték, látták a földrengést és a többi eseményt. Nagyon megrémültek, és ezt mondták: „Ez az ember valóban Isten Fia volt!”`,
    // 55
    `Asszonyok is álltak ott, és távolról figyelték, hogy mi történik. Ők voltak azok, akik Galileától fogva követték Jézust, és gondoskodtak róla.`,
    // 56
    `Közöttük volt Mária Magdalén, azután egy másik Mária, Jakab és József anyja, meg Zebedeus fiainak, Jakabnak és Jánosnak az anyja is.`,
    // 57  ~ Jézus temetése (#H) ~
    `Amikor beesteledett, egy Arimátiából való, József nevű gazdag ember - aki maga is Jézus tanítványa volt -`,
    // 58
    `Pilátushoz ment, és elkérte tőle Jézus holttestét. Pilátus elrendelte, hogy adják oda neki.`,
    // 59
    `Akkor József levette a holttestet, tiszta vászonlepedőbe csavarta,`,
    // 60
    `és elhelyezte a saját új sírkamrájába, amelyet sziklába vájtak. Ezután egy nagy követ hengerített a sírkamra bejáratához, majd elment.`,
    // 61
    `Mária Magdalén és a másik Mária közben ott ültek a sírral szemben.`,
    // 62  ~ Katonák őrzik a sírját ~
    `Másnap - az előkészület napja (#j) utáni napon - a főpapok és farizeusok mindannyian elmentek Pilátushoz.`,
    // 63
    `Ezt mondták neki: „Uram, emlékszünk, hogy ez a csaló még életében azt mondta: »A harmadik napon fel fogok támadni.«`,
    // 64
    `Parancsold meg tehát, hogy gondosan őrizzék a sírt három napig! Különben még a tanítványai odamehetnek, ellopják a testet, és azt mondják a népnek, hogy feltámadt a halálból. Ez az utóbbi csalás még rosszabb lenne, mint az előző volt!”`,
    // 65
    `Pilátus azt felelte: „Rendben van, vigyetek néhány katonát az őrségből, és őriztessétek a sírt, ahogy csak akarjátok!”`,
    // 66
    `Azok el is mentek, lepecsételték a sír bejáratát elzáró követ, és őrséget állítottak mellé.`
  ],
  [
    // 28  ~ Jézus feltámadásának örömhíre (#I) ~
    `A szombat utáni nap volt a hét első napja. Ennek a hajnalán Mária Magdalén és a másik Mária elment, hogy megnézze a sírt.`,
    // 2
    `Ekkor erős földrengés támadt, mert az Örökkévaló angyala leszállt a Mennyből, elhengerítette a követ a sír bejárata elől, és ráült.`,
    // 3
    `Az angyal úgy fénylett, mint a villámlás, és a ruhája hófehér volt.`,
    // 4
    `Akik a sírt őrizték, annyira megijedtek tőle, hogy reszkettek a félelemtől, és olyanok lettek, mint a halottak.`,
    // 5
    `Az angyal megszólította az asszonyokat: „Ti ne féljetek! Tudom, hogy a keresztre feszített Jézust keresitek.`,
    // 6
    `Nincs itt, mert feltámadt a halálból, ahogyan azt előre megmondta. Gyertek csak, nézzétek meg a helyet, ahol feküdt!`,
    // 7
    `Azután siessetek a tanítványaihoz, és mondjátok meg nekik: »Jézus feltámadt a halálból, és előttetek megy Galileába. Ott majd meg fogjátok látni őt.« Ezt az üzenetet hoztam nektek.”`,
    // 8
    `Erre az asszonyok ijedten, de nagy örömmel elsiettek a sírtól, hogy hírt vigyenek a tanítványoknak.`,
    // 9
    `Útközben hirtelen maga Jézus állt meg előttük, és köszöntötte őket: „Békesség!” Az asszonyok leborultak a lába előtt, és imádták őt.`,
    // 10
    `Jézus ekkor ezt mondta: „Ne féljetek! Menjetek, mondjátok meg a testvéreimnek, hogy menjenek Galileába! Ott majd meglátnak engem.”`,
    // 11  ~ A vallási vezetők letagadják Jézus feltámadását ~
    `Az asszonyok még úton voltak, amikor az őrség néhány tagja bement a városba. Jelentették a főpapoknak, hogy mi történt.`,
    // 12
    `Azok összegyűltek a rangidős vezetőkkel, és határozatot hoztak. A katonáknak sok pénzt adtak, hogy ne mondják el az igazat senkinek.`,
    // 13
    `„Mondjátok mindenkinek azt, hogy éjjel elaludtatok az őrségben. Ezalatt a tanítványai eljöttek, és ellopták a holttestet.`,
    // 14
    `Ha ezt a helytartó megtudja, mi majd megnyugtatjuk, és kimentünk benneteket a bajból” - mondták az őröknek.`,
    // 15
    `Azok elfogadták a pénzt, és úgy tettek, ahogy mondták nekik. Így azután ez a híresztelés terjedt el a zsidók között mind a mai napig.`,
    // 16  ~ A feltámadt Jézus kiküldi tanítványait (#J) ~
    `Ezután a tizenegy tanítvány Galileába ment, arra a hegyre, ahová Jézus mondta nekik.`,
    // 17
    `Amint meglátták Jézust, leborultak előtte és imádták őt - bár néhányan kételkedtek.`,
    // 18
    `Jézus közel lépett hozzájuk, és ezt mondta: „Mennyei Atyám minden hatalmat nekem adott a Mennyben és a Földön.`,
    // 19
    `Ezért menjetek el a nemzetekhez, és tegyetek tanítványommá minden embert az egész világon! Merítsétek be őket az Atya, a Fiú és a Szentlélek nevébe!`,
    // 20
    `Tanítsátok őket, hogy engedelmeskedjenek mindannak, amit én parancsoltam nektek! Biztosak lehettek benne, hogy állandóan veletek leszek. Igen, veletek maradok minden nap, amíg ez a korszak véget nem ér!”`
  ]
];

const mk = [
  [
    // 1  ~ Bemerítő János utat készít a Messiásnak (#A) ~
    `Ez az örömhír kezdete, amely Jézus Krisztusról, Isten Fiáról szól.`,
    // 2
    `Így van ez megírva Ézsaiás próféta könyvében:
„Elküldöm előtted hírnökömet,
     aki majd utat készít neked.” (#a)`,
    // 3
    `„Egy hang kiált a pusztában:
»Készítsetek utat az Örökkévalónak,
     készítsetek számára egyenes utat!«” (#b)`,
    // 4
    `Bemerítő János megjelent a pusztában, és bemerítette az embereket. Hirdette nekik, hogy változtassák meg a gondolkodásukat és az életüket, merítkezzenek be, Isten pedig megbocsátja a bűneiket.`,
    // 5
    `Júdea tartományából és Jeruzsálemből az egész nép kiment Bemerítő Jánoshoz. Megvallották bűneiket, ő pedig bemerítette őket a Jordán folyóba.`,
    // 6
    `Bemerítő János teveszőrből készült ruhát viselt, és a derekán bőrövet hordott. Sáskát, meg vadmézet evett.`,
    // 7
    `Mindenkinek ezt hirdette: „Jön majd valaki, aki sokkal hatalmasabb nálam. Még arra sem vagyok méltó, hogy lehajoljak, mint a szolgája, és a saruját levegyem a lábáról.`,
    // 8
    `Én csak vízbe merítelek be, de ő a Szentlélekbe fog bemeríteni titeket.”`,
    // 9  ~ Jézus bemerítkezik (#B) ~
    `Abban az időben történt, hogy Jézus eljött a galileai Názáretből Bemerítő Jánoshoz, aki bemerítette őt a Jordán folyóba.`,
    // 10
    `Amint Jézus feljött a vízből, látta, hogy megnyílik a Menny, és a Szentlélek galamb formájában leszáll rá.`,
    // 11
    `Akkor hang hallatszott a Mennyből: „Te vagy a Fiam, szeretlek téged, és gyönyörködöm benned!”`,
    // 12  ~ Jézust próbára teszi a Sátán (#C) ~
    `Jézust ezután azonnal kivitte a Szentlélek a pusztába, ahol`,
    // 13
    `negyven napot töltött, s ezalatt a Sátán többször is próbára tette. Angyalok gondoskodtak Jézusról, és vadállatok voltak körülötte.`,
    // 14  ~ Jézus Galileában kezdi meg a munkáját (#D) ~
    `Miután Bemerítő Jánost börtönbe zárták, Jézus Galileába ment. Isten örömüzenetét hirdette:`,
    // 15
    `„Eljött az idő, Isten Királysága megérkezett! Változtassátok meg a gondolkodásotokat, az életeteket, és higgyetek az örömhírben!”`,
    // 16  ~ Maga mellé szólítja a tanítványait (#E) ~
    `Amikor a Galileai-tó partján járt, meglátta Simont (#c) és a testvérét, Andrást, akik éppen hálót vetettek a tóba, mivel halászok voltak.`,
    // 17
    `Jézus megszólította őket: „Gyertek velem, és én másféle halásszá teszlek titeket! Halak helyett embereket fogtok összegyűjteni.”`,
    // 18
    `Ekkor a testvérek azonnal otthagyták hálóikat, és csatlakoztak Jézushoz.`,
    // 19
    `Miután kissé továbbment, meglátta Jakabot és Jánost, Zebedeus két fiát, akik éppen hálóikat javítgatták a halászbárkában.`,
    // 20
    `Jézus azonnal hívta ezt a két testvért is, akik otthagyták apjukat, Zebedeust a bárkában levő munkásokkal együtt, és csatlakoztak Jézushoz.`,
    // 21  ~ A kapernaumi zsinagógában (#F) ~
    `Ezután Kapernaum városába mentek. A következő szombaton Jézus elment a zsinagógába, és tanította az összegyűlteket.`,
    // 22
    `Mindenki csodálkozott azon, amit mondott, mert úgy tanított, mint aki teljes felhatalmazást kapott, nem pedig úgy, ahogy a törvénytanítók szoktak.`,
    // 23
    `Volt ott egy férfi, akiben gonosz szellem lakott. Ez kiabálni kezdett:`,
    // 24
    `„Mi közünk hozzád, názáreti Jézus?! Azért jöttél, hogy elpusztíts minket? Tudom, ki vagy te: az Isten Szentje!”`,
    // 25
    `Jézus ekkor ráparancsolt a gonosz szellemre: „Hallgass el! Menj ki belőle!”`,
    // 26
    `A gonosz szellem megrázta a férfit, majd hangos kiáltással kiment belőle.`,
    // 27
    `Ezen mindenki megdöbbent, és egymástól kérdezgették: „Mi lehet ez? Micsoda új tanítás! Hatalommal parancsol még a gonosz szellemeknek is, és azok engedelmeskednek neki!”`,
    // 28
    `Jézus tetteinek a híre hamar elterjedt Galilea egész vidékén.`,
    // 29  ~ Meggyógyítja a betegeket (#G) ~
    `Jézus és tanítványai ezután kijöttek a zsinagógából. Jakabbal és Jánossal együtt Simon és András házához mentek.`,
    // 30
    `Simon anyósa éppen nagyon beteg volt: lázasan feküdt. Azonnal szóltak Jézusnak,`,
    // 31
    `aki odalépett a beteghez, megfogta a kezét, és lábra állította. Az asszonynak elmúlt a láza, felkelt, és megvendégelte őket.`,
    // 32
    `Naplemente után, amikor már beesteledett, Jézushoz vitték a betegeket, és azokat is, akikben gonosz szellemek laktak.`,
    // 33
    `Az egész város összegyűlt a ház ajtaja előtt.`,
    // 34
    `Jézus sokakat meggyógyított, akik különféle betegségekben szenvedtek. Kiűzte a gonosz szellemeket is, de nem engedte szólni őket, mivel azok felismerték (#d) őt.`,
    // 35  ~ Hirdeti az örömüzenetet Galileában (#H) ~
    `Jézus korán reggel felkelt, amikor még sötét volt, kiment egy lakatlan helyre, és ott imádkozott.`,
    // 36
    `Simon és társai később utána mentek, hogy megkeressék.`,
    // 37
    `Amikor rátaláltak, ezt mondták neki: „Mindenki téged keres!”`,
    // 38
    `De Jézus ezt válaszolta: „Menjünk a szomszédos falvakba, hogy ott is hirdessem az örömüzenetet, hiszen ezért jöttem.”`,
    // 39
    `El is ment, és bejárta egész Galileát. Hirdette Isten üzenetét a zsinagógákban, és a gonosz szellemeket kiűzte az emberekből.`,
    // 40  ~ Akarom, gyógyulj meg! (#I) ~
    `Odament hozzá egy leprás, letérdelt előtte, és így kérte: „Ha akarod, te meg tudsz gyógyítani engem!”`,
    // 41
    `Jézus megsajnálta, (#e) kinyújtotta a kezét, megérintette, és így válaszolt: „Igen, akarom! Gyógyulj meg!”`,
    // 42
    `Ekkor a betegről azonnal eltűnt a lepra, és teljesen egészséges lett.`,
    // 43
    `Jézus szigorúan figyelmeztette, mielőtt elküldte:`,
    // 44
    `„Vigyázz, senkinek se beszélj erről! Menj, és mutasd meg magad a papnak! (#f) Azután vidd fel az áldozatot a Templomba a gyógyulásodért, ahogyan azt Mózes megparancsolta, hogy bizonyítékul szolgáljon nekik!”`,
    // 45
    `A férfi elment, de azután mégis elhíresztelte, hogy mi történt vele. Emiatt Jézus nem mehetett be többé a városba, amikor mások is látták. Inkább elhagyatott helyeken tartózkodott, és az embereknek kellett mindenfelől hozzá menniük.`
  ],
  [
    // 2  ~ Jézus meggyógyít egy béna férfit (#J) ~
    `Néhány nappal később Jézus visszatért Kapernaumba, s ennek hamar elterjedt a híre.`,
    // 2
    `Olyan sokan gyűltek össze annál a háznál, ahol volt, hogy már az ajtó előtt sem fértek el. Éppen Isten üzenetét hirdette, amikor`,
    // 3
    `négy férfi érkezett, akik egy megbénult beteget hoztak.`,
    // 4
    `Mivel a tömeg miatt nem tudták a beteget a közelébe vinni, kibontották a tetőt, és a nyíláson engedték le a hordágyon fekvőt Jézus lába elé.`,
    // 5
    `A négy férfi hitét látva, Jézus a beteghez fordult és ezt mondta neki: „Fiam, a bűneid meg vannak bocsátva.”`,
    // 6
    `Volt ott néhány törvénytanító is, akik ezt gondolták:`,
    // 7
    `„Hogyan mondhat ilyet?! Hiszen a bűnöket egyedül Isten bocsáthatja meg! Ezzel Istent gyalázza!”`,
    // 8
    `Jézus a lelkével azonnal észrevette, hogy ezt gondolják. Ezért megkérdezte tőlük: „Miért okoskodtok így?`,
    // 9
    `Melyik könnyebb, ha azt mondom a bénának: »A bűneid meg vannak bocsátva«, vagy azt: »Kelj fel, fogd a hordágyadat és menj el«?`,
    // 10
    `Győződjetek meg róla: az Emberfia felhatalmazást kapott, hogy itt a földön megbocsássa a bűnöket.”
Ekkor a beteghez fordult:`,
    // 11
    `„Én mondom neked, kelj fel, fogd a hordágyadat, és menj haza!”`,
    // 12
    `A férfi felkelt, azonnal felvette a hordágyat, és mindenki szeme láttára elment. Mindnyájan elcsodálkoztak, dicsőítették Istent, és ezt mondták: „Ilyet még sohasem láttunk!”`,
    // 13  ~ Lévi (Máté) elhívása (#K) ~
    `Jézus ezután ismét kiment a tó partjára. Rengetegen gyűltek össze körülötte, ő pedig tanította őket.`,
    // 14
    `Amikor onnan továbbment, meglátta Lévit, Alfeus fiát, aki a vámszedő helyen ült. „Kövess engem!” - mondta neki. Lévi ekkor felkelt, és csatlakozott hozzá.`,
    // 15
    `Később Lévi vendégül látta Jézust és tanítványait a házában. Más vendégek is voltak ott, akikkel együtt vacsoráztak: vámszedők és mindenféle rosszhírű bűnösök, mert sokan mentek oda Jézussal együtt.`,
    // 16
    `A farizeusok közül néhány törvénytanító látta, hogy Jézus együtt eszik a bűnösökkel és a vámszedőkkel. Megkérdezték hát a tanítványait: „Hogy lehet az, hogy ő vámszedőkkel és mindenféle bűnösökkel együtt vacsorázik?!”`,
    // 17
    `Jézus meghallotta, és ő válaszolt nekik: „Nem az egészségeseknek van szükségük orvosra, hanem a betegeknek. Nem azért jöttem, hogy az igazakat, hanem hogy a bűnösöket hívjam.”`,
    // 18  ~ Az új bort új tömlőbe kell tölteni (#L) ~
    `Bemerítő János tanítványai és a farizeusok rendszeresen böjtöltek. Közülük néhányan eljöttek Jézushoz, és megkérdezték: „Bemerítő János tanítványai és a farizeusok tanítványai is böjtölnek. A te tanítványaid miért nem?”`,
    // 19
    `Ő ezt válaszolta: „Vajon böjtölnek-e a lakodalomban a vendégek, amíg velük van a vőlegény? Ugye, nem?`,
    // 20
    `De eljön az idő, amikor a vőlegényt elviszik tőlük. Akkor majd ők is böjtölni fognak.”`,
    // 21
    `„Senki sem varr régi ruhára új szövetből foltot, mert az új csak tovább szakítaná a régit. Az új ugyanis elválik a régitől, és még nagyobb lesz a szakadás!`,
    // 22
    `Senki sem tölt új bort régi bortömlőkbe, (#g) mert az új bor szétszakítja a tömlőket, amelyek így tönkremennek, ráadásul a bor is kiömlik. Az új bort új tömlőkbe kell tölteni.”`,
    // 23  ~ Az Emberfia a szombatnak is Ura (#M) ~
    `Egyszer Jézus és tanítványai egy gabonaföldön mentek keresztül. Éppen szombat volt. A tanítványok útközben letéptek néhány kalászt.`,
    // 24
    `Emiatt a farizeusok kérdőre vonták Jézust: „Nézd csak, mit csinálnak a tanítványaid! Miért tesznek olyat, amit a Törvény szerint szombaton nem szabad?”`,
    // 25
    `Jézus ezt válaszolta: „Sohasem olvastátok, hogy mit tett Dávid, amikor az embereivel együtt megéhezett, de nem volt semmi ennivalójuk?`,
    // 26
    `Isten házához érkeztek, ahol abban az időben Abjátár volt a főpap. Dávid akkor evett az Isten elé helyezett szent kenyerekből, amelyekből a Törvény szerint csakis a papok ehettek, sőt, még azoknak is adott belőle, akik vele voltak!”`,
    // 27
    `Végül ezt mondta: „A szombat ünnepe van az emberért, és nem az ember a szombatért.`,
    // 28
    `Így hát az Emberfia úr a szombat ünnepe fölött is”.`
  ],
  [
    // 3  ~ Jézus szombaton is gyógyít (#N) ~
    `Egyszer Jézus ismét a zsinagógába ment. Volt ott egy béna kezű férfi is.`,
    // 2
    `Ekkor már gyanakodva lesték Jézust, hogy vajon szombaton is gyógyít-e, mert ürügyet kerestek rá, hogy vádolhassák.`,
    // 3
    `Jézus megszólította a béna kezű férfit: „Állj ide, a középre!”`,
    // 4
    `Majd ezt kérdezte az összegyűltektől: „A Törvény szerint szombaton melyiket szabad: jót tenni valakivel, vagy ártani neki? Mi a helyes: megmenteni, vagy kioltani valakinek az életét?” De senki sem válaszolt.`,
    // 5
    `Ekkor haragosan végignézett rajtuk, és sajnálta őket a szívük keménysége miatt. Majd a férfi felé fordult: „Nyújtsd ki a kezedet!” - mondta neki. A beteg kinyújtotta a kezét, és azonnal meggyógyult.`,
    // 6
    `A farizeusok ekkor kimentek a zsinagógából, és azonnal tanakodni kezdtek a Heródes-pártiakkal, hogy milyen úton-módon lehetne Jézust kivégeztetni.`,
    // 7  ~ Nagy sokaság gyülekezik Jézushoz ~
    `Jézus ezután visszavonult tanítványaival a Galileai-tó mellé. Azonban nagy sokaság követte Galileából, Júdeából,`,
    // 8
    `Jeruzsálemből, Idumeából, a Jordánon túli területekről, meg Tírusz és Szidón vidékéről, mert hallották, hogy milyen hatalmas dolgokat tett.`,
    // 9
    `Mivel nagyon sokan összegyűltek, Jézus szólt a tanítványainak, hogy készítsenek elő a számára egy bárkát, hogy az emberek ne tolongjanak körülötte.`,
    // 10
    `Ugyanis nagyon sok embert meggyógyított, ezért akik valamilyen betegségben szenvedtek, mind igyekeztek a közelébe férkőzni, hogy megérinthessék.`,
    // 11
    `Voltak közöttük olyanok is, akikben gonosz szellemek laktak. Amikor meglátták Jézust, leborultak előtte, és azt kiabálták: „Te vagy az Isten Fia!”`,
    // 12
    `Jézus azonban szigorúan rájuk parancsolt, hogy ezt ne hirdessék.`,
    // 13  ~ A tizenkét apostol kiválasztása (#O) ~
    `Jézus ezután fölment egy hegyre, és magához szólította azokat, akiket a többiek közül kiválasztott. Ezek csatlakoztak is hozzá.`,
    // 14
    `Tizenkét férfit jelölt ki - akiket apostoloknak nevezett -, hogy állandóan vele legyenek, hogy kiküldje őket Isten üzenetét hirdetni,`,
    // 15
    `és hogy felhatalmazást kapjanak a betegek gyógyítására, meg a gonosz szellemek kiűzésére:`,
    // 16
    `Simont, akit elnevezett Péternek,`,
    // 17
    `Jakabot és Jánost, Zebedeus két fiát, akiknek a „Boanerges” nevet adta, amely azt jelenti: „mennydörgés fiai”,`,
    // 18
    `Andrást,
Fülöpöt,
Bertalant,
Mátét,
Tamást,
Jakabot, Alfeus fiát,
Taddeust,
Simont, a zélótát (#h) ,`,
    // 19
    `és Júdás Iskáriótest, aki később elárulta őt.`,
    // 20  ~ Kinek a hatalmával űzi ki Jézus a gonosz szellemeket? (#P) ~
    `Ezután Jézus bement egy házba. Ismét olyan nagy tömeg gyűlt össze körülötte, hogy még enni sem tudtak, sem ő, sem a tanítványai.`,
    // 21
    `Amikor Jézus családtagjai ezt megtudták, érte mentek, hogy elvigyék onnan. Az emberek ugyanis azt híresztelték róla, hogy megbolondult.`,
    // 22
    `A Jeruzsálemből érkezett törvénytanítók is azt mondták: „Megszállott! A Sátán (#i) lakik benne, ezért tudja kiűzni a gonosz szellemeket. A saját fejedelmük által űzi ki őket!”`,
    // 23
    `Jézus ekkor magához hívta a törvénytanítókat, és jelképes történetek segítségével magyarázta meg nekik: „Ugyan hogy űzhetné ki a Sátán a saját szolgáit az emberekből?!`,
    // 24
    `Ha egy királyság egyik része a másik ellen támad, az egész elpusztul.`,
    // 25
    `Elpusztul az a család is, amelyben belső harcok dúlnak.`,
    // 26
    `Ha tehát a Sátán önmaga ellen fordul, és a saját szolgái ellen harcol, akkor a királysága nem állhat fenn tovább, hanem vége van.`,
    // 27
    `Gondoljátok meg, ha valaki be akar törni egy erős ember házába, hogy kirabolja, akkor előbb meg kell kötöznie őt, csak azután foszthatja ki a házat!`,
    // 28
    `Igazán mondom nektek: az emberek mindenféle bűnös tettükre és Istent gyalázó beszédükre kaphatnak bűnbocsánatot.`,
    // 29
    `De van egy kivétel: aki a Szentlelket gyalázza, az soha nem nyer bűnbocsánatot. Az ilyen ember örökre bűnös marad.”`,
    // 30
    `Jézus ezt azért mondta, mert a törvénytanítók azzal vádolták, hogy gonosz szellem lakik benne.`,
    // 31  ~ Jézus igazi családja: a tanítványai (#Q) ~
    `Jézus anyja és a testvérei megérkeztek a házhoz, és megálltak odakint. Beküldtek valakit, hogy hívja ki Jézust.`,
    // 32
    `A körülötte ülő emberek szóltak neki: „Édesanyád és a testvéreid (#j) odakint várnak rád.”`,
    // 33
    `Jézus ezt felelte: „Tudjátok, hogy valójában ki az én anyám, és kik a testvéreim?”`,
    // 34
    `Végignézett a körülötte ülőkön, és rájuk mutatott: „Itt vannak a testvéreim és az anyám,`,
    // 35
    `mert azok az igazi testvéreim és anyám, akik megteszik, amit Isten akar!”`
  ],
  [
    // 4  ~ Példázat a magvetésről (#R) ~
    `Jézus ezután ismét a tó partján tanított. Mivel nagyon sokan gyűltek össze körülötte, beszállt egy halászbárkába, amely ki volt kötve, a parthoz közel. Ott leült, az emberek pedig a parton maradtak.`,
    // 2
    `Jelképes történetek segítségével tanította őket sokféle igazságra. Ezt mondta:`,
    // 3
    `„Figyeljetek rám! Egyszer egy földműves kiment a szántóföldjére vetni.`,
    // 4
    `Ahogyan szórta a vetőmagot, néhány a keményre taposott ösvényre esett. Ezeket a madarak mind felkapdosták.`,
    // 5
    `Más magok köves talajra hullottak, ahol sekély volt a termőföld. Ezek gyorsan kikeltek, mert nem voltak mélyen a földben.`,
    // 6
    `De amikor a nap felkelt, megperzselte a növényeket, és mivel nem eresztették mélyre a gyökerüket, teljesen el is száradtak.`,
    // 7
    `Megint más magok tüskés gyomok közé hullottak, ahol kikeltek, de a felnövő gyomok elnyomták és megfojtották őket. Így ezek a magok sem hoztak termést.`,
    // 8
    `A magok egy része azonban jó földbe esett, kikelt, szárba szökkent, és termést hozott. Az egyik harmincszor, a másik hatvanszor, ismét másik százszor annyit termett, mint amennyit a gazda elvetett.”`,
    // 9
    `Ezután pedig ezt mondta: „Akinek van füle, hallja és értse meg, amit mondok!”`,
    // 10  ~ Ti megérthetitek Isten Királyságának titkait (#S) ~
    `Később, amikor Jézus már egyedül maradt, a körülötte lévők, meg a tizenkét tanítványa odament hozzá, és megkérdezték a jelképes történetekkel kapcsolatban.`,
    // 11
    `Így válaszolt nekik: „Ti megérthetitek Isten Királyságának titkos igazságait, de másoknak mindent csak példázatokban mondok el, hogy`,
    // 12
    `»csak nézzék, nézzék, mégse lássák,
     csak hallgassák, hallgassák, mégse értsék meg,
hogy ne forduljanak Istenhez,
     és bűneikre ne nyerjenek bocsánatot.«” (#k)`,
    // 13  ~ A magvetés történetének magyarázata (#T) ~
    `Azután Jézus ezt kérdezte: „Nem értitek ezt a történetet? Akkor hogyan fogjátok megérteni az összes többit?!`,
    // 14
    `A földműves olyan emberhez hasonlít, aki Isten üzenetét hirdeti.`,
    // 15
    `Az ösvényre hullott magok esete azokat az embereket jelképezi, akik hallják ugyan Isten üzenetét, de a Sátán azonnal kilopja azt a szívükből.`,
    // 16
    `A köves földbe vetett magok esete azokat példázza, akik hallják Isten üzenetét, és nagy örömmel azonnal be is fogadják.`,
    // 17
    `De az üzenet nem tud meggyökerezni, ezért csak rövid ideig él bennük. Amikor baj és üldözés éri őket Isten üzenete miatt, hamar kiábrándulnak és elfordulnak tőle.`,
    // 18
    `A tüskés gyomok közé hullott magok esete olyanokat jelképez, akik hallják és befogadják Isten üzenetét.`,
    // 19
    `De azután a földi élet gondjai, a meggazdagodásra való törekvés, vagy az egyéb dolgok utáni szenvedélyes vágyakozás elfojtja bennük Isten üzenetét, ezért nem hoznak termést.`,
    // 20
    `A jó földbe vetett magok esete azokat jelképezi, akik Isten üzenetét hallják és befogadják, majd az felnő bennük, és termést is hoz: az egyiknél harmincszorost, a másiknál hatvanszorost, a harmadiknál százszorost.”`,
    // 21  ~ Minden titok kitudódik (#U) ~
    `Azután Jézus megkérdezte őket: „Azért gyújtják-e meg az olajmécsest, hogy egy kosár alá, vagy az ágy alá tegyék? Nem! A mécsest a mécstartóra kell helyezni,`,
    // 22
    `mert minden rejtett dolog nyilvánosságra fog kerülni, és minden titok kitudódik.`,
    // 23
    `Akinek van füle, hallja és értse meg, amit mondok!”`,
    // 24
    `Ezt is mondta nekik: „Gondoljátok át alaposan, amit hallotok! Amilyen mértékkel mértek, ugyanazzal fognak nektek is mérni. Sőt, még ráadást is kaptok.`,
    // 25
    `Akinek ugyanis már van, annak majd még többet adnak. Akinek azonban nincs, attól még azt is elveszik, amije eddig volt.”`,
    // 26  ~ Isten Királysága olyan, mint a gabonaföld ~
    `Ezt is mondta nekik Jézus: „Isten Királysága hasonlít a gabonaföld műveléséhez. A földműves először kimegy a földjére magot vetni.`,
    // 27
    `Azután telnek-múlnak a napok, és a magok kicsíráznak, a növény pedig növekszik, senki sem tudja, hogyan.`,
    // 28
    `Igen, a növények először szárat növesztenek, azután kalászt hoznak, végül szemeket nevelnek a kalászban.`,
    // 29
    `Amikor a szemek beérnek, a gazda azonnal learatja a gabonát, mert elérkezett az aratás ideje.”`,
    // 30  ~ A mustármag példázata (#V) ~
    `Ezt is mondta nekik Jézus: „Mihez hasonlítsam Isten Királyságát? Milyen példázattal magyarázzam?`,
    // 31
    `Ahhoz hasonlít, ahogyan a mustármagból kifejlődik a növény. Amikor elvetik, ez a mag minden más magnál kisebb,`,
    // 32
    `de mire felnövekszik, már nagyobb lesz az összes többi kerti veteménynél. Olyan nagy ágakat növeszt, hogy az égi madarak is fészket rakhatnak az árnyékában.”`,
    // 33
    `Még sok, ehhez hasonló jelképes történettel tanította az embereknek Isten üzenetét. Annyit mondott nekik, amennyit meg tudtak érteni.`,
    // 34
    `Mindig ilyen példázatokat használt, ha tanította őket, de mikor egyedül maradt a tanítványaival, nekik mindent meg is magyarázott.`,
    // 35  ~ Jézus lecsendesíti a vihart (#W) ~
    `Ugyanazon a napon, estefelé Jézus azt mondta a tanítványainak: „Menjünk át a túlsó partra!”`,
    // 36
    `Otthagyták tehát az embereket, és elindultak azzal a bárkával, amelyben ülve Jézus addig tanított. Más bárkák is követték őt.`,
    // 37
    `Hirtelen erős szélvihar csapott le a tóra. A hullámok átcsaptak a bárka oldalán, s az már kezdett megtelni.`,
    // 38
    `Eközben Jézus a bárka hátsó részén aludt, a holmikon. A tanítványok azonban felkeltették: „Mester, nem törődsz vele, hogy elpusztulunk?!”`,
    // 39
    `Ekkor Jézus felkelt, ráparancsolt a szélre és azt mondta víznek: „Csend legyen! Hallgass el!” Ekkor elállt a szél, és kisimult a tó vize.`,
    // 40
    `Majd azt mondta nekik: „Miért rémültetek meg? Még mindig nem hisztek?”`,
    // 41
    `A tanítványokat nagy félelem fogta el, és ezt kérdezgették egymástól: „Ki lehet ez, hogy még a szél és a víz is engedelmeskedik neki?”`
  ],
  [
    // 5  ~ Jézus kiűzi a gonosz szellemek seregét (#X) ~
    `Jézus a tanítványaival megérkezett a tó túlsó partjára, Gadara (#l) vidékére.`,
    // 2
    `Amikor kilépett a bárkából, szembe jött vele egy férfi, akiben gonosz szellem volt.`,
    // 3
    `Ez az ember a sírbarlangokban lakott, és senki nem tudta megkötözni, még láncokkal sem.`,
    // 4
    `Már sokszor megbilincselték, ő azonban mindig elszakította a láncokat, és széttörte a bilincseket. Senki sem tudta megfékezni.`,
    // 5
    `Éjjel-nappal ott kóborolt a sírok között és a hegyeken, ordítozott és kövekkel vagdosta magát.`,
    // 6
    `Már messziről észrevette Jézust, odaszaladt hozzá, leborult előtte,`,
    // 7
    `és így kiabált: „Mi közöd hozzám, Jézus, Magasságos Isten Fia? Istenre kényszerítelek, ne kínozz engem!”`,
    // 8
    `Azért mondta ezt mert Jézus ráparancsolt: „Gonosz szellem, menj ki ebből az emberből!”`,
    // 9
    `Jézus megkérdezte: „Mi a neved?”
„Légió (#m) , mert sokan vagyunk” - felelte ő.`,
    // 10
    `Majd könyörgött Jézusnak, hogy ne küldje el őket arról a vidékről.`,
    // 11
    `A közelben, a hegyoldalon nagy disznókonda legelt.`,
    // 12
    `A gonosz szellemek így könyörögtek: „Küldj minket a disznókba, hadd menjünk beléjük!”`,
    // 13
    `Jézus megengedte nekik, s akkor a gonosz szellemek kijöttek a férfiból, és a disznókba mentek. Erre az egész konda a meredek lejtőről hanyatt-homlok a tóba rohant, s mind belefulladtak. Mintegy kétezer disznó pusztult el így.`,
    // 14
    `A pásztorok, akik a disznókat őrizték, elfutottak a városba, és elhíresztelték ezt az egész környéken. Az emberek pedig kijöttek, hogy megnézzék, mi történt.`,
    // 15
    `Amikor Jézushoz értek, ott látták azt a férfit, akiben korábban egy egész légiónyi gonosz szellem lakott. Rendesen fel volt öltözve, ott ült a többiek között, és teljesen épelméjű volt. Ezen mindenki nagyon megdöbbent.`,
    // 16
    `A szemtanúk elmondták a többieknek, hogy mit tett vele Jézus, és mi történt a disznókkal.`,
    // 17
    `Azután mindannyian kérték Jézust, hogy menjen el a vidékükről.`,
    // 18
    `Amikor Jézus beszállt a bárkába, akkor a férfi, aki megszabadult a gonosz szellemektől kérte őt, hogy hadd mehessen vele.`,
    // 19
    `De Jézus ezt mondta neki: „Menj haza a családodhoz, és mondd el nekik, mit tett veled az Örökkévaló, és hogyan könyörült rajtad!”`,
    // 20
    `A férfi el is ment, és mindenkinek hirdette a Tízvárosban, hogy milyen hatalmas dolgot tett vele Jézus. Ezen azután mindenki nagyon megdöbbent.`,
    // 21  ~ Feltámaszt egy kislányt és meggyógyít egy beteg asszonyt (#Y) ~
    `Amikor Jézus a bárkával a tó túlsó partjához ért, nagy tömeg gyűlt köré, ezért ott maradt a tóparton.`,
    // 22
    `Odajött hozzá Jairus, aki a helyi zsinagóga egyik vezetője volt. A lábához borult,`,
    // 23
    `és így könyörgött: „A kislányom haldoklik. Kérlek, gyere el hozzánk, és tedd rá a kezed, hogy meggyógyuljon és éljen!”`,
    // 24
    `Jézus el is indult Jairussal együtt. Nagy tömeg követte, rengetegen tolongtak körülötte.`,
    // 25
    `Volt köztük egy asszony is, aki már tizenkét éve olyan betegségben szenvedett, amely állandó vérzéssel járt.`,
    // 26
    `Minden vagyonát orvosokra költötte, és sokat szenvedett. Az orvosok azonban hiába próbálták meggyógyítani, egyiküknek sem sikerült, sőt, a betegség egyre súlyosabb lett.`,
    // 27
    `Amikor az asszony meghallotta, hogy Jézus ott van, átfurakodott a tömegen, Jézus háta mögé került, és megérintette a ruháját.`,
    // 28
    `Ugyanis ezt gondolta: „Elég, ha csak a ruhájához érek, már attól is meggyógyulok.”`,
    // 29
    `Amikor Jézus ruháját megérintette, az asszony azonnal megérezte, hogy a vérzése megszűnt, és hogy egészen meggyógyult.`,
    // 30
    `Jézus rögtön észrevette, hogy erő áradt ki belőle, ezért megállt és megfordult. Ezt kérdezte: „Ki érintette meg a ruhámat?”`,
    // 31
    `A tanítványai így válaszoltak: „Látod, milyen sokan tolonganak körülötted, és azt kérdezed, ki érintett meg?!”`,
    // 32
    `Jézus azonban egyre csak kereste, és látni akarta azt, aki megérintette.`,
    // 33
    `Ekkor az asszony előlépett, bár reszketett a félelemtől. Tudta jól, mi történt vele, ezért leborult Jézus előtt, és mindent elmondott neki.`,
    // 34
    `Ő pedig ezt mondta: „Leányom, a hited megmentett téged. Menj békével, és légy egészséges!”`,
    // 35
    `Még beszélt, amikor küldöttek érkeztek Jairus házából, és ezt mondták: „A leányod meghalt, nincs miért tovább fárasztanod a Mestert!”`,
    // 36
    `Jézus azonban meghallotta, amit mondtak, és így biztatta Jairust: „Ne rémülj meg, csak higgy!”`,
    // 37
    `Ekkor Jézus maga mellé vette Pétert, Jakabot és Jánost, de a többieknek nem engedte, hogy vele menjenek.`,
    // 38
    `Amikor Jairus házához értek, Jézust nagy hangzavar fogadta: mindenki sírt és jajveszékelt.`,
    // 39
    `Bement a házba, és ezt mondta: „Miért sírtok, és mi ez a nagy lárma? A kislány nem halt meg, csak alszik!”`,
    // 40
    `Az emberek azonban kinevették. Ekkor mindenkit kiküldött a házból, csak a három tanítványa, meg a gyermek apja és anyja maradt vele. Velük együtt bement abba a szobába, ahol a gyermek feküdt.`,
    // 41
    `Megfogta a kislány kezét, és megszólította: „Talitha kúmi!” Ez azt jelenti: „Leánykám, kelj föl!”`,
    // 42
    `Ekkor a tizenkét éves kislány azonnal felkelt, és járni kezdett, az emberek pedig magukon kívül voltak a csodálkozástól.`,
    // 43
    `Jézus azonban szigorúan megparancsolta, hogy erről senkinek se beszéljenek. Azután szólt, hogy adjanak enni a kislánynak.`
  ],
  [
    // 6  ~ Jézus Názáretben (#Z) ~
    `Jézus ezután a tanítványaival együtt a saját városába ment.`,
    // 2
    `Amikor elérkezett a szombat ünnepe, tanítani kezdett a zsinagógában. Sokan hallották, és nagyon elcsodálkoztak rajta: „Hol tanulta ezeket? Miféle bölcsesség ez? Hogyan képes ilyen csodákat tenni?`,
    // 3
    `Hiszen ez csak egy ácsmester, a Mária fia! Nem ő a Jakab, József, Júdás és Simon testvére?! A húgai is itt élnek köztünk!” Ezért elutasították és elfordultak tőle.`,
    // 4
    `Jézus ezt mondta nekik: „A prófétát mindenhol tisztelik, csak éppen a saját városában, a rokonai között, és a családjában nem.”`,
    // 5
    `Nem is tudott ott csodát tenni, csupán néhány betegre tette rá a kezét, így gyógyította meg őket.`,
    // 6
    `Nagyon elcsodálkozott azon, hogy a város lakói ennyire hitetlenek.
Ezután végigjárta a környék falvait, és azokban tanított.`,
    // 7  ~ A tizenkét apostol kiküldése (#AA) ~
    `Ezután Jézus magához hívta tizenkét tanítványát, és kettesével kiküldte őket. Hatalmat adott nekik a gonosz szellemek fölött.`,
    // 8
    `Meghagyta, hogy a vándorbot kivételével semmit se vigyenek magukkal az útra: se kenyeret, se tarisznyát, se pénzt az övükben.`,
    // 9
    `Csak azt a sarut és ruhát viseljék, ami rajtuk van, és ne vigyenek tartalékot semmiből.`,
    // 10
    `Ezt mondta nekik: „Ha bementek egy házba, maradjatok ott, amíg el nem hagyjátok a várost!`,
    // 11
    `Ha valahol nem fogadnak szívesen, vagy nem hallgatnak rátok, menjetek el onnan, és még a port is verjétek le a lábatokról! (#n) Ez bizonyíték lesz majd ellenük.”`,
    // 12
    `A tanítványok ezután elindultak, és amerre mentek, mindenkinek hirdették, hogy változtassák meg a gondolkodásukat és egész életüket.`,
    // 13
    `Sok gonosz szellemet kiűztek az emberekből, sok beteget pedig megkentek olajjal, és meggyógyították őket.`,
    // 14  ~ Kinek tartották az emberek Jézust (#AB) ~
    `Jézus híre mindenfelé elterjedt, és Heródes király is hallott róla, hogy sokan így vélekednek: „Ez nem lehet más, mint Bemerítő János, aki feltámadt a halálból. Ezért tud ilyen nagy csodákat tenni.”`,
    // 15
    `Mások viszont azt mondták: „Ez az ember Illés.”
Voltak, akik úgy vélekedtek: „Ez az ember próféta. Olyan, mint a régi nagy próféták voltak.”`,
    // 16
    `Heródes maga ezt gondolta: „Biztosan Bemerítő János támadt fel a halálból, akit én lefejeztettem.”`,
    // 17  ~ Bemerítő János halála ~
    `Korábban ugyanis Heródes adott parancsot arra, hogy Bemerítő Jánost fogják el, és zárják börtönbe. Heródiás kedvéért tette ezt, aki korábban Heródes testvérének, Fülöpnek volt a felesége. Heródes feleségül vette Heródiást,`,
    // 18
    `annak ellenére, hogy János figyelmeztette: „A Törvény szerint nem szabad együtt élned a testvéred feleségével.”`,
    // 19
    `Emiatt Heródiás gyűlölte Jánost, és meg akarta öletni, de nem talált rá módot.`,
    // 20
    `Heródes ugyanis tisztelte Bemerítő Jánost, és félt tőle, mert tudta, hogy igaz és szent ember, ezért megvédte. Igaz, gyakran zavarba jött attól, amit János mondott, mégis szívesen hallgatta őt.`,
    // 21
    `Egyszer eljött az alkalmas idő Heródiás számára. Heródes a születésnapján lakomára hívta a főembereit, a hadsereg vezetőit és Galilea előkelőit.`,
    // 22
    `Az ünnepségen Heródiás lánya táncolt a vendégek előtt. Ez annyira tetszett mindenkinek, hogy Heródes azt mondta a leánynak: „Kérj tőlem, amit csak akarsz, megjutalmazlak vele!”`,
    // 23
    `Meg is esküdött neki: „Bármit kérsz, neked adom, akár a királyságom felét is!”`,
    // 24
    `A lány kiment, és az anyját kérdezte: „Mit kérjek?” Heródiás ezt válaszolta: „Bemerítő János fejét!”`,
    // 25
    `A lány sietve visszatért a királyhoz, és így felelt: „Az a kívánságom, hogy most azonnal add nekem Bemerítő János fejét egy tálon!”`,
    // 26
    `A király nagyon elszomorodott, de mivel megesküdött, hogy teljesíti a lány kérését, és mivel ezt a vendégek is hallották, nem akarta visszautasítani.`,
    // 27
    `Nyomban elküldte a hóhért, hogy hozza el János fejét. Az el is ment, és lefejezte Jánost a börtönben.`,
    // 28
    `Egy tálon behozta János fejét, és átadta a lánynak, ő meg az anyjához vitte.`,
    // 29
    `Amikor János tanítványai ezt megtudták, elvitték János holttestét, és egy sziklasírba temették.`,
    // 30  ~ Jézus enni ad több, mint ötezer embernek (#AC) ~
    `Ezután visszatértek Jézushoz az apostolok, és beszámoltak mindenről, amit tettek és tanítottak.`,
    // 31
    `Jézus ezt mondta nekik: „Gyertek velem egy csendes helyre, de csak ti magatok, és pihenjetek egy kicsit!” Ugyanis akkora volt a tömeg és a jövés-menés, hogy még enni sem maradt idejük.`,
    // 32
    `Így tehát Jézus és a tanítványai beszálltak egy bárkába, és elvonultak egy csendes helyre.`,
    // 33
    `Azonban sokan észrevették, hogy elindultak, és felismerték őket. A környező városokból nagyon sokan összegyűltek, és a tó partján oda futottak, ahová Jézus akart menni. Így az emberek előbb értek oda, mint ők.`,
    // 34
    `Amikor Jézus partra szállt, látta az összegyűlt sokaságot, és megsajnálta őket, mert olyanok voltak, mint a pásztor nélküli nyáj. Tanítani kezdte őket sok mindenre.`,
    // 35
    `Mikor már későre járt az idő, a tanítványai Jézushoz fordultak, és azt javasolták: „Lakatlan hely ez a vidék, és már későre jár.`,
    // 36
    `Küldd el a népet, hogy a környező tanyákon és falvakban valami ennivalót vegyenek maguknak!”`,
    // 37
    `De Jézus így válaszolt: „Ti adjatok nekik enni!”
„Úgy gondolod, hogy mi menjünk el, és vegyünk nekik kétszáz ezüstpénzért kenyeret, és azt adjuk nekik?” - kérdezték.`,
    // 38
    `„Most hány kenyeretek van? Menjetek, nézzétek meg!” - mondta Jézus.
Miután mindent összeszámoltak, így feleltek: „Öt kenyerünk van, és két halunk.”`,
    // 39
    `Akkor mondta nekik, hogy ültessék le az embereket a fűbe, csoportonként.`,
    // 40
    `Le is telepedtek ötvenes vagy százas csoportokban.`,
    // 41
    `Jézus vette az öt kenyeret és a két halat, felnézett az égre, és hálát adott Istennek. Azután tört a kenyerekből, és a tanítványainak adta, hogy osszák szét az emberek között. Ugyanígy szétosztotta a két halat is.`,
    // 42
    `Mindannyian ettek, és jól is laktak.`,
    // 43
    `Végül összeszedték a maradékot: 12 kosarat töltöttek meg a kenyérdarabokkal, és ezen felül még a halakból is maradt.`,
    // 44
    `A sokaságban, amely így jóllakott, körülbelül 5 000 férfi volt.`,
    // 45  ~ Jézus a vízen jár (#AD) ~
    `Jézus ezután utasította a tanítványait, hogy azonnal szálljanak be bárkába, és evezzenek át a túlsó partra, Betsaidába, amíg ő elbocsájtja az embereket.`,
    // 46
    `Miután elbúcsúzott tőlük, felment a hegyre imádkozni.`,
    // 47
    `Eljött az este, és a bárka még valahol a tó közepénél tartott, Jézus pedig egyedül volt a parton.`,
    // 48
    `Látta, hogy a tanítványai küszködnek az evezéssel, mert a szél szembe fújt velük. Hajnalban, valamikor három és hat óra között, a tó vizén járva hozzájuk ment, de úgy tett, mintha el akarna haladni mellettük.`,
    // 49
    `Amikor a tanítványok meglátták Jézust, amint a vízen járt, azt hitték, hogy kísértetet látnak, és ijedtükben kiáltozni kezdtek.`,
    // 50
    `Mindannyian látták, és nagyon megrémültek, de ő azonnal megszólította őket: „Nyugodjatok meg! Én vagyok az, ne féljetek!”`,
    // 51
    `Belépett hozzájuk a bárkába, s ekkor a szél azonnal elállt. Ezen a tanítványok nagyon megdöbbenek.`,
    // 52
    `Még mindig nem okultak a kenyerek megszaporításán sem, és kemény volt a szívük.`,
    // 53  ~ Betegeket gyógyít Genezáretben (#AE) ~
    `Miután átkeltek a tavon, Genezáretben kötöttek ki.`,
    // 54
    `Amint kiszálltak a bárkából, az emberek azonnal felismerték Jézust.`,
    // 55
    `Amikor ugyanis meghallották, hogy valahol megjelent, mindenhonnan odasiettek, hogy hozzá vigyék a hordágyakon fekvő betegeket.`,
    // 56
    `Bárhová is ment - falvakba, városokba vagy tanyákra - az emberek kitették betegeiket a piactérre, és könyörögtek neki, hogy legalább a ruhája szélét érinthessék. Akik pedig megérintették őt, meg is gyógyultak.`
  ],
  [
    // 7  ~ Isten szava fontosabb, vagy az emberi hagyományok? (#AF) ~
    `Eljött néhány farizeus és törvénytanító Jeruzsálemből, és Jézus köré gyűltek.`,
    // 2
    `Észrevették, hogy Jézus néhány tanítványa nem végzi el a kézmosás szertartását evés előtt.`,
    // 3
    `A farizeusok ugyanis - mint általában a zsidók - nem esznek addig, amíg szertartásosan kezet nem mosnak. Azért teszik ezt, mert ragaszkodnak őseik hagyományaihoz.`,
    // 4
    `Ha például vesznek valamit a piacon, előbb mindig megmossák, csak azután eszik meg. Sok más ehhez hasonló hagyományuk is van: hasonló szertartással „tisztítják meg” a poharakat, korsókat, rézedényeket, sőt az ágyakat is. (#o)`,
    // 5
    `Tehát a farizeusok és a törvénytanítók megkérdezték Jézust: „Tanítványaid miért nem követik őseink hagyományait? Miért nem végzik el a kézmosás szertartását, mielőtt esznek?”`,
    // 6
    `Jézus így válaszolt nekik: „Milyen képmutatók vagytok! Igaza volt Ézsaiásnak, amikor rólatok prófétált:
»Ez a nép csak a szájával tisztel engem,
     de a szíve távol van tőlem.`,
    // 7
    `Látszólag tisztelnek ugyan engem,
     de nem ér az semmit,
mert a tanításaik,
     csak emberi parancsok!« (#p)`,
    // 8
    `Bizony, ti Isten parancsát semmibe veszitek, de ragaszkodtok az emberi hagyományokhoz.”`,
    // 9
    `Majd így folytatta: „Alattomosan félretoljátok Isten parancsát, hogy a saját tanításaitokat tegyétek a helyére.`,
    // 10
    `Például Mózes azt parancsolta: »Tiszteld apádat és anyádat!« (#q) , és azt is: »Aki apját vagy anyját gyalázza, az halállal bűnhődjön!« (#r)`,
    // 11
    `Ezzel szemben ti azt tanítjátok, hogy ha valaki azt mondja apjának vagy anyjának: »Amivel segíthetnék rajtad, azt már áldozatul felajánlottam Istennek«,`,
    // 12
    `akkor azt már nem szabad odaadnia a szüleinek.`,
    // 13
    `Ezzel valójában azt tanítjátok, hogy nem fontos, amit Isten mond, és nem neki kell engedelmeskednünk. Fontosabb, hogy mindenki a ti hagyományaitokat kövesse. S még sok más ehhez hasonlót is tesztek!”`,
    // 14
    `Ezután Jézus ismét magához hívta az embereket, és ezt mondta: „Figyeljetek rám mindnyájan, és értsétek meg, amit mondok!`,
    // 15
    `Nem az teszi tisztátalanná az embert, ami kívülről jut bele, hanem az, ami belőle származik!`,
    // 16
    `Akinek van füle, hallja és értse meg, amit mondok!”`,
    // 17
    `Miután otthagyta a tömeget, és bement a házba, tanítványai megkérdezték, hogy mit jelent az, amiről beszélt.`,
    // 18
    `Jézus így válaszolt: „Hát ti sem értitek?! Nem tudjátok, hogy nem az teszi tisztátalanná az embert, amit megeszik?`,
    // 19
    `Hiszen az nem a szívébe kerül, hanem a gyomrába, majd pedig kiürül onnan.” Ezzel Jézus azt jelentette ki, hogy minden étel „tiszta”, vagyis megehető.`,
    // 20
    `Majd így folytatta: „Az teszi tisztátalanná az embert, ami a belsejéből származik.`,
    // 21
    `Mert belülről, a szívből származnak a gonosz gondolatok, a szexuális bűnök, a lopások, a gyilkosságok,`,
    // 22
    `a házasságtörés, a kapzsiság, a gonoszság, a csalás, a kicsapongás, a fösvény és szűkmarkú lelkület, a gyalázkodás, a büszkeség és az esztelenség.`,
    // 23
    `Mindezek a gonosz dolgok az ember belsejéből származnak, és ezek teszik tisztátalanná.”`,
    // 24  ~ Jézus segít egy föníciai asszonyon (#AG) ~
    `Jézus ezután elment onnan Tírusz vidékére. Ott bement egy házba, mert nem akarta, hogy észrevegyék. Mégis kitudódott, hogy ott van.`,
    // 25
    `Megtudta ezt egy asszony is, akinek a leányában gonosz szellem lakott. Odament hát Jézushoz, és a lábaihoz borult.`,
    // 26
    `Ez az asszony görög származású volt, a szíriai Föníciában született. Könyörgött Jézusnak, hogy űzze ki a leányából a gonosz szellemet.`,
    // 27
    `Jézus így válaszolt neki: „Először a gyermekeknek kell jóllakniuk. Nem helyes, ha elvesszük tőlük a kenyeret, és odadobjuk a kutyáknak.”`,
    // 28
    `Az asszony így válaszolt: „Igen, Uram, de még az asztal alatt levő kutyák is ehetnek a gyermekektől lehulló morzsákból.”`,
    // 29
    `„Mivel így válaszoltál - felelte Jézus -, menj csak nyugodtan haza! A gonosz szellem már kiment a leányodból.”`,
    // 30
    `Ő pedig hazamenve látta, hogy gyermeke az ágyon fekszik, és valóban kiment belőle a gonosz szellem.`,
    // 31  ~ Meggyógyít egy süketnémát ~
    `Jézus ezután visszatért Tírusz vidékéről. Szidónon át - a Tízváros vidékén keresztül - a Galileai-tóhoz ment.`,
    // 32
    `Odavittek hozzá egy férfit, aki teljesen süket volt, és beszélni is alig tudott. Kérték, hogy tegye rá a kezét, és gyógyítsa meg.`,
    // 33
    `Jézus egy kissé távolabb vitte a tömegtől, és a fülébe dugta az ujját. Majd a megnyálazott ujjával megérintette a férfi nyelvét.`,
    // 34
    `Ezután feltekintett az égre, felsóhajtott, és ezt mondta: „Effata!” Ez azt jelenti: „Oldódj meg!”`,
    // 35
    `Ekkor a férfinak meggyógyult a hallása, és a nyelve is megoldódott: rendesen tudott beszélni.`,
    // 36
    `Jézus megparancsolta, hogy erről senkinek se beszéljenek. De minél jobban tiltotta, annál inkább terjedt a híre.`,
    // 37
    `Mindenki nagyon csodálkozott a süketnéma gyógyulásán, és ezt mondták: „Milyen jól tesz mindent! A süketek fülét megnyitja, a némák nyelvét pedig megoldja!”`
  ],
  [
    // 8  ~ Jézus enni ad több, mint négyezer embernek (#AH) ~
    `Azokban a napokban ismét nagy sokaság gyűlt Jézus köré, de már minden ennivalójuk elfogyott. Ezért Jézus magához hívta a tanítványait:`,
    // 2
    `„Sajnálom ezeket az embereket, mert már három napja velem vannak, és kifogytak minden ennivalóból.`,
    // 3
    `Ha éhesen küldeném haza őket, összeesnének az úton, hiszen sokan közülük elég messziről jöttek.”`,
    // 4
    `A tanítványok ezt felelték: „Lakatlan helyen vagyunk, messze a falvaktól. Hogyan lehetne ennyi embert jóllakatni?”`,
    // 5
    `„Hány kenyeretek van?” - kérdezte Jézus.
„Hét” - válaszolták.`,
    // 6
    `Ezután Jézus szólt az embereknek, hogy üljenek le a földre. Majd kezébe vette a hét kenyeret, és miután hálát adott Istennek, darabokra törte, és kezdte osztani a tanítványainak, hogy adják tovább. Ők szét is osztották a sokaság között.`,
    // 7
    `A tanítványoknál volt néhány kisebb hal is. Jézus ezekért is hálát adott Istennek, majd odaadta nekik, hogy azokat is osszák szét.`,
    // 8
    `Mindenki evett, és jól is lakott. Végül összeszedték a maradékot, és a darabokkal hét kosarat töltöttek meg.`,
    // 9
    `Körülbelül négyezer férfi volt ott. Ezután Jézus hazaküldte a sokaságot.`,
    // 10
    `Majd tanítványaival együtt azonnal egy bárkába szállt, és Dalmanuta vidékére ment.`,
    // 11  ~ A farizeusok csodát kívánnak Jézustól (#AI) ~
    `Egyszer farizeusok jöttek hozzá, hogy vitatkozzanak vele, kikérdezzék, és próbára tegyék. Azt kérték, hogy tegyen valami csodát, mutasson nekik mennyei jelt bizonyítékul Istentől.`,
    // 12
    `Jézus a szíve mélyéből felsóhajtott, és ezt mondta: „Miért akar ez a nemzedék mindenáron valamilyen csodás jelt látni?! Igazán mondom: semmiféle csodát nem fognak látni!”`,
    // 13
    `Ezzel otthagyta őket, visszament a bárkába, és elindult a tó túlsó partjára.`,
    // 14  ~ Óvakodjatok a farízeusok kovászától! (#AJ) ~
    `A tanítványok eközben elfelejtettek kenyeret vinni magukkal. Csupán egyetlen kenyér volt velük a bárkában.`,
    // 15
    `Jézus nyomatékosan figyelmeztette őket: „Vigyázzatok! Tartsátok távol magatokat a farizeusok kovászától és a Heródes kovászától!”`,
    // 16
    `„Biztosan azért mondta ezt, mert nincs kenyerünk!” - tanakodtak egymás között a tanítványok.`,
    // 17
    `Jézus tudta, hogy miről beszélnek, ezért megkérdezte: „Miért aggódtok azon, hogy nincs kenyeretek? Hát még mindig nem értitek?! Ennyire megkeményedett a szívetek?`,
    // 18
    `Van szemetek, mégsem láttok? Van fületek, de nem hallotok? Nem emlékeztek,`,
    // 19
    `hány kosár maradékot gyűjtöttetek össze, amikor az öt kenyeret szétosztottam az ötezernek?”
„Tizenkettőt” - válaszolták a tanítványok.`,
    // 20
    `„És amikor a hét kenyeret osztottam szét a négyezer ember között, hány kosár maradékot gyűjtöttetek össze?”
„Hetet” - hangzott a válasz.`,
    // 21
    `Majd ismét megkérdezte: „Még mindig nem értitek?!”`,
    // 22  ~ Jézus meggyógyít egy vakot Bétsaidában ~
    `Azután megérkeztek Bétsaidába. Ott néhányan egy vakot hoztak Jézushoz, és kérték, hogy érintse meg.`,
    // 23
    `Jézus kézen fogva kivezette őt a faluból, majd a nyálával megkente a vak szemét, rátette a kezét, és megkérdezte: „Látsz-e valamit?”`,
    // 24
    `A vak felnézett: „Látom az embereket, de olyanok, mintha járkáló fák lennének.”`,
    // 25
    `Jézus ismét rátette a kezét a vak szemére. Amikor a férfi ismét felnézett, és már mindent tisztán és élesen látott: teljesen meggyógyult.`,
    // 26
    `Jézus hazaküldte, és ezt mondta neki: „Még a faluba se menj be!”`,
    // 27  ~ Te vagy a Messiás! (#AK) ~
    `Ezután Jézus és a tanítványai Cézárea Filippi vidékén járták a falvakat. Útközben Jézus megkérdezte tőlük: „Mit mondanak rólam az emberek, ki vagyok én?”`,
    // 28
    `Így válaszoltak: „Van, aki azt mondja, hogy Bemerítő János, mások meg Illésnek tartanak. Megint mások azt mondják, hogy valamelyik próféta vagy.”`,
    // 29
    `Ekkor megkérdezte őket: „És ti mit mondotok rólam, ki vagyok én?”
Péter így válaszolt: „Te vagy a Messiás!”`,
    // 30
    `Ekkor Jézus szigorúan megparancsolta a tanítványoknak, hogy erről senkinek ne beszéljenek.`,
    // 31  ~ Jézus előre jelzi a halálát és feltámadását (#AL) ~
    `Ezután tanítani kezdte őket: „Az Emberfiának sokat kell szenvednie. A nép vezetői, a főpapok és a törvénytanítók el fogják utasítani, végül megölik, de három nappal később fel fog támadni.”`,
    // 32
    `Egészen nyíltan beszélt nekik erről. Péter ekkor félrehívta Jézust, szemrehányást tett neki, és helyre akarta igazítani.`,
    // 33
    `De Jézus hátat fordított neki, a tanítványaira nézett, majd ezekkel a szavakkal utasította rendre Pétert: „Takarodj a szemem elől (#t) , Sátán! Nem Isten ügyét tartod szem előtt, hanem az emberi érzéseket.”`,
    // 34
    `Ezután Jézus közelebb hívta magához az embereket, meg a tanítványait, és ezt mondta nekik: „Aki engem akar követni, az tagadja meg magát, vegye fel és vigye a keresztjét, úgy kövessen.`,
    // 35
    `Aki meg akarja menteni a lelkét, vagyis az életét, az el fogja veszíteni. De aki értem és az evangéliumért feladja az életét, vagyis a lelkét, az fogja igazán megmenteni.`,
    // 36
    `Mit ér, ha az ember megkapja az egész világot, de elveszíti a saját magát?`,
    // 37
    `Ugyan mit adhat azért, hogy megmentse a lelkét?`,
    // 38
    `Aki most szégyell engem és szavaimat ez előtt a hűtlen és bűnös nemzedék előtt, azt az Emberfia is szégyellni fogja, amikor majd eljön az Atya dicsőségében, a szent angyalokkal együtt.”`
  ],
  [
    // 9
    `Majd azt mondta: „Igazán mondom, hogy az itt állók közül vannak néhányan, akik nem ízlelik meg a halált addig, amíg meg nem látják Isten Királyságát eljönni hatalommal.”`,
    // 2  ~ Jézus megmutatkozik a dicsőségében (#AM) ~
    `Hat nap múlva Jézus felment egy magas hegyre. Csak Pétert, Jakabot és annak testvérét, Jánost vitte magával. Senki más nem volt velük. A hegyen Jézus a tanítványok szeme láttára elváltozott.`,
    // 3
    `A ruhája ragyogott, és olyan fehér lett, amilyet a földön senki sem tud készíteni.`,
    // 4
    `Majd megjelent Illés és Mózes, és beszélgettek vele.`,
    // 5
    `Ekkor Péter Jézushoz fordult: „Mester! Olyan jó itt lenni! Készítsünk három sátrat: egyet neked, egy másikat Mózesnek, egyet meg Illésnek!”`,
    // 6
    `De nem tudta, mit mondjon, mert mindhárman nagyon megrémültek.`,
    // 7
    `Ekkor egy felhő jelent meg fölöttük, és mindnyájukat beborította. A felhőből egy hang hallatszott: „Ő az én szeretett Fiam! Őt hallgassátok, és engedelmeskedjetek neki!”`,
    // 8
    `Mire a három tanítvány körülnézett, már senki mást nem láttak, egyedül csak Jézust.`,
    // 9
    `Miközben lefelé jöttek a hegyről, Jézus megparancsolta nekik: „Ne mondjátok el senkinek, amit láttatok, amíg az Emberfia fel nem támad a halálból!”`,
    // 10
    `Ők nem is szóltak senkinek. Egymás között azonban arról tanakodtak, mit jelent az, hogy feltámadni a halálból.`,
    // 11
    `Majd megkérdezték Jézustól: „Miért mondják a törvénytanítók, hogy a Messiás előtt Illésnek kell eljönnie?” (#u)`,
    // 12
    `Jézus ezt válaszolta: „Így van, előbb valóban Illés jön el, hogy mindent helyreállítson.
De mit jelent az, hogy az Írás szerint az Emberfiának sokat kell szenvednie, és hogy az emberek el fogják utasítani?`,
    // 13
    `Igazán mondom nektek, hogy Illés már el is jött, és az emberek kényük-kedvük szerint bántak vele - úgy, ahogyan az Írás mondta róla.”`,
    // 14  ~ A megszállott fiút megszabadítja (#AN) ~
    `Amikor visszaértek a többi tanítványhoz, azokat éppen nagy sokaság vette körül, és törvénytanítók vitatkoztak velük.`,
    // 15
    `Amint az emberek meglátták Jézust, elcsodálkoztak, és odafutottak, hogy köszöntsék.`,
    // 16
    `Jézus megkérdezte: „Miről vitatkoztok?”`,
    // 17
    `Egy férfi válaszolt a tömegből: „Mester, elhoztam a fiamat hozzád. Egy olyan szellem lakik benne, amely megnémítja.`,
    // 18
    `Valahányszor ez a szellem megragadja, a fiam a földre zuhan, habzik a szája, fogát csikorgatja, és megmerevedik. Kértem a tanítványaidat, hogy űzzék ki belőle a gonosz szellemet, de nem voltak képesek rá.”`,
    // 19
    `„Milyen hitetlen és romlott ez a nemzedék! Meddig kell még veletek maradnom?! Meddig szenvedjelek el még titeket? Hozzátok ide azt a fiút!” - mondta Jézus.`,
    // 20
    `Odavitték, s amikor a gonosz szellem meglátta Jézust, megrázta a fiút, aki összeesett, és habzó szájjal fetrengett a földön.`,
    // 21
    `Jézus megkérdezte a fiú apját: „Mennyi ideje van a fiad ebben az állapotban?”
Az apa ezt felelte: „Már gyermekkora óta.`,
    // 22
    `Ez a szellem a fiamat sokszor belehajszolta tűzbe-vízbe, hogy megölje. De könyörgök, ha tudsz valamit tenni, szánj meg bennünket, és segíts!”`,
    // 23
    `Jézus így válaszolt: „Azt mondod: »Ha tudsz valamit tenni…«? Minden lehetséges annak, aki hisz.”`,
    // 24
    `A fiú apja sírva felkiáltott: „Igen, hiszek! De segíts, hogy ne maradjon bennem semmi kételkedés!”`,
    // 25
    `Amikor Jézus látta, hogy egyre nagyobb tömeg verődik össze körülötte, keményen ráparancsolt a gonosz szellemre: „Te süketséget és némaságot okozó gonosz szellem! Parancsolom, hogy menj ki ebből a fiúból, és többé soha ne térj vissza!”`,
    // 26
    `A gonosz szellem hangosan kiáltozott, megrángatta a fiút, majd kiment belőle. A fiú úgy feküdt a földön, mintha meghalt volna. Olyannyira, hogy többen halottnak is vélték,`,
    // 27
    `de Jézus megfogta a kezét, és talpra állította.`,
    // 28
    `Ezután Jézus bement egy házba. Amikor maguk között voltak, a tanítványai megkérdezték tőle: „Miért nem volt erőnk kiűzni ezt a gonosz szellemet?”`,
    // 29
    `Ő így válaszolt: „Ez a fajta semmi mással nem űzhető ki, csak imádkozással és böjtöléssel.” (#v)`,
    // 30  ~ Jézus előre jelzi a halálát és feltámadását (#AO) ~
    `Ezután továbbmentek, és Galileán haladtak keresztül. Jézus nem akarta, hogy az emberek megtudják, merre jár,`,
    // 31
    `mert csak a tanítványait akarta tanítani. Ezt mondta nekik: „Az Emberfiát hamarosan kiszolgáltatják azoknak az embereknek, akik meg fogják ölni. Három nappal a halála után azonban fel fog támadni.”`,
    // 32
    `A tanítványok nem értették, hogy miről beszél, de nem merték megkérdezni.`,
    // 33  ~ Ki a legnagyobb? (#AP) ~
    `Ezután Kapernaumba mentek. Amikor már a házban voltak, Jézus megkérdezte a tanítványait: „Miről beszélgettetek útközben?”`,
    // 34
    `Egyikük sem mert válaszolni, mert az úton arról vitatkoztak, hogy melyikük a nagyobb.`,
    // 35
    `Akkor Jézus leült, odahívta magához a tizenkettőt, és ezt mondta: „Ha valaki első akar lenni, akkor legyen ő az utolsó, és legyen mindenki más szolgája.”`,
    // 36
    `Azután kézen fogott egy kisgyermeket, és eléjük állította. Majd a karjaival átölelte, és ezt mondta a tanítványoknak:`,
    // 37
    `„Aki befogad egy ilyen kisgyermeket az én nevemben (#w) az engem fogad be. Ha pedig engem befogad, akkor azt is befogadja, aki engem elküldött.”`,
    // 38  ~ Aki nincs ellenünk, az velünk van (#AQ) ~
    `János egyszer ezt mondta Jézusnak: „Mester! Láttuk, hogy valaki a te nevedben űzi ki a gonosz szellemeket az emberekből. De megtiltottuk neki, hogy folytassa, mert nem tartozik közénk.”`,
    // 39
    `„Hagyjátok! - mondta Jézus. - Mert aki az én nevemben tesz csodát, az nem fog mindjárt rosszat mondani rólam.`,
    // 40
    `Aki nincs ellenünk, az velünk van.`,
    // 41
    `Ha valaki inni ad nektek egy pohár vizet csak azért, mert a Messiáshoz tartoztok - igazán mondom nektek -, meg fogja kapni a jutalmát.”`,
    // 42  ~ Ne okozz megütközést! (#AR) ~
    `„Ezek a kicsinyek hisznek bennem, de jaj annak, aki miatt közülük akár csak egy is elveszíti a hitét! (#x) Az ilyen jobban járna, ha egy malomkövet kötnének a nyakára, és bedobnák a tengerbe, mielőtt ilyen bajt okozna.`,
    // 43
    `Ha a saját kezed vinne bűnbe, inkább vágd le! Jobb, ha elveszted a fél kezedet, de mégis bejutsz az örök életre, mintha megmarad mindkét kezed, és úgy kerülsz a gyehenna olthatatlan tüzére!`,
    // 44
    `Ott örökre a férgek tápláléka lennél, és soha ki nem alvó tűz égetne.`,
    // 45
    `Ha az egyik lábad vinne bűnbe, inkább vágd le! Jobb, ha elveszted a fél lábad, de mégis bejutsz az örök életre, mintha megmarad mindkét lábad, és úgy dobnak a gyehenna elolthatatlan tüzére!`,
    // 46
    `Ott örökre a férgek tápláléka lennél, és soha ki nem alvó tűz égetne.`,
    // 47
    `Ha az egyik szemed visz bűnbe, még azt is inkább vájd ki, és dobd el! Jobb, ha fél szemmel jutsz be Isten Királyságába, mintha mindkét szemed megmarad, és úgy dobnak a gyehenna tüzébe!`,
    // 48
    `Ott örökre a férgek tápláléka lennél, és soha ki nem alvó tűz égetne.`,
    // 49
    `Mert mindenkit tűzzel sóznak meg. (#aa)`,
    // 50
    `Jó a só, de ha elveszti az ízét, hogyan lehet helyrehozni? Legyen bennetek só, és éljetek egymással békességben!”`
  ],
  [
    // 10  ~ Jézus a házasságról és a válásról (#AS) ~
    `Jézus ezután továbbment Júdea vidékére, a Jordán folyó másik oldalára. Ismét nagy tömeg gyűlt köré, és szokása szerint tanította őket.`,
    // 2
    `Odajött hozzá néhány farizeus is, akik próbára akarták tenni, ezért megkérdezték tőle: „Megengedi-e a Törvény, hogy a férj elváljon a feleségétől?”`,
    // 3
    `Jézus azonban ezt kérdezte: „Mit parancsolt nektek Mózes?”`,
    // 4
    `„Mózes megengedte a férjnek, hogy válólevelet írjon, és elváljon a feleségétől” (#ab) - válaszolták.`,
    // 5
    `Jézus erre így felelt: „Mózes csak a szívetek keménysége miatt adta ezt a törvényt.`,
    // 6
    `De amikor Isten megteremtette a világot, az embert férfivá és nővé teremtette. (#ac)`,
    // 7
    `»Ezért a férfi elhagyja apját és anyját, ragaszkodik a feleségéhez,`,
    // 8
    `és ketten egy testté válnak.« (#ad) Ezután tehát már nem kettő, hanem egy.`,
    // 9
    `Amit Isten tett eggyé, azt ember ne válassza szét!”`,
    // 10
    `Később, amikor ismét együtt voltak a házban, a tanítványok tovább kérdezték őt erről.`,
    // 11
    `Jézus ezt mondta: „Az a férfi, aki elválik a feleségétől, és mást vesz feleségül, házasságtörést követ el az első felesége ellen.`,
    // 12
    `Az a feleség, aki elválik a férjétől, és összeházasodik egy másik férfival, szintén házasságtörést követ el.”`,
    // 13  ~ Megáldja a gyermekeket (#AT) ~
    `Az emberek odavitték Jézushoz a kisgyerekeiket, hogy tegye rájuk a kezét. A tanítványok azonban rájuk szóltak, és el akarták őket küldeni.`,
    // 14
    `Amikor Jézus ezt meglátta, megharagudott, és rászólt a tanítványaira: „Engedjétek hozzám jönni a gyerekeket, mert Isten Királysága olyanoké, akik hozzájuk hasonlítanak!`,
    // 15
    `Igazán mondom nektek: aki nem úgy fogadja Isten Királyságát, mint a gyerekek, az soha nem jut be oda.”`,
    // 16
    `Ezután egyenként a karjába vette a gyerekeket, rájuk tette a kezét, és megáldotta őket.`,
    // 17  ~ A gazdagok nehezen jutnak be Isten Királyságába (#AU) ~
    `Jézus már útnak indult, amikor egy férfi odafutott hozzá, térdre borult előtte, és megkérdezte: „Jó Mester! Mit kell tennem, hogy örök életet kapjak?”`,
    // 18
    `Jézus így válaszolt: „Miért mondasz engem jónak? Egyedül csak Isten jó.`,
    // 19
    `Ismered a Törvény parancsait: Ne gyilkolj! Ne kövess el házasságtörést! Ne lopj! Ne tanúskodj hamisan! Ne csalj! Tiszteld apádat és anyádat!” (#ae)`,
    // 20
    `A férfi erre így válaszolt: „Mester, én mindezt megtartottam gyerekkorom óta.”`,
    // 21
    `Jézus rátekintett, megkedvelte, és ezt mondta: „Még egy dolog van, amit meg kell tenned. Menj, add el minden vagyonodat, és amit érte kapsz, oszd szét a szegények között! Akkor majd a Mennyben lesz a kincsed. Azután gyere, és kövess engem!”`,
    // 22
    `Erre a válaszra a férfi arca elkomorult, és szomorúan elment, mert nagyon gazdag volt.`,
    // 23
    `Jézus ekkor végignézett a tanítványain, és ezt mondta nekik: „Milyen nehezen jutnak be Isten Királyságába a gazdagok!”`,
    // 24
    `A tanítványok nagyon megdöbbentek ezen. Ő azonban megerősítette: „Gyermekeim, látjátok, milyen nehéz bemenni Isten Királyságába!`,
    // 25
    `Még egy tevének is könnyebb átmenni a varrótű fokán, mint egy gazdagnak bejutni Isten Királyságába.”`,
    // 26
    `Ezen még jobban elcsodálkoztak, és egymás között azon tanakodtak: „Akkor egyáltalán ki kaphat örök életet?”`,
    // 27
    `Jézus rájuk nézett, és ezt válaszolta: „Az emberek számára ez valóban lehetetlen, de Isten számára nem, mert neki minden lehetséges.”`,
    // 28
    `Péter ekkor azt mondta: „Látod, mi mindent elhagytunk, hogy kövessünk téged.”`,
    // 29
    `Jézus így felelt: „Igazán mondom nektek: mindenki, aki értem és az örömhírért elhagyta otthonát, testvéreit, apját, anyját, gyerekeit, szántóföldjét,`,
    // 30
    `az százszor annyit kap vissza még ebben a világban: otthont, testvért, anyát, gyermekeket, szántóföldeket. Ugyanakkor üldözésben is része lesz, a következő korszakban pedig örök életet kap.`,
    // 31
    `Sokan, akik most az első helyeket foglalják el, akkor majd az utolsók lesznek. Ugyanakkor sokan, akik most az utolsó helyeken vannak, akkor majd az első helyekre kerülnek.”`,
    // 32  ~ Jézus előre jelzi a halálát és feltámadását (#AV) ~
    `Jézus vezetésével elindultak Jeruzsálem felé. A tanítványok megrettenve követték, és a többiek is féltek. Útközben Jézus ismét félrehívta a tizenkettőt, és arról beszélt nekik, hogy mi fog vele történni:`,
    // 33
    `„Látjátok, most felmegyünk Jeruzsálembe. Ott az Emberfiát majd átadják a főpapoknak és a törvénytanítóknak. Ők halálra fogják ítélni, majd átadják az idegenek kezébe.`,
    // 34
    `Azok kigúnyolják, leköpik, megkorbácsolják, és végül megölik. Három nappal később azonban fel fog támadni.”`,
    // 35  ~ Ki ülhet Jézus jobb és bal oldalán? (#AW) ~
    `Jakab és János - Zebedeus fiai - Jézushoz fordultak: „Mester, szeretnénk kérni tőled valamit.”`,
    // 36
    `„Mit kívántok?” - kérdezte ő.`,
    // 37
    `„Add meg nekünk, hogy egyikünk a jobb, a másikunk pedig a bal oldaladon ülhessen, amikor majd dicsőségesen uralkodni fogsz!” - mondták a testvérek.`,
    // 38
    `Jézus így válaszolt nekik: „Nem tudjátok, mit kértek. Képesek vagytok-e kiinni azt a poharat (#af) , amelyet nekem ki kell innom? Be tudtok-e merítkezni azzal a bemerítkezéssel, amellyel nekem kell bemerítkeznem?” (#ag)`,
    // 39
    `A testvérek így válaszoltak: „Igen, meg tudjuk tenni.”
Jézus azt felelte: „Igaz, valóban inni fogtok abból a pohárból, amelyet nekem ki kell innom, és ti is be fogtok merítkezni azzal a bemerítkezéssel, amellyel nekem kell bemerítkeznem.`,
    // 40
    `Azt azonban nem én döntöm el, hogy ki ül majd a jobb vagy bal oldalamon. Ezeket a helyeket azok kapják, akiknek a számára Isten elkészítette.”`,
    // 41
    `Amikor a másik tíz tanítvány meghallotta, hogy Jakab és János mit kért, megharagudtak rájuk.`,
    // 42
    `Ekkor Jézus odahívta őket, és ezt mondta: „Jól tudjátok, hogy az Izráelen kívüli népek uralkodói zsarnokoskodnak az alattvalóik felett, és az előkelők visszaélnek a hatalmukkal.`,
    // 43
    `Közöttetek azonban ne így legyen! Éppen ellenkezőleg: aki közületek nagy akar lenni, legyen szolgája a többieknek!`,
    // 44
    `Aki pedig az első akar lenni köztetek, az legyen a többiek rabszolgája!`,
    // 45
    `Így van ez az Emberfiával is. Ő sem azért jött a Földre, hogy neki szolgáljanak, hanem hogy ő szolgáljon másoknak. Azért jött, hogy életét váltságdíjul adja, és ezáltal sokakat megmentsen.”`,
    // 46  ~ Bartimeus visszanyeri a látását (#AX) ~
    `Ezután Jerikóba mentek. Jézus, a tanítványai, meg az őket körülvevő nagy tömeg már kifelé haladt a városból, amikor egy vak koldus mellé értek, aki az út szélén ült. Bartimeusnak hívták - ez azt jelenti: Timeus fia.`,
    // 47
    `Amikor meghallotta, hogy a názáreti Jézus megy arra, kiabálni kezdett: „Jézus, Dávid Fia, könyörülj rajtam!”`,
    // 48
    `Sokan rászóltak, hogy maradjon csöndben, de ő annál jobban kiabált: „Dávid Fia! Könyörülj rajtam!”`,
    // 49
    `Jézus megállt, és azt mondta: „Hívjátok ide!”
Szóltak a vaknak, és így biztatták: „Bátorság! Kelj fel, mert Jézus hív!”`,
    // 50
    `Ő még a köpenyét is ledobta magáról, felugrott, és Jézushoz sietett.`,
    // 51
    `Jézus ezt kérdezte tőle: „Mit tegyek veled? Mit kívánsz tőlem?”
„Mester, hogy újra lássak!” - válaszolt a vak.`,
    // 52
    `Jézus erre így válaszolt: „Menj el, a hited meggyógyított.” A férfi azonnal visszanyerte a látását, és csatlakozott a Jézust kísérő csoporthoz.`
  ],
  [
    // 11  ~ Jézus királyként vonul be Jeruzsálembe (#AY) ~
    `Amikor Jeruzsálem közelébe értek, és az Olajfák hegyénél elérték Bétfagét és Betániát, Jézus előreküldte két tanítványát:`,
    // 2
    `„Menjetek be az előttetek lévő faluba! Amint odaértek, találtok ott egy kikötött szamárcsikót, amelyen még soha senki sem ült. Oldjátok el, és hozzátok ide!`,
    // 3
    `Ha valaki megkérdezné: »Miért viszitek el?«, mondjátok, hogy az Úrnak van szüksége rá, de hamarosan visszaküldi.”`,
    // 4
    `A tanítványok elmentek, és az utcán egy ház kapuja mellett megtalálták a kikötött szamárcsikót.`,
    // 5
    `Amikor eloldották, néhányan az ott állók közül megkérdezték: „Miért oldjátok el a szamárcsikót?”`,
    // 6
    `A tanítványok azt válaszolták, amit Jézus mondott nekik, így elengedték őket.`,
    // 7
    `Jézushoz vitték a szamárcsikót, ráterítették a felsőruháikat, ő pedig felült rá.`,
    // 8
    `Ahogy haladt az úton, sokan a felsőruhájukat a földre terítették, Jézus elé. Mások meg a közelben lombos ágakat vágtak le, és azokat is eléje szórták.`,
    // 9
    `A Jézus előtt és mögött vonuló nagy tömeg mind azt kiáltotta:
„Hozsánna! (#ah)
     Áldott, aki az Örökkévaló nevében jön! (#ai)`,
    // 10
    `Áldott legyen atyánknak, Dávidnak
     közeledő királysága!
Hozsánna a magasságban Istennek!”`,
    // 11
    `Ezután Jézus bevonult Jeruzsálembe, a Templom területére, és miután mindent megnézett, tizenkét tanítványával együtt kiment Betániába, mivel már későre járt az idő,`,
    // 12  ~ Megátkozza a fügefát (#AZ) ~
    `Amikor másnap elindultak Betániából, Jézus megéhezett.`,
    // 13
    `Már távolról meglátott egy lombos fügefát. Odament, hogy megnézze, van-e rajta gyümölcs. De csak leveleket talált, mert még nem érkezett el a fügeérés ideje.`,
    // 14
    `Ekkor azt mondta a fügefának: „Soha többé ne egyen rólad senki gyümölcsöt!” Ezt a tanítványai is hallották.`,
    // 15  ~ Kizavarja a kereskedőket a Templomból (#BA) ~
    `Ezután bementek Jeruzsálembe. Amikor a Templom területére érkeztek, Jézus kizavarta azokat, akik ott árultak és vásároltak. Felborította a pénzváltók asztalait és a galambárusok padjait is.`,
    // 16
    `Azt sem engedte meg, hogy bárki bármit átvigyen a Templom területén.`,
    // 17
    `Majd így tanította őket: „Az Írásban ez áll: »Házam imádság háza lesz minden nép számára (#aj) .« Ti azonban »rablók barlangjává« tettétek!” (#ak)`,
    // 18
    `Amikor a főpapok és a törvénytanítók ezt meghallották, keresni kezdték a módját, hogyan tudnák Jézust elpusztítani. De féltek is tőle, mert az egész nép csodálta a tanítását.`,
    // 19
    `Amikor beesteledett, Jézus a tanítványaival együtt kiment a városból.`,
    // 20  ~ A hit ereje (#BB) ~
    `Reggel ismét elmentek a fügefa mellett, és látták, hogy az gyökerestől kiszáradt.`,
    // 21
    `Péter felismerte a fát, és ezt mondta: „Mester! Ez az a fügefa, amelyet megátkoztál - nézd, hogy kiszáradt!”`,
    // 22
    `Jézus így válaszolt: „Legyen bennetek Isten hite!`,
    // 23
    `Igazán mondom nektek: Ha valaki azt mondja ennek a hegynek: »Menj, és zuhanj a tengerbe!«, és nem kételkedik, hanem hiszi, hogy amit mond, az megtörténik - akkor úgy is lesz.`,
    // 24
    `Ezért mondom nektek: amikor imádságban kértek valamit, higgyétek, hogy az már a tiétek, és akkor valóban meg is fogjátok kapni!`,
    // 25
    `Amikor megálltok imádkozni, és eszetekbe jut, hogy valaki ellen panaszotok van, bocsássatok meg neki, hogy Mennyei Atyátok is megbocsássa bűneiteket!`,
    // 26
    `De ha nem bocsátotok meg, akkor Mennyei Atyátok sem bocsát meg nektek.”`,
    // 27  ~ Kitől származik Jézus hatalma? (#BC) ~
    `Ismét Jeruzsálembe mentek. Amikor Jézus a Templom területén járt, odajöttek hozzá a főpapok, a törvénytanítók és a nép vezetői,`,
    // 28
    `és kérdőre vonták: „Milyen felhatalmazással teszed ezeket? Ki adott neked erre felhatalmazást?”`,
    // 29
    `Jézus így felelt: „Én is kérdezek tőletek valamit. Ha válaszoltok, akkor megmondom, hogy milyen felhatalmazással teszem mindezt.`,
    // 30
    `Az, hogy János bemerítette az embereket, Istentől volt, vagy emberektől? Válaszoljatok nekem erre!”`,
    // 31
    `Azok meg így tanakodtak egymás között: „Ha azt feleljük, hogy Istentől volt, azt mondhatja rá: »Akkor miért nem hittetek neki?«`,
    // 32
    `De azt mégsem mondhatjuk, hogy csak emberektől volt…”. A vezetők ugyanis féltek a néptől, mert Bemerítő Jánost mindenki prófétának tartotta.`,
    // 33
    `Ezért így válaszoltak Jézusnak: „Nem tudjuk.”
„Akkor én sem mondom meg nektek, milyen felhatalmazással teszem ezeket” - felelt nekik Jézus.`
  ],
  [
    // 12  ~ Példázat a gyilkos szőlőmunkásokról (#BD) ~
    `Ezután Jézus jelképes történetek segítségével kezdte tanítani őket. Ezt a példázatot mondta nekik: „Volt egy gazda, aki szőlőt telepített. Bekerítette, elkészítette a szőlőtaposó helyet, és őrtornyot is épített. Majd az egészet gazdálkodóknak adta bérbe, és elutazott egy másik országba.`,
    // 2
    `Szüret idején elküldte egyik szolgáját, hogy hozza el a termésből a tulajdonosnak járó részt.`,
    // 3
    `De a bérlők megfogták a szolgát, megverték, és üres kézzel küldték vissza.`,
    // 4
    `Ezután a gazda egy másik szolgáját küldte el hozzájuk. A bérlők őt is megverték, a fejét betörték, és gyalázatosan bántak vele.`,
    // 5
    `Majd a gazda küldött egy harmadik szolgát is, akit a bérlők meggyilkoltak. Ezután még sok más szolgáját is elküldte. Volt közülük, akit a bérlők megvertek, másokat pedig meggyilkoltak.`,
    // 6
    `Végül a gazda már nem tudott mást küldeni, csak a saját fiát, akit nagyon szeretett. Utoljára tehát őt küldte el, és azt gondolta: »A fiamat talán mégis meg fogják becsülni!«`,
    // 7
    `De a bérlők ezt mondták egymásnak: »Nézzétek, ő a szőlőskert örököse! Gyertek, öljük meg, és miénk lesz az öröksége!«`,
    // 8
    `Azzal megfogták a fiút, megölték, majd kidobták a szőlőskertből.`,
    // 9
    `Mit gondoltok, mit fog tenni ezután a tulajdonos? Eljön, elpusztítja a bérlőket, a szőlőskertet pedig másoknak adja!`,
    // 10
    `Vagy talán nem olvastátok, mit mond az Írás?
»Éppen az a kő lett a sarokkővé,
     amelyet az építők félredobtak.`,
    // 11
    `Az Örökkévaló tette sarokkővé,
     mi pedig csodáljuk!«” (#am)`,
    // 12
    `A vallási vezetők megértették, hogy ezt a történetet Jézus valójában róluk mondta. Szerették volna letartóztatni, de nem merték, mert féltek a nép haragjától. Így hát otthagyták, és elmentek.`,
    // 13  ~ Ravasz kérdés az adóról (#BE) ~
    `Később a vallási vezetők Jézushoz küldtek néhány férfit a farizeusok és a Heródes-pártiak közül. Az volt a szándékuk, hogy kérdéseikkel csapdába csalják, hátha mond valamit, amit felhasználhatnak ellene.`,
    // 14
    `Ezért megkérdezték: „Mester, tudjuk, hogy becsületes vagy, és nem törődsz azzal, hogy mások mit gondolnak rólad. Tudjuk, hogy nem vagy részrehajló, és Isten útját az igazságnak megfelelően tanítod. Helyes-e, hogy adót fizessünk a császárnak, vagy nem?”`,
    // 15
    `Jézus azonban átlátott a képmutatásukon, és így válaszolt: „Képmutatók! Megpróbáltok csapdába csalni?! Mutassatok csak egy ezüstpénzt, hadd lássam!”`,
    // 16
    `Kezébe adtak egy érmét, ő pedig ezt kérdezte tőlük: „Kinek a képmása és a felirata van rajta?” Azok válaszoltak: „A császáré.”`,
    // 17
    `„Akkor hát adjátok meg a császárnak, ami a császáré; és Istennek, ami Istené!” - felelte Jézus.
Emiatt nagyon elcsodálkoztak Jézuson.`,
    // 18  ~ A szadduceusok alattomos kérdése (#BF) ~
    `Ezután néhány szadduceus jött Jézushoz. (Ők azok, akik azt tanítják, hogy nincs feltámadás.) Megkérdezték Jézust:`,
    // 19
    `„Mester, Mózes azt parancsolta nekünk, hogy ha egy házas férfi gyermektelenül hal meg, akkor a fiútestvére vegye feleségül a meghalt férfi özvegyét. (#an) Így köteles gondoskodni arról, hogy meghalt testvérének mégis legyen utódja.`,
    // 20
    `Volt egyszer hét fiútestvér. Az első megnősült, de gyermektelenül halt meg.`,
    // 21
    `A második feleségül vette a testvére özvegyét, de ő is gyermektelenül halt meg. Majd a harmadik testvérrel is ugyanez történt.`,
    // 22
    `Így a hét testvér sorra feleségül vette az asszonyt, de egyiknek sem született gyermeke. Végül az asszony is meghalt.`,
    // 23
    `A feltámadáskor melyiküknek lesz a felesége? Hiszen mind a hét testvérnek a felesége volt!”`,
    // 24
    `Jézus így válaszolt nekik: „Azért vagytok ilyen súlyos tévedésben, mert nem ismeritek sem az Írásokat, sem Isten hatalmát.`,
    // 25
    `Hiszen a feltámadás után már senki sem nősül meg, sem nem megy férjhez. Akik feltámadnak, olyanok lesznek, mint az angyalok a Mennyben!`,
    // 26
    `Ami pedig a halottak föltámadását illeti, nem olvastátok Mózes könyvében, hogy mit mondott neki Isten az égő bokornál? Azt mondta: »Én vagyok Ábrahám Istene, Izsák Istene és Jákób Istene«. (#ao)`,
    // 27
    `Márpedig Isten nem a halottak Istene, hanem az élőké! Tehát, valóban súlyos tévedésben vagytok.”`,
    // 28  ~ Melyik a legfontosabb parancs a Törvényben? (#BG) ~
    `Volt ott egy törvénytanító is, aki végighallgatta a beszélgetésüket. Mivel látta, hogy Jézus jól megfelelt a szadduceusoknak, megkérdezte tőle, hogy melyik a legfontosabb parancs a Törvényben.`,
    // 29
    `Jézus így felelt: „A legfontosabb parancs ez: »Halld meg, Izráel népe! Istenünk, az Örökkévaló az egyetlen Isten!`,
    // 30
    `Szeresd hát az Örökkévalót, Istenedet teljes szíveddel, egész lelkeddel, teljes értelmeddel és minden erőddel!« (#ap)`,
    // 31
    `A második legfontosabb parancs pedig ez: »Úgy szeresd embertársadat, (#aq) mint saját magadat!« (#ar) Ezeknél nincs nagyobb parancs.”`,
    // 32
    `A törvénytanító így válaszolt: „Jól mondtad, Mester, hogy az Örökkévaló az egyetlen Isten. Valóban nincs más rajta kívül.`,
    // 33
    `Minden véres- és égőáldozatnál fontosabb, hogy az Örökkévalót, Istenünket egész szívünkkel, gondolkodásunkkal és minden erőnkkel szeressük, meg az is, hogy úgy szeressük embertársainkat, mint saját magunkat.”`,
    // 34
    `Jézus látta, hogy a törvénytanító belátásra jutott, és ezt mondta neki: „Nem vagy messze Isten Királyságától.” Ezután senki sem mert több kérdést feltenni Jézusnak.`,
    // 35  ~ A Messiás Dávidnak a Fia és az Ura (#BH) ~
    `Amikor Jézus a Templom területén tanított, felvetett egy kérdést: „Hogyan mondhatják a törvénytanítók, hogy a Messiás Dávid fia?`,
    // 36
    `Hiszen maga Dávid mondta a Szentlélek által:
»Így szólt Uramhoz az Örökkévaló:
     Ülj mellém jobb felől,
amíg ellenségeidet
     hatalmad (#as) alá kényszerítem!« (#at)`,
    // 37
    `Dávid Urának nevezi a Messiást, de akkor hogyan lehet a Messiás Dávidnak a fia?”
A nagy sokaság örömmel hallgatta Jézust.`,
    // 38  ~ Óvakodjatok a törvénytanítóktól! (#BI) ~
    `Amikor tanított, Jézus ezt mondta: „Óvakodjatok azoktól a törvénytanítóktól, akik szeretnek előkelő ruhában járni; szívesen veszik, ha tisztelettel köszöntik őket az utcán;`,
    // 39
    `szeretik elfoglalni a legelőkelőbb helyeket a zsinagógában, és az ünnepi vacsorákon;`,
    // 40
    `kiforgatják az özvegyasszonyokat a vagyonukból; és a látszat kedvéért hosszasan imádkoznak. Ők fogják a legsúlyosabb ítéletet kapni.”`,
    // 41  ~ Az özvegyasszony fillérei (#BJ) ~
    `Jézus leült a templomi persellyel szemben, és figyelte, hogyan dobják bele adományaikat az emberek. Sokan a gazdagok közül nagy összegeket adtak.`,
    // 42
    `Majd jött egy szegény özvegyasszony, aki csak egy kevés aprópénzt dobott bele.`,
    // 43
    `Jézus ekkor magához hívta tanítványait, és ezt mondta: „Igazán mondom, hogy ez az özvegyasszony többet dobott a perselybe, mint bárki más.`,
    // 44
    `A többiek mind a fölöslegükből adakoztak. Ő pedig nagy szegénysége ellenére mindent odaadott, amije csak volt, még a betevő falatjára való pénzét is.”`
  ],
  [
    // 13  ~ Jézus prófétál az utolsó időkről (#H) ~
    `Amikor Jézus már kifelé ment a Templom területéről, egyik tanítványa megszólította: „Mester! Nézd, milyen hatalmas kövek, micsoda épületek!”`,
    // 2
    `Jézus ezt felelte: „Nézd meg jól ezeket a nagy épületeket! Itt kő kövön nem marad, mert mindent porig fognak rombolni.”`,
    // 3
    `Ezután leült az Olajfák hegyén, ahonnan jól lehetett látni a Templomot. Csak Péter, Jakab, János és András volt mellette, akik megkérdezték:`,
    // 4
    `„Mondd meg nekünk, mikor fog ez megtörténni! Milyen jelek fogják mutatni, amikor mindezeknek be kell teljesülniük?”`,
    // 5
    `Akkor Jézus így tanította őket: „Vigyázzatok, nehogy valaki félrevezessen titeket!`,
    // 6
    `Mert sokan jönnek majd az én nevemben, akik azt mondják, hogy én vagyok a Messiás, és sokakat félrevezetnek.`,
    // 7
    `Fogjátok hallani a háborúk zaját, és fogtok híreket hallani a távolban zajló háborúkról is, de ne rémüljetek meg! Ezeknek meg kell történniük, mielőtt a vég valóban elérkezik.`,
    // 8
    `Egyik nép a másikra támad, és egyik ország a másik ellen fog harcolni. Földrengések és éhínségek lesznek különböző helyeken. De mindez még csak a »szülési fájdalmak« kezdetét jelzi.`,
    // 9
    `Vigyázzatok magatokra, mert amiatt, hogy hozzám tartoztok, le fognak tartóztatni és bíróság elé állítanak benneteket, megvernek a zsinagógákban; és kormányzók, meg királyok elé állítanak! Akkor majd nekik is tanúskodjatok rólam!`,
    // 10
    `Előbb azonban szükséges, hogy minden népnek hirdessék az örömüzenetet.`,
    // 11
    `Amikor majd elhurcolnak, és bíróság elé állítanak titeket, ne aggódjatok előre, hogy mit mondjatok. Amit Isten abban a helyzetben a szátokba ad, azt mondjátok, mert valójában nem ti fogtok beszélni, hanem a Szentlélek szól majd rajtatok keresztül.`,
    // 12
    `Abban az időben halálra adja testvér a testvérét, és apa a gyermekét. Sőt, a gyermekek is szüleik ellen fordulnak, és megöletik őket.`,
    // 13
    `Mindenki gyűlölni fog benneteket amiatt, hogy a nevemet viselitek. De aki mindvégig állhatatosan kitart, az üdvözül.`,
    // 14
    `Amikor majd látjátok, hogy az az utálatos dolog, amely gyilkol és pusztít, (#i) ott áll, ahol nem lenne szabad - aki olvassa, értse meg, hogy ez mit jelent! -, akkor azok, akik Júdeában vannak, meneküljenek a hegyekbe!`,
    // 15
    `Mindenki késedelem nélkül fusson el! Aki éppen felment a háza lapos tetejére, vissza se menjen a házba, hogy onnan elvigyen valamit!`,
    // 16
    `Aki a mezőn van, ne forduljon vissza a ruhájáért se!`,
    // 17
    `Jaj a gyermeket váró asszonyoknak és a szoptatós anyáknak azokban a napokban!`,
    // 18
    `Imádkozzatok, hogy mindez ne télen történjen!`,
    // 19
    `Akkor olyan nehéz és keserves időszakot kell átélnetek, amilyen még nem volt a világ teremtése óta, és nem is lesz többé.`,
    // 20
    `Ha Isten meg nem rövidítené azt az időszakot, bizony senki sem élné túl. De azoknak a kedvéért, akiket ő kiválasztott, megrövidítette azt az időt.`,
    // 21
    `Ha akkor valaki azt mondja nektek: »Nézzétek, itt a Messiás!«, vagy: »Nézzétek, ott van!«, ne higgyetek neki!`,
    // 22
    `Mert hamis messiások és hamis próféták lépnek elő, akik nagy csodákat (#j) és jeleket tesznek, hogy becsapják, ha lehet, még Isten választottait is.`,
    // 23
    `De ti vigyázzatok, hiszen én előre figyelmeztettelek titeket!`,
    // 24  ~ Jézus prófétál az utolsó időkről (#I) ~
    `Abban az időben, a nyomorúság ideje után
»elsötétül a Nap,
     a Hold sem világít többé,`,
    // 25
    `lehullnak az égről a csillagok,
     s az égben lévő hatalmak is meginognak.« (#k)`,
    // 26
    `Akkor majd mindenki meglátja az Emberfiát, amint eljön a felhőkben, nagy hatalommal és dicsőséggel.`,
    // 27
    `Elküldi az angyalokat, hogy gyűjtsék össze a választottait a négy égtáj felől, a föld szélétől az ég széléig.`,
    // 28
    `Értsétek meg, amire a fügefa tanít! Amikor kizöldül az ága, és új leveleket hajt - tudjátok, hogy már közel a nyár.`,
    // 29
    `Így van ez azokkal a dolgokkal is, amelyekről beszéltem. Amikor látjátok, hogy ezek megtörténnek, tudhatjátok, hogy ő már közel van, (#l) szinte az ajtó előtt.`,
    // 30
    `Igazán mondom nektek: ez a nemzet (#m) el nem múlik, amíg mindezek a dolgok be nem teljesednek.`,
    // 31
    `Az ég és a föld elmúlik, de amit én mondok, az soha nem múlik el: örökké érvényes marad.`,
    // 32
    `Arról a napról és óráról azonban senki sem tudja, mikor érkezik el, sem az angyalok a mennyben, sem a Fiú, csak az Atya.`,
    // 33
    `Vigyázzatok hát, és legyetek mindig készen, mert nem tudjátok, mikor jön el az a nap és az az óra!`,
    // 34
    `Olyan ez, mint mikor valaki elhagyja otthonát, és hosszú útra indul. A házat a szolgáira bízza, és mindegyiküknek külön-külön megszabja a feladatát, s a kaput őrző szolgának is megparancsolja, hogy éberen őrködjön.`,
    // 35
    `Maradjatok hát ti is éberek, mert nem tudjátok, mikor jön vissza a ház ura: este, éjfélkor, hajnali kakasszóra, vagy reggel!`,
    // 36
    `Ha hirtelen megérkezik, nehogy alva találjon titeket!`,
    // 37
    `Amit most nektek mondok, mindenki másnak is mondom: »Maradjatok éberek!«”`
  ],
  [
    // 14  ~ A vallási vezetők Jézus megöletését tervezik (#J) ~
    `Már csak két nap volt hátra a Páska és a Kovásztalan kenyerek ünnepéig. A főpapok és a törvénytanítók keresték a módját, hogy Jézust titokban letartóztassák és kivégeztessék.`,
    // 2
    `Ezt mondták: „Ne az ünnep alatt fogjuk el, nehogy zavargás törjön ki a nép között!”`,
    // 3  ~ Mire jó ez a pazarlás? (#K) ~
    `Jézus Betániában, a leprás Simon házában vendégeskedett. Amikor helyet foglalt az asztalnál, odalépett hozzá egy asszony, aki valódi nárdusolajból (#n) készült, igen drága illatszert hozott magával. Az asszony összetörte az alabástrom illatszertartót, és a nárdusolajat Jézus fejére öntötte.`,
    // 4
    `Néhányan felháborodtak ezen, és így tanakodtak egymás között: „Miért kellett így elpazarolni ezt a drága illatszert?`,
    // 5
    `El lehetett volna adni több mint háromszáz ezüstpénzért, az árát pedig szétosztani a szegények között.” És megharagudtak az asszonyra.`,
    // 6
    `Jézus azonban ezt mondta nekik: „Hagyjátok őt, ne bántsátok, hiszen jót tett velem!`,
    // 7
    `Szegények mindig lesznek köztetek, (#o) bármikor tehettek jót velük, de én nem leszek mindig veletek.`,
    // 8
    `Ez az asszony megtette, amit tehetett: előre megkente testemet a temetésre.`,
    // 9
    `Igazán mondom nektek: az egész világon, ahol csak hirdetni fogják az örömüzenetet, azt is elmondják majd, amit ez az asszony tett, és emlékezni fognak rá.”`,
    // 10  ~ Júdás megegyezik Jézus ellenségeivel (#L) ~
    `A tizenkét tanítvány közül az egyik, Júdás Iskáriótes elment a főpapokhoz, hogy segítségükre legyen Jézust elfogni.`,
    // 11
    `Azok nagyon megörültek, és pénzt ígértek Júdásnak. Ő pedig ettől kezdve kereste a megfelelő alkalmat, hogy Jézust a kezükbe adja.`,
    // 12  ~ Az utolsó Páska-vacsora (#M) ~
    `A Kovásztalan kenyerek ünnepének első napja volt, amelyen a páskabárányt feláldozzák. Tanítványai megkérdezték Jézust: „Hol készítsük el számodra a Páska-vacsorát?”`,
    // 13
    `Ő akkor elküldte két tanítványát: „Menjetek be a városba, ott találkoztok majd egy férfival, aki egy korsó vizet visz. Kövessétek őt!`,
    // 14
    `Ahová bemegy, mondjátok a ház gazdájának: »A Mester kérdezi, hogy hol van az a vendégszoba, ahol megtarthatja a Páska ünnepét a tanítványaival.«`,
    // 15
    `Ő majd mutat nektek egy nagy szobát a ház felső emeletén, amely be van rendezve. Ott készítsétek el!”`,
    // 16
    `A két tanítvány bement a városba. Mindent pontosan úgy találtak, ahogyan Jézus mondta, és előkészítették a vacsorát.`,
    // 17
    `Mikor beesteledett, Jézus is megérkezett a többi tanítványával,`,
    // 18
    `és letelepedtek az asztal körül. Vacsora közben Jézus megszólalt: „Igazán mondom nektek: egyikőtök, aki velem eszik, el fog árulni engem.”`,
    // 19
    `A tanítványok nagyon elszomorodtak, és egymás után kérdezték: „Ugye, nem én vagyok az?!”`,
    // 20
    `Ő így válaszolt: „Közületek, a tizenkettő közül az egyik, aki velem együtt mártogatja kenyerét a tálba.`,
    // 21
    `Az Emberfia elmegy, ahogyan meg van írva róla az Írásban, de jaj annak, aki elárulja őt! Jobb lett volna neki, ha meg sem születik!”`,
    // 22  ~ Az Új Szövetség megkötése (#N) ~
    `Vacsora közben Jézus kezébe vette a kenyeret, és miután hálát adott Istennek, tört belőle, és a tanítványainak adta. Ezt mondta: „Vegyetek belőle! Ez az én testem!”`,
    // 23
    `Azután egy pohár bort vett a kezébe, s miután hálát adott Istennek, odaadta a tanítványainak.`,
    // 24
    `Közben ezt mondta: „Igyatok ebből mindnyájan, mert ez az én vérem, amely által az Új Szövetség érvénybe lép - s amely sokakért fog kiömleni.`,
    // 25
    `Igazán mondom nektek: mostantól fogva nem iszom a szőlő terméséből mindaddig, amikor majd újból iszom veletek Isten Királyságában.”`,
    // 26
    `Ezután a zsoltárokat énekelve kimentek az Olajfák hegyére.`,
    // 27  ~ Ma éjjel mind elhagytok engem! (#O) ~
    `Jézus ezt mondta nekik: „Ma éjjel mindnyájan elveszítitek a hiteteket bennem, és elhagytok. Mert ezt mondja az Írás:
»Megölöm a pásztort,
     és szétszóródnak a juhok.« (#p)`,
    // 28
    `De miután feltámadtam, Galileába megyek, és előbb fogok odaérni, mint ti.”`,
    // 29
    `Péter ezt mondta: „Ha mindenki más el is fordul tőled, én akkor sem hagylak el!”`,
    // 30
    `Jézus így felelt neki: „Igazán mondom neked: ma éjjel, mielőtt a kakas másodszor megszólal, háromszor le fogod tagadni, hogy ismersz engem.”`,
    // 31
    `Péter azonban hevesen fogadkozott: „Ha veled együtt kell is meghalnom, akkor sem fogom letagadni, hogy ismerlek téged.” A többi tanítvány is ugyanezt mondta.`,
    // 32  ~ A Gecsemáné kertben (#P) ~
    `Jézus ezután elment a tanítványaival egy olajfaligetbe, amelyet Gecsemánénak neveztek. „Üljetek le itt, amíg én elmegyek imádkozni!” - mondta nekik.`,
    // 33
    `De Pétert, Jakabot és Jánost maga mellé vette. Ekkor nagyon szomorú és zaklatott lett,`,
    // 34
    `és ezt mondta nekik: „Olyan nehéz a lelkem, hogy majdnem megöl a szomorúság. Várjatok meg itt, de ne aludjatok el!”`,
    // 35
    `Ezután kissé előrement, arccal a földre borult, és azért imádkozott, hogy ha lehetséges, ne kelljen átélnie azt a nehéz időt.`,
    // 36
    `Így imádkozott: „Abba (#q) , Atyám! Neked minden lehetséges. Kérlek, vidd el tőlem ezt a poharat! (#r) De ne úgy legyen, ahogy én szeretném, hanem, ahogy te akarod!”`,
    // 37
    `Ezután visszament a tanítványokhoz, de azok közben elaludtak. „Simon, mégis elaludtál?! - szólt Péternek. - Még egy órát sem tudtál velem együtt ébren maradni?`,
    // 38
    `Ne aludjatok, hanem imádkozzatok, hogy legyen erőtök ellenállni a kísértésnek! Mert a lélek készséges, de az emberi természet gyenge.”`,
    // 39
    `Ezután Jézus megint elment, és ugyanúgy imádkozott, mint előzőleg.`,
    // 40
    `Amikor visszament hozzájuk, ismét alva találta őket, mert képtelenek voltak nyitva tartani a szemüket. Nem tudtak mit felelni Jézusnak.`,
    // 41
    `Amikor harmadszorra ment vissza, ezt mondta nekik: „Még mindig alszotok és pihentek? Elég! Itt az ideje, hogy az Emberfiát kiszolgáltassák a bűnösöknek.`,
    // 42
    `Keljetek fel, és menjünk! Nézzétek, itt jön, aki elárul engem.”`,
    // 43  ~ Jézust letartóztatják (#Q) ~
    `Jézus még beszélt, amikor megérkezett Júdás, a tizenkét tanítvány közül az egyik. Kardokkal és botokkal felfegyverzett nagy csoport jött vele, akiket a főpapok, a törvénytanítók és a nép vezetői küldtek.`,
    // 44
    `Júdás, az áruló előre megbeszélte velük, miről ismerik meg, kit kell letartóztatniuk: „Akit csókkal köszöntök, azt fogjátok el, és őrizet alatt vezessétek el!”`,
    // 45
    `Júdás tehát egyenesen odalépett Jézushoz, és köszöntötte: „Mester!” - azután üdvözlésül arcon csókolta.`,
    // 46
    `Akkor a fegyveresek megragadták és letartóztatták Jézust.`,
    // 47
    `Az egyik tanítvány, aki ott állt Jézus mellett, ekkor kirántotta a kardját, rávágott a főpap szolgájára, de csak a fülét vágta le.`,
    // 48
    `Jézus azt mondta a fegyvereseknek: „Kardokkal és botokkal jöttök ellenem, mintha rabló lennék?!`,
    // 49
    `Hiszen minden nap ott voltam közöttetek a Templom területén, és tanítottam, mégsem fogtatok el. De ennek így kellett lennie, hogy beteljesedjen, amit az Írások mondanak.”`,
    // 50
    `A tanítványai ekkor mind otthagyták Jézust, és futva menekültek.`,
    // 51
    `Volt Jézus követői között egy fiatalember is, akin csak egy hosszú vászoning volt. A fegyveresek őt is megragadták, hogy elfogják,`,
    // 52
    `de a fiatalember inkább a kezükben hagyta az ingét, és meztelenül futott el.`,
    // 53  ~ A Főtanács kihallgatja Jézust (#R) ~
    `Ezután a főpap házához vezették Jézust. Odagyűltek a többi főpapok, a nép vezetői és a törvénytanítók is mind.`,
    // 54
    `Péter távolról követte Jézust, egészen a főpap udvarába. Az őrökkel együtt ő is a tűz mellé ült melegedni.`,
    // 55
    `A főpapok és a Főtanács többi tagja mind ürügyet kerestek, hogy Jézust halálra ítélhessék. Olyan férfiakat kerestek, akik hajlandók voltak ellene tanúskodni, de nem találtak olyan okot, amely alapján elítélhették volna.`,
    // 56
    `Sok hamis tanú vádolta Jézust, de a vallomásaik nem egyeztek meg egymással.`,
    // 57
    `Végül jött két hamis tanú, akik azt állították:`,
    // 58
    `„Hallottuk, amikor ez az ember (#s) azt mondta: »Lerombolom a Templomot, amelyet emberek építettek, és három nap alatt felépítek egy másikat, amelyet nem emberi kéz épít.«”`,
    // 59
    `- de még így sem egyezett, amit mondtak.`,
    // 60
    `Ekkor fölállt a főpap, és megkérdezte Jézust: „Miért nem felelsz arra, amivel ezek vádolnak?”`,
    // 61
    `Jézus azonban nem szólt egy szót sem.
Ekkor a főpap megkérdezte: „Te vagy a Messiás, az Isten (#t) Fia?”`,
    // 62
    `Jézus így válaszolt neki: „Én vagyok. (#u) Meglátjátok majd az Emberfiát, amint ott ül Isten (#v) jobbján, és eljön az ég felhőivel.”`,
    // 63
    `A főpap ekkor megszaggatta a ruháját, és ezt mondta: „Mi szükségünk van még több tanúra?!`,
    // 64
    `Hallottátok, hogy gyalázta Istent! Hogyan határoztok?”
Ekkor mindannyian úgy ítéltek, hogy Jézus bűnös, és megérdemli a halált.`,
    // 65
    `Néhányan leköpködték, majd letakarták az arcát, és ököllel ütötték. Közben így gúnyolták: „Na, most prófétálj!” Ezután a szolgák is ütni kezdték.`,
    // 66  ~ Péter letagadja, hogy ismeri Jézust (#S) ~
    `Ezalatt Péter még mindig ott volt az udvarban. Egyszer csak arra jött a főpap egyik fiatal szolgálólánya.`,
    // 67
    `Meglátta a tűznél melegedő Pétert, közelebb ment hozzá, szemügyre vette, és azt mondta: „Te is azzal a názáreti Jézussal voltál.”`,
    // 68
    `Péter azonban letagadta: „Nem tudom, és nem is értem, miről beszélsz!” Azzal kiment a kapu közelébe, és ekkor a kakas megszólalt. (#w)`,
    // 69
    `Amikor a szolgálólány újra találkozott Péterrel, így szólt a többiekhez: „Ez is közéjük tartozik!”`,
    // 70
    `De Péter ezt ismét letagadta.
Kis idő múlva az ott állók megszólították Pétert: „Biztos, hogy közéjük tartozol, hiszen te is galileai vagy.”`,
    // 71
    `Péter ekkor átok alatt megesküdött, hogy igazat mond: „Nem is ismerem azt az embert, akiről beszéltek!”`,
    // 72
    `Ebben a pillanatban másodszor is kukorékolt a kakas. Akkor Péter visszaemlékezett Jézus szavaira: „Mielőtt a kakas másodszor megszólal, háromszor is le fogod tagadni, hogy ismersz engem” - és sírva fakadt.`
  ],
  [
    // 15  ~ Jézus Pilátus előtt (#T) ~
    `Amint felvirradt a reggel, a főpapok, a nép vezetői, a törvénytanítók, az egész Főtanács együttesen határozatot hozott. Megkötözték Jézust, elvitték Pilátushoz, és átadták neki.`,
    // 2
    `Pilátus megkérdezte Jézust: „Te vagy a zsidók királya?”
„Igen, ahogy mondod” - válaszolta ő.`,
    // 3
    `A főpapok sok vádat hoztak fel Jézus ellen,`,
    // 4
    `ezért Pilátus újból megkérdezte őt: „Nem felelsz semmit? Látod, mennyi mindennel vádolnak téged?!”`,
    // 5
    `De Jézus továbbra sem válaszolt a vádakra. Pilátus ezen nagyon csodálkozott.`,
    // 6  ~ Pilátus halálra ítéli Jézust (#U) ~
    `A Páska ünnepén a helytartó - szokás szerint - minden évben szabadon engedett egy foglyot a nép kívánságára.`,
    // 7
    `Volt ott akkor egy Barabbás nevű fogoly a börtönben. Azokkal együtt börtönözték be, akik a lázadás idején gyilkoltak is.`,
    // 8
    `Az összegyűlt sokaság Pilátus elé járult, és kérte, hogy a szokás szerint engedjen szabadon egy foglyot.`,
    // 9
    `Pilátus megkérdezte: „Akarjátok-e, hogy a zsidók királyát engedjem el?”`,
    // 10
    `Tudta ugyanis, hogy a főpapok féltékenységből szolgáltatták ki neki Jézust.`,
    // 11
    `De a főpapok rábeszélésére az emberek inkább Barabbás szabadon bocsátását kérték.`,
    // 12
    `Ezután Pilátus újból megkérdezte őket: „Hát azzal mit tegyek, akit ti a zsidók királyának neveztek?”`,
    // 13
    `Az emberek így kiabáltak: „Feszítsd keresztre!”`,
    // 14
    `Pilátus megkérdezte: „Miért? Mi rosszat tett?”
De azok csak még hangosabban ordították: „Feszítsd keresztre!”`,
    // 15
    `Mivel Pilátus eleget akart tenni a nép kívánságának, szabadon engedte Barabbást. Jézust pedig megkorbácsoltatta, és átadta a katonáknak, hogy feszítsék keresztre - így végezzék ki.`,
    // 16
    `A katonák bevezették Jézust a helytartói palota belső udvarába, és összehívták az egész csapatot.`,
    // 17
    `Jézusra bíborszínű köpenyt adtak, majd tövises ágakból koszorút fontak, és a fejébe nyomták.`,
    // 18
    `Azután így csúfolták: „Éljen a zsidók királya!”`,
    // 19
    `Majd nádszállal ütögették a fejét, leköpdösték, és gúnyolódva térdet hajtottak előtte.`,
    // 20
    `Végül levették róla a bíbor köpenyt, ismét ráadták a saját ruháit, majd elvezették, hogy megfeszítsék.`,
    // 21  ~ Jézus kivégzése: a keresztre feszítés (#V) ~
    `Útközben szembe jött velük egy férfi, aki éppen a földjéről tért vissza. Simonnak hívták, és Cirénéből származott, ő volt Alexander és Rufusz apja. Simont a katonák arra kényszerítették, hogy Jézus helyett vigye a keresztfát.`,
    // 22
    `Kimentek a „Golgota” nevű helyre. Ez a szó azt jelenti: „Koponya-hely”.`,
    // 23
    `Ott mirhával kevert bort kínáltak Jézusnak, de ő nem akarta meginni.`,
    // 24
    `Ezután keresztre feszítették, a ruháit pedig szétosztották, és kisorsolták egymás között.`,
    // 25
    `Reggel kilenc óra volt, amikor megfeszítették.`,
    // 26
    `Felirat is volt a kereszten, ez mutatta, miért ítélték el: „ a zsidók királya ”.`,
    // 27
    `Jézussal együtt két rablót is megfeszítettek, egyiket a bal, másikat pedig a jobb oldalán.`,
    // 28
    `És így teljesedett be az Írás: »A bűnösök közé számították.«`,
    // 29
    `A járókelők gúnyolták és szidalmazták Jézust. Fejüket csóválva mondták: „Szóval, te vagy, aki lerombolod a Templomot, és három nap alatt újra felépíted?!`,
    // 30
    `Akkor most gyere le a keresztről, és mentsd meg magad!”`,
    // 31
    `A főpapok és a törvénytanítók szintén gúnyolták Jézust, és ezt mondták egymásnak: „Másokat megmentett, magát mégsem tudja megmenteni!`,
    // 32
    `Ha tényleg ő a Messiás, Izráel királya, akkor most szálljon le a keresztről, majd akkor hiszünk benne!” Még azok is szidalmazták, akiket vele együtt feszítettek meg.`,
    // 33  ~ Jézus halála (#W) ~
    `Délben elsötétült az ég, és délután három óráig sötétség borította az egész földet.`,
    // 34
    `Három órakor Jézus hangosan felkiáltott: „ Elói, Elói, lámá sabaktáni? ” Ez azt jelenti: „Istenem, Istenem, miért hagytál el engem?” (#y)`,
    // 35
    `Néhányan, akik ott álltak, hallották, és ezt mondták: „Halljátok? Illést hívja!” (#z)`,
    // 36
    `Egyikük gyorsan elfutott, ecetbe mártott egy szivacsot, felszúrta egy nádszál végére, majd Jézusnak nyújtotta, hogy igyon, és ezt mondta: „Lássuk, eljön-e érte Illés, hogy levegye a keresztről!”`,
    // 37
    `Ekkor Jézus hangosan felkiáltott, és kilehelte a lelkét.`,
    // 38
    `Ebben a pillanatban a Templom belsejében a függöny fölülről lefelé, egészen az aljáig kettéhasadt.`,
    // 39
    `A római százados, aki ott állt a kereszttel szemben, látva, hogy Jézus hogyan halt meg, így szólt: „Ez az ember valóban Isten Fia volt!”`,
    // 40
    `Volt ott néhány asszony, akik távolról figyelték, mi történik. Köztük volt Mária, a kis Jakab és József anyja, és Mária Magdalén, meg Salómé,`,
    // 41
    `akik más asszonnyal együtt követték és szolgálták Jézust Galileában, s vele együtt jöttek fel Jeruzsálembe.`,
    // 42  ~ Jézus temetése (#X) ~
    `Mivel az a nap az előkészület napja, azaz a szombat előtti nap volt, és mivel már közeledett az este,`,
    // 43
    `az Arimátiából való József bátran Pilátushoz ment, és elkérte tőle Jézus holttestét. Ez a József a Főtanács tagja volt, és az emberek nagyon tisztelték. Ő is várta Isten Királyságának eljövetelét.`,
    // 44
    `Pilátus nem akarta elhinni, hogy Jézus ilyen hamar meghalt. Ezért magához hívatta a századost, és megkérdezte tőle, hogy valóban meghalt-e már.`,
    // 45
    `Amikor a százados jelentette neki, hogy valóban így van, Pilátus megparancsolta, hogy adják át a holttestet Józsefnek.`,
    // 46
    `József lenvásznat vásárolt, azután levette Jézus holttestét a keresztről, és a vászonba göngyölve elhelyezte egy sziklasírba. Ezután a nagy zárókövet a sír bejárata elé gördítették.`,
    // 47
    `Mária, József anyja és Mária Magdalén látták, hogy hová tették Jézus testét.`
  ],
  [
    // 16  ~ Jézus feltámadásának örömhíre (#Y) ~
    `Miután elmúlt a szombat, Mária, a Jakab anyja és Mária Magdalén, meg Salómé illatszereket vásároltak, hogy megkenjék Jézus holttestét.`,
    // 2
    `A hét első napján kora reggel, napkeltekor kimentek a sírhoz.`,
    // 3
    `Közben azt kérdezték egymástól: „Ki fogja elgördíteni nekünk azt a súlyos zárókövet a sír bejáratáról?”`,
    // 4
    `Amikor odaértek, látták, hogy valaki már elgördítette a követ, pedig az igen nagy és súlyos volt.`,
    // 5
    `Amikor beléptek a sziklasírba, nagyon megrémültek, mert a jobb oldalon egy fehér ruhás fiatal férfi ült.`,
    // 6
    `Ő így biztatta őket: „Ne féljetek! Tudom, hogy a názáreti Jézust keresitek, akit keresztre feszítettek. Nézzétek, itt a hely, ahová letették a testét, de már nincs itt, mert feltámadt!`,
    // 7
    `Menjetek hát, és mondjátok el a tanítványainak és Péternek is, hogy Jézus előttetek fog Galileába menni. Ott majd meglátjátok őt, pontosan úgy, ahogy előre megmondta.”`,
    // 8
    `Az asszonyok ezután kimentek, és elfutottak onnan, mert annyira megdöbbentek, hogy remegtek. Nem is merték elmondani ezeket senkinek, úgy megijedtek. (#aa)`,
    // 9  ~ A feltámadt Jézus megjelenik tanítványainak (#Z) ~
    `Miután a hét első napjának kezdetén feltámadt, Jézus először Mária Magdalénnek jelent meg, akiből korábban hét gonosz szellemet űzött ki.`,
    // 10
    `Mária azonnal elment, és elmondta ezt Jézus tanítványainak, akik gyászolták és siratták Jézust.`,
    // 11
    `Elmondta nekik, hogy Jézus él, és hogy ő találkozott is vele, de a tanítványok nem hittek neki.`,
    // 12
    `Ezután Jézus más alakban jelent meg két tanítványának, akik éppen vidékre mentek.`,
    // 13
    `Ez a két tanítvány visszatért Jeruzsálembe, és hírt adott a többieknek. De azok nekik sem hitték el, hogy Jézus feltámadt.`,
    // 14  ~ Kiküldi a tanítványait (#AA) ~
    `Később Jézus megjelent a tizenegy tanítványának is, amikor éppen az asztalnál ültek, és ettek. Szemükre vetette, hogy mennyire hitetlenek és keményszívűek: hogy nem hittek azoknak, akik feltámadása után látták őt.`,
    // 15
    `Majd ezt mondta nekik: „Menjetek el a világ minden részére, és hirdessétek az örömüzenetet mindenkinek!`,
    // 16
    `Aki hisz és bemerítkezik, az üdvözülni fog. De aki nem hisz, az kárhoztató ítélet alá kerül.`,
    // 17
    `Akik hisznek, azokat ezek a jelek fogják követni: a nevemben gonosz szellemeket űznek ki; új nyelveken szólnak;`,
    // 18
    `kígyókat fognak meg, vagy halálos mérget isznak, de az nem árt nekik; ráteszik a kezüket a betegekre, azok pedig meggyógyulnak.”`,
    // 19  ~ Jézus visszatér a Mennybe (#AB) ~
    `Miután az Úr Jézus beszélt a tanítványaival, felvitték a Mennybe, és ott Isten jobb oldalára ült.`,
    // 20
    `Az apostolok pedig elmentek, és mindenhol kihirdették Isten üzenetét. Az Úr együttműködött velük, és hitelesítette az üzenetet természetfeletti jelekkel, amelyek kísérték az üzenet hirdetését.`
  ]
];

const lk = [
  [
    // 1  ~ Bevezetés ~
    `Sokan próbáltak már beszámolni azokról a dolgokról, amelyek közöttünk történtek, s amelyek által Isten terve megvalósult.`,
    // 2
    `Ugyanazokat írták le, amelyekről mi is hallottunk azoktól, akik kezdettől fogva a saját szemükkel látták mindezt, és akik hirdették Isten üzenetét.`,
    // 3
    `Jómagam kezdettől fogva mindennek gondosan utána jártam, s úgy gondoltam, hogy szép rendben én is írásba foglalom mindezeket egy könyvben a számodra, tisztelt Teofilus.`,
    // 4
    `Így majd meggyőződhetsz azoknak a dolgoknak a hitelességéről, amelyekre tanítottak téged.`,
    // 5  ~ Zakariás és Erzsébet ~
    `Abban az időben, amikor Heródes volt Júdea királya, élt egy Zakariás nevű pap, aki szolgálati beosztása szerint Abijá csoportjához tartozott. Felesége, Erzsébet is Áron családjából származott.`,
    // 6
    `Isten elfogadta és kedvelte Zakariást és Erzsébetet, akik minden tekintetben az Örökkévaló parancsai és rendelkezései szerint, feddhetetlenül és igazságosan éltek.`,
    // 7
    `Gyermekük azonban nem született, mivel Erzsébet meddő volt, s abban az időben már mind a ketten idősek voltak.`,
    // 8
    `Zakariás a saját papi csoportjában szolgált Isten előtt a Templomban. Történt egyszer, hogy amikor az ő csoportjára került a sor,`,
    // 9
    `a szokásos sorshúzás őt jelölte ki, hogy bemenjen az Örökkévaló Templomába, és ott illatáldozatot mutasson be.`,
    // 10  ~ Gábriel megjelenik Zakariásnak ~
    `Miközben Zakariás a Templomban az áldozati szertartást végezte - a nép pedig kint imádkozott -,`,
    // 11
    `az Örökkévaló egyik angyala megjelent az illatáldozati oltár jobb oldalán.`,
    // 12
    `Zakariás nagyon megdöbbent, és félelem fogta el.`,
    // 13
    `Az angyal azonban így bátorította: „Ne félj Zakariás, mert Isten meghallgatta az imádságodat! Feleséged, Erzsébet fiút fog szülni neked, akit nevezz Jánosnak!`,
    // 14
    `Megszületésekor ujjongó öröm tölt be téged, és sokan fognak veled együtt örülni a megérkezésének,`,
    // 15
    `mert ez a fiú Isten nagy embere lesz! Nem szabad bort vagy más részegítő italt innia, és már az édesanyja méhétől kezdve be fogja tölteni a Szentlélek.`,
    // 16
    `Izráel népéből sokakat visszatérít majd az Örökkévalóhoz, Istenükhöz.`,
    // 17
    `Ez a fiú az Úr előtt fog menni Illés lelkével és erejével, hogy az apák szívét a gyermekeikhez fordítsa, hogy az engedetleneket bölcs és igazságos gondolkozásúvá tegye, és hogy az Örökkévaló számára felkészítse a népet.”`,
    // 18
    `Zakariás így válaszolt az angyalnak: „Hogyan bizonyosodhatok meg felőle, hogy mindez valóban be fog teljesedni, hiszen öreg vagyok, és feleségem is idős már.”`,
    // 19
    `Az angyal azt felelte: „Én Gábriel vagyok, aki mindig Isten előtt állok, hogy szolgálatára legyek. Ő küldött hozzád, hogy beszéljek veled, és elhozzam ezt az örömhírt.`,
    // 20
    `De jól jegyezd meg: most megnémulsz, és mindaddig nem tudsz beszélni, amíg ez meg nem történik, mivel nem hittél a szavamnak. Amit pedig mondtam, az a maga idejében maradéktalanul be fog teljesedni.”`,
    // 21  ~ Erzsébet gyermeket vár ~
    `Az emberek ezalatt várták Zakariást, és csodálkoztak, hogy miért marad olyan sokáig a Templomban.`,
    // 22
    `Amikor végre kijött, nem tudott egy szót sem szólni, csak a kezével intett. Ekkor megértették, hogy látomást látott.`,
    // 23
    `Amikor pedig letelt a szolgálata, hazament.`,
    // 24
    `Nem sokkal ezután Erzsébet áldott állapotba került, s a következő öt hónapban ki sem mozdult a házukból. Ezt mondta:`,
    // 25
    `„Hát így tett velem az Örökkévaló, amikor rám tekintett, és elvette meddőségem szégyenét!”`,
    // 26  ~ Gábrielt Isten Máriához küldi ~
    `Később, amikor Erzsébet már terhessége hatodik hónapjában volt, Isten elküldte Gábriel angyalt a galileai Názáretbe`,
    // 27
    `egy szűzhöz, kit Máriának hívtak. Ezt a leányt egy József nevű férfi - aki Dávid király leszármazottja volt - már eljegyezte magának feleségül, de még nem házasodtak össze.`,
    // 28
    `Gábriel megjelent Máriának, és így köszöntötte: „Üdvözöllek! Az Örökkévaló kegyelmébe fogadott téged, és veled van.”`,
    // 29
    `Mária megdöbbent, és zavarban volt. Azon tűnődött, vajon mit jelenthet ez a szokatlan köszöntés.`,
    // 30
    `De az angyal így folytatta: „Ne félj, Mária, mert nagyon kedves vagy Istennek!`,
    // 31
    `Figyelj rám! Áldott állapotba kerülsz, és fiad fog születni, akit nevezz el Jézusnak.`,
    // 32
    `Ő hatalmas lesz, és a Magasságos Isten Fiának fogják hívni. Ősapjának, Dávidnak trónjára fogja őt ültetni Isten, az Örökkévaló.`,
    // 33
    `Így fog uralkodni mindörökké Jákób leszármazottjai fölött, és királyi uralma soha nem ér véget.”`,
    // 34
    `Mária ezt kérdezte: „Hogyan lehetséges ez? Hiszen én még szűz vagyok!”`,
    // 35
    `Az angyal így válaszolt: „A Szentlélek száll rád, és a Magasságos Isten ereje vesz körül téged. Ezért a gyermek, akit majd megszülsz, szent lesz, és Isten Fiának nevezik.`,
    // 36
    `Nézd, a rokonod, Erzsébet is áldott állapotban van, és ez már a terhessége hatodik hónapja! Idős kora ellenére fiút fog szülni, pedig mindenki meddőnek tartotta!`,
    // 37
    `Látod, Isten számára semmi sem lehetetlen!”`,
    // 38
    `Mária így válaszolt: „Az Örökkévaló szolgálóleánya vagyok, történjen velem minden úgy, ahogy mondtad!” Ezután az angyal elment.`,
    // 39  ~ Mária meglátogatja Erzsébetet ~
    `Mária ekkor útra készült, és sietve elment Júdea hegyvidékének egyik városába.`,
    // 40
    `Bement Zakariás házába, és köszöntötte Erzsébetet.`,
    // 41
    `Amikor Erzsébet meghallotta Mária hangját, a méhében lévő magzat örömében repesni kezdett, és a Szentlélek betöltötte Erzsébetet.`,
    // 42
    `Nagy örömmel felkiáltott: „Áldott vagy te, Mária - jobban, mint bárki más az asszonyok között! Áldott a gyermeked is, akit a méhedben hordozol!`,
    // 43
    `Hogy lehet az, hogy az Uram anyja vagy, mégis te jössz hozzám?`,
    // 44
    `Mert abban a pillanatban, amikor a köszöntésedet meghallottam, a gyermekem örömében repesni kezdett a méhemben.`,
    // 45
    `Bizony boldog és áldott, aki hittel fogadja, amit az Örökkévaló mond neki, mert az beteljesedik!”`,
    // 46  ~ Mária dicsőíti Istent ~
    `Mária pedig ezt mondta:`,
    // 47
    `„Dicsérem az Örökkévalót teljes szívemből-lelkemből,
     szellemem ujjong Istennek, Üdvözítőmnek,`,
    // 48
    `     mert rátekintett alázatos szolgálóleányára!
Bizony, mostantól fogva minden nemzedék
     boldognak és áldottnak mond engem,`,
    // 49
    `mert nagy dolgot tett velem a Hatalmas!
     Szent a neve!`,
    // 50
    `Nemzedékről nemzedékre
     irgalmas azok iránt, akik tisztelik és félik őt.`,
    // 51
    `Kinyújtotta karját, megmutatta erejét:
     szétszórta a büszkéket, akik magukat nagyra tartják,`,
    // 52
    `ledöntötte trónjukról az uralkodókat,
     az alázatosakat pedig felemelte.`,
    // 53
    `A szükségben lévőket elhalmozta minden jóval,
     a gazdagokat pedig üres kézzel küldte el.`,
    // 54
    `Segítségére sietett szolgájának, Izráelnek,
     mert nem felejtette el ígéretét,
     hogy könyörületesen bánik velünk.`,
    // 55
    `Mert ezt ígérte őseinknek,
     Ábrahámnak és az ő gyermekeinek mindörökké.”`,
    // 56
    `Ezután Mária még körülbelül három hónapig maradt Erzsébetnél, azután hazament.`,
    // 57  ~ Bemerítő János születése ~
    `Amikor eljött az ideje, Erzsébet fiút szült.`,
    // 58
    `Szomszédai és rokonai megtudták, milyen jóságos volt hozzá az Örökkévaló, és együtt örültek vele.`,
    // 59
    `A nyolcadik napon eljöttek, hogy körülmetéljék a gyermeket. Az apja nevéről Zakariásnak akarták elnevezni,`,
    // 60
    `de Erzsébet ezt mondta: „Nem, János legyen a neve!”`,
    // 61
    `Azok csodálkoztak: „De hiszen senki sincs a rokonságban, akit így hívnak!”`,
    // 62
    `Majd intettek Zakariásnak, hogy milyen nevet akar adni a gyermekének.`,
    // 63
    `Ő kért egy írótáblát, és ezt írta rá: „János a neve”. Ezen mindenki elcsodálkozott.`,
    // 64
    `Ekkor hirtelen megoldódott Zakariás nyelve, megszólalt, és Istent dicsérte.`,
    // 65
    `A környék lakóit pedig istenfélelem töltötte be, és Júdea egész hegyvidékén mindenki erről beszélt.`,
    // 66
    `Akik csak hallottak róla, mind a szívükbe vésték, és azon gondolkoztak: „Vajon mi lesz ebből a gyermekből?” Mert az Örökkévaló kétségtelenül a gyermek felett tartotta a kezét.`,
    // 67  ~ Zakariás dicsőíti Istent ~
    `Zakariást ekkor betöltötte a Szentlélek, és így prófétált:`,
    // 68
    `„Áldott legyen az Örökkévaló, Izráel Istene,
     mert segítségére sietett népének,
     és megváltást hozott nekünk!`,
    // 69
    `Hatalmas Szabadítót küldött hozzánk
     szolgájának, Dávidnak családjából,`,
    // 70
    `ahogyan ezt ősidőktől fogva,
     szent prófétái által megígérte,`,
    // 71
    `hogy megszabadítson ellenségeinktől,
     és gyűlölőink kezéből kimentsen,`,
    // 72
    `hogy megmutassa ősapáinknak kegyelmét,
     s hogy megtartsa velük kötött szent szövetségét.`,
    // 73
    `A szövetséget, amelyet Ábrahámnak,
     ősapánknak esküvel erősített:`,
    // 74
    `megígérte, hogy miután ellenségeinktől megszabadít,
     félelem nélkül szolgáljuk majd Istenünket,`,
    // 75
    `s igazságban és szentségben élhetünk színe előtt
     életünk minden napján.`,
    // 76
    `Te pedig, fiúcska,
     a Magasságos Isten prófétája leszel,
     mert az Úr előtt készíted az utat,`,
    // 77
    `az üdvösség ismeretére tanítod Isten népét,
     amikor majd bűnbocsánatot nyernek,`,
    // 78
    `     Istenünk nagy irgalmasságából!
Ezért meg fog látogatni minket
     a Napfelkelte a magasságból,`,
    // 79
    `hogy világosság ragyogjon azokra,
     akik a halál árnyékában, sötétben ülnek,
és a békesség útjára vezessen bennünket.”`,
    // 80
    `A gyermek János növekedett, és egyre erősödött lélekben. A pusztában élt egészen addig, amíg nyilvánosan hirdetni kezdte Isten üzenetét Izráel népének.`
  ],
  [
    // 2  ~ Jézus születése (#A) ~
    `Abban az időben Augustus császár parancsot adott, hogy írjanak össze mindenkit a Római Birodalom területén.`,
    // 2
    `Ez az első népszámlálás akkor történt, amikor Szíriában Cirénius volt a kormányzó.`,
    // 3
    `Mindenki útrakelt hát, hogy a saját városába menjen, és ott nyilvántartásba vegyék.`,
    // 4
    `József is elindult a galileai Názáretből, hogy a júdeai Betlehembe menjen, Dávid király szülővárosába. József ugyanis Dávid családjából származott.`,
    // 5
    `Vele utazott eljegyzett menyasszonya, Mária is, aki gyermeket várt.`,
    // 6
    `Amíg Betlehemben voltak, elérkezett Mária szülésének ideje. Meg is szülte elsőszülött fiát,`,
    // 7
    `bepólyálta, és a jászolba fektette, mivel a szálláson nem volt hely a számukra.`,
    // 8  ~ A betlehemi pásztorok felkeresik a Messiást ~
    `Azon az éjszakán a Betlehem környéki mezőkön pásztorok legeltették a nyájukat.`,
    // 9
    `Egyszer csak megjelent előttük az Örökkévaló egyik angyala, és az Örökkévaló dicsősége körülragyogta őket. A pásztorok nagyon megrémültek,`,
    // 10
    `de az angyal ezt mondta nekik: „Ne féljetek, mert nagy örömhírt hoztam nektek, amelynek az egész nép örülni fog!`,
    // 11
    `Megszületett ma nektek a Szabadító a Dávid városában, ő az Úr, a Messiás.`,
    // 12
    `Erről a jelről ismeritek fel: egy csecsemőt fogtok találni, aki bepólyálva fekszik a jászolban.”`,
    // 13
    `Ekkor hirtelen hatalmas angyali sereg jelent meg, és együtt dicsérték Istent:`,
    // 14
    `„Dicsőség Istennek a Mennyben,
     és békesség a földön azoknak,
     akik Isten tetszése szerint élnek!”`,
    // 15
    `Miután az angyalok visszatértek a Mennybe, a pásztorok ezt mondták egymásnak: „Menjünk hát Betlehembe, és nézzük meg, ami ott történt! Hadd lássuk, amiről az Örökkévaló szólt nekünk!”`,
    // 16
    `Ezzel sietve útnak indultak. Meg is találták Máriát, Józsefet, és a jászolban fekvő csecsemőt.`,
    // 17
    `Amikor meglátták, elmondták, amit az angyaltól hallottak róla.`,
    // 18
    `Ezen mindenki nagyon csodálkozott.`,
    // 19
    `Mária azonban a szívébe zárta mindezt, és később is sokat gondolkodott rajta.`,
    // 20
    `Ezután a pásztorok visszatértek a nyájukhoz, dicsérve és magasztalva Istent mindazért, amit láttak és hallottak - mert minden pontosan úgy történt, ahogy az angyal mondta.`,
    // 21
    `Amikor a gyermek nyolc napos lett, körülmetélték, és Jézusnak nevezték el, ahogyan az angyal nevezte, mielőtt még megfogant volna.`,
    // 22  ~ Jézust bemutatják a Templomban ~
    `Amikor elérkezett Mária megtisztulásának ideje, (#a) elvitték a csecsemő Jézust Jeruzsálembe, hogy ott a Mózes Törvénye szerint az Örökkévalónak bemutassák.`,
    // 23
    `Az Örökkévaló Törvényében ugyanis meg van írva: „Minden elsőszülött fiút az Örökkévalónak kell szentelni.” (#b)`,
    // 24
    `Elmentek tehát Jeruzsálembe, hogy az Örökkévaló Törvénye szerint egy pár gerlicét vagy galambfiókát (#c) áldozzanak a Templomban.`,
    // 25  ~ Simeon felismeri a Messiást ~
    `Élt Jeruzsálemben egy Simeon nevű igaz és istenfélő ember, aki kitartóan várta azt az időt, amikor Isten felkarolja Izráel népét. A Szentlélek állandóan Simeonon nyugodott, és`,
    // 26
    `megmutatta neki, hogy nem hal meg addig, amíg meg nem látja a Messiást, akit az Örökkévaló küld.`,
    // 27
    `Simeont a Szentlélek éppen akkor vezette a Templom területére, amikor Jézus szülei behozták a gyermeket, hogy megtegyék, amit a Törvény előírt.`,
    // 28
    `Ekkor Simeon a karjába vette a csecsemő Jézust, és így dicsérte Istent:`,
    // 29
    `„Itt az idő, Uram és Parancsolóm,
     hogy rabszolgádat békében elbocsásd,
     ahogy megígérted,`,
    // 30
    `mert ma saját szememmel láttam az Üdvösséget, (#d)`,
    // 31
    `     akit elküldtél minden nép szeme láttára,`,
    // 32
    `hogy a kijelentés világossága legyen
     az összes nemzeteknek,
és dicsősége népednek, Izráelnek!”`,
    // 33
    `Jézus apja és anyja nagyon elcsodálkoztak ezeken a szavakon.`,
    // 34
    `Ezután Simeon megáldotta őket. Jézus anyjának, Máriának pedig ezt mondta: „Nézd, ezt a gyermeket Isten arra rendelte, hogy Izráelben sokan elbukjanak miatta, és sokan felemelkedjenek általa. Arra rendelte, hogy Istentől származó jel legyen, amely sokakból ellenkezést vált ki.`,
    // 35
    `A te lelkedet is átszúrja a fájdalom, mint az éles kard. Mindez azért történik, hogy lelepleződjön, mi van az emberek szívében.”`,
    // 36  ~ Anna is felismeri Jézust ~
    `Ugyanakkor volt ott a Templomban egy nyolcvannégy éves próféta-asszony is. Annának hívták, Fánuel leánya volt, Áser törzsébe tartozott, és hétévi házasság után maradt özvegyen.`,
    // 37
    `Nem hagyta el a Templom területét, hanem éjjel-nappal Istent szolgálta böjtöléssel és imádkozással.`,
    // 38
    `Abban az órában Anna is odalépett hozzájuk, hálát adott Istennek, azután mindazoknak beszélt Jézusról, akik Jeruzsálem megváltását várták.`,
    // 39  ~ József és Mária visszatér Názáretbe ~
    `Miután József és Mária mindent megtett, amit az Örökkévaló Törvénye kívánt, hazatértek Galileába, Názáret városába.`,
    // 40
    `A gyermek pedig növekedett, egyre bölcsebb és erősebb lett. Isten tetszése és jókedve nyugodott rajta.`,
    // 41  ~ A tizenkét éves Jézus Jeruzsálemben ~
    `Jézus szülei minden évben följártak Jeruzsálembe a Páska ünnepére.`,
    // 42
    `Amikor Jézus tizenkét éves lett, szokásuk szerint ismét felmentek az ünnepre.`,
    // 43
    `Utána hazaindultak, Jézus azonban Jeruzsálemben maradt,`,
    // 44
    `de ezt a szülei nem vették észre. Azt gondolták, hogy a gyermek az útitársaik között van. Már egy napja úton voltak, amikor keresni kezdték Jézust a rokonaik és barátaik között.`,
    // 45
    `Miután nem találták, visszamentek Jeruzsálembe, hogy ott keressék tovább.`,
    // 46
    `Három nap múlva találtak rá a Templom területén a törvénytanítók között. A gyermek Jézus hallgatta és kérdezgette őket.`,
    // 47
    `Aki csak hallotta, mind nagyon elcsodálkozott, hogy milyen értelmes, és milyen bölcsen válaszol a kérdésekre.`,
    // 48
    `Amikor a szülei meglátták Jézust, megdöbbentek. Anyja pedig ezt mondta: „Fiam, miért tetted ezt velünk? Apád és én nagyon aggódtunk érted, és mindenhol kerestünk!”`,
    // 49
    `Jézus így válaszolt: „Miért kerestetek? Nem tudtátok, hogy nekem Atyám dolgaival kell foglalkoznom?”`,
    // 50
    `De a szülei nem értették, miről beszél.`,
    // 51
    `Ezután Jézus visszatért velük Názáretbe, és engedelmeskedett nekik. Mária pedig a szívében őrizte ezeket a dolgokat.`,
    // 52
    `Jézus egyre bölcsebb lett, és felnőtté vált. Isten számára egyre kedvesebb volt, és az emberek is mind jobban kedvelték.`
  ],
  [
    // 3  ~ Bemerítő János utat készít a Messiásnak (#B) ~
    `Tibérius császár uralkodásának tizenötödik évében Poncius Pilátus volt Júdea helytartója; Heródes volt Galilea negyedes fejedelme; Heródes bátyja, Fülöp volt Iturea és Trakhónitisz negyedes fejedelme; Lüszániász pedig Abiléné negyedes fejedelme.`,
    // 2
    `Kajafás és Annás voltak a főpapok.
Ebben az időben szólt az Örökkévaló Jánoshoz, Zakariás fiához a pusztában.`,
    // 3
    `János bejárta a Jordán egész vidékét. Hirdette mindenkinek, hogy merítkezzenek be, ezzel fejezzék ki, hogy valóban megváltoztatják a gondolkodásukat és visszatérnek Istenhez - Isten pedig megbocsátja a bűneiket.`,
    // 4
    `Ézsaiás próféta könyvében így van ez megírva:
„Egy hang kiált a pusztában:
»Készítsetek utat az Örökkévalónak,
     egyengessétek ösvényeit,`,
    // 5
    `töltsetek fel minden völgyet,
     lapítsátok le a dombokat és hegyeket,
egyenesítsétek ki a görbe ösvényeket,
     simítsátok el a göröngyöket,`,
    // 6
    `hogy mindenki meglássa
     az Istentől származó üdvösséget!«” (#e)`,
    // 7
    `Az emberek tömegesen mentek Jánoshoz, hogy tanítása szerint bemerítkezzenek. János ezt mondta nekik: „Ti, mérges kígyók! Ki figyelmeztetett benneteket, hogy meneküljetek Isten közelgő haragja elől?`,
    // 8
    `A tetteitekkel bizonyítsátok, hogy a gondolkodásotok és az életetek valóban megváltozott! Ne hitegessétek magatokat azzal, hogy: »Mi Ábrahám leszármazottjai vagyunk!« Mert igazán mondom nektek, hogy Isten még ezekből a kövekből is támaszthat utódokat Ábrahámnak!`,
    // 9
    `A fejszét már fölemelték, hogy gyökerestül kivágják a fákat. Bizony ki is vágnak és tűzbe dobnak minden fát, amely nem terem jó gyümölcsöt!”`,
    // 10
    `Az emberek ekkor ezt kérdezték: „Akkor mit tegyünk?”`,
    // 11
    `János így felelt: „Akinek két ruhája van, az egyiket adja annak, akinek egy sincs! Akinek van mit ennie, adjon belőle annak, aki éhezik!”`,
    // 12
    `Néhány vámszedő is eljött Jánoshoz bemerítkezni. Ők is megkérdezték: „Mester, mi mit tegyünk?”`,
    // 13
    `János ezt mondta nekik: „Ne szedjetek be több adót és vámot, mint amennyi elő van írva!”`,
    // 14
    `Katonák is jöttek hozzá, és ők is megkérdezték: „Hát mi mit tegyünk?”
János ezt válaszolta: „Senkitől se vegyetek el pénzt erőszakkal, vagy zsarolással! Elégedjetek meg a zsoldotokkal!”`,
    // 15
    `A sokaság feszülten és izgatottan várta, hogy a Messiás hamarosan megjelenik. Mind azon tanakodtak, hogy talán maga János lehet a Messiás.`,
    // 16
    `János azonban világosan megmondta nekik: „Látjátok, én vízbe merítelek be titeket, de jön majd valaki, aki sokkal hatalmasabb nálam. Még arra sem vagyok méltó, hogy a saruját levegyem a lábáról. Ő majd Szentlélekbe és tűzbe fog bemeríteni titeket.`,
    // 17
    `Az ő kezében van a szórólapát, amellyel elválasztja a búzát a polyvától. A tiszta búzát magtárába gyűjti, a polyvát pedig olthatatlan tűzzel megégeti.”`,
    // 18
    `Sok mást is mondott János, amivel figyelmeztette és bátorította a népet. Így hirdette nekik az örömüzenetet.`,
    // 19  ~ Heródes börtönbe veti Bemerítő Jánost ~
    `Bemerítő János sokszor figyelmeztette és felelősségre vonta Heródes fejedelmet a gonosztettei miatt, és Heródiás miatt is, aki Heródes testvérének volt a felesége.`,
    // 20
    `Heródes a gonoszságait még azzal is tetézte, hogy börtönbe záratta Jánost.`,
    // 21  ~ Jézus is bemerítkezik (#C) ~
    `Mielőtt Bemerítő Jánost börtönbe vetették volna, sokan bemerítkeztek a tanítása szerint. Jézus is bemerítkezett, és miközben imádkozott, megnyílt a Menny,`,
    // 22
    `és leszállt rá a Szentlélek látható alakban, mint egy galamb. A Mennyből pedig hang hallatszott: „Te vagy a Fiam, szeretlek téged, és benned gyönyörködöm.”`,
    // 23  ~ Jézus családfája (#D) ~
    `Jézus körülbelül harminc éves volt, amikor megkezdte nyilvános működését. Az emberek József fiának gondolták.
Éli fia volt.`,
    // 24
    `Éli Mattát fia,
Mattát Lévi fia,
Lévi Melki fia,
Melki Jannáj fia,
Jannáj József fia,`,
    // 25
    `József Mattatiás fia,
Mattatiás Ámós fia,
Ámos Náhum fia,
Náhum Heszli fia,
Heszli Naggai fia,`,
    // 26
    `Naggai Mahat fia,
Mahat Mattatiás fia,
Mattatiás Simei fia,
Simei Jószek fia,
Jószek Jóda fia,`,
    // 27
    `Jóda Jóhánán fia,
Jóhánán Résa fia,
Résa Zerubbábel fia,
Zerubbábel Sealtiel fia,
Sealtiel Néri fia,`,
    // 28
    `Neri Melki fia,
Melki Addi fia,
Addi Kószám fia,
Kószám Elmadám fia,
Elmadám Ér fia,`,
    // 29
    `Ér Jézus fia,
Jézus Eliézer fia,
Eliézer Jórim fia,
Jórim Mattát fia,
Mattát Lévi fia,`,
    // 30
    `Lévi Simeon fia,
Simeon Júda fia,
Júda József fia,
József Jónám fia,
Jónám Eljákim fia,`,
    // 31
    `Eljákim Melea fia,
Melea Menna fia,
Menna Mattáta fia,
Mattáta Nátán fia,
Nátán Dávid fia,`,
    // 32
    `Dávid Isai fia,
Isai Óbed fia,
Óbed Boáz fia,
Boáz Szalmón fia,
Szalmón Nahsón fia,`,
    // 33
    `Nahsón Aminádáb fia,
Aminádáb Admin fia,
Admin Arni fia,
Arni Heszrón fia,
Heszrón Fáresz fia,
Fáresz Júda fia,`,
    // 34
    `Júda Jákób fia,
Jákób Izsák fia,
Izsák Ábrahám fia,
Ábrahám Táré fia,
Táré Náhór fia,`,
    // 35
    `Náhor Szerug fia,
Szerug Reu fia,
Reu Peleg fia,
Peleg Héber fia,
Héber Selah fia,`,
    // 36
    `Selah Kénán fia,
Kénán Arpaksád fia,
Arpaksád Sém fia,
Sém Nóé fia,
Nóé Lámek fia,`,
    // 37
    `Lámek Metusélah fia,
Metusélah Hénók fia,
Hénok Járed fia,
Járed Mahalalél fia,
Mahalalél Kénán fia,`,
    // 38
    `Kénán Enós fia,
Enós Sét fia,
Sét Ádám fia,
Ádám pedig Isten fia volt.`
  ],
  [
    // 4  ~ Jézust próbára teszi a Sátán (#E) ~
    `Jézus a Szentlélekkel beteljesedve visszatért a Jordán folyótól. A Szentlélek ekkor kivezette a pusztába,`,
    // 2
    `ahol Jézus negyven napot töltött, a Sátán pedig kísértésekkel próbára tette. Eközben Jézus semmit sem evett, de mikor a negyven nap eltelt, megéhezett.`,
    // 3
    `Ekkor a Sátán azt mondta neki: „Ha valóban te vagy az Isten Fia, akkor parancsold meg ennek a kőnek, hogy változzon kenyérré!”`,
    // 4
    `Jézus így válaszolt: „Azt mondja az Írás: »Nemcsak a kenyér élteti az embert.«” (#f)`,
    // 5
    `A Sátán ezután egy pillanat alatt megmutatta Jézusnak a földkerekség összes királyságát,`,
    // 6
    `majd ezt mondta: „Neked adom ezeknek a királyságoknak minden hatalmát és dicsőségét. Mindez az enyém, és annak adom, akinek akarom.`,
    // 7
    `Ha tehát engem imádsz, mindez a tiéd lesz.”`,
    // 8
    `Jézus így válaszolt: „Azt mondja az Írás: »Az Örökkévalót, Istenedet imádd, és csak őt szolgáld!«” (#g)`,
    // 9
    `Ezután a Sátán elvitte Jézust Jeruzsálembe. A Templom területének legmagasabb pontjára állította, és ezt mondta: „Ha valóban te vagy az Isten Fia, akkor ugorj le innen!`,
    // 10
    `Mert azt mondja az Írás:
»Angyalainak parancsot ad,
     hogy vigyázzanak rád.« (#h)`,
    // 11
    `Meg azt is mondja:
»A tenyerükön hordoznak,
     hogy kőbe ne üsd a lábad.«” (#i)`,
    // 12
    `Jézus erre így felelt: „De az Írás azt is mondja: »Ne tedd próbára az Örökkévalót, Istenedet!«” (#j)`,
    // 13
    `Ekkor a Sátán felhagyott vele, hogy Jézust próbára tegye. Egy ideig félreállt, és várta a kedvező alkalmat.`,
    // 14  ~ Jézus Galileában kezdi meg szolgálatát (#F) ~
    `Jézus a Szentlélek erejével beteljesedve visszatért Galileába. A híre elterjedt az egész vidéken.`,
    // 15
    `Tanított a zsinagógákban, és mindenki dicsérte.`,
    // 16  ~ Jézus a názáreti zsinagógában (#G) ~
    `Ezután Názáretbe ment, abba a városba, ahol felnevelkedett. Szombaton, szokása szerint elment a zsinagógába. Amikor felállt, hogy az Írásokból felolvasson,`,
    // 17
    `Ézsaiás próféta könyvét adták a kezébe. Kinyitotta a könyvtekercset, és azt a helyet kezdte olvasni, ahol ez van írva:`,
    // 18
    `„Az Örökkévaló Lelke van rajtam,
     mivel felkent engem,
hogy örömhírt mondjak a szegényeknek,
     elküldött, hogy szabadulást hirdessek a foglyoknak,
a vakoknak pedig szemük megnyílását,
     hogy megszabadítsam a szenvedőket és elnyomottakat,`,
    // 19
    `és hirdessem az Örökkévaló kegyelmének idejét.” (#k)`,
    // 20
    `Behajtotta a könyvtekercset, visszaadta a szolgának, és leült. A zsinagógában mindenki várakozva nézett rá.`,
    // 21
    `„Ez az Írás most teljesedett be a fületek hallatára” - mondta nekik.`,
    // 22
    `Mindannyian elismeréssel hallgatták Jézust, és csodálkoztak, hogy a kegyelemnek ezeket az igéit idézi. De azt is kérdezgették egymástól: „Hogyan lehetséges ez? Hát nem ő a József fia?”`,
    // 23
    `Ő pedig így válaszolt nekik: „Tudom, hogy azt a mondást akarjátok idézni: »Orvos, gyógyítsd meg magadat!« Hallottuk, milyen dolgokat tettél Kapernaumban - hát akkor tedd meg itt, a saját városodban is!”`,
    // 24
    `Azután így folytatta: „Igazán mondom nektek: egyetlen prófétát sem fogadnak el a saját városában.`,
    // 25
    `Mondhatom nektek, sok özvegyasszony élt Izráelben Illés idejében, amikor három és fél évig nem esett az eső, és nagy éhínség uralkodott az egész országban.`,
    // 26
    `De Isten egyikükhöz sem küldte Illést, csak a Szidón városa melletti Sareptába, egy özvegyasszonyhoz.`,
    // 27
    `Hasonlóképpen, sok leprás élt Izráelben Elizeus próféta idejében, de egyikük sem gyógyult meg, csak Naámán, pedig ő nem is Izráelből, hanem Szíriából származott.”`,
    // 28
    `Ezen a válaszon a zsinagógában mindenki nagyon felháborodott.`,
    // 29
    `Felkeltek, kiűzték Jézust egészen annak a dombnak a sziklás pereméig, amelyen a városuk épült, hogy lelökjék a mélységbe.`,
    // 30
    `Jézus azonban keresztülment a tömegen, és otthagyta őket.`,
    // 31  ~ A kapernaumi zsinagógában (#H) ~
    `Jézus ezután Galilea egyik városába, Kapernaumba ment. Itt is tanított szombaton a zsinagógában.`,
    // 32
    `Mindenki csodálkozott a tanításán, mert olyan tekintéllyel beszélt, mint aki hatalommal rendelkezik.`,
    // 33
    `A zsinagógában az egyik férfi, akiben gonosz szellem lakott, nagy hangon kiabálni kezdett:`,
    // 34
    `„Mi közünk hozzád, názáreti Jézus? Azért jöttél, hogy elpusztíts minket? Tudom, ki vagy te: az Isten Szentje!”`,
    // 35
    `Jézus azonban ráparancsolt a gonosz szellemre: „Hallgass el! Menj ki belőle!” Ekkor a gonosz szellem mindenki szeme láttára a földre dobta azt az embert, de nem ártott neki, hanem kiment belőle.`,
    // 36
    `Ezen mindenki megdöbbent, és ezt kérdezgették egymástól: „Vajon miféle tanítás ez? Erővel és hatalommal parancsol a gonosz szellemeknek, azok engedelmeskednek neki, és kimennek az emberekből!”`,
    // 37
    `Ezután Jézus híre az egész környéken elterjedt.`,
    // 38  ~ Péter otthonában (#I) ~
    `Jézus a zsinagógából Simon (#l) otthonába ment, ahol Simon anyósa éppen magas lázzal, betegen feküdt. Megkérték Jézust, hogy segítsen rajta.`,
    // 39
    `Jézus megállt az asszony ágya mellett, és ráparancsolt a lázra, amely azonnal el is hagyja a beteget. Az asszony nyomban felkelt, és megvendégelte őket.`,
    // 40  ~ Sok beteget meggyógyít ~
    `Amikor lement a nap, különféle betegségekben szenvedőket hoztak Jézushoz. Ő a kezét rájuk tette, és mindegyiküket meggyógyította.`,
    // 41
    `Sokakból gonosz szellemek is kimentek, akik ezt kiabálták: „Te vagy az Isten Fia!” De Jézus rájuk parancsolt, és nem engedte szólni őket. A gonosz szellemek ugyanis tudták, hogy ő a Messiás.`,
    // 42  ~ Júdea városaiban (#J) ~
    `Másnap Jézus félrevonult egy lakatlan helyre, de a sokaság utánament, megkereste és körülvette. Megpróbálták rábeszélni, hogy maradjon velük,`,
    // 43
    `de ő ezt mondta: „Más városokban is hirdetnem kell az Isten Királyságáról szóló örömüzenetet, mert ezért küldtek.”`,
    // 44
    `Ezzel továbbment, és Júdea zsinagógáiban is hirdette Isten üzenetét.`
  ],
  [
    // 5  ~ A csodálatos halfogás (#K) ~
    `Egyszer a Genezáreti-tó partján nagy tömeg vette körül Jézust, hogy Isten üzenetét hallgassák.`,
    // 2
    `Jézus meglátott a parton két halászbárkát. A halászok éppen akkor szálltak partra, és a hálóikat mosták.`,
    // 3
    `Jézus beszállt az egyik bárkába, amely Simoné volt. Megkérte Simont, hogy evezzen kissé beljebb a vizen. Majd leült a bárkában, és úgy tanította az embereket.`,
    // 4
    `Miután befejezte, Simonhoz fordult: „Evezzetek ki a mély vízre, és engedjétek le a hálóitokat halfogásra!”`,
    // 5
    `Simon így válaszolt: „Mester, egész éjjel keményen dolgoztunk, mégsem fogtunk semmit, de ha te mondod, megteszem.”`,
    // 6
    `Amikor leeresztették, olyan sok halat fogtak, hogy a hálók majdnem szétszakadtak.`,
    // 7
    `Ezért intettek a másik hajóban lévő társaiknak, hogy jöjjenek segíteni. Mindkét hajót annyira megtöltötték halakkal, hogy majdnem elsüllyedtek.`,
    // 8
    `Simon Péter ekkor Jézus lábához borult: „Menj el tőlem, Uram, mert én bűnös vagyok!” - mondta.`,
    // 9
    `A zsákmányt látva ugyanis a halászokat nagy félelem fogta el.`,
    // 10
    `Ugyanígy megdöbbentek Jakab és János is, Zebedeus fiai, akik Simon társai voltak.
Jézus ekkor azt mondta Simonnak: „Ne félj, mostantól kezdve nem halakat, hanem embereket fogsz halászni.”`,
    // 11
    `Ezután a halászok partra húzták a bárkáikat, majd mindent hátrahagyva csatlakoztak Jézushoz.`,
    // 12  ~ Akarom, gyógyulj meg! (#L) ~
    `Az egyik városban, ahol Jézus járt, élt egy leprás férfi. Amikor Jézust meglátta, arcra borult előtte, és így könyörgött neki: „Uram, ha akarod, te meg tudsz gyógyítani!”`,
    // 13
    `Jézus kinyújtotta a kezét, megérintette, és így válaszolt: „Igen, akarom! Gyógyulj meg!” Ekkor a férfiról azonnal eltűnt a lepra.`,
    // 14
    `Jézus megparancsolta neki, hogy erről senkinek se beszéljen, és azt mondta: „Menj, mutasd meg magad a papnak, (#m) és vidd fel az áldozatot a gyógyulásodért, ahogy Mózes parancsolta! Ez legyen a bizonyíték a számukra.”`,
    // 15
    `Jézus híre mégis egyre jobban terjedt, és sokan gyűltek össze, hogy hallgassák, és általa meggyógyuljanak.`,
    // 16
    `Jézus azonban félrevonult valami elhagyatott helyre, hogy egyedül imádkozzon.`,
    // 17  ~ Meggyógyít egy béna férfit (#M) ~
    `Egyik nap, amikor Jézus éppen tanított, farizeusok és törvénytanítók is hallgatták, akik Galilea és Júdea különböző városaiból és Jeruzsálemből érkeztek. Az Örökkévaló ereje volt Jézussal, hogy gyógyítson.`,
    // 18
    `Eközben néhány ember érkezett, akik hordágyon egy megbénult férfit akartak Jézus elé vinni,`,
    // 19
    `a nagy tömeg miatt azonban nem tudtak a közelébe férkőzni. Ezért felmentek a tetőre, kibontották, és úgy eresztették le a hordágyat Jézus elé.`,
    // 20
    `Amikor Jézus látta a hitüket, a beteghez fordult: „Barátom, a bűneid meg vannak bocsátva.”`,
    // 21
    `Erre a törvénytanítók és farizeusok így okoskodtak magukban: „Kicsoda ez, hogy ilyet merészel mondani?! Hiszen ezzel megsérti Istent, aki egyedül jogosult a bűnöket megbocsátani!”`,
    // 22
    `Jézus átlátott rajtuk, és így felelt meg nekik: „Miért okoskodtok így?`,
    // 23
    `Vajon melyik könnyebb, ha azt mondom a bénának: bűneid meg vannak bocsátva! - vagy azt: kelj fel, és menj el?`,
    // 24
    `Győződjetek meg róla: az Emberfia felhatalmazást kapott, hogy itt a földön megbocsássa a bűnöket.”
Ekkor a beteghez fordult: „Én mondom neked, kelj fel, fogd a hordágyadat, és menj haza!”`,
    // 25
    `Az pedig azonnal felállt, felvette a hordágyát, és Istent dicsőítve hazament.`,
    // 26
    `Ezt látva mindenki magán kívül volt a csodálkozástól, dicsérték Istent, istenfélelem fogta el őket, és ezt mondták: „Csodálatos dolgokat láttunk ma!”`,
    // 27  ~ Lévi (Máté) elhívása (#N) ~
    `Jézus ezután továbbment, és meglátott a vámnál egy Lévi nevű vámszedőt. Megszólította: „Kövess engem!”`,
    // 28
    `Lévi ekkor otthagyott mindent, és csatlakozott Jézushoz.`,
    // 29
    `Ezután Lévi nagy vendégséget rendezett Jézus tiszteletére a házában, ahová sok vámszedőt, és másokat is meghívott.`,
    // 30
    `A farizeusok és a törvénytanítók felháborodva kérdezték Jézus tanítványaitól: „Ti miért ültök egy asztalhoz vámszedőkkel és mindenféle egyéb bűnösökkel?”`,
    // 31
    `Azonban Jézus válaszolt nekik: „Nem az egészségeseknek van szükségük orvosra, hanem a betegeknek.`,
    // 32
    `Nem azért jöttem, hogy az igazakat, hanem hogy a bűnösöket hívjam, hogy változtassák meg a gondolkodásukat és térjenek vissza Istenhez.”`,
    // 33  ~ Az új bort új tömlőbe kell tölteni (#O) ~
    `Egyszer a farizeusok ezzel fordultak Jézushoz: „Bemerítő János tanítványai gyakran böjtölnek és imádkoznak, és ugyanezt teszik a mi tanítványaink is, de a te tanítványaid mindig csak esznek-isznak.”`,
    // 34
    `Jézus így válaszolt: „Rávehetitek-e a násznépet a lakodalomban, hogy böjtöljenek, amíg a vőlegény velük van? Ugye, hogy nem?`,
    // 35
    `De eljön majd az idő, amikor a vőlegényt elveszik tőlük, s akkor majd böjtölni fognak.”`,
    // 36
    `Mondott nekik egy példázatot is: „Senki sem tép ki egy darabot valami új ruhából, hogy azzal foltozzon be egy régit. Külöben tönkretenné az új ruhát, a régihez pedig nem illik az újból való folt.`,
    // 37
    `Senki sem tölt új bort régi bortömlőbe, mert az új bor szétszakítja a tömlőt, és a bor is elfolyik.`,
    // 38
    `Az új bort új tömlőbe kell tölteni.`,
    // 39
    `Aki kiforrott, megérlelődött bort ivott, az nem kívánja azonnal az új bort, mert azt mondja, hogy jobb a régi.”`
  ],
  [
    // 6  ~ Az Emberfia a szombatnak is Ura (#P) ~
    `Egyszer szombaton Jézus gabonaföldeken ment keresztül. A tanítványok téptek a kalászokból, kimorzsolták, és megették a magokat.`,
    // 2
    `Néhány farizeus felelősségre vonta őket: „Miért tesztek olyat, amit Mózes Törvénye szerint tilos szombaton?”`,
    // 3
    `De Jézus így válaszolt nekik: „Nem olvastátok, mit tett Dávid, amikor mind ő, mind az emberei megéheztek?`,
    // 4
    `Bement Isten házába, elvette és megette az Istennek szentelt kenyereket, és adott belőle azoknak is, akik vele voltak. Pedig a Törvény szerint abból csak a papoknak szabad enniük.”`,
    // 5
    `Majd így folytatta: „Az Emberfia úr a szombat ünnepe fölött is”.`,
    // 6  ~ Jézus szombaton is gyógyít (#Q) ~
    `Egy másik szombaton Jézus a zsinagógába ment, és tanított. Volt ott egy ember, akinek a jobb karja megbénult.`,
    // 7
    `A törvénytanítók és farizeusok gyanakodva lesték Jézust, vajon szombaton is meggyógyítja-e a bénát. Ugyanis mindenáron valami ürügyet kerestek, hogy vádolhassák Jézust.`,
    // 8
    `Ő azonban jól tudta, hogy mit gondolnak, mégis a bénához fordult: „Gyere ide, és állj a középre!” Az ember felkelt, és odament.`,
    // 9
    `Jézus ekkor a többiekhez fordult: „Azt kérdezem tőletek, a Törvény szerint szombaton melyiket szabad: jót tenni valakivel, vagy ártani neki? Mi a helyes: megmenteni, vagy kioltani valakinek az életét?”`,
    // 10
    `Körülnézett az ott ülőkön, majd ezt mondta a bénának: „Nyújtsd ki a karodat!” Ő kinyújtotta a jobb karját, amely abban a pillanatban meggyógyult.`,
    // 11
    `A törvénytanítókat és farizeusokat azonban esztelen düh töltötte el, és maguk között arról kezdtek tanakodni, hogyan tudnának végezni Jézussal.`,
    // 12  ~ A tizenkét apostol kiválasztása (#R) ~
    `Azokban a napokban történt, hogy Jézus felment egy hegyre, és egész éjjel Istenhez imádkozott.`,
    // 13
    `Reggel magához hívta a tanítványait. Kiválasztott közülük tizenkettőt, akiket apostoloknak is nevezett:`,
    // 14
    `Simont, akit Péternek nevezett el,
Andrást, Péter testvérét,
Jakabot,
Jánost,
Fülöpöt,
Bertalant,`,
    // 15
    `Mátét,
Tamást,
Jakabot, az Alfeus fiát,
Simont, akit zélóta volt,`,
    // 16
    `Júdást, a Jakab fiát,
és Iskáriótes Júdást, aki később elárulta Jézust.`,
    // 17  ~ Boldogok és áldottak vagytok! (#S) ~
    `Ezután Jézus és az apostolok lejöttek a hegyről, és megálltak a síkságon. Velük együtt volt még Jézusnak sok más tanítványa is, és nagy sokaság, amely Júdeából, Jeruzsálemből, valamint Tírusz és Szidón partvidékéről gyűlt össze.`,
    // 18
    `Mindannyian azért jöttek, hogy Jézust hallgassák, és meggyógyuljanak betegségeikből. Még azok is meggyógyultak, akik gonosz szellemektől szenvedtek.`,
    // 19
    `Mindenki meg akarta érinteni Jézust, mert erő áradt belőle, és mindenkit meggyógyított.`,
    // 20
    `Akkor Jézus a tanítványaira nézett, és ezt mondta:
„Boldogok és áldottak vagytok,
     akik felismertétek, hogy szükségetek van Istenre,
     mert tiétek Isten Királysága!`,
    // 21
    `Boldogok és áldottak vagytok, akik most éheztek,
     mert bőségben lesz részetek!
Boldogok és áldottak vagytok, akik most sírtok,
     mert még nevetni fogtok.`,
    // 22
    `Boldogok és áldottak vagytok, mikor az Emberfia miatt a többiek gyűlölnek és kiközösítenek titeket, szidalmaznak és rosszat mondanak rólatok!`,
    // 23
    `Örüljetek azon a napon, és ujjongjatok, mert nagy jutalom vár rátok a Mennyben! Hiszen az őseik ugyanígy bántak régen a prófétákkal is.`,
    // 24
    `De jaj nektek, ti gazdagok,
     mert már minden jót megkaptatok,
     amit ez a földi élet nyújtani tud!`,
    // 25
    `Jaj nektek, akik most jóllaktok,
     és elteltetek minden jóval,
     mert még éhezni és szűkölködni fogtok!
Jaj nektek, akik most nevettek,
     mert még gyászolni és sírni fogtok!`,
    // 26
    `Jaj nektek, ha mindenki dicsér titeket, mert a régiek is így dicsérték a hamis prófétákat!”`,
    // 27  ~ Szeressétek ellenségeiteket! (#T) ~
    `„Nektek mondom, akik hallgattok rám: szeressétek ellenségeiteket! Tegyetek jót azokkal, akik gyűlölnek benneteket!`,
    // 28
    `Áldjátok azokat, akik átkoznak, és imádkozzatok azokért, akik bántanak titeket!`,
    // 29
    `Annak, aki megüti az egyik arcodat, tartsd oda másikat is! Annak, aki elveszi a kabátodat, add oda az ingedet is!`,
    // 30
    `Mindenkinek adj, aki kölcsönkér tőled! Ha valaki elveszi, ami a tiéd, ne követeld vissza!`,
    // 31
    `Úgy bánjatok az emberekkel, ahogyan szeretnétek, hogy bánjanak veletek!`,
    // 32
    `Ha csak azokat szeretitek, akik titeket szeretnek, vajon jár-e valami különleges köszönet érte? Hiszen még a bűnösök is szeretik azokat, akik őket szeretik.`,
    // 33
    `Ha csak azokkal tesztek jót, akik veletek jót tesznek, vajon jár-e valami különleges köszönet érte? Hiszen ezt még a bűnösök is megteszik.`,
    // 34
    `Ha csak azoknak adtok kölcsön, akiktől remélitek, hogy vissza is fogják fizetni, vajon jár-e valami különleges köszönet érte? Hiszen a bűnösök is adnak kölcsön a többi bűnösnek, hogy azután majd visszakapják.`,
    // 35
    `Szeressétek ellenségeiteket, és tegyetek jót velük! Adjatok kölcsön, és ne várjátok, hogy visszaadják! Akkor Isten bőségesen meg fog jutalmazni titeket, és a Magasságos Isten fiai lesztek. Mert Isten jóságos a gonosz és hálátlan emberekhez is.`,
    // 36
    `Legyetek ezért ti is irgalmasak és könyörületesek, ahogyan Mennyei Atyátok is irgalmas és könyörületes!”`,
    // 37  ~ Ne ítéljetek el senkit! (#U) ~
    `„Ne ítéljetek el másokat, és akkor titeket sem ítélnek el! Senkit se vádoljatok vagy hibáztassatok, és akkor titeket sem vádolnak majd! Bocsássatok meg másoknak, és akkor nektek is meg fognak bocsátani!`,
    // 38
    `Adjatok, és akkor nektek is adni fognak! Bőségesen kaptok majd, többet, mint gondolnátok! Olyan sokat öntenek a kezetekbe, hogy nem is bírjátok el, sőt az öletekbe ömlik majd. Mert amilyen mérték szerint adtok másoknak, ti is ugyanolyan mérték szerint fogtok kapni.”`,
    // 39
    `Jelképes történetekkel tanította őket: „Vezethet-e vak egy másik vakot? Nem! Hiszen akkor mindketten gödörbe esnek!`,
    // 40
    `A tanítvány nem nagyobb a mesterénél, de ha már teljesen felkészült, ugyanolyan lesz, mint a mestere.”`,
    // 41
    `„Miért nézed a szálkát a másik szemében, mikor a magadéban még a gerendát sem veszed észre?!`,
    // 42
    `Hogy mondhatod másnak: »Barátom, hadd vegyem ki a szálkát a szemedből«, amikor a saját szemedben lévő gerendát nem látod? Képmutató! Vedd ki előbb a saját szemedből a gerendát! Akkor majd elég tisztán látsz ahhoz, hogy a szálkát is kivehesd a másik szeméből.”`,
    // 43  ~ A kétfajta gyümölcs (#V) ~
    `„A jó fa nem terem rossz gyümölcsöt. Ugyanígy rossz fa sem teremhet jó gyümölcsöt.`,
    // 44
    `Minden fát a gyümölcséről lehet felismerni. Tövises bokrok nem teremnek fügét, és a tüskés bozót sem terem szőlőt.`,
    // 45
    `A jó ember jó dolgokat gyűjt össze a szívében, és azokból hozza elő mindazt a jót, amit mond és tesz. A gonosz ember szívében azonban gonosz dolgok vannak, és azokból hozza elő mindazt a gonoszságot, amit mond és tesz. Mert a száj azt mondja ki, ami a szívet megtölti.”`,
    // 46  ~ A bölcs és az ostoba háza (#W) ~
    `„Miért mondjátok nekem: »Uram, Uram!«, ha nem teszitek meg, amit mondok?`,
    // 47
    `Aki hozzám jön, meghallgatja tanításomat, és engedelmeskedik a szavamnak,`,
    // 48
    `az hasonló ehhez: egy ember házat épített, és jó mélyre leásta az alapját. Egészen a kőszikláig ásott, és arra alapozta a házát. Azután jött az áradat, beleütközött a házba, és el akarta sodorni, de nem tudta megingatni, mert erős alapra építették.`,
    // 49
    `Aki pedig hallja a szavamat, de nem engedelmeskedik, az hasonló ehhez: egy ember házat épített, de minden alapozás nélkül, csak a földre. Amikor jött az árvíz, a ház azonnal összedőlt. Csak egy romhalmaz maradt belőle.”`
  ],
  [
    // 7  ~ A római százados hite (#X) ~
    `Miután Jézus befejezte, amit mondani akart, Kapernaumba ment.`,
    // 2
    `Élt ott egy római százados, akinek a rabszolgája halálos beteg volt. A százados nagyon kedvelte ezt a rabszolgáját,`,
    // 3
    `és mikor hallott Jézusról, elküldött hozzá néhány zsidó vezetőt. Általuk kérte Jézust, hogy jöjjön el, és mentse meg a rabszolgáját.`,
    // 4
    `A zsidó vezetők el is mentek Jézushoz, és így kérlelték: „Ez az ember megérdemli, hogy megtedd, amire kér.`,
    // 5
    `Szereti a népünket, és a zsinagógát is ő építtette nekünk.”`,
    // 6
    `Jézus ekkor elindult velük a százados házához. Amikor már közel volt, a százados Jézus elé küldte néhány barátját ezzel az üzenettel: „Uram, ne fáradj, mert nem vagyok rá méltó, hogy a házamba jöjj!`,
    // 7
    `Ezért nem is jöttem személyesen hozzád. Elég, ha egy szót szólsz, és meggyógyul a rabszolgám.`,
    // 8
    `Hiszen én is a feletteseim hatalma alatt vagyok, és vannak katonáim, akiknek meg én parancsolok. Ha azt mondom az egyiknek: »Menj el!«, az el is megy, vagy, ha szólok egy másiknak: »Gyere ide!«, az odajön hozzám. Ha azt mondom a szolgámnak: »Tedd meg ezt!«, az meg is teszi.”`,
    // 9
    `Jézus elcsodálkozott ezen. Majd hátrafordult az őt követő tömeghez, és azt mondta: „Igazán mondom nektek: még Izráel népe között sem találkoztam ilyen nagy hittel.”`,
    // 10
    `Amikor a küldöttek visszatértek a százados házába, a rabszolgát már egészségesen találták.`,
    // 11  ~ Jézus feltámasztja a naini fiút ~
    `Történt ezután, hogy Jézus a tanítványaival Nain városába ment. Nagyon sokan kísérték.`,
    // 12
    `Amikor a város kapuja felé közeledtek, látták, hogy éppen egy temetési menet jön velük szembe. A halott egy özvegyasszony egyetlen fia volt. A városból sokan kísérték az özvegyet.`,
    // 13
    `Amikor az Úr meglátta az özvegyasszonyt, megsajnálta, és azt mondta neki: „Ne sírj!”`,
    // 14
    `Odalépett a holttesthez, és megérintette a hordágyat, amelyen az feküdt. A menet megállt. Akkor Jézus ezt mondta: „Fiú, neked mondom, kelj fel!”`,
    // 15
    `A halott ekkor felült, és beszélni kezdett, Jézus pedig visszaadta őt az anyjának.`,
    // 16
    `Mélységes csodálkozás és megdöbbenés lett úrrá az embereken. Dicsőítették Istent, és ezt mondták: „Hatalmas próféta jelent meg közöttünk! Isten meglátogatta népét!”`,
    // 17
    `Jézus híre pedig egyre jobban terjedt Júdeában és az egész környéken.`,
    // 18  ~ Jézus Bemerítő Jánosról (#Y) ~
    `A történteket Bemerítő Jánosnak is elmondták a tanítványai.`,
    // 19
    `Ő pedig magához hívatta két tanítványát, és elküldte őket Jézushoz, hogy megkérdezzék tőle: „Te vagy-e az, akinek el kell jönnie, vagy valaki mást várjunk?”`,
    // 20
    `Amikor a küldöttek megérkeztek Jézushoz, ezt mondták: „János küldött minket, hogy megkérdezzük: Te vagy-e az, akinek el kell jönnie, vagy valaki mást várjunk?”`,
    // 21
    `Abban az időben Jézus sok beteget és szenvedőt gyógyított meg különféle betegségekből, megszabadított gonosz szellemektől, és sok vaknak is visszaadta a látását.`,
    // 22
    `Jézus így válaszolt a küldötteknek: „Menjetek vissza Jánoshoz, és mondjátok el neki mindazt, amit láttatok és hallottatok! Mondjátok el, hogy a vakok látnak, a bénák járnak, a leprások megtisztulnak, a süketek hallanak, halottak támadnak fel, és a szegényeknek az örömüzenetet hirdetik.`,
    // 23
    `Boldog és áldott, aki nem kételkedik bennem, hanem kitart mellettem.”`,
    // 24
    `Amikor János tanítványai elmentek, Jézus ezt mondta Jánosról az összegyűlt sokaságnak: „Azért mentetek ki a pusztába, hogy széltől hajlongó nádszálat lássatok? Ugye, nem?`,
    // 25
    `Vagy talán azért, hogy drága ruhába öltözött férfit lássatok? Ugye, hogy nem? Hiszen akik drága ruhákban járnak és kényelemben élnek, azok a királyi udvarban és palotákban laknak!`,
    // 26
    `Akkor miért mentetek ki? Kit akartatok látni? Talán egy prófétát? Bizony, valóban prófétát láttatok! Sőt mondom nektek: még annál is nagyobbat!`,
    // 27
    `Mert János az, akiről ezt mondja az Írás:
»Elküldöm hírvivő követemet,
     aki előtted fog járni,
     hogy utat készítsen számodra.« (#n)`,
    // 28
    `Igazán mondom, hogy azok között, akiket asszony szült, Bemerítő János a legnagyobb. Mégis, azok között, akik Isten Királyságába tartoznak, a legkisebb is nagyobb nála.”`,
    // 29
    `(Az egyszerű emberek, akik hallgatták Bemerítő Jánost, mind igazat adtak Istennek, és elfogadták az üzenetét, még a vámszedők is. Ezért bemerítkeztek János tanítása szerint.`,
    // 30
    `A farizeusok és törvénytanítók azonban visszautasították, amit Isten üzent nekik, és nem merítkeztek be János felhívására.)`,
    // 31
    `Jézus így folytatta: „Mihez is hasonlítsam ezt a nemzedéket?`,
    // 32
    `Olyanok, mint a téren játszó gyerekek, akik ezt kiabálják egymásnak:
»Táncnótát furulyáztunk nektek,
     de nem táncoltatok.
Siratót énekeltünk,
     de nem sírtatok.«`,
    // 33
    `Mert eljött Bemerítő János, aki nem azt ette, mint a többiek, és bort sem ivott. Róla azt mondjátok: »Gonosz szellem lakik benne!«`,
    // 34
    `Azután eljött az Emberfia, aki ugyanúgy evett és ivott, mint mások. Róla meg azt mondjátok: »Nézzétek, milyen falánk és részeges! Ráadásul vámszedőkkel és mindenféle bűnösökkel barátkozik!«`,
    // 35
    `Ezzel maguk bizonyították a saját ostobaságukat azok, akik ilyenféle »bölcsességeket« szoktak mondani”.`,
    // 36  ~ Akinek többet bocsátottak meg, az jobban szeret ~
    `Az egyik farizeus vendégségbe hívta Jézust, aki el is ment hozzá. Letelepedtek az asztalhoz.`,
    // 37
    `Volt abban a városban egy asszony, akiről mindenki tudta, hogy bűnös életmódot folytat. Amikor megtudta, hogy Jézus a farizeus házában látják vendégül, ő is odament, és hozott magával egy alabástrom korsócskát, amely értékes illatszerrel volt töltve.`,
    // 38
    `Az asszony sírva megállt Jézus mögött, a lábánál. A könnyeivel öntözte, hajával megtörölte, majd megcsókolta Jézus lábát, azután ráöntötte a drága illatszert.`,
    // 39
    `A farizeus, aki meghívta Jézust, mindezt látta, de nem szólt, csak azt gondolta magában: „Ha ez az ember valóban próféta lenne, akkor tudná, hogy miféle nő az, aki hozzáér. Tudná, hogy ez az asszony bűnös!”`,
    // 40
    `Jézus ekkor így válaszolt a házigazda ki nem mondott gondolataira: „Simon, szeretnék valamit mondani neked!”
„Mondd csak, Mester!” - válaszolta Simon.`,
    // 41
    `Jézus így folytatta: „Volt egy hitelező, és annak két adósa. Egyikük ötszáz ezüstpénzzel tartozott, a másik ötvennel.`,
    // 42
    `Mivel egyik sem tudta megadni, a hitelező mindkettőjüknek nagylelkűen elengedte az adósságát. A kettő közül vajon melyik szereti jobban a hitelezőt?”`,
    // 43
    `Simon így válaszolt: „Gondolom, az, akinek nagyobb adósságot engedett el.”
„Igazad van!” - mondta Jézus.`,
    // 44
    `Majd az asszony felé fordulva így folytatta: „Látod ezt az asszonyt? Eljöttem a házadba, de nem kínáltál vizet, hogy a poros lábamat megmossam. Ő pedig a könnyeivel mosta, és a hajával törölte meg a lábam.`,
    // 45
    `Te nem üdvözöltél csókkal, ő pedig amióta csak megérkeztem, szüntelenül a lábamat csókolgatja.`,
    // 46
    `Te nem kented meg a fejemet olajjal. Ő pedig a lábamat kente meg illatos olajjal.`,
    // 47
    `Mondom neked, hogy ennek az asszonynak a bűneit - bármilyen sok is volt - megbocsátották. Ezt abból láthatod, hogy mennyire szeret engem! Akinek csak kevés bűnét bocsátották meg, az kevésbé szeret.”`,
    // 48
    `Ezután az asszonyhoz fordult: „Meg vannak bocsátva a bűneid!”`,
    // 49
    `Akik vele együtt vacsoráztak, ezt gondolták: „Kicsoda ez? Azt képzeli, hogy megbocsáthatja valakinek a bűneit?”`,
    // 50
    `Végül Jézus ezt mondta az asszonynak: „A hited megmentett téged, menj békességgel!”`
  ],
  [
    // 8  ~ Jézus tanítványai és kísérői ~
    `Ezután Jézus a tizenkét apostollal együtt bejárta a városokat és falvakat, s mindenhol hirdette az Isten Királyságáról szóló örömüzenetet.`,
    // 2
    `Volt velük néhány asszony is, akikből Jézus gonosz szellemeket űzött ki, és különböző betegségekből gyógyított meg: Mária Magdalén, akiből hét gonosz szellem ment ki;`,
    // 3
    `Johanna, Kuza felesége; azután Zsuzsanna, meg sokan mások is. (Kuza Heródes egyik főembere volt.) Ezek az asszonyok a saját vagyonukból támogatták és szolgálták Jézust és a tanítványokat.`,
    // 4  ~ Példázat a magvetésről (#Z) ~
    `Minden városból és faluból jöttek Jézushoz, s nagy tömeg gyűlt össze körülötte. Ő pedig ezt a példázatot mondta nekik:`,
    // 5
    `„Egy földműves kiment a szántóföldjére vetni. Ahogy szórta a vetőmagot, néhány az útra esett. Ezeket az emberek eltaposták, a madarak pedig felcsipegették.`,
    // 6
    `Némelyik mag köves talajra esett, de amint kicsírázott, el is száradt, mert nem kapott elég nedvességet.`,
    // 7
    `Megint más magok tüskés gyomok közé hullottak, ahol kikeltek, de a felnövő gyomok elnyomták és megfojtották őket.`,
    // 8
    `Más magok viszont a jó földbe kerültek. Amikor megnőttek, bőséges termést hoztak: százszor annyit, mint amennyit a magvető elvetett.”
Jézus hangosan kiáltva fejezte be a történetet: „Akinek van füle, hallja és értse meg, amit mondok!”`,
    // 9
    `Tanítványai megkérdezték tőle, hogy mit jelent ez a történet.`,
    // 10
    `Ő így felelt: „Ti megérthetitek Isten Királyságának titkos igazságait, de a többieknek csak jelképes történeteket mondok, hogy
»nézzenek, de ne lássanak,
     halljanak, de ne értsenek.«” (#o)`,
    // 11  ~ A magvetés példázatának magyarázata (#AA) ~
    `„Ennek a példázatnak a következő a jelentése: a mag Isten üzenete.`,
    // 12
    `Az útra hullott magok esete azokat jelképezi, akik hallják ugyan Isten üzenetét, de a Sátán azonnal ellopja azt a szívükből, hogy ne jussanak hitre és ne üdvözüljenek.`,
    // 13
    `A köves talajra hullott magok esete azokat jelképezi, akik hallják Isten üzenetét, és örömmel fogadják, de az nem tud meggyökerezni bennük. Ezek hisznek ugyan egy ideig, de amikor próbára teszik őket a nehézségek, elvesztik a hitüket, és elfordulnak Istentől.`,
    // 14
    `A tüskés gyomok közé hullott magok esete azokat jelképezi, akik hallják Isten üzenetét, de ahogy múlik az idő, az élet gondjai, gazdagsága és élvezetei elnyomják bennük Isten üzenetét, és nem hoznak termést.`,
    // 15
    `A jó föld esete pedig azokat jelképezi, akik Isten üzenetét jó és őszinte szívvel befogadják, megőrzik, és türelmes állhatatossággal jó gyümölcsöket teremnek.”`,
    // 16  ~ Minden titok kitudódik (#AB) ~
    `„Nem azért gyújtanak olajmécsest, hogy letakarják, vagy az ágy alá tegyék, hanem hogy a mécstartóra helyezzék, és világítson azoknak, akik bejönnek a szobába.`,
    // 17
    `Mert minden rejtett dolog világosságra fog kerülni. Minden titok kitudódik és ismertté válik.`,
    // 18
    `Tehát gondoljátok át alaposan, hogyan hallgatjátok! Mert akinek van, az még többet kap. De akinek nincs, attól még azt is elveszik, amiről azt gondolja, hogy az övé.”`,
    // 19  ~ Jézus igazi családja: a tanítványai (#AC) ~
    `Egyszer Jézushoz eljöttek a testvérei és az anyja, de a tömeg miatt nem tudtak a közelébe jutni.`,
    // 20
    `Az emberek ekkor szóltak Jézusnak: „Édesanyád és testvéreid odakinn várnak, és látni szeretnének.”`,
    // 21
    `De ő így válaszolt: „Az én anyám és testvéreim azok, akik hallgatnak Isten beszédére, és megteszik, amit ő mond.”`,
    // 22  ~ Jézus lecsendesíti a vihart (#AD) ~
    `Azokban a napokban történt, hogy Jézus a tanítványaival együtt beszállt egy bárkába. „Menjünk át a tó túlsó partjára!” - mondta nekik, és elindultak.`,
    // 23
    `Miközben hajóztak, Jézus elaludt. Hirtelen szélvihar csapott le a tóra. A hajó már kezdett megtelni vízzel, és mindannyian veszélyben voltak.`,
    // 24
    `A tanítványok ekkor felébresztették Jézust: „Mester! Mester! Végünk van!”
Jézus felkelt, ráparancsolt a szélre és a dühöngő hullámokra, mire azok lecsillapodtak, és nagy csend lett.`,
    // 25
    `Majd a tanítványokhoz fordult: „Hol van a hitetek?”
Ők nagyon megdöbbentek és elámultak ezen. Egymástól kérdezgették: „Kicsoda ez, hogy ha parancsol, még a szél és a víz is engedelmeskedik neki?”`,
    // 26  ~ Kiűzi a gonosz szellemek seregét (#AE) ~
    `Ezután megérkeztek Gadara (#p) vidékére, amely Galileával szemben van, a Genezáreti-tó túlsó partján.`,
    // 27
    `Amikor Jézus a partra lépett, a város felől szembe jött vele egy férfi, akiben gonosz szellemek laktak. Ez az ember már régóta ruha nélkül járt, és nem házban lakott, hanem a sírbarlangokban tanyázott.`,
    // 28
    `Amikor a férfi meglátta Jézust, felüvöltött, a lába elé vetette magát, és így kiabált: „Mi közöd hozzám, Jézus, Magasságos Isten Fia?! Kérlek, ne kínozz engem!”`,
    // 29
    `Jézus ugyanis megparancsolta a gonosz szellemnek, hogy menjen ki az emberből. Mivel a gonosz szellemek gyakran eluralkodtak rajta, a férfi kezét-lábát sokszor leláncolták és megbilincselték, hogy megfékezzék. De hiába próbálták fogva tartani, mindig letépte magáról a láncokat, és a gonosz szellemek kiűzték őt a pusztába.`,
    // 30
    `Ekkor Jézus megkérdezte a gonosz szellemtől: „Mi a neved?”
Az pedig így felelt: „Légió” (#q) , mert sok gonosz szellem lakott abban az emberben.`,
    // 31
    `A gonosz szellemek kérlelték Jézust, hogy ne küldje őket a feneketlen mélységbe.`,
    // 32
    `A közelben, a hegyoldalon nagy disznókonda legelészett, és a gonosz szellemek könyörögtek Jézusnak, hogy engedje meg nekik, hogy a disznókba menjenek. Jézus megengedte nekik,`,
    // 33
    `így a gonosz szellemek kijöttek az emberből, és belementek a disznókba. Azok pedig a meredek hegyoldalról a tóba rohantak, és mind belefulladtak.`,
    // 34
    `Amikor a pásztorok látták, hogy mi történt, elfutottak és mindenkinek elmondták ezt a városban és a környéken.`,
    // 35
    `A városból sokan kijöttek Jézushoz, hogy lássák, mi történt. Azt a férfit, akiből a gonosz szellemek kimentek, ott találták Jézus lábánál ülve. Már fel volt öltözve, és teljesen épelméjű lett. Az emberek ekkor nagyon megrémültek.`,
    // 36
    `Akik látták, elbeszélték a többieknek, hogyan szabadította meg Jézus ezt a megszállottat a gonosz szellemektől.`,
    // 37
    `Ekkor Gadara egész népe arra kérte Jézust, hogy menjen el tőlük, mert nagy félelem töltötte el őket. Jézus hajóba szállt, és elment.`,
    // 38
    `Az az ember azonban, akiből a gonosz szellemeket kiűzte, könyörgött neki, hogy vele mehessen.
De Jézus elküldte, és azt mondta neki:`,
    // 39
    `„Menj haza, és mondd el mindenkinek, amit Isten tett veled!”
Ő el is ment, és az egész városban elhíresztelte, mit tett vele Jézus.`,
    // 40  ~ Feltámaszt egy kislányt és meggyógyít egy beteg asszonyt (#AF) ~
    `Amikor Jézus visszatért a másik partra, a tömeg örömmel üdvözölte, mert már vártak rá.`,
    // 41
    `Ekkor egy Jairus nevű ember érkezett hozzá, aki a helyi zsinagóga vezetője volt. Leborult Jézus lábához, és arra kérte, jöjjön el a házához,`,
    // 42
    `mert haldoklott az egyetlen leánya, aki körülbelül tizenkét éves volt.
Jézus el is indult vele, a tömeg pedig szorosan körülvette.`,
    // 43
    `Volt ott egy asszony, aki már tizenkét éve olyan betegségben szenvedett, amely állandó vérzéssel járt. Már minden vagyonát az orvosokra költötte, (#r) de senki sem tudta meggyógyítani.`,
    // 44
    `Az asszony Jézus mögé került, és megérintette a Jézus ruháján lévő rojtokat. Abban a pillanatban megszűnt a vérzése.`,
    // 45
    `Jézus megkérdezte: „Ki érintett meg?”
Mindnyájan tagadták, Péter pedig ezt mondta: „Mester, az emberek tolonganak körülötted, és szorongatnak téged!”`,
    // 46
    `De Jézus így felelt: „Valaki megérintett, mert éreztem, hogy erő áradt ki belőlem.”`,
    // 47
    `Amikor az asszony látta, hogy nem maradhat titokban, reszketve előjött, és leborult előtte. Az egész nép előtt elmondta, hogy miért érintette meg, és hogy azonnal meg is gyógyult.`,
    // 48
    `Jézus így szólt hozzá: „Leányom, a hited megmentett téged. Menj békességgel!”`,
    // 49
    `Amíg Jézus beszélt, jött valaki a zsinagóga vezetőjének házából, és azt mondta Jairusnak: „A leányod már meghalt, ne fáraszd tovább a Mestert!”`,
    // 50
    `Jézus azonban meghallotta, és így biztatta Jairust: „Ne félj, csak higgy, és megmenekül a leányod!”`,
    // 51
    `Amikor Jézus bement a házba, csak Pétert, Jánost, Jakabot, meg a leány apját és anyját vitte magával. A többieknek nem engedte, hogy vele menjenek.`,
    // 52
    `Közben mindenki sírt, jajgatott, és a leányt gyászolta. Jézus rájuk szólt: „Ne sírjatok, mert a leány nem halt meg, csak alszik!”`,
    // 53
    `Azok kinevették, mert tudták, hogy a leány meghalt.`,
    // 54
    `Akkor Jézus megfogta a kislány kezét, és megszólította: „Kelj fel, kislány!”`,
    // 55
    `Ekkor a lélek visszatért a kislányba, aki azonnal feltámadt. Akkor Jézus mondta, hogy adjanak neki enni.`,
    // 56
    `A leány szülei nagyon meg voltak döbbenve, de Jézus megparancsolta nekik, hogy senkinek se mondják el, ami történt.`
  ],
  [
    // 9  ~ Jézus kiküldi a tizenkét apostolt (#AG) ~
    `Jézus magához hívta a tizenkét apostolt. Erőt és hatalmat adott nekik minden gonosz szellem kiűzésére és a betegségek gyógyítására.`,
    // 2
    `Kiküldte őket, hogy hirdessék Isten Királyságát, és gyógyítsák meg a betegeket.`,
    // 3
    `Ezt mondta nekik: „Semmit se vigyetek magatokkal az útra: se botot, se tarisznyát, se kenyeret, se pénzt, csak a ruhát, amelyet viseltek!`,
    // 4
    `Ha bementek egy házba, maradjatok ott, amíg abból a városból tovább nem mentek!`,
    // 5
    `Ahol nem látnak szívesen titeket, annak a városnak még a porát is rázzátok le a lábatokról, amikor elmentek onnan! Ez majd bizonyíték lesz annak a városnak a lakói ellen.”`,
    // 6
    `Az apostolok tehát útnak indultak. Faluról falura járva hirdették az örömüzenetet, és mindenhol meggyógyították a betegeket.`,
    // 7  ~ Heródes szeretné látni Jézust (#AH) ~
    `Heródes fejedelem is hallott a történtekről. Zavarban volt, mert egyesek azt mondták, hogy Bemerítő János támadt fel a halálból.`,
    // 8
    `Mások azt beszélték, hogy Illés próféta jelent meg. Mások szerint valamelyik régi próféta támadt fel.`,
    // 9
    `Heródes azt mondta: „Bemerítő Jánost én fejeztettem le. De ki lehet ez, akiről ilyen dolgokat hallok?” - és azon volt, hogy láthassa Jézust.`,
    // 10  ~ Jézus enni ad több, mint ötezer embernek (#AI) ~
    `Amikor az apostolok visszatértek Jézushoz, elbeszéltek neki, mi mindent tettek a kiküldetés ideje alatt. Jézus félrevonult velük egy helyre Bétsaida közelében.`,
    // 11
    `Amikor a sokaság ezt megtudta, utánamentek. Jézus örömmel fogadta őket, Isten Királyságáról beszélt nekik, és meggyógyította a közöttük lévő betegeket.`,
    // 12
    `Már közeledett az este, amikor a tizenkét apostol odalépett hozzá, és ezt javasolta: „Küldd el őket, hogy a környező falvakban és tanyákon élelmet és szállást találjanak maguknak, mert ez a hely lakatlan!”`,
    // 13
    `Jézus azonban ezt felelte: „Ti adjatok nekik enni!”
Az apostolok így feleltek: „Összesen öt kenyerünk és két halunk van! Vagy azt akarod, hogy mi menjünk el ennivalót venni ennek a sokaságnak?”`,
    // 14
    `Ugyanis akkora tömeg gyűlt össze ott, hogy csak a férfiak száma ötezer körül lehetett.
Jézus akkor szólt a tanítványoknak: „Ültessétek le őket ötvenes csoportokban!”`,
    // 15
    `A tanítványok mindenkit leültettek.`,
    // 16
    `Jézus kézbe vette az öt kenyeret és a két halat. Felnézett az égre, és hálát adott Istennek. Azután tört az ételből, és a tanítványainak adta, hogy osszák szét.`,
    // 17
    `Mindnyájan ettek, és jóllaktak, sőt, mikor összeszedték a maradékot, a darabokkal 12 kosarat töltöttek meg.`,
    // 18  ~ Te vagy a Messiás! (#AJ) ~
    `Egyszer, amikor Jézus egymagában imádkozott, vele voltak a tanítványai is. Megkérdezte tőlük: „Kinek tartanak engem az emberek?”`,
    // 19
    `A tanítványok így válaszoltak: „Egyesek Bemerítő Jánosnak, mások meg Illésnek. Megint mások egy régi prófétának, aki feltámadt.”`,
    // 20
    `Jézus megkérdezte őket: „És ti? Ti kinek tartotok engem?”
Péter így válaszolt: „Te vagy a Messiás, akit Isten küldött.”`,
    // 21
    `Ekkor Jézus szigorúan megparancsolta nekik, hogy erről senkinek se beszéljenek.`,
    // 22  ~ Jézus előre jelzi a halálát és feltámadását (#AK) ~
    `Majd ezt mondta: „Az Emberfiának sokat kell szenvednie. A nép vezetői, a főpapok és a törvénytanítók el fogják utasítani, végül megölik, de három nappal később fel fog támadni.”`,
    // 23
    `Ezután mindannyiukhoz szólva ezt mondta: „Aki engem akar követni, az tagadja meg önmagát, naponta vegye fel és vigye a keresztjét, úgy kövessen.`,
    // 24
    `Aki meg akarja menteni a lelkét, vagyis az életét, az el fogja veszíteni. De aki értem feladja az életét, vagyis a lelkét, az fogja igazán megmenteni.`,
    // 25
    `Ugyan mit ér, ha valaki az egész világot megnyeri, önmagát azonban elveszti, vagy tönkreteszi?`,
    // 26
    `Aki szégyell engem és a szavaimat, azt az Emberfia is szégyellni fogja, amikor majd visszajön a maga, az Atya és a szent angyalok dicsőségével.`,
    // 27
    `Igazán mondom nektek: vannak közöttetek olyanok, akik nem ízlelik meg a halált, amíg meg nem látják az Isten Királyságát.”`,
    // 28  ~ Jézus megmutatkozik a dicsőségében (#AL) ~
    `Körülbelül nyolc nappal később Jézus maga mellé vette Pétert, Jánost és Jakabot, és felment egy hegyre imádkozni.`,
    // 29
    `Mialatt imádkozott, az arca elváltozott, és a ruhája ragyogó fehér lett.`,
    // 30
    `Ezután két férfi - Mózes és Illés - beszégettek vele,`,
    // 31
    `akik ragyogó dicsőségben látszottak és szolgálatának befejezéséről beszélgettek Jézussal, amelyet majd Jeruzsálemben teljesít be.`,
    // 32
    `Péter és a többiek közben elaludtak. Mikor fölébredtek, látták Jézust a dicsőség ragyogásában, és a két férfit mellette.`,
    // 33
    `Amikor a két férfi már indulni készült, Péter így szólt Jézushoz: „Mester, olyan jó itt! Készítsünk három lombsátrat: neked, Mózesnek és Illésnek!” De Péter nem tudta, hogy mit beszél.`,
    // 34
    `Még be sem fejezte, amikor felhő jelent meg, és betakarta őket. A tanítványok nagyon megijedtek, amikor a felhő körülvette őket.`,
    // 35
    `A felhőből egy hang hallatszott: „Ő a Fiam, akit kiválasztottam! Hallgassatok rá, és engedelmeskedjetek neki!”`,
    // 36
    `Miután ez a hang szólt, már csak Jézust látták egyedül. A tanítványok hallgattak a történtekről, és abban az időben senkinek sem mondták el, amit a hegyen láttak.`,
    // 37  ~ A megszállott fiút megszabadítja (#AM) ~
    `Másnap, amikor a hegyről lejöttek, hatalmas tömeg várta Jézust.`,
    // 38
    `A tömegből valaki ezt kiáltotta: „Mester! Kérlek, jöjj, és nézd meg a fiamat, mert ő az egyetlen gyermekem!`,
    // 39
    `Időnként egy gonosz szellem ragadja meg, a fiú fölsikolt, rángatózik, és habzik a szája. Csak nehezen távozik el tőle, miután meggyötörte.`,
    // 40
    `Kértem a tanítványaidat, hogy űzzék ki a fiamból, de nem sikerült nekik.”`,
    // 41
    `Jézus így válaszolt: „Milyen hitetlen és romlott ez a nemzedék! Meddig kell még veletek maradnom?! Meddig szenvedjelek el még titeket? Hozd ide a fiad!”`,
    // 42
    `Amikor a fiú közelebb lépett, a gonosz szellem a földre dobta, és megrángatta. Jézus azonban ráparancsolt a gonosz szellemre, meggyógyította a fiút, és visszaadta az apjának.`,
    // 43
    `Az emberek megukon kívül voltak a csodálkozástól, amikor látták Isten hatalmas erejét megnyilvánulni.
Jézus a közelgő haláláról beszél (#AN)
Amíg a többiek még azon csodálkoztak, amit Jézus tett, ő ezt mondta a tanítványainak:`,
    // 44
    `„Jól jegyezzétek meg, amit most mondok! Az Emberfiát hamarosan kiszolgáltatják az embereknek.”`,
    // 45
    `De a tanítványok nem értették, hogy miről beszél. El volt rejtve előlük, ezért nem fogták fel, Jézust viszont féltek megkérdezni.`,
    // 46  ~ Ki a legnagyobb? (#AO) ~
    `Egyszer a tanítványok egymás között arról vitatkoztak, hogy ki a legnagyobb közülük.`,
    // 47
    `Jézus belelátott a gondolataikba, odavitt hozzájuk egy kisgyereket, és maga mellé állította.`,
    // 48
    `Azt mondta nekik: „Aki ezt a kisgyereket befogadja az én nevemben, az engem fogad be. Aki pedig engem befogad, az azt fogadja be, aki elküldött engem. Mert aki a legkisebb közöttetek, az az igazán nagy!”`,
    // 49  ~ Aki nincs ellenetek, az veletek van (#AP) ~
    `János, az egyik tanítvány ezt mondta: „Mester! Láttuk, hogy valaki a te nevedben űzi ki a gonosz szellemeket, de megtiltottuk neki, mert nem velünk együtt követ téged.”`,
    // 50
    `Jézus így válaszolt neki: „Hagyjátok, mert aki nincs ellenetek, az veletek van.”`,
    // 51  ~ Jézust nem fogadják be a samáriaiak ~
    `Amikor közeledett az idő, hogy visszatérjen a Mennybe, Jézus szilárdan elhatározta, hogy felmegy Jeruzsálembe.`,
    // 52
    `Követeket küldött maga előtt egy samáriai faluba, hogy ott szállást készítsenek neki.`,
    // 53
    `A samáriaiak azonban nem akarták befogadni Jézust, mert Jeruzsálembe igyekezett.`,
    // 54
    `Amikor ezt két tanítványa - Jakab és János - megtudta, megkérdezték Jézustól: „Uram, akarod-e, hogy a Mennyből tüzet parancsoljunk rájuk, hogy megégesse őket?” (#s)`,
    // 55
    `De Jézus feléjük fordult, határozottan figyelmeztette és helyreigazította őket. (#t)`,
    // 56
    `Ezután egy másik faluba mentek.`,
    // 57  ~ Jézus követése (#AQ) ~
    `Útközben valaki ezt mondta Jézusnak: „Bárhová mész, én követlek téged!”`,
    // 58
    `Ő így válaszolt: „A rókáknak van tanyájuk, az égi madaraknak is van fészkük, de az Emberfiának nincs hol lehajtania a fejét.”`,
    // 59
    `Egy másiknak ezt mondta: „Csatlakozz hozzám, és legyél a tanítványom!” De az kérte: „Uram, engedd meg, hogy előbb elmenjek, és eltemessem apámat!”`,
    // 60
    `Jézus ezt felelte: „Hagyd, hogy a halottak temessék el a saját halottaikat! Te pedig menj, és hirdesd Isten Királyságát!”`,
    // 61
    `Másvalaki így szólította meg: „Követlek, Uram, de előbb hadd búcsúzzam el a családomtól!”`,
    // 62
    `De Jézus így felelt: „Aki egyszer szántani kezd, azután mégis visszafordul, az nem alkalmas arra, hogy Isten Királyságában éljen!”`
  ],
  [
    // 10  ~ Jézus kiküldi hetvenkét tanítványát ~
    `Ezután az Úr kijelölt a tanítványai közül további hetvenkét (#u) tanítványát, és kettesével elküldte őket azokba a városokba és helyekre, ahová menni szándékozott.`,
    // 2
    `Ezzel küldte ki őket: „Látjátok, milyen sok az aratnivaló, és milyen kevés az aratómunkás! Imádkozzatok hát, és kérjétek az Aratás Urát, hogy küldjön még több aratót, hogy a gabonáját learassák!`,
    // 3
    `Menjetek! Vigyázzatok, mert úgy küldelek ki benneteket, mint bárányokat a farkasok közé.`,
    // 4
    `Ne vigyetek magatokkal pénzt, ennivalót vagy másik sarut, és útközben ne álljatok le beszélgetni!`,
    // 5
    `Ha egy házba bementek, először ezt mondjátok: »Békesség ennek a családnak«!`,
    // 6
    `Ha békeszerető ember lakik abban a házban, a békességetek megnyugszik rajta, ha nem, akkor a békesség visszaszáll rátok.`,
    // 7
    `Maradjatok ugyanannál a háznál, azt egyétek és igyátok, amivel ott megkínálnak, mert a munkás megérdemli a bérét! Ne járjatok házról házra!`,
    // 8
    `Ha olyan városba értek, ahol szívesen látnak titeket, fogadjátok el, amivel megkínálnak, és nyugodtan egyétek meg!`,
    // 9
    `Gyógyítsátok meg a betegeiket, és hirdessétek nekik: »Megérkezett hozzátok Isten Királysága!«`,
    // 10
    `Ha pedig valamelyik városban nem látnak szívesen, menjetek ki az utcára, és mondjátok:`,
    // 11
    `»Még a városotok porát is lerázzuk a lábunkról! (#v) De azt tudjátok meg, hogy Isten Királysága megérkezett hozzátok!«`,
    // 12
    `Mondom nektek: Sodoma lakóinak elviselhetőbb lesz a helyzete az ítélet napján, mint az ott lakóknak.”`,
    // 13  ~ Szemrehányást tesz a hitetlen városoknak (#AR) ~
    `„Jaj neked, Korazin és népe! Jaj neked, Bétsaida! Mert ha Tíruszban vagy Szidónban történtek volna azok a csodák, amelyek nálatok történtek, ők már régen zsákruhában és hamuban ülve Istenhez fordultak volna.`,
    // 14
    `Bizony, az ítélet napján Tírusz és Szidón népének tűrhetőbb lesz a sorsa, mint a tiétek!`,
    // 15
    `És te, Kapernaum, azt hiszed, hogy az égig fognak magasztalni? Nem! A halál országába fogsz süllyedni!”`,
    // 16
    `A tanítványainak pedig ezt mondta Jézus: „Aki hallgat rátok, az valójában énrám hallgat. Aki titeket visszautasít, az engem utasít vissza. Aki pedig engem visszautasít, azt utasítja vissza, aki elküldött engem.”`,
    // 17  ~ Láttam a Sátán bukását ~
    `Amikor a hetvenkét tanítvány nagy örömmel visszatért, azt mondták Jézusnak: „Uram, még a gonosz szellemek is engedelmeskednek, amikor a nevedben rájuk parancsolunk!”`,
    // 18
    `Jézus erre így felelt: „Láttam a Sátán bukását, ahogy a Mennyből lezuhant, mint a villám!`,
    // 19
    `Figyeljetek rám! Igaz, hogy hatalmat adtam nektek, hogy kígyókon és skorpiókon tapossatok, s ez a hatalom nagyobb, mint az ellenség minden ereje, és semmi sem árthat nektek.`,
    // 20
    `De mégse annak örüljetek, hogy a gonosz szellemek engedelmeskednek nektek, hanem annak, hogy a nevetek fel van írva a Mennyben!”`,
    // 21  ~ Jézus hálát ad az Atyának (#AS) ~
    `Akkor Jézus a Szentlélek által ujjongott, örült, és így dicsérte Istent: „Dicsőítelek, Atyám, Menny és Föld Ura, hogy ezeket elrejtetted a bölcsek és okosak elől, de megmutattad azoknak, akik olyanok, mint a kisgyermekek. Igen, Atyám, mert így láttad jónak!`,
    // 22
    `Atyám mindent átadott nekem. Senki más nem ismeri a Fiút igazán, csak az Atya - ahogyan az Atyát is csak a Fiú ismeri igazán, és azok, akiknek a Fiú kijelenti őt.”`,
    // 23
    `Amikor maguk között voltak, a tanítványokhoz fordult: „Boldogok és áldottak vagytok, hogy ezeket láthatjátok!`,
    // 24
    `Mert mondom nektek: sok próféta és király szerette volna látni, amit ti láttok, de nem látták; és szerette volna hallani, amit ti hallotok, de nem hallották.”`,
    // 25  ~ Példázat az irgalmas samáriai utazóról ~
    `Egyszer Jézushoz jött egy törvénytanító, hogy próbára tegye, és ezt kérdezte tőle: „Mester, mit kell tennem, hogy örök életet kapjak?”`,
    // 26
    `Jézus megkérdezte tőle: „Mi van megírva a Törvényben? Hogyan értelmezed?”`,
    // 27
    `Az így válaszolt: „Szeresd az Örökkévalót, Istenedet, teljes szíveddel, egész lelkeddel, teljes értelmeddel; (#w) és úgy szeresd az embertársadat, mint saját magadat!” (#x)`,
    // 28
    `„Jól válaszoltál. Ezt tedd, és élni fogsz!” - mondta Jézus.`,
    // 29
    `A törvénytanító azonban igazolni akarta magát, és tovább faggatta Jézust: „De hát ki számít az embertársamnak?”`,
    // 30
    `Jézus erre egy történettel válaszolt: „Egyszer egy ember Jeruzsálemből Jerikóba utazott. Útközben rablók támadták meg, akik kifosztották, s még a ruháját is elvették, megverték, majd félholtan otthagyták.`,
    // 31
    `Nemsokára arra ment egy pap, de mikor meglátta a sebesültet, kikerülte, és otthagyta.`,
    // 32
    `Később egy lévita ment arra. Mikor meglátta a sebesültet, ő is átment az út másik oldalára, és otthagyta.`,
    // 33
    `Később arra utazott egy samáriai férfi is. Amikor meglátta a sebesültet, megsajnálta.`,
    // 34
    `Odament hozzá, olajat és bort öntött a sebeire, és bekötözte. Ezután feltette a saját szamarára, elvitte egy vendégfogadóba, és ott ápolta tovább.`,
    // 35
    `Másnap a fogadó gazdájának két ezüstpénzt adott, és azt mondta neki: »Gondoskodj erről az emberről, és amit ezen felül még ráköltesz, megfizetem, amikor visszajövök.«`,
    // 36
    `Mit gondoltok, a három közül melyik volt igazi embertársa annak, akit kiraboltak?”`,
    // 37
    `A törvénytanító így válaszolt: „Az, aki megsajnálta és segített rajta.”
Jézus azt mondta: „Igazad van, menj, és kövesd a példáját!”`,
    // 38  ~ Mária és Márta ~
    `Útközben Jézus egy faluba érkezett, ahol egy Márta nevű asszony látta vendégül.`,
    // 39
    `Mártának volt egy testvére - Mária -, aki leült az Úr lábához, és úgy hallgatta a szavait.`,
    // 40
    `Mártát eközben a sok munka teljesen lefoglalta. Odament Jézushoz, és ezt mondta: „Uram, nem törődsz vele, hogy a testvérem magamra hagyott a munkában? Szólj neki, hogy segítsen nekem!”`,
    // 41
    `De az Úr így felelt: „Márta, Márta! Túl sokat vállalsz magadra, és sokat aggodalmaskodsz!`,
    // 42
    `Pedig csak kevés dolog van, amely igazán fontos, sőt valójában csak egyetlen egy. Mária jól választott! Ezt soha el nem vehetik tőle.”`
  ],
  [
    // 11  ~ Jézus imádkozni tanítja a tanítványait (#C) ~
    `Történt egyszer, hogy miután Jézus befejezte az imádkozást, egyik tanítványa kérte: „Uram, taníts minket imádkozni, ahogyan Bemerítő János is tanította a tanítványait!”`,
    // 2
    `Jézus ezt felelte: „Így imádkozzatok:
Atyánk, legyen megszentelve a neved!
     Jöjjön el királyi uralmad,`,
    // 3
    `A mindennapi kenyerünket add meg nekünk ma!`,
    // 4
    `Bocsásd meg bűneinket,
     ahogyan mi is megbocsátunk azoknak,
     akik ellenünk vétkeztek!
Ne engedd, hogy kísértésekkel próbára tegyenek bennünket!”`,
    // 5  ~ Kitartóan kérjetek Istentől! ~
    `Azután ezt mondta: „Ha az éjszaka közepén elmentek a barátotokhoz, és ezt mondjátok neki: »Barátom, kérlek, adj kölcsön három kenyeret!`,
    // 6
    `Egy ismerősöm érkezett hozzám átutazóban, és nincs mivel megkínálnom.«`,
    // 7
    `A barátod így válaszol odabentről: »Ne zavarj! Az ajtót már bezártam, gyermekeimmel az ágyban fekszünk. Nem tudok felkelni, hogy kenyeret adjak neked.«`,
    // 8
    `Azt mondom nektek, lehet, hogy pusztán a barátságotok kedvéért nem kel fel. De ha állhatatosan kéritek, mégis fel fog kelni, és odaadja, amire szükségetek van.`,
    // 9
    `Ezért mondom nektek: Kitartóan kérjétek, és megkapjátok! Kitartóan keressétek, és megtaláljátok! Kitartóan kopogtassatok, és kinyitják nektek az ajtót!`,
    // 10
    `Mert aki kitartóan kéri, megkapja, amit kér. Aki kitartóan keresi, az megtalálja, amit keres. Aki kitartóan kopogtat, annak kinyitják az ajtót.`,
    // 11
    `Vajon melyik apa adna kígyót a fiának, ha az halat kér tőle?`,
    // 12
    `Vagy ha tojást kér, talán skorpiót ad neki?`,
    // 13
    `Ha tehát még ti is tudtok jó ajándékot adni a gyerekeiteknek, bár gonoszak vagytok, mennyivel inkább fog Mennyei Atyátok Szentlelket adni azoknak, akik kérik tőle!”`,
    // 14  ~ Kinek a hatalmával űzi ki Jézus a gonosz szellemeket? (#D) ~
    `Történt egyszer, hogy Jézus gonosz szellemet űzött ki egy emberből, aki nem tudott beszélni. Miután kiment belőle a gonosz szellem, a néma megszólalt. Ezen mindenki szerfölött elcsodálkozott.`,
    // 15
    `Egyesek azonban azt mondták: „A gonosz szellemek fejedelmének, a Sátánnak segítségével űzi ki a gonosz szellemeket!”`,
    // 16
    `Mások pedig próbára akarták tenni Jézust, és azt kérték, hogy tegyen valami csodát, mutasson nekik valamilyen csodás mennyei jelet bizonyítékul Istentől.`,
    // 17
    `Jézus azonban jól tudta, mit gondolnak róla, és ezt mondta: „Ha egy királyság egyik része a másik ellen támad, az egész elpusztul. Hasonlóképpen tönkremegy az a család is, amelyben belső harcok dúlnak.`,
    // 18
    `Ha tehát a Sátán a saját gonosz szellemeit űzi ki, akkor valójában önmaga ellen fordul, és a királysága sem állhat fenn tovább. Ha azt mondjátok, hogy én a Sátán segítségével űzöm ki a gonosz szellemeket,`,
    // 19
    `akkor a ti tanítványaitok kinek a segítségével űzik ki azokat? Így hát ők maguk bizonyítják, hogy tévedésben vagytok!`,
    // 20
    `Ha pedig én Isten ujjával, vagyis a hatalmával űzöm ki a gonosz szellemeket, akkor nyilvánvaló, hogy Isten Királysága megérkezett hozzátok!`,
    // 21
    `Ha az erős fegyveres őrzi a maga házát, akkor biztonságban van a vagyona.`,
    // 22
    `Ha megtámadja valaki, aki még nála is erősebb, legyőzi, és elveszi a fegyvereit, amelyekben bízott, akkor a győztes elveszi a legyőzött vagyonát, és a zsákmányt szétosztja.`,
    // 23
    `Aki nincs velem, az ellenem van. Aki nem velem együtt arat, az szétszórja a termést.”`,
    // 24  ~ A gonosz szellemekről (#E) ~
    `„Amikor a gonosz szellem kimegy az emberből, száraz helyeken bolyong. Nyugalmat keres, de nem talál, ezért ezt mondja: »Inkább visszamegyek a házamba, ahonnan kijöttem!«`,
    // 25
    `Tehát visszatér, és azt kisöpörve, sőt feldíszítve találja.`,
    // 26
    `Akkor elmegy, keres hét másik szellemet, akik még nála is gonoszabbak. Majd együtt visszamennek abba az emberbe, és ott laknak. Így végül annak az állapota még rosszabb lesz, mint először volt.”`,
    // 27  ~ Kik az igazán boldogok? ~
    `Amíg Jézus ezekről beszélt, a tömegből egy asszony felkiáltott: „Milyen boldog és áldott lehet az édesanyád, hogy ő szült és szoptatott téged!”`,
    // 28
    `De Jézus így válaszolt: „Sokkal áldottabbak, akik hallják Isten beszédét, és engedelmeskednek neki!”`,
    // 29  ~ Jónás jele (#F) ~
    `Amikor egyre nagyobb tömeg gyűlt Jézus köré, ő ezt mondta: „Gonosz ez a nemzedék! Mindenáron valami csodás jelt akarnak látni bizonyítékul. De nem fognak semmilyen csodát látni, csupán azt, amely Jónás prófétával is történt. (#e)`,
    // 30
    `Ahogyan Jónás figyelmeztető jel volt Ninive lakóinak, úgy lesz az Emberfia is figyelmeztető jel ennek a nemzedéknek.`,
    // 31
    `Az ítélet napján Dél királynője (#f) együtt fog feltámadni ezzel a nemzedékkel, és elítél titeket. Miért? Mert ő igen messziről utazott ide, hogy Salamon király bölcsességét hallja. Most pedig nagyobb van itt Salamonnál!`,
    // 32
    `Ninive lakói is feltámadnak az ítéletkor ezzel a nemzedékkel együtt, és elítélnek titeket. Ők ugyanis Istenhez fordultak, amikor Jónás üzenetét hallották. Most pedig nagyobb van itt Jónásnál!”`,
    // 33  ~ Világosság és sötétség (#G) ~
    `„Senki sem azért gyújt olajmécsest, hogy kosár alá rejtse. Nem, a mécsest a mécstartóra teszik, hogy világítson azoknak, akik bejönnek a szobába!`,
    // 34
    `Egész lényedet a tekinteted világítja meg. Ezért, ha jóindulattal és adakozásra készen tekintesz az emberekre, akkor egész lényedet elárasztja a világosság. Ha viszont önző és zsugori módon nézel rájuk, akkor egész lényed elsötétül. (#g)`,
    // 35
    `Vigyázz tehát, nehogy elsötétüljön a tekinteted, amelynek éppen világítania kellene!`,
    // 36
    `Ha az egész lényedet megvilágítja a fény, és nem marad benne egyetlen sötét zug sem, akkor leszel igazán világosságban. Olyan leszel, mint akit a mécses fénye egészen megvilágít.”`,
    // 37  ~ Jézus véleménye a vallási vezetőkről (#H) ~
    `Ezután, egy farizeus vendégségbe hívta Jézust, aki el is ment hozzá, és asztalhoz telepedtek.`,
    // 38
    `Amikor a farizeus látta, hogy Jézus elhagyja az evés előtti szertartásos kézmosást, (#h) nagyon meglepődött.`,
    // 39
    `Az Úr ekkor megszólította a házigazdát: „Ti farizeusok azt gondoljátok, hogy nagyon fontos a testet kívülről lemosni. Olyan ez, mintha a pohárnak és tányérnak csak a külsejét tisztítanátok meg, pedig sokkal fontosabb, hogy belül tiszta legyen. Tele vagytok mindenféle kapzsisággal és gonoszsággal!`,
    // 40
    `Milyen ostobák vagytok! Hiszen ugyanaz az Isten teremtette az ember külsejét, aki a belsejét!`,
    // 41
    `Inkább azzal törődjetek, ami belül van! Adjatok a rászorulóknak, akkor lesztek igazán tiszták!`,
    // 42
    `Jaj nektek, farizeusok, mert tizedet adtok a mentából, a kaporból (#i) és minden más apró kerti növényből, de nem törődtök az igazságossággal, és az Isten iránti szeretettel! Pedig elsősorban ezekkel kellene törődnötök, és közben azokat se hanyagoljátok el!`,
    // 43
    `Jaj nektek, farizeusok, mert a zsinagógákban szívesen ültök a legjobb helyekre! Szeretitek, ha az utcán és a piacon mindenki tisztelettel előre köszön nektek.`,
    // 44
    `Jaj nektek, mert olyanok vagytok, mint a jeltelen sírok - rajtuk járnak az emberek, de nem is veszik észre, hogy sírra léptek!”`,
    // 45
    `Ekkor az egyik törvénytanító megszólalt: „Mester! Amikor így beszélsz, minket is megbántasz!”`,
    // 46
    `Jézus így válaszolt neki: „Jaj nektek is, törvénytanítók! Megterhelitek az embereket súlyos elvárásokkal, amelyeket viszont ti nem vesztek komolyan!`,
    // 47
    `Jaj nektek, akik síremléket építetek a prófétáknak, akiket őseitek öltek meg!`,
    // 48
    `Ezzel bizonyítjátok, hogy helyeselitek, amit őseitek tettek. Ők megölték a prófétákat, ti meg síremléket építetek nekik!`,
    // 49
    `Erre mondta Isten bölcsessége: »Küldök hozzájuk prófétákat és apostolokat, akik közül egyeseket megölnek, másokat üldözni fognak.«`,
    // 50
    `Bizony, ez a mostani nemzedék fogja elszenvedni a büntetést a világ teremtése óta meggyilkolt összes próféta miatt,`,
    // 51
    `Ábeltől kezdve egészen Zakariásig, (#j) akit az oltár és a Templom között gyilkoltak meg. Igazán mondom nektek: mindezek ezt a nemzedéket fogják sújtani!`,
    // 52
    `Jaj nektek, törvénytanítók, mert magatokhoz ragadtátok a tudás kulcsait! Ti magatok nem mentek be, akik pedig szeretnének, azokat megakadályozzátok ebben!”`,
    // 53
    `Amikor Jézus továbbment onnan, a törvénytanítók és farizeusok nagyon fel voltak háborodva. Attól fogva nagyon ellenségesen viselkedtek vele szemben. Rossz szándékkal faggatták különböző kérdésekkel,`,
    // 54
    `és egyre csak azt lesték, hogy melyik szavába tudnának belekötni.`
  ],
  [
    // 12  ~ Óvakodjatok a farizeusok kovászától! ~
    `Egyszer több ezren gyűltek össze Jézus körül. Olyan sokan voltak, hogy majdnem letaposták egymást. Jézus ekkor a tanítványaihoz fordult: „Tartsátok távol magatokat a farizeusok kovászától, vagyis attól a képmutatástól, amely rájuk jellemző!`,
    // 2
    `Mert minden eltitkolt dolog nyilvánosságra fog kerülni, és minden titok kitudódik!`,
    // 3
    `Amit a sötétben mondotok, azt a világosságban fogják hallani. Amit a belső szobákban suttogtatok egymás fülébe, azt a háztetőkről fogják kihirdetni.”`,
    // 4  ~ Istent tiszteljétek, ne az emberektől féljetek! (#I) ~
    `„Nektek mondom, a barátaimnak: Ne féljetek azoktól, akik a testet megölik, de utána már nem árthatnak.`,
    // 5
    `Megmondom, kitől féljetek: Istentől, akinek hatalma van, hogy miután megölt, a Gyehennára dobjon! Őt féljétek és tiszteljétek!`,
    // 6
    `Ugye, két fillérért (#k) öt verebet lehet venni? Mégis, egyetlen ilyen verébről sem feledkezik el Isten.`,
    // 7
    `Még a hajszálaitokat is számon tartja! Tehát ne féljetek, ti értékesebbek vagytok, mint sok-sok veréb!”`,
    // 8  ~ Ki tartozik Jézushoz? (#J) ~
    `„Mondom nektek: aki az emberek előtt tanúskodik arról, hogy hozzám tartozik, arról én (#l) is tanúskodom Isten angyalai előtt, és vállalom, hogy hozzám tartozik.`,
    // 9
    `De aki az emberek előtt nem vállal engem, arról én is azt fogom mondani Isten angyalai előtt, hogy nem tartozik hozzám.`,
    // 10
    `Ha valaki az Emberfia ellen szól, az még kaphat erre bocsánatot. De ha valaki a Szentlelket gyalázza, az nem nyer bocsánatot soha!`,
    // 11
    `Amikor zsinagógákba, uralkodók és más hatalmasságok elé visznek titeket, ne aggódjatok előre, hogy mit feleljetek védekezésül, vagy hogy mit mondjatok!`,
    // 12
    `Ne tépelődjetek ezen, mert a Szentlélek a maga idejében meg fog tanítani titeket arra, hogy mit mondjatok!”`,
    // 13  ~ A gazdag ember ostobasága ~
    `A tömegből valaki így kiáltott Jézusnak: „Mester, parancsold meg a testvéremnek, hogy ossza meg velem az örökséget!”`,
    // 14
    `Jézus így válaszolt neki: „Ember, ki hatalmazott fel engem, hogy bíráskodjak közöttetek, vagy elosszam az örökségeteket?”`,
    // 15
    `Majd az emberekhez fordulva ezt mondta: „Vigyázzatok, és kerüljétek a kapzsiságot, mert az ember élete, nem a vagyonától függ, akármilyen gazdag is!”`,
    // 16
    `Ezután egy példázatot mondott nekik: „Volt egy gazdag ember, akinek a birtoka bőséges termést hozott.`,
    // 17
    `Azon töprengett, hová tegye a sok termést, mert nem volt elég nagy raktára.`,
    // 18
    `Végül így határozott: »Lebontom a raktáraimat, és nagyobbakat építek a sok gabona, meg a többi termény számára.`,
    // 19
    `Akkor majd így szólok a lelkemhez: Látod, lelkem, sok évre elegendő vagyonod és gazdagságod van! Egyél-igyál hát, és élvezd az életet!«`,
    // 20
    `De Isten megszólította: »Milyen ostoba vagy! Még ma éjjel elkérik tőled a lelkedet. Kié lesz akkor, amit összegyűjtöttél?«`,
    // 21
    `Így jár az, aki csak magának gyűjt kincseket, és nem Isten mértéke szerint gazdag!”`,
    // 22  ~ Isten Királysága legyen az első! (#K) ~
    `A tanítványaihoz fordulva így folytatta: „Ezért azt mondom nektek: Ne aggódjatok az életetek miatt, hogy mit fogtok enni és inni, se testetek miatt, hogy mibe fogtok öltözni!`,
    // 23
    `Hiszen nagyobb dolog életet adni, mint az ételről gondoskodni! Nagyobb dolog testet alkotni, mint ruhát készíteni!`,
    // 24
    `Nézzétek a hollókat: nem vetnek, nem aratnak, nincs sem raktáruk, sem magtáruk, Isten mégis táplálja őket! Mennyivel értékesebbek vagytok ti a madaraknál!`,
    // 25
    `Ki tudná közületek aggodalmaskodásával akár csak egy órával is meghosszabbítani az életét?`,
    // 26
    `Ha pedig még ennyit sem tudsz elérni a saját erődből, akkor mi értelme van a nagyobb dolgok felől aggódni?`,
    // 27
    `Figyeljétek meg a mezőn a vadvirágokat, hogyan növekednek! Nem fáradoznak, hogy ruhát készítsenek maguknak. Mégis azt mondom nektek, hogy Salamon király a dicsősége csúcsán sem öltözködött olyan szépen, mint ezek.`,
    // 28
    `Látjátok, ezek a növények ma még virágzanak, holnapra már elszáradnak, és a tűzbe dobják őket, Isten mégis milyen gyönyörűen öltözteti őket! Akkor titeket mennyivel inkább! Ne legyetek hát kishitűek!`,
    // 29
    `Ne aggódjatok hát amiatt, hogy lesz-e mit ennetek, vagy innotok!`,
    // 30
    `Azok törtetnek ilyen dolgok után, akik nem ismerik Istent. Mennyei Atyátok azonban jól tudja, hogy mindezekre szükségetek van.`,
    // 31
    `Isten Királyságával törődjetek - erre törekedjetek mindenek előtt! Isten pedig majd törődik azzal, amire szükségetek van.`,
    // 32
    `Ne félj, te kicsiny nyájacska, mert Mennyei Atyátoknak úgy tetszett, hogy nektek adja a Királyságot!”`,
    // 33  ~ Az igazi kincs ~
    `„Adjátok el vagyonotokat, és a pénzt osszátok szét a szegények között! Szerezzetek magatoknak örök, mennyei kincseket, amelyeket a tolvajok nem lophatnak el, s a moly sem pusztíthat el!`,
    // 34
    `Mert oda húz majd a szívetek, ahol a kincseitek vannak.”`,
    // 35  ~ Mindig legyetek készen! (#L) ~
    `„Legyetek állandóan készenlétben! Kezetekben a mécses mindig égjen!`,
    // 36
    `Legyetek olyanok, mint a szolgák, akik felkészülten várják uruk hazaérkezését a lakodalomból, s amikor megérkezik és kopogtat, azonnal kinyitják előtte az ajtót.`,
    // 37
    `Boldogok azok a szolgák, akiket uruk készenlétben talál, amikor megérkezik! Bizony, mondom nektek: az ilyen szolgákat asztalhoz ülteti, és kiszolgálja őket!`,
    // 38
    `Bizony boldogok ők, mert készen állnak, akár éjfélkor, akár hajnalban jön haza uruk!`,
    // 39
    `De jól jegyezzétek meg: ha tudná a házigazda, hogy melyik órában jön a tolvaj, nem engedné, hogy betörjön a házába.`,
    // 40
    `Ti is legyetek mindig készen, mert az Emberfia is akkor fog eljönni, amikor nem gondolnátok!”`,
    // 41  ~ Példázat a jó és a gonosz szolgáról ~
    `Akkor Péter megkérdezte: „Uram, csak nekünk szólnak ezek a példázatok, vagy mindenki másnak is?”`,
    // 42
    `Az Úr így válaszolt: „Gondoljátok csak meg: a ház ura megbízza egyik szolgáját, hogy viseljen gondot a többi szolgájára, és idejében adjon nekik enni. Miből látszik, hogy ez a szolga hűséges és okos?`,
    // 43
    `Abból, hogy amikor az ura megérkezik, a szolga éppen azt a munkát végzi, amit ura rábízott! Milyen boldog az ilyen szolga!`,
    // 44
    `Igazán mondom nektek: ura rá fogja bízni egész birtokának igazgatását!`,
    // 45
    `De mi történik, ha az a szolga gonosz, és azt gondolja, hogy ura még sokáig nem tér haza? Verni kezdi a szolgatársait, férfiakat és nőket egyaránt, eszik-iszik és részegeskedik.`,
    // 46
    `Ura azonban éppen akkor fog megérkezni, amikor a gonosz szolga nem számít rá, és nem is gondolja. Akkor majd az ura keményen megbünteti őt, és oda küldi, ahová a hitetlenek kerülnek.`,
    // 47
    `Az a szolga, aki tudta, hogy ura mit bízott rá, de hozzá sem fogott, hogy azt megtegye, vagy nem készült fel ura érkezésére, súlyos büntetést kap.`,
    // 48
    `De mi lesz azzal a szolgával, aki nem tudta, hogy ura mit kíván tőle? Az ilyen szolga enyhébb büntetést fog kapni. Mert akinek sokat adtak, attól sokat is kérnek számon! Akire sokat bíztak, annak nagyobb a felelőssége!”`,
    // 49  ~ Jézus követése miatt meghasonlás támad (#M) ~
    `„Azért jöttem, hogy tüzet hozzak a Földre, és mennyire szeretném, ha már lángolna!`,
    // 50
    `Be kell merítkeznem, (#m) és nagy teher nehezedik rám, amíg ez meg nem történik!`,
    // 51
    `Úgy gondoljátok, azért jöttem, hogy békét hozzak a Földre? Nem! Az emberek szembefordulnak egymással miattam.`,
    // 52
    `Mostantól fogva még a családtagok között is meghasonlás támad! Egy öttagú családban hárman lesznek kettő ellen, és ketten három ellen.`,
    // 53
    `Az apa fia ellen fordul,
     és a fiú apja ellen,
az anya leánya ellen fordul,
     és a leány anyja ellen,
az anyós menye ellen fordul,
     a meny pedig anyósa ellen.” (#n)`,
    // 54  ~ Az idők jelei (#N) ~
    `Azután Jézus a sokasághoz fordult: „Amikor nyugatról felhő közeleg, azt mondjátok, hogy eső jön, és úgy is lesz.`,
    // 55
    `Amikor déli szél fúj, azt mondjátok, hogy nagy meleg jön, és úgy is lesz.`,
    // 56
    `Képmutatók! Mikor látjátok az égen és a földön a jeleket, megértitek milyen idő következik! Akkor hogyan lehet, hogy a mostani idők jeleit nem értitek meg?”`,
    // 57  ~ Békülj ki ellenfeleddel! (#O) ~
    `„Miért nem döntitek el ti magatok, hogy mi az igazságos?`,
    // 58
    `Gondold csak el: valaki vádol téged, pert indít ellened, és ellenfeleddel együtt a bíró elé kell állnotok. Ilyen esetben nagyon igyekezz, hogy még útközben kibéküljetek egymással! Ha ez nem sikerül, az ellenfeled a bíró elé visz, a bíró átad a börtönőrnek, az pedig börtönbe zár téged!`,
    // 59
    `Mondom neked: ki nem jössz onnan, amíg az utolsó fillérig meg nem fizetted, amivel tartozol!”`
  ],
  [
    // 13  ~ Térjetek vissza Istenhez! ~
    `Abban az időben hírt hoztak Jézusnak arról, mi történt néhány galileaival. Pilátus megölette ezeket az embereket, és a vérük összekeveredett az áldozati állatok vérével.`,
    // 2
    `Ekkor Jézus megkérdezte: „Gondoljátok, hogy ezek a galileaiak bűnösebbek voltak, mint a többiek, s azért haltak meg így?`,
    // 3
    `Nem! Sőt, mondom nektek: ha vissza nem tértek Istenhez, akkor mindnyájan hasonlóképpen vesztek el!`,
    // 4
    `Vagy mit gondoltok arról a tizennyolc emberről, akik akkor haltak meg, amikor a Siloám tornya rájuk szakadt? Gondoljátok, hogy bűnösebbek voltak, mint az összes többi jeruzsálemi?`,
    // 5
    `Nem! Sőt, mondom nektek: ha vissza nem tértek Istenhez, akkor mindnyájan hasonlóképpen vesztek el!”`,
    // 6  ~ A gyümölcstelen fügefa ~
    `Ezután egy példázatot mondott nekik: „Egy ember fügefát ültetett a szőlőskertjébe. Egy idő múlva kiment, hogy gyümölcsöt szedjen róla, de egyet sem talált.`,
    // 7
    `Ezért szólt a kertésznek: »Már három éve hiába keresek gyümölcsöt ezen a fán. Vágd ki, hogy ne foglalja a földet hiába!«`,
    // 8
    `A kertész azonban így válaszolt: »Uram, kérlek, adj neki még egy évet! Felásom az alját, és megtrágyázom,`,
    // 9
    `akkor talán jövőre teremni fog. Ha mégsem, akkor vágd ki!«”`,
    // 10  ~ Jézus szombaton meggyógyít egy asszonyt ~
    `Egyszer Jézus a zsinagógában tanított szombaton.`,
    // 11
    `Volt ott egy asszony, aki már tizennyolc éve beteg volt a benne lakó gonosz szellem miatt. Egészen összegörnyedt, és nem tudott felegyenesedni.`,
    // 12
    `Amikor Jézus meglátta, magához hívta, és megszólította: „Asszony, megszabadultál az erőtlenségtől!”`,
    // 13
    `Rátette a kezét, mire az asszony azonnal felegyenesedett, és Istent dicsérte.`,
    // 14
    `De a zsinagóga vezetője megharagudott Jézusra, amiért szombaton gyógyította meg az asszonyt. Ezt mondta: „Hat nap van egy héten, hogy dolgozzatok. Azokon a napokon jöjjetek, ha meg akartok gyógyulni, ne szombaton!”`,
    // 15
    `Erre az Úr így válaszolt: „Képmutatók! Ugye, szombaton is mindannyian eloldozzátok az ökreiteket meg a szamaraitokat az istállóból, hogy megitassátok azokat?`,
    // 16
    `Nézzétek ezt az asszonyt, aki Ábrahámtól származik, és akit a Sátán tizennyolc évig megkötözve tartott! Ha az ökröket el lehet oldozni szombaton, akkor mennyivel inkább fel kell oldani ezt az asszonyt a kötelékeiből?!”`,
    // 17
    `Ekkor mindenki elszégyellte magát, aki ellenkezett vele, a többiek pedig örültek Jézus csodálatos tetteinek.`,
    // 18  ~ A mustármag és a kovász példázata (#P) ~
    `Jézus ezt mondta: „Milyen az Isten Királysága? Mihez hasonlítsam?`,
    // 19
    `Olyan az, mint a mustármag, amelyet valaki elvet a kertjébe. Amikor a mag kifejlődik, a növény szinte fává nő! Még a madarak is fészket raknak az ágai között.”`,
    // 20
    `Majd így folytatta: „Mihez is hasonlítsam Isten Királyságát?`,
    // 21
    `Hasonló ehhez: egy asszony kovászt kevert három mérce (#o) lisztbe, majd állni hagyta, amíg az egész tészta megkelt.”`,
    // 22  ~ A keskeny ajtó (#Q) ~
    `Jézus Jeruzsálem felé közeledett, és közben falvakon és városokon ment keresztül. Útközben mindenhol tanított.`,
    // 23
    `Egyszer valaki megkérdezte tőle: „Uram, csak kevesen fognak üdvözülni?”
Ő pedig így felelt:`,
    // 24
    `„Teljes erővel igyekezzetek, hogy be tudjatok menni a keskeny ajtón! Mert mondom nektek: sokan próbálnak majd bejutni rajta, de nem sikerül nekik.`,
    // 25
    `Ha pedig a ház ura egyszer felkel, és bezárja az ajtót, ti kint maradtok. Akkor majd kopogtattok, és azt mondjátok: »Uram, nyiss ajtót nekünk!« De ő ezt feleli: »Nem ismerlek titeket, s nem tudom, honnan jöttetek.«`,
    // 26
    `Erre ti majd így válaszoltok: »De hiszen együtt ettünk és ittunk veled, és az utcáinkon tanítottál.«`,
    // 27
    `Ő azonban ezt fogja válaszolni: »Nem tudom, honnan jöttetek! Menjetek innen, ti gonosztevők!«`,
    // 28
    `Akkor majd meglátjátok Ábrahámot, Izsákot, Jákóbot, és az összes prófétát Isten Királyságában, de ti nem mehettek be oda! Akkor majd sírni fogtok, és fogaitokat csikorgatjátok!`,
    // 29
    `Sokan jönnek majd keletről, nyugatról, északról és délről, és asztalhoz ülnek Isten Királyságában.`,
    // 30
    `Jegyezzétek meg, hogy vannak utolsók, akikből elsők lesznek, és vannak elsők, akikből utolsók lesznek.”`,
    // 31  ~ Jézus a közelgő haláláról beszél (#R) ~
    `Egyszer néhány farizeus jött Jézushoz, és figyelmeztették: „Menj máshová, mert Heródes meg akar öletni téged!”`,
    // 32
    `De Jézus így felelt nekik: „Menjetek, és mondjátok meg annak a rókának, hogy ma és holnap még gonosz szellemeket űzök ki, és betegeket gyógyítok, de a harmadik napon befejezem a munkámat.`,
    // 33
    `Ma, holnap és holnapután még úton kell lennem, mert lehetetlen, hogy a Próféta máshol haljon meg, mint Jeruzsálemben!`,
    // 34
    `Jeruzsálem, Jeruzsálem! Megölöd a prófétákat, és megkövezed azokat, akiket Isten hozzád küld! Hányszor akartam összegyűjteni a gyermekeidet, ahogyan a tyúk szárnyai alá gyűjti a csibéit, de ti nem akartátok!`,
    // 35
    `Bizony elhagyatottá lesz a Házatok! Igazán mondom nektek: nem láttok többé engem addig a napig, amikor majd ezt mondjátok: »Áldott, aki az Örökkévaló nevében jön!«” (#p)`
  ],
  [
    // 14  ~ Szabad-e szombaton gyógyítani? ~
    `Egyik szombaton Jézus vendégségbe ment a farizeusok egyik vezetőjének házába. Akik ott voltak, mind figyelték őt.`,
    // 2
    `Egyszer csak egy vízkóros (#q) beteg állt meg előtte.`,
    // 3
    `Jézus megkérdezte a törvénytanítóktól és a farizeusoktól: „A Törvény szerint szabad-e szombaton meggyógyítani valakit, vagy nem?”`,
    // 4
    `De mind hallgattak. Ekkor Jézus megérintette a beteget, meggyógyította, majd elküldte.`,
    // 5
    `Azután ismét a törvénytanítókhoz és a farizeusokhoz fordult: „Ha közületek valakinek a fia, vagy az ökre beleesik egy kútba, ugye azonnal kihúzzátok onnan, még akkor is, ha éppen szombat van?”`,
    // 6
    `Azok pedig egy szót sem tudtak válaszolni.`,
    // 7  ~ Barátom, ülj előbbre! ~
    `Ezután a vendégeknek is mondott egy példázatot, mert észrevette, hogyan keresik maguknak az előkelő helyeket.`,
    // 8
    `„Ha lakodalomba hívnak, ne ülj mindjárt a legelőkelőbb helyre! Lehet, hogy a házigazda nálad előkelőbb vendéget is meghívott.`,
    // 9
    `Ha pedig a gazda odamegy hozzád, és azt mondja: »Add át neki a helyed!«, akkor szégyenkezve a legutolsó helyre kell ülnöd.`,
    // 10
    `Ezért, ha meghívnak valahová, inkább ülj a legutolsó helyre! Akkor, ha bejön a házigazda, azt mondja: »Barátom, ülj előbbre!« Ezzel megtisztel téged a többi vendég előtt.`,
    // 11
    `Mert aki fölemeli magát, azt meg fogják alázni. Aki viszont megalázza magát, azt fölemelik.”`,
    // 12  ~ Megkapod a jutalmad! ~
    `Ezután Jézus a házigazdához fordult: „Amikor vendégséget készítesz, ne a barátaidat, testvéreidet, rokonaidat, vagy a gazdag szomszédaidat hívd meg! Hiszen akkor viszonzásul ők is meghívnak téged, és ezzel már meg is kaptad jutalmadat!`,
    // 13
    `Inkább szegényeket, bénákat, sántákat és vakokat hívj meg vendégségbe!`,
    // 14
    `Akkor boldog és áldott leszel, mert ők nem tudják a meghívásodat viszonozni. Az igazságszerető emberek feltámadásakor pedig majd megkapod ezért a jutalmadat.”`,
    // 15  ~ Páldázat a nagy vendégségről (#S) ~
    `Ekkor az egyik vendég ezt mondta Jézusnak: „Milyen boldog az, akit Isten Királyságában fognak vendégül látni!”`,
    // 16
    `Jézus így válaszolt: „Egyszer valaki nagy vacsorát készített, amelyre sok vendéget meghívott.`,
    // 17
    `Amikor eljött a vacsora ideje, elküldte a szolgáját. Ezt üzente vele a meghívottaknak: »Jöjjetek a vacsorára, mert már mindent elkészítettem!«`,
    // 18
    `De azok egytől egyig mentegetőzni kezdtek. Az első azt mondta a szolgának: »Szántóföldet vettem, oda kell mennem, hogy megnézzem. Kérlek, ments ki a gazdádnál!«`,
    // 19
    `A másik ezt mondta: »Öt pár igavonó ökröt vettem, és éppen most megyek kipróbálni őket. Kérlek, ments ki a gazdádnál!«`,
    // 20
    `Egy harmadik azt üzente: »Éppen most házasodtam, ezért nem tudok elmenni!«`,
    // 21
    `A szolga visszatért urához, és mindezt elmondta. A házigazda ekkor megharagudott, és megparancsolta a szolgának: »Siess, és hozd be a város utcáiról és tereiről a szegényeket, a bénákat, a vakokat és a sántákat!«`,
    // 22
    `Később a szolga jelentette: »Uram, megtettem, amit parancsoltál, de még mindig van szabad hely.«`,
    // 23
    `Ekkor az úr azt mondta: »Menj ki az országutakra, és az ösvényekre: sürgesd az embereket, hogy jöjjenek be! Azt akarom, hogy megteljen a házam vendégekkel!`,
    // 24
    `Mert mondom nektek: akiket először meghívtam, azok közül senki sem fog velem vacsorázni.«”`,
    // 25  ~ Ki lehet Jézus tanítványa? (#T) ~
    `Nagy tömeg kísérte Jézust, ő pedig hozzájuk fordult, és ezt mondta:`,
    // 26
    `„Csak az lehet az én tanítványom, aki hozzám jön, és jobban szeret engem, mint apját, anyját, feleségét, gyermekeit vagy testvéreit! Igen, csak ha jobban szeret engem még a saját lelkénél is!`,
    // 27
    `Aki nem veszi vállára a keresztjét, és nem azzal együtt követ engem, az nem lehet a tanítványom!`,
    // 28
    `Ha tornyot akarsz építeni, akkor előbb leülsz, és megtervezed a költségeket, hogy lássad, elég-e a pénzed az építkezés befejezéséhez.`,
    // 29
    `Különben előfordulhat, hogy az alapot megépíted, de a házat már nem tudod befejezni. Akkor pedig, aki csak látja a félbe maradt épületet, gúnyolni fog, és azt mondja:`,
    // 30
    `»Ez az ember hozzákezdett az építkezéshez, de befejezni már nem tudta.«`,
    // 31
    `Ha egy király a hadseregével háborúba indul egy másik király ellen, akkor előbb tanácskozik, és haditervet készít. Ha neki csak tízezer katonája van, akkor meg kell gondolnia, hogy képes-e legyőzni azt az ellenfelét, aki húszezer harcossal jön ellene!`,
    // 32
    `Mert ha nem, akkor inkább követeket küld az ellenséghez, amíg a másik még távol van, hogy megkérdezze a békefeltételeket.`,
    // 33
    `Ugyanez vonatkozik rátok is: ha le nem mondtok mindenről, amitek csak van, nem lehettek a tanítványaim!”`,
    // 34  ~ Az ízét vesztett só (#U) ~
    `„Jó a só, de ha elveszti az ízét, hogyan lehetne ismét sóssá tenni?`,
    // 35
    `Az ízetlen só már semmire sem jó! Sem a szántóföldre, sem a trágyára nem használható, ezért kidobják.
Akinek van füle, hallja és értse meg, amit mondok!”`
  ],
  [
    // 15  ~ Az elveszett juh (#V) ~
    `A vámszedők és a bűnösök mind Jézus köré gyűltek, hogy hallgassák őt.`,
    // 2
    `De a farizeusok és a törvénytanítók morgolódni kezdtek: „Ez az ember (#r) a bűnösökkel barátkozik, sőt, együtt eszik velük!”`,
    // 3
    `Ekkor Jézus a következő példázatot mondta nekik:`,
    // 4
    `„Ha van száz juhod, és az egyiket elveszted, mit teszel? Ugye, hogy ott hagyod a kilencvenkilencet a pusztában, utána mész annak az egynek, amelyik elveszett, és addig keresed, amíg meg nem találod?`,
    // 5
    `Mikor pedig megtalálod, nagy örömmel a válladra veszed,`,
    // 6
    `és hazaviszed. Azután örömmel elújságolod a szomszédaidnak, hogy megtaláltad az elveszett juhodat.`,
    // 7
    `Ezért azt mondom nektek, nagyobb öröm lesz a Mennyben egyetlen bűnös miatt, aki visszatér Istenhez, mint kilencvenkilenc igaz miatt, akiknek nincs szükségük erre.`,
    // 8
    `Vagy tegyük fel, hogy egy asszonynak van tíz ezüstpénze, és az egyiket elveszti. Mit gondoltok, mit fog tenni? Lámpát gyújt, gondosan felsöpri az egész házat, és addig kutat utána, amíg megtalálja az elveszett pénzt.`,
    // 9
    `Azután örömmel elújságolja a szomszédaidnak, hogy megtalálta elveszett ezüstpénzét.`,
    // 10
    `Ezért azt mondom nektek, Isten angyalai ugyanígy örülnek, amikor egy bűnös visszatér Istenhez.”`,
    // 11  ~ A fiú, aki eltékozolta örökségét ~
    `Azután így folytatta: „Egy embernek volt két fia.`,
    // 12
    `A fiatalabbik azt mondta az apjának: »Apám, add ki az örökségemet!« Ekkor az apa szétosztotta a vagyonát a két fiú között.`,
    // 13
    `Nem sokkal ezután a fiatalabbik minden vagyonát pénzzé tette, és elköltözött egy távoli országba. Ott olyan költekező életmódot folytatott, hogy hamarosan mindenét elpazarolta.`,
    // 14
    `Miután már minden pénze elfogyott, éhínség támadt azon a vidéken, és a fiú is nélkülözött.`,
    // 15
    `Ezért munkát vállalt egy ottani gazdánál, aki felfogadta, hogy a disznónyáját őrizze.`,
    // 16
    `A fiú már annyira éhes volt, hogy még abból is szívesen evett volna, amit a disznók ettek, de senki nem adott neki.`,
    // 17
    `Végül belátta, hogy mennyire ostoba volt, és ezt mondta magában: »Apám minden szolgájának bőségesen van mit ennie, én meg itt halok éhen!`,
    // 18
    `Azonnal elindulok, visszamegyek apámhoz, és azt mondom neki: Apám, vétkeztem Isten ellen, és ellened is.`,
    // 19
    `Nem vagyok többé méltó, hogy a fiadnak hívjanak, de legalább hadd álljak be a béreseid közé!«`,
    // 20
    `Ezzel a fiú elindult, hogy visszatérjen az apjához.”
A tékozló fiú hazatérése
„Még messze volt a háztól, amikor az apja meglátta és megsajnálta. Eléje szaladt, a nyakába borult, megölelte és megcsókolta.`,
    // 21
    `A fiú pedig ezt mondta: »Apám, vétkeztem Isten ellen, és ellened is. Nem vagyok többé méltó, hogy a fiad legyek.« (#s)`,
    // 22
    `De az apja ezt parancsolta a szolgáknak: »Siessetek, hozzátok ide a legszebb ruhát, és adjátok rá! Húzzatok gyűrűt az ujjára, és sarut a lábára!`,
    // 23
    `Azután vágjatok le egy hízott borjút, hogy együtt ünnepeljünk,`,
    // 24
    `mert a fiam meghalt, de feltámadt, elveszett, de megtaláltam!« Ezután ünnepelni kezdtek.”`,
    // 25  ~ Az idősebb fiú féltékenysége ~
    `„Az idősebb fiú ezalatt a mezőn volt. Amikor hazafelé jött, és a ház közelébe ért, meghallotta a zenét és a táncot.`,
    // 26
    `Odahívta egyik szolgáját, és megkérdezte tőle, mi történt.`,
    // 27
    `»Hazajött az öcséd - felelte a szolga -, apád pedig levágatta a hízott borjút, mert épségben kapta vissza a fiát.«`,
    // 28
    `Emiatt az idősebbik fiú megsértődött, és nem akart bemenni a házba. Az apja kiment hozzá, és kérlelte, hogy jöjjön be.`,
    // 29
    `Ő azonban így válaszolt: »Látod, én évek óta szolgállak, és teljesítem minden parancsodat, de nekem még egy kecskét sem adtál soha, hogy a barátaimat vendégül lássam!`,
    // 30
    `Mikor hazajön az a fiad, aki a vagyonodat prostituáltakra pazarolta, te levágatod a kedvéért a hízott borjút!«`,
    // 31
    `Az apja erre így válaszolt: »Fiam, te mindig velem vagy, és minden vagyonom a tiéd!`,
    // 32
    `Most gyere, ünnepeljünk, és örüljünk együtt, mert öcséd meghalt, de feltámadt! Elveszett, de megtaláltam!«”`
  ],
  [
    // 16  ~ Példázat a csaló intézőről ~
    `Azután Jézus a tanítványainak mondott egy példázatot: „Volt egy gazdag ember, és annak egy intézője, akire rábízta egész gazdasága irányítását. Az intézőt egyszer bevádolták a gazdánál, hogy elpazarolja a rábízott vagyont.`,
    // 2
    `Ezért a gazda magához hívatta, és felelősségre vonta: »Mit hallok rólad?! Számolj el, hogyan gazdálkodtál a vagyonommal, mert elbocsátalak!«`,
    // 3
    `Erre az így gondolkozott: »Mit tegyek? Látom, hogy elvesztem az állásomat! Kapálni nem tudok, koldulni meg szégyellek.`,
    // 4
    `Tudom már, mit tegyek, hogy az emberek befogadjanak a házukba, amikor majd elvesztem az állásomat!«`,
    // 5
    `Azután egyenként magához hívatta a tulajdonos adósait. Megkérdezte az elsőtől: »Mennyivel tartozol?«`,
    // 6
    `Az így felelt: »Száz korsó (#t) olívaolajjal.« Mire ő azt mondta: »Itt a papírod, ülj le, és gyorsan javítsd ki ötvenre!«`,
    // 7
    `Azután a másodiktól is megkérdezte: »Hát te mennyivel tartozol?« Az pedig így válaszolt: »Száz kórus (#u) búzával.« Ekkor ő ezt mondta: »Itt a papírod, javítsd ki nyolcvanra!«`,
    // 8
    `Később a gazda mégis dicsérte ezt a csaló intézőt, mert az okosan viselkedett. Mert akik ehhez a világhoz tartoznak, okosabban bánnak egymással, mint azok, akik a világossághoz tartoznak.`,
    // 9
    `Én pedig azt mondom nektek, hogy használjátok fel a vagyonotokat és pénzeteket arra, hogy barátokat szerezzetek magatoknak! Így azután, amikor majd meghaltok, azok a barátok örömmel fogadnak titeket, amikor megérkeztek az örök hazába.`,
    // 10
    `Aki hűségesen gazdálkodik a kevéssel, arra sokat is rá lehet bízni. De aki hűtlenül kezeli a keveset, az akkor is csalni fog, mikor sokat bíznak rá.`,
    // 11
    `Ezért, ha a világi vagyonnal és a pénzzel nem gazdálkodtok hűségesen, akkor nem fogják rátok bízni az igazi gazdagságot!`,
    // 12
    `Ha nem gazdálkodtok hűségesen a mások vagyonával és pénzével, akkor nem fogják rátok bízni azt sem, ami pedig a tiétek!`,
    // 13  ~ Nem szolgálhatsz egyszerre két úrnak! ~
    `Egyetlen szolga sem szolgálhat egyszerre két úrnak, mert vagy az egyiket gyűlöli, és a másikat szereti, vagy az egyikhez ragaszkodik, és a másikat megveti. Nem szolgálhatjátok egyszerre Istent és a Pénzt.” (#v)`,
    // 14
    `Amikor hallották ezt a farizeusok, akik pénzsóvárak voltak, kigúnyolták Jézust.`,
    // 15
    `Ő pedig ezt mondta nekik: „Ti elhitetitek az emberekkel, hogy igazságosak vagytok, de Istent nem tudjátok becsapni, mert ő ismeri a szíveteket. Amit az emberek fontosnak és értékesnek tartanak, az Isten számára utálatos!`,
    // 16  ~ A Törvényről (#W) ~
    `Bemerítő János megérkezése előtt az embereket Mózes Törvénye és a próféták írásai szerint tanították. János fellépése óta azonban Isten Királyságának az örömüzenetét hirdetjük, és mindenki itt tolong, hogy bemehessen a Királyságba.`,
    // 17
    `Mégis, a Törvényből egyetlen betű vagy pont sem veszíti el érvényességét! Még az ég és a föld is hamarabb elmúlik, mint hogy ez megtörténjen!”`,
    // 18  ~ A válásról ~
    `„Aki a feleségétől elválik, és mást vesz feleségül, az házasságtörést követ el. Aki elvált asszonyt vesz feleségül, az is házasságtörést követ el.”`,
    // 19  ~ A gazdag és Lázár ~
    `Jézus ezt mondta: „Volt egyszer egy gazdag ember, aki mindig a legdrágább, legfinomabb ruhákat viselte, és napjait fényűző lakomákkal töltötte.`,
    // 20
    `A háza kapujában egy sebekkel borított szegény koldus feküdt, akit Lázárnak hívtak.`,
    // 21
    `Arra vágyott, hogy legalább a gazdag asztaláról lehulló maradékokkal jóllakhasson, de csak a kutyák jártak hozzá, és a sebeit nyalogatták.`,
    // 22
    `Egyszer aztán meghalt a koldus, és az angyalok oda vitték, ahol most Ábrahám él. A gazdag is meghalt, és eltemették,`,
    // 23
    `de ő a halottak országába került. Egyszer, amikor gyötrelmei között felnézett, meglátta a távolban Ábrahámot, mellette pedig Lázárt.`,
    // 24
    `Ekkor felkiáltott: »Atyám, Ábrahám, könyörülj rajtam, és küldd el Lázárt, hogy a vízbe mártott ujjával lehűtse a nyelvemet, mert borzasztóan éget ez a tűz!«`,
    // 25
    `De Ábrahám így válaszolt: »Fiam, emlékezz csak! Amíg a földön éltél, részed volt minden földi jóban. Lázárnak akkor csak a nélkülözés, meg a szenvedés jutott. Most neki a vigasztalás, neked pedig a szenvedés a részed.`,
    // 26
    `Ezen felül köztünk és köztetek nagy és átjárhatatlan szakadék van. Innen senki sem mehet át hozzátok, és tőletek sem jöhet át senki.«`,
    // 27
    `Ekkor a gazdag így kérte: »Atyám, akkor legalább küldd el Lázárt az apám házához!`,
    // 28
    `Figyelmeztesse az öt testvéremet, nehogy ők is ide kerüljenek, a gyötrődés helyére!«`,
    // 29
    `De Ábrahám így válaszolt: »Nekik ott van Mózes Törvénye és a próféták írásai, hallgassanak rájuk!«`,
    // 30
    `De a gazdag tovább vitatkozott: »Nem úgy van, Atyám! Ha valaki a halottak közül megy vissza hozzájuk, akkor biztosan megváltoztatják az életüket.«`,
    // 31
    `Ábrahám így válaszolt: »Ha Mózesre és a prófétákra nem hallgatnak, akkor az sem győzi meg őket, ha valaki feltámad a halottak közül.«”`
  ],
  [
    // 17  ~ Ne okozz megütközést! (#X) ~
    `Ezt mondta Jézus a tanítványainak: „Elkerülhetetlen, hogy történjenek olyan dolgok, amelyek miatt egyesek elveszítik a hitüket. De jaj annak, aki miatt ilyesmi történik!`,
    // 2
    `Jobban járna, ha egy malomkövet kötnének a nyakára, és bedobnák a tengerbe, mielőtt ilyen bajt okozna.`,
    // 3
    `Vigyázzatok hát, legyetek óvatosak!
Ha Isten családjában valamelyik testvéred bűnt követ el, figyelmeztesd, és ha megbánja, (#w) bocsáss meg neki!`,
    // 4
    `Ha napjában hétszer is vétkezik ellened, és hétszer visszajön hozzád megbánással, bocsáss meg neki!”`,
    // 5  ~ A mustármagnyi hit ~
    `Akkor az apostolok kérték az Urat: „Erősítsd a hitünket!”`,
    // 6
    `Ő így válaszolt: „Ha legalább akkora hitetek lenne, mint egy mustármag, akkor mondhatnátok ennek az eperfának, hogy szakadjon ki tövestől, és gyökerezzen meg a tengerben - az pedig engedelmeskedne nektek.”`,
    // 7  ~ A szolga és ura ~
    `Jézus ezt mondta: „Ki az közületek, aki azt mondja a rabszolgájának, amikor az a szántás vagy legeltetés után hazajön a mezőről: »Gyere, ülj le, és vacsorázz meg«?`,
    // 8
    `Ugye, hogy inkább ezt mondjátok: »Készíts nekem vacsorát, vedd fel a kötényedet, és szolgálj ki, amíg eszem és iszom! Azután majd te is vacsorázhatsz.«`,
    // 9
    `A szolgát nem illeti külön dicséret azért, hogy elvégzi, amit rábíztak, hiszen csak azt tette, ami a kötelessége.`,
    // 10
    `Rátok is ez érvényes. Ha mindazt elvégeztétek, amit rátok bíztak, ti is elmondhatjátok: »Rabszolgák vagyunk, nem érdemlünk semmi külön elismerést. Csak azt tettük, ami a kötelességünk.«”`,
    // 11  ~ Hol van a többi kilenc? ~
    `Jézus útban volt Jeruzsálem felé, és Galileából éppen Samáriába érkezett.`,
    // 12
    `Amikor az egyik faluba ért, tíz leprás jött vele szembe, akik jó messze megálltak,`,
    // 13
    `és onnan kiabáltak: „Jézus, Mester, segíts rajtunk!”`,
    // 14
    `Mikor Jézus látta őket, ezt mondta nekik: „Menjetek, mutassátok meg magatokat a papnak!” (#x)
Azok mind a tízen el is indultak, és útközben meggyógyultak.`,
    // 15
    `Egyikük, amikor látta, hogy meggyógyult, visszajött Jézushoz, és hangosan dicsérte Istent.`,
    // 16
    `Azután arcra borult Jézus lába előtt, és megköszönte, hogy meggyógyította. Ez az egy éppen samáriai volt.`,
    // 17
    `Jézus ezt kérdezte: „Nem tízen gyógyultak meg? Hol van a többi kilenc?`,
    // 18
    `Egyikük sem jött vissza, hogy Istent dicsőítse, csak ez az idegen?”`,
    // 19
    `Azután hozzá fordult: „Kelj fel, és menj el békességgel! A hited megmentett téged.”`,
    // 20  ~ Isten Királysága bennetek van (#Y) ~
    `Egyszer a farizeusok megkérdezték Jézust, hogy mikor jön majd el Isten Királysága.
Így válaszolt: „Isten Királysága bizony eljön, de nem szemmel látható módon.`,
    // 21
    `Nem úgy, hogy rámutatnak: »Itt van!«, vagy »Ott van!«, mert Isten Királysága bennetek és közöttetek van.”`,
    // 22  ~ Amikor az Emberfia eljön ~
    `A tanítványainak pedig ezt mondta: „Eljön majd az idő, amikor szeretnétek látni legalább egyetlen egyet az Emberfiának napjai közül, de nem fogtok látni.`,
    // 23
    `Amikor ezt mondják nektek: »Nézd, itt van!«, vagy: »Ott van!«, ne menjetek oda, és ne kövessétek őket!”`,
    // 24
    `„Ahogy a villám megvilágítja egyik végétől a másikig az egész égboltot, olyan nyilvánvaló módon jön vissza az Emberfia is azon a napon.`,
    // 25
    `De előbb még sokat kell szenvednie. Ez a nemzedék pedig elutasítja őt.`,
    // 26
    `Ahogyan Nóé napjaiban volt, úgy lesz az Emberfia eljövetelének idejében is.`,
    // 27
    `Akkor az emberek ettek, ittak, megházasodtak és férjhez mentek egészen addig, amíg Nóé be nem ment a bárkába. Azután jött az Özönvíz, és mindenkit elpusztított.`,
    // 28
    `Ugyanaz történik majd, mint ami Lót idején történt. Az emberek akkor is ettek, ittak, vásároltak és eladtak, ültettek és építettek,`,
    // 29
    `de mikor Lót kiment Sodomából, tűz és kéneső hullott az égből, és mindenkit elpusztított a városban.`,
    // 30
    `Ugyanígy lesz abban az időben is, amikor az Emberfia megjelenik.`,
    // 31
    `Azon a napon, ha valaki éppen felment a háza lapos tetejére, vissza se menjen a házba, hogy onnan elvigyen valamit, hanem azonnal meneküljön! Ha a mezőn lesz, azonnal meneküljön, ne forduljon vissza és ne törődjön azzal, amit hátrahagy!`,
    // 32
    `Emlékezzetek Lót feleségére! (#y)`,
    // 33
    `Aki meg akarja őrizni a lelkét, vagyis az életét, az el fogja veszteni, de aki feladja az életét, az örökre megmenti.`,
    // 34
    `Mondom nektek: azon az éjszakán, ha ketten lesznek egy ágyban, az egyiket felviszik, a másikat otthagyják.`,
    // 35
    `Ha két asszony őröl majd együtt a kézimalommal, az egyiket felviszik, a másikat otthagyják.`,
    // 36
    `Két férfi lesz majd a mezőn, az egyiket felviszik, a másikat otthagyják.”`,
    // 37
    `A tanítványok megkérdezték tőle: „Hová, Uram?”
Ő pedig így válaszolt: „Ahol a tetem van, oda gyűlnek a keselyűk.” (#aa)`
  ],
  [
    // 18  ~ A kitartó imádkozásról ~
    `Jézus példázatot mondott a tanítványainak, amellyel arra tanította őket, hogy kitartóan imádkozzanak, és ne fáradjanak bele (#ab) soha.`,
    // 2
    `„Volt egyszer egy bíró egy városban, aki Istent nem tisztelte, és nem becsülte az embereket sem.`,
    // 3
    `Élt abban a városban egy özvegyasszony, aki folyton a bíró nyakára járt, és szüntelen arra kérte: »Szolgáltass nekem igazságot ellenfelemmel szemben, és védj meg tőle!«`,
    // 4
    `A bíró egy ideig nem akart rajta segíteni, de végül ezt gondolta: »Istent nem tisztelem, és nem érdekel, hogy mit gondolnak rólam az emberek.`,
    // 5
    `De ez az özvegyasszony már terhemre van, mert folyton a nyakamra jár. Nem bánom, igazságot szolgáltatok neki, és megvédem, hogy ne zaklasson tovább.«”`,
    // 6
    `Az Úr így folytatta: „Figyeljétek, mit mondott ez az igazságtalan bíró!`,
    // 7
    `Mit gondoltok, ha még ő is igazságot szolgáltat, akkor Isten mennyivel inkább! Ő bizonyosan megvédi választottait, és igazságot szolgáltat azoknak, akik éjjel-nappal kiáltanak hozzá. Nem fogja feleslegesen várakoztatni őket!`,
    // 8
    `Mondom nektek, bizony hamar igazságot szolgáltat választottainak!
De amikor az Emberfia visszajön, vajon talál-e olyanokat a földön, akik igazán bíznak benne és hűségesen várják?”`,
    // 9  ~ Kit fogad el Isten? ~
    `Voltak ott olyan elbizakodottak, akik saját magukat igazságosaknak tartották, a többieket pedig lenézték. Ezeknek mondta Jézus a következő példázatot:`,
    // 10
    `„Két ember felment a Templomba imádkozni: egy farizeus, meg egy vámszedő.`,
    // 11
    `A farizeus megállt, és így imádkozott magában: »Istenem, hálát adok neked, hogy én nem vagyok olyan rossz, mint mások. Nem vagyok sem tolvaj, sem csaló, sem házasságtörő. Nem vagyok olyan, mint például ott az a vámszedő.`,
    // 12
    `Hetente kétszer böjtölök, és minden keresetemből megadom a tizedet.«`,
    // 13
    `A vámszedő, aki távolabb állt, még a tekintetét se merte az égre emelni. Bűnbánatában a mellét verte, és így imádkozott: »Istenem, könyörülj meg rajtam, nyomorult bűnösön!«`,
    // 14
    `Mondom nektek, hogy azt a vámszedőt Isten elfogadta, és kérésére megbocsátotta a bűneit. De a farizeust és annak az imádságát elutasította! Miért? Mert aki felemeli magát, azt megalázzák, aki pedig megalázza magát, azt felemelik!”`,
    // 15  ~ Ki léphet be Isten Királyságába? (#Z) ~
    `Az emberek még kisgyermekeiket is odavitték Jézushoz, hogy érintse meg őket. Amikor látták ezt a tanítványok, rájuk szóltak, és el akarták őket zavarni.`,
    // 16
    `De Jézus magához hívta a gyermekeket, és ezt mondta a tanítványainak: „Ne zavarjátok el őket! Engedjétek a gyermekeket hozzám jönni! Hiszen Isten Királysága olyanoké, akik hozzájuk hasonlítanak!`,
    // 17
    `Igazán mondom nektek: ha valaki nem úgy fogadja Isten Királyságát, mint ahogy a gyermekek, nem is fog bemenni oda!”`,
    // 18  ~ A gazdagok nehezen mennek be Isten Királyságába (#AA) ~
    `Jézust megkérdezte egy vallási vezető: „Jó Mester, mit tegyek, hogy örök életet kapjak?”`,
    // 19
    `Jézus így felelt: „Miért nevezel engem jónak? Egyedül csak Isten jó!`,
    // 20
    `Ismered a Törvény parancsait: »Ne kövess el házasságtörést! Ne gyilkolj! Ne lopj! Ne tanúskodj hamisan! Tiszteld apádat és anyádat!«” (#ac)`,
    // 21
    `A férfi ezt válaszolta: „Ezeket gyermekkorom óta mind megtartottam.”`,
    // 22
    `Jézus ekkor így folytatta: „Egy valami még hiányzik belőled: add el minden vagyonodat, és amit érte kapsz, oszd szét a szegények között! Akkor majd a Mennyben lesznek a kincseid! Azután gyere, és kövess engem!”`,
    // 23
    `A férfi, amikor ezt hallotta, igen elszomorodott, mert nagyon gazdag volt.`,
    // 24
    `Jézus látta, hogy elszomorodott, és ezt mondta: „Milyen nehezen mennek be a gazdagok Isten Királyságába!`,
    // 25
    `Könnyebb a tevének egy tű fokán átbújni, mint a gazdag embernek Isten Királyságába bemenni.”`,
    // 26  ~ Ki kaphat örök életet? ~
    `Akik ezt hallották, megkérdezték tőle: „Akkor egyáltalán ki kaphat örök életet?”`,
    // 27
    `Jézus így felelt: „Az embereknek ez lehetetlen, de Istennek lehetséges.”`,
    // 28
    `Ekkor Péter ezt mondta: „Látod, mi mindenünket hátrahagytuk, és követtünk téged!”`,
    // 29
    `Jézus így válaszolt: „Igazán mondom nektek: akik elhagyták otthonukat, feleségüket, testvéreiket, szüleiket vagy gyermekeiket Isten Királyságáért,`,
    // 30
    `azok mindannyian a többszörösét kapják vissza még ebben a világban, a következő korszakban pedig örök életet nyernek.”`,
    // 31  ~ Jézus előre jelzi a halálát és feltámadását (#AB) ~
    `Azután Jézus félrehívta tizenkét tanítványát, és ezt mondta nekik: „Figyeljetek rám! Most felmegyünk Jeruzsálembe, és ott minden be fog teljesedni, amit a próféták az Emberfiáról megírtak.`,
    // 32
    `Az Emberfiát kiszolgáltatják a többi nemzeteknek. Kigúnyolják, meggyalázzák, leköpik,`,
    // 33
    `megverik, s végül megölik, három nappal később azonban fel fog támadni.”`,
    // 34
    `A tanítványok azonban nem értették, hogy miről beszél, mert az el volt rejtve előlük.`,
    // 35  ~ Láss! A hited meggyógyított téged (#AC) ~
    `Jézus Jerikó felé közeledett. Az út szélén egy vak koldus ült, és kéregetett.`,
    // 36
    `Amikor hallotta, hogy sokan mennek el mellette, kérdezősködött, hogy mi történik.`,
    // 37
    `Mondták neki, hogy a názáreti Jézus megy arra.`,
    // 38
    `Ekkor a vak felkiáltott: „Jézus, Dávid Fia, könyörülj rajtam!”`,
    // 39
    `Akik éppen mellette mentek el, rászóltak, hogy maradjon csendben. De ő csak még jobban kiabált: „Dávid Fia! Könyörülj rajtam!”`,
    // 40
    `Jézus megállt, és szólt, hogy vezessék hozzá a vakot, majd megkérdezte tőle:`,
    // 41
    `„Mit kívánsz? Mit tegyek veled?”
Ő így válaszolt: „Uram, szeretnék újra látni!”`,
    // 42
    `Jézus ezt mondta neki: „Láss! A hited megmentett téged.”`,
    // 43
    `Ő pedig azonnal visszanyerte a látását, dicsőítette Istent, és követte Jézust. Ezt látva, az egész nép dicsérte Istent.`
  ],
  [
    // 19  ~ Zákeus ~
    `Ezután Jézus Jerikóba ért, és keresztülment a városon.`,
    // 2
    `Élt ott egy Zákeus nevű gazdag ember, aki a vámszedők vezetője volt.`,
    // 3
    `Szerette volna megnézni, hogy ki az a Jézus, de mivel alacsony termetű volt, nem látott semmit a sokaság miatt.`,
    // 4
    `Ezért előreszaladt, és felmászott egy fára, hogy lássa Jézust, aki arrafelé ment.`,
    // 5
    `Mikor Jézus a fa alá ért, felnézett rá, és azt mondta: „Zákeus, gyere le gyorsan, mert ma a te házadban kell megszállnom.”`,
    // 6
    `Zákeus ekkor lejött a fáról, és örömmel befogadta Jézust a házába.`,
    // 7
    `Amikor látták ezt az emberek, egymás között morgolódni kezdtek: „Nézzétek, miféle bűnöshöz megy vendégségbe!”`,
    // 8
    `Zákeus felállt, és a vendégek előtt ünnepélyesen megígérte az Úrnak: „Uram, elhatároztam, hogy összes vagyonom felét szétosztom a szegények között. Akiket pedig megkárosítottam, azoknak négyszer annyit fizetek vissza kárpótlásul.”`,
    // 9
    `Jézus erre így válaszolt neki: „Ma érkezett meg az üdvösség ehhez a családhoz, mivel Zákeus is igazán Ábrahám fia lett.`,
    // 10
    `Mert az Emberfia azért jött, hogy megkeresse az elveszetteket, és megmentse őket.”`,
    // 11  ~ Példázat a talentumokról (#AD) ~
    `Amikor a jelenlévők Jézusra figyeltek, ő még hozzáfűzött egy példázatot is az előbbiekhez. Ugyanis Jeruzsálem közelében voltak, és az emberek azt várták, hogy Isten királyi uralma hamarosan látható módon megjelenik.`,
    // 12
    `Ezt mondta: „Egy főrangú ember egy távoli országba akart utazni, hogy ott királlyá koronázzák, s azután visszatérjen.`,
    // 13
    `Elutazása előtt magához hívatta tíz rabszolgáját. Mindegyiküknek adott egy-egy zacskó ezüstpénzt, (#ad) és megbízta őket: »Gazdálkodjatok ezzel a pénzzel, amíg vissza nem érkezem!«`,
    // 14
    `A honfitársai azonban gyűlölték ezt a főrangú vezetőt, ezért követséget küldtek utána, és megüzenték: »Nem akarjuk, hogy te uralkodj rajtunk!«`,
    // 15
    `Azután a főrangú embert valóban királlyá koronázták, majd visszatért a saját országába. Akkor maga elé hívatta a rabszolgáit, akiknek a pénzt adta, és megkérdezte tőlük, milyen haszonnal forgatták, amit rájuk bízott.`,
    // 16
    `Jött az első rabszolga, és beszámolt: »Uram, a rám bízott pénzedet tízszeres haszonnal forgattam.«`,
    // 17
    `Az úr megdicsérte: »Jól van, derék szolgám! Mivel jól gazdálkodtál ezzel a kevéssel, tíz várost bízok rád, hogy azokat kormányozd!«`,
    // 18
    `Azután jött a második szolga: »Uram, a rám bízott pénzedet ötszörös haszonnal forgattam.«`,
    // 19
    `Ennek az úr azt mondta: »Te pedig öt várost kormányozz!«`,
    // 20
    `Ekkor jött a harmadik, és azt mondta: »Uram, itt a pénzed, amit rám bíztál! Egy kendőbe kötöttem, és félretettem.`,
    // 21
    `Féltem tőled, mert szigorú és kemény vagy: azt is elveszed, amit nem te fektettél be, és azt is learatod, amit nem te vetettél.«`,
    // 22
    `Az úr erre így válaszolt: »A saját szavaid alapján ítéllek meg, te gonosz szolga! Úgy gondoltad, hogy szigorú vagyok: elveszem azt is, amit nem én fektettem be, és azt is learatom, amit nem én vetettem?`,
    // 23
    `Akkor miért nem fektetted be a pénzemet, hogy mikor visszajövök, kamatostul kapjam vissza?!«`,
    // 24
    `Azután szólt az ott álló szolgáknak: »Vegyétek el tőle még azt az egy zacskó pénzt is, és adjátok annak, aki tízszeres haszonra tett szert!«`,
    // 25
    `Erre azok így válaszoltak: »De urunk, annak már tíz zacskó pénze van!«`,
    // 26
    `Az úr így felelt: »Mondom nektek: Akinek van, az még többet kap. Akinek azonban nincs, attól még azt is elveszik, amije eddig volt.`,
    // 27
    `Most pedig hozzátok elém azokat az ellenségeimet, akik nem akarták, hogy a királyuk legyek, és öljétek meg őket itt, előttem!«”`,
    // 28  ~ Jézus királyként vonul be Jeruzsálembe (#AE) ~
    `Miután ezeket elmondta, Jézus továbbment Jeruzsálem felé.`,
    // 29
    `Amikor Betfagé és Betánia közelébe, az Olajfák hegyéhez ért, előre küldte két tanítványát. Ezt mondta nekik:`,
    // 30
    `„Menjetek ebbe a faluba! Amikor beértek, találtok ott egy kikötött szamárcsikót, amelyen még soha nem ült senki. Oldjátok el, és hozzátok ide!`,
    // 31
    `Ha valaki megkérdezi, miért oldjátok el, ezt mondjátok: »Az Úrnak van szüksége rá.«”`,
    // 32
    `A két tanítvány elment, és mindent úgy talált, ahogy Jézus mondta.`,
    // 33
    `Amint a szamárcsikót eloldozták, a gazdái megkérdezték: „Miért oldjátok el?”`,
    // 34
    `Ők pedig így válaszoltak: „Az Úrnak van szüksége rá.”`,
    // 35
    `Így elvezették a szamárcsikót, majd a hátára terítették a felsőruhájukat, és Jézus felült rá.`,
    // 36
    `Amerre Jézus ment, az emberek a felsőruhájukat leterítették előtte az útra.`,
    // 37
    `Amikor az Olajfák hegyének lejtőjéhez közeledtek, Jézus követőinek sokasága ujjongó örömmel, hangosan dicsérte Istent azokért a csodákért, amelyeket láttak.`,
    // 38
    `Ezt kiáltották:
„Áldott a Király,
     aki az Örökkévaló nevében jön! (#ae)
Békesség a Mennyben,
     dicsőség a magasságban Istennek!”`,
    // 39
    `A tömegben volt néhány farizeus, akik ezt mondták Jézusnak: „Mester, szólj rá a tanítványaidra, hogy ne kiabáljanak ilyesmiket!”`,
    // 40
    `De ő így felelt meg nekik: „Azt mondom nektek: ha ők elhallgatnak, akkor a kövek fognak kiáltani!”`,
    // 41  ~ Jézus megsiratja Jeruzsálemet ~
    `Ahogy Jézus közeledett Jeruzsálemhez, egy olyan helyre ért, ahonnan az egész várost látta. Ekkor megsiratta Jeruzsálemet:`,
    // 42
    `„Ó Jeruzsálem, bárcsak felismerted volna - legalább a mai napon - a békességedre vezető utat! De most el van takarva előled!`,
    // 43
    `Bizony, eljön az idő, amikor majd ellenségeid körülvesznek és megostromolnak! Minden oldalról bekerítenek,`,
    // 44
    `földig rombolnak, és megölik gyermekeidet! Nem marad kő kövön a falaidon belül, mert nem ismerted fel az alkalmas időt, amikor eljött hozzád az, aki meg akart menteni.”`,
    // 45  ~ Kizavarja a kereskedőket a Templomból (#AF) ~
    `Ezután Jézus bement a Templom területére, és kizavarta onnan a kereskedőket.`,
    // 46
    `Ezt mondta nekik: „Meg van írva: »Az én Házamat imádság házának fogják nevezni.« (#af) Ti azonban »rablók barlangjává« (#ag) tettétek.”`,
    // 47
    `Ezután minden nap tanított a Templom területén. A főpapok, a törvénytanítók, és a nép vezetői pedig keresték az alkalmat, hogy megölhessék őt.`,
    // 48
    `De nem tudták, mit tegyenek, mert az emberek nagy figyelemmel és örömmel hallgatták, amit Jézus mondott.`
  ],
  [
    // 20  ~ Honnan származik Jézus hatalma? (#AG) ~
    `Egyik nap Jézus a Templom területén tanított, és hirdette az örömüzenetet. Odamentek hozzá a főpapok, a törvénytanítók, és a nép vezetői.`,
    // 2
    `Megkérdezték tőle: „Miféle hatalommal teszed ezeket a dolgokat? Ki adott neked erre felhatalmazást?”`,
    // 3
    `Jézus így felelt: „Én is kérdezek tőletek valamit:`,
    // 4
    `az, hogy János bemerítette az embereket, Istentől volt, vagy az emberektől?”`,
    // 5
    `Ekkor azok így tanakodtak egymás közt: „Ha azt válaszoljuk, hogy Istentől volt, akkor majd megkérdezi: »Akkor miért nem hittetek neki?«`,
    // 6
    `Ha meg azt mondjuk, hogy az emberektől volt, akkor a nép megkövez minket, mert meg vannak győződve róla, hogy Bemerítő János próféta volt.”`,
    // 7
    `Ezért azt felelték Jézusnak: „Nem tudjuk.”`,
    // 8
    `„Akkor én sem mondom meg, ki adott nekem felhatalmazást, hogy ezeket tegyem!” - válaszolta Jézus.`,
    // 9  ~ Példázat a gyilkos szőlőmunkásokról (#AH) ~
    `Azután egy példázatot mondott: „Volt egy gazda, aki szőlőt telepített. Azután az egész szőlőskertet bérbe adta gazdálkodóknak, majd hosszú időre elutazott egy másik országba.`,
    // 10
    `Amikor eljött a szüret ideje, elküldte egyik szolgáját a bérlőkhöz, hogy hozza el a termésből a neki járó részt. A bérlők azonban megverték a szolgát, és üres kézzel küldték el.`,
    // 11
    `A tulajdonos ekkor egy másik szolgáját küldte oda, de a bérlők azt is megverték, gyalázatosan bántak vele, és üres kézzel küldték el.`,
    // 12
    `Elküldte hát a harmadik szolgáját is, de azt is bántalmazták, megsebesítették, és kidobták a szőlőskertből.`,
    // 13
    `Végül a tulajdonos azt gondolta: »Mit tegyek? Elküldöm hozzájuk az egyetlen fiamat, akit nagyon szeretek. Őt talán meg fogják becsülni!«`,
    // 14
    `Amikor a bérlők meglátták a fiút, így tanakodtak maguk között: »Nézzétek, ő a szőlőskert örököse! Gyertek, öljük meg, hogy miénk legyen az öröksége!«`,
    // 15
    `Ezzel a fiút kidobták a szőlőskertből, és megölték.
Mit gondoltok, mit fog velük tenni a gazda?`,
    // 16
    `Eljön, elpusztítja a bérlőket, és a szőlőskertet másoknak adja!”
Akik hallották ezt a történetet, így kiáltottak fel: „Isten ments, hogy ez megtörténjen!”`,
    // 17
    `Jézus ekkor a szemükbe nézett, és azt mondta: „Akkor mit jelent ez az Írás:
»Éppen az a kő lett a sarokkővé,
     amelyet az építők félredobtak«? (#ah)`,
    // 18
    `Aki ráesik erre a kőre, az összetörik, akire pedig ez a kő zuhan rá, azt szétzúzza.”`,
    // 19
    `A törvénytanítók és a főpapok megértették, hogy ezt a példázatot Jézus róluk mondta. Ezért legszívesebben azonnal letartóztatták volna, de nem merték, mert féltek az emberektől.`,
    // 20  ~ Ravasz kérdés az adóról (#AI) ~
    `Ettől kezdve a törvénytanítók és a főpapok állandóan figyeltették Jézust. Besúgókat küldtek utána, akik istenfélőnek mutatták magukat. Szerették volna rajtakapni, amint valami rosszat mond. Az volt a tervük, hogy ha ez sikerül, átadják Jézust a római kormányzónak, akinek hatalma volt rá, hogy elítélje.`,
    // 21
    `A besúgók ezzel a kérdéssel mentek Jézushoz: „Mester, tudjuk, hogy amit mondasz és tanítasz, az mind helyes. Tudjuk, hogy nem vagy részrehajló, és az igazságnak megfelelően tanítod Isten útját.`,
    // 22
    `Mondd meg nekünk: helyesnek tartod-e, hogy adót fizessünk a császárnak, vagy nem?”`,
    // 23
    `Jézus azonban átlátott alattomos szándékukon, ezért így felelt meg nekik:`,
    // 24
    `„Mutassatok nekem egy ezüstpénzt! Kinek a képmása és felirata van rajta?”
„A császáré” - felelték azok.`,
    // 25
    `„Akkor adjátok meg a császárnak, ami a császáré; és Istennek, ami Istené!” - mondta Jézus.`,
    // 26
    `Ezen a válaszon a besúgók annyira megdöbbentek, hogy szóhoz sem jutottak. Nem tudtak belekötni abba, amit Jézus a nyilvánosság előtt mondott.`,
    // 27  ~ A szadduceusok alattomos kérdése (#AJ) ~
    `Egyszer odament Jézushoz néhány szadduceus. (Ők azok, akik azt mondják, hogy nincs föltámadás.) Megkérdezték tőle:`,
    // 28
    `„Mester, Mózes azt írta, hogy ha egy férfi gyermektelenül hal meg, akkor a fivérének feleségül kell vennie a meghalt férfi özvegyét. Így kell gondoskodnia arról, hogy a meghalt testvérének mégis legyen utóda. (#ai)`,
    // 29
    `Volt egyszer hét fiútestvér. Az első megnősült, de gyermektelenül halt meg.`,
    // 30
    `Ezután a második fiútestvér vette feleségül az asszonyt,`,
    // 31
    `majd a harmadik, és így tovább, míg végül mindannyian gyermektelenül haltak meg.`,
    // 32
    `Azután az asszony is meghalt.`,
    // 33
    `A feltámadáskor melyiküknek lesz a felesége, hiszen mind a hétnek a felesége volt?”`,
    // 34
    `Jézus így felelt: „Akik ebben a világban élnek, megnősülnek és férjhez mennek.`,
    // 35
    `De azok, akiket méltónak találnak arra, hogy a halottak közül feltámadjanak, és abban a következő korban éljenek, nem fognak többé megnősülni, vagy férjhez menni.`,
    // 36
    `Nem is halhatnak meg soha, mert olyanok lesznek, mint az angyalok. Ezek az Isten fiai, mivel feltámadtak a halálból.`,
    // 37
    `Különben már Mózes is világosan rámutatott arra, hogy a halottak feltámadnak. Amikor az égő bokorról írt, az Örökkévalót Ábrahám Istenének, Izsák Istenének és Jákób Istenének nevezte. (#aj)`,
    // 38
    `Márpedig Isten nem a halottak, hanem az élők Istene, hiszen Isten számára ők mindannyian élnek.”`,
    // 39
    `Néhány törvénytanító erre így válaszolt: „Helyesen feleltél, Mester!”`,
    // 40
    `Ettől kezdve többé senki sem merte Jézust kérdezgetni.`,
    // 41  ~ A Messiás Dávidnak a Fia és az Ura (#AK) ~
    `Ekkor azonban Jézus is kérdezett tőlük valamit: „Hogyan mondhatják azt a Messiásról, hogy a Dávid fia?`,
    // 42
    `Hiszen maga Dávid mondja a zsoltárokban:
»Így szólt Uramhoz az Örökkévaló:
     Ülj mellém jobb felől,`,
    // 43
    `amíg ellenségeidet
     hatalmad (#ak) alá kényszerítem!« (#al)`,
    // 44
    `Ha Dávid Urának nevezte a Messiást, hogyan lehet akkor a Messiás Dávidnak a fia?”`,
    // 45  ~ Jézus véleménye a törvénytanítókról (#AL) ~
    `Miközben az egész nép hallgatta Jézust, ő a tanítványaihoz fordult:`,
    // 46
    `„Óvakodjatok azoktól a törvénytanítóktól, akik szeretnek előkelő ruhában járni, és szívesen veszik, ha tisztelettel köszöntik őket az utcán, szeretik a legelőkelőbb helyeket elfoglalni a zsinagógában és az ünnepi vacsorákon.`,
    // 47
    `Ugyanakkor az özvegyektől csalással elveszik a házukat. Azt akarják, hogy mindenki felfigyeljen rájuk, ezért a nyilvánosság előtt hosszasan imádkoznak. Ők súlyosabb büntetést fognak kapni.”`
  ],
  [
    // 21  ~ Az özvegyasszony fillérei (#AM) ~
    `Jézus látta, hogy a gazdagok hogyan dobják adományaikat a Templom perselyébe.`,
    // 2
    `Meglátott ott egy szegény özvegyasszonyt is, aki csak két rézpénzt (#am) dobott bele.`,
    // 3
    `Ekkor Jézus azt mondta: „Igazán mondom nektek, ez a szegény özvegyasszony többet tett a perselybe, mint bárki más.`,
    // 4
    `Mert a gazdagok a feleslegükből adtak, de ez az özvegyasszony nagy szegénysége ellenére mindent odaadott, amije csak volt, még a betevő falatjára való pénzét is.”`,
    // 5  ~ Jézus prófétál az utolsó időkről (#AN) ~
    `Jézus tanítványai a Templomról beszélgettek. Dicsérték, hogy milyen gyönyörű, hogy milyen hatalmas és szép kövekből épült, és milyen sok fogadalmi ajándékkal van díszítve. Ekkor Jézus ezt mondta:`,
    // 6
    `„Eljön az idő, amikor mindabból, amit most csodáltok, kő kövön nem marad! Bizony, porig fogják rombolni az egészet!”`,
    // 7
    `A tanítványok megkérdezték: „Mester, mikor fog ez megtörténni? Milyen jel fogja mutatni, hogy mindezeknek be kell teljesülniük?”`,
    // 8
    `Ő pedig így válaszolt: „Vigyázzatok, nehogy valaki félrevezessen titeket! Mert sokan jönnek majd az én nevemben, akik azt mondják, hogy én vagyok a Messiás; meg azt is, hogy közel van az idő. De ti ne kövessétek őket!`,
    // 9
    `Amikor pedig háborúkról, lázadásokról és zavargásokról hallotok, meg ne rémüljetek, mert ezeknek előbb meg kell történniük, de a vég nem azonnal következik ezek után.”`,
    // 10
    `Azután így folytatta: „Egyik nép rátámad a másikra, és egyik ország a másik ellen fog harcolni.`,
    // 11
    `Pusztító erejű földrengések lesznek. Egyes helyeken éhínség támad, és halálos, járványos betegségek fognak pusztítani. Az égben pedig félelmetes és csodálatos jelek látszanak majd.`,
    // 12
    `De még mielőtt ezek megtörténnek, az emberek ellenetek fordulnak: üldözni fognak, letartóztatnak, börtönbe zárnak, átadnak a zsinagógák vezetőinek, királyok és kormányzók elé állítanak titeket - csak azért, mert hozzám tartoztok.`,
    // 13
    `Ez majd lehetőséget nyújt számotokra, hogy tanúskodjatok rólam.`,
    // 14
    `Ezért határozzátok el, hogy nem fogtok előre aggódni amiatt, hogyan védjétek meg magatokat.`,
    // 15
    `Én majd idejében a szátokba adom, hogy mit mondjatok. Olyan bölcsességet adok nektek, amellyel ellenfeleitek nem tudnak vitatkozni, sőt, még válaszolni sem.`,
    // 16
    `Még a szüleitek, testvéreitek, rokonaitok és barátaitok is ellenetek fordulnak majd, és kiszolgáltatnak az ellenségeiteknek. Egyeseket meg is fognak ölni közületek.`,
    // 17
    `Mindenki gyűlöl majd benneteket, mert az én nevemet viselitek.`,
    // 18
    `Ennek ellenére, egyetlen hajszálatok sem vész el!`,
    // 19
    `Türelmes kitartással azonban meg fogjátok menteni a lelketeket.”`,
    // 20  ~ Prófécia Jeruzsálem lerombolásáról ~
    `„Amikor látjátok, hogy Jeruzsálemet hadseregek veszik körül, akkor tudjátok meg, hogy közel van a pusztulása.`,
    // 21
    `Akkor azok, akik Júdeában vannak, meneküljenek a hegyekbe. Akik a városban vannak, menjenek ki onnan, akik pedig vidéken vannak, ne menjenek be a városba,`,
    // 22
    `mert azok az isteni igazságszolgáltatás napjai lesznek. Akkor teljesednek be mindazok, amelyek az Írásban fel vannak jegyezve.`,
    // 23
    `Jaj a gyermeket váró asszonyoknak és szoptatós anyáknak azokban a napokban! Nagy nyomorúság lesz ezen a földön, és súlyos harag nehezedik erre a népre!`,
    // 24
    `Egy részüket fegyverrel ölik meg, más részüket fogságba viszik, szerte a világon minden nép közé. Jeruzsálemet pedig letapossák, és megszállják az Izráelen kívüli népek, s ez mindaddig így is marad, ameddig le nem telik az ő idejük.”`,
    // 25  ~ Az Emberfia eljön a felhőkön (#AO) ~
    `„Csodálatos jelek fognak mutatkozni a Napban, a Holdban és a csillagokban, a földön pedig a viharos tenger hullámai zúgnak. A nemzetek megrémülnek, tanácstalanságukban kétségbeesnek, és összezavarodnak.`,
    // 26
    `Az emberek elájulnak, sőt meghalnak rémületükben, mikor látják, hogy mi közeledik a föld lakosaira. Még az égben lévő hatalmak is meginognak.`,
    // 27
    `Akkor majd mindenki meglátja az Emberfiát, amint eljön a felhőkön, nagy erővel és dicsőségben!`,
    // 28
    `Amikor pedig ezek az események elkezdődnek, egyenesedjetek fel, és emeljétek fel a fejeteket, mert közeledik a megváltásotok!”`,
    // 29  ~ Jézus szavai mindig érvényesek maradnak (#AP) ~
    `Azután Jézus mondott a tanítványainak egy példázatot is: „Figyeljétek meg a fügefát és a többi fákat!`,
    // 30
    `Amikor látjátok, hogy kihajtanak, magatok is tudjátok, hogy már közel van a nyár.`,
    // 31
    `Ehhez hasonlóan, amikor majd látjátok, hogy ezek megtörténnek, ismerjétek fel, hogy Isten Királysága már közel van!`,
    // 32
    `Igazán mondom nektek: ez a nemzet (#an) el nem múlik, amíg mindezek a dolgok be nem teljesednek.`,
    // 33
    `Az ég és a föld elmúlik, de amit én mondok, az soha nem múlik el: mindig érvényes marad!”`,
    // 34  ~ Mindenkor álljatok készen! ~
    `„Vigyázzatok magatokra! Ne engedjétek, hogy a lelketeket túlságosan lefoglalja vagy megterhelje valamilyen kábulat, részegség vagy gond! Különben az a nap olyan váratlanul ér benneteket, mint a csapda.`,
    // 35
    `Mert eljön az a nap minden emberre, aki csak a föld színén lakik.`,
    // 36
    `Ti azonban mindig éberen őrködjetek! Imádkozzatok, hogy legyen erőtök kimenekülni azokból a dolgokból, amelyek bekövetkeznek, és hogy majd bizalommal állhassatok meg az Emberfia előtt!”`,
    // 37
    `Jézus nappal a Templom területén tanított, de este kiment az Olajfák hegyére, és ott töltötte az éjszakát.`,
    // 38
    `Az egész nép már korán reggel sietett hozzá a Templom területére, hogy hallgassa őt.
A vallási vezetők Jézus megöletését tervezik (#E)`
  ],
  [
    // 22
    `Közeledett már a Kovásztalan kenyerek ünnepe, amit Páska ünnepnek is neveztek.`,
    // 2
    `A főpapok és törvénytanítók keresték a módját, hogyan végezzenek Jézussal, de ezt titokban akarták megtenni, mert féltek a néptől.`,
    // 3  ~ Júdás megegyezik Jézus ellenségeivel ~
    `A Sátán belement Júdás Iskáriótesbe, aki Jézus tizenkét apostola közé tartozott.`,
    // 4
    `Ezután Júdás elment a főpapokhoz és a templomőrség vezetőihez, és megbeszélte velük, hogyan adhatná a kezükbe Jézust, hogy letartóztassák.`,
    // 5
    `A vezetők nagyon megörültek Júdás ajánlatának, és megegyeztek vele, hogy megfizetik.`,
    // 6
    `Ettől fogva Júdás kereste a kedvező alkalmat, hogy Jézust olyankor adja az ellenségei kezébe, amikor nincs körülötte nagy tömeg.`,
    // 7  ~ Az utolsó Páska-vacsora (#F) ~
    `Elérkezett a Kovásztalan kenyerek ünnepe, amely előtt fel kell áldozni a páskabárányt.`,
    // 8
    `Jézus azt mondta Péternek és Jánosnak: „Menjetek, és készítsétek el nekünk a Páska-vacsorát, hogy együtt megehessük!”`,
    // 9
    `Ők megkérdezték: „Hol akarod, hogy elkészítsük?”`,
    // 10
    `Jézus így válaszolt: „Ahogy beértek a városba, találkozni fogtok egy férfival, aki egy korsó vizet visz. Kövessétek, ahová megy,`,
    // 11
    `és mondjátok a ház gazdájának, hogy a Mester kérdezi, hol van az a vendégszoba, ahol megtarthatja a Páska ünnepét tanítványaival?`,
    // 12
    `Ekkor ő mutat nektek egy nagy, berendezett szobát az emeleten. Ott készítsétek el!”`,
    // 13
    `A tanítványok elmentek, és előkészítették a vacsorát. Mindent úgy találtak, ahogy Jézus mondta.`,
    // 14  ~ Az Új Szövetség megkötése (#G) ~
    `Amikor eljött az ideje, Jézus asztalhoz telepedett apostolaival együtt.`,
    // 15
    `Ezt mondta nekik: „Mennyire kívántam, hogy a páskát veletek együtt ünnepelhessem, még a szenvedéseim előtt!`,
    // 16
    `Mert mondom nektek, hogy egészen addig nem fogok ismét Páska-vacsorát enni, amíg be nem teljesedik Isten Királyságában.”`,
    // 17
    `Azután Jézus kezébe vett egy pohár bort, hálát adott Istennek, és ezt mondta: „Igyatok ebből mindannyian!`,
    // 18
    `Igazán mondom nektek: mostantól fogva nem iszom a szőlő terméséből mindaddig, amíg el nem jön Isten Királysága.”`,
    // 19
    `Majd fogta a kenyeret, s miután hálát adott Istennek, tört belőle, és a tanítványainak adta. Közben ezt mondta: „Ez az én testem, amelyet értetek adok. Ugyanezt tegyétek ti is - így emlékezzetek rám!”`,
    // 20
    `Hasonlóképpen, a vacsora végén egy pohár bort vett a kezébe, és ezt mondta: „Ez a pohár bor az Új Szövetséget jelenti, amely akkor lép életbe, amikor a véremet, vagyis az életemet értetek adom.`,
    // 21  ~ Ki az áruló? ~
    `De nézzétek: velem együtt eszik az, aki elárul engem!`,
    // 22
    `Mert az Emberfia el fog menni, ahogyan az el van rendelve, de jaj annak, aki elárulja őt!”`,
    // 23
    `Az apostolok ekkor egymástól kérdezgették, ki lehet az, aki ilyet tenne közülük.`,
    // 24  ~ Ki a legnagyobb? ~
    `Ezután az apostolok vitatkozni kezdtek, hogy ki a legnagyobb közöttük.`,
    // 25
    `Jézus ekkor ezt mondta nekik: „Az Istent nem ismerő nemzetek királyai hatalmuk alá kényszerítik alattvalóikat. Akiknek pedig hatalmuk van mások fölött, jótevőknek hívatják magukat.`,
    // 26
    `Ti azonban ne legyetek ilyenek! Éppen ellenkezőleg: aki közöttetek a legnagyobb, az olyan legyen, mintha ő lenne a legkisebb! Aki vezető, az olyan legyen, mint a többiek szolgája!`,
    // 27
    `Mert ki a nagyobb: akit kiszolgálnak, vagy az, aki kiszolgál? Bizony az, akit kiszolgálnak! Én pedig olyan vagyok közöttetek, mint aki felszolgál nektek.`,
    // 28
    `Ti vagytok, akik mindeddig kitartottatok mellettem minden próbatételben.`,
    // 29
    `Ahogyan Atyám királyi hatalmat adott nekem, úgy most én is királyi hatalmat bízok rátok.`,
    // 30
    `Királyságomban velem együtt fogtok majd enni és inni az én asztalomnál. Királyi trónokon ültök és uralkodtok majd Izráel népének tizenkét törzse felett.”`,
    // 31  ~ Én imádkoztam érted (#H) ~
    `„Simon, Simon (#c) a Sátán engedélyt kért, hogy próbára tehessen titeket, és megrostáljon, mint a búzát,`,
    // 32
    `de én imádkoztam érted, hogy hited kiállja a próbát. Amikor majd visszatérsz hozzám, erősítsd a testvéreidet!”`,
    // 33
    `Erre Péter így felelt: „Uram, kész vagyok börtönbe menni, vagy ha kell, meg is halni veled együtt!”`,
    // 34
    `Jézus így válaszolt: „Péter, én mondom neked, hogy ma éjjel, mielőtt a kakas kukorékol, háromszor letagadod még azt is, hogy ismersz engem!”`,
    // 35  ~ Készüljetek fel a nehéz időkre! ~
    `Azután így folytatta: „Amikor elküldtelek titeket pénz, tartalék ruha és saru nélkül, volt-e hiányotok valamiben?”
Ők pedig így feleltek: „Nem, mindenünk megvolt.”`,
    // 36
    `Ekkor Jézus ezt mondta nekik: „De most, akinek van pénze vagy tarisznyája, vegye magához! Ha pedig nincs kardja, adja el a felsőruháját, és az árán vegyen egyet!`,
    // 37
    `Mert mondom nektek, hogy be kell teljesednie rajtam ennek az Írásnak:
»Úgy bántak vele, mint egy bűnözővel.« (#d)
Igen, ezt rólam írták meg, és hamarosan be is fog teljesedni.”`,
    // 38
    `A tanítványok ekkor így feleltek: „Nézd, Uram, itt van két kard!”
Ő pedig így válaszolt: „Elég!”`,
    // 39  ~ A Gecsemáné-kertben (#I) ~
    `Ezután Jézus szokása szerint kiment a városból az Olajfák hegyére, a tanítványai pedig követték.`,
    // 40
    `Amikor odaért, ezt mondta nekik: „Imádkozzatok, hogy legyen erőtök ellenállni a kísértésnek!”`,
    // 41
    `Ezután távolabb ment tőlük, mintegy ötvenlépésnyire. Letérdelt, és így imádkozott:`,
    // 42
    `„Atyám, ha ez egyezik akaratoddal, vidd el tőlem ezt a poharat, hogy ne kelljen kiinom! (#e) De ne úgy legyen, ahogy én szeretném, hanem, ahogy te akarod!”`,
    // 43
    `Ekkor egy angyal jelent meg a Mennyből, és megerősítette Jézust,`,
    // 44
    `aki a halálos küzdelemben még erőteljesebben imádkozott. Verejtéke úgy hullott a földre, mintha vércseppek lettek volna. (#f)`,
    // 45
    `Amikor befejezte az imádkozást, felállt, és visszament a tanítványokhoz. Látta, hogy a szomorúság miatt elaludtak.`,
    // 46
    `Felkeltette őket: „Miért alszotok? Keljetek fel, és imádkozzatok, hogy legyen erőtök ellenállni a kísértésnek!”`,
    // 47  ~ Jézust letartóztatják (#J) ~
    `Amikor ezt mondta, egy csoport érkezett oda. Júdás vezette őket, a tizenkét apostol egyike, aki Jézushoz lépett, hogy köszöntésül megcsókolja az arcát.`,
    // 48
    `Jézus így szólította meg: „Júdás, így árulod el az Emberfiát? Ezzel a baráti köszöntéssel adsz nekik jelt?”`,
    // 49
    `Amikor a körülötte levő tanítványok látták, hogy mi készül, megkérdezték tőle: „Uram, vágjuk-e őket a kardunkkal?”`,
    // 50
    `Valamelyik apostol rá is vágott a főpap szolgájára, és levágta a jobb fülét.`,
    // 51
    `De Jézus rászólt arra, akinél a kard volt: „Állj meg! Hagyd abba!” Azután megérintette a szolga fülét, és meggyógyította.`,
    // 52
    `Majd odafordult a főpapokhoz, a templomőrséghez és a nép vezetőihez, akik érte jöttek: „Kardokkal és botokkal jöttök ellenem, mintha rabló lennék?!`,
    // 53
    `Amikor nap mint nap közöttetek voltam a Templom területén, nem fogtatok el. De most eljött a ti órátok: amikor a sötétség uralkodik.”`,
    // 54  ~ Péter letagadja, hogy ismeri Jézust (#K) ~
    `Ekkor letartóztatták Jézust, elvezették, és a főpap házába vitték. Péter pedig távolról követte őket.`,
    // 55
    `Később, amikor az emberek tüzet gyújtottak az udvar közepén, és köré telepedtek, Péter is leült közéjük.`,
    // 56
    `Egy szolgálólány meglátta, amint ott ült a tűz fényében. Közelebbről is megnézte, és ezt mondta: „Ő is Jézussal volt!”`,
    // 57
    `De Péter letagadta: „Asszony, nem ismerem őt!”`,
    // 58
    `Valamivel később másvalaki is meglátta Pétert, és megszólította: „Te is közéjük tartozol!”
De Péter így felelt: „Ember! Nem vagyok közülük való!”`,
    // 59
    `Körülbelül egy óra múlva valaki más is azt mondta: „Bizony, ő is Jézussal volt, hiszen Galileából való.”`,
    // 60
    `De Péter megint letagadta: „Ember, azt sem tudom, miről beszélsz!”
Még be sem fejezte, amikor felhangzott a kakas kukorékolása.`,
    // 61
    `Az Úr megfordult, és ránézett Péterre, akinek azonnal eszébe jutott, mit mondott neki Jézus: „Ma éjjel, mielőtt a kakas kukorékol, háromszor is le fogod tagadni, hogy ismersz engem.”`,
    // 62
    `Ezután Péter kiment, és keservesen sírt.`,
    // 63  ~ Jézust kicsúfolják (#L) ~
    `A férfiak pedig, akik Jézust fogva tartották, csúfolni és verni kezdték.`,
    // 64
    `Bekötötték a szemét, és ezt mondták neki: „Na, most prófétáld meg, ki ütött rád!”`,
    // 65
    `Sok egyéb módon is gúnyolták, és szidalmazták.`,
    // 66  ~ Jézust kihallgatják a vallási vezetők (#M) ~
    `Amikor felvirradt a reggel, összegyűltek a nép vezetői, a főpapok és a törvénytanítók. Jézust eléjük, vagyis a Főtanács elé állították, és megkérdezték tőle:`,
    // 67
    `„Te vagy-e a Messiás? Mondd meg nekünk!”
Ő így felelt: „Ha megmondom, nem hiszitek el nekem,`,
    // 68
    `ha pedig én kérdezlek titeket, nem válaszoltok.`,
    // 69
    `De mostantól fogva az Emberfia ott ül majd Isten hatalmának jobb oldalán.”`,
    // 70
    `Ekkor azok megkérdezték: „Szóval, te vagy az Isten Fia?”
Ő így felelt: „Igen, én vagyok az.”`,
    // 71
    `Ők pedig ezt mondták: „Nincs szükségünk több tanúvallomásra! Most tőle magától hallottuk, hogy ezt mondta!”`
  ],
  [
    // 23  ~ Pilátus kihallgatja Jézust (#N) ~
    `Ezután az egész csoport elindult, és elvezették Jézust Pilátushoz.`,
    // 2
    `Ott így vádolták: „Megállapítottuk, hogy ez az ember félrevezeti népünket. Ellenzi, hogy adót fizessünk a császárnak, és azt állítja, hogy ő a Messiás-Király.”`,
    // 3
    `Pilátus megkérdezte Jézustól: „Te vagy a zsidók királya?”
Jézus pedig így válaszolt: „Igen, ahogy mondod.”`,
    // 4
    `Pilátus ezt mondta a főpapoknak és az összegyűlt sokaságnak: „Semmit nem találok ebben az emberben, amivel vádolni lehetne.”`,
    // 5
    `De azok annál inkább bizonygatták: „A tanításaival zavart okoz egész Júdeában! Az egész népet fellázítja! Galileában kedte, és most már itt is!”`,
    // 6  ~ Jézus Heródes előtt ~
    `Amikor Pilátus ezt hallotta, megkérdezte, hogy Jézus Galileából való-e.`,
    // 7
    `Amikor megtudta, hogy Heródes hatósága alá tartozik, átküldte hozzá Jézust. Heródes azokban a napokban éppen Jeruzsálemben tartózkodott,`,
    // 8
    `és nagyon megörült, mikor meglátta Jézust. Sokat hallott már róla, és remélte, hogy majd a szeme láttára tesz valamilyen csodát.`,
    // 9
    `Sokáig faggatta, de Jézus egy szót sem válaszolt neki.`,
    // 10
    `A főpapok és törvénytanítók Heródes előtt is hevesen vádolták Jézust.`,
    // 11
    `Heródes és a katonái is megvetően bántak vele: kigúnyolták, és csúfot űzve belőle előkelő ruhát adtak rá, majd visszaküldték Pilátushoz.`,
    // 12
    `Heródes és Pilátus ezen a napon kötöttek barátságot. Előzőleg ugyanis haragban voltak.`,
    // 13  ~ Pilátus halálra ítéli Jézust (#O) ~
    `Ekkor Pilátus maga elé hívatta a főpapokat, a zsidók vezetőit és az összegyűlt sokaságot.`,
    // 14
    `Ezt mondta nekik: „Elém hoztátok ezt az embert, és azzal vádoljátok, hogy tanításaival félrevezeti a népet. Előttetek hallgattam ki, és úgy találtam, hogy amivel vádoljátok, abban ártatlan.`,
    // 15
    `Elküldtem őt Heródeshez, de ő is úgy találta, hogy ez az ember nem követett el semmit, amiért büntetést érdemelne, ezért visszaküldte hozzánk. Látjátok hát, hogy semmi olyat nem követett el, amiért halált érdemelne.`,
    // 16
    `Megkorbácsoltatom hát, azután pedig szabadon fogom bocsátani.”`,
    // 17
    `A páska ünnepen ugyanis Pilátus minden évben szabadon engedett egy foglyot a nép kérése szerint.`,
    // 18
    `Ekkor mindazok, akik Pilátus előtt összegyűltek, kiabálni kezdtek: „Őt végeztesd ki! Barabbást engedd szabadon!”`,
    // 19
    `(Ez a Barabbás nevű fogoly részt vett a városban korábban kitört lázadásban, és gyilkosságot is elkövetett.)`,
    // 20
    `Pilátus szabadon akarta engedni Jézust, ezért újra kihirdette, hogy elengedi.`,
    // 21
    `De a tömeg még jobban kiabált: „Keresztre vele! Feszítsd keresztre!”`,
    // 22
    `Pilátus harmadszor is megkérdezte: „Miért? Mi rosszat tett? Ez az ember nem bűnös! Semmit sem találtam benne, amiért halált érdemelne. Megkorbácsoltatom, és utána szabadon engedem.”`,
    // 23
    `De a tömeg hangosan kiabálva követelte, hogy Jézust feszítsék keresztre, s így végezzék ki. Végül a kiáltozásukkal fölülkerekedtek,`,
    // 24
    `és Pilátus engedett nekik. Kihirdette az ítéletét: teljesíti, amit követelnek tőle.`,
    // 25
    `Kívánságuk szerint szabadon engedte Barabbást, aki lázadásért és gyilkosságért volt elítélve. Ugyanakkor elrendelte, hogy Jézust - akaratuknak megfelelően - végezzék ki.`,
    // 26  ~ Jézus kivégzése: a keresztre feszítés (#P) ~
    `Ezután Jézust a katonák elvezették. Útközben szembe jött velük egy Cirénéből való, Simon nevű férfi, aki éppen a vidékről jött a városba. A katonák kényszerítették Simont, hogy vigye a keresztfát Jézus után.`,
    // 27
    `Nagy tömeg követte Jézust, köztük asszonyok is, akik jajgattak és siratták őt.`,
    // 28
    `Jézus odafordult hozzájuk: „Jeruzsálemi asszonyok, ne engem sirassatok! Inkább magatokat és a gyerekeiteket sirassátok!`,
    // 29
    `Mert eljönnek a napok, amikor azt mondják: »Milyen boldogok az asszonyok, akiknek nem lehetett gyermekük! Azok a boldogok, akik nem szültek és nem szoptattak gyermeket!«`,
    // 30
    `A hegyeknek azt mondják majd: »Essetek ránk!«, és a domboknak: »Rejtsetek el minket!« (#h)`,
    // 31
    `Mert ha a zöldellő fával ezt teszik, mi lesz a sorsa a kiszáradt fának?” (#i)`,
    // 32
    `A katonák Jézussal együtt két bűnözőt is elvezettek, hogy őket is kivégezzék.`,
    // 33
    `Amikor megérkeztek arra a helyre, amelyet így neveztek: „Koponya”, ott Jézust keresztre feszítették. Ugyanezt tették a két bűnözővel is. Egyiküket Jézus jobb oldalán, a másikat a bal oldalán feszítették meg.`,
    // 34
    `Azután Jézus ezt mondta: „Atyám, bocsáss meg nekik, mert nem tudják, hogy mit tesznek!” (#j)
A katonák sorsvetéssel elosztották maguk között Jézus ruháit.`,
    // 35
    `Az összegyűlt sokaság pedig ott állt, és nézte, mi történik. A vallási vezetők így gúnyolták Jézust: „Másokat meg tudott menteni, most mentse meg saját magát, ha valóban ő a Messiás, Isten választottja!”`,
    // 36
    `A katonák is gúnyolták Jézust. Ecetet kínáltak neki,`,
    // 37
    `és azt mondták: „Ha te vagy a zsidók királya, mentsd meg magad!”`,
    // 38
    `Jézus feje fölött ez a felirat volt: „ ez a zsidók királya .”`,
    // 39
    `Az egyik bűnöző, akit szintén keresztre feszítettek, így sértegette: „Hát nem te vagy a Krisztus?! Akkor mentsd meg magadat, és minket is!”`,
    // 40
    `De a másik bűnöző rászólt: „Nem félsz Istentől? Te is halálra vagy ítélve, mint ő.`,
    // 41
    `Csakhogy a mi ítéletünk jogos, mert azt kapjuk, amit megérdemeltünk, ő viszont nem tett semmi rosszat!”`,
    // 42
    `Azután ezt mondta: „Jézus! Ne felejtkezz meg rólam, amikor eljössz, hogy királyi uralkodásodat elkezdd!”`,
    // 43
    `Jézus így felelt neki: „Mondom neked, még ma velem leszel a Paradicsomban.”`,
    // 44  ~ Jézus halála (#Q) ~
    `Délben elsötétült az ég, és délután három óráig sötétség borította az egész földet,`,
    // 45
    `mert a Nap elhomályosult. A Templom belsejében a függöny kettéhasadt.`,
    // 46
    `Jézus felkiáltott: „Atyám, a kezedbe teszem le lelkemet.” (#k) Amikor ezt kimondta, meghalt.`,
    // 47
    `Amikor a római százados látta ezt, Istent dicsérte, és azt mondta: „Ez az ember valóban igazságos és ártatlan volt!”`,
    // 48
    `Akik erre az eseményre kíváncsian odagyűltek, és látták mindazt, ami történt, ezután mellüket verve (#l) hazamentek.`,
    // 49
    `Akik ismerték Jézust és azok az asszonyok, akik Galileától idáig követték, egy kissé távolabb álltak, és mindezt végignézték.`,
    // 50  ~ Jézus temetése (#R) ~
    `Volt egy József nevű férfi, a Főtanács egyik tagja, aki a júdeai Arimátia városából származott. Jó és igazságos ember volt,`,
    // 51
    `aki maga is várta Isten Királyságának eljövetelét, és nem értett egyet a többiekkel, amikor a Főtanács halálra ítélte Jézust.`,
    // 52
    `József - Jézus halála után - Pilátushoz ment, és engedélyt kért tőle, hogy Jézus holttestét eltemesse.`,
    // 53
    `Majd levette a keresztről a testet, vászonba tekerte, és elhelyezte egy sziklasírba, amelybe még senkit sem temettek.`,
    // 54
    `Ez az előkészület napjának végén történt, és már közel volt a szombati ünnep kezdete.`,
    // 55
    `Az asszonyok, akik Galileától kezdve követték Jézust, Józseffel mentek, látták a sírt, és azt is, hogyan helyezték el a sziklasírba Jézus testét.`,
    // 56
    `Azután hazamentek, és előkészítették az illatszereket, amelyeket temetésnél szoktak használni.
A szombat ünnepén azonban otthon maradtak a Törvény parancsa szerint.`
  ],
  [
    // 24  ~ Jézus feltámadásának örömhíre (#S) ~
    `A hét első napján, kora hajnalban az asszonyok kimentek a sziklasírhoz, és vitték az elkészített illatszereket is.`,
    // 2
    `A sír bejáratát egy nehéz kő zárta el, de mire odaértek, már félre volt gördítve.`,
    // 3
    `Így be tudtak menni a sziklasírba, de az Úr Jézus testét nem találták.`,
    // 4
    `Ezen nagyon elcsodálkoztak és nem tudták, mitévők legyenek. Ekkor hirtelen két férfi jelent meg mellettük fénylő ruhában.`,
    // 5
    `Az asszonyok megrémülve lehajtották a fejüket, de azok így bátorították őket: „Miért a halottak között keresitek az élőt?`,
    // 6
    `Nincs itt, mert feltámadt! Emlékezzetek rá, hogy még Galileában megmondta nektek:`,
    // 7
    `»Szükséges, hogy az Emberfiát a bűnösök kezébe adják, keresztre feszítsék, és hogy a harmadik napon feltámadjon.«”`,
    // 8
    `Ekkor az asszonyok visszaemlékeztek, hogy Jézus valóban ezt mondta nekik,`,
    // 9
    `majd visszamentek a városba, és mindent elmondtak a tizenegy apostolnak és a többieknek.`,
    // 10
    `Az asszonyok csoportjában volt Mária Magdalén, Johanna és Mária, Jakab anyja, meg más asszonyok is, akik a feltámadás hírét hozták.`,
    // 11
    `Az apostolok azonban nem hittek az asszonyoknak, és képtelenségnek tartották, amit mondtak.`,
    // 12
    `Péter mégis felkelt, és elfutott a sírhoz. Ott lehajolva benézett a sírkamrába, de csak a vászonlepedőket látta. Azután elment, és azon töprengett, hogy vajon mi történhetett. (#m)`,
    // 13  ~ Találkozás az emmausi úton (#T) ~
    `Ugyanezen a napon Jézus két tanítványa elindult Jeruzsálemből Emmausba, egy kis faluba, amely a várostól tizenkét kilométer távolságra volt.`,
    // 14
    `Útközben azokról az eseményekről beszélgettek, amelyek a napokban történtek.`,
    // 15
    `Amíg így beszélgettek és vitatkoztak, maga Jézus csatlakozott hozzájuk, és együtt ment velük.`,
    // 16
    `A tanítványok azonban nem tudták, hogy ő az, mert valami megakadályozta őket abban, hogy ráismerjenek.`,
    // 17
    `Jézus megkérdezte tőlük: „Miről beszélgettek?”
Ekkor azok szomorú arccal megálltak.`,
    // 18
    `Az egyik, akit Kleopásnak hívtak, ezt felelte: „Úgy látszik te vagy az egyetlen Jeruzsálemben, aki nem tudja, mi történt itt ezekben a napokban.”`,
    // 19
    `„Miért, mi történt?” - kérdezte Jézus.
Azok így feleltek: „A názáreti Jézusról van szó, aki szavaival és tetteivel egyaránt bizonyította, hogy hatalmas próféta Isten és az emberek előtt.`,
    // 20
    `De népünk főpapjai és vezetői kiszolgáltatták őt, és elérték, hogy halálra ítéljék és kivégezzék a kereszten.`,
    // 21
    `Pedig mi azt vártuk és reméltük, hogy ő fogja Izráel népét felszabadítani. De már három napja, hogy mindez történt.`,
    // 22
    `Ezenkívül néhány közülünk való asszony is megdöbbentett minket. Ma korán reggel kimentek a sírhoz, ahová Jézus testét temették,`,
    // 23
    `de a holttestet nem találták ott. Mikor visszajöttek, azt állították, hogy látomásban angyalokat láttak, akik azt mondták, hogy Jézus él.`,
    // 24
    `Ekkor néhányan közülünk kimentek a sírhoz, és mindent úgy találtak, ahogyan az asszonyok mondták, de Jézust magát nem látták.”`,
    // 25
    `Ekkor Jézus kezdett beszélni: „Milyen értetlenek és nehéz felfogásúak vagytok! Milyen nehezen hiszitek el, amit a próféták mondtak!`,
    // 26
    `Hát nem éppen ezeket kellett a Messiásnak elszenvednie, mielőtt bement a dicsőségébe?”`,
    // 27
    `Azután Jézus elmagyarázta a két tanítványnak mindazt, amit az Írások őróla mondtak. Mózes könyveivel kezdte, és folytatta az összes többi prófétával, az egész Íráson keresztül.`,
    // 28
    `Közben megérkeztek Emmausba, ahová indultak, de Jézus úgy tett, mintha tovább akarna menni.`,
    // 29
    `A tanítványok azonban nagyon kérlelték: „Maradj velünk, hiszen a nap is lenyugodott már, mindjárt beesteledik!” Így hát Jézus velük maradt, és együtt mentek be a faluba.`,
    // 30
    `Amikor asztalhoz ültek, Jézus a kezébe vette a kenyeret, hálát adott Istennek, tört a kenyérből, és a tanítványoknak adta,`,
    // 31
    `akiknek ebben a pillanatban megnyílt a szemük. Ráismertek Jézusra, de ő eltűnt a szemük elől.`,
    // 32
    `„Hát nem ezt éreztük, amikor útközben az Írásokat magyarázta, és feltárta előttünk a próféciák igazi értelmét?” - mondták egymásnak a tanítványok.`,
    // 33
    `Azon nyomban fel is kerekedtek, és visszaindultak Jeruzsálembe. Ott együtt találták a tizenegy apostolt, és a többieket,`,
    // 34
    `akik ezzel fogadták őket: „Valóban feltámadt az Úr! Megjelent Simonnak!”`,
    // 35
    `Ekkor ők ketten is elmondták, mi történt velük az úton, és hogyan ismerték fel Jézust arról, ahogyan megtörte a kenyeret.`,
    // 36  ~ Jézus megjelenik a tanítványainak (#U) ~
    `Még be sem fejezték, amikor hirtelen maga Jézus jelent meg közöttük, és a szokásos módon köszönt nekik: „Békesség!”`,
    // 37
    `Ettől nagyon megrémültek, és félelmükben azt hitték, hogy valamilyen szellemet látnak.`,
    // 38
    `De Jézus bátorította őket: „Miért vagytok összezavarodva? Miért nem hisztek a szemeteknek?`,
    // 39
    `Nézzétek meg a kezemet és lábamat! Érintsetek meg, és győződjetek meg róla, hogy valóban én vagyok az! A szellemeknek nincs sem húsa, sem csontja, de amint látjátok, nekem van.”`,
    // 40
    `S ezzel megmutatta nekik a kezeit és lábait.`,
    // 41
    `De azok örömükben még mindig nem tudták elhinni, hogy valóság, amit látnak, és csak csodálkoztak. Ekkor Jézus megkérdezte: „Van itt valami ennivaló?”`,
    // 42
    `Akkor adtak neki egy darab sült halat,`,
    // 43
    `s ezt Jézus a szemük láttára megette.`,
    // 44
    `Azután ezt mondta: „Látjátok, erről beszéltem nektek, amíg veletek voltam! Szükséges volt, hogy minden beteljesedjen, amit megírtak rólam Mózes Törvényében, a próféták könyveiben és a zsoltárokban!”`,
    // 45
    `Ezután megvilágosította a tanítványok értelmét, hogy értsék az Írásokat.`,
    // 46
    `Majd ezt mondta nekik: „Az Írásokban ez áll: a Messiásnak szenvednie kell, de a harmadik napon fel fog támadni a halálból,`,
    // 47
    `és a nevében az egész világon minden nemzetnek hirdetik hogy bűneikre bocsánatot nyerhetnek. Térjenek vissza Istenhez, változtassák meg gondolkodásukat és akkor Isten is megbocsát nekik, kezdve itt Jeruzsálemben. `,
    // 48
    `Ti láttátok, hogy ez megtörtént! Tanúk vagytok erre.`,
    // 49
    `Én pedig el fogom küldeni hozzátok, akit Atyám megígért nektek, de amíg azt a mennyei erőt meg nem kapjátok, maradjatok itt, Jeruzsálemben!”`,
    // 50  ~ Jézus visszatér a Mennybe (#V) ~
    `Ezután Jézus kivezette a tanítványait Jeruzsálemből, mejdnem egészen Betániáig. Ott felemelte a kezét, és megáldotta őket,`,
    // 51
    `közben felemelkedett és eltávolodott tőlük. Így vitték fel őt a Mennybe.`,
    // 52
    `A tanítványok imádták Jézust, és nagy örömmel tértek vissza Jeruzsálembe.`,
    // 53
    `Mindig a Templom területén tartózkodtak, dicsérték és áldották Istent.`
  ]
];

const jn = [
  [
    // 1  ~ Az Ige emberré lett ~
    `Kezdetben volt az Ige, (#a) aki Istennel együtt volt, és maga is Isten volt.`,
    // 2
    `Az Ige kezdetben együtt volt Istennel.`,
    // 3
    `Minden az Ige által jött létre, nélküle egyetlen teremtmény sem keletkezett.`,
    // 4
    `Benne volt az élet, amely a világosság volt az emberek számára.`,
    // 5
    `A világosság (#b) fénylik a sötétségben, de a sötétség sohasem tudta legyőzni, feltartóztatni vagy megérteni.`,
    // 6
    `Isten küldött egy embert, akit Jánosnak (#c) hívtak.`,
    // 7
    `Ő azért jött, hogy tanúskodjon a világosságról, s hogy mindenki halljon arról, aki a világosság, és higgyen benne.`,
    // 8
    `Nem ő volt a világosság, hanem azért jött, hogy tanúskodjon a világosságról mindenkinek.`,
    // 9
    `Az igazi világosság - aki mindenkit megvilágosít - már készen volt arra, hogy megjelenjen.`,
    // 10
    `Már a világon volt, és bár ez a világ általa jött létre, az emberek mégsem ismerték fel őt.`,
    // 11
    `A saját birtokába jött, de a saját népe nem fogadta be.`,
    // 12
    `Akik viszont befogadták - vagyis akik hisznek benne -, azoknak mind felhatalmazást és lehetőséget adott arra, hogy Isten gyermekeivé legyenek.`,
    // 13
    `Azonban ők nem úgy születtek, ahogyan a gyermekek világra jönnek. Nem az emberi testből származnak, nem testi vágyból, nem a férfi akaratából, hanem magától Istentől születtek.`,
    // 14
    `Az Ige hús-vér emberré lett, és közöttünk élt, mi pedig közelről szemléltük a dicsőségét. Igen, a Mennyei Atyától származó egyszülött Fiú dicsőségét, akiben az isteni kegyelem és a valóság teljessége lakik.`,
    // 15
    `Őróla tanúskodott Bemerítő János, amikor hirdette: „Ő az - kiáltott fel -, akiről előre megmondtam, hogy el fog jönni! Ő az, aki ugyan később érkezik, mint én, mégis nagyobb nálam, mert már akkor is létezett, amikor én még meg sem születtem.”`,
    // 16
    `Ő az, akinek a teljességéből kaptunk mindannyian sokféle kegyelmet, áldást és ajándékot az isteni kegyelem alapján.`,
    // 17
    `A Törvényt Mózesen keresztül kaptuk, de a kegyelem és a valóság a Messiás Jézuson keresztül jött el hozzánk.`,
    // 18
    `Istent soha nem látta egyetlen ember sem. Az egyszülött Fiú - aki maga is Isten, és nagyon szoros közösségben van az Atyával -, ő mutatta meg nekünk, és ismertette meg velünk, milyen az Isten. (#d)`,
    // 19  ~ Bemerítő János tanúskodik Jézusról (#A) ~
    `A jeruzsálemi vallási vezetők papokat és lévitákat küldtek Bemerítő Jánoshoz, hogy kérdezzék meg tőle: „Ki vagy te?”`,
    // 20
    `János nyíltan megmondta, és elismerte: „Nem én vagyok a Messiás!”`,
    // 21
    `„Akkor ki vagy, talán Illés?” - kérdezték.
„Nem” - mondta János.
„Te vagy a Próféta?” (#e)
János így felelt: „Nem, az sem vagyok.”`,
    // 22
    `Ekkor ezt kérdezték tőle: „Hát akkor ki vagy? Mondd meg, hogy válaszolhassunk azoknak, akik minket elküldtek! Mit mondasz magadról?”`,
    // 23
    `Végül Bemerítő János Ézsaiás próféta szavaival válaszolt: „Az a hang vagyok, aki ezt kiáltja:
»Készítsetek utat az Örökkévalónak a pusztaságban!«” (#f)`,
    // 24
    `Ezek a küldöttek a farizeusok csoportjához tartoztak.`,
    // 25
    `Tovább kérdezgették Jánost: „Ha nem vagy sem a Messiás, sem Illés, sem pedig a Próféta, akkor miért meríted be az embereket?”`,
    // 26
    `János erre így válaszolt: „Igaz, én vízbe merítem be az embereket, de van közöttetek valaki, akit nem ismertek.`,
    // 27
    `Ő az, aki később fog megérkezni, mint én, s akinek még a saruját sem vagyok méltó levenni a lábáról.”`,
    // 28
    `Mindezek a Jordán folyó keleti oldalán lévő Betániában történtek, ahol János bemerítette az embereket.`,
    // 29  ~ Ő az Isten Báránya! ~
    `Másnap Bemerítő János meglátta Jézust, amint feléje közeledett, és ezt mondta: „Nézzétek! Ő az Isten Báránya, aki magára veszi az egész világ összes bűnét!`,
    // 30
    `Ő az, akiről azt mondtam, hogy később fog megérkezni, mint én, mégis nagyobb nálam, mert már előttem létezett.`,
    // 31
    `Én nem ismertem őt, de azért jöttem, és azért merítem vízbe az embereket, hogy Izráel népe számára lelepleződjön, hogy ő a Messiás.”`,
    // 32
    `Ezután János így tanúskodott: „Láttam a Szentlelket, amikor leszállt a Mennyből, mint egy galamb, és megnyugodott őrajta.`,
    // 33
    `Nem ismertem őt, de aki elküldött, hogy vízbe merítsem be az embereket, azt mondta nekem: »Látni fogod, hogy a Szentlélek leszáll, és megnyugszik egy férfin. Ő az, aki majd Szentlélekbe fog bemeríteni.«`,
    // 34
    `Mivel pedig szemtanúja voltam annak, hogy ez beteljesedett, ezért tanúsítom, hogy ő az Isten Fia.” (#g)`,
    // 35  ~ Jézus első tanítványai ~
    `A következő napon Bemerítő János - két tanítványával együtt - ismét ugyanott volt.`,
    // 36
    `Megint észrevette Jézust, amint ott járt-kelt, és ezt mondta: „Nézzétek! Ő az Isten Báránya!”`,
    // 37
    `Amikor ezt az a két tanítvány meghallotta, Jézus után indultak.`,
    // 38
    `Jézus megfordult, látta, hogy követik, és megkérdezte tőlük: „Mit akartok?”
Ők ezt kérdezték: „Rabbi, hol laksz?” („Rabbi” azt jelenti: „Mester, Tanító”.)`,
    // 39
    `„Gyertek velem, és meglátjátok!” - válaszolta Jézus. Azok ketten vele is mentek, és megnézték, hol lakik. Körülbelül délután négy óra volt akkor, és aznap nála is maradtak.`,
    // 40
    `Ez a két tanítvány hallotta, amit János Jézusról mondott, és követték Jézust. Az egyikük András volt, Simon Péter testvére.`,
    // 41
    `András azonnal megkereste a testvérét, Simont, és ezt mondta neki: „Rátaláltunk a Messiásra!” (A héber „Messiás” szó görögül „Krisztus”, magyarul „Felkent”.) (#h)`,
    // 42
    `Azután András odavezette Simon Pétert Jézushoz, aki ránézett, és ezt mondta: „Te Simon vagy, Jóna fia. Kéfás lesz a neved.” (Ez azt jelenti: „Péter”, vagyis kő. (#i) )`,
    // 43
    `Másnap Jézus el akart menni Galileába. Ekkor találkozott Fülöppel, és megszólította: „Csatlakozz hozzám, és kövess engem!”`,
    // 44
    `Fülöp Bétsaidából, András és Péter városából származott.`,
    // 45
    `Később Fülöp találkozott Nátánaéllel, és elújságolta neki: „Megtaláltuk azt, akiről Mózes írt a Törvényben, és akiről a próféták is írtak! Jézusnak hívják, József fia, és Názáretből való.”`,
    // 46
    `Nátánaél így válaszolt: „Ugyan, mi jó jöhet Názáretből?”
„Gyere, és nézd meg magad!” - válaszolt Fülöp.`,
    // 47
    `Amikor Jézus látta, hogy Nátánaél közeledik feléje, azt mondta róla: „Nézzétek, itt jön egy igazi izraelita, (#j) akiben semmi hamisság nincsen!”`,
    // 48
    `Nátánaél csodálkozva kérdezte: „Honnan ismersz engem?”
Jézus ezt válaszolta: „Láttalak téged a fügefa alatt, mielőtt Fülöp idehívott.”`,
    // 49
    `Ekkor Nátánaél ezt mondta: „Rabbi, te vagy az Isten Fia, te vagy Izráel Királya!”`,
    // 50
    `Jézus így felelt: „Azért hiszel, mert azt mondtam, hogy láttalak a fügefa alatt? Ennél nagyobb dolgokat is látsz majd.”`,
    // 51
    `És így folytatta: „Igazán mondom nektek: meglátjátok majd a megnyílt Mennyet, és Isten angyalait, amint fel- és leszállnak az Emberfiára.” (#k)`
  ],
  [
    // 2  ~ A kánai lakodalom ~
    `Két nappal később lakodalom volt a galileai Kánában, amelyen Jézus anyja is részt vett.`,
    // 2
    `Meghívták Jézust és a tanítványait is.`,
    // 3
    `A lakodalom közben elfogyott a bor, s ekkor Jézus anyja szólt a fiának: „Nincs több boruk!”`,
    // 4
    `Jézus azonban ezt válaszolta: „Mi közünk nekünk ehhez? Nem jött még el az én időm.”`,
    // 5
    `Jézus anyja mégis szólt a szolgáknak: „Akármit mond nektek, tegyétek meg!”`,
    // 6
    `Volt ott hat nagyméretű, kőből készült víztartó, amelyet a zsidók a szertartásos tisztálkodáshoz (#l) szoktak használni. Ezekbe egyenként kb. 80–120 liter víz fért.`,
    // 7
    `Jézus szólt a szolgáknak: „Töltsétek meg az edényeket vízzel!” Azok pedig színig töltötték a víztartókat.`,
    // 8
    `Azután Jézus mondta nekik: „Merítsetek belőle, és vigyétek a násznagynak!”
A szolgák így is tettek.`,
    // 9
    `A násznagy megkóstolta a borrá változott vizet. (Ő nem tudta, honnan van a bor, de a szolgák, akik hozták, tudták.) Akkor a násznagy odahívta a vőlegényt,`,
    // 10
    `és azt mondta neki: „Mindenki a legjobb bort szolgálja fel először, és amikor a vendégek már részegek, akkor hozzák az olcsó bort. Te meg mostanáig tartogattad a legjobb borodat?”`,
    // 11
    `Jézus jelei és csodái közül ez volt az első, amelyet a galileai Kánában mutatott meg. Kézzelfoghatóan megmutatta a dicsőségét, a tanítványai pedig hittek benne.`,
    // 12
    `Ezután Kapernaumba ment anyjával, testvéreivel és tanítványaival együtt, és ott maradtak néhány napig.`,
    // 13  ~ Jézus kikergeti a kereskedőket a Templomból (#B) ~
    `Közeledett már a júdeaiak páska ünnepe, ezért Jézus felment Jeruzsálembe.`,
    // 14
    `Látta, hogy a Templom udvarában marhákat, juhokat, galambokat árulnak, és pénzváltók ülnek az asztalaiknál.`,
    // 15
    `Ekkor felragadott néhány kötelet, azokat marokra fogta, mint egy korbácsot, és kizavarta a kereskedőket a Templom területéről, a juhokkal és a marhákkal együtt. A pénzváltók pénzét szétszórta, és asztalaikat felborította.`,
    // 16
    `A galambárusoknak is mondta: „Ki innen! Vigyétek el ezeket! Ne tegyétek Atyám házát piactérré!”`,
    // 17
    `Tanítványainak eszébe jutott, hogy az Írás ezt mondja:
„Templomod iránti féltékeny, szenvedélyes szeretet emészt engem.” (#m)`,
    // 18
    `Egyes júdeaiak, ezt mondták Jézusnak: „Mutass nekünk valami csodás jelet annak bizonyítására, hogy jogod van ilyeneket tenni!”`,
    // 19
    `Jézus ezt felelte: „Romboljátok le ezt a templomot, és én három nap alatt újra felépítem!”`,
    // 20
    `Erre azok így válaszoltak: „Negyvenhat évig építették a Templomot, te meg három nap alatt újjáépítenéd?!”`,
    // 21
    `De nem értették meg, hogy Jézus nem a Templom épületeiről, hanem a saját testéről beszélt.`,
    // 22
    `Később, már Jézus feltámadása után, tanítványai visszaemlékeztek mindarra, amit ekkor mondott, és hittek az Írásban és Jézus szavaiban.`,
    // 23
    `Amíg Jézus Jeruzsálemben volt a páska ünnepén, sokan hittek és bíztak benne, mert látták a csodákat, amelyeket tett.`,
    // 24
    `Ő azonban nem bízta magát rájuk, mert ismerte őket.`,
    // 25
    `Nem volt szüksége rá, hogy valaki megmondja neki, mi van az emberekben, mert eleve jól ismerte mindegyiküket.`
  ],
  [
    // 3  ~ Jézus és Nikodémus beszélgetése ~
    `Volt a farizeusok között egy ember, akit Nikodémusnak hívtak, és a júdeaiak egyik vallási vezetőjének számított.`,
    // 2
    `Egyik éjjel eljött Jézushoz, és azt mondta neki: „Mester, biztosan tudjuk, hogy téged Isten küldött tanítóul. Ilyen csodákat, amelyeket te teszel, csak akkor tehet valaki, ha Isten van vele.”`,
    // 3
    `Jézus így válaszolt: „Igazán mondom neked, hogy aki nem születik újra, nem láthatja meg Isten Királyságát.”`,
    // 4
    `Nikodémus megkérdezte: „Hogyan születhet valaki újra, ha már megöregedett? Hiszen nem mehet vissza anyja méhébe, hogy másodszor is megszülessen!”`,
    // 5
    `Jézus így válaszolt: „Igazán mondom neked, hogy aki nem születik újra víz és a Szentlélek által, az nem képes belépni Isten Királyságába.`,
    // 6
    `Ami testből született, az testi természetű, ami pedig a Szentlélektől született, az lelki természetű.`,
    // 7
    `Ne csodálkozz, hogy azt mondtam: újra kell születnetek!`,
    // 8
    `A szél (#n) fúj, amerre akar. Hallod a hangját, de nem tudod, honnan jön, és merre tart. Ehhez hasonló természetű mindenki, aki a Szentlélektől született.”`,
    // 9
    `Nikodémus megkérdezte: „Hogyan lehet ez?”`,
    // 10
    `„Te Izráel népének tanítója vagy, mégsem érted ezt?`,
    // 11
    `Igazán mondom neked, mi arról beszélünk, amit jól ismerünk. Olyan dolgokról tanúskodunk, amelyeket saját szemünkkel láttunk, mégsem hisztek nekünk.`,
    // 12
    `Eddig csupán földi dolgokról beszéltem nektek, de ezeket sem hittétek el. Hogyan fogjátok elhinni, ha majd a mennyei dolgokról beszélek?`,
    // 13
    `Soha senki sem ment fel a Mennybe, kivéve az Emberfiát, (#o) azt az egyet, aki a Mennyből jött le.`,
    // 14
    `Ahogyan Mózes fölemelte a rézkígyót a pusztában, (#p) úgy fogják az Emberfiát is fölemelni,`,
    // 15
    `hogy aki hisz benne, az örökké éljen.`,
    // 16
    `Mert Isten úgy szerette az embereket, hogy az egyszülött Fiát adta oda cserébe értük, hogy aki hisz a Fiában, az ne pusztuljon el, hanem örök életet kapjon.`,
    // 17
    `Isten nem azért küldte a Fiát az emberek közé, hogy elítélje őket, hanem azért, hogy a Fiú közreműködésével megmenekülhessenek.`,
    // 18
    `Aki hisz a Fiúban, azt nem fogják elítélni. De aki nem hisz benne, az máris elmarasztaló ítélet alatt van, mert nem hitt Isten egyszülött Fiában.`,
    // 19
    `Az ítélet pedig ez: a világosság eljött az emberek közé, de ők jobban szerették a sötétséget, mert gonosz dolgokat tettek.`,
    // 20
    `Ugyanis, akik gonosz dolgokat tesznek, azok mind gyűlölik a világosságot, és nem jönnek ki a világosságra, nehogy a tetteik gonoszsága lelepleződjön.`,
    // 21
    `Aki viszont az igazságot követi, és azt teszi, ami helyes, az kijön a világosságra, hogy nyilvánvaló legyen: ezeket a dolgokat Isten tetszése szerint és Isten által tette.”`,
    // 22  ~ Jézus és Bemerítő János ~
    `Jézus ezután tanítványaival együtt Júdeába ment. Ott időzött velük, és bemerítették az embereket.`,
    // 23
    `Bemerítő János pedig Szálim közelében, Ainonnál merítette be az embereket, mert ott bőven volt víz. Sokan jöttek hozzá, és bemerítkeztek nála.`,
    // 24
    `(Jánost ekkor még nem zárták börtönbe.)`,
    // 25
    `Egyszer János néhány tanítványa vitába keveredett valakivel, aki a zsidó vallási hagyományokat követte. A bemerítkezésről és a megtisztulás szertartásáról (#q) vitatkoztak.`,
    // 26
    `Végül odamentek Jánoshoz, és megkérdezték: „Mester, emlékszel arra a férfira, aki veled volt a Jordánon túl, és akiről tanúskodtál? Most ő is bemerít, és csak úgy tódul hozzá mindenki!”`,
    // 27
    `János így válaszolt: „Az ember a saját erejéből semmire sem jut. Csak annyit tehet, hogy elfogadja, amit Istentől kap ajándékba.`,
    // 28
    `Ti magatok vagytok a tanúim, hogy világosan megmondtam: nem én vagyok a Messiás! Engem Isten azért küldött, hogy a Messiás előtt menjek, és utat készítsek számára.`,
    // 29
    `Akinek menyasszonya van, az a vőlegény! A vőlegény barátja pedig csak vár és figyel, hogy mikor hallja meg a vőlegény hangját. S mennyire örül, amikor meghallja! Most én is így örülök. Boldog vagyok, hogy ő megérkezett!`,
    // 30
    `Neki ettől fogva egyre feljebb és feljebb kell emelkednie, én pedig egyre kevésbé leszek fontos.”`,
    // 31  ~ Aki a Mennyből jött ~
    `„Ő a Mennyből, Istentől jött, ezért mindenkinél hatalmasabb. Aki a földről származik, az a földhöz tartozik, és földi dolgokról beszél. Ő azonban a Mennyből, Istentől jött, és mindenkinél hatalmasabb!`,
    // 32
    `Ő arról beszél, amit saját maga látott és hallott, az emberek mégsem fogadják el, amit mond.`,
    // 33
    `Azok viszont, akik hisznek neki, ezzel azt bizonyítják, hogy Isten megbízható, és igazat mond.`,
    // 34
    `Mert akit Isten küldött, az valóban Isten szavait és személyes üzenetét mondja. Isten a Szentlelket korlátozás nélkül adja neki,`,
    // 35
    `mert az Atya szereti a Fiút, és mindent az ő kezébe adott.`,
    // 36
    `Aki hisz a Fiúban, annak örök élete van. Aki viszont nem engedelmeskedik a Fiúnak, az sohasem látja meg az örök életet, hanem Isten haragja alatt marad.”`
  ],
  [
    // 4  ~ Jézus beszélget a samáriai asszonnyal ~
    `Egyesek azt híresztelték a farizeusoknak, hogy Jézus több tanítványt merít be és vonz maga köré, mint Bemerítő János.`,
    // 2
    `(Bár maga Jézus nem merített be senkit, csak a tanítványai.)`,
    // 3
    `Mikor Jézus erről tudomást szerzett, elhagyta Júdeát, és újra visszatért Galileába.`,
    // 4
    `Útközben keresztül kellett mennie Samárián.`,
    // 5
    `Így jutott el egy samáriai város, Sikár szélére. Ez a hely közel volt ahhoz a birtokhoz, amelyet egykor Jákób adott a fiának, Józsefnek.`,
    // 6
    `Mivel Jézus az utazástól elfáradt, leült a kút mellé, amelyet Jákób kútjának neveztek. Dél felé járt az idő.`,
    // 7
    `Ekkor ért a kúthoz egy samáriai asszony, aki a városból jött, hogy vizet merítsen. Jézus megszólította: „Kérlek, adj nekem inni!”`,
    // 8
    `(Eközben a tanítványok éppen bementek a városba, hogy valami ennivalót vegyenek.)`,
    // 9
    `A samáriai asszony csodálkozva kérdezte: „Hogy kérhetsz tőlem vizet zsidó létedre, mikor én samáriai asszony vagyok?!” (A zsidók ugyanis szóba sem álltak a samáriai lakosokkal.)`,
    // 10
    `Jézus így válaszolt: „Ha ismernéd az Isten ajándékát, akkor tudnád, hogy ki az, aki vizet kért tőled - s akkor te kértél volna vizet tőle, ő pedig friss forrásvizet (#r) adott volna neked.”`,
    // 11
    `Ekkor az asszony megkérdezte: „Uram, hogyan vennél forrásvizet? Hiszen vödröd sincs, a kút pedig mély.`,
    // 12
    `Nagyobb lennél, mint Jákób atyánk, aki ezt a kutat adta nekünk? Ő maga is ebből ivott, a fiai is, meg a nyájai is.”`,
    // 13
    `Jézus így válaszolt: „Akik ebből a vízből isznak, azok újra megszomjaznak,`,
    // 14
    `de aki abból a vízből iszik, amelyet tőlem kap, az soha többé nem szomjazik meg. Sőt, az a víz, amelyet én adok neki, forrássá válik benne, s olyan víz ömlik majd belőle, amely örök életet ad.”`,
    // 15
    `„Uram, adj nekem is abból a vízből, hogy ne legyek többé szomjas, és ne kelljen innen hordanom a vizet!” - kérte az asszony.`,
    // 16
    `Jézus ekkor azt mondta neki: „Menj, hívd a férjedet, és jöjjetek vissza!”`,
    // 17
    `Az asszony így válaszolt: „Nincs férjem.”
Jézus így felelt: „Ez valóban igaz, nincs férjed!`,
    // 18
    `Öt férjed volt, de akivel most együtt élsz, az nem a férjed. Igazat mondtál.”`,
    // 19
    `Ekkor az asszony így felelt: „Uram, látom, hogy próféta vagy!`,
    // 20
    `Őseink ezen a hegyen imádták Istent. Ti, júdaiak, azonban azt mondjátok, hogy Jeruzsálemben kell Istent imádni.”`,
    // 21
    `Jézus így válaszolt neki: „Asszony, higgy nekem: eljön az idő, amikor nem kell sem Jeruzsálembe, sem erre a hegyre felmennie annak, aki a Mennyei Atyát akarja imádni.`,
    // 22
    `Ti azt imádjátok, akit nem ismertek, mi pedig ismerjük azt, akit imádunk, mert az, aki a szabadulást hozza, a zsidók közül jön.`,
    // 23
    `Eljön majd az idő, sőt, már itt is van, amikor az igazi imádók lélekben és igazán imádják a Mennyei Atyát, mert az Atya olyanokat keres, akik őt így imádják.`,
    // 24
    `Isten lélek, ezért akik őt imádják, azoknak is lélekben és igazságban kell imádniuk őt.”`,
    // 25
    `Az asszony így válaszolt: „Tudom, hogy egyszer eljön a Messiás, és amikor majd eljön, mindent megmagyaráz nekünk.”`,
    // 26
    `„Én vagyok az, aki veled beszélek” - mondta neki Jézus.`,
    // 27
    `Ebben a pillanatban érkeztek meg a tanítványok. Nagyon elcsodálkoztak, hogy Jézus egy asszonnyal beszélget. De egyikük sem kérdezte meg, hogy mit akart tőle, vagy miért beszélgetett vele.`,
    // 28
    `Az asszony ekkor a kútnál hagyta a vizeskorsóját, visszament, és hívta a város lakóit:`,
    // 29
    `„Gyertek, nézzétek meg azt a férfit, aki mindent elmondott nekem, amit tettem! Lehet, hogy ő a Messiás?”`,
    // 30
    `Azok pedig kimentek Jézushoz.`,
    // 31
    `Amíg az asszony a városba ment, a tanítványok kínálták Jézust: „Mester, egyél valamit!”`,
    // 32
    `De ő ezt felelte: „Van mit ennem, de erről ti nem tudtok.”`,
    // 33
    `A tanítványok egymást kérdezgették: „Hogy lehet ez? Talán valaki hozott neki ennivalót?”`,
    // 34
    `Jézus így válaszolt: „Számomra az az étel, ha azt teszem, amit az Atya rám bízott, hiszen ezért küldött el. Az táplál engem, amikor egészen elvégzem, amivel megbízott.`,
    // 35
    `A vetés idején azt szoktátok mondani: »Még négy hónap, és aratni fogunk.« Én pedig azt mondom nektek: nyissátok ki a szemeteket, és lássátok meg, hogy a gabona már megérett az aratásra!`,
    // 36
    `Aki learatja, meg is kapja érte a bérét, mert az örök életre gyűjti össze a termést. Ezért együtt örül a vető és az arató.`,
    // 37
    `A közmondás ráillik erre: »Az egyik vet, a másik meg arat.«`,
    // 38
    `Én azért küldtelek el titeket, hogy learassátok, amit mások vetettek. Mert valóban mások dolgoztak vele, ti pedig folytatjátok, amit ők elkezdtek: learatjátok a munkájuk gyümölcsét.”`,
    // 39
    `Abban a samáriai városban sokan hittek Jézusban, mivel az az asszony elmondta nekik: „Mindent megmondott nekem, amit csak tettem.”`,
    // 40
    `Ezért a samáriaiak Jézushoz tódultak, kérték, hogy maradjon velük, és ő ott is maradt még két napig.`,
    // 41
    `Ezalatt nagyon sokan hallgatták Jézust, és még többen hittek benne.`,
    // 42
    `Később meg is mondták az asszonynak: „Először amiatt hittünk Jézusban, amit te mondtál róla. Most már magunk is hallottuk őt, és meggyőződtünk róla, hogy valóban ő az egész világ Üdvözítője.”`,
    // 43  ~ A fiad élni fog! (#C) ~
    `Két nap múlva Jézus továbbment Galileába.`,
    // 44
    `(Korábban azt mondta, hogy a prófétának nincs becsülete a saját hazájában.)`,
    // 45
    `Amikor odaért, a galileaiak szívesen fogadták, ugyanis voltak közöttük olyanok, akik ott voltak Jeruzsálemben az ünnepen, és látták mindazt, amit Jézus tett.`,
    // 46
    `Azután Jézus újra a galileai Kánába ment, ahol korábban a vizet borrá változtatta. Élt Kapernaumban egy magas rangú királyi tisztviselő, akinek a fia beteg volt.`,
    // 47
    `Amikor meghallotta, hogy Jézus Júdeából Galileába érkezett, eljött hozzá. Kérte, hogy menjen vele, és gyógyítsa meg a fiát, aki már haldoklott.`,
    // 48
    `Jézus azt felelte: „Ha nem láttok jeleket és csodákat, nem hisztek.”`,
    // 49
    `De a királyi tisztviselő kérlelte: „Uram, gyere velem, mielőtt még meghalna a gyermekem!”`,
    // 50
    `Jézus ezt mondta: „Menj csak haza, a fiad élni fog!”
Ő pedig hitt Jézus szavának, és hazament.`,
    // 51
    `Útközben találkozott a szolgáival, akik azzal a hírrel jöttek elé, hogy a fia már jobban van.`,
    // 52
    `Megkérdezte őket, mikor lett jobban a gyermek.
Azok mondták, hogy előző nap délután egy órakor múlt el a láza.`,
    // 53
    `Az apa visszaemlékezett arra, hogy Jézus pontosan abban az órában mondta neki: „A fiad élni fog!” - és hitt Jézusban egész családjával együtt.`,
    // 54
    `Ez volt a második csodálatos jel, amelyet Jézus tett, miután Júdeából Galileába érkezett.`
  ],
  [
    // 5  ~ Jézus meggyógyít egy beteget a Betesda tavánál ~
    `Ezek után egy ünnep következett, amelyre a júdeaiak fel szoktak menni Jeruzsálembe, és Jézus is felment.`,
    // 2
    `Jeruzsálemben a Juh-kapunál van egy Betesda nevű vízgyűjtő medence, amelyet öt oszlopcsarnok vesz körül.`,
    // 3
    `Itt nagyon sok beteg feküdt: vakok, sánták és bénák. (#s)`,
    // 4
    `Időnként ugyanis leszállt a tóra az Úr angyala, felkavarta a vizet, és aki ilyenkor elsőként lépett a tóba, az meggyógyult, bármilyen betegségben szenvedett is.`,
    // 5
    `Volt közöttük egy férfi, aki már harmincnyolc éve szenvedett valamilyen betegségben.`,
    // 6
    `Jézus látta, hogy ott fekszik, és tudta, hogy milyen régóta beteg. Megkérdezte tőle: „Akarsz-e meggyógyulni?”`,
    // 7
    `Az így felelt: „Uram, nincs senki, aki segítene rajtam, és bevinne a medencébe, amikor a víz felkavarodik. Mire odaérek, mindig valaki más lép be előttem.”`,
    // 8
    `Ekkor Jézus ezt mondta: „Kelj fel, fogd a hordágyadat, és menj haza!”`,
    // 9
    `A férfi azonnal meggyógyult, felkelt, fogta a hordágyát, és elment.
Mivel ez szombaton történt,`,
    // 10
    `a zsidók rászóltak: „Szombat van, a Törvény szerint nem szabad terhet hordoznod!”`,
    // 11
    `Ő ezt felelte: „Aki meggyógyított, az mondta, hogy fogjam a hordágyamat, és menjek haza.”`,
    // 12
    `Azok megkérdezték: „Ki volt az az ember?”`,
    // 13
    `De a meggyógyított férfi erre nem tudott válaszolni, mert közben Jézus eltűnt, mivel nagy tömeg volt azon a helyen.`,
    // 14
    `Később a Templom területén Jézus találkozott ezzel a férfival, és azt mondta neki: „Látod, most visszakaptad az egészségedet, de vigyázz, hogy többé ne vétkezz, különben valami még rosszabb történhet veled!”`,
    // 15
    `Ezután a férfi megmondta a vallási vezetőknek, hogy Jézus volt az, aki meggyógyította őt.`,
    // 16
    `Ettől fogva a vallási vezetők üldözték, és meg akarták ölni Jézust, mivel szombaton gyógyította meg azt a beteget.`,
    // 17
    `Jézus ezt mondta nekik: „Mindaddig, amíg Atyám dolgozik, én is dolgozom!”`,
    // 18
    `Emiatt még inkább meg akarták ölni, mivel megszegte a szombatra vonatkozó törvényt, ráadásul Istent is apjának nevezte, s ezzel egyenlővé tette magát Istennel.`,
    // 19  ~ Jézus isteni hatalma ~
    `Jézus ekkor így válaszolt nekik: „Igazán mondom nektek: a Fiú semmit sem tehet a saját elhatározásából, csak azt, amit az Atyától lát, mert látja, hogy mit tesz az Atya, és ő is ugyanazt teszi.`,
    // 20
    `Az Atya szereti a Fiút, ezért mindent megmutat neki, amit tesz. Sőt, még ezeknél nagyobb dolgokat is fog rábízni, s akkor fogtok majd igazán csodálkozni!`,
    // 21
    `Az Atya feltámasztja a halottakat, és életet ad nekik. Ugyanígy a Fiú is életet ad azoknak, akiknek akar.`,
    // 22
    `Az Atya senkit sem ítél, hanem az ítéletet egészen rábízta a Fiúra,`,
    // 23
    `hogy mindenki úgy tisztelje a Fiút, mint az Atyát. Aki tehát nem tiszteli a Fiút, az nem tiszteli az Atyát sem, aki a Fiút elküldte.`,
    // 24
    `Igazán mondom nektek: aki hallgat a szavamra, és hisz abban, aki elküldött engem, annak már örök élete van. Az ilyen ember nem kerül kárhoztató ítélet alá, mert már átment a halálból az örök életre.`,
    // 25
    `Igazán mondom nektek, eljön az idő, sőt, már itt is van, amikor a halottak meghallják az Isten Fiának hangját, és akik hallgatnak a szavára, örökké élni fognak.`,
    // 26
    `Mert ahogyan az élet forrása az Atyában van, ugyanúgy a Fiúnak is megadta, hogy benne is az élet forrása legyen.`,
    // 27
    `Sőt, arra is felhatalmazást adott neki, hogy ítéletet tartson, mert ő az Emberfia.`,
    // 28
    `Ne csodálkozzatok ezen, mert eljön az idő, amikor minden halott meghallja a sírokban a Fiú hangját,`,
    // 29
    `és előjön. Akik életükben jót tettek, az örök életre támadnak fel, akik pedig gonosz dolgokat műveltek, azért támadnak fel, hogy ítéletre kerüljenek.”`,
    // 30  ~ Akik tanúskodnak Jézusról ~
    `„Önmagamban, az Atyától függetlenül semmit nem tehetek. Ahogyan az Atyától hallom, annak megfelelően ítélek és döntök. Nem a saját akaratom megvalósítására törekszem, hanem annak akaratát viszem véghez, aki elküldött engem, ezért igazságosak az ítéleteim.`,
    // 31
    `Ha csak én tanúskodnék saját magamról, az nem lenne érvényes.`,
    // 32
    `Valaki más az, aki tanúskodik rólam, és az ő tanúskodása kétség nélkül hiteles.`,
    // 33
    `Ti megkérdeztétek Bemerítő Jánost, és ő hűségesen tanúskodott a valóságról.`,
    // 34
    `Bár nem szorulok rá, hogy emberek tanúskodjanak mellettem, mégis emlékeztetlek titeket arra, amit ő mondott rólam, hogy üdvösségre jussatok.`,
    // 35
    `János olyan volt, mint egy égő fáklya, amely megvilágítja az utat. Ti azonban csak ideig-óráig akartátok a világosságát élvezni.`,
    // 36
    `Mellettem azonban erősebb bizonyítékok szólnak, mint János tanúskodása: a tetteim! A feladatok, amelyeket az Atya rám bízott, hogy elvégezzem, azok bizonyítják, hogy ő küldött engem.`,
    // 37
    `Sőt, maga az Atya is tanúskodott rólam, aki engem elküldött! Ti azonban soha nem hallottátok a hangját, sem nem láttátok az arcát.`,
    // 38
    `A szavai sem élnek bennetek, mert nem hisztek annak, akit hozzátok küldött, s aki által üzent nektek.`,
    // 39
    `Buzgón tanulmányozzátok az Írásokat, mert azt hiszitek, hogy azok által kaptok örök életet. Jóllehet az Írások is rólam tanúskodnak,`,
    // 40
    `mégsem akartok hozzám jönni, hogy örök életetek legyen!`,
    // 41
    `Emberektől nem fogadok el dicsőséget vagy elismerést.`,
    // 42
    `Jól ismerlek titeket, és tudom, hogy valójában nincs bennetek Isten iránti szeretet!`,
    // 43
    `Bár engem Atyám küldött, hogy képviseljem őt, ti mégsem fogadtok be. Ha valaki más jön majd a saját hatalmával, azt el fogjátok fogadni!`,
    // 44
    `Hogyan is tudnátok bennem hinni? Hiszen ti nem az egyetlen igaz Istentől, hanem egymástól akartok dicsőséget és elismerést kapni.`,
    // 45
    `Ne gondoljátok, hogy én foglak vádolni benneteket az Atya előtt! Éppen az lesz a vádlótok, akiben reménykedtek: Mózes! Mert ha neki hittetek volna,`,
    // 46
    `akkor bennem is hinnétek, hiszen énrólam írt.`,
    // 47
    `De ha az ő írásainak nem hisztek, hogyan hihetnétek az én szavaimnak?”`
  ],
  [
    // 6  ~ Jézus enni ad több, mint ötezer embernek (#D) ~
    `Jézus ezután elment a Galileai-tó (Tibériás-tó) másik oldalára.`,
    // 2
    `Nagy tömeg követte, mert látták a csodákat, ahogyan a betegeket meggyógyította.`,
    // 3
    `Jézus felment a hegyoldalra, és a tanítványaival együtt letelepedett.`,
    // 4
    `Ekkor már közel volt a 
<span 
  class="has-tooltip-after"
  data-tooltip="Ez valószínűleg a ”Harsonák Napjának ünnepe” (nem páska / húsvét)
  • A páska ünnepe alatt mindenkinek Jeruzsálemben kell lennie a Tóra szerint. Ez az esemény azonban Betsaidában van, Jeruzsálemtől több mint 120 km-re.
  • Jézus kovászos kenyeret ad az embereknek (amit a páska ünnepén tilos fogyasztani).
  • Az ”utolsó nap” és az ”emberek feltámadása” a Harsonák Napjának alapelemei, nem a páskájé (lsd. a másnapi események következő igehelyeit: Jn6:39,40,44,54).

  Ez a megjegyzés nem része az ERV-HU Biblia fordításnak"
>páska</span>
    a zsidók nagy ünnepe.`,
    // 5
    `Amikor Jézus körülnézett és látta, hogy mekkora tömeg közeledik feléjük, megkérdezte Fülöptől: „Honnan vegyünk annyi kenyeret, hogy mindannyian ehessenek?”`,
    // 6
    `Csak próbára akarta tenni, mert ő maga jól tudta, mire készül.`,
    // 7
    `Fülöp ezt felelte: „Ha kétszáz ezüstpénzért vennénk kenyeret, akkor is csak egy falat jutna mindegyiküknek!”`,
    // 8
    `Egy másik tanítvány, András - Simon Péter testvére - ezt mondta Jézusnak:`,
    // 9
    `„Van itt egy kisfiú, aki hozott magával öt árpakenyeret és két halat, de mi az egy ekkora tömegnek?”`,
    // 10
    `Jézus ekkor azt mondta a tanítványoknak: „Ültessétek le őket!” Nagy fű nőtt azon a helyen, s az emberek leültek a fűbe. A tömegben csak a férfiak lehettek vagy ötezren.`,
    // 11
    `Ezután Jézus kezébe vette a kenyereket, hálát adott Istennek, és szétosztotta azok közt, akik ott ültek. Adott nekik a halakból is, amennyit csak kértek.`,
    // 12
    `Amikor már mindenki jóllakott, azt mondta a tanítványoknak: „Gyűjtsétek össze, ami megmaradt, hogy semmi se vesszen kárba!”`,
    // 13
    `Össze is szedtek mindent, és tizenkét kosarat töltöttek meg a darabokkal, amelyek az öt árpakenyérből maradtak.`,
    // 14
    `Az emberek látták ezt a csodát, amelyet Jézus tett, és ezt mondták: „Biztosan ő az a Próféta, (#u) akinek el kellett jönnie!”`,
    // 15
    `Jézus észrevette, hogy az emberek már-már meg akarják ragadni, hogy akár erőszakkal is királlyá tegyék. Ezért ismét félrevonult tőlük, és elment a hegyek közé egyedül.`,
    // 16  ~ A vízen jár (#E) ~
    `Estefelé a tanítványok lementek a tóhoz,`,
    // 17
    `beszálltak egy halászbárkába, és elindultak a túlsó partra, Kapernaum felé. Már besötétedett, de Jézus még mindig nem jött vissza hozzájuk.`,
    // 18
    `Erős szél fújt, és egyre nagyobb hullámok támadtak a tavon. Már vagy öt-hat kilométerre eltávolodtak a parttól,`,
    // 19
    `amikor meglátták Jézust, amint a vízen járva közeledett hozzájuk. Nagyon megrémültek,`,
    // 20
    `de Jézus így biztatta őket: „Én vagyok az, ne féljetek!”`,
    // 21
    `A tanítványok nagyon megörültek, s be akarták venni Jézust a bárkába, de hirtelen már partot is értek ott, ahová igyekeztek.`,
    // 22  ~ Az emberek keresik Jézust ~
    `Másnap a túlsó parton maradt tömeg észrevette, hogy a tanítványok elmentek azzal az egyetlen bárkával, amely ott volt, de Jézus nem ment velük.`,
    // 23
    `Ugyanakkor néhány másik bárka érkezett Tibériásból, nem messze attól a helytől, ahol a kenyeret ették, miután Jézus hálát adott.`,
    // 24
    `Amikor az emberek látták, hogy sem Jézus, sem a tanítványok nincsenek ott, ők is vízre szálltak, és Kapernaumba mentek, hogy megkeressék Jézust.`,
    // 25  ~ Én vagyok az élet kenyere ~
    `Amikor rátaláltak Jézusra a túlsó parton, megkérdezték tőle: „Mester, mikor jöttél ide?”`,
    // 26
    `Jézus ezt válaszolta: „Igazán mondom nektek: nem azért kerestek engem, mert láttatok csodákat, hanem mert ettetek a kenyérből, és jóllaktatok.`,
    // 27
    `Ne azon igyekezzetek, hogy ilyen földi kenyeret kapjatok, amely mulandó! Inkább arra törekedjetek, hogy olyan kenyeret szerezzetek, amely örökké megmarad, és örök életet ad! Ezt a kenyeret majd az Emberfia adja nektek, mert ő az, akit Isten erre felhatalmazott.”`,
    // 28
    `Megkérdezték Jézustól: „Mit kíván tőlünk Isten? Mit tegyünk?”`,
    // 29
    `Ő így felelt: „Ezt az egyet: higgyetek abban, akit Isten elküldött!”`,
    // 30
    `Ekkor azok megkérdezték: „De milyen csodával tudod bizonyítani, hogy Isten éppen téged küldött? Ha majd ezt bebizonyítod, akkor hiszünk neked! Mit fogsz tenni?`,
    // 31
    `Atyáink mannát ettek a pusztában, ahogy meg van írva: »Mennyből származó kenyeret adott nekik enni.«” (#v)`,
    // 32
    `Erre Jézus így válaszolt: „Igazán mondom nektek: nem Mózes adta nektek azt a mennyei kenyeret. Az igazi Mennyből jövő kenyeret Atyám adja nektek,`,
    // 33
    `mert az igazi, Istentől származó kenyér az, aki a Mennyből száll le, és életet ad minden embernek.”`,
    // 34
    `Ekkor így kérték: „Uram, mostantól fogva mindig add nekünk azt a kenyeret!”`,
    // 35
    `Jézus ezt felelte: „Én vagyok az a kenyér! Én adok életet! Aki hozzám jön, nem fog éhezni soha! Aki hisz bennem, nem szomjazik soha többé!`,
    // 36
    `Korábban már megmondtam nektek: bár láttatok engem, (#w) mégsem hisztek bennem.`,
    // 37
    `Akiket nekem ad az Atya, azok mind hozzám jönnek, és senkit sem utasítok el, hanem mindenkit befogadok, aki hozzám jön.`,
    // 38
    `Mert nem azért jöttem le a Mennyből, hogy a saját akaratomat vigyem véghez, hanem annak akaratát, aki elküldött engem.`,
    // 39
    `Ő pedig azt akarja, hogy senkit el ne veszítsek azok közül, akiket nekem adott, hanem mindegyiket támasszam fel az utolsó napon.`,
    // 40
    `Mert Atyám azt akarja, hogy akik látják a Fiút és hisznek benne, azoknak örök élete legyen, és feltámasszam őket az utolsó napon.”`,
    // 41
    `A júdeaiak felháborodtak és megütköztek azon, hogy Jézus azt mondta: „Én vagyok az a kenyér, amely a Mennyből szállt le.”`,
    // 42
    `Azt mondták: „Hiszen ez Jézus, a József fia! Ismerjük a szüleit! Hogy mondhat ilyet, hogy a Mennyből jött le?”`,
    // 43
    `De Jézus így felelt nekik: „Ne zúgolódjatok egymás között!`,
    // 44
    `Senki sem tud magától hozzám jönni, csak akkor, ha vonzza és vezeti az Atya, aki engem elküldött - én pedig majd feltámasztom azt az embert az utolsó napon.`,
    // 45
    `A próféták is megírták: »Mindegyiküket maga Isten fogja tanítani.« (#x) Akik Atyámra hallgatnak, s akiket ő tanít, azok mind hozzám jönnek.`,
    // 46
    `Nem azt mondom, hogy az Atyát látta volna valaki is. Hiszen őt soha senki sem látta, kivéve azt az egyet, aki Istentől származik - egyedül ő látta az Atyát.`,
    // 47
    `Igazán, mondom nektek: aki hisz bennem, annak örök élete van!`,
    // 48
    `Én vagyok az élet kenyere, aki életet ad!`,
    // 49
    `Őseitek a mannát ették a pusztában, és meghaltak.`,
    // 50
    `De most itt van az a kenyér, amely a Mennyből szállt le! Aki ebből eszik, soha nem hal meg.`,
    // 51
    `Én magam vagyok ez az életadó kenyér, aki a Mennyből jöttem le. Aki ezt a kenyeret eszi, örökké él! Ez a kenyér a testem, amelyet majd áldozatul adok a világ életéért.”`,
    // 52
    `Erre a júdeaiak hevesen vitatkozni kezdtek egymással: „Hogy lehet ez? Hogyan adhatná nekünk a testét, hogy megegyük?!”`,
    // 53
    `Jézus így felelt: „Igazán mondom nektek: csak akkor lehet élet bennetek, ha eszitek az Emberfia testét, és isszátok a vérét!`,
    // 54
    `Igen, aki eszi a testemet, és issza a véremet, annak örök élete van, és én feltámasztom őt az utolsó napon.`,
    // 55
    `Mert a testem igazi étel, és a vérem igazi ital!`,
    // 56
    `Aki eszi a testemet, és issza a véremet, az folyamatosan bennem él, és én is őbenne.`,
    // 57
    `Engem az élő Atya küldött, és én is ő általa élek. Ugyanígy, aki engem eszik, az is élni fog általam,`,
    // 58
    `mert én nem olyan vagyok, mint az a kenyér, amelyet őseink a pusztában ettek! Hiszen ők ették ugyan azt a kenyeret - a mannát -, mégis meghaltak. Én olyan kenyér vagyok, amely a Mennyből jött le a Földre. Aki ezt a kenyeret eszi, az örökké él!”`,
    // 59
    `Jézus mindezt a zsinagógában mondta, amikor Kapernaumban tanított.`,
    // 60  ~ Uram, kihez mehetnénk máshoz? ~
    `Ezt hallva, a tanítványok közül sokan azt mondták: „Milyen tanítás ez? Ki tudja ezt megérteni és elfogadni?”`,
    // 61
    `Jézus tudta, hogy tanítványai morgolódnak amiatt, amit mondott. Ezért megszólította őket: „Zavarba ejtett titeket ez a tanítás? Megütköztetek rajta?`,
    // 62
    `Mit fogtok majd szólni akkor, ha látjátok, hogy az Emberfia felmegy oda, ahol azelőtt volt?`,
    // 63
    `A Szentlélek az, aki megelevenít és életet ad, a hús-vér test erre képtelen. Amit mondtam, az a Szentlélektől származik, és életet ad.`,
    // 64
    `De még közöttetek is vannak, akik nem hisznek.” (Jézus ugyanis már kezdettől fogva tudta, hogy kik azok, akik nem hisznek, és ki fogja őt elárulni.)`,
    // 65
    `Majd így folytatta: „Ezért mondtam nektek, hogy csak az jöhet hozzám, akinek az Atya ezt lehetővé tette.”`,
    // 66
    `Ekkor Jézus tanítványai közül sokan elfordultak tőle, és többé nem követték őt.`,
    // 67
    `Ő pedig megkérdezte a tizenkét apostolt: „Ti is el akartok menni?”`,
    // 68
    `Simon Péter felelt: „Uram, kihez mehetnénk?! A te szavaid vezetnek az örök életre.`,
    // 69
    `Mi hiszünk benned, és meggyőződtünk róla, hogy te vagy az Isten Szentje!”`,
    // 70
    `Jézus erre így válaszolt: „Nem én választottalak ki benneteket, mind a tizenkettőt? Mégis van közöttetek egy, aki a Gonoszhoz tartozik!”`,
    // 71
    `Júdásról, az Iskáriótes Simon fiáról beszélt, aki a tizenkettő közé tartozott, mégis el akarta árulni Jézust.`
  ],
  [
    // 7  ~ Jézus és testvérei ~
    `Jézus ezután Galilea tartományában járt. Nem akart Júdeában maradni, mert a vallási vezetők meg akarták ölni.`,
    // 2
    `Közel volt a Sátoros ünnep, a zsidók ünnepe,`,
    // 3
    `ezért testvérei ezt mondták Jézusnak: „Jobb lenne, ha felmennél Júdeába, az ünnepre, hadd lássák a tanítványaid, amit teszel!`,
    // 4
    `Ha valaki népszerű akar lenni, az ne rejtőzzön el a nyilvánosság elől! Mutasd meg magad az egész világnak, hadd lássa mindenki a csodáidat!”`,
    // 5
    `Ezt azért mondták a testvérei, mert még ők sem hittek benne.`,
    // 6
    `Jézus így felelt: „Az én időm még nem jött el, de számotokra minden idő alkalmas.`,
    // 7
    `Titeket nem gyűlölhetnek az emberek, de engem gyűlölnek, mert rájuk bizonyítom a gonosz tetteiket.`,
    // 8
    `Ti csak menjetek fel az ünnepre, én még nem megyek fel, mert nincs itt az ideje.”`,
    // 9
    `Ezután Jézus még Galileában maradt.`,
    // 10
    `A testvérei pedig elindultak Jeruzsálembe, az ünnepre.
Valamivel később azonban Jézus is elindult, de titokban, mert nem akarta, hogy felismerjék.`,
    // 11
    `A júdeaiak keresték Jézust az ünnepek alatt, és egymást kérdezgették: „Hol lehet az az ember?”`,
    // 12
    `Az ünnepre összegyűlt tömegben sokan Jézusról beszéltek és vitatkoztak, de csak egymás között. Voltak, akik azt mondták róla: „Jó ember.”
Mások meg azt: „Nem, dehogy is jó, hiszen félrevezeti az embereket.”`,
    // 13
    `De nyíltan senkisem mert róla beszélni, mert féltek a vallási vezetőktől.`,
    // 14  ~ Jézus tanít a Templom udvarában ~
    `Az ünnepi hét fele már elmúlt, mikor Jézus felment a Templom udvarába, és tanítani kezdte a sokaságot.`,
    // 15
    `A vallási vezetők megdöbbentek a tanításán: „Hogyan ismerheti ilyen jól az Írásokat, ha nem tanulta a tanításainkat?”`,
    // 16
    `Jézus pedig így felelt nekik: „Amit én tanítok, az nem tőlem származik, hanem attól, aki elküldött engem.`,
    // 17
    `Ha valaki Isten akaratát akarja véghezvinni, az el tudja dönteni, hogy Istentől van-e, amit tanítok, vagy magamtól.`,
    // 18
    `Mert aki a saját gondolatait hirdeti, az magának akar elismerést és dicsőséget szerezni. Aki pedig annak akar dicsőséget szerezni, aki őt elküldte, az igaz ember, és nincs benne hamisság.`,
    // 19
    `Nem Mózes adta nektek a Törvényt? Mégsem engedelmeskedik a Törvénynek egyikőtök sem! Miért akartok engem megölni?”`,
    // 20
    `Erre azok így feleltek: „Gonosz szellem van benned! Ki akar téged megölni?”`,
    // 21
    `Jézus így válaszolt: „Véghezvittem valamit, amin mindannyian csodálkoztok.`,
    // 22
    `Mózes elrendelte a körülmetélést. (Bár az eredetileg nem tőle származott, hanem az előtte élő atyáktól.) Ti pedig akkor is körülmetélitek a kisgyermeket, ha az a nap történetesen szombatra esik.`,
    // 23
    `Ha pedig elvégezhetitek a körülmetélést szombaton úgy, hogy ezzel nem sértitek meg Mózes Törvényét, akkor miért haragszotok rám, hogy valakinek az egész testét meggyógyítottam szombaton?`,
    // 24
    `Ne a látszat alapján ítéljetek, hanem igazságosan, és méltányosan!”`,
    // 25  ~ Valóban Jézus-e a Messiás? ~
    `Ekkor néhány jeruzsálemi lakos azt mondta: „Nem ő az, akit meg akarnak ölni?`,
    // 26
    `De hiszen most nyiltan beszél, és nem szólnak ellene! Talán felismerték a vezetők, hogy valóban ő a Messiás?`,
    // 27
    `Másrészt viszont, ha a Messiás eljön, senki sem fogja tudni, honnan jön, őróla meg tudjuk, hogy honnan származik!”`,
    // 28
    `Miközben Jézus a Templom udvarában tanított, hangosan felkiáltott: „Valóban ismertek engem, és azt is tudjátok, honnan jöttem? Csakhogy én nem magamtól jöttem, hanem az küldött el, aki valóságos, de ti nem ismeritek őt!`,
    // 29
    `Én azonban ismerem, mert tőle jöttem, ő küldött el engem!”`,
    // 30
    `Emiatt egyesek szerették volna Jézust letartóztatni, de nem mertek kezet emelni rá, mert ennek még nem jött el az ideje.`,
    // 31
    `Sokan mások azonban hittek benne, és ezt mondták: „Ha majd eljön a Messiás, vajon tehet-e több csodát, mint ez az ember?”`,
    // 32  ~ A vallási vezetők megpróbálják Jézust letartóztatni ~
    `A farizeusok meghallották, hogy a tömegben ilyen szóbeszéd terjed Jézusról. Ezért a főpapokkal együtt templomi őröket küldtek érte, hogy tartóztassák le.`,
    // 33
    `Jézus akkor ezt mondta: „Még egy rövid ideig veletek leszek, azután visszatérek ahhoz, aki elküldött engem.`,
    // 34
    `Keresni fogtok, de nem találtok, mert ahová én megyek, oda nem jöhettek utánam.”`,
    // 35
    `Akik hallották ezt, így tanakodtak egymás közt: „Hová megy, ahol nem találhatjuk meg? Talán a görög városokban szétszórtan élő zsidókhoz akar menni, és őket akarja tanítani?`,
    // 36
    `Mit akart azzal mondani, hogy »keresni fogtok, de nem találtok meg«, és hogy »ahová én megyek, oda ti nem jöhettek«?”`,
    // 37  ~ Jézus a Szentlélekről ~
    `Az ünnep utolsó, legnagyobb napján Jézus felállt, és így kiáltott: „Ha valaki szomjas, jöjjön hozzám, és igyon!`,
    // 38
    `Aki hisz bennem, annak szívéből majd élő víznek forrásai fakadnak - ahogyan az Írás mondja.”`,
    // 39
    `Ezt a hasonlatot a Szentlélekről mondta, akit később azok kaptak meg, akik Jézusban hittek. De amikor ezt mondta, akkor a Szentlelket még senki sem kaphatta meg, mert Jézus még nem dicsőült meg.`,
    // 40  ~ Az emberek vitatkoznak Jézusról ~
    `Ezt hallva a sokaság egy része azt mondta: „Bizony, ő a Próféta!” (#y)`,
    // 41
    `Mások azt mondták: „Ő a Messiás!”
De voltak, akik ezt mondták: „Az nem lehet, mert a Messiás nem Galileából származik!`,
    // 42
    `Nem azt mondja az Írás, hogy a Messiás Dávid családjából származik, és Betlehemből jön majd, abból a városból, ahol Dávid élt?”`,
    // 43
    `Emiatt nem tudtak egyetértésre jutni.`,
    // 44
    `Voltak, akik szerették volna Jézust letartóztatni, de nem mertek kezet emelni rá.`,
    // 45  ~ A vallási vezetők nem hisznek Jézusban ~
    `A Templom-őrség ekkor dolgavégezetlenül visszament a főpapokhoz és a farizeusokhoz. Azok megkérdezték: „Miért nem tartóztattátok le, és hoztátok ide őt?”`,
    // 46
    `Az őrök azt válaszolták: „Még soha senki nem beszélt úgy, mint ez az ember!”`,
    // 47
    `A farizeusok ekkor megkérdezték: „Csak nem bolondított el titeket is?`,
    // 48
    `Látjátok, hogy senki sem hisz benne a farizeusok és a főpapok közül!`,
    // 49
    `Csak a tömeg követi, de ők átok alatt vannak, mert nem ismerik a Törvényt!”`,
    // 50
    `A farizeusok között ott volt Nikodémus is, aki korábban elment Jézushoz, és beszélt vele. (#z) Azt mondta:`,
    // 51
    `„A Törvényünk szerint senki nem ítélhető el, amíg ki nem hallgatták! Mi sem ítélhetjük el őt, amíg ki nem vizsgáltuk, hogy mit tett.”`,
    // 52
    `Ekkor a többiek letorkolták: „Talán te is Galileából jöttél? Nézz utána az Írásokban, és meglátod, hogy a Próféta nem Galileából származik!”`,
    // 53
    `Ezután mindannyian hazamentek.`
  ],
  [
    // 8  ~ A házasságtörő asszony esete ~
    `Jézus felment az Olajfák hegyére,`,
    // 2
    `de korán reggel ismét visszatért a Templom területére. Az emberek mind köré gyűltek, ő pedig leült, és tanította őket.`,
    // 3
    `A törvénytanítók és a farizeusok odahoztak Jézushoz egy asszonyt, akit házasságtörésen kaptak. Középre állították,`,
    // 4
    `és megkérdezték Jézust: „Mester, ezt az asszonyt tetten érték házasságtörés közben.`,
    // 5
    `Mózes a Törvényben azt parancsolta, hogy az ilyet meg kell kövezni, hogy meghaljon. Te mit mondasz?”`,
    // 6
    `Ezt azért kérdezték, hogy Jézust próbára tegyék, és vádolhassák valamivel. De ő nem válaszolt, csak lehajolt, és az ujjával írni kezdett a földre.`,
    // 7
    `Mivel tovább kérdezgették, végül felegyenesedett, és azt mondta nekik: „Az dobja rá erre az asszonyra az első követ, aki bűntelen!”`,
    // 8
    `Majd újra lehajolt, és tovább írt a földre.`,
    // 9
    `Ezt hallva, azok kezdtek elszállingózni. Először az idősebbek távoztak, majd egymás után mind eltűntek. Végül csak Jézus és a középen álló asszony maradt ott.`,
    // 10
    `Ekkor Jézus felegyenesedett, és megkérdezte: „Asszony, hol vannak a vádlóid? Senki nem ítélt el téged?”`,
    // 11
    `„Senki, Uram” - felelte az asszony.
Jézus ezt mondta: „Én sem ítéllek el. Menj el, de többé ne vétkezz!” (#aa)`,
    // 12  ~ Én vagyok a világ világossága! ~
    `Később Jézus ezt mondta az összegyűlt sokaságnak: „Én vagyok a világ világossága. Aki engem követ, nem a sötétségben él, hanem a világosságban, amely az örök élet.”`,
    // 13
    `Erre a farizeusok ellene szóltak: „Most magadról tanúskodsz, ezért a tanúságod nem ér semmit!”`,
    // 14
    `Jézus így felelt: „Még ha magamról tanúskodom, akkor is hiteles, amit mondok, mert én tudom, honnan jöttem, és hová megyek. Ti viszont nem tudjátok, honnan jöttem, és hová megyek.`,
    // 15
    `Ti csak emberi módon, a látszat szerint ítéltek, én azonban nem ítélek el senkit,`,
    // 16
    `de még ha ítélkezem is, az ítéletem akkor is érvényes és igazságos, mert nem egyedül ítélek. Ketten vagyunk: én és az Atya, aki elküldött engem.`,
    // 17
    `A Törvényetek azt mondja, hogy két tanú egybehangzó vallomását el kell fogadnotok.`,
    // 18
    `Az egyik tanú én vagyok, aki önmagamról tanúskodom, a másik pedig az Atya, aki engem elküldött - ő is tanúskodik rólam.”`,
    // 19
    `Megkérdezték tőle: „Hol van a te atyád?”
Jézus így válaszolt: „Sem engem nem ismertek, sem Atyámat. Ha tudnátok, ki vagyok, ismernétek Atyámat is.”`,
    // 20
    `Jézus mindezt akkor mondta, amikor a Templom területén tanított, annak a helynek a közelében, ahol az adományokat gyűjtötték. Senki sem tartóztatta le, mert még nem jött el az ideje.`,
    // 21  ~ Jézus az Atyától jött, és hozzá megy ~
    `Azután Jézus ezt mondta: „Én majd elmegyek, ti pedig keresni fogtok engem, de ahová megyek, oda ti nem jöhettek, és a bűneitekben fogtok meghalni.”`,
    // 22
    `Ekkor a júdeaiak egymás között tanakodtak: „Talán meg akarja ölni magát, hogy azt mondja: »Ahová én megyek, oda ti nem jöhettek«?”`,
    // 23
    `Jézus így folytatta: „Ti innen, a földről származtok, én pedig fentről származom. Ti ehhez a világhoz tartoztok, de én nem.`,
    // 24
    `Ezért mondtam nektek, hogy a bűneitekben fogtok meghalni. Bizony, ha nem hiszitek, hogy ÉN VAGYOK, (#ab) akkor a bűneitekben haltok meg.”`,
    // 25
    `Ekkor azok megkérdezték: „Ki vagy te tulajdonképpen?”
Jézus így válaszolt: „Az vagyok, akinek kezdettől fogva mondom magamat.`,
    // 26
    `Sok mindent mondhatnék rólatok, és elítélhetnélek titeket. De csak azt mondom, amit attól hallottam, aki elküldött engem, és amit ő mond, az igaz!”`,
    // 27
    `Azok nem értették meg, hogy az Atyáról beszélt.`,
    // 28
    `Jézus így folytatta: „Amikor majd fölemelitek (#ac) az Emberfiát, akkor fogjátok felismerni, hogy ÉN VAGYOK. Meg fogjátok érteni azt is, hogy amit teszek, azt nem magamtól teszem, és csak azt mondom, amire az Atya tanított,`,
    // 29
    `mert engem ő küldött, és mindig velem van. Nem hagyott egyedül, mert én mindig azt teszem, amivel a kedvében járok.”`,
    // 30
    `Amikor ezt mondta, sokan hittek Jézusban.`,
    // 31  ~ Az igazság megszabadít ~
    `Azután Jézus azokhoz fordult, akik hittek benne: „Ha ragaszkodtok a tanításomhoz, engedelmeskedtek a szavamnak, és annak megfelelően éltek, akkor valóban a tanítványaim vagytok.`,
    // 32
    `Akkor majd megismeritek az igazságot, az igazság pedig megszabadít titeket.”`,
    // 33
    `Azok így válaszoltak: „Mi Ábrahám leszármazottjai vagyunk, és soha nem voltunk rabszolgák! Miért mondod, hogy meg fogunk szabadulni?”`,
    // 34
    `Jézus így válaszolt: „Igazán mondom nektek, ha valaki bűnben él, az a bűn rabszolgája.`,
    // 35
    `A rabszolga nem marad örökre a családban, csak a fiú,`,
    // 36
    `ezért, ha a Fiú megszabadít titeket, akkor valóban szabadok lesztek! Tudom, hogy Ábrahám leszármazottjai vagytok,`,
    // 37
    `mégis meg akartok ölni, mert nem fogadjátok el a tanításomat.`,
    // 38
    `Én arról beszélek, amit Atyámtól tanultam, és ti is azt teszitek, amit atyátoktól tanultatok.”`,
    // 39
    `Azok így feleltek: „A mi ősatyánk Ábrahám!” Jézus azonban ezt válaszolta: „Ha valóban Ábrahám leszármazottjai lennétek, akkor az ő példáját követnétek.`,
    // 40
    `De ti meg akartok ölni engem, aki az igazságot mondom nektek, amit Istentől hallottam. Ábrahám nem tett ilyet.`,
    // 41
    `Ti valóban azt teszitek, amit atyátok.”
Ők erre így válaszoltak: „Nem vagyunk mi törvénytelen gyermekek! Egy Atyánk van, az Isten!”`,
    // 42
    `Jézus így válaszolt: „Ha Isten lenne az atyátok, szeretnétek és elfogadnátok engem, mert én Istentől jöttem. Nem magamtól jöttem, ő küldött el engem.`,
    // 43
    `Miért nem értitek, amit mondok? Mert nem fogadjátok el a tanításomat!`,
    // 44
    `A ti atyátok a Gonosz, ti pedig örömmel megteszitek, amit ő kíván. Ő kezdettől fogva gyilkos volt, és soha nem állt az igazság oldalán, mert nincs is benne semmi igazság. Amikor hazudik, akkor mutatja meg a valódi természetét: hogy hazug, és ő a hazugságok forrása.`,
    // 45
    `Ezzel ellentétben én az igazat mondom, de ti nem hisztek nekem.`,
    // 46
    `Kicsoda vádolhatna engem bűnnel közületek? Ha pedig igazat mondok, miért nem hisztek nekem?`,
    // 47
    `Aki Istentől származik, az elfogadja, amit Isten mond. Ti azért nem fogadjátok el, mert nem Istentől származtok!”`,
    // 48  ~ Jézus és Ábrahám ~
    `A júdeabeliek erre azt felelték: „Talán nincs igazunk, amikor azt mondjuk, hogy samáriai vagy, és gonosz szellem van benned?”`,
    // 49
    `Jézus így válaszolt: „Nincs bennem gonosz szellem, hanem tisztelem Atyámat, ti pedig gyaláztok engem.`,
    // 50
    `Én nem a magam dicsőségét keresem. Van, aki gondot visel erre, és ő fog ebben ítélni.`,
    // 51
    `Igazán mondom nektek: ha valaki engedelmeskedik tanításomnak, és a szerint él, az nem hal meg soha.”`,
    // 52
    `Azok így válaszoltak: „Most már biztosan tudjuk, hogy gonosz szellem lakik benned! Hiszen Ábrahám meghalt, a próféták is meghaltak, te mégis azt mondod: »ha valaki engedelmeskedik tanításomnak, és aszerint él, az nem hal meg soha«.`,
    // 53
    `Nagyobb vagy, mint atyánk, Ábrahám? Ő meghalt, és a próféták is mind meghaltak. Hát mit gondolsz, ki vagy te?!”`,
    // 54
    `Jézus erre így válaszolt: „Ha magamat dicsőíteném, akkor a dicsőségem nem érne semmit. Atyám az, aki engem megdicsőít. Ti azt állítjátok, hogy ő az Istenetek.`,
    // 55
    `Pedig soha nem ismertétek meg, én viszont ismerem. Ha azt mondanám, hogy nem ismerem, ugyanolyan hazug lennék, mint ti, de én ismerem őt, és engedelmeskedem annak, amit mond.`,
    // 56
    `Atyátok, Ábrahám nagyon örült annak a reménynek, hogy meg fogja látni azt a napot, amikor majd eljövök. Látta is, és nagyon örült.”`,
    // 57
    `Ekkor a júdeabeliek azt mondták neki: „Micsoda?! Azt állítod, hogy láttad Ábrahámot? Ez lehetetlen, hiszen még ötven éves sem vagy!”`,
    // 58
    `Jézus felelt: „Igazán mondom nektek: mielőtt Ábrahám megszületett, ÉN VAGYOK.”`,
    // 59
    `Ekkor köveket kaptak föl, hogy megdobálják Jézust, de ő eltűnt előlük, és elhagyta a Templom területét.`
  ],
  [
    // 9  ~ A vakon született koldus gyógyulása ~
    `Egyszer útközben Jézus meglátott valakit, aki születésétől fogva vak volt.`,
    // 2
    `Tanítványai megkérdezték tőle: „Mester, kinek a bűne miatt született ez vakon? A szülei vétkeztek, vagy ő maga?”`,
    // 3
    `Jézus így felelt nekik: „Egyik sem! Sem ő, sem a szülei nem vétettek - nem emiatt született vakon. Azért történt így, hogy Isten rajta mutassa meg hatalmát.`,
    // 4
    `Amíg nappal van, el kell végeznem azokat a feladatokat, amelyeket az Atya bízott rám, aki elküldött. Majd eljön az éjszaka, és akkor senki sem dolgozhat.`,
    // 5
    `Amíg ezen a világon vagyok, én vagyok a világ világossága.”`,
    // 6
    `Ezután a földre köpött, sarat készített, s azt a vak férfi szemére kente.`,
    // 7
    `Azt mondta neki: „Menj, és mosakodj meg a Siloám-medencében!” (A „Siloám” azt jelenti: küldött.) A vak elment, megmosakodott, és amikor visszajött, már látott.`,
    // 8
    `A szomszédai, és akik előzőleg látták őt koldulni, ezt kérdezték: „Nem ő az, aki itt szokott koldulni?”`,
    // 9
    `Néhányan azt mondták, hogy ő az. Mások úgy gondolták, hogy nem, csak hasonlít rá.
A koldus megmondta: „Én vagyok az!”`,
    // 10
    `Ekkor ezt kérdezték tőle: „Hogyan gyógyult meg a szemed?”`,
    // 11
    `Ő pedig így válaszolt: „Egy Jézus nevű ember sarat kent a szememre, és azt mondta: »Menj, és mosakodj meg a Siloám-medencében!« Én pedig elmentem, megmosakodtam, és most látok.”`,
    // 12
    `„Hol van az az ember?” - kérdezték.
„Nem tudom” - felelte.`,
    // 13  ~ A farizeusok kihallgatják a vakon született embert ~
    `Ezután a koldust, aki nemrégen még vak volt, elvitték a farizeusokhoz.`,
    // 14
    `(Amikor Jézus sarat készített, és meggyógyította a vak szemét, éppen szombat volt.)`,
    // 15
    `A farizeusok is megkérdezték tőle, hogyan gyógyult meg.
Ő pedig így felelt nekik: „Sarat kent a szememre, megmosakodtam, és most látok.”`,
    // 16
    `Néhány farizeus azt mondta: „Az az ember nem Istentől való, mert nem tartja meg a szombatot.”
„De hogyan tehetne egy bűnös ilyen csodát?” - kérdezték mások. Ebből azután vita kerekedett közöttük.`,
    // 17
    `Ekkor újból a vakon születetthez fordultak: „Hát te mit mondasz róla most, hogy meggyógyította a szemedet?”
„Azt, hogy próféta” - felelte ő.`,
    // 18
    `A vallási vezetők ekkor kétségbe vonták, hogy ez az ember valóban vakon született, és csak később gyógyult meg a szeme. Ezért odahívták a szüleit, és`,
    // 19
    `megkérdezték tőlük: „Ez a fiatok, és valóban vakon született? Ha igen, akkor hogyan lehetséges, hogy most lát?”`,
    // 20
    `A szülők ezt felelték: „Igen, ő a mi fiunk, és valóban vakon született,`,
    // 21
    `de azt nem tudjuk, hogyan lehetséges, hogy most lát. Azt sem tudjuk, hogy ki gyógyította meg. Kérdezzétek őt, hiszen már felnőtt, majd ő megmondja!”`,
    // 22
    `A szülők ezt azért mondták, mert féltek a vallási vezetőktől. Azok ugyanis már megegyeztek abban, hogy ha valaki Messiásnak mondja Jézust, azt ki kell tiltani a zsinagógából. Ezért mondták a szülők:`,
    // 23
    `„Kérdezzétek őt, hiszen már felnőtt, majd ő megmondja!”`,
    // 24
    `Ekkor a vallási vezetők másodszor is magukhoz hívatták azt, aki meggyógyult, és azt mondták neki: „Adj dicsőséget Istennek, és mondd meg az igazat! Mi tudjuk, hogy az az ember bűnös.”`,
    // 25
    `Ő így felelt: „Azt nem tudom, hogy bűnös-e vagy sem, de azt tudom, hogy vak voltam, most pedig látok.”`,
    // 26
    `Ekkor újra megkérdezték tőle: „Mit tett veled? Hogyan gyógyította meg a szemedet?”`,
    // 27
    `„Már mondtam nektek, de nem hittetek nekem! Miért kérdezitek újra? Talán ti is a tanítványai akartok lenni?” - válaszolta.`,
    // 28
    `Ekkor azok nekitámadtak, és sértegetni kezdték: „Te vagy az ő tanítványa! Mi Mózes tanítványai vagyunk!`,
    // 29
    `Azt tudjuk, hogy Mózeshez szólt Isten, erről meg azt sem tudjuk, honnan jött.”`,
    // 30
    `Az meg így válaszolt: „Hát, ez igazán nagyon különös! Azt sem tudjátok, hogy honnan jött, mégis megnyitotta a szememet!`,
    // 31
    `Isten a bűnösöket nem hallgatja meg, igaz? De aki istenfélő, és teljesíti Isten akaratát, azt meghallgatja.`,
    // 32
    `Soha senki nem hallott még olyat, hogy egy vakon születettnek a szemét valaki meggyógyította volna!`,
    // 33
    `Ha az az ember nem Istentől jött volna, nem tudott volna segíteni rajtam!”`,
    // 34
    `A vallási vezetők azonban letorkolták: „Te akarsz tanítani minket, aki mindenestül bűnben születtél?” Ezután kiközösítették a zsinagógai közösségből.`,
    // 35  ~ Azért jöttem, hogy a vakok lássanak ~
    `Jézus megtudta, hogy a vallási vezetők kitiltották ezt az embert a zsinagógából. Ezután találkozott vele, és megkérdezte tőle: „Hiszel-e az Emberfiában?”`,
    // 36
    `Ő megkérdezte: „Ki az, Uram? Mondd meg, hogy higgyek benne!”`,
    // 37
    `„Már láttad őt. Én vagyok az, aki veled beszélek” - válaszolta Jézus.`,
    // 38
    `Erre a férfi ezt felelte: „Hiszek, Uram!” - leborult Jézus előtt, és imádta őt.`,
    // 39
    `Jézus ekkor azt mondta: „Azért jöttem a világra, hogy ítéletet tartsak: hogy akik vakok voltak, lássanak, és akik látnak, vakok legyenek.”`,
    // 40
    `Meghallotta ezt néhány farizeus, akik Jézus közelében voltak, és megkérdezték tőle: „Hogyan?! Talán mi is vakok vagyunk?”`,
    // 41
    `Jézus ezt felelte: „Ha vakok lennétek, nem volnátok bűnösök. De mivel azt mondjátok, hogy láttok, bűnösök maradtok.”`
  ],
  [
    // 10  ~ Példázat a juhnyájról és a pásztorról ~
    `„Igazán mondom nektek: aki nem a kapun megy be a juhakolba, hanem máshol hatol be, az tolvaj és rabló.`,
    // 2
    `A nyáj pásztora a kapun megy be,`,
    // 3
    `és előtte az őr kinyitja a kaput. A juhok hallgatnak a pásztoruk hangjára, ő pedig a nevükön szólítja a saját juhait, és kivezeti őket az akolból.`,
    // 4
    `Miután minden juhot kivezetett, az élükre áll, előttük megy, és a juhok követik, mert jól ismerik a hangját.`,
    // 5
    `Idegen után nem mennek, hanem elfutnak tőle, mert nem ismerik a hangját.”`,
    // 6
    `Ezt a példázatot mondta Jézus a júdeabelieknek, de azok nem értették meg, miről beszélt.`,
    // 7  ~ Jézus, a jó pásztor ~
    `Jézus így folytatta: „Igazán mondom nektek: én vagyok a kapu a juhok számára.`,
    // 8
    `Akik előttem jöttek, mind tolvajok és rablók voltak, de a juhok nem hallgattak rájuk.`,
    // 9
    `Igen, én vagyok a kapu, ezért aki rajtam keresztül megy be, az biztonságban lesz, szabadon járhat ki és be, és jó legelőt talál.`,
    // 10
    `A tolvaj azért jön, hogy lopjon, gyilkoljon és pusztítson. Ezzel szemben én azért jöttem, hogy életet adjak, mégpedig teljes és túláradóan bőséges életet!`,
    // 11
    `Én vagyok a Jó Pásztor, aki a saját életét adja a juhokért.`,
    // 12
    `A bérért dolgozó szolga nem gazdája a juhoknak, de nem is a pásztoruk. Ezért, amikor látja, hogy jön a farkas, magára hagyja a nyájat, és elmenekül. Azután a farkas elragadja a juhokat, és szétkergeti a nyájat.`,
    // 13
    `A béres azért fut el, mert csak a fizetésért dolgozik, és valójában nem törődik a juhokkal.`,
    // 14
    `Én vagyok a jó pásztor. Ismerem a juhaimat, és a juhaim ismernek engem,`,
    // 15
    `ahogyan engem ismer az Atya, én meg az Atyát. Az életemet adom a juhokért.`,
    // 16
    `Más juhaim is vannak, akik nem ebből az akolból valók. Őket is elő kell vezetnem majd, és hallgatni is fognak a szavamra. Így végül majd egyetlen nyáj lesz belőlük, az élükön egyetlen pásztorral. (#ad)`,
    // 17
    `Azért szeret engem az Atya, mert odaadom az életemet, hogy azután újra visszakapjam.`,
    // 18
    `Senki nem veheti el tőlem: önként adom oda, azután majd újra visszaveszem. Jogom van arra, hogy odaadjam, és arra is, hogy visszavegyem. Ezt a parancsot kaptam Atyámtól.”`,
    // 19
    `Jézus szavai miatt a júdeaiak újra vitatkozni kezdtek egymással.`,
    // 20
    `Sokan azt mondták: „Gonosz szellem lakik benne, és megbolondult. Minek hallgatjátok?”`,
    // 21
    `„De akiben gonosz szellem lakik, az nem így beszél! Ha valakit megszáll a gonosz szellem, az nem tudja meggyógyítani a vakok szemét!” - mondták mások.`,
    // 22  ~ A vallási vezetők Jézus ellen támadnak ~
    `Ezután következett a templomszentelés ünnepe (#ae) Jeruzsálemben.`,
    // 23
    `Tél volt, és Jézus a Templom területén, a Salamon csarnokában (#af) tartózkodott.`,
    // 24
    `Ekkor a vallási vezetők körülvették, és kérdőre vonták: „Meddig tartasz még minket bizonytalanságban? Mondd meg nekünk nyíltan, te vagy-e a Messiás, vagy nem!”`,
    // 25
    `Jézus így felelt: „Már megmondtam nektek, de nem hittétek el. Pedig a csodák, amelyeket Atyám nevében teszek, bizonyítják, hogy én vagyok az.`,
    // 26
    `Ti mégsem hisztek nekem, mert nem tartoztok az én nyájamhoz.`,
    // 27
    `Akik az én juhaim közül valók, azok hallgatnak rám, ismerem őket, és követnek engem.`,
    // 28
    `Én pedig örök életet adok nekik, és soha örökké el nem vesznek, mert senki sem ragadhatja ki őket a kezemből.`,
    // 29
    `Atyám adta nekem őket, ő pedig mindenkinél hatalmasabb, (#ag) ezért őket senki sem ragadhatja ki Atyám kezéből.`,
    // 30
    `Az Atya és én egyek vagyunk.”`,
    // 31
    `Ekkor a vallási vezetők újra köveket kaptak fel, hogy Jézust megkövezzék.`,
    // 32
    `Ő ezt kérdezte tőlük: „Sok jó dolgot tettem már a szemetek láttára Atyám akarata szerint. Ezek közül melyikért akartok most megkövezni?”`,
    // 33
    `Azok így feleltek: „Nem valamelyik jó tettedért, hanem azért akarunk megkövezni, mert ember létedre azt állítod, hogy Isten vagy! Ezzel Istent gyalázod.”`,
    // 34
    `Jézus erre így felelt: „Nincs-e megírva a Törvényetekben: »Én mondtam, hogy ti istenek vagytok«? (#ah)`,
    // 35
    `Isten maga nevezte isteneknek azokat az embereket, akikhez szólt! Márpedig az Írás érvényes és igaz! Senki sem változtathat rajta.`,
    // 36
    `Ha pedig ez így van, akkor miért vádoltok engem Isten gyalázásával, amikor azt állítom, hogy Isten Fia vagyok? Engem az Atya választott ki, hogy elküldjön erre a világra!`,
    // 37
    `Ha nem ugyanazt teszem, amit Atyám, akkor ne higgyetek nekem!`,
    // 38
    `De ha ugyanazt teszem, amit ő, akkor - még ha nekem nem is hisztek - legalább a tetteimnek higgyetek! Így felismerhetitek, hogy az Atya bennem van, én pedig az Atyában!”`,
    // 39
    `Ekkor újra megpróbálták letartóztatni Jézust, de ő eltűnt előlük.`,
    // 40
    `Ezután a Jordán folyón túlra ment, arra a helyre, ahol Bemerítő János először merítette be az embereket, és ott is maradt egy ideig.`,
    // 41
    `Sokan jöttek hozzá, és ezt mondták: „Bemerítő János nem tett csodákat, de amit erről az emberről mondott, az mind igaz.”`,
    // 42
    `És ott sokan hittek Jézusban.`
  ],
  [
    // 11  ~ Lázár halála ~
    `Betániában lakott egy Lázár nevű férfi, két testvérével, Mártával és Máriával. Lázár egyszer megbetegedett.`,
    // 2
    `(Mária volt az, aki illatos olajjal kente meg és a hajával törölte meg az Úr lábát.)`,
    // 3
    `Lázár nővérei megüzenték Jézusnak: „Uram, a barátod, akit szeretsz, beteg.”`,
    // 4
    `Amikor Jézusnak átadták az üzenetet, ezt mondta: „Ez a betegség nem halálos, hanem Isten dicsőségét szolgálja. Ezáltal az Isten Fia fog dicsőséget kapni.”`,
    // 5
    `Jézus valóban szerette Mártát, Máriát, és Lázárt.`,
    // 6
    `Amikor azonban Jézusnak megmondták, hogy Lázár beteg, még két napig ugyanazon a helyen maradt.`,
    // 7
    `Azután ezt mondta a tanítványainak: „Menjünk ismét Júdeába!”`,
    // 8
    `Azok ezt válaszolták: „Mester, hiszen csak nemrég történt, hogy meg akartak kövezni a vallási vezetők, és újra oda akarsz menni?”`,
    // 9
    `Jézus így válaszolt: „Ugye, tizenkét óráig tart a nappal? Aki nappal jár, az nem botlik meg, mert világos van.`,
    // 10
    `De aki éjjel jár, az megbotlik, mert nincs, ami világítson neki.”`,
    // 11
    `Azután ezt mondta: „A barátunk, Lázár elaludt, de én odamegyek és felébresztem.”`,
    // 12
    `A tanítványok ezt válaszolták: „Uram, ha alszik, akkor biztosan meggyógyul majd.”`,
    // 13
    `Jézus Lázár haláláról beszélt, de a tanítványok úgy értették, hogy Lázár csak alszik.`,
    // 14
    `Jézus ezért nyíltan megmondta nekik: „Lázár meghalt,`,
    // 15
    `de örülök, hogy nem voltam ott, mert számotokra így hasznosabb - hogy higgyetek bennem. Most azonban menjünk el hozzá!”`,
    // 16
    `Ekkor Tamás, akit Ikernek hívtak, ezt mondta a többi tanítványnak: „Menjünk, és haljunk meg Jézussal együtt mi is!”`,
    // 17  ~ Jézus Betániában ~
    `Amikor Jézus megérkezett Betániába, megtudta, hogy Lázárt már négy nappal korábban egy sziklasírba temették.`,
    // 18
    `Mivel Betánia csak három kilométerre volt Jeruzsálemtől,`,
    // 19
    `a júdeabeliek közül sokan elmentek Mártához és Máriához, hogy vigasztalják őket a testvérük halála miatt.`,
    // 20
    `Amikor Márta meghallotta, hogy Jézus közeledik, eléje sietett, Mária pedig otthon maradt.`,
    // 21
    `Amikor Márta Jézushoz ért, ezt mondta: „Uram, ha itt lettél volna, nem halt volna meg a testvérem!`,
    // 22
    `De most is biztos vagyok benne, hogy bármit kérsz Istentől, megadja neked.”`,
    // 23
    `Jézus ezt felelte: „Fel fog támadni a testvéred.”`,
    // 24
    `„Igen, tudom, hogy a feltámadás idején, az utolsó napon ő is fel fog támadni” - válaszolta Márta.`,
    // 25
    `Jézus akkor ezt mondta: „Én vagyok a Feltámadás és az Élet. Aki hisz bennem, akkor is élni fog, ha már meghalt.`,
    // 26
    `Aki pedig él és hisz bennem, az soha nem hal meg. Hiszed-e ezt?”`,
    // 27
    `Márta így felelt: „Igen, Uram! Hiszem, hogy te vagy a Messiás, az Isten Fia, akinek el kellett jönnie erre a világra.”`,
    // 28
    `Miután ezt mondta, Márta hazament. Félrehívta a nővérét, Máriát, és szólt neki: „Itt van a Mester, és téged hív!”`,
    // 29
    `Erre Mária felugrott, és Jézushoz sietett,`,
    // 30
    `aki még mindig ugyanott volt, ahol Mártával találkozott, a falu szélén.`,
    // 31
    `A gyászolók, akik Máriához jöttek, hogy vigasztalják, látták, hogy Mária gyorsan felkel, és elindul. Azt hitték, hogy Lázár sírjához megy, hogy ott sírjon, ezért ők is utána mentek.`,
    // 32
    `Amikor Mária Jézushoz ért, a lábához borult, és ezt mondta: „Uram, ha itt lettél volna, nem halt volna meg a testvérem!”`,
    // 33
    `Mária és a kísérői is sírtak. Amikor Jézus ezt látta, lelke nyugtalan lett, és mélyen megindulva`,
    // 34
    `ezt kérdezte: „Hová temettétek Lázárt?”
„Uram, gyere, és nézd meg!” - felelték.`,
    // 35
    `Ekkor Jézus is sírva fakadt.`,
    // 36
    `Az emberek azt mondták: „Nézzétek, mennyire szerette Lázárt!”`,
    // 37
    `Mások pedig ezt mondták: „Ha meg tudta gyógyítani a vakot, miért nem mentette meg Lázárt a haláltól?”`,
    // 38  ~ Jézus feltámasztja Lázárt ~
    `Jézus még mindig nagyon felindult volt, amikor odament a sírhoz, amely egy sziklába vájt üreg volt, a bejáratát pedig egy nagy kő zárta el.`,
    // 39
    `„Hengerítsétek el a követ!” - mondta Jézus.
Márta, a halott Lázár nővére felkiáltott: „De Uram, már biztosan rossz szaga van, hiszen négy napja, hogy meghalt!”`,
    // 40
    `Jézus így válaszolt: „Nem megmondtam neked, hogy ha hiszel, meglátod Isten dicsőségét?!”`,
    // 41
    `Ekkor elhengerítették a követ, Jézus, pedig felnézett az égre, és ezt mondta: „Atyám, köszönöm, hogy meghallgattál!`,
    // 42
    `Tudom, hogy te mindig meghallgatsz, de azok kedvéért mondom ezt, akik itt állnak. Azt akarom, hogy elhiggyék, hogy te küldtél engem.”`,
    // 43
    `Ezután hangosan felkiáltott: „Lázár, jöjj ki!”`,
    // 44
    `Ekkor Lázár, aki eddig halott volt, kijött a sziklába vágott sírkamrából. Keze és lába vászonlepedőkkel volt körültekerve, arcát pedig kendő takarta.
„Szabadítsátok ki a vásznakból, hadd menjen!” - mondta Jézus.`,
    // 45  ~ A vallási vezetők Jézus megöletését tervezik (#A) ~
    `Ennek hatására sokan hittek benne azok közül a júdeabeliek közül, akik Máriát a sírhoz kísérték, és látták, amit Jézus tett.`,
    // 46
    `Néhányan közülük elmentek a farizeusokhoz, és nekik is elmondták, hogy Jézus feltámasztotta Lázárt.`,
    // 47
    `Emiatt a főpapok és a farizeusok összehívták a Főtanácsot. Amikor összegyűltek, ezt kérdezték egymástól: „Most mitévők legyünk? Ez az ember tényleg sok csodát tesz!`,
    // 48
    `Ha engedjük, hogy ezt folytassa, a végén majd mindenki hinni fog benne! Azután majd jönnek a rómaiak, elveszik tőlünk a Templom és a nép fölötti irányítást!”`,
    // 49
    `Akkor Kajafás, a Főtanács egyik tagja, aki abban az évben a főpap volt, ezt mondta: „Nem tudtok ti semmit!`,
    // 50
    `Nem értitek, hogy jobb, ha csak egy ember hal meg a nép helyett, mintha az egész nemzet elpusztul?”`,
    // 51
    `Ezt azonban nem magától mondta, hanem prófétált, mivel abban az évben ő volt a főpap. Ez a prófécia azt jelentette, hogy Jézusnak meg kell halnia a népért.`,
    // 52
    `De nem csak a népért, hanem azért is, hogy Isten szétszéledt gyermekeit összegyűjtse, és eggyé tegye.`,
    // 53
    `Ettől a naptól kezdve a vallási vezetők már arról tanácskoztak, hogyan végezzenek Jézussal.`,
    // 54
    `Emiatt Jézus többé nem mutatkozott nyilvánosan a júdeabeliek között. Tanítványaival együtt elvonult egy pusztához közeli városba, Efraimba.`,
    // 55
    `Közeledett a zsidók nagy ünnepe, a páska. Ezért vidékről sokan felmentek Jeruzsálembe, hogy még az ünnep előtt elvégezzék a megtisztulási szertartásokat.`,
    // 56
    `A Templom területén nagy tömeg gyűlt össze. Az emberek keresték Jézust, és egymástól kérdezgették: „Mit gondoltok, talán nem is jön fel az ünnepre?”`,
    // 57
    `A főpapok és a farizeusok pedig kiadták a parancsot, hogy ha valaki tudja, hol van Jézus, azonnal jelentse, mert le akarták tartóztatni őt.`
  ],
  [
    // 12  ~ Mária nárdusolaja (#B) ~
    `Hat nappal a Páska ünnep előtt Jézus Betániában meglátogatta Lázárt, akit korábban feltámasztott a halálból.`,
    // 2
    `Vacsorát készítettek neki, amelyet Márta szolgált fel, és Lázár is ott volt az asztalnál Jézussal együtt.`,
    // 3
    `Vacsora közben Mária előhozott egy igen drága illatszert, amely valódi nárdusolajból készült. Az egészet (#a) ráöntötte Jézus lábára, s a házat betöltötte a nárdusolaj illata. Azután Mária a saját hajával törölte meg Jézus lábait.`,
    // 4
    `Ezt látva, Iskáriótes Júdás - az egyik tanítvány, aki arra készült, hogy Jézust elárulja - megjegyezte:`,
    // 5
    `„Ezt a drága illatszert inkább el kellett volna adni háromszáz ezüstpénzért, a pénzt meg a szegényeknek adhattuk volna!”`,
    // 6
    `De ezt nem azért mondta, mintha a szegényekre lett volna gondja, hanem mert tolvaj volt. Ugyanis Júdásra volt bízva a tanítványok közös pénze, és ő gyakran lopkodott belőle.`,
    // 7
    `Jézus így válaszolt neki: „Hagyd békén Máriát! Jót tette, hogy ezt az illatszert a mai napig megőrizte, s most arra használta fel, hogy előkészítsen a temetésemre!`,
    // 8
    `Szegények mindig lesznek a közeletekben, (#b) de én nem leszek mindig veletek.”`,
    // 9  ~ A főpapok Lázárt is meg akarják ölni ~
    `Az ünnepre összegyűlt tömeg között elterjedt a híre, hogy Jézus Betániában van, ezért sokan odamentek. De nemcsak őt szerették volna látni, hanem Lázárt is, akit Jézus feltámasztott a halálból.`,
    // 10
    `Emiatt azután a főpapok elhatározták, hogy Lázárt is meg fogják ölni.`,
    // 11
    `Ugyanis a júdeaiak közül sokan Lázár miatt mentek Betániába és hittek Jézusban.`,
    // 12  ~ Jézus királyként vonul be Jeruzsálembe (#C) ~
    `Másnap, amikor az ünnepre érkező tömeg meghallotta, hogy Jézus Jeruzsálembe jön,`,
    // 13
    `eléje mentek, pálmaágakat lengettek, és ezt kiáltották:
„Hozsánna! (#c)
     Áldott, aki az Örökkévaló nevében jön! (#d)
Áldott legyen Izráel Királya!”`,
    // 14
    `Jézus talált egy szamarat, felült rá, és azon vonult be a városba, éppen úgy, ahogy az Írás mondja:`,
    // 15
    `„Ne félj, Sion leánya,
     itt jön a királyod, szamárcsikón ülve!” (#e)`,
    // 16
    `Tanítványai akkor még nem értették ezt. De később, amikor Jézus megdicsőült, eszükbe jutott, hogy pontosan az történt vele, amit az Írások mondtak róla.`,
    // 17
    `Amikor Jézus kihívta Lázárt a sírból és feltámasztotta a halottak közül, igen sokan szemtanúi voltak ennek. Ezek azután másoknak is elmondták, hogy mi történt.`,
    // 18
    `Ezért nagy tömeg gyűlt össze, hogy Jézust lássák, mert hallották, hogy ő tette ezt a csodát.`,
    // 19
    `A farizeusok pedig ezt mondták egymásnak: „Látjátok! Hiába minden erőfeszítésünk, az egész nép mégis őt követi!”`,
    // 20  ~ A búzaszem példázata ~
    `A páska ünnepére igen sokan jöttek Jeruzsálembe imádkozni, és voltak közöttük görögök is.`,
    // 21
    `Ezek odamentek Fülöphöz, aki a galileai Bétsaidából származott, és megkérték: „Uram, szeretnénk látni Jézust!” Fülöp szólt Andrásnak,`,
    // 22
    `azután mindketten odamentek Jézushoz, és szóltak neki.`,
    // 23
    `Jézus így válaszolt: „Eljött az idő, hogy az Emberfia megdicsőüljön.`,
    // 24
    `Igazán mondom nektek: a búzamagot el kell vetni a földbe, hogy ott elhaljon, azután majd felnő, és gazdag termést hoz. Ha viszont nem hal el, akkor csak egymaga marad.`,
    // 25
    `Aki ragaszkodik (#f) a lelkéhez, vagyis az életéhez, az el fogja veszíteni. Aki pedig kész feladni a lelkét, vagyis az életét ezen a világon, az megtartja azt az örök életre.`,
    // 26
    `Aki nekem szolgál, engem kövessen! Akkor, ahol én vagyok, ott lesz a szolgám is velem. Aki pedig engem szolgál, azt megbecsüli az Atya.”`,
    // 27  ~ Jézus előre jelzi a halálát ~
    `„Most nyugtalan a lelkem, mit is mondhatnék? Kérjem talán azt: »Atyám, ments meg engem ettől az időtől«? Nem! Hiszen éppen ezért jöttem a földre!`,
    // 28
    `Inkább azt mondom: »Atyám, szerezz dicsőséget nevednek!«”
Ekkor hang hallatszott a Mennyből: „Dicsőséget szereztem nevemnek eddig is, és most másképpen is megdicsőítem nevemet.”`,
    // 29
    `Ezt a sokaság is hallotta, de úgy gondolták, hogy az ég dörgött.
Mások azt mondták, hogy biztosan egy angyal szólt Jézushoz.`,
    // 30
    `Ő maga azonban ezt mondta: „Ez a hang nem értem, hanem értetek szólt.`,
    // 31
    `Elérkezett az ideje, hogy kihirdessék az elmarasztaló ítéletet e világ fölött! Elérkezett az ideje, hogy ennek a világnak a fejedelmét (#g) elűzzék.`,
    // 32
    `Engem pedig föl fognak emelni a földről, (#h) s akkor majd minden embert magamhoz vonzok.”`,
    // 33
    `Így jelezte Jézus, hogy milyen módon fog meghalni.`,
    // 34
    `Az emberek erre megkérdezték: „A Törvényből úgy tudjuk, hogy a Messiás örökké él. Miért mondod akkor, hogy az Emberfiát fel fogják emelni? Kicsoda ez az Emberfia?”`,
    // 35
    `Jézus így felelt: „Már csak egy rövid ideig marad közöttetek a világosság. (#i) Addig járjatok tehát a világosságban, amíg veletek van, hogy a sötétség hatalmába ne kerítsen titeket, mert aki sötétben jár, nem tudja hová megy.`,
    // 36
    `Ameddig veletek van a világosság, higgyetek benne, hogy a világossághoz tartozhassatok!” Ezt mondta Jézus, majd elment onnan, és elrejtőzött előlük.`,
    // 37  ~ Uram, ki hitt a szavunknak? ~
    `Bár Jézus sok csodát tett az emberek szeme láttára, azok mégsem hittek benne.`,
    // 38
    `Így teljesedett be, amit Ézsaiás próféta mondott:
„Uram, ki hitt a szavunknak,
     és ki látta meg az Örökkévaló hatalmát?” (#j)`,
    // 39
    `Ézsaiás próféta azt is megmondta, miért nem tudtak hinni:`,
    // 40
    `„Az Örökkévaló vakította meg a szemüket,
     keményítette meg a szívüket,
hogy szemükkel ne lássanak,
     hogy szívükkel ne értsenek,
és ne forduljanak hozzá,
     hogy meggyógyítsa őket.” (#k)`,
    // 41
    `Ézsaiás azért mondta ezt, mert látta Jézus dicsőségét, és őróla szólt.`,
    // 42
    `Ennek ellenére, sokan hittek Jézusban még a vezetők közül is, de a farizeusok miatt ezt nem vallották meg nyiltan, nehogy kizárják őket a zsinagógai közösségből.`,
    // 43
    `Ugyanis fontosabb volt a számukra az emberek elismerése, mint Istené.`,
    // 44  ~ Jézus szavai fogják az embereket megítélni ~
    `Jézus hangosan kiáltva hirdette: „Aki bennem hisz, abban hisz, aki elküldött engem.`,
    // 45
    `Aki meglátja, hogy ki vagyok, azt látja, aki elküldött engem.`,
    // 46
    `Én vagyok a világosság, és azért jöttem erre a világra, hogy aki hisz bennem, ne maradjon a sötétségben.`,
    // 47
    `Azért jöttem, hogy üdvösséget hozzak az embereknek, nem azért, hogy elítéljem őket. Ezért nem én ítélem el azokat, akik hallgatják a szavaimat, de nem engedelmeskednek nekem.`,
    // 48
    `Aki visszautasít engem, és nem fogadja el, amit mondok, azt bizony el fogják ítélni az utolsó napon! De nem én leszek a bírája, hanem a szavaim, amelyeket mondtam, azok fogják őt elítélni.`,
    // 49
    `Mert amit mondtam, nem magamtól mondtam. Az Atya, aki elküldött engem, parancsolta meg, hogy mit mondjak, és mit tanítsak.`,
    // 50
    `És tudom, hogy amit az Atya parancsol, abból örök élet származik. Amit tehát én mondok, azt úgy mondom, ahogyan ő mondta nekem.”`
  ],
  [
    // 13  ~ Jézus megmossa a tanítványai lábát ~
    `Mielőtt a páska ünnepe megkezdődött volna, Jézus már tudta, hogy itt az ideje, hogy elhagyja ezt a világot, és visszatérjen az Atyához. Szerette azokat, akik ezen a világon az övéi voltak - mindvégig szerette őket.`,
    // 2
    `Jézus és a tanítványai együtt voltak a Páska-vacsoránál. A Sátán már korábban rávette Iskáriótes Júdást, Simon fiát, hogy Jézust igyekezzen ellenségei kezébe adni.`,
    // 3
    `Jézus tisztában volt vele, hogy az Atya minden hatalmat neki adott, és hogy ő Istentől jött, és hamarosan vissza is tér Istenhez.`,
    // 4
    `Felkelt hát a vacsorától, levette felső ruháját, és egy törlőkendőt kötött a dereka köré.`,
    // 5
    `Azután vizet öntött egy edénybe, és sorban megmosta, majd a kendővel megtörölte a tanítványai lábát. (#l)`,
    // 6
    `Amikor Simon Péterhez ért, ő azt kérdezte: „Uram, hogy lehet az, hogy te mosod meg az én lábamat?”`,
    // 7
    `Jézus így válaszolt neki: „Most még nem érted, amit teszek, de később majd megérted.”`,
    // 8
    `Péter azt válaszolta: „Azt már nem! Az én lábamat ugyan meg nem mosod soha!”
„Ha nem moslak meg, semmi közöd sincs hozzám” - felelte Jézus.`,
    // 9
    `Péter erre azt kérte: „Uram, akkor ne csak a lábamat mosd meg, hanem a kezemet és a fejemet is!”`,
    // 10
    `Erre Jézus így válaszolt: „Aki megfürdött, annak csak a lábát kell megmosni, különben az egész teste tiszta. Ti már tiszták vagytok, de nem mindannyian.”`,
    // 11
    `Jézus tudta, ki árulja el, ezért mondta: „nem vagytok tiszták mindannyian”.`,
    // 12
    `Miután megmosta a tanítványok lábát, Jézus újra felvette a felsőruháját, visszaült az asztalhoz, és megkérdezte: „Értitek-e, mit tettem veletek?`,
    // 13
    `Ti Mesternek és Úrnak hívtok engem, és igazatok is van, mert az vagyok.`,
    // 14
    `Ha pedig én, aki Úr és Mester vagyok, megmostam a lábatokat, akkor nektek is meg kell mosnotok egymás lábát.`,
    // 15
    `Példát adtam nektek, hogy ti is ugyanúgy bánjatok egymással, ahogy én veletek.`,
    // 16
    `Igazán mondom nektek: a szolga nem nagyobb az uránál, és a küldött sem nagyobb annál, aki elküldte.`,
    // 17
    `Most már tudjátok ezeket, de akkor lesztek boldogok és áldottak, ha valóban meg is teszitek.`,
    // 18
    `Nem mindnyájatokról beszélek. Ismerem azokat, akiket kiválasztottam, de amit az Írás mond, annak be kell teljesednie: »Az fordult ellenem, aki a kenyeremet ette.« (#m)`,
    // 19
    `Azért mondom ezt most, mielőtt megtörténne, hogy amikor majd megtörténik, higgyetek bennem, hogy ÉN VAGYOK. (#n)`,
    // 20
    `Igazán mondom nektek: aki befogadja azt, akit én küldök, az engem fogad be, aki pedig engem befogad, azt fogadja be, aki engem küldött.”`,
    // 21  ~ Egyikőtök elárul engem! (#D) ~
    `Miután Jézus ezt mondta, nagyon nyugtalan (#o) lett, és így szólt: „Igazán mondom nektek: egyikőtök el fog árulni engem!”`,
    // 22
    `A tanítványok zavarban voltak, és tanácstalanul néztek egymásra, mert nem tudták, melyikükről beszél.`,
    // 23
    `Egyikük, akit Jézus különösen szeretett, éppen Jézus mellett foglalt helyet.`,
    // 24
    `Simon Péter intett neki, hogy kérdezze meg Jézustól, kiről beszélt az előbb.`,
    // 25
    `Ekkor az a tanítvány közelebb hajolt Jézushoz, és megkérdezte tőle: „Uram, melyikünk az?”`,
    // 26
    `Jézus így felelt: „Az, akinek ezt a bemártott falat kenyeret adom.” Ezzel vett egy darab kenyeret, a tálba mártotta, és odanyújtotta Iskáriótes Júdásnak, Simon fiának.`,
    // 27
    `Amikor Júdás megette a kenyeret, belé költözött a Sátán. Ekkor Jézus ezt mondta Júdásnak: „Tedd meg hamar, amit tenni készülsz!”`,
    // 28
    `De senki sem értette, hogy ez mit jelent.`,
    // 29
    `Néhányan azt hitték, hogy Jézus azt mondta Júdásnak, vegye meg, amire szükségük lesz az ünnepen, vagy adjon valamit a szegényeknek.`,
    // 30
    `Miután Júdás megette azt a falatot, azonnal elment. Ekkor már éjszaka volt.`,
    // 31  ~ Új parancsot adok: szeressétek egymást! ~
    `Miután Júdás elment, Jézus megszólalt: „Most dicsőült meg az Emberfia, és általa Isten is megdicsőült.`,
    // 32
    `Ha Isten dicsőséget kapott az Emberfia által, Isten is hamarosan megdicsőíti az Emberfiát - és ez hamar meg fog történni.`,
    // 33
    `Gyermekeim, már nem sokáig maradok veletek. Kerestek majd engem, de ahogyan a júdeaiaknak már korábban mondtam, most nektek is mondom, hogy ahová én megyek, oda nem jöhettek velem.`,
    // 34
    `Új parancsot adok nektek: szeressétek egymást! Ahogyan én szerettelek titeket, nektek is úgy kell szeretnetek egymást!`,
    // 35
    `Arról ismeri majd fel mindenki, hogy a tanítványaim vagytok, hogy szeretitek egymást.”`,
    // 36  ~ Péter fogadkozása (#E) ~
    `Ekkor Simon Péter megkérdezte tőle: „Uram, hová mész?”
Jézus így válaszolt: „Most még nem jöhetsz velem oda, ahová megyek, de később majd követsz engem.”`,
    // 37
    `Péter megkérdezte: „Uram, miért nem mehetek veled most? Az életemet is odaadnám érted!”`,
    // 38
    `Jézus így felelt: „Az életedet adod értem? Igazán mondom neked: ma éjjel, mielőtt a kakas kukorékol, háromszor is le fogod tagadni, hogy ismersz engem!”`
  ],
  [
    // 14  ~ Én vagyok az út, az igazság és az élet ~
    `„Ne nyugtalankodjatok: higgyetek Istenben, és higgyetek bennem!`,
    // 2
    `Atyám házában sokak számára van lakóhely. Ha nem így volna, megmondtam volna nektek. Most elmegyek, hogy helyet készítsek a számotokra.`,
    // 3
    `Miután elkészítettem, visszajövök értetek, és magammal viszlek titeket, hogy ahol én vagyok, ott legyetek ti is.`,
    // 4
    `Ismeritek az utat, amely oda vezet, ahová megyek.”`,
    // 5
    `Ekkor Tamás megkérdezte: „Uram, azt sem tudjuk, hová mész, hogyan tudhatnánk akkor az utat?”`,
    // 6
    `Jézus így válaszolt: „Én vagyok az út, az igazság és az élet! Az Atyához csakis rajtam keresztül lehet eljutni.`,
    // 7
    `Ha valóban ismernétek engem, akkor az Atyát is ismernétek. De mostantól fogva ismeritek és látjátok őt.”`,
    // 8
    `Ekkor Fülöp szólalt meg: „Uram mutasd meg nekünk az Atyát, hadd lássuk őt! Azzal megelégszünk.”`,
    // 9
    `Jézus így válaszolt: „Fülöp, olyan régóta veletek vagyok, és még mindig nem ismertél meg igazán! Aki engem látott, az Atyát látta. Miért mondod hát: »Mutasd meg nekünk az Atyát«?`,
    // 10
    `Talán nem hiszed, hogy én az Atyában élek, az Atya pedig bennem él? Amit mondok nektek, nem magamtól mondom: az Atya, aki bennem él, ő végzi a maga munkáját rajtam keresztül.`,
    // 11
    `Higgyétek el, hogy én az Atyában vagyok, és az Atya bennem van! Ha másért nem, higgyetek azoknak a tetteknek, amelyeket Atyám nevében vittem véghez!`,
    // 12
    `Igazán mondom nektek: aki hisz bennem, az is megteszi majd mindazt, amit én tettem. Sőt, még nagyobb dolgokat fog véghezvinni! Hogyan lehetséges ez? Úgy, hogy én majd az Atyához megyek,`,
    // 13
    `és megteszem, amit a nevemben kértek, hogy az Atya dicsőséget kapjon a Fiú által.`,
    // 14
    `Igen, bármit kértek majd az én nevemben, meg fogom tenni.”`,
    // 15  ~ A Szentlélek eljövetelének ígérete ~
    `„Ha szerettek engem, engedelmeskedni fogtok a parancsaimnak.`,
    // 16
    `Én pedig kérni fogom az Atyát, és ő egy másik Segítőt (#p) küld nektek, aki örökre veletek marad.`,
    // 17
    `Ő az Igazság Lelke, (#q) akit a hitetlenek világa nem tud befogadni, mert ők nem látják, és nem ismerik fel. Ti azonban megismeritek és felismeritek őt, mert veletek együtt fog lakni, sőt bennetek él majd.`,
    // 18
    `Nem hagylak titeket árván, hanem visszajövök hozzátok.`,
    // 19
    `Kis idő múlva a hitetlenek már nem látnak többé engem, de ti láttok. Mivel én élek, ti is élni fogtok.`,
    // 20
    `Azon a napon megtudjátok, hogy én az Atyában élek, ti bennem éltek, én pedig bennetek.`,
    // 21
    `Aki ismeri parancsaimat és engedelmeskedik nekem, az szeret engem igazán! Aki pedig engem szeret, azt Atyám is szereti, és én is szeretem - ezért megmutatom és kijelentem neki magamat, hogy igazán megismerjen engem.”`,
    // 22
    `Ekkor megszólalt Júdás - nem az Iskáriótes, hanem a másik Júdás nevű apostol - „De Uram, miért csak nekünk mutatod meg magadat, és miért nem az egész világnak?”`,
    // 23
    `Jézus így válaszolt: „Aki igazán szeret engem, az megfogadja szavaimat, és engedelmeskedik nekem, ezért Atyám is szeretni fogja őt. Atyám és én eljövünk hozzá, és vele együtt fogunk lakni.`,
    // 24
    `Aki nem szeret engem igazán, az nem engedelmeskedik a tanításaimnak. Bár ez a tanítás, amelyet hallotok, nem az enyém, hanem az Atyától származik, aki elküldött engem.`,
    // 25
    `Ezeket a dolgokat én magam mondtam el nektek, amíg veletek voltam.`,
    // 26
    `Később azonban majd az a Segítő - a Szentlélek - fog megtanítani titeket mindenre, akit az Atya küld hozzátok, hogy engem képviseljen. Ő majd emlékeztet titeket mindenre, amit nektek mondtam.`,
    // 27
    `Én ugyan elmegyek, de a békességem veletek marad. Igen, a saját békességemet adom nektek, de másképpen, mint ahogy a világ adja. Ne nyugtalankodjatok, és ne féljetek!`,
    // 28
    `Hallottátok, hogy megmondtam: most elmegyek, de ismét visszajövök hozzátok. Ha igazán szerettek engem, akkor most örüljetek, hogy az Atyához megyek, mert ő nagyobb nálam!`,
    // 29
    `Azért mondom ezt most, még mielőtt megtörténne, hogy amikor majd megtörténik, higgyetek bennem.`,
    // 30
    `Már nem sokáig beszélek veletek, mert közeledik ennek a világnak a fejedelme. (#r) Fölöttem ugyan nincs hatalma,`,
    // 31
    `de ezeknek a dolgoknak mégis meg kell történniük, hogy az egész világ megtudja: én szeretem az Atyát! Ezért mindazt megteszem, amit ő parancsolt.
Most pedig keljetek fel, menjünk innen!”`
  ],
  [
    // 15  ~ Jézus a szőlőhöz hasonlítja magát ~
    `„Én olyan vagyok, mint a szőlő. (#s) Atyám pedig olyan, mint a szőlősgazda:`,
    // 2
    `minden vesszőt levág rólam, amely nem terem gyümölcsöt, termő vesszőimet viszont megmetszi és megtisztítja, hogy még bőségesebb és jobb termést hozzanak.`,
    // 3
    `Benneteket már megmetszett és megtisztított a tanításaim által, amelyeket tőlem hallottatok.`,
    // 4
    `Maradjatok velem és lakjatok bennem, ahogyan a szőlővessző is a szőlő tövén marad - akkor én is bennetek maradok! A szőlővessző sem teremhet gyümölcsöt önmagában, csak ha a szőlő tövén marad. Ugyanígy ti is csak akkor teremhettek gyümölcsöt, ha bennem maradtok.`,
    // 5
    `Igen, én vagyok a szőlő, és ti vagytok a vesszőim! Aki bennem lakik, és én őbenne, az sok gyümölcsöt terem. Nélkülem azonban semmit sem tehettek.`,
    // 6
    `Ha valaki nem marad bennem, azt félredobják, mint a lemetszett vesszőt, és megszárad. Ezután a száraz vesszőket összegyűjtik, tűzre dobják, és megégnek.`,
    // 7
    `Ha viszont bennem éltek, és tanításaim bennetek élnek, akármit kértek, megkapjátok.`,
    // 8
    `Amikor sok gyümölcsöt teremtek, Atyámnak szereztek vele dicsőséget - s ebből látszik majd, hogy a tanítványaim vagytok.`,
    // 9
    `Ahogyan az Atya szeret engem, ugyanazzal az isteni szeretettel szeretlek én is titeket. Maradjatok meg és éljetek ebben a szeretetben!`,
    // 10
    `Én mindig engedelmeskedem Atyám parancsainak, ezért állandóan a szeretetében élek. Ugyanígy, ha engedelmeskedtek parancsaimnak, ti is állandóan a szeretetemben fogtok élni.`,
    // 11
    `Mindezt azért mondom nektek, hogy ugyanaz az öröm töltsön be titeket is, mint engem, és örömötöknek ne legyen semmi híja.`,
    // 12
    `Ezt parancsolom nektek: ti is úgy szeressétek egymást, azzal az isteni szeretettel, ahogyan én titeket!`,
    // 13
    `Nincs annál nagyobb szeretet, mint amikor valaki az életét adja a barátaiért.`,
    // 14
    `Ti pedig a barátaim vagytok, ha folyamatosan megteszitek, amit parancsolok nektek.`,
    // 15
    `Ezentúl már nem szolgák vagytok, mert a szolga nem tudja, hogy az ura mit és miért tesz. Mostantól fogva a barátaim vagytok, mert mindent elmondtam és megmutattam nektek, amit az Atyától hallottam és tanultam!`,
    // 16
    `Nem ti választottatok engem, hanem én választottalak titeket! Én bíztalak meg benneteket, hogy menjetek, és teremjetek gyümölcsöt! Azt akarom, hogy maradandó gyümölcsöket teremjetek, és hogy az Atya adja meg nektek, amit csak kértek tőle a nevemben.`,
    // 17
    `Tehát ezt parancsolom nektek: isteni szeretettel szeressétek egymást!”`,
    // 18  ~ Jézus figyelmezteti tanítványait az üldöztetésre ~
    `„Ha a hitetlenek gyűlölnek benneteket, jusson eszetekbe, hogy engem előbb gyűlöltek, mint titeket!`,
    // 19
    `Ha közéjük tartoznátok, akkor ez a világ kedvelne titeket, mint a saját embereit. De ti nem tartoztok ehhez a világhoz, hiszen én kiválasztottalak titeket - ezért gyűlölnek benneteket.`,
    // 20
    `Emlékezzetek rá, hogy megmondtam nektek: a szolga nem nagyobb, mint az ura. Ezért, ha engem üldöztek, benneteket is üldözni fognak. Másfelől, ha egyesek elfogadták és követték a tanításomat, akkor a tiéteket is követni fogják.`,
    // 21
    `Mindezeket miattam teszik veletek, mert nem ismerik azt, aki engem küldött.`,
    // 22
    `Ha nem jöttem volna és nem beszéltem volna velük, most nem lennének bűnösök, így azonban nincs mentség a bűneikre.`,
    // 23
    `Aki engem gyűlöl, Atyámat is gyűlöli.`,
    // 24
    `Ha nem tettem volna közöttük olyan csodákat, amilyeneket még senki sem tett, most nem lennének bűnösök. De látták a csodákat, mégis gyűlölnek engem is, és Atyámat is.`,
    // 25
    `Mindez azért történt így, hogy beteljesedjen, ami a Törvényükben meg van írva: »Ok nélkül gyűlöltek engem.« (#t)`,
    // 26
    `El fog jönni a Segítő, az Igazság Lelke, (#u) akit az Atyától küldök hozzátok, és ő majd tanúskodik mellettem.`,
    // 27
    `De ti is tanúskodni fogtok rólam, mert kezdettől velem voltatok.`
  ],
  [
    // 16
    `Mindezt azért mondom nektek, hogy majd ne érjen benneteket meglepetésként, és el ne veszítsétek a hiteteket.`,
    // 2
    `Ki fognak zárni titeket a zsinagógai közösségből, sőt, egyeseket meg is ölnek közületek! Akik pedig megölnek benneteket, azt fogják hinni, hogy ezzel Istennek tesznek szolgálatot.`,
    // 3
    `Azért teszik ezt, mert sem az Atyát nem ismerik, sem engem.`,
    // 4
    `Látjátok, előre megmondtam nektek! Tehát, amikor majd ezek bekövetkeznek, emlékezzetek rá, hogy én előre figyelmeztettelek titeket.”
„Korábban azért nem beszéltem ezekről, mert veletek voltam.`,
    // 5  ~ A Szentlélek munkája ~
    `Most visszatérek ahhoz, aki elküldött engem. Egyikőtök sem kérdezi: »Hová mész?«`,
    // 6
    `Igaz, most szomorúak vagytok, mivel ezt mondtam,`,
    // 7
    `de higgyetek nekem: javatokra válik, hogy elmegyek! Miért? Mert ha elmegyek, elküldöm hozzátok a Segítőt. Ha nem mennék el, akkor ő sem jönne el hozzátok.`,
    // 8
    `Amikor pedig eljön a Szentlélek, nyilvánvaló módon be fogja bizonyítani az egész világnak, és minden embernek, hogy mi a vétek, mi az igazságosság, és mi az ítélet.`,
    // 9
    `Be fogja bizonyítani az embereknek, hogy ha nem hisznek bennem, akkor vétkeznek.`,
    // 10
    `Bebizonyítja, hogy Isten igazságos ítélete az, hogy én visszatérek az Atyához, és nem láttok többé.`,
    // 11
    `Be fogja bizonyítani, hogy e világ fejedelme (#v) fölött kimondták a kárhoztató ítéletet.`,
    // 12
    `Még sok mondanivalóm lenne, de most még nem értenétek.`,
    // 13
    `Azonban eljön majd az Igazság Lelke, aki bevezet benneteket a teljes valóságba, mert nem a saját gondolatait mondja majd, hanem azt, amit az Atyától hall. Kijelenti majd nektek az eljövendő dolgokat.`,
    // 14
    `Engem fog dicsőíteni, mert abból vesz, ami az enyém, és kijelenti nektek. Minden, ami az Atyáé, az enyém is.`,
    // 15
    `Ezért mondom, hogy a Szentlélek az enyémből vesz, és kijelenti nektek.”`,
    // 16  ~ Szomorúságotok örömre fordul ~
    `„Még egy kis idő, és nem láttok engem többé. Azután egy kis idő múlva ismét megláttok.”`,
    // 17
    `Ekkor a tanítványok tanakodni kezdtek egymás között: „Mit jelent ez: »Még egy kis idő, és nem láttok engem, de azután ismét megláttok«? Mit jelent az, hogy: »Mert én az Atyához megyek?«`,
    // 18
    `Mit jelent az, hogy »Egy kis idő múlva«? Nem értjük, mire gondolt!”`,
    // 19
    `Jézus tudta, hogy meg akarják kérdezni, ezért ő kérdezte meg tőlük: „Arról tanakodtok, hogy mit jelent, amit mondtam: »Még egy kis idő, és nem láttok engem, azután hamarosan ismét megláttok?«`,
    // 20
    `Igazán mondom nektek: akkor majd sírtok és jajgattok, a hitetlenek ellenben örülnek. Szomorúak lesztek, de szomorúságotok hamarosan örömre fordul.`,
    // 21
    `Amikor az asszony világra hozza gyermekét, szenved, mert eljött a szülés ideje. Azonban miután megszületett a gyermeke, már elfelejti minden szenvedését, mert a gyermeknek örül, aki a világra jött.`,
    // 22
    `Ehhez hasonlóan most ti is szomorúak vagytok. Amikor majd újra meglátlak titeket, már örülni fogtok, és ezt az örömöt senki el nem veheti tőletek!`,
    // 23
    `Azon a napon nem kérdeztek majd tőlem semmit. Igazán mondom nektek: bármit kértek az Atyától az én nevemben, megadja nektek!`,
    // 24
    `Eddig még semmit sem kértetek az én nevemben. Kérjetek, és megkapjátok, hogy örömötök teljes legyen.”`,
    // 25  ~ Én már legyőztem a világot ~
    `„Ezeket a dolgokat példázatokban mondtam nektek. De eljön az idő, amikor már nem példázatokban szólok hozzátok, hanem nyíltan beszélek nektek az Atyáról.`,
    // 26
    `Azon a napon, ha az én nevemben kértek valamit az Atyától, nem lesz rá szükség, hogy én kérjem az Atyát értetek.`,
    // 27
    `Hiszen maga az Atya szeret titeket, mivel ti is szerettek engem, és elhittétek, hogy Istentől jöttem.`,
    // 28
    `Igen, én az Atyától jöttem ebbe a világba, de most elhagyom ezt a világot, és visszamegyek az Atyához.”`,
    // 29
    `A tanítványok ekkor azt mondták: „Látod, most valóban nyíltan beszélsz, és nem példázatokban!`,
    // 30
    `Most már látjuk, hogy mindent tudsz! Te hamarabb tudsz válaszolni a kérdésünkre, mint hogy megkérdeztünk volna! Ezért hisszük, hogy valóban Istentől jöttél.”`,
    // 31
    `Jézus így válaszolt: „Most hiszitek?`,
    // 32
    `Figyeljetek rám! Hamarosan eljön az idő, sőt, már itt is van, amikor mindannyian szétszóródtok, ki-ki hazatér az otthonába, és engem egyedül hagytok. De mégsem leszek egyedül, mert Atyám velem van.`,
    // 33
    `Ezt azért mondom nektek, hogy teljes békességetek és bizalmatok legyen bennem. Ezen a világon próbatételek, nehéz időszakok és szenvedések várnak rátok, de legyetek bátrak: én már legyőztem a világot.”`
  ],
  [
    // 17  ~ Jézus imádkozik a tanítványaiért ~
    `Miután Jézus ezeket mondta, felnézett az égre, és így szólt: „Atyám, eljött az idő! Dicsőítsd meg Fiadat, hogy ő is dicsőséget szerezzen neked!`,
    // 2
    `Hatalmat adtál Fiadnak minden ember fölött, hogy örök életet adjon mindazoknak, akiket neki ajándékoztál.`,
    // 3
    `Az örök élet pedig az, hogy egyre jobban megismerjenek téged, az egyetlen valóságos Istent, és a Messiás Jézust, akit elküldtél.`,
    // 4
    `Befejeztem a munkát, amellyel megbíztál, s ezzel dicsőséget szereztem neked itt a földön.`,
    // 5
    `Most pedig, Atyám, fogadj vissza dicsőségedbe és jelenlétedbe, abba a dicsőségbe, amelyben veled együtt laktam, mielőtt a világ létrejött volna.`,
    // 6
    `Atyám, embereket ajándékoztál nekem ebből a világból. A tieid voltak, és nekem adtad őket, én pedig kézzelfoghatóan megmutattam nekik, hogy te milyen vagy. Ők azok, akik befogadták szavaidat, és engedelmeskedtek annak, amit mondtál.`,
    // 7
    `Ők már tudják, hogy minden, amit nekem adtál, tőled származik.`,
    // 8
    `Minden szót, amit tőled hallottam, továbbadtam nekik, ők pedig befogadták tanításodat. Felismerték, elfogadták, és meggyőződtek róla, hogy ezek a tanítások valóban tőled származnak, és azt is, hogy valóban te küldtél engem.`,
    // 9
    `Értük imádkozom most, és nem a hitetlenekért. Azokért imádkozom, akiket nekem adtál, mert hozzád tartoznak.`,
    // 10
    `Mert mindazok, akik hozzám tartoznak, a tieid, és mindazok, akik hozzád tartoznak, az enyémek - és általuk mutatkozik meg dicsőségem mindenki számára.`,
    // 11
    `Most már visszatérek hozzád, Atyám! Nem maradok tovább ezen a világon, de ők itt maradnak. Szent Atyám, őrizd meg őket neved hatalma által, amelyet nekem adtál! Őrizd meg őket, hogy ők is eljussanak arra az egységre, amelyben te és én élünk!`,
    // 12
    `Amíg velük voltam, megőriztem őket neved hatalma által, amelyet nekem adtál. Vigyáztam rájuk, és nem veszett el közülük senki más, csak az az egy: a pusztulás fia. Így teljesedett be, amit az Írás róla mondott.`,
    // 13
    `Atyám, most hozzád jövök, de amíg még ezen a világon vagyok, imádkozom azokért, akik hozzám tartoznak, hogy az örömöm egészen betöltse őket.`,
    // 14
    `Átadtam nekik üzenetedet, Atyám.
Akik ehhez a világhoz tartoznak, gyűlölték az enyémeket, mert ők nem ebből a világból valók, ahogyan én sem tartozom ehhez a világhoz.`,
    // 15
    `Nem arra kérlek, hogy vedd ki őket a világból, hanem hogy őrizd meg őket a Gonosztól!`,
    // 16
    `Ők nem ehhez a világhoz tartoznak, mint ahogyan én sem.`,
    // 17
    `Válaszd külön őket a magad számára, Atyám, a valóság megismerése által - s a te beszéded, az a valóság!`,
    // 18
    `Ahogyan te elküldtél engem erre a világra, ugyanúgy küldöm el én is őket.`,
    // 19
    `Értük odaszentelem magamat, hogy ők is odaszenteljék magukat neked a valóság megismerése által!`,
    // 20
    `Atyám, nem csak őértük imádkozom, hanem mindazokért is, akik majd az ő szavukra fognak hinni bennem.`,
    // 21
    `Mindannyiukért kérlek, hogy akik hisznek bennem, valamennyien teljes egységben legyenek úgy, ahogyan te, Atyám, bennem élsz, és ahogyan én benned élek. Ők is így éljenek mibennünk, teljes egységben, hogy a világ elhiggye, és meggyőződjön róla, hogy valóban te küldtél engem!`,
    // 22
    `Azt a dicsőséget, amelyet tőled kaptam, továbbadtam nekik, hogy ők is abban az egységben éljenek, ahogyan mi egységben élünk.`,
    // 23
    `Én bennük élek, és te, Atyám énbennem - hogy ők is eljussanak a tökéletes egységre. Ennek láttán majd az egész világ felismeri, hogy te küldtél engem, és őket is ugyanúgy szereted, ahogyan engem.`,
    // 24
    `Atyám, azt akarom, hogy azok, akiket nekem adtál, ott legyenek velem, ahol én vagyok. Azt akarom, hogy lássák dicsőségemet, amelyet tőled kaptam, mivel te már a világ teremtése előtt szerettél engem.`,
    // 25
    `Igazságos Atyám! Ez a világ soha nem ismert meg téged, de én ismerlek, és ők is felismerték és elfogadták, hogy te küldtél engem.`,
    // 26
    `Megmutattam nekik, hogy te valójában milyen vagy, és továbbra is meg fogom mutatni, hogy az a szeretet, amellyel engem szerettél, bennük éljen, és én is őbennük éljek.”`
  ],
  [
    // 18  ~ Jézust letartóztatják (#F) ~
    `Miután Jézus befejezte az imádkozást, tanítványaival együtt átment a Kidron-patak völgyének másik oldalára, egy kertbe, ahol máskor is gyakran megfordult.`,
    // 2
    `Ezt a helyet ismerte Júdás is, aki Jézust az ellenségei kezére akarta adni.`,
    // 3
    `Ezért ide vezette azt a csapatot, amelyben római katonák és templomőrök voltak. Ez utóbbiakat a főpapok és a farizeusok küldték. Fáklyákat, lámpásokat és fegyvereket is vittek magukkal.`,
    // 4
    `Jézus már előre tudta, hogy mi következik, ezért előlépett, és megkérdezte: „Kit kerestek?”`,
    // 5
    `„A názáreti Jézust” - felelték.
„Én vagyok” (#w) - mondta Jézus. Ott volt közöttük Júdás is, aki elárulta.`,
    // 6
    `Amikor Jézus azt mondta: „Én vagyok”, azok mind hátratántorodtak, és a földre estek. Jézus ekkor ismét megkérdezte:`,
    // 7
    `„Kit kerestek?”
„A názáreti Jézust” - válaszolták.`,
    // 8
    `Jézus azt mondta: „Már megmondtam nektek, hogy én vagyok az, ha tehát engem kerestek, akkor a többieket hagyjátok békében elmenni!”`,
    // 9
    `Ez azért történt, hogy beteljesedjék, amit előzőleg mondott: „Senkit sem veszítettem el azok közül, akiket nekem adtál.”`,
    // 10
    `Ekkor Simon Péter kirántotta a kardját, és rávágott az egyikre azok közül, akik Jézust akarták elfogni, de csak a jobb fülét vágta le. Ez a férfi a főpap szolgája volt, Málkusnak hívták.`,
    // 11
    `Jézus azonban rászólt Péterre: „Tedd csak vissza a kardodat a helyére! Nem tudod, hogy ki kell innom azt a poharat, (#x) amelyet Atyám adott nekem?”`,
    // 12  ~ Kihallgatják Annás házában (#G) ~
    `Ekkor a római katonák a parancsnokukkal és a zsidó templomőrökkel együtt letartóztatták, és megkötözték Jézust.`,
    // 13
    `Először Annáshoz vitték, aki Kajafás apósa volt. Abban az évben Kajafás volt a főpap.`,
    // 14
    `Ő volt az, aki azt tanácsolta a vallási vezetőknek, hogy jobb, ha egyetlen ember hal meg, mintha az egész nép elpusztul.`,
    // 15  ~ Péter letagadja, hogy ismeri Jézust (#H) ~
    `Simon Péter követte Jézust egy másik tanítvánnyal együtt, aki ismerte a főpapot, ezért Jézussal együtt ő is bement a főpap palotájának udvarára.`,
    // 16
    `Péter azonban kint maradt a kapunál. Később kijött az a másik tanítvány, szólt az ajtót őrző szolgálólánynak, és bevitte Pétert is az udvarba.`,
    // 17
    `Ez a szolgálólány megkérdezte Pétert: „Ugye te is annak az embernek a tanítványai közé tartozol?”
„Nem, dehogyis!” - tiltakozott Péter.`,
    // 18
    `A szolgák és a templom őrei tüzet raktak az udvarban, körülállták, és melegedtek, mert hideg volt az éjszaka. Péter is közéjük állt.`,
    // 19  ~ A főpap kihallgatja Jézust (#I) ~
    `Eközben a főpap a tanítványairól és tanításairól kérdezte Jézust.`,
    // 20
    `Ő így válaszolt: „Én mindig nyilvánosan tanítottam a zsinagógában és a Templomban, ahol a zsidók összegyűlnek. Semmit nem mondtam titokban.`,
    // 21
    `Miért engem kérdezel? Kérdezd azokat, akik hallgatták tanításaimat! Ők tudják, mit mondtam!”`,
    // 22
    `Akkor egy közelben álló őr az arcába vágott Jézusnak, és rákiáltott: „Hogy mersz így válaszolni a főpapnak?!”`,
    // 23
    `Jézus így felelt: „Ha valami rosszat mondtam, bizonyítsd be! Ha pedig helyesen válaszoltam, akkor miért ütöttél meg?”`,
    // 24
    `Ezután Annás megkötözve átküldte Jézust Kajafáshoz, a főpaphoz.`,
    // 25  ~ Péter újra letagadja, hogy ismeri Jézust (#J) ~
    `Eközben Simon Péter az udvarban, a tűznél melegedett. A többiek megszólították: „Ugye te is annak az embernek a tanítványai közé tartozol?” De ő letagadta: „Nem vagyok!”`,
    // 26
    `Ott volt a főpap egyik szolgája is, aki rokona volt annak, akinek Péter levágta a fülét. Megkérdezte Pétertől: „Azt hiszem, én már láttalak téged vele együtt a kertben! Nem így van?”`,
    // 27
    `De Péter újra letagadta, s abban a pillanatban kukorékolt a kakas.`,
    // 28  ~ Jézus Pilátus előtt (#K) ~
    `Mikor feljött a hajnal, Jézust átvezették Kajafás házából a római helytartó palotájába. A vallási vezetők azonban nem akartak oda belépni, hogy ne váljanak tisztátalanná (#y) , és részt vehessenek az ünnepi páskavacsorán.`,
    // 29
    `Ezért Pilátus jött ki hozzájuk, és megkérdezte: „Mivel vádoljátok?”`,
    // 30
    `Ezt felelték: „Ez az ember bűnöző! Ha nem így volna, nem adtuk volna a kezedbe!”`,
    // 31
    `Pilátus így válaszolt: „Vigyétek el, és ítéljétek el a ti saját Törvényetek szerint!”
A vallási vezetők így feleltek: „Nekünk nincs jogunk hozzá, hogy valakit halálra ítéljünk!”`,
    // 32
    `(Így teljesedett be, amit Jézus előre megmondott: hogy milyen módon fog meghalni.)`,
    // 33
    `Ezután Pilátus visszament a palotába, maga elé hozatta Jézust, és megkérdezte tőle: „Te vagy a zsidók királya?”`,
    // 34
    `Jézus kérdéssel válaszolt: „Magadtól kérdezed ezt, vagy mások mondták rólam?”`,
    // 35
    `Pilátus így felelt: „Nem vagyok én zsidó! Saját néped és a főpapok adtak a kezembe. Mit tettél?”`,
    // 36
    `Jézus így válaszolt: „Az én királyságom nem ehhez a világhoz tartozik. Ha ehhez tartozna, a szolgáim harcolnának értem, hogy ne szolgáltassanak ki a vallási vezetőknek. De királyságom nem ebből a világból való.”`,
    // 37
    `Pilátus azt kérdezte: „Szóval mégis király vagy?”
Jézus válaszolt: „Igen, jól mondod, az vagyok. Azért születtem, és jöttem erre a világra, hogy az igazságról tanúskodjak. Aki az igazsághoz tartozik, az hallgat a szavamra.”`,
    // 38
    `Pilátus ezt mondta: „Ugyan, mi az, hogy igazság?” - s ezzel újra kiment a vallási vezetőkhöz, és ezt mondta nekik: „Nem találok benne semmi bűnt, amiért el kellene ítélnem.`,
    // 39
    `A szokás szerint azonban egy foglyot szabadon engedek a kedvetekért a Páska ünnepén. Akarjátok-e, hogy szabadon engedjem nektek a zsidók királyát?”`,
    // 40
    `Erre azok kiabálni kezdtek: „Nem, ne őt, hanem Barabbást engedd szabadon!” Ez a Barabbás rablógyilkos volt.`
  ],
  [
    // 19
    `Ekkor Pilátus megkorbácsoltatta Jézust.`,
    // 2
    `A katonák tövises ágakból koszorút fontak, Jézus fejébe nyomták, és egy bíborszínű köpenyt adtak rá.`,
    // 3
    `Azután egymás után eléje jöttek, és gúnyolódva így kiáltottak: „Éljen a zsidók királya!” Közben pedig arcul ütötték.`,
    // 4
    `Később újra kijött Pilátus a vallási vezetőkhöz, és azt mondta: „Nézzétek! Kihozom őt ide elétek, hogy értsétek meg, én semmi okot nem látok arra, hogy megvádoljam!”`,
    // 5
    `Ezután kivezették Jézust a palotából, a fején töviskoszorúval, bíborszínű köpenyben. „Nézzétek, itt van az ember!” - mondta Pilátus.`,
    // 6
    `Amint a főpapok és a templomőrök megpillantották Jézust, kiabálni kezdtek: „Feszítsd keresztre! Feszítsd keresztre!”
De Pilátus így válaszolt nekik: „Feszítsétek meg ti! Én semmiben nem találtam bűnösnek!”`,
    // 7
    `Azok erre így feleltek: „Törvényünk szerint meg kell halnia, mert azt mondta, hogy ő az Isten Fia!”`,
    // 8
    `Amikor ezt Pilátus meghallotta, még jobban megrémült.`,
    // 9
    `Visszament a palotába, és újra faggatni kezdte Jézust: „Honnan jöttél?” De Jézus nem válaszolt.`,
    // 10
    `Pilátus így folytatta: „Nekem nem felelsz?! Nem tudod, hogy hatalmamban áll szabadon engedni, vagy kivégeztetni téged a kereszten?”`,
    // 11
    `Jézus így válaszolt: „Semmi hatalmad nem lenne fölöttem, ha nem kaptad volna felülről. Ezért, aki a kezedbe adott engem, az súlyosabb bűnt követett el, mint te.”`,
    // 12
    `Ettől kezdve Pilátus igyekezett Jézust szabadon engedni. De a vallási vezetők így kiáltoztak: „Ha őt szabadon engeded, akkor nem vagy a császár barátja! Aki királynak mondja magát, az a császár ellensége!”`,
    // 13
    `Erre Pilátus újra kihozatta Jézust a palotából a „Kövezett udvarba”, amelyet héberül Gabbatának neveznek. Ott Pilátus beült a bírói székbe.`,
    // 14
    `A Páska-ünnepre való előkészület napja volt, és dél felé járt az idő. Pilátus így szólt a júdeabeliekhez: „Nézzétek, itt a királyotok!”`,
    // 15
    `Erre azok így kiabáltak: „Vidd el innen! Vidd el innen! Feszítsd keresztre!”
Pilátus megkérdezte: „Végeztessem ki a királyotokat?”
De a főpapok így feleltek: „Nincs más királyunk, csak a császár!”`,
    // 16
    `Ekkor Pilátus átadta a katonáknak Jézust, hogy feszítsék keresztre, és így végezzék ki. Ők pedig elvezették Jézust.`,
    // 17  ~ Jézus kivégzése: a keresztre feszítés (#L) ~
    `Jézus maga vitte a keresztfáját. Kimentek a városon kívül, a „Koponya” nevű helyre, amelyet héberül Golgotának neveznek.`,
    // 18
    `Ott Jézust a keresztfára szögezték. Ugyanakkor két másik férfit is keresztre feszítettek: egyiket Jézus jobb oldalán, a másikat a bal oldalán.`,
    // 19
    `Pilátus készített feliratot is, amelyet rászögeztek Jézus keresztfájára. Ez állt rajta: „ názáreti jézus a zsidók királya ”.`,
    // 20
    `A zsidók közül sokan olvasták ezt a feliratot, amely héberül, latinul és görögül volt írva, ugyanis közel volt a városhoz az a hely, ahol megfeszítették Jézust.`,
    // 21
    `A főpapok azt mondták Pilátusnak: „Ne azt írd: »A zsidók királya«, hanem inkább azt: »Ez az ember azt mondta magáról, hogy ő a zsidók királya«!”`,
    // 22
    `De Pilátus így válaszolt: „Amit írtam, megírtam!”`,
    // 23
    `Amikor a katonák megfeszítették Jézust, minden ruhát levettek róla, s azokat négy részre osztották, hogy mindegyiküknek jusson belőle. A köntösét azonban nem akarták szétszakítani, mivel az varrás nélkül készült, vagyis az egészet egy darabban szőtték.`,
    // 24
    `Azt mondták: „Ezt ne szakítsuk szét, inkább sorsoljuk ki, hogy kié legyen!” Így teljesedett be, amit az Írás mondott:
„Ruháimon megosztoztak,
     és köntösömre sorsot vetettek.” (#z)
A katonák pontosan ezt tették.`,
    // 25
    `Jézus anyja ott állt a keresztfa közelében. Vele volt a nővére, Mária a Klópás felesége, és Mária Magdalén.`,
    // 26
    `Mikor Jézus látta, hogy anyja is ott áll, meg az a tanítvány is, akit Jézus szeretett, ezt mondta az anyjának: „Asszony, ő a fiad!”`,
    // 27
    `A tanítványnak pedig ezt: „Nézd, ő az édesanyád!” Ezért az a tanítvány befogadta a saját otthonába Jézus anyját, aki attól kezdve ott lakott vele.`,
    // 28  ~ Jézus halála (#M) ~
    `Később, amikor Jézus látta, hogy már mindent befejezett, ami rá volt bízva, megszólalt: „Szomjas vagyok.” (#aa) Ezzel teljesítette be, amit az Írás mondott.`,
    // 29
    `Volt ott egy ecetes korsó, abba valaki belemártott egy szivacsot, és azt egy izsóp szárára tűzve felnyújtotta Jézus szájához.`,
    // 30
    `Miután Jézus elfogadta az ecetet, ezt mondta: „Beteljesedett!” Ezután lehajtotta a fejét, és meghalt. (#ab)`,
    // 31
    `A Páska-ünnepre való előkészület napja volt, és utána különleges szombati ünnepnap következett. Emiatt a vallási vezetők nem akarták, hogy a kivégzettek teste szombaton is a keresztfán maradjon. Megkérték hát Pilátust, parancsolja meg, hogy a katonák törjék el a három keresztre feszített férfi lábát, és vegyék le a holttesteket a keresztről.`,
    // 32
    `A katonák eltörték az egyik elítélt lábát, (#ac) akit Jézussal együtt feszítettek meg, azután a másikét is.`,
    // 33
    `Amikor Jézushoz értek, látták, hogy már halott, ezért nem törték el a lábát,`,
    // 34
    `hanem az egyik katona beledöfte a lándzsáját Jézus oldalába. A sebből azonnal vér és víz folyt ki.`,
    // 35
    `(Az tanúsítja ezt, aki szemtanúja volt, és igazat mond. Azért mondja ezt, hogy ti is higgyetek. Ő tudja, hogy ez az igazság, mert látta.)`,
    // 36
    `Mindez azért történt, hogy beteljesedjen, amit az Írás mond: „Egyetlen csontját se törjék el!” (#ad)`,
    // 37
    `Egy másik helyen pedig ezt mondja az Írás: „Néznek majd arra, akit átszúrtak.” (#ae)`,
    // 38  ~ Jézus temetése (#N) ~
    `Ezután arimátiai József kérte Pilátust, hogy levehesse a keresztről Jézus testét. József is Jézus tanítványa volt, de csak titokban, mert félt a vallási vezetőktől. Pilátus engedélyt adott rá, József pedig elment, és levette Jézus testét.`,
    // 39
    `Eljött Nikodémus is, aki mirhából és aloéből (#af) készült illatszer-keveréket hozott, körülbelül harminckilónyit. Nikodémus volt az, aki korábban egyszer éjszaka beszélgetett Jézussal.`,
    // 40
    `Miután levették Jézus holttestét, lenvászonba tekerték az illatszerekkel együtt, a júdeaiak temetési szokásai szerint.`,
    // 41
    `Azon a helyen, ahol Jézust keresztre feszítették, volt egy kert, abban pedig egy új sziklasír, ahová addig még senkit sem temettek.`,
    // 42
    `Mivel ez a sír közel volt, oda helyezték Jézus testét. Sietniük kellett, mert az előkészület napja a végéhez közeledett.`
  ],
  [
    // 20  ~ A tanítványok üresen találják Jézus sírját (#O) ~
    `A hét első napján korán reggel, amikor még sötét volt, Mária Magdalén kiment a sírhoz. Látta, hogy a zárókövet elgördítették a sír bejáratáról.`,
    // 2
    `Ekkor Mária elszaladt Simon Péterhez és ahhoz a másik tanítványhoz, akit Jézus szeretett, és elújságolta nekik: „Elvitték a sírból az Urat, és nem tudjuk, hová tették!”`,
    // 3
    `Ekkor Péter és a másik tanítvány azonnal elindultak a sírhoz.`,
    // 4
    `Együtt szaladtak, de az a másik megelőzte Pétert, és elsőként ért oda.`,
    // 5
    `Lehajolt, és látta, hogy ott vannak a vásznak, de nem ment be a sziklasírba.`,
    // 6
    `Simon Péter ugyan lemaradt egy kissé, de hamarosan ő is odaért, és be is ment a sírba.`,
    // 7
    `Ő is látta a vásznakat, és a kendőt is, amely Jézus arcán volt, de az távolabb feküdt, külön összehajtva.`,
    // 8
    `Ekkor bement az a másik tanítvány is, aki elsőként ért a sírhoz. Látta mindezt, és hitt.`,
    // 9
    `Ugyanis még nem értették, amit az Írás mondott, hogy Jézusnak fel kell támadnia a halálból.`,
    // 10  ~ Jézus megjelenik Mária Magdalénnek (#P) ~
    `Ezután a tanítványok hazamentek,`,
    // 11
    `Mária pedig ott maradt zokogva a sír előtt. Közben lehajolt, és benézett a sziklasírba.`,
    // 12
    `Két fehér ruhás angyalt látott, akik ott ültek, ahol korábban Jézus teste feküdt: egyik a feje, a másik a lába helyén.`,
    // 13
    `Az angyalok megszólították Máriát: „Miért sírsz, asszony?”
Ő így válaszolt: „Mert elvitték Uramat, és nem tudom, hová tették.”`,
    // 14
    `Majd hátranézett, és látta, hogy egy férfi áll a háta mögött. Jézus volt az, de Mária nem ismert rá.`,
    // 15
    `Jézus megkérdezte: „Miért sírsz, asszony? Kit keresel?”
Mária azt hitte, hogy a kertésszel beszél, ezért így felelt: „Uram, ha te vitted el a testet, kérlek, mondd meg, hová tetted, és én elviszem!”`,
    // 16
    `Jézus ekkor a nevén szólította: „Mária!”
„Rabbuni!” - kiáltott fel Mária, miután Jézus felé fordult. (Ez a héber szó azt jelenti: „Mester”.)`,
    // 17
    `„Ne tartóztass! - mondta Jézus -, mert még nem mentem fel az Atyához. Inkább menj a testvéreimhez, és mondd meg nekik, hogy most felmegyek Atyámhoz, aki a ti Atyátok is; Istenemhez, aki a ti Istenetek is!”`,
    // 18
    `Ezután Mária elment a tanítványokhoz, és ezt mondta nekik: „Láttam az Urat!” Elmondta nekik azt is, amit Jézus üzent.`,
    // 19  ~ Megjelenik a tanítványai között (#Q) ~
    `Aznap este, a hét első napján, a tanítványok együtt voltak. De bezárták az ajtókat, mivel féltek a vallási vezetőktől. Jézus hirtelen megjelent közöttük, és köszönt: „Békesség!”`,
    // 20
    `Miután ezt mondta, megmutatta nekik a két kezét és az oldalát. A tanítványok nagyon megörültek, hogy látják az Urat.`,
    // 21
    `Ezután Jézus újra azt mondta nekik: „Békesség! Ahogyan engem elküldött az Atya, most én is úgy küldelek el titeket.”`,
    // 22
    `Rájuk lehelt, és ezt mondta: „Fogadjátok be a Szentlelket!`,
    // 23
    `Ha megbocsátjátok valakinek a bűneit, akkor azokra a bűnökre bocsánatot nyer. Ha pedig nem bocsátjátok meg, akkor azokra nem kap bocsánatot.”`,
    // 24  ~ Megjelenik Tamásnak is ~
    `Tamás, akit Ikernek is hívtak, a tizenkét tanítvány közé tartozott, de nem volt ott, amikor Jézus megjelent közöttük.`,
    // 25
    `A többiek elmondták neki, hogy látták az Urat, de Tamás így válaszolt: „Csak akkor hiszem, ha a saját szememmel látom és megérintem Jézus kezén a szögek helyét, és ha a kezem az oldalára teszem!”`,
    // 26
    `Nyolc nappal később a tanítványok újra összegyűltek, és akkor már Tamás is velük volt. Ekkor Jézus ismét megjelent közöttük, pedig az ajtók zárva voltak. „Békesség!” - köszönt nekik.`,
    // 27
    `Azután Tamáshoz fordult: „Tedd ide az ujjadat, és nézd meg a kezemet! Nyújtsd ki a kezedet, és tedd az oldalamra! Ne kételkedj többé, hanem higgy!”`,
    // 28
    `Tamás ezt mondta: „Uram, Istenem!”`,
    // 29
    `Jézus ezt kérdezte tőle: „Azért hiszel, mert látsz engem? Boldogok és áldottak, akik bár nem látnak engem, mégis hisznek bennem!”`,
    // 30  ~ Miért írta János ezt a könyvet? ~
    `Jézus nagyon sok csodát tett a tanítványai szeme láttára. Ezek közül azonban sok nincs leírva ebben a könyvben.`,
    // 31
    `Amelyek viszont le vannak írva, azokat éppen azért jegyezték fel a számotokra, hogy higgyétek, hogy Jézus a Messiás, az Isten Fia, s hogy a benne való hit által életetek legyen a nevében.`
  ],
  [
    // 21  ~ Jézus megjelenik a Galileai-tónál ~
    `Később Jézus újra megjelent a tanítványoknak a Galileai-tónál. Ez így történt:`,
    // 2
    `együtt voltak Simon Péter, Tamás, akit Ikernek hívtak, Nátánaél a galileai Kánából, Zebedeus fiai és még két tanítvány.`,
    // 3
    `Simon Péter azt mondta: „Kimegyek halászni.”
Erre a többiek azt mondták: „Mi is veled megyünk.” El is indultak egy halászbárkával, és egész éjszaka halásztak, de nem fogtak semmit.`,
    // 4
    `Már reggel volt, amikor Jézus megállt a parton, de a tanítványok nem ismertek rá.`,
    // 5
    `Megkérdezte tőlük: „Barátaim! Fogtatok-e valamit?”
„Semmit” - felelték a tanítványok.`,
    // 6
    `Akkor Jézus ezt mondta: „Vessétek ki a hálót a bárka jobb oldalán, ott majd találtok!” A tanítványok kivetették a hálót, de visszahúzni már nem tudták, olyan nagy volt a fogás.`,
    // 7
    `Ekkor az a tanítvány, akit Jézus szeretett, azt mondta Péternek: „Az Úr van ott!” Amint Péter ezt meghallotta, felvette a felsőruháját - mert a munkához nekivetkőzött -, és beugrott a vízbe.`,
    // 8
    `A többi tanítvány a partra evezett, és húzták a halakkal teli hálót. Nem voltak túl messze a parttól, csak mintegy száz méterre.`,
    // 9
    `Amikor partot értek, ott egy tűzrakást láttak. A parázson halak sültek, és kenyér is volt ott.`,
    // 10
    `Jézus megszólította őket: „Hozzatok néhány halat, amelyet most fogtatok!”`,
    // 11
    `Ekkor Simon Péter visszament a bárkához, és a partra húzta a hálót, amely tele volt nagy halakkal, szám szerint százötvenhárommal. De a háló, bár ilyen sok hal volt benne, mégsem szakadt szét.`,
    // 12
    `Azután Jézus hívta őket: „Gyertek, reggelizzetek meg!” A tanítványok nem merték megkérdezni tőle: „Ki vagy te?”, mert tudták, hogy ő az Úr.`,
    // 13
    `Jézus ekkor fogta a kenyeret, és odaadta nekik, majd a halakat is.`,
    // 14
    `Ez volt a harmadik alkalom, hogy Jézus megjelent a tanítványoknak, miután feltámadt a halálból.`,
    // 15  ~ Szeretsz-e engem? ~
    `Miután ettek, Jézus megkérdezte Simon Pétertől: „Simon, Jóna fia, jobban szeretsz-e, mint ők?”
Péter így felelt: „Igen, Uram, tudod, hogy milyen kedves vagy nekem.”
Jézus erre azt mondta neki: „Viselj gondot a bárányaimra!”`,
    // 16
    `Azután újra megkérdezte tőle: „Simon, Jóna fia, szeretsz-e engem?”
Péter ismét ezt felelte: „Igen, Uram, tudod, hogy milyen kedves vagy nekem.”
Jézus azt mondta: „Viseld gondját a juhaimnak!”`,
    // 17
    `Ezután harmadszor is megkérdezte tőle: „Simon, Jóna fia, a barátom vagy?”
Péter erre elszomorodott, hogy Jézus harmadszorra is megkérdezte tőle: „A barátom vagy?” Így válaszolt: „Uram, te mindent tudsz. Tudod, hogy milyen kedves vagy nekem.”
Jézus azt mondta neki: „Viselj gondot a juhaimra! (#ag)`,
    // 18
    `Igazán mondom neked, amíg fiatal voltál, felkötötted az övedet, és oda mentél, ahová akartál. De ha megöregszel, kinyújtod a kezed, és akkor majd más köti fel az övedet, és oda visz, ahová nem akarsz menni.”`,
    // 19
    `Ezzel adta tudtára, hogyan fog meghalni, és a halálával hogyan szerez dicsőséget Istennek. Ezután hozzátette: „Kövess egem!”`,
    // 20
    `Ekkor Péter hátrafordult, és látta, hogy az a tanítvány, akit Jézus szeret, utánuk jön. Ő volt az, aki a vacsora közben Jézushoz közel hajolt, és megkérdezte tőle: „Uram, ki az, aki elárul téged?”`,
    // 21
    `Mikor Péter látta ezt a tanítványt, megkérdezte Jézustól: „Uram, hát vele mi lesz?”`,
    // 22
    `Jézus ezt felelte: „Ha azt akarom, hogy életben maradjon, amíg visszajövök, mi közöd hozzá? Te csak kövess engem!”`,
    // 23
    `Így terjedt el a testvérek között az a hír, hogy ez a tanítvány nem fog meghalni. Pedig Jézus nem ezt mondta, hanem azt: „Ha azt akarom, hogy életben maradjon, amíg visszajövök, mi közöd hozzá?”`,
    // 24
    `Ez a tanítvány az, aki mindezekről a dolgokról tanúskodik. Ő az, aki ezeket leírta, és tudjuk, hogy amit mond és ír, az igaz.`,
    // 25
    `Jézus még sok más dolgot is tett. Ha ezeket mind részletesen leírnák, azt hiszem, az egész világ sem lenne elég, hogy befogadja azokat a könyveket.`
  ]
];

const act = [
  [
    // Acts 1
    `Kedves Teofilus, első könyvemben mindarról írtam neked, amit Jézus tett és tanított`,
    // 2
    `addig a napig, amikor felvitték a Mennybe. Mielőtt felvitték volna, Jézus még beszélt az apostolokkal, akiket kiválasztott: a Szentlélek által útbaigazította őket, és parancsokat adott nekik.`,
    // 3
    `Ez Jézus szenvedése és halála után történt. Ő azonban negyven napon keresztül többször is megjelent az apostoloknak, beszélt nekik Isten Királyságáról, és sokféle módon meggyőzően bizonyította, hogy él.`,
    // 4
    `Az egyik ilyen alkalommal, amikor együtt ettek, ezt parancsolta nekik: „Az Atya megígért nektek valamit, ahogyan már beszéltem erről. Ne menjetek el Jeruzsálemből, amíg ő be nem teljesíti az ígéretét!`,
    // 5
    `Mert János vízbe merített be, titeket azonban néhány nap múlva Szentlélekbe fognak bemeríteni.”`,
    // 6  ~ Jézust felemelik a Mennybe ~
    `Amikor az apostolok együtt voltak, megkérdezték Jézust: „Uram, nem mostanában fogod helyreállítani Izráel népe számára a királyságot?”`,
    // 7
    `Ő így válaszolt: „Azokat az időpontokat és időszakokat, amelyeknek kijelölését az Atya saját magának tartotta fenn, nektek nem szükséges ismernetek.`,
    // 8
    `Ellenben, amikor a Szentlélek leszáll rátok, erőt kaptok, és tanúim lesztek Jeruzsálemben, egész Júdeában és Samáriában, sőt szerte a világon mindenhol.”`,
    // 9
    `Miután Jézus ezt mondta, a szemük láttára felemelkedett, majd egy felhő beburkolta és eltakarta a tanítványok tekintete elől.`,
    // 10
    `Az apostolok még mindig merően néztek a távolodó Jézus után, amikor hirtelen megállt mellettük két fehér ruhás férfi,`,
    // 11
    `és megszólította őket: „Galileai férfiak, miért álltok itt az ég felé meredve? Ez a Jézus, akit felvittek tőletek a Mennybe, ugyanúgy jön majd vissza, ahogyan felmenni láttátok.”`,
    // 12  ~ Júdás helyett Mátyást választják az apostolok közé ~
    `Ezután az apostolok az Olajfák hegyéről visszamentek Jeruzsálembe, amely körülbelül egy kilométerre volt onnan,`,
    // 13
    `majd felmentek abba az emeleti szobába, ahol a szállásuk volt: Péter, János, Jakab, András, Fülöp, Tamás, Bertalan, Máté, azután Jakab, az Alfeus fia, azután a zélóta Simon és Júdás, a Jakab fia.`,
    // 14
    `Mindannyian együtt voltak, állandóan és egy szívvel-lélekkel imádkoztak. Asszonyok is voltak velük - többek között Jézus anyja, Mária - meg Jézus testvérei is.`
  ],
  [
    // Acts 2 ~ Pünkösdkor a Szentlélek leszáll a tanítványokra
    // 2
    `Mindannyian együtt voltak akkor is, amikor elérkezett a Pünkösd ünnepe.`,
    // 2
    `Hirtelen zúgás hallatszott az égből, mint amikor erős szél fúj, és betöltötte az egész házat, ahol ültek.`,
    // 3
    `Azután lángnyelvek jelentek meg közöttük, és rászálltak mindenkire.`,
    // 4
    `Ekkor betöltötte őket a Szentlélek. Mind más-más nyelveken kezdtek beszélni, ahogy a Szentlélek adta kinek-kinek, hogy mit mondjon.`
  ]
];

export default { mt, mk, lk, jn, act };
