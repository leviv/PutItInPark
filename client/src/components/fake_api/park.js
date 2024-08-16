/**
 * The parks used by the backend
 * The shape and types of the data is as follows
  {
    park_code VARCHAR(5), 
    park_name VARCHAR(50), 
    location VARCHAR(30), 
    num_rec INT, 
    rec_ids VARCHAR(1000), 
    description VARCHAR(5000), 
    weather VARCHAR(5000), 
    lat Decimal(8,6), 
    lon Decimal(9,6), 
    fee DECIMAL(5,2), 
    visitors INT, 
    imglink VARCHAR(1000), 
    park_id VARCHAR(256),
  }
*/

export const parks = [
  {
    park_code: "acad",
    park_name: "Acadia",
    location: "Maine",
    num_rec: 1,
    rec_ids: "2554",
    description:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, its one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    weather:
      "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
    lat: 44.30777545,
    lon: -68.30063316,
    fee: 30,
    visitors: 3537575,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg",
    park_id: "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
  },
  {
    park_code: "arch",
    park_name: "Arches",
    location: "Utah",
    num_rec: 22,
    rec_ids:
      "16336,16334,16337,16714,16206,2160,14494,14499,2149,14500,14528,14498,14496,14506,14503,16271,16218,14502,14497,16279,2573,16330",
    description:
      "Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
    weather:
      'Arches is part of the Colorado Plateau, a "high desert" region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.',
    lat: 38.72261844,
    lon: -109.5863666,
    fee: 30,
    visitors: 1663557,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg",
    park_id: "36240051-018E-4915-B6EA-3F1A7F24FBE4",
  },
  {
    park_code: "badl",
    park_name: "Badlands",
    location: "South-Dakota",
    num_rec: 1,
    rec_ids: "2578",
    description:
      "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
    weather:
      "The Badlands weather is variable and unpredictable with temperature extremes ranging from 116° F to -40° F. Summers are hot and dry with occasional violent thunderstorms. Hailstorms and occasional tornadoes can descend on the Badlands with sudden fury. Winters are typically cold with 12 to 24 inches of total snowfall.",
    lat: 43.68584846,
    lon: -102.482942,
    fee: 25,
    visitors: 1008942,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C82EBFE-1DD8-B71B-0B21072718DB2A95.jpg",
    park_id: "B170CCF7-7AB9-48FF-950E-31815FD4DBB2",
  },
  {
    park_code: "bibe",
    park_name: "Big-Bend",
    location: "Texas",
    num_rec: 1,
    rec_ids: "2584",
    description:
      "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...",
    weather:
      "Variable: February through April the park abounds with pleasant and comfortable temperatures. May through August is hot and can also be stormy. Temperatures regularly reach well over 100 degrees in the lower elevations and along the Rio Grande. September through January temperatures are cooler; the weather can quickly turn cold at any time during these months.",
    lat: 29.29817767,
    lon: -103.2297897,
    fee: 30,
    visitors: 440091,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C84EF64-1DD8-B71B-0B44D9F693CAA78C.jpg",
    park_id: "C9056F71-7162-4208-8AE9-2D0AEFA594FD",
  },
  {
    park_code: "bisc",
    park_name: "Biscayne",
    location: "Florida",
    num_rec: 2,
    rec_ids: "2588,3944",
    description:
      "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay.",
    weather:
      "The park is situated in a subtropical climate, which ensures sunshine year-round. Winters are normally dry and mild, with occasional fronts bringing wind and little rain. Summer brings hot and humid weather with scattered thunderstorms in the afternoons. The average temperature in January is 68 degrees Fahrenheit and 82 in July. The average rainfall for the area is 2.17 inches in January and 3.95 inches in July. June to November is hurricane season.",
    lat: 25.490587,
    lon: -80.21023851,
    fee: "0.0",
    visitors: 469253,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C870533-1DD8-B71B-0B70CFF5EF6538F1.jpg",
    park_id: "FBF9F793-5114-4B61-A5BA-6F9ADDFDF459",
  },
  {
    park_code: "blca",
    park_name: "Black-Canyon-Of-The-Gunnison",
    location: "Colorado",
    num_rec: 14,
    rec_ids:
      "2651,13399,16723,16747,16725,50,16604,16701,1694,53,16702,16746,2592,1052",
    description:
      "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
    weather:
      "Weather can vary greatly throughout the day. Summer daytime temperatures range between 55 to 90F (13 to 32C), nights 45 to 60F (7 to 16C). Winter daytime temperatures range between 15 to 40F (-9 to 4C), nights 10 to 20F (-12 to -6C). Afternoon thunderstorms are common during the summer. Snow accumulation varies greatly year to year. Layered clothing appropriate for the season is recommended.",
    lat: 38.57779869,
    lon: -107.7242756,
    fee: 20,
    visitors: 308962,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg",
    park_id: "BDBD573F-97EF-44E7-A579-471679F2C42A",
  },
  {
    park_code: "brca",
    park_name: "Bryce-Canyon",
    location: "Utah",
    num_rec: 7,
    rec_ids: "2198,14758,16276,16308,16285,16287,2599",
    description:
      "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the parks high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
    weather:
      "http://forecast.weather.gov/MapClick.php?lat=37.63&lon=-112.17#.VpUamdHUhaR",
    lat: 37.58399144,
    lon: -112.1826689,
    fee: 35,
    visitors: 2679478,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7F8B29-1DD8-B71B-0B5EA38E8C5E5606.jpg",
    park_id: "6B1D053D-714F-46D1-B410-04BE868F14C1",
  },
  {
    park_code: "cany",
    park_name: "Canyonlands",
    location: "Utah",
    num_rec: 9,
    rec_ids: "16265,14499,16264,14528,16408,16471,16204,2616,16419",
    description:
      "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
    weather:
      'Canyonlands is part of the Colorado Plateau, a "high desert" region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.',
    lat: 38.24555783,
    lon: -109.8801624,
    fee: 30,
    visitors: 739449,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7A4FC2-1DD8-B71B-0B13118C99270C08.jpg",
    park_id: "319E07D8-E176-41F8-98A9-1E3F8099D0AB",
  },
  {
    park_code: "care",
    park_name: "Capitol-Reef",
    location: "Utah",
    num_rec: 15,
    rec_ids:
      "2617,16357,16473,16356,16367,16373,16219,16359,16372,16405,16369,16470,16368,16360,16406",
    description:
      "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
    weather:
      "Weather is posted daily; check at the park visitor center for weather updates. Do not enter into narrow canyons if there is a threat of rain or if rain has been falling in the area.",
    lat: 38.2821653130533,
    lon: -111.247048377991,
    fee: 20,
    visitors: 1227627,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C82E3C7-1DD8-B71B-0B4181834EE46AED.jpg",
    park_id: "2F05E2B8-CDA3-434E-9C4C-C7DD828CAC3B",
  },
  {
    park_code: "cave",
    park_name: "Carlsbad-Caverns",
    location: "New-Mexico",
    num_rec: 8,
    rec_ids: "14606,14620,14592,14603,10038,14608,2622,2744",
    description:
      "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.",
    weather:
      "Carlsbad Caverns National Park is located in the Chihuahuan Desert in southeast New Mexico. Summers are hot with temperatures between 90°F (32°C) and low 100s °F (38°C). Windy conditions and mild temperatures are common in early spring (March-May) with frequent rain in early fall (August-September). This part of the country also sees cold temperatures in the winter with occasional snow and icy conditions. Most days, the park is enveloped by a gorgeous blue sky with very few clouds, 278 sunny days a year!",
    lat: 32.14089463,
    lon: -104.5529688,
    fee: 12,
    visitors: 465912,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C82342F-1DD8-B71B-0BAD8438A2A16379.jpg",
    park_id: "6FDE39B1-AB4A-4C9A-A5CD-4AF67601CD78",
  },
  {
    park_code: "chis",
    park_name: "Channel-Islands",
    location: "California",
    num_rec: 1,
    rec_ids: "2631",
    description:
      "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
    weather:
      "In general, the islands have a Mediterranean climate year-round. Temperatures are relatively stable, with highs averaging in the mid-60s (°F) and lows in the low-50s. However, there are seasonal differences that visitors should take into consideration when visiting the park. In addition, visitors also should be aware that ocean and weather conditions vary considerably from day-to-day and island-to-island. For more information visit: http://www.nps.gov/chis/planyourvisit/weather.htm",
    lat: 33.98680093,
    lon: -119.9112735,
    fee: "0.0",
    visitors: 366250,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7A6DDF-1DD8-B71B-0B7621DF7FCB2093.jpg",
    park_id: "5595FC7A-F218-4439-8D2E-F47449838820",
  },
  {
    park_code: "cong",
    park_name: "Congaree",
    location: "South-Carolina",
    num_rec: 1,
    rec_ids: "2644",
    description:
      "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
    weather:
      "Check the forecast before getting on the road. Conditions can change rapidly within the park. Flooding can happen with little or no warning, so make sure to check water levels for Cedar Creek and the Congaree River.",
    lat: 33.79187523,
    lon: -80.74867805,
    fee: "0.0",
    visitors: 145929,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C862C60-1DD8-B71B-0BB65F7B652BA840.jpg",
    park_id: "EEBA7225-7FF5-4B62-B60C-6BBC66351A4E",
  },
  {
    park_code: "crla",
    park_name: "Crater-Lake",
    location: "Oregon",
    num_rec: 1,
    rec_ids: "2647",
    description:
      "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
    weather:
      "October through June Crater Lake is snow covered. Snowfall averages 533 inches (1,350 cm) annually, and by early spring, it is typical to have ten to fifteen feet (4 meters) of snow on the ground. July, August, and September are drier and warmer. A typical daytime high temperature during these three months is around 67°F (19°C), but can range from 40°F to 80°F or more (4°C to 27°C). Temperatures cool off rapidly in the evening, with a typical nighttime low around 40°F (4°C).",
    lat: 42.94065854,
    lon: -122.1338414,
    fee: 15,
    visitors: 720659,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg",
    park_id: "7DC1050A-0DDE-4EF9-B777-3C9349BCC4DE",
  },
  {
    park_code: "cuva",
    park_name: "Cuyahoga-Valley",
    location: "Ohio",
    num_rec: 2,
    rec_ids: "13919,2652",
    description:
      "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
    weather:
      "Springs rain and warming temperatures bring new leaves on trees, blooming wildflowers, and visitors anxious get out on the trail. Summer temperatures range from 49 to 95 degrees F and can be humid. Dressing in layers is advisable. Fall temperatures can range from low 70s during the day to freezing during the night. Fall foliage often peaks in mid-October. Winter weather conditions can rapidly change, due to the lake effect snow from Lake Erie. Temperatures vary from mid-30s to below zero.",
    lat: 41.26093905,
    lon: -81.57116722,
    fee: "0.0",
    visitors: 2096053,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/50001FF6-1DD8-B71B-0BECA954B0F991BF.jpg",
    park_id: "F4D44F29-3F67-498F-B05B-0783473D2708",
  },
  {
    park_code: "deva",
    park_name: "Death-Valley",
    location: "California,Nevada",
    num_rec: 1,
    rec_ids: "2662",
    description:
      "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.",
    weather:
      "AUTUMN arrives in late October, with warm but pleasant temperatures and generally clear skies. WINTER has cool days, chilly nights and rarely, rainstorms. With snow capping the high peaks and low angled winter light, this season is especially beautiful for exploring the valley. SPRINGTIME is the most popular time to visit Death Valley. Besides warm and sunny days, the possibility of spring wildflowers is a big attraction. SUMMER starts early in Death Valley. By May the valley is too hot for most visitors",
    lat: 36.48753731,
    lon: -117.134395,
    fee: 30,
    visitors: 1678660,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7EC929-1DD8-B71B-0B6F8851F7D62846.jpg",
    park_id: "FFC9F9C4-D79D-4CA7-AB0F-7A2AD30061CD",
  },
  {
    park_code: "drto",
    park_name: "Dry-Tortugas",
    location: "Florida",
    num_rec: 1,
    rec_ids: "2665",
    description:
      "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
    weather:
      "The climate in the Dry Tortugas is subtropical, which basically means that it has warm and tropical weather in the range of 60°F to 90°F. The two main seasons are the winter stormy season from December through March which is windier and sees rougher seas, and the summertime tropical storm season from June through November where there is a higher chance of isolated storms. During the summers it is hot and humid. During the winter the temperature is milder and drier.",
    lat: 24.628741,
    lon: -82.87319,
    fee: 10,
    visitors: 56810,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C80FF02-1DD8-B71B-0B39AC51BF7B2FA2.jpg",
    park_id: "167A05D1-5793-49E0-89FE-0A1DDFA9A7F4",
  },
  {
    park_code: "ever",
    park_name: "Everglades",
    location: "Florida",
    num_rec: 1,
    rec_ids: "2677",
    description:
      "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther. An international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
    weather:
      "The climate in Florida is known to be mild and sunny.The average annual temperatures for South Florida and the Keys range from 74° to 77°F (23° to 25°C). There are two seasons at the Everglades National Park: the wet season and the dry season. The wet season runs from Mid-May to November and the dry season runs from December to mid-May.",
    lat: 25.37294225,
    lon: -80.88200301,
    fee: 25,
    visitors: 597124,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C854681-1DD8-B71B-0BA4F6D9379336DF.jpg",
    park_id: "5EA02193-276A-4037-B7DB-5765A56935FD",
  },
  {
    park_code: "jeff",
    park_name: "Gateway-Arch",
    location: "Missouri",
    num_rec: 2,
    rec_ids: "2961,13951",
    description:
      "The Gateway Arch reflects St. Louis role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jeffersons role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
    weather:
      "Temperatures range from 30F in the winter to 80F in the summer months.",
    lat: 38.6258069,
    lon: -90.1892508,
    fee: 3,
    visitors: 2016180,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7BD9B5-1DD8-B71B-0B598216CE4E46D0.jpg",
    park_id: "BD588493-EC77-4B97-B73E-3BA444864DC5",
  },
  {
    park_code: "glac",
    park_name: "Glacier",
    location: "Montana",
    num_rec: 1,
    rec_ids: "2725",
    description:
      "Come and experience Glaciers pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hikers paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
    weather:
      "Glaciers weather is highly variable and can be extreme. Expect warm sunny summer days and in the winter the temperatures can fall well below freezing. Glaciers geography, straddling the Continental Divide, sets the stage for clashes of two very different climates. Warm, wet Pacific air moves in from the west, and cold dry Arctic air from the northeast. They meet at the Divide.",
    lat: 48.68414678,
    lon: -113.8009306,
    fee: 35,
    visitors: 2965309,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7FEF84-1DD8-B71B-0B26F3C536955733.jpg",
    park_id: "2B5178C6-2446-488C-AC31-47E3CEBF7159",
  },
  {
    park_code: "grca",
    park_name: "Grand-Canyon",
    location: "Arizona",
    num_rec: 1,
    rec_ids: "2733",
    description:
      "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    weather:
      "This weather varies with cold winters and mild pleasant summers, moderate humidity, and considerable diurnal temperature changes at the higher elevations, with hot and drier summers at the bottom of the Grand Canyon along with cool damp winters. Summer thunderstorms and winter snowfall adds to the weather variety in this region.",
    lat: 36.17280161,
    lon: -112.6836024,
    fee: 35,
    visitors: 6380495,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg",
    park_id: "B7FF43E5-3A95-4C8E-8DBE-72D8608D6588",
  },
  {
    park_code: "grte",
    park_name: "Grand-Teton",
    location: "Wyoming",
    num_rec: 4,
    rec_ids: "1532,1036,1234,13525",
    description:
      "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place.",
    weather:
      "Jackson Hole has long, cold winters; snow and frost are possible any month. mid-April, May & June - Mild days and cool nights alternate with rain and snow. July & August - Warm days and cool nights prevail, with afternoon thundershowers common. September, October & November - Sunny days and cold nights alternate with rain and occasional snowstorms. December to mid-April - Between storms the days are sunny and nights are frigid. Snow blankets the mountains and valley.",
    lat: 43.81853565,
    lon: -110.7054666,
    fee: 35,
    visitors: 3491151,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7FA4C5-1DD8-B71B-0B7FCC54E43FEE79.jpg",
    park_id: "FF73E2AA-E274-44E1-A8F5-9DD998B0F579",
  },
  {
    park_code: "grba",
    park_name: "Great-Basin",
    location: "Nevada",
    num_rec: 2,
    rec_ids: "2113,2732",
    description:
      "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. Theres a whole lot more than just desert here!",
    weather:
      "There is almost an 8,000 ft (2,400 m) difference in elevation between Wheeler Peak and the valley floor. Weather conditions in the park vary with elevation. In late spring and early summer, days in the valley may be hot, yet the snow pack may not have melted in the higher elevations. The Great Basin is a desert, with low relative humidity and sharp drops in temperature at night. In the summer, fierce afternoon thunderstorms are common. It can snow any time of the year at high elevations.",
    lat: 38.94617378,
    lon: -114.2579782,
    fee: "0.0",
    visitors: 153094,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C876E30-1DD8-B71B-0B6A6CDF68B4FA89.jpg",
    park_id: "4C1A549B-080F-4522-9CA7-67BB5A0845CA",
  },
  {
    park_code: "grsm",
    park_name: "Great-Smoky-Mountains",
    location: "North-Carolina,Tennessee",
    num_rec: 1,
    rec_ids: "2739",
    description:
      "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is Americas most visited national park.",
    weather:
      "Elevations in the park range from approximately 875 feet to 6,643 feet and the topography can drastically affect local weather. Temperatures can vary 10-20 degrees Fahrenheit from mountain base to top, and clear skies lower down do not guarantee equally pleasant weather at higher elevations. Visit http://www.nps.gov/grsm/planyourvisit/weather.htm for seasonal weather information and links to local forecasts.",
    lat: 35.60116374,
    lon: -83.50818326,
    fee: "0.0",
    visitors: 11421200,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg",
    park_id: "D9819727-18DF-4A84-BDDE-D4F2696DE340",
  },
  {
    park_code: "gumo",
    park_name: "Guadalupe-Mountains",
    location: "Texas",
    num_rec: 6,
    rec_ids: "14606,14592,14584,14603,2622,2744",
    description:
      "Guadalupe Mountains National Park protects the worlds most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival. Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other within the NPS.",
    weather:
      "Weather in the Guadalupe Mountains can change in an instant. In the Spring and Summer, average temperatures vary with highs between 70F-80F+ with evening lows in the 40F-60F range. The Fall and Winter bring milder temperatures with highs in between 50F-60F with evening lows in the 30F-50F range.",
    lat: 31.92304462,
    lon: -104.885527,
    fee: 7,
    visitors: 172347,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C825533-1DD8-B71B-0B6FDF436F604A3C.jpg",
    park_id: "6510001B-685D-4688-A963-4ECE7AB609DB",
  },
  {
    park_code: "hale",
    park_name: "Haleakala",
    location: "Hawaii",
    num_rec: 4,
    rec_ids: "3104,3967,1449,2751",
    description:
      "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
    weather:
      "On any given day, the temperatures in the park can range from a high of 80°F (27°C) in Kīpahulu to a low of 30°F (-1°C) at the summit. In either area clouds and rain can quickly replace warm sunshine.Weather in the high-elevation summit and wilderness areas of the park is highly unpredictable and changes often. Cool temperatures, intense solar radiation, and rapidly moving clouds are characteristic. On average, the temperature drops about 3°F for every 1,000 foot rise in elevation.",
    lat: 20.70693015,
    lon: -156.1591775,
    fee: 25,
    visitors: 1044084,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C87A368-1DD8-B71B-0BD44B189D0D9368.jpg",
    park_id: "4930BAEB-A3BF-4825-9796-DCD0FD1C3BD5",
  },
  {
    park_code: "havo",
    park_name: "Hawaii-Volcanoes",
    location: "Hawaii",
    num_rec: 1,
    rec_ids: "2753",
    description:
      "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cultural landscapes in the world. Extending from sea level to the summit of Mauna Loa at 13,677 feet, the park encompasses the summits of two of the worlds most active volcanoes - Kīlauea and Mauna Loa.",
    weather:
      "The weather at Kīlaueas summit (4000 elevation) varies daily and may be rainy and chilly any time of the year. Temperature varies by elevation. At the summit of the volcano, temperatures may be 12 to 15 degrees cooler than at sea level. The coastal plain at the end of Chain of Craters Road, where lava crossed the road in 2003, is often hot, dry, and windy with the possibility of passing showers.",
    lat: 19.3355036,
    lon: -155.4700257,
    fee: 25,
    visitors: 1116891,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7AE1CB-1DD8-B71B-0B485C48F98A0041.jpg",
    park_id: "D9BF4288-9AC3-4526-9598-BE8920839ACC",
  },
  {
    park_code: "hosp",
    park_name: "Hot-Springs",
    location: "Arkansas",
    num_rec: 4,
    rec_ids: "1037,2760,147,149",
    description:
      'Water. Thats what first attracted people, and they have been coming here ever since to use these soothing thermal waters to heal and relax. Rich and poor alike came for the baths, and a thriving city built up around the hot springs. Together nicknamed "The American Spa," Hot Springs National Park today surrounds the north end of the city of Hot Springs, Arkansas. Come discover it for yourself.',
    weather:
      "Temperatures range from >100°F (38°C) to <20°F (-7°C). Spring has the highest average rainfall. Summer temperatures frequently reach the triple-digit range and high humidity. Fall begins fall colors and cooler temperatures. Frost starts to become more common. Winter  temperatures often fall below 33 degrees and occasionally drop below 0. Roads may be icy. Your visit can be more enjoyable by checking the forecast and coming prepared for hikes or walks in the park.",
    lat: 34.52414366,
    lon: -93.06332936,
    fee: "0.0",
    visitors: 1506887,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C8309AE-1DD8-B71B-0B640467D9BE54A5.jpg",
    park_id: "ED9C0322-68FB-4DE1-A884-61C623281C9D",
  },
  {
    park_code: "indu",
    park_name: "Indiana-Dunes",
    location: "Indiana",
    num_rec: 1,
    rec_ids: "2767",
    description:
      "Indiana Dunes National Park hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national parks 15,000 acres will continually enchant you.  Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
    weather:
      "On average, the warmest month is July and the highest recorded temperature was 105F in 1934. The coolest month is January, with the lowest recorded temperature of -25F in 1985. June sees the most precipitation with an average rainfall of 4.66 Inches.",
    lat: 41.63765525,
    lon: -87.09647445,
    fee: 6,
    visitors: 1756079,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7E3DAC-1DD8-B71B-0B0035A5D6759FE5.jpg",
    park_id: "473EFACE-EE15-4A4F-AA6C-666810A9E27D",
  },
  {
    park_code: "isro",
    park_name: "Isle-Royale",
    location: "Michigan",
    num_rec: 1,
    rec_ids: "2769",
    description:
      "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, youll find opportunities for reflection and discovery, and make memories that last a lifetime.",
    weather:
      "Isle Royale National Park is a remote island wilderness in the middle of Lake Superior.  Weather influences traveling to and from the island, as well as your trip once you arrive.  For the most up-to-date weather information, call (906) 482-0984 or email isro_parkinfo@nps.gov prior to your trip.",
    lat: 48.01145819,
    lon: -88.82780657,
    fee: 7,
    visitors: 25798,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7AC355-1DD8-B71B-0B9C2F07853F39F1.jpg",
    park_id: "0F6893CF-FC15-4AC5-8C95-E70FC9C21B1A",
  },
  {
    park_code: "jotr",
    park_name: "Joshua-Tree",
    location: "California",
    num_rec: 5,
    rec_ids: "13461,13369,2782,13425,13449",
    description:
      "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
    weather:
      "Days are typically clear with less than 25% humidity. Temperatures are most comfortable in the spring and fall, with an average highs around 85°F (29°C) and average lows around 50°F (10°C) respectively. Winter brings cooler days, around 60°F (15°C), and freezing nights. It occasionally snows at higher elevations. Summers are hot, over 100°F (38°C) during the day and not cooling much below 75°F (24°C) at night.",
    lat: 33.91418525,
    lon: -115.8398125,
    fee: 30,
    visitors: 2942382,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C85E84D-1DD8-B71B-0B188E7820D60F14.jpg",
    park_id: "F5CD58FB-05DC-4074-99DA-F327A537F1BC",
  },
  {
    park_code: "kefj",
    park_name: "Kenai-Fjords",
    location: "Alaska",
    num_rec: 1,
    rec_ids: "2787",
    description:
      "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
    weather:
      "The weather  Kenai Fjords is difficult to predict and can change rapidly. The area generally enjoys a relatively temperate maritime climate, primarily due to the influence of the Japanese current that flows through the Gulf of Alaska. Summer daytime temperatures range from the mid 40s to the low 70s (Fahrenheit). Overcast and cool rainy days are frequent. Winter temperatures can range from the low 30s to -20.",
    lat: 59.81804414,
    lon: -150.106502,
    fee: "0.0",
    visitors: 321596,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg",
    park_id: "11E73438-0CCC-4441-A76A-1995F67F2D89",
  },
  {
    park_code: "kova",
    park_name: "Kobuk-Valley",
    location: "Alaska",
    num_rec: 1,
    rec_ids: "2795",
    description:
      "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.",
    weather:
      "Snow, rain, and freezing temperatures can occur any time of the year. Always travel with good quality rain gear and warm layers. Be especially careful to stay dry. Hypothermia can set in on a windy, wet day, even when it doesnt feel that cold.",
    lat: 67.35631336,
    lon: -159.2002293,
    fee: "0.0",
    visitors: 14937,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7A1214-1DD8-B71B-0B00D823BD9BF4CF.jpg",
    park_id: "691831BF-F280-4E02-BF4A-FF476BC66B23",
  },
  {
    park_code: "lavo",
    park_name: "Lassen-Volcanic",
    location: "California",
    num_rec: 2,
    rec_ids: "1066,2803",
    description:
      "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered.",
    weather:
      "Weather at Lassen can vary dramatically throughout the year. Average January temperatures are a high of 40.4 °F (4.7 °C) and a low of 20.8 °F (-6.2 °C). Average July temperatures are a high of 88.4 °F and a low of 49.8 °F. Temperatures reach 90 °F or higher on an average of 36.9 days, and drop to 32 ° or lower on an average of 164 days days annually.",
    lat: 40.49354575,
    lon: -121.4075993,
    fee: 10,
    visitors: 499435,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C873811-1DD8-B71B-0B9C62ED8E12E7B5.jpg",
    park_id: "9AA4A53C-0331-43CC-99F5-379BC929FFB2",
  },
  {
    park_code: "maca",
    park_name: "Mammoth-Cave",
    location: "Kentucky",
    num_rec: 3,
    rec_ids: "2818,371,352",
    description:
      'Mammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. This is the worlds longest known cave system, with more than 400 miles (643 km) explored. Early guide Stephen Bishop called the cave a "grand, gloomy and peculiar place," but its vast chambers and complex labyrinths have earned its name - Mammoth.',
    weather:
      "Kentucky has a moderate climate with warm, yet moist conditions. Summers average in the high 80s; winters average in the low 40s. Southern Kentucky, where Mammoth Cave is located, receives the highest average precipitation for the state, about 50 inches per year, mostly in spring. Winter can bring mild to moderate snow and ice. Storms happen year-round, and can include tornadoes and flooding in low-lying areas, but severe weather is infrequent. The temperature deep in the cave is a constant 54°F (12°C).",
    lat: 37.19760458,
    lon: -86.13090198,
    fee: "0.0",
    visitors: 553206,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/6FE16EEF-1DD8-B71B-0BA9538F9BF50B2F.jpg",
    park_id: "6A1737A1-6848-4087-AAF7-68A427247357",
  },
  {
    park_code: "meve",
    park_name: "Mesa-Verde",
    location: "Colorado",
    num_rec: 4,
    rec_ids: "16533,54,2993,2824",
    description:
      "Mesa Verde National Park was established in 1906 to preserve and interpret the archeological heritage of the Ancestral Pueblo people who made it their home for over 700 years, from 600 to 1300 CE. Today, the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States.",
    weather:
      "Spring: Temps range from 40 F to 70 F, but snowstorms can occur as late as May. Summer: Temps can reach well into the 90s F. Thunderstorms are common in July and August. Be prepared to bring and DRINK plenty of water. Fall: Temps can range from 50 F to 75 F. Snowstorms can occur as early as October. Winter: Temps can range from the teens to low 30s F. Icy roads are common. Snow tires, all-wheel drive, or chains, may be required. Be prepared with water, snacks, and layers of warm clothing.",
    lat: 37.23908345,
    lon: -108.4624032,
    fee: 25,
    visitors: 563420,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7C0089-1DD8-B71B-0BC397BA671C0616.jpg",
    park_id: "BE3A981E-BB55-474D-8A0E-D711408682DC",
  },
  {
    park_code: "mora",
    park_name: "Mount-Rainier",
    location: "Washington",
    num_rec: 2,
    rec_ids: "252,2835",
    description:
      "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
    weather:
      "Weather patterns at Mount Rainier are strongly influenced by the Pacific Ocean and elevation. The climate is generally cool and rainy, with summer highs in the 60s and 70s. While July and August are the sunniest months of the year, rain is very likely in spring, fall, and winter. Visitors should be aware that mountain weather is very changeable. In the higher elevations, like Paradise, winter can last from November to May with many feet of snow on the ground.",
    lat: 46.86075416,
    lon: -121.7043885,
    fee: 30,
    visitors: 1518491,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7C68E6-1DD8-B71B-0B42E9A3C7ECA52D.jpg",
    park_id: "07229CB8-8533-4669-B614-2B884779DD93",
  },
  {
    park_code: "noca",
    park_name: "North-Cascades",
    location: "Washington",
    num_rec: 1,
    rec_ids: "2845",
    description:
      "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earths changing climate. Help steward the ecological heart of the Cascades.",
    weather:
      "The best weather for visiting the North Cascades generally occurs between mid-June and late-September. Summer daytime temperatures average in the 70s F. Snow is off most trails by mid-July. Autumn and Spring are popular for color and wildlife. Storms are common: always be prepared for a few days of rain and wind. The east side of the Cascade Mountains (Lake Chelan National Recreation Area) is drier and warmer in the summer than the west side. Summer temperatures at Stehekin reach the 90s F.",
    lat: 48.71171756,
    lon: -121.2069423,
    fee: "0.0",
    visitors: 30085,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg",
    park_id: "80EB184D-4B6D-4AD2-B6E2-CAAD6312B27D",
  },
  {
    park_code: "olym",
    park_name: "Olympic",
    location: "Washington",
    num_rec: 3,
    rec_ids: "1120,2881",
    description:
      "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
    weather:
      "Summers tend to be fair and warm, with high temperatures between 65 and 75 degrees F. July, August and September are the driest months, with heavier precipitation during the rest of the year. While winters are mild at lower elevation, snowfall can be heavy in the mountains. It is common for different weather conditions to exist within the park at the same time.  At any time of year, visitors should come prepared for a variety of conditions.",
    lat: 47.80392754,
    lon: -123.6663848,
    fee: 30,
    visitors: 3104455,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7B1A8C-1DD8-B71B-0B15D930BD8214F5.jpg",
    park_id: "81CFE898-AD06-4C0D-8A9B-C8D356273F0D",
  },
  {
    park_code: "pefo",
    park_name: "Petrified-Forest",
    location: "Arizona",
    num_rec: 1,
    rec_ids: "2856",
    description:
      "Did you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Marthas Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!",
    weather:
      "Petrified Forest National Park is a semi-arid grassland. Temperatures range from above 100° F (38° C) to well below freezing. About 10 inches (25.4 cm) of moisture comes during infrequent snow in the winter and often dramatic summer thunder-storms. Animals and plants are adapted to extremes in temperature and moisture. You should be ready too. Check out the forecast before you arrive and plan accordingly.",
    lat: 34.98387664,
    lon: -109.7877678,
    fee: 20,
    visitors: 644922,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7D8213-1DD8-B71B-0BE4A3B9394FD89A.jpg",
    park_id: "1ABD0EFF-AC09-4EA1-8CC1-2351A3E160D0",
  },
  {
    park_code: "pinn",
    park_name: "Pinnacles",
    location: "California",
    num_rec: 4,
    rec_ids: "16685,14829,14830,2893",
    description:
      "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
    weather:
      "Pinnacles National Park has a Mediterranean climate with hot and dry summers, and mild winters with moderate precipitation. The park is several miles inland from the Pacific Ocean. A wider variation in seasonal temperatures can be expected in the local area. On July or August day, daytime temperatures over 100° F are not uncommon, but a bright sunny day can turn into a very cold night.",
    lat: 36.49029208,
    lon: -121.1813607,
    fee: 30,
    visitors: 222152,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C86A8CB-1DD8-B71B-0BAE8F7141CCBB1B.jpg",
    park_id: "9B266961-3364-43D2-9A08-82BB5EF5643F",
  },
  {
    park_code: "romo",
    park_name: "Rocky-Mountain",
    location: "Colorado",
    num_rec: 10,
    rec_ids: "89,9,16741,67,94,51,88,52,68,2907",
    description:
      "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
    weather:
      "Winter (Dec–Mar): cold weather, deep snow at higher elevations, and seasonal closures of facilities and roads. Spring (April–May): unpredictable weather, with a mix of warm sunny days and cool days with heavy snow and rain. Many trails are still snow-covered. Trail Ridge Road opens in late May. Summer (Jun–Aug): warmer weather, thunderstorms, and wildflowers. Most park roads and facilities are open. Fall (Sep–Nov): crisp air, blue skies, fall colors, and the elk rut. Trail Ridge Road closes mid-October.",
    lat: 40.3556924,
    lon: -105.6972879,
    fee: 25,
    visitors: 4590493,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7ECB23-1DD8-B71B-0BC28A0330D6D8D6.png",
    park_id: "67A56B17-F533-4A56-B2DA-26091C6AD295",
  },
  {
    park_code: "sagu",
    park_name: "Saguaro",
    location: "Arizona",
    num_rec: 3,
    rec_ids: "1093,3149,2917",
    description:
      "Tucson, Arizona is home to the nations largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
    weather:
      "Winter Season With daytime temperature from the low 50s to the high 70s Summer Season As we get deeper into the summer season, temperatures will range from mid-90s to low 110s. This is a great time to experience the desert as the day breaks or in the late of the day as the sun disappears behind the surrounding mountain ranges. During the late spring and summer months Saguaro National Park only offers interpretive programs on an intermittent basis.",
    lat: 32.20909636,
    lon: -110.7574974,
    fee: 20,
    visitors: 957405,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C858462-1DD8-B71B-0BB499810C61332C.jpg",
    park_id: "A6F169CF-B830-499C-A5EB-A35138C77589",
  },
  {
    park_code: "shen",
    park_name: "Shenandoah",
    location: "Virginia",
    num_rec: 1,
    rec_ids: "2933",
    description:
      "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is your escape to recreation and re-creation. Cascading waterfalls, spectacular vistas, quiet wooded hollows—take a hike, meander along Skyline Drive, or picnic with the family. 200,000 acres of protected lands are haven to deer, songbirds, the night sky…and you. Plan a Shenandoah escape today!",
    weather:
      "Shenandoah experiences four distinct seasons. Best known for its fall foliage, the park is also spectacular in spring when the wildflowers and trees are in full bloom. Summer brings lush greens and relief from the hot valleys. The parks elevation encourages as much as a 10 degree temperature difference. In winter, this means that when surrounding lowlands are experiencing rain, the the park can be blanketed in snow and ice. Its always a good idea to be prepared for varying weather.",
    lat: 38.49236644,
    lon: -78.46907715,
    fee: 30,
    visitors: 1264880,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C80B539-1DD8-B71B-0BEAAA4AC31E7D5B.jpg",
    park_id: "E991C8BC-C203-4A09-AFD5-87380CF5C387",
  },
  {
    park_code: "thro",
    park_name: "Theodore-Roosevelt",
    location: "North-Dakota",
    num_rec: 1,
    rec_ids: "2949",
    description:
      "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
    weather: "In winter, some or all park roads may be closed due to snow.",
    lat: 47.17777274,
    lon: -103.4300083,
    fee: 30,
    visitors: 749389,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7939C8-1DD8-B71B-0B048D7EC3812DE3.jpg",
    park_id: "B5FE5682-7981-47DD-AC96-13F4B33A466E",
  },
  {
    park_code: "voya",
    park_name: "Voyageurs",
    location: "Minnesota",
    num_rec: 1,
    rec_ids: "2970",
    description:
      "With over 40% of the park water, Voyageurs is a maze of interconnected water highways. Plan ahead before coming to this water park by bringing your own watercraft, reserving a watercraft, or taking a park ranger boat tour.",
    weather:
      "There are four distinct seasons in Voyageur country.  The air is temperate during June, July, and August when periods of fine, mild weather prevail.  The frost-free season averages 120 days from June to mid-September.  The average ice-out date is May 3 but varies year to year.  Annual precipitation (rain and snow) averages 25-28 inches in the park and snowfall ranges from 55-70 inches, but is highly variable.  The first measurable snowfall occurs in late October and the last in late April or early May.",
    lat: 48.48370609,
    lon: -92.8382913,
    fee: "0.0",
    visitors: 239656,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C8405EF-1DD8-B71B-0B42909E4E77E144.jpg",
    park_id: "859727CB-2812-40DF-B8DB-D4AE9EA00089",
  },
  {
    park_code: "wica",
    park_name: "Wind-Cave",
    location: "South-Dakota",
    num_rec: 6,
    rec_ids: "2772,286,287,1161,2980,2837",
    description:
      "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of Americas oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
    weather:
      "Spring:  Highs range from 50 - 70 F with highly variable weather. Spring is the parks wettest season. Summer:  Warm and generally dry with highs in the 80s F. Thunderstorms are common and can produce large hail and severe lightning. Fall:  Generally dry with warm days and cool nights. Highs in the 50s - 60s F. Lows below freezing are common. Winter: Highs in the upper 30s F with lows in the 10s F. Snowfall averages 30 inches annually, periodically closing park roads.",
    lat: 43.58012365,
    lon: -103.4394709,
    fee: "0.0",
    visitors: 656379,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7ACD12-1DD8-B71B-0BEF13804E4498FF.jpg",
    park_id: "37C48EE0-2881-4D22-8F91-A249AE3B0CD0",
  },
  {
    park_code: "yell",
    park_name: "Yellowstone",
    location: "Idaho,Montana,Wyoming",
    num_rec: 1,
    rec_ids: "2988",
    description:
      "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.",
    weather:
      "Yellowstones weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70°F (25°C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below 0°F (-18°C), especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer.",
    lat: 44.59824417,
    lon: -110.5471695,
    fee: 35,
    visitors: 4115000,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg",
    park_id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  },
  {
    park_code: "yose",
    park_name: "Yosemite",
    location: "California",
    num_rec: 1,
    rec_ids: "2991",
    description:
      "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
    weather:
      "Yosemite National Park covers nearly 1,200 square miles (3,100 square km) in the Sierra Nevada, with elevations ranging from about 2,000 feet (600 m) to 13,000 ft (4,000 m). Yosemite receives 95% of its precipitation between October and May (and over 75% between November and March). Most of Yosemite is blanketed in snow from about November through May. (Yosemite Valley can be rainy or snowy in any given winter storm.)",
    lat: 37.84883288,
    lon: -119.5571873,
    fee: 35,
    visitors: 4009236,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C84C3C0-1DD8-B71B-0BFF90B64283C3D8.jpg",
    park_id: "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
  },
  {
    park_code: "zion",
    park_name: "Zion",
    location: "Utah",
    num_rec: 50,
    rec_ids:
      "13379,16302,13416,16477,16459,16694,13340,16288,16301,2994,16325,16446,16326,16322,16324,16323,16321,16320,16316,14750,16284,16345,16386,16387,16399,16331,13374,16317,16319,16201,15110,16401,16222,16385,16391,1732,16461,16348,16437,16394,16347,16344,16395,16402,16303,16454,16379,13353,16281",
    description:
      "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
    weather:
      "Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F. In summer, temperatures in Zion National Park often exceed 100°F/38°C. Zion experiences monsoons from mid-July into September that results in an increased risk of flash floods. Always be aware of the threat of storms and lightning and be prepared for a wide range of weather conditions. Winters are generally mild.",
    lat: 37.29839254,
    lon: -113.0265138,
    fee: 35,
    visitors: 4320033,
    imglink:
      "https://www.nps.gov/common/uploads/structured_data/3C7EFF41-1DD8-B71B-0B50E940FE9F2658.jpg",
    park_id: "41BAB8ED-C95F-447D-9DA1-FCC4E4D808B2",
  },
];
