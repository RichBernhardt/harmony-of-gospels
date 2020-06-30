const timelineRaw = [
  {"Before Jesus' Public Ministry": [
    ["JN","","",[1,1,4],[1,1,18],"","The Word Became Human",false],
    ["","","",[1,5,25],"","","Angel Gabriel Appear To Zechariah, The Father Of John The Baptist","jerusalem"],
    ["","","",[1,26,38],"","","Angel Gabriel Appear To Jesus' Mother, Mary","nazareth"],
    ["","","",[1,39,56],"","","Mary Visits Elizabeth, The Mother Of John The Baptist","judea"],
    ["","","",[1,57,80],"","","Birth Of John The Baptist","judea"],
    ["",[1,18,25],"","","","","An Angel Appear To Jesus' Foster Father Joseph","nazareth"],
    ["","","",[2,1,7],"","","The Birth Of Jesus","bethlehem"],
    [[["LK",2,8,15],["MT",2,1,11],["LK",2,17,19],["MT",2,12,12],["LK",2,20,20]],[2,1,12],"",[2,8,20],"","","Visitors From The East At The Begining Of Jesus' Life","bethlehem"],
    ["","","",[2,21,21],"","","Jesus Is Circumcised","bethlehem"],
    [[["MT",1,1,17]],[1,1,17],"",[3,23,38],"","","The Family History Of Jesus",false],
    ["","","",[2,22,38],"","","Jesus Is Being Made Pure By Presented In The Temple","jerusalem"],
    ["",[2,13,18],"","","","","Escape To Egypt From King Herod",false],
    ["MT",[2,19,23],"",[2,39,40],"","","Return To Nazareth","nazareth"],
    ["","","",[2,41,50],"","","The Twelve Year Old Jesus On The Passover Feast","jerusalem"],
    ["","","",[2,51,52],"","","Jesus Grows Up","nazareth"]
  ]},
  {"Week 1-6 | Baptism By Water And First Followers In Judea": [
    ["MT",[3,13,17],[1,9,11],[3,21,22],"","1","The Baptism","bethany"],
    ["MT",[4,1,11],[1,12,13],[4,1,13],"","1-6","The Temptation","judea"],
    [[["LK",3,1,3],["MT",3,2,2],["MK",1,6,6],["JN",1,19,22],["LK",3,4,6],["MT",3,7,10],["LK",3,10,18],["JN",1,28,28]],[3,1,12],[1,1,8],[3,1,18],[1,19,28],"1-6","John The Baptist Prepares for Jesus","bethany-at-jordan"],
    ["","","","",[1,29,34],"6","John Declares: \"The Lamb Of God\"","bethany-at-jordan"],
    ["","","","",[1,35,42],"6","Jesus' First Followers: Andrew, Simon Peter,...","bethany-at-jordan"],
    ["","","","",[1,43,51],"6","More Followers: Philip And Nathanael","bethany-at-jordan"]
  ]},
  {"Week 7 | Jesus Visits His Family Of Origin In Galilee": [
    ["","","","",[2,1,11],"7","The Wedding At Cana","cana"],
    ["","","","",[2,12,12],"7","Jesus' Family Of Faith And Family Of Origin Together In Capernaum","capernaum"]
  ]},
  {"Week 8 | First Passover In Jerusalem, Ministry In Judea": [
    ["","","","",[2,13,17],"8","First Cleansing Of Temple For Passover","jerusalem"],
    ["","","","",[2,18,25],"8","Destroy This Temple And I Will Build It Again In Three Days","jerusalem"],
    ["","","","",[3,1,21],"9","Nicodemus Goes to Jesus To Talk","jerusalem"],
    ["","","","",[3,22,36],"9-15","The Ministry Is Being Taken Over From John To Jesus","judea"]
  ]},
  {"Week 9-15 | Back To Galilee": [
    ["","","","",[4,1,42],"9-15","The Samaritan Woman","jacobs-well"],
    ["","","","",[4,43,54],"9-15","Jesus Heals An Officer’s Son","cana"],
    [[["LK",3,19,19],["MK",6,19,20],["LK",3,20,20]],[14,3,5],[6,17,20],[3,19,20],"","9-15","Herod Puts John In Prison","galilee"]
  ]},
  {"Week 15 | Pentecost In Jerusalem": [
    ["","","","",[5,1,15],"15","Healing At Bethesda On Sabbath","jerusalem"],
    ["","","","",[5,16,47],"15","Jesus Is The Son Of God","jerusalem"]
  ]},
  {"Week 18-31 | Opening Of The Galilean Ministry": [
    ["MK",[4,12,12],[1,14,15],[4,14,15],"","16","Opening Of The Galilean Ministry","galilee"],
    ["","","",[4,16,30],"","16","Isaiah's Words Are Coming True","nazareth"],
    ["",[4,13,17],"","","","17","Jesus Teaches In Capernaum","capernaum"],
    [[["MK",1,16,16],["MK",1,19,19],["LK",5,1,1],["LK",5,3,9],["MK",1,17,17],["LK",5,11,11]],[4,18,22],[1,16,20],[5,1,11],"","17","The Call By The Sea: Simon Peter, Andrew, James And John Join Full Time","capernaum"],
    ["MK","",[1,21,28],[4,31,37],"","17","Forces Out An Evil Spirit In The Synagoge","capernaum"],
    [[["MK",1,29,34],["MT",8,17,17]],[8,14,17],[1,29,34],[4,38,41],"","17","Jesus Heals Many People At Peter's Home","capernaum"],
    ["MK","",[1,35,38],[4,42,43],"","18","Jesus Must Preach In Other Towns Too","capernaum"],
    ["MT",[4,23,25],[1,39,39],[4,44,44],"","18-31","First Galilean Tour","galilee"],
    ["MK",[8,2,4],[1,40,45],[5,12,16],"","18-31","Heals A Leper","galilee"],
    ["MK",[9,1,8],[2,1,12],[5,17,26],"","18-31","The Paralytic Lowered Through The Roof","capernaum"],
    ["MK",[9,9,9],[2,13,14],[5,27,28],"","18-31","Call Of Levi Matthew","capernaum"],
    [[["MK",2,15,16],["LK",5,31,31],["MT",9,13,13]],[9,10,13],[2,15,17],[5,29,32],"","18-31","Matthew's Feast","capernaum"],
    ["LK",[9,14,17],[2,18,22],[5,33,39],"","18-31","The Pharisees Question Jesus About Fasting","capernaum"],
    [[["MT",12,1,7],["MK",2,27,28]],[12,1,8],[2,23,28],[6,1,5],"","18-31","The Son Of Man Is Lord Even Of The Sabbath Day","capernaum"],
    [[["MT",12,9,9],["LK",6,7,11],["MK",3,6,6]],[12,9,14],[3,1,6],[6,6,11],"","18-31","Healing The Crippled Hand Man On The Sabbath","capernaum"],
    ["",[12,15,21],"","","","18-31","Here Is My Servant Whom I Have Chosen","capernaum"]
  ]},
  {"Week 18-31 | The Sermon On The Mount In Galilee": [
    ["LK",[10,1,4],[3,13,19],[6,12,16],"","18-31","Choosing The Twelve Apostles","capernaum"],
    ["",[10,5,16],"","","","18-31","Sending Out The Twelve Apostles","capernaum"],
    ["",[10,23,23],"","","","18-31","When People Mistreat You In One Town, Hurry To Another One","capernaum"],
    ["LK","",[3,7,12],[6,17,19],"","18-31","Healing Before Sermon On The Mount","capernaum"],
    ["",[5,1,1],"","","","18-31","Sitting Down For The Sermon On The Mount","capernaum"],
    ["MT",[5,2,12],"",[6,20,26],"","18-31","Blessed Statements","capernaum"],
    ["MT",[5,17,20],"",[16,17,17],"","18-31","The Importance Of The Law","capernaum"],
    ["MT",[5,21,26],"",[12,57,59],"","18-31","Being Angry Is Like Killing","capernaum"],
    [[["MT",5,27,28]],[5,27,30],"","","","18-31","Allowing Sexual Thoughts Is Sin","capernaum"],
    ["MT",[5,31,32],"",[16,18,18],"","18-31","Divorce And Remarriage","capernaum"],
    ["",[5,33,37],"","","","18-31","Keep Promises, Never Swear","capernaum"],
    ["MT",[5,38,48],"",[6,27,36],"","18-31","Love Your Enemies","capernaum"],
    ["",[6,1,4],"","","","18-31","Giving","capernaum"],
    ["MT",[6,5,15],"",[11,1,4],"","18-31","Prayer, Our Father In Heaven","capernaum"],
    ["",[6,16,18],"","","","18-31","Fasting / Worship","capernaum"],
    [[["MT",7,1,2],["LK",6,39,39],["MT",7,3,5]],[7,1,5],"",[6,37,42],"","18-31","Don’t Judge","capernaum"],
    ["",[7,6,6],"","","","18-31","Pearls Before Pigs","capernaum"],
    ["",[7,12,12],"","","","18-31","The Most Important Rule","capernaum"],
    ["MT",[7,15,20],"",[6,43,45],"","18-31","You Know False Prophets By Their Acts","capernaum"],
    ["LK",[7,24,27],"",[6,46,49],"","18-31","The Foundation You Build On","capernaum"],
    ["",[7,28,29],"","","","18-31","Jesus Teaches With Authority","capernaum"],
    [[["MT",8,1,1],["LK",7,1,1]],[8,1,1],"",[7,1,1],"","18-31","End Of Sermon On The Mount","capernaum"]
  ]},
  {"Week 18-31 | The Galilean Ministry Continues": [
    ["MT",[8,5,13],"",[7,2,10],"","18-31","An Army Officer’s Faith","capernaum"],
    ["",[9,27,31],"","","","18-31","Two Blind Men's Faith","capernaum"],
    ["",[9,32,34],"","","","18-31","A Dumb Demoniac","capernaum"],
    ["LK",[9,35,35],"",[8,1,3],"","18-31","Second Galilean Tour","galilee"],
    ["","","",[7,11,17],"","18-31","Raises The Son Of A Widow In Nain","nain"],
    ["LK",[12,22,30],[3,20,27],[11,14,23],"","18-31","Questioning The Source Of Jesus' Power","galilee"],
    [[["MK",3,28,30],["MT",12,34,37]],[12,31,37],[3,28,30],[12,10,10],"","18-31","The Unpardonable Sin","galilee"],
    ["MT",[12,38,42],"",[11,29,32],"","18-31","Sign Of Jonah: Three Days And Three Nights","galilee"],
    ["MT",[12,43,45],"",[11,24,26],"","18-31","Returning Evil Spirits","galilee"],
    ["","","",[11,27,28],"","18-31","Who Obeys God Are Truly Blessed","galilee"],
    ["MT",[12,46,50],[3,31,35],[8,19,21],"","18-31","Jesus' True Family","galilee"]
  ]},
  {"Week 18-31 | The Sermon By The Sea In Galilee": [
    ["MT",[13,1,2],[4,1,1],[8,4,4],"","18-31","The Sermon By The Sea (Gathering)","galilee-shore"],
    [[["MK",4,2,10],["MT",13,11,18],["LK",8,11,15]],[13,3,23],[4,2,20],[8,5,15],"","18-31","A Story About Planting Seed","galilee-shore"],
    [[["MT",5,14,16],["MK",4,22,24],["LK",8,18,18]],[5,14,16],[4,21,25],[8,16,18],"","18-31","Be The Light For Others","galilee-shore"],
    ["","",[4,26,29],"","","18-31","By Itself The Earth Produces Grain","galilee-shore"],
    ["",[13,24,30],"","","","18-31","Wheat And Weeds","galilee-shore"],
    ["MT",[13,31,32],[4,30,32],[13,18,19],"","18-31","Mustard Seed","galilee-shore"],
    ["MT",[13,33,33],"",[13,20,21],"","18-31","Yeast","galilee-shore"],
    [[["MK",4,33,34],["MT",13,35,35]],[13,34,35],[4,33,34],"","","18-31","Teaching By Stories","galilee-shore"],
    ["",[13,44,46],"","","","18-31","The Treasure And The Pearl","galilee-shore"],
    ["",[13,47,50],"","","","18-31","Fishing Net","galilee-shore"],
    ["",[13,51,52],"","","","18-31","Teacher Of Law Who Became Followers","galilee-shore"],
    ["MK",[8,18,18],[4,35,35],"","","18-31","Jesus Finishes The Sermon By The Sea","galilee-shore"],
    [[["MT",8,19,21],["LK",9,60,62]],[8,19,22],"",[9,57,62],"","18-31","Cost Of Following Jesus","galilee-shore"],
    ["MK",[8,23,23],[4,36,36],[8,22,22],"","18-31","End Of Sermon By The Sea","galilee-shore"],
    ["",[13,36,43],"","","","18-31","Wheat And Weeds Explanation","galilee-shore"]
  ]},
  {"Week 18-31 | The Galilean Ministry Goes On": [
    ["LK",[8,24,27],[4,37,41],[8,23,25],"","18-31","Jesus Calms A Storm","lake-galilee"],
    ["MK",[8,28,34],[5,1,20],[8,26,39],"","18-31","The Demoniacs Of Gadara","gadara"],
    ["LK",[9,1,1],[5,21,21],[8,40,40],"","18-31","Back To The Galilee Side Of The Lake","galilee-shore"],
    [[["MK",5,22,24],["LK",8,43,56]],[9,18,26],[5,22,43],[8,41,56],"","18-31","Raises Jairus' Daughter","galilee"],
    ["MT",[11,2,6],"",[7,18,23],"","18-31","John Asks For Affirmation From Jesus","galilee"],
    [[["LK",7,24,28],["LK",16,16,16],["LK",7,29,30],["MT",11,14,15],["LK",7,31,35]],[11,7,19],"",[7,24,35],"","18-31","Jesus' Testimony About John","galilee"],
    ["MT",[11,20,24],"",[10,12,15],"","18-31","Jesus Warns Unbelievers","galilee"],
    ["LK",[11,25,27],"",[10,21,24],"","18-31","Jesus Praises The Father","galilee"],
    ["",[11,28,30],"","","","18-31","Jesus Offers Easier Burden","galilee"],
    ["MK",[13,53,58],[6,1,6],"","","18-31","A Prophet Is Not Honored In His Hometown","nazareth"],
    [[["MK",7,24,24],["MT",15,22,25],["MK",7,27,27],["MT",15,27,28]],[15,21,28],[7,24,30],"","","18-31","Jesus Helps A Non-Jewish Woman","tyre"],
    [[["MK",7,31,37],["MT",15,30,31]],[15,29,31],[7,31,37],"","","18-31","A Deafmute Healed","decapolis-shore"],
    ["",[9,36,38],"","","","18-31","Third Galilean Tour","galilee"],
    ["LK","",[6,7,13],[9,1,6],"","18-31","Sending Out The Twelve Apostles","galilee"],
    ["",[11,1,1],"","","","18-31","Continue The Galilean Tour","galilee"],
    ["MK",[14,6,11],[6,21,28],"","","31","Herod Is Tricked To Get John Killed","galilee"]
  ]},
  {"Week 31 | Feast Of Trumpets In Galilee": [
    [[["MT",14,12,12],["LK",9,10,10]],[14,12,13],[6,29,32],[9,10,10],[6,1,1],"31","Jesus Hears About John's Death, The Apostles Return","bethsaida"],
    [[["MK",6,33,36],["MT",14,16,16],["JN",6,7,9],["LK",9,14,14],["MK",6,40,42],["JN",6,12,15],[]],[14,14,21],[6,33,44],[9,11,17],[6,2,15],"31","More Than Five Thousand Fed","bethsaida"],
    [[["MT",14,22,33],["MK",6,52,52],["MT",14,34,36]],[14,22,36],[6,45,56],"",[6,16,21],"31","Jesus And Peter Walks On The Lake","lake-galilee"],
    ["","","","",[6,22,71],"31","Feast Of The Day Of Trumpets","gennesaret"],
    [[["MK",7,1,5],["MT",15,3,9],["MK",7,15,15],["LK",11,40,40],["LK",11,41,54],["MT",15,12,20]],[15,1,20],[7,1,23],[11,37,54],"","31","Hypocrite Hand Wash","gennesaret"]
  ]},
  {"Week 31-32 | The Galilean Ministry Continues": [
    ["LK",[14,1,2],[6,14,16],[9,7,9],"","31","Herod Hears About Jesus",false],
    [[["MK",8,1,4],["MT",15,34,39]],[15,32,39],[8,1,10],"","","32","More Than Four Thousand Fed","decapolis-shore"],
    [[["MT",16,1,3],["MK",8,12,20],["MT",16,11,12]],[16,1,12],[8,11,21],"","","32","Beware Of The Yeast Of The Pharisees","magadan"],
    ["","",[8,22,26],"","","32","Jesus Heals A Blind Man","bethsaida"]
  ]},
  {"Week 32-33 | Day Of Atonement In Caesarea Philippi": [
    [[["MK",8,27,27],["MT",16,14,23],["LK",9,23,25],["MK",8,38,38]],[16,13,27],[8,27,38],[9,18,26],"","32","Peter Says Jesus Is The Savior","caesarea-philippi"],
    ["MT",[16,28,28],[9,1,1],[9,27,27],"","32","Some Of You Will See The Kingdom Of God Before They Die","caesarea-philippi"],
    [[["MT",17,1,1],["LK",9,29,35],["MT",17,6,13]],[17,1,13],[9,2,13],[9,28,36],"","33","Day Of Atonement","caesarea-philippi"],
    [[["LK",9,37,37],["MK",9,16,28],["MT",17,20,21]],[17,14,21],[9,14,29],[9,37,43],"","33","Forcing Out A Difficult Evil Spirit","caesarea-philippi"]
  ]},
  {"Week 33 | Back To Galilee": [
    [[["MK",9,30,31],["LK",9,45,45]],[17,22,23],[9,30,32],[9,43,45],[7,1,1],"33","Jesus Talks About His Death","galilee"],
    ["",[17,24,27],"","","","33","Temple Tax","capernaum"],
    [[["JN",7,2,9]],"","","",[7,2,9],"33","Jesus’ Brothers Don’t Believe","capernaum"],
    ["MK",[18,1,5],[9,33,37],[9,46,48],"","33","Who Is The Greatest?","capernaum"],
    ["MK","",[9,38,40],[9,49,50],"","33","Anyone Not Against Us Is For Us","capernaum"],
    [[["MT",18,6,9],["MK",9,49,49]],[18,6,9],[9,42,49],[17,1,2],"","33","Don't Cause Stumble","capernaum"],
    ["MT",[5,13,13],[9,50,50],[14,34,35],"","33","Salt And Light","capernaum"],
    [[["LK",15,1,7],["MT",18,14,14]],[18,10,14],"",[15,1,7],"","33","The Lost Sheep","capernaum"],
    ["","","",[15,8,10],"","33","The Lost Coin","capernaum"],
    ["","","",[15,11,32],"","33","The Wasteful Son","capernaum"],
    ["MT",[18,15,18],"",[17,3,3],"","33","Warn Others If They Are Wrong","capernaum"],
    ["MT",[18,21,22],"",[17,4,4],"","33","Accepting Apology","capernaum"],
    ["",[18,19,20],"","","","33","If You Come Together In My Name, I Am There With You","capernaum"],
    ["",[18,23,35],"","","","33","An Unforgiving Servant","capernaum"]
  ]},
  {"Week 33-34 | Feast Of Tabernacles In Jerusalem": [
    [[["LK",9,51,56],["JN",7,11,13]],"","",[9,51,56],[7,10,13],"33","Jesus Goes To Jerusalem At The Feast Of Tabernacles","galilee"],
    ["","","",[17,11,19],"","33","The Ten Lepers","galilee-samaria"],
    ["MT",[19,1,2],[10,1,1],"","","33","Arrival To Judea To The Other Side Of The Jordan","jordan-in-judea"],
    ["","","","",[7,14,36],"34","Teaching In The Temple At Feast Of Tabernacles","jerusalem"],
    ["","","","",[7,37,53],"34","Last Great Day Of Tabernacles","jerusalem"],
    ["","","","",[8,1,11],"34","The Woman Caught In Adultery","jerusalem"],
    ["","","","",[8,12,30],"34","Jesus Declares: I Am The Light Of The World","jerusalem"],
    ["","","","",[8,31,59],"34","The True Sons Of The Heavenly Father","jerusalem"],
    ["","","","",[9,1,41],"35","The Man Born Blind","jerusalem"]
  ]},
  {"Week 35-43 | Ministry In Judea": [
    ["","","","",[10,1,21],"35-36","The Good Shepherd Gives His Life For The Sheep","judea"],
    ["","","",[10,1,11],"","35-36","Sending Out Seventy-Two Followers","judea"],
    ["","","",[10,25,37],"","36-43","Who Is My Neighbor?","judea"],
    ["","","",[10,38,42],"","36-43","Mary And Martha","bethany"],
    ["","","",[11,5,8],"","36-43","Urgent Need","judea"],
    ["LK",[7,7,11],"",[11,9,13],"","36-43","Ask, And God Will Give To You","judea"],
    [[["LK",11,33,33],["MT",6,22,23],["LK",11,35,36]],[6,22,23],"",[11,33,36],"","36-43","Eye Is A Light For The Body","judea"],
    ["","","",[10,17,20],"","36-43","Return Of The Seventy-Two","judea"],
    ["LK",[10,26,31],"",[12,1,7],"","36-43","Fear God, Not People","judea"],
    ["MT",[10,32,33],"",[12,8,9],"","36-43","Tell People About Your Faith","judea"],
    ["","","",[12,13,21],"","36-43","Greed","judea"],
    [[["MT",6,25,27],["LK",12,26,26],["MT",6,28,33],["LK",12,32,32],["MT",6,34,34]],[6,25,34],"",[12,22,32],"","36-43","Seek God And God Takes Care Of You","judea"],
    ["MT",[6,19,21],"",[12,33,34],"","36-43","Your Heart Will Be Where Your Treasure Is","judea"],
    [[["LK",12,49,51],["MT",10,35,36]],[10,34,36],"",[12,49,53],"","36-43","I Have Come To Separate The Trues And The Falses","judea"],
    ["LK",[10,37,39],"",[14,25,33],"","36-43","Following Jesus Requires Engagement","judea"],
    ["","","",[12,54,56],"","36-43","Signs Of Times","judea"],
    ["","","",[13,1,9],"","36-43","Change Your Hearts","judea"],
    ["","","",[13,10,17],"","36-43","Jesus Heals On The Sabbath","judea"],
    ["","","",[13,22,22],"","36-43","On The Way To Jerusalem","judea"],
    [[["LK",13,23,23],["MT",7,13,14]],[7,13,14],"",[13,23,24],"","36-43","The Narrow Path","judea"],
    ["MT",[7,21,23],"",[13,25,30],"","36-43","Who Obeys God Enters To Heaven","judea"],
    ["","","",[13,31,33],"","36-43","Jesus Send A Message To Herod","judea"]
  ]},
  {"Week 43 | Hanukkah, The Feast Of Victory Over Religious Unification In Jerusalem": [
    ["MT",[23,37,39],"",[13,34,35],"","43","Jesus Judges Jerusalem","jerusalem"],
    ["","","",[14,1,6],"","43","Eating With A Chief Pharisee: Healing On Sabbath","jerusalem"],
    ["","","",[14,7,14],"","43","Power Or Influence","jerusalem"],
    ["","","","",[10,22,39],"43","At The Feast Of Dedication (Hanukkah)","jerusalem"]
  ]},
  {"Week 43-62 | Ministry In Judea Goes On": [
    ["","","","",[10,40,42],"43-62","Arrival To Judea To The Other Side Of The Jordan","bethany"],
    [[["LK",18,18,19],["MK",10,19,31]],[19,16,30],[10,17,31],[18,18,30],"","43-62","It's Hard For The Rich To Enter God's Kingdom","judea"],
    ["",[20,1,16],"","","","43-62","Jealous Vineyard Workers","judea"],
    ["","","",[16,1,12],"","43-62","Be Trusted With A Little","judea"],
    ["LK",[6,24,24],"",[16,13,15],"","43-62","God Or Worldly Riches","judea"],
    ["","","",[16,19,31],"","43-62","The Rich Man And The Poor Lazarus","judea"],
    ["","","",[17,5,6],"","43-62","The Faith Size Of A Mustard Seed","judea"],
    ["","","",[17,7,10],"","43-62","Don't Expect Thanks For Doing Your Job","judea"],
    ["","","",[17,20,22],"","43-62","God’s Kingdom Is Within You","judea"],
    ["","","",[18,1,8],"","43-62","God Will Answer His People","judea"],
    ["","","",[18,9,14],"","43-62","Prayer Of A Pharisee And A Tax Collector","judea"],
    ["MT",[19,3,12],[10,2,12],"","","43-62","About Divorce","judea"],
    ["MK",[19,13,15],[10,13,16],[18,15,17],"","43-62","Kingdom Of God Belongs To People Who Are Like Children","judea"],
    ["","","","",[11,1,44],"43-62","Raises Lazarus","bethany"],
    ["","","","",[11,45,57],"43-62","Priests Decide To Kill Jesus","bethany"],
    ["LK",[20,17,19],[10,32,34],[18,31,34],"","43-62","Jesus Talks About His Death In Details","ephraim"],
    ["MK",[20,20,28],[10,35,45],"","","43-62","The Ambition Of James And John","judea"],
    [[["MK",10,46,46],["MT",20,30,34]],[20,29,34],[10,46,52],[18,35,43],"","43-62","Blind Men Of Jericho (Bartimaeus)","jericho"],
    [[["LK",19,2,10]],"","",[19,1,10],"","43-62","Zacchaeus A Chief Tax Collector Changes His Heart","jericho"],
    ["LK",[25,14,30],"",[19,11,28],"","43-62","Talents","jericho"]
  ]},
  {"Week 62 | The Week Before The Second Passover In Jerusalem": [
    ["JN",[26,6,13],[14,3,9],[7,36,50],[12,1,9],"62","Anointing By Mary","bethany"],
    [[["JN",12,10,11],["LK",22,2,2]],[26,1,5],[14,1,2],[22,1,2],[12,10,11],"62","Priests Plan To Kill Jesus And Lazarus","jerusalem"],
    ["LK",[26,14,16],[14,10,11],[22,3,6],"","62","Judas Comes To An Agreement With The Priests","jerusalem"],
    [[["MK",11,1,3],["MT",21,4,7],["JN",12,17,18],["MK",11,8,10],["LK",19,39,40],["JN",12,19,19],["LK",19,41,44],["MT",21,10,11],["MK",11,11,11]],[21,1,11],[11,1,11],[19,29,44],[12,12,19],"62","In Jerusalem, People Greets Jesus As The King","jerusalem"],
    ["MK",[21,18,19],[11,12,14],"","","62","Jesus Curses A Fruitless Fig Tree","jerusalem"],
    [[["MK",11,15,17],["MT",21,14,17]],[21,12,17],[11,15,19],[19,45,48],"","62","Second Cleansing Of The Temple","jerusalem"],
    ["MK",[21,20,22],[11,20,26],"","","62","The Fig Tree Has Dried Up By Next Morning","jerusalem"],
    ["MK",[21,23,27],[11,27,33],[20,1,8],"","62","The Leaders Challenge Jesus' Authority","jerusalem"],
    ["",[21,28,32],"","","","62","The Two Sons Of The Vineyard Owner","jerusalem"],
    ["MT",[21,33,46],[12,1,12],[20,9,19],"","62","The Evil Vineyard Farmers","jerusalem"],
    ["MT",[22,1,14],"",[14,15,24],"","62","The Wedding Feast Of The King's Son","jerusalem"],
    ["MT",[22,15,22],[12,13,17],[20,20,26],"","62","Give To Caesar And To God As Belongs","jerusalem"],
    [[["MT",22,23,28],["LK",20,34,40]],[22,23,33],[12,18,27],[20,27,40],"","62","Sadducees About Resurrection","jerusalem"],
    ["MK",[22,34,40],[12,28,34],"","","62","The Most Important Command","jerusalem"],
    ["MT",[22,41,46],[12,35,37],[20,41,44],"","62","How Can The Christ Be David's Son?","jerusalem"],
    ["MT",[23,1,36],[12,38,40],[20,45,47],"","62","How Terrible For You Teachers Of The Law And Pharisees","jerusalem"],
    ["MK","",[12,41,44],[21,1,4],"","62","The Widow's Cents","jerusalem"],
    ["","","","",[12,20,36],"62","Visitors From The West At The End Of Jesus' Life","jerusalem"],
    ["","","","",[12,37,50],"62","Whoever Believes In Jesus Believes In The One","jerusalem"],
    ["","","",[21,34,38],"","62","End Of Jesus' Public Ministry","jerusalem"],
    ["LK",[24,1,2],[13,1,2],[21,5,6],"","62","Not One Stone Will Be Left On Another","jerusalem"],
    ["LK",[24,3,8],[13,3,8],[21,7,11],"","62","False Prophets, Wars, Sicknesses, Lack Of Food","jerusalem"],
    ["MK",[10,17,18],[13,9,10],[21,12,13],"","62","Persecution","jerusalem"],
    [[["JN",16,1,3],["MT",24,10,14]],[24,9,14],"","",[16,1,4],"62","Torture, Executions","jerusalem"],
    ["LK",[10,19,20],[13,11,11],[12,11,12],"","62","Don't Worry ABout What To Say Then","jerusalem"],
    ["","","",[21,14,15],"","62","The Holy Spirit Will Speak Through You","jerusalem"],
    ["MT",[10,21,22],[13,12,13],[21,16,19],"","62","Relatives, Friends Will Give Each Other To Be Killed","jerusalem"],
    [[["MT",24,15,15],["LK",21,21,22]],[24,15,16],[13,14,14],[21,20,22],"","62","Run Away To The Mountains","jerusalem"],
    ["LK",[24,17,18],[13,15,16],[17,31,33],"","62","Leave Immediately","jerusalem"],
    [[["MT",24,19,21],["LK",21,24,24],["MT",24,22,22]],[24,19,22],[13,17,20],[21,23,24],"","62","There Will Be More Trouble Than Ever","jerusalem"],
    ["MT",[24,23,27],[13,21,23],[17,23,25],"","62","Self-Appointed Christs, False Prophets","jerusalem"],
    ["LK",[24,37,39],"",[17,26,30],"","62","As Right Before The Great Flood","jerusalem"],
    [[["MT",24,29,31],["LK",21,28,28]],[24,29,31],[13,24,27],[21,25,28],"","62","Then Jesus Comes Again","jerusalem"],
    ["LK",[24,40,41],"",[17,34,36],"","62","One Will Be Taken And The Other Will Be Left","jerusalem"],
    ["LK",[24,28,28],"",[17,37,37],"","62","Vultures","jerusalem"],
    ["MT",[24,32,36],[13,28,32],[21,29,33],"","62","The Signs Of Jesus' Coming","jerusalem"],
    ["LK",[24,42,44],[13,33,33],[12,39,40],"","62","Always Be Ready","jerusalem"],
    [[["MT",24,45,47],["LK",12,45,48],["MK",13,37,37]],[24,45,51],[13,34,37],[12,41,48],"","62","The Reliable And The Disloyal Servant","jerusalem"],
    ["MT",[25,1,13],"",[12,35,38],"","62","The Ten Virgins","jerusalem"],
    ["",[25,31,46],"","","","62","The Sheep And The Goats","jerusalem"]
  ]},
  {"Week 63 | The Day Before Passover Eve": [
    ["LK",[26,17,20],[14,12,17],[22,7,13],"","63","Preparation For The Last Supper","jerusalem"],
    [[["LK",22,14,16],["LK",22,19,19],["MT",26,27,28],["LK",22,18,18]],[26,26,29],[14,22,25],[22,14,20],"","63","The New Agreement","jerusalem"],
    ["","","",[22,24,30],"","63","The Leader Should Be Like The Servant","jerusalem"],
    ["","","","",[13,1,15],"63","Jesus Washes His Followers’ Feet","jerusalem"],
    ["JN",[10,24,25],"",[6,40,40],[13,16,17],"63","A Servant Is Not Greater Than His Master","jerusalem"],
    ["LK",[10,40,42],[9,41,41],[10,16,16],[13,20,20],"63","Whoever Accepts Jesus, Accepts The One","jerusalem"],
    ["","","","",[13,18,19],"63","One Of You Will Turn Against Me","jerusalem"],
    ["JN",[26,21,25],[14,18,21],[22,21,23],[13,21,30],"63","Judas - The Literal And Symbolic Yeast - Is Leaving","jerusalem"],
    ["","","","",[13,31,35],"63","Love Each Other","jerusalem"],
    ["MT",[26,30,30],[14,26,26],[22,39,39],"","63","Leaving To The Mount Of Olives","jerusalem"],
    [[["MT",26,31,32],["LK",22,31,34],["MK",14,31,31]],[26,31,35],[14,27,31],[22,31,34],[13,36,38],"63","You Will All Stumble In Your Faith","jerusalem"],
    ["","","",[22,35,38],"","63","Now Carry Money And Sword With You","jerusalem"],
    ["","","","",[14,1,14],"63","Ask Me For Anything In My Name","jerusalem"],
    ["","","","",[14,15,31],"63","Jesus Promises The Holy Spirit","jerusalem"],
    ["","","","",[15,1,17],"63","Jesus Is Like A Vine","jerusalem"],
    ["","","","",[15,18,25],"63","The Followers And The World","jerusalem"],
    ["","","","",[15,26,27],"63","Tell People About Me","jerusalem"],
    ["","","","",[16,5,15],"63","The Work Of The Holy Spirit","jerusalem"],
    ["","","","",[16,16,24],"63","Sadness Will Become Happiness","jerusalem"],
    ["","","","",[16,25,33],"63","Be Brave: I Have Defeated The World","jerusalem"],
    ["","","","",[17,1,26],"63","Jesus Prays For His Followers","jerusalem"]
  ]},
  {"Week 63 | Jesus Is Arrested And Executed On The Day Of Passover Eve": [
    ["MT",[26,36,46],[14,32,42],[22,40,46],[18,1,1],"63","Gethsemane: Father, Do What You Want","jerusalem"],
    [[["LK",22,47,51],["MT",26,52,54],["JN",18,4,7],["MK",14,48,49],["JN",18,8,8],["MK",14,50,50],["JN",18,9,9],["JN",18,12,12]],[26,47,56],[14,43,52],[22,47,53],[18,2,12],"63","Gethsemane: Jesus Is Arrested","jerusalem"],
    ["","","","",[18,13,24],"63","Hearing Before Annas","jerusalem"],
    ["MK",[26,57,58],[14,53,54],[22,54,55],"","63","Jesus is Led To Caiaphas","jerusalem"],
    [[["MT",26,59,67],["LK",22,64,64]],[26,59,68],[14,55,65],[22,63,71],"","63","Trial Before The Leaders At Caiaphas","jerusalem"],
    ["MT",[26,69,75],[14,66,72],[22,56,62],[18,25,27],"63","Peter Says He Doesn’t Know Jesus","jerusalem"],
    ["",[27,3,10],"","","","63","Judas' Confession And Suicide","jerusalem"],
    ["JN",[27,1,2],[15,1,1],[23,1,1],[18,28,28],"63","Jesus Is Turned Over To Pilates","jerusalem"],
    [[["JN",18,29,30],["MT",27,12,13],["MK",15,3,5],["JN",18,31,38],["LK",23,5,5]],[27,11,14],[15,2,5],[23,2,5],[18,29,38],"63","Pilate Questions Jesus","jerusalem"],
    ["","","",[23,6,12],"","63","Pilate Sends Jesus to Herod","jerusalem"],
    ["","","",[23,13,16],"","63","Pilate Declares: Jesus Is Not Guilty","jerusalem"],
    [[["MK",15,6,7],["MT",27,17,20],["LK",23,18,18],["LK",23,20,22]],[27,15,23],[15,6,14],[23,17,22],[18,39,40],"63","Jesus Or Barabbas","jerusalem"],
    ["MT",[27,27,30],[15,16,19],"",[19,1,3],"63","Pilate Whips Jesus, The Soldiers Shame Him","jerusalem"],
    ["JN","","","",[19,4,15],"63","Pilate Argues For Jesus Against The People","jerusalem"],
    [[["MT",27,24,25],["JN",19,16,16]],[27,24,26],[15,15,15],[23,23,25],[19,16,16],"63","Pilate Washing His Hands","jerusalem"],
    ["MK",[27,31,31],[15,20,20],"","","63","The Soldiers Get Jesus Dressed In His Own Clothes","jerusalem"],
    [[["MT",27,32,32],["LK",23,27,32],["MK",15,22,23]],[27,32,34],[15,21,23],[23,26,32],[19,17,17],"63","The Way To Golgota","jerusalem"],
    [[["LK",23,33,33],["MK",15,25,25],["JN",19,19,22],["LK",23,34,34],["JN",19,23,27]],[27,35,37],[15,24,26],[23,33,34],[19,18,27],"63","The Crucifixion","jerusalem"],
    [[["MT",27,38,43],["LK",23,39,43]],[27,38,44],[15,27,32],[23,35,43],"","63","Jesus Is Insulted On The Cross","jerusalem"],
    [[["MT",27,45,46],["JN",19,28,28],["MT",27,47,47],["JN",19,29,29],["MT",27,49,49],["LK",23,46,46],["MT",27,51,51],["JN",19,31,37]],[27,45,51],[15,33,38],[23,44,46],[19,28,37],"63","Jesus Dies","jerusalem"],
    [[["MT",27,54,54],["LK",23,48,49],["MT",27,56,56]],[27,54,56],[15,39,41],[23,47,49],"","63","Witnesses Around The Cross","jerusalem"],
    [[["LK",23,50,51],["MK",15,42,42],["LK",23,52,52],["MK",15,44,45]],[27,57,58],[15,42,45],[23,50,52],[19,38,38],"63","Joseph Asks Pilate For Jesus' Body","jerusalem"],
    [[["MT",27,59,59],["JN",19,41,42],["LK",23,55,56]],[27,59,61],[15,46,47],[23,53,56],[19,41,42],"63","Joseph Wraps Body Without Spices, Puts In Tomb, Rolls Stone, He And Women Leave","jerusalem"],
    ["","","","",[19,39,40],"63","Joseph Comes Back With Nicodemus And Spices And Properly Buries The Body | The Women Don't See This Proper Burial        ","jerusalem"]
  ]},
  {"Week 63-70+ | God Rises Jesus Back To Life": [
    ["",[27,62,65],"","","","63","High Sabbath, Violated By Leaders Going To Pilate For Guard","jerusalem"],
    ["",[27,66,66],"","","","63","Roman Seal And Guard At The Tomb","jerusalem"],
    ["",[28,2,4],"","","","63","Jesus Is Raised To Life","jerusalem"],
    ["",[27,52,53],"","","","63","Firstfruits Are Raised To Life","jerusalem"],
    ["","","","",[20,1,1],"63","Mary M. Goes Alone To Tomb Before Sunrise And Finds It Opened","jerusalem"],
    ["","","","",[20,2,2],"63","Mary M. Runs To Tell Peter And John That Stone Is Missing","jerusalem"],
    ["JN","","",[24,12,12],[20,3,10],"63","Peter, John And Mary All Meet At The Tomb, Mary Stays, The Men Leave","jerusalem"],
    [[["LK",24,1,1],["MK",16,3,3]],[28,1,1],[16,1,3],[24,1,1],"","63","Other Mary And Salome Arrive To Tomb Bringing Spices","jerusalem"],
    [[["MK",16,4,4],["LK",24,3,3]],"",[16,4,4],[24,2,3],"","63","The Other Women Meet With Mary M. At The Tomb","jerusalem"],
    ["LK",[28,5,7],[16,5,7],[24,4,8],[20,12,13],"63","Two Angels Let The Women Know That Jesus Is Raised To Life","jerusalem"],
    ["MK",[28,8,8],[16,8,8],[24,9,9],"","63","The Other Women Are Frightened And Run Away","jerusalem"],
    ["","","","",[20,11,11],"63","Maria Magdalene Stays At The Tomb","jerusalem"],
    [[["JN",20,14,14],["JN",20,16,17]],"",[16,9,9],"",[20,14,17],"63","Jesus Appears To Maria Magdalene","jerusalem"],
    ["",[28,9,10],"","","","63","Maria M. Joins To The Other Women And All Heading To The Apostles When Jesus Appears To Them","jerusalem"],
    ["",[28,11,15],"","","","63","The Leaders Bribe The Guards","jerusalem"],
    ["LK","",[16,10,11],[24,10,11],[20,18,18],"63","Women Let Followers Know, But They Don't Believe","jerusalem"],
    ["LK","",[16,12,13],[24,13,35],"","63","Jesus Joins To Two Of His Followers On Their Way To Emmaus","emmaus"],
    ["LK","",[16,14,14],[24,36,49],[20,19,23],"63","Jesus Appears In The Last Supper's Room","jerusalem"],
    ["","","","",[20,24,29],"64","Jesus Appears Again In The Presence Of Thomas","jerusalem"],
    ["LK","",[16,19,19],[25,6,11],"","64-70","The Ascension","jerusalem"],
    ["","","",[25,12,14],"","64-70","The Followers Wait For The Holy Spirit By Praying Together","jerusalem"],
    ["","","",[26,1,4],"","70","The Holy Spirit Baptise The Followers","jerusalem"],
    ["","","","",[21,1,14],"","Jesus Encourages Peter","galilee"],
    ["","","","",[21,15,24],"","Jesus Triple Checks If Peter Regained His Faith","galilee"],
    [[["MT",28,16,19],["MK",16,16,18],["MT",28,20,20]],[28,16,20],[16,15,18],"","","","Jesus Sends Out The Apostles To Everyone In The World","galilee"],
    ["","",[16,20,20],"","","","The Apostles Tell The Good News To Eeveryone In The World","galilee"]
  ]}
];
export { timelineRaw as default };
