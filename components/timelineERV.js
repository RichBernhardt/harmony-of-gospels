const timeline = [
  {"Jézus Nyilvános Szolgálata Előtt":
    [
      ["Az Ige Emberré Lett","n/a",[["JN",1,1,18]],[["LK",1,1,4]]],
      ["Gábriel Arkangyal Megjelenik Bemerítő János Apjának, Zakariásnak","jerusalem",[["LK",1,5,25]]],
      ["Gábriel Arkangyal Megjelenik Jézus Anyjának, Máriának","nazareth",[["LK",1,26,38]]],
      ["Mária Meglátogatja Bemerítő János Anyját, Erzsébetet","judea",[["LK",1,39,56]]],
      ["Bemerítő János Születése","judea",[["LK",1,57,80]]],
      ["Egy Angyal Megjelenik Jézus Nevelőapjának, Józsefnek","nazareth",[["MT",1,18,25]]],
      ["Jézus Születése","bethlehem",[["LK",2,1,7]]],
      ["Látogatók Keletről Jézus Életének Kezdetén","bethlehem",[["LK",2,8,15],["MT",2,1,11],["LK",2,17,19],["MT",2,12,12],["LK",2,20,20]],[["MT",2,1,12]],[["LK",2,8,20]]],
      ["Jézus Körülmetélése","bethlehem",[["LK",2,21,21]]],
      ["Jézus Szüleinek Apai Felmenői","n/a",[["MT",1,1,17]],[["LK",3,23,38]]],
      ["Az Elsőszülött Jézus Megtisztulásáért Szülei Bemutatják Őt A Templomban","jerusalem",[["LK",2,22,38]]],
      ["Menekülés Egyiptomba","egypt",[["MT",2,13,18]]],
      ["Visszatérés Egyiptomból","nazareth",[["MT",2,19,23]],[["LK",2,39,40]]],
      ["Jézus Tizenkét Évesen A Páska Ünnepén","jerusalem",[["LK",2,41,50]]],
      ["Jézus Felnő","nazareth",[["LK",2,51,52]]]
    ]
  },
  {"1-6. Hét | Bemerítkezés És Az Első Tanítványok Júdeában":
    [
      ["1. Hét | A Bemerítkezés","bethany-at-jordan",[["MT",3,13,17]],[["MK",1,9,11]],[["LK",3,21,22]]],
      ["1-6. Hét | A Megkísértés","judea",[["MT",4,1,11]],[["MK",1,12,13]],[["LK",4,1,13]]],
      ["1-6. Hét | Bemerítő János Utat Készít Jézusnak","bethany-at-jordan",[["LK",3,1,3],["MT",3,2,2],["MK",1,6,6],["JN",1,19,22],["LK",3,4,6],["MT",3,7,10],["LK",3,10,18],["JN",1,28,28]],[["MT",3,1,12]],[["MK",1,1,8]],[["LK",3,1,18]],[["JN",1,19,28]]],
      ["6. Hét | János Jézusról: \"Ő Az Isten Báránya\"","bethany-at-jordan",[["JN",1,29,34]]],
      ["6. Hét | Jézus Első Tanítványai: András, Simon Péter,...","bethany-at-jordan",[["JN",1,35,42]]],
      ["6. Hét | További Tanítványok: Fülöp És Nátánaél","bethany-at-jordan",[["JN",1,43,51]]]
    ]
  },
  {"7. Hét | Jézus Meglátogatja Származási Családját Galileában":
    [
      ["7. Hét | A Kánai Lakodalom","cana",[["JN",2,1,11]]],
      ["7. Hét | Jézus Vér És Hit Szerinti Családja Együtt Kapernaumban","capernaum",[["JN",2,12,12]]]
    ]
  },
  {"8-15. Hét | Első Húsvét Jeruzsálemben, Szolgálat Júdeában":
    [
      ["8. Hét | A Templom Előszöri Megtisztítása A Páska Ünnepére","jerusalem",[["JN",2,13,17]]],
      ["8. Hét | Romboljátok Le Ezt A Templomot És Én Három Nap Alatt Újra Felépítem","jerusalem",[["JN",2,18,25]]],
      ["9. Hét | Nikodémus Jézushoz Megy Beszélgetni","jerusalem",[["JN",3,1,21]]],
      ["9-15. Hét | Jánosról Jézusra Kerül A Szolgálat","judea",[["JN",3,22,36]]]
    ]
  },
  {"9-15. Hét | Visszatérés Galileába":
    [
      ["9-15. Hét | A Samáriai Asszony","jacobs-well",[["JN",4,1,42]]],
      ["9-15. Hét | Jézus Meggyógyítja Egy Tisztviselő Fiát","cana",[["JN",4,43,54]]],
      ["9-15. Hét | Heródes Bebörtönzi Jánost","galilee",[["LK",3,19,19],["MK",6,19,20],["LK",3,20,20]],[["MT",14,3,5]],[["MK",6,17,20]],[["LK",3,19,20]]]
    ]
  },
  {"15. Hét | Pünkösd Jeruzsálemben":
    [
      ["15. Hét | Gyógyítás Szombaton A Betesda Tavánál","jerusalem",[["JN",5,1,15]]],
      ["15. Hét | Jézus Az Isten Fia","jerusalem",[["JN",5,16,47]]]
    ]
  },
  {"16-31. Hét | A Galilei Szolgálat Kezdete":
    [
      ["16. Hét | A Galileai Szolgálat Kezdete","galilee",[["MK",1,14,15]],[["MT",4,12,12]],[["LK",4,14,15]]],
      ["16. Hét | Ézsaiás Szavai Épp Valóra Válnak","nazareth",[["LK",4,16,30]]],
      ["17. Hét | Jézus Kapernaumban Tanít","capernaum",[["MT",4,13,17]]],
      ["17. Hét | Elhívás A Tónál: Simon Péter, András, Jakab És János \"Főállású\" Tanítványokká Lesznek","capernaum",[["MK",1,16,16],["MK",1,19,19],["LK",5,1,1],["LK",5,3,9],["MK",1,17,17],["LK",5,11,11]],[["MT",4,18,22]],[["MK",1,16,20]],[["LK",5,1,11]]],
      ["17. Hét | Kiűz Egy Gonosz Szellemet A Zsinagógában","capernaum",[["MK",1,21,28]],[["LK",4,31,37]]],
      ["17. Hét | Jézus Sokakat Meggyógyít Péter Otthonánál","capernaum",[["MK",1,29,34],["MT",8,17,17]],[["MT",8,14,17]],[["MK",1,29,34]],[["LK",4,38,41]]],
      ["18. Hét | Máshol Is Hirdetnie Kell Az Örömüzenetet","capernaum",[["MK",1,35,38]],[["LK",4,42,43]]],
      ["18-31. Hét | Első Galileai Örömüzenet Hirdető Út","galilee",[["MT",4,23,25]],[["MK",1,39,39]],[["LK",4,44,44]]],
      ["18-31. Hét | Meggyógyít Egy Leprást","galilee",[["MK",1,40,45]],[["MT",8,2,4]],[["LK",5,12,16]]],
      ["18-31. Hét | A Tetőn Át Leeresztett Béna","capernaum",[["MK",2,1,12]],[["MT",9,1,8]],[["LK",5,17,26]]],
      ["18-31. Hét | Máté Elhívása","capernaum",[["MK",2,13,14]],[["MT",9,9,9]],[["LK",5,27,28]]],
      ["18-31. Hét | Máté Vendégsége","capernaum",[["MK",2,15,16],["LK",5,31,31],["MT",9,13,13]],[["MT",9,10,13]],[["MK",2,15,17]],[["LK",5,29,32]]],
      ["18-31. Hét | A Farizeusok Számonkérik Jézust A Böjtért","capernaum",[["LK",5,33,39]],[["MT",9,14,17]],[["MK",2,18,22]]],
      ["18-31. Hét | Az Emberfia Úr A Szombat Ünnepe Fölött Is","capernaum",[["MT",12,1,7],["MK",2,27,28]],[["MT",12,1,8]],[["MK",2,23,28]],[["LK",6,1,5]]],
      ["18-31. Hét | Egy Bénult Kezű Ember Gyógyítása Szombaton","capernaum",[["MT",12,9,9],["LK",6,7,11],["MK",3,6,6]],[["MT",12,9,14]],[["MK",3,1,6]],[["LK",6,6,11]]],
      ["18-31. Hét | Nézzétek Szolgámat Akit Választottam","capernaum",[["MT",12,15,21]]]
    ]
  },
  {"18-31. Hét | A Hegyi Beszéd Galileában":
    [
      ["18-31. Hét | A Tizenkét Apostol Kiválasztása","capernaum",[["LK",6,12,16]],[["MT",10,1,4]],[["MK",3,13,19]]],
      ["18-31. Hét | A Tizenkét Apostol Kiküldése","capernaum",[["MT",10,5,16]]],
      ["18-31. Hét | Ha Egyik Városban Bántanak, Meneküljetek Egy Másikba","capernaum",[["MT",10,23,23]]],
      ["18-31. Hét | Gyógyítás A Hegyi Beszéd Előtt","capernaum",[["LK",6,17,19]],[["MK",3,7,12]]],
      ["18-31. Hét | Elhelyezkedés A Hegyi Beszédhez","capernaum",[["MT",5,1,1]]],
      ["18-31. Hét | Boldog Mondások","capernaum",[["MT",5,2,12]],[["LK",6,20,26]]],
      ["18-31. Hét | A Törvényekről","capernaum",[["MT",5,17,20]],[["LK",16,17,17]]],
      ["18-31. Hét | A Harag Gyilkosság","capernaum",[["MT",5,21,26]],[["LK",12,57,59]]],
      ["18-31. Hét | Parázna Gondolatok Engedése Már Paráznaság","capernaum",[["MT",5,27,28]],[["MT",5,27,30]]],
      ["18-31. Hét | Elválás És Újraházasodás","capernaum",[["MT",5,31,32]],[["LK",16,18,18]]],
      ["18-31. Hét | Ígéreteidet Tartsd Be, Soha Ne Esküdj","capernaum",[["MT",5,33,37]]],
      ["18-31. Hét | Szeresd Ellenségeidet","capernaum",[["MT",5,38,48]],[["LK",6,27,36]]],
      ["18-31. Hét | Adakozás","capernaum",[["MT",6,1,4]]],
      ["18-31. Hét | Imádkozás, Mi Atyánk","capernaum",[["MT",6,5,15]],[["LK",11,1,4]]],
      ["18-31. Hét | Böjt","capernaum",[["MT",6,16,18]]],
      ["18-31. Hét | Ne Ítélkezz","capernaum",[["MT",7,1,2],["LK",6,39,39],["MT",7,3,5]],[["MT",7,1,5]],[["LK",6,37,42]]],
      ["18-31. Hét | Gyöngyöt Disznók Közé","capernaum",[["MT",7,6,6]]],
      ["18-31. Hét | A Törvény Lényege","capernaum",[["MT",7,12,12]]],
      ["18-31. Hét | Cselekedeteteikről Ismeritek Meg A Hamis Prófétákat","capernaum",[["MT",7,15,20]],[["LK",6,43,45]]],
      ["18-31. Hét | Milyen Alapra Építesz","capernaum",[["LK",6,46,49]],[["MT",7,24,27]]],
      ["18-31. Hét | Jézus Hatalommal Tanít","capernaum",[["MT",7,28,29]]],
      ["18-31. Hét | A Hegyi Beszéd Vége","capernaum",[["MT",8,1,1],["LK",7,1,1]],[["MT",8,1,1]],[["LK",7,1,1]]]
    ]
  },
  {"18-31. Hét | A Galileai Szolgálat Folytatódik":
    [
      ["18-31. Hét | Egy Római Százados Hite","capernaum",[["MT",8,5,13]],[["LK",7,2,10]]],
      ["18-31. Hét | Két Vak Hite","capernaum",[["MT",9,27,31]]],
      ["18-31. Hét | Egy Néma Megszállott","capernaum",[["MT",9,32,34]]],
      ["18-31. Hét | Második Galileai Örömüzenet Hirdetés","galilee",[["LK",8,1,3]],[["MT",9,35,35]]],
      ["18-31. Hét | Feltámasztja Egy Naini Özvegy Fiát","nain",[["LK",7,11,17]]],
      ["18-31. Hét | Rágalmazzák Jézus Hatalmának Eredetét","galilee",[["LK",11,14,23]],[["MT",12,22,30]],[["MK",3,20,27]]],
      ["18-31. Hét | A Megbocsáthatatlan Bűn","galilee",[["MK",3,28,30],["MT",12,34,37]],[["MT",12,31,37]],[["MK",3,28,30]],[["LK",12,10,10]]],
      ["18-31. Hét | Jónás Jele: Három Nap És Három Éjjel","galilee",[["MT",12,38,42]],[["LK",11,29,32]]],
      ["18-31. Hét | Visszatérő Gonosz Szellemek","galilee",[["MT",12,43,45]],[["LK",11,24,26]]],
      ["18-31. Hét | Az Igazán Boldogok Az Engedelmesek","galilee",[["LK",11,27,28]]],
      ["18-31. Hét | Jézus Igazi Családja","galilee",[["MT",12,46,50]],[["MK",3,31,35]],[["LK",8,19,21]]]
    ]
  },
  {"18-31. Hét | A Tavi Beszéd Galileában":
    [
      ["18-31. Hét | A Tavi Beszéd (Gyülekezés)","galilee-shore",[["MT",13,1,2]],[["MK",4,1,1]],[["LK",8,4,4]]],
      ["18-31. Hét | Példázat A Magvetésről","galilee-shore",[["MK",4,2,10],["MT",13,11,18],["LK",8,11,15]],[["MT",13,3,23]],[["MK",4,2,20]],[["LK",8,5,15]]],
      ["18-31. Hét | Legyetek A Világ Világossága","galilee-shore",[["MT",5,14,16],["MK",4,22,24],["LK",8,18,18]],[["MT",5,14,16]],[["MK",4,21,25]],[["LK",8,16,18]]],
      ["18-31. Hét | A Magától Növekedő Vetés","galilee-shore",[["MK",4,26,29]]],
      ["18-31. Hét | Búza És Gyomok","galilee-shore",[["MT",13,24,30]]],
      ["18-31. Hét | Mustármag","galilee-shore",[["MT",13,31,32]],[["MK",4,30,32]],[["LK",13,18,19]]],
      ["18-31. Hét | Kovász","galilee-shore",[["MT",13,33,33]],[["LK",13,20,21]]],
      ["18-31. Hét | Példázatok És Hasonlatok Által Szólok","galilee-shore",[["MK",4,33,34],["MT",13,35,35]],[["MT",13,34,35]],[["MK",4,33,34]]],
      ["18-31. Hét | A Kincs És Az Igazgyöngy","galilee-shore",[["MT",13,44,46]]],
      ["18-31. Hét | Halászháló","galilee-shore",[["MT",13,47,50]]],
      ["18-31. Hét | Törvénytanítók Akik Tanítványok Lettek","galilee-shore",[["MT",13,51,52]]],
      ["18-31. Hét | Jézus Befejezi A Tavi Beszédet","galilee-shore",[["MK",4,35,35]],[["MT",8,18,18]]],
      ["18-31. Hét | Jézus Követésének Ára","galilee-shore",[["MT",8,19,21],["LK",9,60,62]],[["MT",8,19,22]],[["LK",9,57,62]]],
      ["18-31. Hét | A Tavi Beszéd Vége","galilee-shore",[["MK",4,36,36]],[["MT",8,23,23]],[["LK",8,22,22]]],
      ["18-31. Hét | A Búza És Gyomok Magyarázata","galilee-shore",[["MT",13,36,43]]]
    ]
  },
  {"18-31. Hét | A Galileai Szolgálat Folytatódik":
    [
      ["18-31. Hét | Jézus Lecsendesíti A Vihart","lake-galilee",[["LK",8,23,25]],[["MT",8,24,27]],[["MK",4,37,41]]],
      ["18-31. Hét | Gadarai Démonok","decapolis-shore",[["MK",5,1,20]],[["MT",8,28,34]],[["LK",8,26,39]]],
      ["18-31. Hét | Vissza A Tó Galileai Partjára","galilee-shore",[["LK",8,40,40]],[["MT",9,1,1]],[["MK",5,21,21]]],
      ["18-31. Hét | Feltámasztja Jairus Lányát","galilee",[["MK",5,22,24],["LK",8,43,56]],[["MT",9,18,26]],[["MK",5,22,43]],[["LK",8,41,56]]],
      ["18-31. Hét | János Megerősítést Kér Jézustól","galilee",[["MT",11,2,6]],[["LK",7,18,23]]],
      ["18-31. Hét | Jézus Tanúbizonysága Jánosról","galilee",[["LK",7,24,28],["LK",16,16,16],["LK",7,29,30],["MT",11,14,15],["LK",7,31,35]],[["MT",11,7,19]],[["LK",7,24,35]]],
      ["18-31. Hét | Jézus Szemrehányást Tesz A Hitetlen Városoknak","galilee",[["MT",11,20,24]],[["LK",10,12,15]]],
      ["18-31. Hét | Jézus Dicsőíti Az Atyát","galilee",[["LK",10,21,24]],[["MT",11,25,27]]],
      ["18-31. Hét | Jézus Könnyebb Terhet Kínál","galilee",[["MT",11,28,30]]],
      ["18-31. Hét | A Prófétát Nem Tisztelik A Saját Városában","nazareth",[["MK",6,1,6]],[["MT",13,53,58]]],
      ["18-31. Hét | Jézus Segít Egy Nem-Zsidó Asszonynak","tyre",[["MK",7,24,24],["MT",15,22,25],["MK",7,27,27],["MT",15,27,28]],[["MT",15,21,28]],[["MK",7,24,30]]],
      ["18-31. Hét | Meggyógyít Egy Süketnémát","decapolis-shore",[["MK",7,31,37],["MT",15,30,31]],[["MT",15,29,31]],[["MK",7,31,37]]],
      ["18-31. Hét | Harmadik Galileai Örömüzenet Hirdető Út","galilee",[["MT",9,36,38]]],
      ["18-31. Hét | A Tizenkét Apostol Kiküldése","galilee",[["LK",9,1,6]],[["MK",6,7,13]]],
      ["18-31. Hét | Az Örömüzenet Hirdetés Folytatása  Galileában","galilee",[["MT",11,1,1]]],
      ["31. Hét | Heródest Rászedik Hogy Lefejeztesse Jánost","galilee",[["MK",6,21,28]],[["MT",14,6,11]]]
    ]
  },
  {"31. Hét | A Harsonák Napjának Ünnepe Galileában":
    [
      ["31. Hét | Jézus Értesül János Haláláról, Az Apostolok Visszatérnek","bethsaida",[["MT",14,12,12],["LK",9,10,10]],[["MT",14,12,13]],[["MK",6,29,32]],[["LK",9,10,10]],[["JN",6,1,1]]],
      ["31. Hét | Jézus Enni Ad Több Mint Ötezer Embernek","bethsaida",[["MK",6,33,36],["MT",14,16,16],["JN",6,7,9],["LK",9,14,14],["MK",6,40,42],["JN",6,12,15],[]],[["MT",14,14,21]],[["MK",6,33,44]],[["LK",9,11,17]],[["JN",6,2,15]]],
      ["31. Hét | Jézus És Péter A Vízen Jár","lake-galilee",[["MT",14,22,33],["MK",6,52,52],["MT",14,34,36]],[["MT",14,22,36]],[["MK",6,45,56]],[["JN",6,16,21]]],
      ["31. Hét | A Harsonák Napjának Ünnepe","gennesaret",[["JN",6,22,71]]],
      ["31. Hét | Képmutató Kézmosás","gennesaret",[["MK",7,1,5],["MT",15,3,9],["MK",7,15,15],["LK",11,40,40],["LK",11,41,54],["MT",15,12,20]],[["MT",15,1,20]],[["MK",7,1,23]],[["LK",11,37,54]]]
    ]
  },
  {"31-32. Hét | A Galileai Szolgálat Folytatódik":
    [
      ["31. Hét | Heródes Értesül Jézusról","n/a",[["LK",9,7,9]],[["MT",14,1,2]],[["MK",6,14,16]]],
      ["32. Hét | Jézus Enni Ad Több Mint Négyezer Embernek","decapolis-shore",[["MK",8,1,4],["MT",15,34,39]],[["MT",15,32,39]],[["MK",8,1,10]]],
      ["32. Hét | Óvakodjatok A Farizeusok Kovászától","magadan",[["MT",16,1,3],["MK",8,12,20],["MT",16,11,12]],[["MT",16,1,12]],[["MK",8,11,21]]],
      ["32. Hét | Jézus Meggyógyít Egy Vakot","bethsaida",[["MK",8,22,26]]]
    ]
  },
  {"32-33. Hét | A Megbékélés Napjának Ünnepe Caesarea Philippi-ben ":
    [
      ["32. Hét | Péter Kimondja Hogy Jézus A Megváltó","caesarea-philippi",[["MK",8,27,27],["MT",16,14,23],["LK",9,23,25],["MK",8,38,38]],[["MT",16,13,27]],[["MK",8,27,38]],[["LK",9,18,26]]],
      ["32. Hét | Néhányotok Halála Előtt Látni Fogja Isten Királyságát","caesarea-philippi",[["MT",16,28,28]],[["MK",9,1,1]],[["LK",9,27,27]]],
      ["33. Hét | A Megbékélés Napja","caesarea-philippi",[["MT",17,1,1],["LK",9,29,35],["MT",17,6,13]],[["MT",17,1,13]],[["MK",9,2,13]],[["LK",9,28,36]]],
      ["33. Hét | Egy Nehezen Kiűzhető Gonosz Szellem","caesarea-philippi",[["LK",9,37,37],["MK",9,16,28],["MT",17,20,21]],[["MT",17,14,21]],[["MK",9,14,29]],[["LK",9,37,43]]]
    ]
  },
  {"33. Hét | Visszatérés Galileába":
    [
      ["33. Hét | Jézus Előre Jelzi Halálát És Feltámadását","galilee",[["MK",9,30,31],["LK",9,45,45]],[["MT",17,22,23]],[["MK",9,30,32]],[["LK",9,43,45]],[["JN",7,1,1]]],
      ["33. Hét | Templom Adó","capernaum",[["MT",17,24,27]]],
      ["33. Hét | Jézus Testvérei Nem Hisznek","capernaum",[["JN",7,2,9]]],
      ["33. Hét | Ki A Legnagyobb?","capernaum",[["MK",9,33,37]],[["MT",18,1,5]],[["LK",9,46,48]]],
      ["33. Hét | Aki Nincs Ellenünk, Az Velünk Van","capernaum",[["MK",9,38,40]],[["LK",9,49,50]]],
      ["33. Hét | Ne Kísérts Hithagyásra","capernaum",[["MT",18,6,9],["MK",9,49,49]],[["MT",18,6,9]],[["MK",9,42,49]],[["LK",17,1,2]]],
      ["33. Hét | Só És Világosság","capernaum",[["MT",5,13,13]],[["MK",9,50,50]],[["LK",14,34,35]]],
      ["33. Hét | Az Elveszett Juh","capernaum",[["LK",15,1,7],["MT",18,14,14]],[["MT",18,10,14]],[["LK",15,1,7]]],
      ["33. Hét | Az Elveszett Érme","capernaum",[["LK",15,8,10]]],
      ["33. Hét | A Tékozló Fiú","capernaum",[["LK",15,11,32]]],
      ["33. Hét | Szembesítsd Hit Testvéredet Ha Vétkezik","capernaum",[["MT",18,15,18]],[["LK",17,3,3]]],
      ["33. Hét | Bocsánatkérés Elfogadása","capernaum",[["MT",18,21,22]],[["LK",17,4,4]]],
      ["33. Hét | Ha Egyetértetek A Nevemben, Ott Vagyok Veletek","capernaum",[["MT",18,19,20]]],
      ["33. Hét | Egy Kegyelmet Élvező Szívtelen Szolga","capernaum",[["MT",18,23,35]]]
    ]
  },
  {"33-35. Hét | A Sátoros Ünnep Jeruzsálemben":
    [
      ["33. Hét | Felmegy Jeruzsálembe A Sátoros Ünnepre","galilee",[["LK",9,51,56],["JN",7,11,13]],[["LK",9,51,56]],[["JN",7,10,13]]],
      ["33. Hét | Tíz Leprás","galilee-samaria",[["LK",17,11,19]]],
      ["33. Hét | Érkezés Júdeába A Jordán Túlpartjára","jordan-in-judea",[["MT",19,1,2]],[["MK",10,1,1]]],
      ["34. Hét | A Sátoros Ünnepen A Templomban Tanít","jerusalem",[["JN",7,14,36]]],
      ["34. Hét | A Sátoros Ünnep Utolsó (Nagy) Napja","jerusalem",[["JN",7,37,53]]],
      ["34. Hét | A Tetten Ért Hűtlen Asszony","jerusalem",[["JN",8,1,11]]],
      ["34. Hét | Jézus Kijelenti: Én Vagyok A Világ Világossága","jerusalem",[["JN",8,12,30]]],
      ["34. Hét | Isten Igaz Gyermekei","jerusalem",[["JN",8,31,59]]],
      ["35. Hét | Egy Született Vak Lát","jerusalem",[["JN",9,1,41]]]
    ]
  },
  {"35-43. Hét | Szolgálat Júdeában":
    [
      ["35-36. Hét | A Jó Pásztor Az Életét Adja A Juhokért","judea",[["JN",10,1,21]]],
      ["35-36. Hét | Hetvenkét Tanítvány Kiküldése","judea",[["LK",10,1,11]]],
      ["36-43. Hét | Ki A Felebarátom?","judea",[["LK",10,25,37]]],
      ["36-43. Hét | Mária És Márta","bethany",[["LK",10,38,42]]],
      ["36-43. Hét | Sürgős Szükség","judea",[["LK",11,5,8]]],
      ["36-43. Hét | Kitartóan Kérjétek És Isten Megadja","judea",[["LK",11,9,13]],[["MT",7,7,11]]],
      ["36-43. Hét | A Test Lámpása A Szem","judea",[["LK",11,33,33],["MT",6,22,23],["LK",11,35,36]],[["MT",6,22,23]],[["LK",11,33,36]]],
      ["36-43. Hét | A Hetvenkét Tanítvány Visszatérése","judea",[["LK",10,17,20]]],
      ["36-43. Hét | Istent Tiszteljétek, Ne Az Emberektől Féljetek","judea",[["LK",12,1,7]],[["MT",10,26,31]]],
      ["36-43. Hét | Vállaljátok Hiteteket Az Emberek Előtt","judea",[["MT",10,32,33]],[["LK",12,8,9]]],
      ["36-43. Hét | Kapzsiság","judea",[["LK",12,13,21]]],
      ["36-43. Hét | Te Csak Istennel Törődj, Ő Majd Gondoskodik Földi Szükségleteidről","judea",[["MT",6,25,27],["LK",12,26,26],["MT",6,28,33],["LK",12,32,32],["MT",6,34,34]],[["MT",6,25,34]],[["LK",12,22,32]]],
      ["36-43. Hét | Ahol Kincseitek Oda Húz Szívetek","judea",[["MT",6,19,21]],[["LK",12,33,34]]],
      ["36-43. Hét | Szétválasztani Jöttem Az Igazakat És A Hamisakat","judea",[["LK",12,49,51],["MT",10,35,36]],[["MT",10,34,36]],[["LK",12,49,53]]],
      ["36-43. Hét | Jézus Követéséhez Elkötelezettség Kell","judea",[["LK",14,25,33]],[["MT",10,37,39]]],
      ["36-43. Hét | Az Idők Jelei","judea",[["LK",12,54,56]]],
      ["36-43. Hét | Térjetek Vissza Istenhez","judea",[["LK",13,1,9]]],
      ["36-43. Hét | Jézus Szombaton Gyógyít","judea",[["LK",13,10,17]]],
      ["36-43. Hét | Jeruzsálem Felé","judea",[["LK",13,22,22]]],
      ["36-43. Hét | A Keskeny Ösvény","judea",[["LK",13,23,23],["MT",7,13,14]],[["MT",7,13,14]],[["LK",13,23,24]]],
      ["36-43. Hét | Azok Jutnak A Mennybe Akik Engedelmesek Istennek","judea",[["MT",7,21,23]],[["LK",13,25,30]]],
      ["36-43. Hét | Jézus Üzen Heródesnek","judea",[["LK",13,31,33]]]
    ]
  },
  {"43. Hét | A Vallás-Egyesítés Elleni Győzelem Ünnepén (Hanuka) Jeruzsálemben":
    [
      ["43. Hét | Jézus Elmarasztalja Jeruzsálemet","jerusalem",[["MT",23,37,39]],[["LK",13,34,35]]],
      ["43. Hét | Vendégségben Egy Vezető Törvény-Tanítónál: Gyógyítás Szombaton","jerusalem",[["LK",14,1,6]]],
      ["43. Hét | Önkényes Vagy Természetes Tekintély","jerusalem",[["LK",14,7,14]]],
      ["43. Hét | A Vallás-Egyesítés Elleni Győzelem Ünnepén (Hanuka)","jerusalem",[["JN",10,22,39]]]
    ]
  },
  {"43-62. Hét | A Júdeai Szolgálat Folytatódik":
    [
      ["43-62. Hét | Érkezés Júdeába A Jordán Túlpartjára","bethany",[["JN",10,40,42]]],
      ["43-62. Hét | Gazdagnak Nehéz Isten Királyságába Jutni","judea",[["LK",18,18,19],["MK",10,19,31]],[["MT",19,16,30]],[["MK",10,17,31]],[["LK",18,18,30]]],
      ["43-62. Hét | Irigy Szőlőmunkások","judea",[["MT",20,1,16]]],
      ["43-62. Hét | Hűség A Kevésen","judea",[["LK",16,1,12]]],
      ["43-62. Hét | Isten Vagy Világi Gazdagság","judea",[["LK",16,13,15]],[["MT",6,24,24]]],
      ["43-62. Hét | A Gazdag És Lázár A Koldus","judea",[["LK",16,19,31]]],
      ["43-62. Hét | A Mustármagnyi Hit","judea",[["LK",17,5,6]]],
      ["43-62. Hét | Ne Várj Elismerést Kötelességed Teljesítéséért","judea",[["LK",17,7,10]]],
      ["43-62. Hét | Isten Királysága Bennetek Van","judea",[["LK",17,20,22]]],
      ["43-62. Hét | Isten Válaszol Választottainak","judea",[["LK",18,1,8]]],
      ["43-62. Hét | Egy Farizeus És Egy Adószedő Imája","judea",[["LK",18,9,14]]],
      ["43-62. Hét | A Válásról","judea",[["MT",19,3,12]],[["MK",10,2,12]]],
      ["43-62. Hét | Azoké Isten Királysága Kik Úgy Fogadják Őt Mint Gyermekek","judea",[["MK",10,13,16]],[["MT",19,13,15]],[["LK",18,15,17]]],
      ["43-62. Hét | Feltámasztja Lázárt","bethany",[["JN",11,1,44]]],
      ["43-62. Hét | A Főpapok Elhatározzák Jézus Megölését","ephraim",[["JN",11,45,57]]],
      ["43-62. Hét | Jézus Részletesen Megjövendöli Halálát","ephraim",[["LK",18,31,34]],[["MT",20,17,19]],[["MK",10,32,34]]],
      ["43-62. Hét | Jakab És János Versengése","judea",[["MK",10,35,45]],[["MT",20,20,28]]],
      ["43-62. Hét | Jerikói Vakok (Bartimeus)","jericho",[["MK",10,46,46],["MT",20,30,34]],[["MT",20,29,34]],[["MK",10,46,52]],[["LK",18,35,43]]],
      ["43-62. Hét | Zákeus, A Vámszedők Egy Vezetője Megtér","jericho",[["LK",19,2,10]],[["LK",19,1,10]]],
      ["43-62. Hét | Talentumok","jericho",[["LK",19,11,28]],[["MT",25,14,30]]]
    ]
  },
  {"62. Hét | A Második Húsvétot Megelőző Hét Jeruzsálemben":
    [
      ["62. Hét | Megkenetés Mária Által","bethany",[["JN",12,1,9]],[["MT",26,6,13]],[["MK",14,3,9]],[["LK",7,36,50]]],
      ["62. Hét | Jézus És Lázár Megölését Tervezik A Főpapok","jerusalem",[["JN",12,10,11],["LK",22,2,2]],[["MT",26,1,5]],[["MK",14,1,2]],[["LK",22,1,2]],[["JN",12,10,11]]],
      ["62. Hét | Júdás Megegyezik a Főpapokkal","jerusalem",[["LK",22,3,6]],[["MT",26,14,16]],[["MK",14,10,11]]],
      ["62. Hét | Jézust Királyként Üdvözli A Nép Jeruzsálemben","jerusalem",[["MK",11,1,3],["MT",21,4,7],["JN",12,17,18],["MK",11,8,10],["LK",19,39,40],["JN",12,19,19],["LK",19,41,44],["MT",21,10,11],["MK",11,11,11]],[["MT",21,1,11]],[["MK",11,1,11]],[["LK",19,29,44]],[["JN",12,12,19]]],
      ["62. Hét | Jézus Elátkoz Egy Gyümölcstelen Fügefát","bethany",[["MK",11,12,14]],[["MT",21,18,19]]],
      ["62. Hét | Jézus Másodszor Tisztítja Meg A Templomot","jerusalem",[["MK",11,15,17],["MT",21,14,17]],[["MT",21,12,17]],[["MK",11,15,19]],[["LK",19,45,48]]],
      ["62. Hét | A Fügefa Másnapra Kiszárad","bethany",[["MK",11,20,26]],[["MT",21,20,22]]],
      ["62. Hét | A Nép Vezetői Számonkérik Jézust Tanításáért","jerusalem",[["MK",11,27,33]],[["MT",21,23,27]],[["LK",20,1,8]]],
      ["62. Hét | A Szőlőbirtokos Két Fia","jerusalem",[["MT",21,28,32]]],
      ["62. Hét | A Gonosz Szőlő Bérlők","jerusalem",[["MT",21,33,46]],[["MK",12,1,12]],[["LK",20,9,19]]],
      ["62. Hét | A Király Fiának Lakodalma","jerusalem",[["MT",22,1,14]],[["LK",14,15,24]]],
      ["62. Hét | Adj Cézárnak És Istennek Amint Jár","jerusalem",[["MT",22,15,22]],[["MK",12,13,17]],[["LK",20,20,26]]],
      ["62. Hét | Szadduceusok A Feltámadásról","jerusalem",[["MT",22,23,28],["LK",20,34,40]],[["MT",22,23,33]],[["MK",12,18,27]],[["LK",20,27,40]]],
      ["62. Hét | A Legfontosabb Parancs","jerusalem",[["MK",12,28,34]],[["MT",22,34,40]]],
      ["62. Hét | Hogy Lehet A Megváltó Dávid Fia?","jerusalem",[["MT",22,41,46]],[["MK",12,35,37]],[["LK",20,41,44]]],
      ["62. Hét | Jaj Nektek Képmutató Törvénytanítók","jerusalem",[["MT",23,1,36]],[["MK",12,38,40]],[["LK",20,45,47]]],
      ["62. Hét | Az Özvegyasszony Fillérei","jerusalem",[["MK",12,41,44]],[["LK",21,1,4]]],
      ["62. Hét | Látogatók Nyugatról Jézus Életének Végén","jerusalem",[["JN",12,20,36]]],
      ["62. Hét | Aki Jézusban Hisz Az Az Atyában Hisz","jerusalem",[["JN",12,37,50]]],
      ["62. Hét | Jézus Nyilvános Szolgálatának Vége","jerusalem",[["LK",21,34,38]]],
      ["62. Hét | Kő Kövön Nem Marad","jerusalem",[["LK",21,5,6]],[["MT",24,1,2]],[["MK",13,1,2]]],
      ["62. Hét | Hamis Próféták, Háborúk, Járványok, Éhínség","jerusalem",[["LK",21,7,11]],[["MT",24,3,8]],[["MK",13,3,8]]],
      ["62. Hét | Üldöztetések","jerusalem",[["MK",13,9,10]],[["MT",10,17,18]],[["LK",21,12,13]]],
      ["62. Hét | Kínzások, Kivégzések","jerusalem",[["JN",16,1,3],["MT",24,10,14]],[["MT",24,9,14]],[["JN",16,1,4]]],
      ["62. Hét | Ne Aggódjatok A Védőbeszédeteken","jerusalem",[["LK",12,11,12]],[["MT",10,19,20]],[["MK",13,11,11]]],
      ["62. Hét | A Szentlélek Fog Beszélni Belőletek","jerusalem",[["LK",21,14,15]]],
      ["62. Hét | Családtagok, Barátok Halálra Adják Egymást","jerusalem",[["MT",10,21,22]],[["MK",13,12,13]],[["LK",21,16,19]]],
      ["62. Hét | Meneküljetek A Hegyekbe","jerusalem",[["MT",24,15,15],["LK",21,21,22]],[["MT",24,15,16]],[["MK",13,14,14]],[["LK",21,20,22]]],
      ["62. Hét | Azonnal Induljatok","jerusalem",[["LK",17,31,33]],[["MT",24,17,18]],[["MK",13,15,16]]],
      ["62. Hét | Olyan Nyomorúság Lesz Mint Még Soha","jerusalem",[["MT",24,19,21],["LK",21,24,24],["MT",24,22,22]],[["MT",24,19,22]],[["MK",13,17,20]],[["LK",21,23,24]]],
      ["62. Hét | Önjelölt Jézusok, Hamis Próféták","jerusalem",[["MT",24,23,27]],[["MK",13,21,23]],[["LK",17,23,25]]],
      ["62. Hét | Mint Közvetlenül Az Özönvíz Előtt","jerusalem",[["LK",17,26,30]],[["MT",24,37,39]]],
      ["62. Hét | Jézus Visszajövetele","jerusalem",[["MT",24,29,31],["LK",21,28,28]],[["MT",24,29,31]],[["MK",13,24,27]],[["LK",21,25,28]]],
      ["62. Hét | Az Egyik Felvétetik, A Másik Otthagyatik","jerusalem",[["LK",17,34,36]],[["MT",24,40,41]]],
      ["62. Hét | Keselyűk","jerusalem",[["LK",17,37,37]],[["MT",24,28,28]]],
      ["62. Hét | Jézus Visszajövetelének Jelei","jerusalem",[["MT",24,32,36]],[["MK",13,28,32]],[["LK",21,29,33]]],
      ["62. Hét | Mindig Álljatok Készen","jerusalem",[["LK",12,39,40]],[["MT",24,42,44]],[["MK",13,33,33]]],
      ["62. Hét | A Megbízható És A Hűtlen Szolga","jerusalem",[["MT",24,45,47],["LK",12,45,48],["MK",13,37,37]],[["MT",24,45,51]],[["MK",13,34,37]],[["LK",12,41,48]]],
      ["62. Hét | A Tíz Szűz","jerusalem",[["MT",25,1,13]],[["LK",12,35,38]]],
      ["62. Hét | A Juhok És A Kecskék","jerusalem",[["MT",25,31,46]]]
    ]
  },
  {"63. Hét | Húsvét Este Napját Megelőző Nap":
    [
      ["63. Hét | Az Úrvacsora Előkészítése","jerusalem",[["LK",22,7,13]],[["MT",26,17,20]],[["MK",14,12,17]]],
      ["63. Hét | Az Új Szövetség","jerusalem",[["LK",22,14,16],["LK",22,19,19],["MT",26,27,28],["LK",22,18,18]],[["MT",26,26,29]],[["MK",14,22,25]],[["LK",22,14,20]]],
      ["63. Hét | A Vezető Olyan Legyen Mint A Többiek Szolgája","jerusalem",[["LK",22,24,30]]],
      ["63. Hét | Jézus Megmossa A Tanítványai Lábát","jerusalem",[["JN",13,1,15]]],
      ["63. Hét | A Szolga Nem Nagyobb Az Uránál","jerusalem",[["JN",13,16,17]],[["MT",10,24,25]],[["LK",6,40,40]]],
      ["63. Hét | Aki Elfogadja Jézust Az Az Atyát Is Elfogadja","jerusalem",[["LK",10,16,16]],[["MT",10,40,42]],[["MK",9,41,41]],[["JN",13,20,20]]],
      ["63. Hét | Egyikőtök Elárul Engem","jerusalem",[["JN",13,18,19]]],
      ["63. Hét | Júdás - A Szimbolikus És Tényleges Kovász - Elmegy","jerusalem",[["JN",13,21,30]],[["MT",26,21,25]],[["MK",14,18,21]],[["LK",22,21,23]]],
      ["63. Hét | Szeressétek Egymást","jerusalem",[["JN",13,31,35]]],
      ["63. Hét | Távozás Az Olajfák Hegyére","jerusalem",[["MT",26,30,30]],[["MK",14,26,26]],[["LK",22,39,39]]],
      ["63. Hét | Mindnyájan Elveszítitek A Hiteteket","jerusalem",[["MT",26,31,32],["LK",22,31,34],["MK",14,31,31]],[["MT",26,31,35]],[["MK",14,27,31]],[["LK",22,31,34]],[["JN",13,36,38]]],
      ["63. Hét | Most Tartsatok Magatoknál Pénzt És Kardot","jerusalem",[["LK",22,35,38]]],
      ["63. Hét | Kérjetek Tőlem Bármit A Nevemben","jerusalem",[["JN",14,1,14]]],
      ["63. Hét | Jézus Megígéri A Szentlelket","jerusalem",[["JN",14,15,31]]],
      ["63. Hét | Jézus A Szőlőhöz Hasonlítja Magát","jerusalem",[["JN",15,1,17]]],
      ["63. Hét | A Tanítványok És A Világ","jerusalem",[["JN",15,18,25]]],
      ["63. Hét | Tanúskodjatok Rólam","jerusalem",[["JN",15,26,27]]],
      ["63. Hét | A Szentlélek Munkája","jerusalem",[["JN",16,5,15]]],
      ["63. Hét | Szomorúságotok Örömre Fordul","jerusalem",[["JN",16,16,24]]],
      ["63. Hét | Legyetek Bátrak: Én Már Legyőztem A Világot","jerusalem",[["JN",16,25,33]]],
      ["63. Hét | Jézus Imádkozik A Tanítványaiért","jerusalem",[["JN",17,1,26]]]
    ]
  },
  {"63. Hét | Jézus Letartóztatása És Kivégzése Húsvét Este Napján":
    [
      ["63. Hét | Gecsemáné: Atyám, Legyen Meg A Te Akaratod","jerusalem",[["MT",26,36,46]],[["MK",14,32,42]],[["LK",22,40,46]],[["JN",18,1,1]]],
      ["63. Hét | Gecsemáné: Jézus Elfogatása","jerusalem",[["LK",22,47,51],["MT",26,52,54],["JN",18,4,7],["MK",14,48,49],["JN",18,8,8],["MK",14,50,50],["JN",18,9,9],["JN",18,12,12]],[["MT",26,47,56]],[["MK",14,43,52]],[["LK",22,47,53]],[["JN",18,2,12]]],
      ["63. Hét | Vallatás Annásnál","jerusalem",[["JN",18,13,24]]],
      ["63. Hét | Átvezetik Kajafáshoz","jerusalem",[["MK",14,53,54]],[["MT",26,57,58]],[["LK",22,54,55]]],
      ["63. Hét | Vallatás A Főtanács Előtt Kajafásnál","jerusalem",[["MT",26,59,67],["LK",22,64,64]],[["MT",26,59,68]],[["MK",14,55,65]],[["LK",22,63,71]]],
      ["63. Hét | Péter Letagadja Hogy Ismeri Jézust","jerusalem",[["MT",26,69,75]],[["MK",14,66,72]],[["LK",22,56,62]],[["JN",18,25,27]]],
      ["63. Hét | Júdás Bűnbánata és Öngyilkossága","jerusalem",[["MT",27,3,10]]],
      ["63. Hét | Jézust Átadják Pilátusnak","jerusalem",[["JN",18,28,28]],[["MT",27,1,2]],[["MK",15,1,1]],[["LK",23,1,1]]],
      ["63. Hét | Pilátus Kikérdezi Jézust","jerusalem",[["JN",18,29,30],["MT",27,12,13],["MK",15,3,5],["JN",18,31,38],["LK",23,5,5]],[["MT",27,11,14]],[["MK",15,2,5]],[["LK",23,2,5]],[["JN",18,29,38]]],
      ["63. Hét | Pilátus Heródeshez Küldi Jézust","jerusalem",[["LK",23,6,12]]],
      ["63. Hét | Pilátus Ártatlannak Ítéli Jézust","jerusalem",[["LK",23,13,16]]],
      ["63. Hét | Jézus Vagy Barabbás","jerusalem",[["MK",15,6,7],["MT",27,17,20],["LK",23,18,18],["LK",23,20,22]],[["MT",27,15,23]],[["MK",15,6,14]],[["LK",23,17,22]],[["JN",18,39,40]]],
      ["63. Hét | Pilátus Megkorbácsoltatja, A Katonák Gyalázzák Jézust","jerusalem",[["MT",27,27,30]],[["MK",15,16,19]],[["JN",19,1,3]]],
      ["63. Hét | Pilátus Jézusért Érvel A Nép Ellen","jerusalem",[["JN",19,4,15]]],
      ["63. Hét | Pilátus Mossa Kezeit","jerusalem",[["MT",27,24,25],["JN",19,16,16]],[["MT",27,24,26]],[["MK",15,15,15]],[["LK",23,23,25]],[["JN",19,16,16]]],
      ["63. Hét | A Katonák Visszaadatják Jézusra A Saját Ruháját","jerusalem",[["MK",15,20,20]],[["MT",27,31,31]]],
      ["63. Hét | A Golgotához Vezető Úton","jerusalem",[["MT",27,32,32],["LK",23,27,32],["MK",15,22,23]],[["MT",27,32,34]],[["MK",15,21,23]],[["LK",23,26,32]],[["JN",19,17,17]]],
      ["63. Hét | A Keresztre Feszítés","jerusalem",[["LK",23,33,33],["MK",15,25,25],["JN",19,19,22],["LK",23,34,34],["JN",19,23,27]],[["MT",27,35,37]],[["MK",15,24,26]],[["LK",23,33,34]],[["JN",19,18,27]]],
      ["63. Hét | Jézust A Kereszten Is Gyalázzák","jerusalem",[["MT",27,38,43],["LK",23,39,43]],[["MT",27,38,44]],[["MK",15,27,32]],[["LK",23,35,43]]],
      ["63. Hét | Jézus Halála","jerusalem",[["MT",27,45,46],["JN",19,28,28],["MT",27,47,47],["JN",19,29,29],["MT",27,49,49],["LK",23,46,46],["MT",27,51,51],["JN",19,31,37]],[["MT",27,45,51]],[["MK",15,33,38]],[["LK",23,44,46]],[["JN",19,28,37]]],
      ["63. Hét | Tanúk A Kereszt Körül","jerusalem",[["MT",27,54,54],["LK",23,48,49],["MT",27,56,56]],[["MT",27,54,56]],[["MK",15,39,41]],[["LK",23,47,49]]],
      ["63. Hét | József Elkéri Pilátustól Jézus Testét","jerusalem",[["LK",23,50,51],["MK",15,42,42],["LK",23,52,52],["MK",15,44,45]],[["MT",27,57,58]],[["MK",15,42,45]],[["LK",23,50,52]],[["JN",19,38,38]]],
      ["63. Hét | József Ideiglenesen A Sírba Helyezi Jézust Majd Távozik A Tanukkal Együtt","jerusalem",[["MT",27,59,59],["JN",19,41,42],["LK",23,55,56]],[["MT",27,59,61]],[["MK",15,46,47]],[["LK",23,53,56]],[["JN",19,41,42]]],
      ["63. Hét | József Még Éjjel Visszatér A Sírhoz Nikodámussal Hogy Bebalzsamozzák Jézust","jerusalem",[["JN",19,39,40]]]
    ]
  },
  {"63-70+ Hét | Isten Feltámasztja Jézust":
    [
      ["63. Hét | A Nagy Szombatot Megszegve A Főtanács Őrséget Kér Pilátustól","jerusalem",[["MT",27,62,65]]],
      ["63. Hét | A Rómaiak Lepecsételik A Sírt És Őrzik","jerusalem",[["MT",27,66,66]]],
      ["63. Hét | Jézus Feltámad","jerusalem",[["MT",28,2,4]]],
      ["63. Hét | Az Első Igazak Feltámadnak","jerusalem",[["MT",27,52,53]]],
      ["63. Hét | Mária Magdalén Egyedül, Hajnal Előtt Kimegy A Sírhoz Amit Nyitva Talál","jerusalem",[["JN",20,1,1]]],
      ["63. Hét | Mária Tudatja Pétert És Jánost Hogy A Sír Nyitva Van","jerusalem",[["JN",20,2,2]]],
      ["63. Hét | Péter, János És Mária A Sírhoz Mennek. Mária Ott Marad, A Többiek Elmennek","jerusalem",[["JN",20,3,10]],[["LK",24,12,12]]],
      ["63. Hét | A Többi Asszony Elindul A Sírhoz","jerusalem",[["LK",24,1,1],["MK",16,3,3]],[["MT",28,1,1]],[["MK",16,1,3]],[["LK",24,1,1]]],
      ["63. Hét | A Többi Asszony A Sírnál Találkozik Mária Magdalén-nel","jerusalem",[["MK",16,4,4],["LK",24,3,3]],[["MK",16,4,4]],[["LK",24,2,3]]],
      ["63. Hét | Két Angyal Tudatja Az Aszonyokkal Hogy Jézus Feltámadt","jerusalem",[["LK",24,4,8]],[["MT",28,5,7]],[["MK",16,5,7]],[["JN",20,12,13]]],
      ["63. Hét | A Többi Asszony Ijjedtében Elszalad","jerusalem",[["MK",16,8,8]],[["MT",28,8,8]],[["LK",24,9,9]]],
      ["63. Hét | Mária Magdalén A Sírnál Marad","jerusalem",[["JN",20,11,11]]],
      ["63. Hét | Jézus Megjelenik Mária Magdalén-nek","jerusalem",[["JN",20,14,14],["JN",20,16,17]],[["MK",16,9,9]],[["JN",20,14,17]]],
      ["63. Hét | Mária Magdalén Csatlakozik A Többi Asszonyhoz Hogy Tudassák Az Apostolokat Miközben Jézus Megjelenik Nekik","jerusalem",[["MT",28,9,10]]],
      ["63. Hét | A Főtanács Megvesztegeti Az Őröket","jerusalem",[["MT",28,11,15]]],
      ["63. Hét | Az Asszonyok Szólnak Az Apostoloknak, De Azok Nem Hisznek","jerusalem",[["LK",24,10,11]],[["MK",16,10,11]],[["JN",20,18,18]]],
      ["63. Hét | Jézus Csatlakozik Két Tanítványához Emmaus Felé","emmaus",[["LK",24,13,35]],[["MK",16,12,13]]],
      ["63. Hét | Jézus Megjelenik A Tanítványoknak Az Úrvacsora Helyén","jerusalem",[["LK",24,36,49]],[["MK",16,14,14]],[["JN",20,19,23]]],
      ["64. Hét | Jézus Tamás Jelenlétében Ismét Megjelenik","jerusalem",[["JN",20,24,29]]],
      ["64-70. Hét | Jézus Mennybemenetele","jerusalem",[["ACT",1,6,11]],[["MK",16,19,19]]],
      ["64-70. Hét | A Tanítványok Együtt Imádkozva Várják A Szentlelket","jerusalem",[["ACT",1,12,14]]],
      ["70. Hét | A Szentlélek Leszáll A Tanítványokra","jerusalem",[["ACT",2,1,4]]],
      ["Jézus Megerősíti Pétert","galilee",[["JN",21,1,14]]],
      ["Jézus Háromszor Is Ellenőrzi Hogy Péter Visszanyerte-e Hitét","galilee",[["JN",21,15,24]]],
      ["Jézus Kiküldi Az Apostolokat Mindenkihez A Világon","galilee",[["MT",28,16,19],["MK",16,16,18],["MT",28,20,20]],[["MT",28,16,20]],[["MK",16,15,18]]],
      ["Az Apostolok Mindenkinek Hirdetik Az Örömhírt A Világon","galilee",[["MK",16,20,20]]]
    ]
  }
];
export { timeline as default };