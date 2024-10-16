/**
 * The states used by the backend
 * The shape and types of the data is as follows
  {
    fips: VARCHAR(2), // Id of the state
    name: VARCHAR(50), // Name of the state
    num_parks: INT, // Number of national parks in the state
    park_names: VARCHAR(80), // List of national park names
    numrec: INT, // Number of recreational areas in the state
    rec_ids: VARCHAR(1000), // List of recreational area ids
    pop: INT, // Population of the state 
    mail_code: VARCHAR(2), // Abbreviation of the state name
    imglink: VARCHAR(100), // Link to an image of the state flag 
  }
  */

export const locations = [
  {
    fips: "01",
    name: "Alabama",
    num_parks: "0",
    park_names: "N/A",
    numrec: 12,
    rec_ids: "1314,1349,1391,1395,1670,2040,3916,3925,3926,3927,444,452",
    pop: 4887871,
    mail_code: "AL",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Alabama.svg",
  },
  {
    fips: "02",
    name: "Alaska",
    num_parks: 2,
    park_names: "Kenai-Fjords,Kobuk-Valley",
    numrec: 7,
    rec_ids: "2787,2795,1448,16522,599,10,583",
    pop: 737438,
    mail_code: "AK",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Alaska.svg",
  },
  {
    fips: "04",
    name: "Arizona",
    num_parks: 3,
    park_names: "Grand-Canyon,Petrified-Forest,Saguaro",
    numrec: 9,
    rec_ids: "2733,2856,1093,3149,2917,16525,16861,1095,1885",
    pop: 7171646,
    mail_code: "AZ",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Arizona.svg",
  },
  {
    fips: "05",
    name: "Arkansas",
    num_parks: 1,
    park_names: "Hot-Springs",
    numrec: 7,
    rec_ids: "1037,2760,147,149,1286,537,541",
    pop: 3013825,
    mail_code: "AR",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Arkansas.svg",
  },
  {
    fips: "06",
    name: "California",
    num_parks: 6,
    park_names:
      "Channel-Islands,Death-Valley,Joshua-Tree,Lassen-Volcanic,Pinnacles,Yosemite",
    numrec: 19,
    rec_ids:
      "2631,2662,13461,13369,2782,13425,13449,1066,2803,16685,14829,14830,2893,2991,15189,613,16821,610,475",
    pop: 39557045,
    mail_code: "CA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_California.svg",
  },
  {
    fips: "08",
    name: "Colorado",
    num_parks: 3,
    park_names: "Black-Canyon-Of-The-Gunnison,Mesa-Verde,Rocky-Mountain",
    numrec: 32,
    rec_ids:
      "2651,13399,16723,16747,16725,50,16604,16701,1694,53,16702,16746,2592,1052,16533,54,2993,2824,89,9,16741,67,94,51,88,52,68,2907,1033,1054,1055,1051",
    pop: 5695564,
    mail_code: "CO",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Colorado.svg",
  },
  {
    fips: "09",
    name: "Connecticut",
    num_parks: "0",
    park_names: "N/A",
    numrec: 10,
    rec_ids: "1621,199,206,211,213,217,220,223,228,5457",
    pop: 3572665,
    mail_code: "CT",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Connecticut.svg",
  },
  {
    fips: "10",
    name: "Delaware",
    num_parks: "0",
    park_names: "N/A",
    numrec: 3,
    rec_ids: "1313,1573,3082",
    pop: 967171,
    mail_code: "DE",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Delaware.svg",
  },
  {
    fips: "12",
    name: "Florida",
    num_parks: 3,
    park_names: "Biscayne,Dry-Tortugas,Everglades",
    numrec: 9,
    rec_ids: "2588,3944,2665,2677,1273,1278,12780,12796,12799",
    pop: 21299325,
    mail_code: "FL",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Florida.svg",
  },
  {
    fips: "13",
    name: "Georgia",
    num_parks: "0",
    park_names: "N/A",
    numrec: 21,
    rec_ids:
      "1040,12789,1288,1308,1420,1544,1565,1566,1666,3070,3099,3965,4148,440,442,443,449,450,451,454,455",
    pop: 10519475,
    mail_code: "GA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Georgia.svg",
  },
  {
    fips: "15",
    name: "Hawaii",
    num_parks: 2,
    park_names: "Haleakalā,Hawaiʻi-Volcanoes", // Special case
    numrec: 8,
    rec_ids: "3104,3967,1449,2751,2753,12718,1414,1417",
    pop: 1420491,
    mail_code: "HI",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Hawaii.svg",
  },
  {
    fips: "16",
    name: "Idaho",
    num_parks: 1,
    park_names: "Yellowstone",
    numrec: 6,
    rec_ids: "2988,1019,1113,14488,1011,1012",
    pop: 1754208,
    mail_code: "ID",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Idaho.svg",
  },
  {
    fips: "17",
    name: "Illinois",
    num_parks: "0",
    park_names: "N/A",
    numrec: 19,
    rec_ids:
      "1078,12746,12800,1346,1358,1368,1389,14433,1512,1686,1689,1690,1691,1903,375,380,381,4055,4056",
    pop: 12741080,
    mail_code: "IL",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Illinois.svg",
  },
  {
    fips: "18",
    name: "Indiana",
    num_parks: 1,
    park_names: "Indiana-Dunes",
    numrec: 4,
    rec_ids: "2767,1080,1529,1559",
    pop: 6691878,
    mail_code: "IN",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Indiana.svg",
  },
  {
    fips: "19",
    name: "Iowa",
    num_parks: "0",
    park_names: "N/A",
    numrec: 11,
    rec_ids: "1378,1381,1436,1534,158,159,160,161,1654,274,4054",
    pop: 3156145,
    mail_code: "IA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Iowa.svg",
  },
  {
    fips: "20",
    name: "Kansas",
    num_parks: "0",
    park_names: "N/A",
    numrec: 28,
    rec_ids:
      "123,124,125,126,127,128,1397,1456,1574,263,265,266,269,270,271,273,277,278,3127,4058,546,551,552,553,555,562,565,572",
    pop: 2911505,
    mail_code: "KS",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Kansas.svg",
  },
  {
    fips: "21",
    name: "Kentucky",
    num_parks: 1,
    park_names: "Mammoth-Cave",
    numrec: 7,
    rec_ids: "2818,371,352,362,324,367,322",
    pop: 4468402,
    mail_code: "KY",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Kentucky.svg",
  },
  {
    fips: "22",
    name: "Louisiana",
    num_parks: "0",
    park_names: "N/A",
    numrec: 39,
    rec_ids:
      "1043,1265,1266,1267,12748,12792,1280,12814,1290,1291,1299,1306,1312,1319,1329,1337,1369,1374,1401,1418,143,144,145,1463,1476,148,1491,1498,153,155,156,157,1586,1611,1638,1657,4014,4015,4016",
    pop: 4659978,
    mail_code: "LA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Louisiana.svg",
  },
  {
    fips: "23",
    name: "Maine",
    num_parks: 1,
    park_names: "Acadia",
    numrec: 5,
    rec_ids: "2554,4064,1626,1575,4017",
    pop: 1338404,
    mail_code: "ME",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Maine.svg",
  },
  {
    fips: "24",
    name: "Maryland",
    num_parks: "0",
    park_names: "N/A",
    numrec: 8,
    rec_ids: "1309,1384,14565,1560,196,3080,3144,4063",
    pop: 6042718,
    mail_code: "MD",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Maryland.svg",
  },
  {
    fips: "25",
    name: "Massachusetts",
    num_parks: "0",
    park_names: "N/A",
    numrec: 28,
    rec_ids:
      "114,12821,1405,1445,1522,1530,1550,1557,200,202,203,205,207,208,212,215,216,225,227,229,230,3073,3102,4046,4047,4048,4060,4061",
    pop: 6902149,
    mail_code: "MA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Massachusetts.svg",
  },
  {
    fips: "26",
    name: "Michigan",
    num_parks: 1,
    park_names: "Isle-Royale",
    numrec: 5,
    rec_ids: "2769,1614,12818,3072,4095",
    pop: 9995915,
    mail_code: "MI",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Michigan.svg",
  },
  {
    fips: "27",
    name: "Minnesota",
    num_parks: 1,
    park_names: "Voyageurs",
    numrec: 6,
    rec_ids: "2970,3921,13549,178,432,3924",
    pop: 5611179,
    mail_code: "MN",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Minnesota.svg",
  },
  {
    fips: "28",
    name: "Mississippi",
    num_parks: "0",
    park_names: "N/A",
    numrec: 20,
    rec_ids:
      "1044,1370,1400,1426,146,150,1502,151,1520,1526,154,1542,1556,1617,1633,1677,3085,4050,441,448",
    pop: 2986530,
    mail_code: "MS",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Mississippi.svg",
  },
  {
    fips: "29",
    name: "Missouri",
    num_parks: 1,
    park_names: "Gateway-Arch",
    numrec: 5,
    rec_ids: "2961,13951,1086,12819,1301",
    pop: 6126452,
    mail_code: "MO",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Missouri.svg",
  },
  {
    fips: "30",
    name: "Montana",
    num_parks: 2,
    park_names: "Glacier,Yellowstone",
    numrec: 6,
    rec_ids: "2725,2988,131,135,16597,1482",
    pop: 1062305,
    mail_code: "MT",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Montana.svg",
  },
  {
    fips: "31",
    name: "Nebraska",
    num_parks: "0",
    park_names: "N/A",
    numrec: 39,
    rec_ids:
      "1056,12803,1361,1398,1539,1576,1659,1799,1993,264,281,294,295,296,297,298,299,300,301,302,303,304,305,307,3960,3961,72,73,74,75,76,77,78,79,80,81,83,84,93",
    pop: 1929268,
    mail_code: "NE",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Nebraska.svg",
  },
  {
    fips: "32",
    name: "Nevada",
    num_parks: 2,
    park_names: "Death-Valley,Great-Basin",
    numrec: 8,
    rec_ids: "2662,2113,2732,16659,1198,2104,1734,2117",
    pop: 3034392,
    mail_code: "NV",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Nevada.svg",
  },
  {
    fips: "33",
    name: "New-Hampshire",
    num_parks: "0",
    park_names: "N/A",
    numrec: 10,
    rec_ids: "222,204,221,3086,214,209,1087,1662,210,1478",
    pop: 1356458,
    mail_code: "NH",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_New_Hampshire.svg",
  },
  {
    fips: "34",
    name: "New-Jersey",
    num_parks: "0",
    park_names: "N/A",
    numrec: 9,
    rec_ids: "12793,12804,1332,1386,1408,1627,1661,3088,4075",
    pop: 8908520,
    mail_code: "NJ",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_New_Jersey.svg",
  },
  {
    fips: "35",
    name: "New-Mexico",
    num_parks: 1,
    park_names: "Carlsbad-Caverns",
    numrec: 13,
    rec_ids:
      "14606,14620,14592,14603,10038,14608,2622,2744,488,16783,15122,1100,14579",
    pop: 2095428,
    mail_code: "NM",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_New_Mexico.svg",
  },
  {
    fips: "36",
    name: "New-York",
    num_parks: "0",
    park_names: "N/A",
    numrec: 15,
    rec_ids:
      "1089,1261,1437,1524,1552,1636,1669,181,1821,186,189,3957,3997,3998,3999",
    pop: 19542209,
    mail_code: "NY",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_New_York.svg",
  },
  {
    fips: "37",
    name: "North-Carolina",
    num_parks: 1,
    park_names: "Great-Smoky-Mountains",
    numrec: 1,
    rec_ids: "2739",
    pop: 10383620,
    mail_code: "NC",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_North_Carolina.svg",
  },
  {
    fips: "38",
    name: "North-Dakota",
    num_parks: 1,
    park_names: "Theodore-Roosevelt",
    numrec: 6,
    rec_ids: "2949,1124,1125,1126,1127,1128",
    pop: 760077,
    mail_code: "ND",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_North_Dakota.svg",
  },
  {
    fips: "39",
    name: "Ohio",
    num_parks: 1,
    park_names: "Cuyahoga-Valley",
    numrec: 4,
    rec_ids: "13919,2652,1079,1340",
    pop: 11689442,
    mail_code: "OH",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Ohio.svg",
  },
  {
    fips: "40",
    name: "Oklahoma",
    num_parks: "0",
    park_names: "N/A",
    numrec: 44,
    rec_ids:
      "1131,564,575,556,573,1129,563,577,1132,574,1672,1609,567,1487,1098,1665,579,547,1133,544,548,1545,569,1037,554,570,1371,571,3958,1591,12781,566,557,545,576,558,1134,559,1135,561,581,560,10011715,1644",
    pop: 3943079,
    mail_code: "OK",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Oklahoma.svg",
  },
  {
    fips: "41",
    name: "Oregon",
    num_parks: 1,
    park_names: "Crater-Lake",
    numrec: 5,
    rec_ids: "2647,10003316,1111,10000410,1110",
    pop: 4190713,
    mail_code: "OR",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Oregon.svg",
  },
  {
    fips: "42",
    name: "Pennsylvania",
    num_parks: "0",
    park_names: "N/A",
    numrec: 25,
    rec_ids:
      "1088,1390,1446,182,184,185,187,188,190,191,194,195,197,198,393,394,395,397,398,399,405,407,409,411,412",
    pop: 12807060,
    mail_code: "PA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Pennsylvania.svg",
  },
  {
    fips: "44",
    name: "Rhode-Island",
    num_parks: "0",
    park_names: "N/A",
    numrec: 6,
    rec_ids: "1310,1537,1587,1648,3091,4004",
    pop: 1057315,
    mail_code: "RI",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Rhode_Island.svg",
  },
  {
    fips: "45",
    name: "South-Carolina",
    num_parks: 1,
    park_names: "Congaree",
    numrec: 6,
    rec_ids: "2644,1047,1255,12795,1334,1336",
    pop: 5084127,
    mail_code: "SC",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_South_Carolina.svg",
  },
  {
    fips: "46",
    name: "South-Dakota",
    num_parks: 2,
    park_names: "Badlands,Wind-Cave",
    numrec: 12,
    rec_ids: "2578,2772,286,287,1161,2980,2837,1015,1056,1057,1150",
    pop: 882235,
    mail_code: "SD",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_South_Dakota.svg",
  },
  {
    fips: "47",
    name: "Tennessee",
    num_parks: 1,
    park_names: "Great-Smoky-Mountains",
    numrec: 4,
    rec_ids: "2739,1048,1347,1363",
    pop: 6770010,
    mail_code: "TN",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Tennessee.svg",
  },
  {
    fips: "48",
    name: "Texas",
    num_parks: 2,
    park_names: "Big-Bend,Guadalupe-Mountains",
    numrec: 10,
    rec_ids: "2584,14606,14592,14584,14603,2622,2744,499,580,514",
    pop: 28701845,
    mail_code: "TX",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Texas.svg",
  },
  {
    fips: "49",
    name: "Utah",
    num_parks: 5,
    park_names: "Arches,Bryce-Canyon,Canyonlands,Capitol-Reef,Zion",
    numrec: 106,
    rec_ids:
      "16334,16337,16714,16206,2160,14494,14499,2149,14500,14528,14498,14496,14506,14503,16271,16218,14502,14497,16279,2573,16330,2198,14758,16276,16308,16285,16287,2599,16265,14499,16264,14528,16408,16471,16204,2616,16419,2617,16357,16473,16356,16367,16373,16219,16359,16372,16405,16369,16470,16368,16360,1640,16302,13416,16477,16459,16694,13340,16288,16301,2994,16325,16446,16326,16322,16324,16323,16321,16320,16316,14750,16284,16345,16386,16387,16399,16331,13374,16317,16319,16201,15110,16401,16222,16385,16391,1732,16461,16348,16437,16394,16347,16344,16395,16402,16303,16454,16379,13353,16281,13379,2017,1031,16336",
    pop: 3161105,
    mail_code: "UT",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Utah.svg",
  },
  {
    fips: "50",
    name: "Vermont",
    num_parks: "0",
    park_names: "N/A",
    numrec: 7,
    rec_ids: "1089,1519,201,218,219,224,226",
    pop: 626299,
    mail_code: "VT",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Vermont.svg",
  },
  {
    fips: "51",
    name: "Virginia",
    num_parks: 1,
    park_names: "Shenandoah",
    numrec: 5,
    rec_ids: "2933,10003301,1050,1284,1348",
    pop: 8517685,
    mail_code: "VA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Virginia.svg",
  },
  {
    fips: "53",
    name: "Washington",
    num_parks: 3,
    park_names: "Mount-Rainier,North-Cascades,Olympic",
    numrec: 8,
    rec_ids: "252,2835,2845,1120,2881,2005,1111,16822",
    pop: 7535591,
    mail_code: "WA",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Washington.svg",
  },
  {
    fips: "54",
    name: "West-Virginia",
    num_parks: "0",
    park_names: "N/A",
    numrec: 21,
    rec_ids:
      "408,309,406,334,404,1331,183,1090,310,312,1050,331,314,323,403,311,332,333,1543,315,321",
    pop: 1805832,
    mail_code: "WV",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_West_Virginia.svg",
  },
  {
    fips: "55",
    name: "Wisconsin",
    num_parks: "0",
    park_names: "N/A",
    numrec: 21,
    rec_ids:
      "1091,1399,1429,14566,14568,1483,1535,1618,162,1647,168,170,1701,171,179,180,1805,4051,4052,4092,433",
    pop: 5813568,
    mail_code: "WI",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Wisconsin.svg",
  },
  {
    fips: "56",
    name: "Wyoming",
    num_parks: 2,
    park_names: "Grand-Teton,Yellowstone",
    numrec: 9,
    rec_ids: "1532,1036,1234,13525,2988,14715,16804,16709,1060",
    pop: 577737,
    mail_code: "WY",
    imglink: process.env.PUBLIC_URL + "/flags/Flag_of_Wyoming.svg",
  },
];
