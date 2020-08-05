const timeline = [
  {"Before Jesus' Public Ministry":
    [
      ["The Word Became Human","n/a",[["JN",1,1,18]],[["LK",1,1,4]]],
      ["Angel Gabriel Appear To Zechariah, The Father Of John The Baptist","jerusalem",[["LK",1,5,25]]],
      ["Angel Gabriel Appear To Jesus' Mother, Mary","nazareth",[["LK",1,26,38]]],
      ["Mary Visits Elizabeth, The Mother Of John The Baptist","judea",[["LK",1,39,56]]],
      ["Birth Of John The Baptist","judea",[["LK",1,57,80]]],
      ["An Angel Appear To Jesus' Foster Father Joseph","nazareth",[["MT",1,18,25]]],
      ["The Birth Of Jesus","bethlehem",[["LK",2,1,7]]],
      ["Visitors From The East At The Begining Of Jesus' Life","bethlehem",[["LK",2,8,15],["MT",2,1,11],["LK",2,17,19],["MT",2,12,12],["LK",2,20,20]],[["MT",2,1,12]],[["LK",2,8,20]]],
      ["Jesus Is Circumcised","bethlehem",[["LK",2,21,21]]],
      ["The Family History Of Jesus","n/a",[["MT",1,1,17]],[["LK",3,23,38]]],
      ["Jesus Is Being Made Pure By Presented In The Temple","jerusalem",[["LK",2,22,38]]],
      ["Escape To Egypt From King Herod","egypt",[["MT",2,13,18]]],
      ["Return To Nazareth","nazareth",[["MT",2,19,23]],[["LK",2,39,40]]],
      ["The Twelve Year Old Jesus On The Passover Feast","jerusalem",[["LK",2,41,50]]],
      ["Jesus Grows Up","nazareth",[["LK",2,51,52]]]
    ]
  },
  {"Week 1-6 | Baptism And First Followers In Judea":
    [
      ["w1 | The Baptism","bethany-at-jordan",[["MT",3,13,17]],[["MK",1,9,11]],[["LK",3,21,22]]],
      ["w1-6 | The Temptation","judea",[["MT",4,1,11]],[["MK",1,12,13]],[["LK",4,1,13]]],
      ["w1-6 | John The Baptist Prepares for Jesus","bethany-at-jordan",[["LK",3,1,3],["MT",3,2,2],["MK",1,6,6],["JN",1,19,22],["LK",3,4,6],["MT",3,7,10],["LK",3,10,18],["JN",1,28,28]],[["MT",3,1,12]],[["MK",1,1,8]],[["LK",3,1,18]],[["JN",1,19,28]]],
      ["w6 | John Declares: \"The Lamb Of God\"","bethany-at-jordan",[["JN",1,29,34]]],
      ["w6 | Jesus' First Followers: Andrew, Simon Peter,...","bethany-at-jordan",[["JN",1,35,42]]],
      ["w6 | More Followers: Philip And Nathanael","bethany-at-jordan",[["JN",1,43,51]]]
    ]
  },
  {"Week 7 | Jesus Visits His Family Of Origin In Galilee":
    [
      ["w7 | The Wedding At Cana","cana",[["JN",2,1,11]]],
      ["w7 | Jesus' Family Of Faith And Family Of Origin Together In Capernaum","capernaum",[["JN",2,12,12]]]
    ]
  },
  {"Week 8-15 | First Passover In Jerusalem, Ministry In Judea":
    [
      ["w8 | First Cleansing Of Temple For Passover","jerusalem",[["JN",2,13,17]]],
      ["w8 | Destroy This Temple And I Will Build It Again In Three Days","jerusalem",[["JN",2,18,25]]],
      ["w9 | Nicodemus Goes to Jesus To Talk","jerusalem",[["JN",3,1,21]]],
      ["w9-15 | The Ministry Is Being Taken Over From John To Jesus","judea",[["JN",3,22,36]]]
    ]
  },
  {"Week 9-15 | Back To Galilee":
    [
      ["w9-15 | The Samaritan Woman","jacobs-well",[["JN",4,1,42]]],
      ["w9-15 | Jesus Heals An Officer’s Son","cana",[["JN",4,43,54]]],
      ["w9-15 | Herod Puts John In Prison","galilee",[["LK",3,19,19],["MK",6,19,20],["LK",3,20,20]],[["MT",14,3,5]],[["MK",6,17,20]],[["LK",3,19,20]]]
    ]
  },
  {"Week 15 | Pentecost In Jerusalem":
    [
      ["w15 | Healing At Bethesda On Sabbath","jerusalem",[["JN",5,1,15]]],
      ["w15 | Jesus Is The Son Of God","jerusalem",[["JN",5,16,47]]]
    ]
  },
  {"Week 16-31 | Opening Of The Galilean Ministry":
    [
      ["w16 | Opening Of The Galilean Ministry","galilee",[["MK",1,14,15]],[["MT",4,12,12]],[["LK",4,14,15]]],
      ["w16 | Isaiah's Words Are Coming True","nazareth",[["LK",4,16,30]]],
      ["w17 | Jesus Teaches In Capernaum","capernaum",[["MT",4,13,17]]],
      ["w17 | The Call By The Sea: Simon Peter, Andrew, James And John Join Full Time","capernaum",[["MK",1,16,16],["MK",1,19,19],["LK",5,1,1],["LK",5,3,9],["MK",1,17,17],["LK",5,11,11]],[["MT",4,18,22]],[["MK",1,16,20]],[["LK",5,1,11]]],
      ["w17 | Forces Out An Evil Spirit In The Synagoge","capernaum",[["MK",1,21,28]],[["LK",4,31,37]]],
      ["w17 | Jesus Heals Many People At Peter's Home","capernaum",[["MK",1,29,34],["MT",8,17,17]],[["MT",8,14,17]],[["MK",1,29,34]],[["LK",4,38,41]]],
      ["w18 | Jesus Must Preach In Other Towns Too","capernaum",[["MK",1,35,38]],[["LK",4,42,43]]],
      ["w18-31 | First Galilean Tour","galilee",[["MT",4,23,25]],[["MK",1,39,39]],[["LK",4,44,44]]],
      ["w18-31 | Heals A Leper","galilee",[["MK",1,40,45]],[["MT",8,2,4]],[["LK",5,12,16]]],
      ["w18-31 | The Paralytic Lowered Through The Roof","capernaum",[["MK",2,1,12]],[["MT",9,1,8]],[["LK",5,17,26]]],
      ["w18-31 | Call Of Levi Matthew","capernaum",[["MK",2,13,14]],[["MT",9,9,9]],[["LK",5,27,28]]],
      ["w18-31 | Matthew's Feast","capernaum",[["MK",2,15,16],["LK",5,31,31],["MT",9,13,13]],[["MT",9,10,13]],[["MK",2,15,17]],[["LK",5,29,32]]],
      ["w18-31 | The Pharisees Question Jesus About Fasting","capernaum",[["LK",5,33,39]],[["MT",9,14,17]],[["MK",2,18,22]]],
      ["w18-31 | The Son Of Man Is Lord Even Of The Sabbath Day","capernaum",[["MT",12,1,7],["MK",2,27,28]],[["MT",12,1,8]],[["MK",2,23,28]],[["LK",6,1,5]]],
      ["w18-31 | Healing The Crippled Hand Man On The Sabbath","capernaum",[["MT",12,9,9],["LK",6,7,11],["MK",3,6,6]],[["MT",12,9,14]],[["MK",3,1,6]],[["LK",6,6,11]]],
      ["w18-31 | Here Is My Servant Whom I Have Chosen","capernaum",[["MT",12,15,21]]]
    ]
  },
  {"Week 18-31 | The Sermon On The Mount In Galilee":
    [
      ["w18-31 | Choosing The Twelve Apostles","capernaum",[["LK",6,12,16]],[["MT",10,1,4]],[["MK",3,13,19]]],
      ["w18-31 | Sending Out The Twelve Apostles","capernaum",[["MT",10,5,16]]],
      ["w18-31 | When People Mistreat You In One Town, Hurry To Another One","capernaum",[["MT",10,23,23]]],
      ["w18-31 | Healing Before Sermon On The Mount","capernaum",[["LK",6,17,19]],[["MK",3,7,12]]],
      ["w18-31 | Sitting Down For The Sermon On The Mount","capernaum",[["MT",5,1,1]]],
      ["w18-31 | Blessed Statements","capernaum",[["MT",5,2,12]],[["LK",6,20,26]]],
      ["w18-31 | The Importance Of The Law","capernaum",[["MT",5,17,20]],[["LK",16,17,17]]],
      ["w18-31 | Being Angry Is Like Killing","capernaum",[["MT",5,21,26]],[["LK",12,57,59]]],
      ["w18-31 | Allowing Sexual Thoughts Is Sin","capernaum",[["MT",5,27,28]],[["MT",5,27,30]]],
      ["w18-31 | Divorce And Remarriage","capernaum",[["MT",5,31,32]],[["LK",16,18,18]]],
      ["w18-31 | Keep Promises, Never Swear","capernaum",[["MT",5,33,37]]],
      ["w18-31 | Love Your Enemies","capernaum",[["MT",5,38,48]],[["LK",6,27,36]]],
      ["w18-31 | Giving","capernaum",[["MT",6,1,4]]],
      ["w18-31 | Prayer, Our Father In Heaven","capernaum",[["MT",6,5,15]],[["LK",11,1,4]]],
      ["w18-31 | Fasting / Worship","capernaum",[["MT",6,16,18]]],
      ["w18-31 | Don’t Judge","capernaum",[["MT",7,1,2],["LK",6,39,39],["MT",7,3,5]],[["MT",7,1,5]],[["LK",6,37,42]]],
      ["w18-31 | Pearls Before Pigs","capernaum",[["MT",7,6,6]]],
      ["w18-31 | The Most Important Rule","capernaum",[["MT",7,12,12]]],
      ["w18-31 | You Know False Prophets By Their Acts","capernaum",[["MT",7,15,20]],[["LK",6,43,45]]],
      ["w18-31 | The Foundation You Build On","capernaum",[["LK",6,46,49]],[["MT",7,24,27]]],
      ["w18-31 | Jesus Teaches With Authority","capernaum",[["MT",7,28,29]]],
      ["w18-31 | End Of Sermon On The Mount","capernaum",[["MT",8,1,1],["LK",7,1,1]],[["MT",8,1,1]],[["LK",7,1,1]]]
    ]
  },
  {"Week 18-31 | The Galilean Ministry Continues":
    [
      ["w18-31 | An Army Officer’s Faith","capernaum",[["MT",8,5,13]],[["LK",7,2,10]]],
      ["w18-31 | Two Blind Men's Faith","capernaum",[["MT",9,27,31]]],
      ["w18-31 | A Dumb Demoniac","capernaum",[["MT",9,32,34]]],
      ["w18-31 | Second Galilean Tour","galilee",[["LK",8,1,3]],[["MT",9,35,35]]],
      ["w18-31 | Raises The Son Of A Widow In Nain","nain",[["LK",7,11,17]]],
      ["w18-31 | Questioning The Source Of Jesus' Power","galilee",[["LK",11,14,23]],[["MT",12,22,30]],[["MK",3,20,27]]],
      ["w18-31 | The Unpardonable Sin","galilee",[["MK",3,28,30],["MT",12,34,37]],[["MT",12,31,37]],[["MK",3,28,30]],[["LK",12,10,10]]],
      ["w18-31 | Sign Of Jonah: Three Days And Three Nights","galilee",[["MT",12,38,42]],[["LK",11,29,32]]],
      ["w18-31 | Returning Evil Spirits","galilee",[["MT",12,43,45]],[["LK",11,24,26]]],
      ["w18-31 | Who Obeys God Are Truly Blessed","galilee",[["LK",11,27,28]]],
      ["w18-31 | Jesus' True Family","galilee",[["MT",12,46,50]],[["MK",3,31,35]],[["LK",8,19,21]]]
    ]
  },
  {"Week 18-31 | The Sermon By The Sea In Galilee":
    [
      ["w18-31 | The Sermon By The Sea (Gathering)","galilee-shore",[["MT",13,1,2]],[["MK",4,1,1]],[["LK",8,4,4]]],
      ["w18-31 | A Story About Planting Seed","galilee-shore",[["MK",4,2,10],["MT",13,11,18],["LK",8,11,15]],[["MT",13,3,23]],[["MK",4,2,20]],[["LK",8,5,15]]],
      ["w18-31 | Be The Light For Others","galilee-shore",[["MT",5,14,16],["MK",4,22,24],["LK",8,18,18]],[["MT",5,14,16]],[["MK",4,21,25]],[["LK",8,16,18]]],
      ["w18-31 | By Itself The Earth Produces Grain","galilee-shore",[["MK",4,26,29]]],
      ["w18-31 | Wheat And Weeds","galilee-shore",[["MT",13,24,30]]],
      ["w18-31 | Mustard Seed","galilee-shore",[["MT",13,31,32]],[["MK",4,30,32]],[["LK",13,18,19]]],
      ["w18-31 | Yeast","galilee-shore",[["MT",13,33,33]],[["LK",13,20,21]]],
      ["w18-31 | Teaching By Stories","galilee-shore",[["MK",4,33,34],["MT",13,35,35]],[["MT",13,34,35]],[["MK",4,33,34]]],
      ["w18-31 | The Treasure And The Pearl","galilee-shore",[["MT",13,44,46]]],
      ["w18-31 | Fishing Net","galilee-shore",[["MT",13,47,50]]],
      ["w18-31 | Teacher Of Law Who Became Followers","galilee-shore",[["MT",13,51,52]]],
      ["w18-31 | Jesus Finishes The Sermon By The Sea","galilee-shore",[["MK",4,35,35]],[["MT",8,18,18]]],
      ["w18-31 | Cost Of Following Jesus","galilee-shore",[["MT",8,19,21],["LK",9,60,62]],[["MT",8,19,22]],[["LK",9,57,62]]],
      ["w18-31 | End Of Sermon By The Sea","galilee-shore",[["MK",4,36,36]],[["MT",8,23,23]],[["LK",8,22,22]]],
      ["w18-31 | Wheat And Weeds Explanation","galilee-shore",[["MT",13,36,43]]]
    ]
  },
  {"Week 18-31 | The Galilean Ministry Goes On":
    [
      ["w18-31 | Jesus Calms A Storm","lake-galilee",[["LK",8,23,25]],[["MT",8,24,27]],[["MK",4,37,41]]],
      ["w18-31 | The Demoniacs Of Gadara","gadara",[["MK",5,1,20]],[["MT",8,28,34]],[["LK",8,26,39]]],
      ["w18-31 | Back To The Galilee Side Of The Lake","galilee-shore",[["LK",8,40,40]],[["MT",9,1,1]],[["MK",5,21,21]]],
      ["w18-31 | Raises Jairus' Daughter","galilee",[["MK",5,22,24],["LK",8,43,56]],[["MT",9,18,26]],[["MK",5,22,43]],[["LK",8,41,56]]],
      ["w18-31 | John Asks For Affirmation From Jesus","galilee",[["MT",11,2,6]],[["LK",7,18,23]]],
      ["w18-31 | Jesus' Testimony About John","galilee",[["LK",7,24,28],["LK",16,16,16],["LK",7,29,30],["MT",11,14,15],["LK",7,31,35]],[["MT",11,7,19]],[["LK",7,24,35]]],
      ["w18-31 | Jesus Warns Unbelievers","galilee",[["MT",11,20,24]],[["LK",10,12,15]]],
      ["w18-31 | Jesus Praises The Father","galilee",[["LK",10,21,24]],[["MT",11,25,27]]],
      ["w18-31 | Jesus Offers Easier Burden","galilee",[["MT",11,28,30]]],
      ["w18-31 | A Prophet Is Not Honored In His Hometown","nazareth",[["MK",6,1,6]],[["MT",13,53,58]]],
      ["w18-31 | Jesus Helps A Non-Jewish Woman","tyre",[["MK",7,24,24],["MT",15,22,25],["MK",7,27,27],["MT",15,27,28]],[["MT",15,21,28]],[["MK",7,24,30]]],
      ["w18-31 | A Deafmute Healed","decapolis-shore",[["MK",7,31,37],["MT",15,30,31]],[["MT",15,29,31]],[["MK",7,31,37]]],
      ["w18-31 | Third Galilean Tour","galilee",[["MT",9,36,38]]],
      ["w18-31 | Sending Out The Twelve Apostles","galilee",[["LK",9,1,6]],[["MK",6,7,13]]],
      ["w18-31 | Continue The Galilean Tour","galilee",[["MT",11,1,1]]],
      ["w31 | Herod Is Tricked To Get John Killed","galilee",[["MK",6,21,28]],[["MT",14,6,11]]]
    ]
  },
  {"Week 31 | Feast Of Trumpets In Galilee":
    [
      ["w31 | Jesus Hears About John's Death, The Apostles Return","bethsaida",[["MT",14,12,12],["LK",9,10,10]],[["MT",14,12,13]],[["MK",6,29,32]],[["LK",9,10,10]],[["JN",6,1,1]]],
      ["w31 | More Than Five Thousand Fed","bethsaida",[["MK",6,33,36],["MT",14,16,16],["JN",6,7,9],["LK",9,14,14],["MK",6,40,42],["JN",6,12,15],[]],[["MT",14,14,21]],[["MK",6,33,44]],[["LK",9,11,17]],[["JN",6,2,15]]],
      ["w31 | Jesus And Peter Walks On The Lake","lake-galilee",[["MT",14,22,33],["MK",6,52,52],["MT",14,34,36]],[["MT",14,22,36]],[["MK",6,45,56]],[["JN",6,16,21]]],
      ["w31 | Feast Of The Day Of Trumpets","gennesaret",[["JN",6,22,71]]],
      ["w31 | Hypocrite Hand Wash","gennesaret",[["MK",7,1,5],["MT",15,3,9],["MK",7,15,15],["LK",11,40,40],["LK",11,41,54],["MT",15,12,20]],[["MT",15,1,20]],[["MK",7,1,23]],[["LK",11,37,54]]]
    ]
  },
  {"Week 31-32 | The Galilean Ministry Continues":
    [
      ["w31 | Herod Hears About Jesus","n/a",[["LK",9,7,9]],[["MT",14,1,2]],[["MK",6,14,16]]],
      ["w32 | More Than Four Thousand Fed","decapolis-shore",[["MK",8,1,4],["MT",15,34,39]],[["MT",15,32,39]],[["MK",8,1,10]]],
      ["w32 | Beware Of The Yeast Of The Pharisees","magadan",[["MT",16,1,3],["MK",8,12,20],["MT",16,11,12]],[["MT",16,1,12]],[["MK",8,11,21]]],
      ["w32 | Jesus Heals A Blind Man","bethsaida",[["MK",8,22,26]]]
    ]
  },
  {"Week 32-33 | Day Of Atonement In Caesarea Philippi":
    [
      ["w32 | Peter Says Jesus Is The Savior","caesarea-philippi",[["MK",8,27,27],["MT",16,14,23],["LK",9,23,25],["MK",8,38,38]],[["MT",16,13,27]],[["MK",8,27,38]],[["LK",9,18,26]]],
      ["w32 | Some Of You Will See The Kingdom Of God Before They Die","caesarea-philippi",[["MT",16,28,28]],[["MK",9,1,1]],[["LK",9,27,27]]],
      ["w33 | Day Of Atonement","caesarea-philippi",[["MT",17,1,1],["LK",9,29,35],["MT",17,6,13]],[["MT",17,1,13]],[["MK",9,2,13]],[["LK",9,28,36]]],
      ["w33 | Forcing Out A Difficult Evil Spirit","caesarea-philippi",[["LK",9,37,37],["MK",9,16,28],["MT",17,20,21]],[["MT",17,14,21]],[["MK",9,14,29]],[["LK",9,37,43]]]
    ]
  },
  {"Week 33 | Back To Galilee":
    [
      ["w33 | Jesus Talks About His Death","galilee",[["MK",9,30,31],["LK",9,45,45]],[["MT",17,22,23]],[["MK",9,30,32]],[["LK",9,43,45]],[["JN",7,1,1]]],
      ["w33 | Temple Tax","capernaum",[["MT",17,24,27]]],
      ["w33 | Jesus’ Brothers Don’t Believe","capernaum",[["JN",7,2,9]]],
      ["w33 | Who Is The Greatest?","capernaum",[["MK",9,33,37]],[["MT",18,1,5]],[["LK",9,46,48]]],
      ["w33 | Anyone Not Against Us Is For Us","capernaum",[["MK",9,38,40]],[["LK",9,49,50]]],
      ["w33 | Don't Cause Stumble","capernaum",[["MT",18,6,9],["MK",9,49,49]],[["MT",18,6,9]],[["MK",9,42,49]],[["LK",17,1,2]]],
      ["w33 | Salt And Light","capernaum",[["MT",5,13,13]],[["MK",9,50,50]],[["LK",14,34,35]]],
      ["w33 | The Lost Sheep","capernaum",[["LK",15,1,7],["MT",18,14,14]],[["MT",18,10,14]],[["LK",15,1,7]]],
      ["w33 | The Lost Coin","capernaum",[["LK",15,8,10]]],
      ["w33 | The Wasteful Son","capernaum",[["LK",15,11,32]]],
      ["w33 | Warn Others If They Are Wrong","capernaum",[["MT",18,15,18]],[["LK",17,3,3]]],
      ["w33 | Accepting Apology","capernaum",[["MT",18,21,22]],[["LK",17,4,4]]],
      ["w33 | If You Come Together In My Name, I Am There With You","capernaum",[["MT",18,19,20]]],
      ["w33 | An Unforgiving Servant","capernaum",[["MT",18,23,35]]]
    ]
  },
  {"Week 33-35 | Feast Of Tabernacles In Jerusalem":
    [
      ["w33 | Jesus Goes To Jerusalem At The Feast Of Tabernacles","galilee",[["LK",9,51,56],["JN",7,11,13]],[["LK",9,51,56]],[["JN",7,10,13]]],
      ["w33 | The Ten Lepers","galilee-samaria",[["LK",17,11,19]]],
      ["w33 | Arrival To Judea To The Other Side Of The Jordan","jordan-in-judea",[["MT",19,1,2]],[["MK",10,1,1]]],
      ["w34 | Teaching In The Temple At Feast Of Tabernacles","jerusalem",[["JN",7,14,36]]],
      ["w34 | Last Great Day Of Tabernacles","jerusalem",[["JN",7,37,53]]],
      ["w34 | The Woman Caught In Adultery","jerusalem",[["JN",8,1,11]]],
      ["w34 | Jesus Declares: I Am The Light Of The World","jerusalem",[["JN",8,12,30]]],
      ["w34 | The True Sons Of The Heavenly Father","jerusalem",[["JN",8,31,59]]],
      ["w35 | The Man Born Blind","jerusalem",[["JN",9,1,41]]]
    ]
  },
  {"Week 35-43 | Ministry In Judea":
    [
      ["w35-36 | The Good Shepherd Gives His Life For The Sheep","judea",[["JN",10,1,21]]],
      ["w35-36 | Sending Out Seventy-Two Followers","judea",[["LK",10,1,11]]],
      ["w36-43 | Who Is My Neighbor?","judea",[["LK",10,25,37]]],
      ["w36-43 | Mary And Martha","bethany",[["LK",10,38,42]]],
      ["w36-43 | Urgent Need","judea",[["LK",11,5,8]]],
      ["w36-43 | Ask, And God Will Give To You","judea",[["LK",11,9,13]],[["MT",7,7,11]]],
      ["w36-43 | Eye Is A Light For The Body","judea",[["LK",11,33,33],["MT",6,22,23],["LK",11,35,36]],[["MT",6,22,23]],[["LK",11,33,36]]],
      ["w36-43 | Return Of The Seventy-Two","judea",[["LK",10,17,20]]],
      ["w36-43 | Fear God, Not People","judea",[["LK",12,1,7]],[["MT",10,26,31]]],
      ["w36-43 | Tell People About Your Faith","judea",[["MT",10,32,33]],[["LK",12,8,9]]],
      ["w36-43 | Greed","judea",[["LK",12,13,21]]],
      ["w36-43 | Seek God And God Takes Care Of You","judea",[["MT",6,25,27],["LK",12,26,26],["MT",6,28,33],["LK",12,32,32],["MT",6,34,34]],[["MT",6,25,34]],[["LK",12,22,32]]],
      ["w36-43 | Your Heart Will Be Where Your Treasure Is","judea",[["MT",6,19,21]],[["LK",12,33,34]]],
      ["w36-43 | I Have Come To Separate The Trues And The Falses","judea",[["LK",12,49,51],["MT",10,35,36]],[["MT",10,34,36]],[["LK",12,49,53]]],
      ["w36-43 | Following Jesus Requires Engagement","judea",[["LK",14,25,33]],[["MT",10,37,39]]],
      ["w36-43 | Signs Of Times","judea",[["LK",12,54,56]]],
      ["w36-43 | Change Your Hearts","judea",[["LK",13,1,9]]],
      ["w36-43 | Jesus Heals On The Sabbath","judea",[["LK",13,10,17]]],
      ["w36-43 | On The Way To Jerusalem","judea",[["LK",13,22,22]]],
      ["w36-43 | The Narrow Path","judea",[["LK",13,23,23],["MT",7,13,14]],[["MT",7,13,14]],[["LK",13,23,24]]],
      ["w36-43 | Who Obeys God Enters To Heaven","judea",[["MT",7,21,23]],[["LK",13,25,30]]],
      ["w36-43 | Jesus Send A Message To Herod","judea",[["LK",13,31,33]]]
    ]
  },
  {"Week 43 | Hanukkah, The Feast Of Victory Over Religious Unification In Jerusalem":
    [
      ["w43 | Jesus Judges Jerusalem","jerusalem",[["MT",23,37,39]],[["LK",13,34,35]]],
      ["w43 | Eating With A Chief Pharisee: Healing On Sabbath","jerusalem",[["LK",14,1,6]]],
      ["w43 | Power Or Influence","jerusalem",[["LK",14,7,14]]],
      ["w43 | At The Feast Of Dedication (Hanukkah)","jerusalem",[["JN",10,22,39]]]
    ]
  },
  {"Week 43-62 | Ministry In Judea Goes On":
    [
      ["w43-62 | Arrival To Judea To The Other Side Of The Jordan","bethany",[["JN",10,40,42]]],
      ["w43-62 | It's Hard For The Rich To Enter God's Kingdom","judea",[["LK",18,18,19],["MK",10,19,31]],[["MT",19,16,30]],[["MK",10,17,31]],[["LK",18,18,30]]],
      ["w43-62 | Jealous Vineyard Workers","judea",[["MT",20,1,16]]],
      ["w43-62 | Be Trusted With A Little","judea",[["LK",16,1,12]]],
      ["w43-62 | God Or Worldly Riches","judea",[["LK",16,13,15]],[["MT",6,24,24]]],
      ["w43-62 | The Rich Man And The Poor Lazarus","judea",[["LK",16,19,31]]],
      ["w43-62 | The Faith Size Of A Mustard Seed","judea",[["LK",17,5,6]]],
      ["w43-62 | Don't Expect Thanks For Doing Your Job","judea",[["LK",17,7,10]]],
      ["w43-62 | God’s Kingdom Is Within You","judea",[["LK",17,20,22]]],
      ["w43-62 | God Will Answer His People","judea",[["LK",18,1,8]]],
      ["w43-62 | Prayer Of A Pharisee And A Tax Collector","judea",[["LK",18,9,14]]],
      ["w43-62 | About Divorce","judea",[["MT",19,3,12]],[["MK",10,2,12]]],
      ["w43-62 | Kingdom Of God Belongs To People Who Are Like Children","judea",[["MK",10,13,16]],[["MT",19,13,15]],[["LK",18,15,17]]],
      ["w43-62 | Raises Lazarus","bethany",[["JN",11,1,44]]],
      ["w43-62 | Priests Decide To Kill Jesus","bethany",[["JN",11,45,57]]],
      ["w43-62 | Jesus Talks About His Death In Details","ephraim",[["LK",18,31,34]],[["MT",20,17,19]],[["MK",10,32,34]]],
      ["w43-62 | The Ambition Of James And John","judea",[["MK",10,35,45]],[["MT",20,20,28]]],
      ["w43-62 | Blind Men Of Jericho (Bartimaeus)","jericho",[["MK",10,46,46],["MT",20,30,34]],[["MT",20,29,34]],[["MK",10,46,52]],[["LK",18,35,43]]],
      ["w43-62 | Zacchaeus A Chief Tax Collector Changes His Heart","jericho",[["LK",19,2,10]],[["LK",19,1,10]]],
      ["w43-62 | Talents","jericho",[["LK",19,11,28]],[["MT",25,14,30]]]
    ]
  },
  {"Week 62 | The Week Before The Second Passover In Jerusalem":
    [
      ["w62 | Anointing By Mary","bethany",[["JN",12,1,9]],[["MT",26,6,13]],[["MK",14,3,9]],[["LK",7,36,50]]],
      ["w62 | Priests Plan To Kill Jesus And Lazarus","jerusalem",[["JN",12,10,11],["LK",22,2,2]],[["MT",26,1,5]],[["MK",14,1,2]],[["LK",22,1,2]],[["JN",12,10,11]]],
      ["w62 | Judas Comes To An Agreement With The Priests","jerusalem",[["LK",22,3,6]],[["MT",26,14,16]],[["MK",14,10,11]]],
      ["w62 | In Jerusalem, People Greets Jesus As The King","jerusalem",[["MK",11,1,3],["MT",21,4,7],["JN",12,17,18],["MK",11,8,10],["LK",19,39,40],["JN",12,19,19],["LK",19,41,44],["MT",21,10,11],["MK",11,11,11]],[["MT",21,1,11]],[["MK",11,1,11]],[["LK",19,29,44]],[["JN",12,12,19]]],
      ["w62 | Jesus Curses A Fruitless Fig Tree","jerusalem",[["MK",11,12,14]],[["MT",21,18,19]]],
      ["w62 | Second Cleansing Of The Temple","jerusalem",[["MK",11,15,17],["MT",21,14,17]],[["MT",21,12,17]],[["MK",11,15,19]],[["LK",19,45,48]]],
      ["w62 | The Fig Tree Has Dried Up By Next Morning","jerusalem",[["MK",11,20,26]],[["MT",21,20,22]]],
      ["w62 | The Leaders Challenge Jesus' Authority","jerusalem",[["MK",11,27,33]],[["MT",21,23,27]],[["LK",20,1,8]]],
      ["w62 | The Two Sons Of The Vineyard Owner","jerusalem",[["MT",21,28,32]]],
      ["w62 | The Evil Vineyard Farmers","jerusalem",[["MT",21,33,46]],[["MK",12,1,12]],[["LK",20,9,19]]],
      ["w62 | The Wedding Feast Of The King's Son","jerusalem",[["MT",22,1,14]],[["LK",14,15,24]]],
      ["w62 | Give To Caesar And To God As Belongs","jerusalem",[["MT",22,15,22]],[["MK",12,13,17]],[["LK",20,20,26]]],
      ["w62 | Sadducees About Resurrection","jerusalem",[["MT",22,23,28],["LK",20,34,40]],[["MT",22,23,33]],[["MK",12,18,27]],[["LK",20,27,40]]],
      ["w62 | The Most Important Command","jerusalem",[["MK",12,28,34]],[["MT",22,34,40]]],
      ["w62 | How Can The Christ Be David's Son?","jerusalem",[["MT",22,41,46]],[["MK",12,35,37]],[["LK",20,41,44]]],
      ["w62 | How Terrible For You Teachers Of The Law And Pharisees","jerusalem",[["MT",23,1,36]],[["MK",12,38,40]],[["LK",20,45,47]]],
      ["w62 | The Widow's Cents","jerusalem",[["MK",12,41,44]],[["LK",21,1,4]]],
      ["w62 | Visitors From The West At The End Of Jesus' Life","jerusalem",[["JN",12,20,36]]],
      ["w62 | Whoever Believes In Jesus Believes In The One","jerusalem",[["JN",12,37,50]]],
      ["w62 | End Of Jesus' Public Ministry","jerusalem",[["LK",21,34,38]]],
      ["w62 | Not One Stone Will Be Left On Another","jerusalem",[["LK",21,5,6]],[["MT",24,1,2]],[["MK",13,1,2]]],
      ["w62 | False Prophets, Wars, Sicknesses, Lack Of Food","jerusalem",[["LK",21,7,11]],[["MT",24,3,8]],[["MK",13,3,8]]],
      ["w62 | Persecution","jerusalem",[["MK",13,9,10]],[["MT",10,17,18]],[["LK",21,12,13]]],
      ["w62 | Torture, Executions","jerusalem",[["JN",16,1,3],["MT",24,10,14]],[["MT",24,9,14]],[["JN",16,1,4]]],
      ["w62 | Don't Worry ABout What To Say Then","jerusalem",[["LK",12,11,12]],[["MT",10,19,20]],[["MK",13,11,11]]],
      ["w62 | The Holy Spirit Will Speak Through You","jerusalem",[["LK",21,14,15]]],
      ["w62 | Relatives, Friends Will Give Each Other To Be Killed","jerusalem",[["MT",10,21,22]],[["MK",13,12,13]],[["LK",21,16,19]]],
      ["w62 | Run Away To The Mountains","jerusalem",[["MT",24,15,15],["LK",21,21,22]],[["MT",24,15,16]],[["MK",13,14,14]],[["LK",21,20,22]]],
      ["w62 | Leave Immediately","jerusalem",[["LK",17,31,33]],[["MT",24,17,18]],[["MK",13,15,16]]],
      ["w62 | There Will Be More Trouble Than Ever","jerusalem",[["MT",24,19,21],["LK",21,24,24],["MT",24,22,22]],[["MT",24,19,22]],[["MK",13,17,20]],[["LK",21,23,24]]],
      ["w62 | Self-Appointed Christs, False Prophets","jerusalem",[["MT",24,23,27]],[["MK",13,21,23]],[["LK",17,23,25]]],
      ["w62 | As Right Before The Great Flood","jerusalem",[["LK",17,26,30]],[["MT",24,37,39]]],
      ["w62 | Then Jesus Comes Again","jerusalem",[["MT",24,29,31],["LK",21,28,28]],[["MT",24,29,31]],[["MK",13,24,27]],[["LK",21,25,28]]],
      ["w62 | One Will Be Taken And The Other Will Be Left","jerusalem",[["LK",17,34,36]],[["MT",24,40,41]]],
      ["w62 | Vultures","jerusalem",[["LK",17,37,37]],[["MT",24,28,28]]],
      ["w62 | The Signs Of Jesus' Coming","jerusalem",[["MT",24,32,36]],[["MK",13,28,32]],[["LK",21,29,33]]],
      ["w62 | Always Be Ready","jerusalem",[["LK",12,39,40]],[["MT",24,42,44]],[["MK",13,33,33]]],
      ["w62 | The Reliable And The Disloyal Servant","jerusalem",[["MT",24,45,47],["LK",12,45,48],["MK",13,37,37]],[["MT",24,45,51]],[["MK",13,34,37]],[["LK",12,41,48]]],
      ["w62 | The Ten Virgins","jerusalem",[["MT",25,1,13]],[["LK",12,35,38]]],
      ["w62 | The Sheep And The Goats","jerusalem",[["MT",25,31,46]]]
    ]
  },
  {"Week 63 | The Day Before Passover Eve":
    [
      ["w63 | Preparation For The Last Supper","jerusalem",[["LK",22,7,13]],[["MT",26,17,20]],[["MK",14,12,17]]],
      ["w63 | The New Agreement","jerusalem",[["LK",22,14,16],["LK",22,19,19],["MT",26,27,28],["LK",22,18,18]],[["MT",26,26,29]],[["MK",14,22,25]],[["LK",22,14,20]]],
      ["w63 | The Leader Should Be Like The Servant","jerusalem",[["LK",22,24,30]]],
      ["w63 | Jesus Washes His Followers’ Feet","jerusalem",[["JN",13,1,15]]],
      ["w63 | A Servant Is Not Greater Than His Master","jerusalem",[["JN",13,16,17]],[["MT",10,24,25]],[["LK",6,40,40]]],
      ["w63 | Whoever Accepts Jesus, Accepts The One","jerusalem",[["LK",10,16,16]],[["MT",10,40,42]],[["MK",9,41,41]],[["JN",13,20,20]]],
      ["w63 | One Of You Will Turn Against Me","jerusalem",[["JN",13,18,19]]],
      ["w63 | Judas - The Literal And Symbolic Yeast - Is Leaving","jerusalem",[["JN",13,21,30]],[["MT",26,21,25]],[["MK",14,18,21]],[["LK",22,21,23]]],
      ["w63 | Love Each Other","jerusalem",[["JN",13,31,35]]],
      ["w63 | Leaving To The Mount Of Olives","jerusalem",[["MT",26,30,30]],[["MK",14,26,26]],[["LK",22,39,39]]],
      ["w63 | You Will All Stumble In Your Faith","jerusalem",[["MT",26,31,32],["LK",22,31,34],["MK",14,31,31]],[["MT",26,31,35]],[["MK",14,27,31]],[["LK",22,31,34]],[["JN",13,36,38]]],
      ["w63 | Now Carry Money And Sword With You","jerusalem",[["LK",22,35,38]]],
      ["w63 | Ask Me For Anything In My Name","jerusalem",[["JN",14,1,14]]],
      ["w63 | Jesus Promises The Holy Spirit","jerusalem",[["JN",14,15,31]]],
      ["w63 | Jesus Is Like A Vine","jerusalem",[["JN",15,1,17]]],
      ["w63 | The Followers And The World","jerusalem",[["JN",15,18,25]]],
      ["w63 | Tell People About Me","jerusalem",[["JN",15,26,27]]],
      ["w63 | The Work Of The Holy Spirit","jerusalem",[["JN",16,5,15]]],
      ["w63 | Sadness Will Become Happiness","jerusalem",[["JN",16,16,24]]],
      ["w63 | Be Brave: I Have Defeated The World","jerusalem",[["JN",16,25,33]]],
      ["w63 | Jesus Prays For His Followers","jerusalem",[["JN",17,1,26]]]
    ]
  },
  {"Week 63 | Jesus Is Arrested And Executed On The Day Of Passover Eve":
    [
      ["w63 | Gethsemane: Father, Do What You Want","jerusalem",[["MT",26,36,46]],[["MK",14,32,42]],[["LK",22,40,46]],[["JN",18,1,1]]],
      ["w63 | Gethsemane: Jesus Is Arrested","jerusalem",[["LK",22,47,51],["MT",26,52,54],["JN",18,4,7],["MK",14,48,49],["JN",18,8,8],["MK",14,50,50],["JN",18,9,9],["JN",18,12,12]],[["MT",26,47,56]],[["MK",14,43,52]],[["LK",22,47,53]],[["JN",18,2,12]]],
      ["w63 | Hearing Before Annas","jerusalem",[["JN",18,13,24]]],
      ["w63 | Jesus is Led To Caiaphas","jerusalem",[["MK",14,53,54]],[["MT",26,57,58]],[["LK",22,54,55]]],
      ["w63 | Trial Before The Leaders At Caiaphas","jerusalem",[["MT",26,59,67],["LK",22,64,64]],[["MT",26,59,68]],[["MK",14,55,65]],[["LK",22,63,71]]],
      ["w63 | Peter Says He Doesn’t Know Jesus","jerusalem",[["MT",26,69,75]],[["MK",14,66,72]],[["LK",22,56,62]],[["JN",18,25,27]]],
      ["w63 | Judas' Confession And Suicide","jerusalem",[["MT",27,3,10]]],
      ["w63 | Jesus Is Turned Over To Pilates","jerusalem",[["JN",18,28,28]],[["MT",27,1,2]],[["MK",15,1,1]],[["LK",23,1,1]]],
      ["w63 | Pilate Questions Jesus","jerusalem",[["JN",18,29,30],["MT",27,12,13],["MK",15,3,5],["JN",18,31,38],["LK",23,5,5]],[["MT",27,11,14]],[["MK",15,2,5]],[["LK",23,2,5]],[["JN",18,29,38]]],
      ["w63 | Pilate Sends Jesus to Herod","jerusalem",[["LK",23,6,12]]],
      ["w63 | Pilate Declares: Jesus Is Not Guilty","jerusalem",[["LK",23,13,16]]],
      ["w63 | Jesus Or Barabbas","jerusalem",[["MK",15,6,7],["MT",27,17,20],["LK",23,18,18],["LK",23,20,22]],[["MT",27,15,23]],[["MK",15,6,14]],[["LK",23,17,22]],[["JN",18,39,40]]],
      ["w63 | Pilate Whips Jesus, The Soldiers Shame Him","jerusalem",[["MT",27,27,30]],[["MK",15,16,19]],[["JN",19,1,3]]],
      ["w63 | Pilate Argues For Jesus Against The People","jerusalem",[["JN",19,4,15]]],
      ["w63 | Pilate Washing His Hands","jerusalem",[["MT",27,24,25],["JN",19,16,16]],[["MT",27,24,26]],[["MK",15,15,15]],[["LK",23,23,25]],[["JN",19,16,16]]],
      ["w63 | The Soldiers Get Jesus Dressed In His Own Clothes","jerusalem",[["MK",15,20,20]],[["MT",27,31,31]]],
      ["w63 | The Way To Golgota","jerusalem",[["MT",27,32,32],["LK",23,27,32],["MK",15,22,23]],[["MT",27,32,34]],[["MK",15,21,23]],[["LK",23,26,32]],[["JN",19,17,17]]],
      ["w63 | The Crucifixion","jerusalem",[["LK",23,33,33],["MK",15,25,25],["JN",19,19,22],["LK",23,34,34],["JN",19,23,27]],[["MT",27,35,37]],[["MK",15,24,26]],[["LK",23,33,34]],[["JN",19,18,27]]],
      ["w63 | Jesus Is Insulted On The Cross","jerusalem",[["MT",27,38,43],["LK",23,39,43]],[["MT",27,38,44]],[["MK",15,27,32]],[["LK",23,35,43]]],
      ["w63 | Jesus Dies","jerusalem",[["MT",27,45,46],["JN",19,28,28],["MT",27,47,47],["JN",19,29,29],["MT",27,49,49],["LK",23,46,46],["MT",27,51,51],["JN",19,31,37]],[["MT",27,45,51]],[["MK",15,33,38]],[["LK",23,44,46]],[["JN",19,28,37]]],
      ["w63 | Witnesses Around The Cross","jerusalem",[["MT",27,54,54],["LK",23,48,49],["MT",27,56,56]],[["MT",27,54,56]],[["MK",15,39,41]],[["LK",23,47,49]]],
      ["w63 | Joseph Asks Pilate For Jesus' Body","jerusalem",[["LK",23,50,51],["MK",15,42,42],["LK",23,52,52],["MK",15,44,45]],[["MT",27,57,58]],[["MK",15,42,45]],[["LK",23,50,52]],[["JN",19,38,38]]],
      ["w63 | Joseph Wraps Body Without Spices, Puts In Tomb, Rolls Stone, He And Women Leave","jerusalem",[["MT",27,59,59],["JN",19,41,42],["LK",23,55,56]],[["MT",27,59,61]],[["MK",15,46,47]],[["LK",23,53,56]],[["JN",19,41,42]]],
      ["w63 | Joseph Comes Back With Nicodemus And Spices And Properly Buries The Body | The Women Don't See This Proper Burial        ","jerusalem",[["JN",19,39,40]]]
    ]
  },
  {"Week 63-70+ | God Rises Jesus Back To Life":
    [
      ["w63 | High Sabbath, Violated By Leaders Going To Pilate For Guard","jerusalem",[["MT",27,62,65]]],
      ["w63 | Roman Seal And Guard At The Tomb","jerusalem",[["MT",27,66,66]]],
      ["w63 | Jesus Is Raised To Life","jerusalem",[["MT",28,2,4]]],
      ["w63 | Firstfruits Are Raised To Life","jerusalem",[["MT",27,52,53]]],
      ["w63 | Mary M. Goes Alone To Tomb Before Sunrise And Finds It Opened","jerusalem",[["JN",20,1,1]]],
      ["w63 | Mary M. Runs To Tell Peter And John That Stone Is Missing","jerusalem",[["JN",20,2,2]]],
      ["w63 | Peter, John And Mary All Meet At The Tomb, Mary Stays, The Men Leave","jerusalem",[["JN",20,3,10]],[["LK",24,12,12]]],
      ["w63 | Other Mary And Salome Arrive To Tomb Bringing Spices","jerusalem",[["LK",24,1,1],["MK",16,3,3]],[["MT",28,1,1]],[["MK",16,1,3]],[["LK",24,1,1]]],
      ["w63 | The Other Women Meet With Mary M. At The Tomb","jerusalem",[["MK",16,4,4],["LK",24,3,3]],[["MK",16,4,4]],[["LK",24,2,3]]],
      ["w63 | Two Angels Let The Women Know That Jesus Is Raised To Life","jerusalem",[["LK",24,4,8]],[["MT",28,5,7]],[["MK",16,5,7]],[["JN",20,12,13]]],
      ["w63 | The Other Women Are Frightened And Run Away","jerusalem",[["MK",16,8,8]],[["MT",28,8,8]],[["LK",24,9,9]]],
      ["w63 | Maria Magdalene Stays At The Tomb","jerusalem",[["JN",20,11,11]]],
      ["w63 | Jesus Appears To Maria Magdalene","jerusalem",[["JN",20,14,14],["JN",20,16,17]],[["MK",16,9,9]],[["JN",20,14,17]]],
      ["w63 | Maria M. Joins To The Other Women And All Heading To The Apostles When Jesus Appears To Them","jerusalem",[["MT",28,9,10]]],
      ["w63 | The Leaders Bribe The Guards","jerusalem",[["MT",28,11,15]]],
      ["w63 | Women Let Followers Know, But They Don't Believe","jerusalem",[["LK",24,10,11]],[["MK",16,10,11]],[["JN",20,18,18]]],
      ["w63 | Jesus Joins To Two Of His Followers On Their Way To Emmaus","emmaus",[["LK",24,13,35]],[["MK",16,12,13]]],
      ["w63 | Jesus Appears In The Last Supper's Room","jerusalem",[["LK",24,36,49]],[["MK",16,14,14]],[["JN",20,19,23]]],
      ["w64 | Jesus Appears Again In The Presence Of Thomas","jerusalem",[["JN",20,24,29]]],
      ["w64-70 | The Ascension","jerusalem",[["ACT",1,6,11]],[["MK",16,19,19]]],
      ["w64-70 | The Followers Wait For The Holy Spirit By Praying Together","jerusalem",[["ACT",1,12,14]]],
      ["w70 | The Holy Spirit Baptise The Followers","jerusalem",[["ACT",2,1,4]]],
      ["Jesus Encourages Peter","galilee",[["JN",21,1,14]]],
      ["Jesus Triple Checks If Peter Regained His Faith","galilee",[["JN",21,15,24]]],
      ["Jesus Sends Out The Apostles To Everyone In The World","galilee",[["MT",28,16,19],["MK",16,16,18],["MT",28,20,20]],[["MT",28,16,20]],[["MK",16,15,18]]],
      ["The Apostles Tell The Good News To Eeveryone In The World","galilee",[["MK",16,20,20]]]
    ]
  }
];
export { timeline as default };