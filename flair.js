/* FLAIR MASTER CONFIG */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                unit_id: data[2],
                orig_id: orig_id,
                unit_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [FFBE Original (be)] */
	"icon001 be 1": "Rain",
	"icon002 be 5": "Lasswell",
	"icon003 be 9": "Fina",
	"icon004 be 385": "Dark Fina",
	"icon005 be 304": "Nichol",
	"icon006 be 240": "Lid",
	"icon007 be 393": "Jake",
	"icon008 be 13": "Rizer",
	"icon009 be 15": "Leah",
	"icon010 be 17": "Tronn",
	"icon011 be 19": "Eldin",
	"icon012 be 21": "Baurg",
	"icon013 be 23": "Gimlee",
	"icon014 be 25": "Maxell",
	"icon015 be 27": "Liza",
	"icon016 be 53": "Shiki",
	"icon017 be 55": "Mizell",
	"icon018 be 57": "Ronaldo",
	"icon019 be 59": "Mel",
	"icon020 be 103": "Clyne",
	"icon021 be 105": "Anselm",
	"icon022 be 107": "Luna",
	"icon023 be 109": "Bedile",
	"icon024 be 149": "Duane",
	"icon025 be 152": "Cerius",
	"icon026 be 155": "Roselia",
	"icon027 be 158": "Medius",
	"icon029 be 163": "Paula",
	"icon030 be 165": "Kenyu",
	"icon031 be 167": "Ollie",
	"icon032 be 169": "Carrie",
	"icon033 be 171": "Skaha",
	"icon034 be 173": "Montana",
	"icon035 be 175": "Russell",
	"icon036 be 177": "Miyuki",
	"icon037 be 203": "Gilbert",
	"icon038 be 185": "Xiao",
	"icon039 be 214": "Rakshasa",
	"icon040 be 251": "Ludmille",
	"icon041 be 254": "Charlotte",
	"icon042 be 191": "Artemios",
	"icon043 be 217": "Chizuru",
	"icon044 be 219": "Hayate",
	"icon045 be 387": "Elle",
	"icon046 be 390": "Luka",
	"icon047 be 365": "Mercedes",
	"icon048 be 404": "Lawrence",
	"icon049 be 401": "Soleil",
	"icon050 be 409": "Shine",
	"icon051 be 412": "Shiera",
	"icon052 be 415": "Marie",
	"icon177 be 451": "Eileen",
	"icon178 be 453": "Ulrika",
	"icon179 be 445": "Emperor Soze",
	"icon180 be 448": "Heltich",
	"icon184 be 464": "Sakura",
	"icon186 be 469": "Wilhelm",
	"icon187 be 471": "Grace",
	"icon188 be 474": "Abel",
	"icon189 be 477": "Jean",
	"icon196 be 513": "Fohlen",
	"icon197 be 515": "Amelia",
	"icon198 be 518": "Ilias",
	"icon199 be 521": "Camille",
	"icon203 be 540": "Runera",
	"icon204 be 542": "Blanc",
	"icon205 be 545": "Helena",
	"icon206 be 548": "Ruggles",
	"icon213 be 573": "Dark Veritas",
	"icon214 be 575": "Fire Veritas",
	"icon215 be 577": "Earth Veritas",
	"icon216 be 580": "Victoria",
	"icon217 be 583": "Tim",
	"icon223 be 586": "Moogle",
	"icon224 be 600": "Light Veritas",
	"icon225 be 602": "Wind Veritas",
	"icon226 be 605": "Water Veritas",
	"icon228 be 610": "Aura",
	"icon229 be 613": "Grom",
	"icon243 be 649": "Lorraine",
	"icon244 be 651": "Ayaka",
	"icon245 be 653": "Gouken",
	"icon246 be 656": "Sylvia",
	"icon247 be 659": "Kamui",
	"icon248 be 662": "Yuri",
	"icon257 be 683": "Elfried",
	"icon258 be 685": "Conrad",
	"icon259 be 688": "William",
	"icon260 be 691": "Roy",
	"icon261 be 693": "Chloe",
	"icon262 be 696": "Amy",
	"icon263 be 699": "Kupolukan",
	"icon264 be 701": "Ashterose",
	"icon265 be 704": "Kelsus",
	"icon266 be 707": "Nyarl",
	"icon267 be 710": "Sandy",
	"icon268 be 713": "Grinfield",
	"icon273 be 724": "Duke",
	"icon274 be 726": "Orif",
	"icon275 be 729": "Mistair",
	"icon276 be 732": "Shaly",
	"icon277 be 735": "Ryunan",
	"icon284 be 761": "Jiraiya",
	"icon285 be 763": "Kaede",
	"icon286 be 766": "Ouga",
	"icon287 be 769": "Otogiri",
	"icon288 be 772": "Ice Knight Lasswell (CG Lasswell)",
	"icon299 be 793": "CG Sakura", /*Needs Name Update*/
	"icon300 be 795": "Vern",
	"icon301 be 798": "Sedona",
	"icon310 be 815": "CG Fina", /*Needs Name Update*/
	"icon311 be 817": "Kunshira",
	"icon312 be 819": "Wado",
	"icon313 be 822": "Hauyn",
	"icon323 be 843": "CG Jake",
	"icon326 be 845": "Emperor Shiera",
	"icon324 be 850": "Ozetta",
	"icon325 be 853": "Riley",
	"icon327 be 847": "Emilia",
	"icon341 be 886": "CG Lid",
	"icon342 be 888": "Killian",
	"icon343 be 904": "Medina",
	"icon345 be 908": "Lila",
	"icon346 be 910": "Silt",
	"icon347 be 913": "Mim",
	"icon348 be 916": "CG Nichol", /*Needs Name Update*/
	"icon349 be 918": "Lekisa",
	"icon350 be 921": "Elvis",
	"icon351 be 924": "Merald",
	"icon357 be 941": "CG Reagan", /*Needs Name Update*/
	"icon358 be 943": "Luminui",
	"icon359 be 946": "Xyle",
	"icon360 be 949": "Lucille",
	"icon364 be 965": "Lamira",
	"icon369 be 989": "Naru/Nal",
	"icon370 be 992": "Pezzotta",
	"icon371 be 995": "Shinju",
	"icon372 be 998": "Ryuka",
/* [Final Fantasy (ff)] */
	"icon053 ff 222": "(FF1) Warrior of Light",
	"icon054 ff 111": "(FF1) Garland",
	"icon055 ff 49": "(FF1) Sarah",
	"icon056 ff 140": "(FF2) Firion",
	"icon057 ff 83": "(FF2) Maria",
	"icon058 ff 417": "(FF2) Guy",
	"icon059 ff 420": "(FF2) Leon",
	"icon060 ff 422": "(FF2) Emperor",
	"icon061 ff a2": "(FF2) Leila *Unreleased",
	"icon062 ff 33": "(FF2) Paul",
	"icon160 ff a1": "(FF3) Onion Knight *Beta",
	"icon063 ff 318": "(FF3) Luneth",
	"icon064 ff 320": "(FF3) Arc",
	"icon065 ff 323": "(FF3) Refia",
	"icon066 ff 326": "(FF3) Ingus",
	"icon067 ff a3": "(FF3) Doga *Unreleased",
	"icon068 ff 594": "(FF3) Desch",
	"icon069 ff 126": "(FF3) Cloud of Darkness",
	"icon219 ff 589": "(FF3) Onion Knight",
	"icon220 ff 591": "(FF3) Aria",
	"icon221 ff 594": "(FF3) Desch",
	"icon222 ff 597": "(FF3) Sara",
	"icon070 ff 129": "(FF4) Cecil",
	"icon071 ff 294": "(FF4) Dark Knight Cecil",
	"icon072 ff 91": "(FF4) Kain",
	"icon073 ff 292": "(FF4) Rosa",
	"icon074 ff 99": "(FF4) Rydia",
	"icon075 ff 224": "(FF4) Tellah",
	"icon077 ff 296": "(FF4) Edge",
	"icon078 ff 51": "(FF4) Giotto King",
	"icon079 ff 180": "(FF4) Golbez",
	"icon335 ff 875": "(FF4) Kid Rydia",
	"icon336 ff 877": "(FF4) Helmless Kain",
	"icon337 ff 879": "(FF4) Yang",
	"icon338 ff 882": "(FF4) Edward",
	"icon365 ff 8091": "(FF4) Barbariccia",
	"icon366 ff 8094": "(FF4) Rubicante",
	"icon367 ff 8076": "(FF4) Cagnazzo",
	"icon368 ff 8073": "(FF4) Scarmiglione",
	"icon080 ff 137": "(FF5) Bartz",
	"icon081 ff 227": "(FF5) Lenna",
	"icon082 ff 183": "(FF5) Galuf",
	"icon083 ff 360": "(FF5) Faris",
	"icon084 ff 89": "(FF5) Krile",
	"icon085 ff a4": "(FF5) Mid Previa *Unreleased",
	"icon086 ff 117": "(FF5) Exdeath",
	"icon087 ff 363": "(FF5) Gilgamesh",
	"icon195 ff 503": "(FF6) Trance Terra",
	"icon088 ff 132": "(FF6) Terra",
	"icon089 ff 135": "(FF6) Magitek Terra",
	"icon090 ff 194": "(FF6) Locke",
	"icon091 ff 93": "(FF6) Edgar",
	"icon092 ff 85": "(FF6) Sabin",
	"icon093 ff 87": "(FF6) Shadow",
	"icon094 ff 101": "(FF6) Cyan",
	"icon095 ff 206": "(FF6) Celes",
	"icon096 ff 29": "(FF6) Wedge",
	"icon097 ff 31": "(FF6) Biggs",
	"icon098 ff 209": "(FF6) Kefka",
	"icon099 ff 197": "(FF6) Leo",
	"icon162 ff a7": "(FF6) Relm *Unreleased",
	"icon163 ff 505": "(FF6) Setzer",
	"icon164 ff a8": "(FF6) Gau *Unreleased",
	"icon165 ff a9": "(FF6) Umaro *Unreleased",
	"icon256 ff 681": "(FF7) Cloud",
	"icon344 ff 906": "(FF7) Sephiroth",
	"icon361 ff 956": "(FF8) Squall",
	"icon362 ff 959": "(FF8) Rinoa",
	"icon363 ff 962": "(FF8) Zell",
	"icon100 ff 143": "(FF9) Zidane",
	"icon101 ff 79": "(FF9) Vivi",
	"icon102 ff 230": "(FF9) Garnet",
	"icon103 ff 232": "(FF9) Freya",
	"icon104 ff a5": "(FF9) Quina *Unreleased",
	"icon105 ff 235": "(FF9) Amarant",
	"icon106 ff 238": "(FF9) Lani",
	"icon107 ff 123": "(FF9) Kuja",
	"icon280 ff 751": "(FF9) Steiner",
	"icon281 ff 754": "(FF9) Eiko",
	"icon282 ff 749": "(FF9) Beatrix",
	"icon283 ff 756": "(FF9) Black Waltz 3",
	"icon185 ff 467": "(FF10) Tidus",
	"icon200 ff 524": "(FF10) Rikku",
	"icon201 ff 527": "(FF10) Wakka",
	"icon296 ff 785": "(FF10) Yuna",
	"icon297 ff 787": "(FF10) Lulu",
	"icon298 ff 789": "(FF10) Seymour",
	"icon108 ff 97": "(FF11) Shantotto",
	"icon109 ff 552": "(FF11) Werei",
	"icon207 ff 555": "(FF11) Kupipi",
	"icon208 ff 558": "(FF11) Prishe",
	"icon110 ff 146": "(FF12) Vaan",
	"icon111 ff 81": "(FF12) Penelo",
	"icon112 ff 95": "(FF12) Fran",
	"icon113 ff 37": "(FF12) Anastasis",
	"icon114 ff a6": "(FF12) Reddas *Unreleased", 
	"icon167 ff 530": "(FF12) Balthier",
	"icon168 ff 532": "(FF12) Ashe",
	"icon202 ff 535": "(FF12) Rasler",
	"icon316 ff 830": "(FF12) Basch",
	"icon317 ff 832": "(FF12) Gabranth",
	"icon318 ff 834": "(FF12) Vayne",
	"icon320 ff 837": "(FF12) Drace",
	"icon319 ff 840": "(FF12) Larsa",
	"icon322 ff 8059": "(FF12) Zargabaath",
	"icon115 ff 257": "(FF13) Lightning",
	"icon116 ff 273": "(FF13) Snow",
	"icon117 ff 276": "(FF13) Vanille",
	"icon118 ff 278": "(FF13) Sazh",
	"icon119 ff 281": "(FF13) Hope",
	"icon120 ff 283": "(FF13) Fang",
	"icon192 ff 485": "(FF14) Y'shtola",
	"icon193 ff 487": "(FF14) Thancred",
	"icon194 ff 490": "(FF14) Minfilia",
	"icon278 ff 738": "(FF14) Yda",
	"icon279 ff 741": "(FF14) Papalymo",
	"icon314 ff 825": "(FF15) Aranea",
	"icon315 ff 827": "(FF15) Prompto",
	"icon227 ff 616": "(FF15) Noctis",
	"icon239 ff 638": "(FF15) Nyx",
	"icon240 ff 640": "(FF15) Glauca",
	"icon241 ff 643": "(FF15) Crowe",
	"icon242 ff 646": "(FF15) Libertus",
	"icon270 ff 716": "(FF15) Gladio",
	"icon271 ff 718": "(FF15) Cor",
	"icon272 ff 721": "(FF15) Iris",
/* [Final Fantasy Spin-offs (spoff)] */
	"icon181 spoff 456": "(Type-0) Rem",
	"icon182 spoff 458": "(Type-0) King",
	"icon183 spoff 461": "(Type-0) Sice",
	"icon129 spoff 307": "(Type-0) Ace",
	"icon132 spoff 309": "(Type-0) Trey",
	"icon134 spoff 312": "(Type-0) Jack",
	"icon135 spoff 315": "(Type-0) Seven",
	"icon130 spoff 372": "(Type-0) Queen",
	"icon131 spoff 374": "(Type-0) Nine",
	"icon133 spoff 377": "(Type-0) Cinque",
	"icon136 spoff 380": "(Type-0) Eight",
	"icon121 spoff 259": "(FFT) Ramza",
	"icon122 spoff 261": "(FFT) Delita",
	"icon123 spoff 263": "(FFT) Agrias",
	"icon124 spoff 265": "(FFT) Alma",
	"icon125 spoff 268": "(FFT) Gaffgarion",
	"icon126 spoff 270": "(FFT) Mustadio",
	"icon127 spoff 396": "(FFT) Orlandu",
	"icon128 spoff 398": "(FFT) Ovelia",
	"icon209 spoff 561": "(FFT) Mercenary Ramza",
	"icon210 spoff 563": "(FFT) Knight Delita",
	"icon211 spoff 567": "(FFT) Meliadoul",
	"icon212 spoff 570": "(FFT) Orran",
/* [Collaborations (collab)] */
	"icon137 collab 286": "(Crystal Defenders) Juggler",
	"icon138 collab 288": "(Crystal Defenders) Thief",
	"icon139 collab 290": "(Crystal Defenders) Fencer",
	"icon140 collab 212": "(Terra Battle) Samatha・Λ",
	"icon328 collab 857": "(Bravely Default) Tiz",
	"icon329 collab 859": "(Bravely Default) Agnes",
	"icon330 collab 861": "(Bravely Default) Bunny Agnes",
	"icon331 collab 863": "(Bravely Default) Edea",
	"icon332 collab 866": "(Bravely Default) Yu",
	"icon333 collab 869": "(Bravely Default) Magnolia",
	"icon334 collab 872": "(Bravely Default) Rinne",
	"icon309 collab 813": "(Seiken Densetsu) Hero",
	"icon145 collab 330": "(Seiken Densetsu 2) Randi",
	"icon146 collab 332": "(Seiken Densetsu 2) Primm",
	"icon147 collab 335": "(Seiken Densetsu 2) Popoi",
	"icon305 collab 808": "(Seiken Densetsu 3) Kevin",
	"icon306 collab 810": "(Seiken Densetsu 3) Carlie",
	"icon307 collab 806": "(Seiken Densetsu 3) Hawkeye",
	"icon308 collab 804": "(Seiken Densetsu 3) Riesz",
	"icon190 collab 481": "(Brave Frontier) Vargas",
	"icon191 collab 483": "(Brave Frontier) Maxwell",
	"icon141 collab 249": "(Brave Frontier) Tilith",
	"icon142 collab 245": "(Brave Frontier) Karl",
	"icon143 collab 247": "(Brave Frontier) Seria",
	"icon218 collab 8012": "(Brave Frontier) Elza",
	"icon230 collab 618": "(MHXR) Hunter Rain",
	"icon231 collab 620": "(MHXR) Hunter Lasswell",
	"icon232 collab 623": "(MHXR) Hunter Fina",
	"icon233 collab 626": "(MHXR) Hunter Nichol",
	"icon234 collab 629": "(MHXR) Hunter Lid",
	"icon235 collab 631": "(MHXR) Hunter Sakura",
	"icon236 collab 634": "(MHXR) Hunter Jake",
	"icon352 collab 928": "(Star Ocean) Fayt",
	"icon353 collab 930": "(Star Ocean) Rena",
	"icon354 collab 932": "(Star Ocean) Fidel",
	"icon355 collab 935": "(Star Ocean) Reimi",
	"icon356 collab 938": "(Star Ocean) Roddick",
	"icon170 collab 425": "(DQMSL) Dragonlord",
	"icon171 collab 427": "(DQMSL) Killing Machine",
	"icon172 collab 432": "(DQMSL) Golem",
	"icon173 collab 429": "(DQMSL) Slime",
	"icon174 collab 435": "(DQMSL) Orochi",
	"icon175 collab 438": "(DQMSL) Liquid Metal Slime",
	"icon176 collab 440": "(DQMSL) Robbin' 'ood",
	"icon380 collab 1002": "(DQMSL) Estark",
	"icon381 collab 1005": "(DQMSL) Marquis de leon",
	"icon382 collab 1008": "(DQMSL) Uberkilling Machine",
	"icon383 collab 1011": "(DQMSL) Slime Knight",
	"icon384 collab 1014": "(DQMSL) Dracky",
	"icon292 collab 774": "(Nier) 2B",
	"icon293 collab 776": "(Nier) 9S",
	"icon294 collab 779": "(Nier) Adam",
	"icon295 collab 782": "(Nier) 21O",
	"icon339 collab 8062": "(Nier) A2",
	"icon340 collab 8065": "(Nier) Eve",
	"icon144 collab 243": "(Imperial Saga) Adel",
	"icon249 collab 665": "(Romancing Saga 3) Julian",
	"icon250 collab 667": "(Romancing Saga 3) Katrina",
	"icon251 collab 669": "(Romancing Saga 3) Harid",
	"icon252 collab 672": "(Romancing Saga 3) Robin",
/* [Global Exclusives (glex)] */
	"icon373 glex 8082": "(Halloween) Grim Lord Sakura",
	"icon374 glex 8085": "(Halloween) Illusionist Nichol",
	"icon375 glex 8088": "(Halloween) Pirate Jake",
	"icon376 glex 8000": "(Halloween) Demon Rain",
	"icon321 glex 8057": "(Fan Festa) Artisan Lid",
	"icon302 glex 8033": "Cupid Artemios",
	"icon303 glex 8051": "Reberta",
	"icon304 glex 8054": "Zyrus",
	"icon237 glex 8015": "(Christmas) White Knight Noel",
	"icon238 glex 8018": "(Christmas) Santa Roselia",
	"icon289 glex 8042": "Fryevia",
	"icon290 glex 8045": "Xon",
	"icon291 glex 8048": "Aiden",
	"icon254 glex 8026": "Yun",
	"icon255 glex 8029": "Ling",
	"icon269 glex 8039": "Olive",
	"icon253 glex 8023": "Dangerous Ariana",
	"icon377 glex 8091": "(Fan Festa) Maiden Sakura",
	"icon378 glex 8100": "Charming Kitty Ariana",
	"icon379 glex 8097": "Sportive Ariana",
	"icon385 glex 8009": "Black Cat Lid",
/* [Others (other)] */
	"icon154 other b1": "King Gil Snapper",
	"icon155 other b2": "Mini Cactuar",
	"icon156 other b3": "Cactuar",
	"icon157 other b4": "Metal Gigantuar",
	"icon158 other b5": "Moogle",
	"icon159 other b6": "Mag Goblin",
/* [Junk] 
	"icon166 all 754": "(FF9) Eiko",
	"icon148 all 148": "Goblin",
	"icon149 all 149": "Goblin",
	"icon150 all 150": "Goblin",
	"icon151 all 151": "Goblin",
	"icon152 all 152": "Goblin",
	"icon153 all 153": "Goblin",
	"icon028 all 29": "Carrie",
	"icon161 be 161": "Reddas",*/
};
