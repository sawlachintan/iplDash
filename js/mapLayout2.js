const runsData = {
    "City": ["Abu Dhabi", "Ahmedabad", "Bangalore", "Bloemfontein", "Cape Town", "Centurion", "Chandigarh", "Chennai", "Cuttack", "Delhi", "Dharamsala", "Dubai", "Durban", "East London", "Hyderabad", "Indore", "Jaipur", "Johannesburg", "Kanpur", "Kimberley", "Kochi", "Kolkata", "Mumbai", "Nagpur", "Port Elizabeth", "Pune", "Raipur", "Rajkot", "Ranchi", "Sharjah", "Visakhapatnam"],
    "lat": [24.4539, 23.0225, 12.9716, -29.0852, -33.9249, -25.864, 30.7333, 13.0827, 20.4625, 28.7041, 32.219, 25.0467, -29.8587, -33.0292, 17.385, 22.7196, 26.9124, -26.2041, 26.4499, -28.7282, 9.9312, 22.5726, 19.076, 21.1458, -33.9608, 18.5204, 21.2455, 22.2977, 23.3245, 25.3309, 17.7085],
    "long": [54.3773, 72.5714, 77.5946, 26.1596, 18.4241, 28.0889, 76.7794, 80.2707, 85.883, 77.1025, 76.3234, 55.2189, 31.0218, 27.8546, 78.4867, 75.8577, 75.7873, 28.0473, 80.3319, 24.7499, 76.2673, 88.3639, 72.8777, 79.0882, 25.6022, 73.8567, 81.6421, 70.7875, 85.1909, 55.4209, 83.2438],
    "csk": [382, 316, 1418, 0, 146, 537, 1064, 9026, 187, 1308, 315, 282, 590, 178, 1003, 0, 904, 309, 0, 141, 131, 1561, 3167, 138, 330, 1370, 119, 0, 760, 146, 344],
    "mi": [122, 342, 1894, 0, 165, 413, 1224, 1194, 141, 1818, 133, 413, 415, 264, 1594, 375, 996, 149, 172, 0, 0, 2249, 13394, 0, 491, 751, 0, 153, 0, 125, 564],
    "rcb": [70, 134, 12307, 0, 293, 451, 1116, 1345, 0, 1505, 121, 240, 588, 0, 1414, 240, 1067, 571, 0, 0, 162, 1545, 2082, 138, 377, 948, 139, 393, 396, 294, 0],
    "rr": [358, 1906, 991, 136, 320, 380, 1167, 1224, 0, 1304, 0, 133, 457, 0, 920, 249, 7282, 0, 0, 253, 0, 1254, 2432, 159, 142, 682, 0, 0, 148, 191, 131],
    "srh": [133, 134, 1385, 0, 0, 0, 1015, 498, 0, 1123, 0, 356, 0, 0, 6724, 0, 455, 0, 158, 0, 0, 1222, 1271, 0, 0, 474, 321, 137, 189, 266, 942],
    "delhi": [84, 281, 1647, 270, 58, 612, 976, 1076, 161, 10969, 450, 347, 519, 118, 1239, 0, 858, 404, 197, 0, 157, 1230, 1979, 0, 150, 998, 877, 150, 0, 271, 726],
    "kxip": [338, 191, 1872, 123, 243, 293, 9044, 859, 544, 1502, 1502, 127, 812, 0, 1600, 1324, 930, 134, 0, 169, 0, 1741, 2227, 0, 154, 926, 0, 342, 0, 386, 299],
    "kkr": [424, 294, 2208, 0, 251, 362, 1111, 1397, 419, 1564, 0, 166, 474, 139, 1288, 245, 881, 283, 124, 0, 139, 11547, 1903, 0, 248, 955, 136, 184, 393, 150, 101],
    "deccan": [0, 148, 520, 0, 288, 605, 365, 634, 653, 652, 376, 0, 498, 100, 2830, 0, 336, 442, 0, 334, 129, 421, 1110, 447, 141, 177, 0, 0, 0, 0, 257],
    "ktk": [0, 0, 125, 0, 0, 0, 0, 141, 0, 141, 0, 0, 0, 0, 0, 276, 109, 0, 0, 0, 645, 132, 332, 0, 0, 0, 0, 0, 0, 0, 0],
    "gl": [0, 0, 397, 0, 0, 0, 354, 0, 0, 542, 0, 0, 0, 0, 261, 0, 0, 0, 647, 0, 0, 352, 323, 0, 0, 357, 0, 1623, 0, 0, 0],
    "rps": [0, 0, 352, 0, 0, 0, 152, 0, 0, 327, 0, 0, 0, 0, 370, 163, 0, 0, 0, 0, 0, 261, 448, 0, 0, 1744, 0, 334, 0, 0, 382],
    "pwi": [0, 0, 470, 0, 0, 0, 420, 427, 173, 192, 0, 0, 0, 0, 241, 0, 446, 0, 0, 0, 0, 143, 1374, 0, 0, 2153, 149, 0, 170, 0, 0]
};

// team colors
var cskCol = '#ffc107';
var miCol = '#2196f3';
var rcbCol = '#d32f2f';
var rrCol = '#f06292';
var srhCol = '#ff5722';
var delhiCol = '#2196f3';
var kxipCol = '#f44336';
var kkrCol = '#673ab7';
var deccanCol = '#78909c';
var ktkCol = '#632B72';
var glCol = '#E04F16';
var rpsCol = '#e91e63';
var pwiCol = '#00bcd4';

var map = L.map('issMap', { minZoom: 2 }).setView([4, 65], 2.5);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO _</a>';

const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

const darkTile = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

const tiles = L.tileLayer(darkTile, { attribution });

tiles.addTo(map);

var circles;
var abuDhabi;
var ahmedabad;
var bangalore;
var bloemfontein;
var capeTown;
var centurion;
var chandigarh;
var chennai;
var cuttack;
var delhi;
var dharamshala;
var dubai;
var durban;
var eastLondon;
var hyderabad;
var indore;
var jaipur;
var johannesburg;
var kanpur;
var kimberley;
var kochi;
var kolkata;
var mumbai;
var nagpur;
var portElizabeth;
var pune;
var raipur;
var rajkot;
var ranchi;
var sharjah;
var vishakhapatnam;

function mapBubble(name, num, col) {

    return L.circle([runsData.lat[num], runsData.long[num]], runsData[name][num] * map.getZoom()*10, { color: col, fillColor: col, fillOpacity: 0.5 }).bindPopup(`${runsData[name][num]} runs were scored in ${runsData.City[num]} by ${name.toUpperCase()}`);


}

function teamChosen(name, col) {
    //0
    abuDhabi = mapBubble(name, 0, col);
    ahmedabad = mapBubble(name, 1, col);
    bangalore = mapBubble(name, 2, col);
    bloemfontein = mapBubble(name, 3, col);
    capeTown = mapBubble(name, 4, col);
    centurion = mapBubble(name, 5, col);
    chandigarh = mapBubble(name, 6, col);
    chennai = mapBubble(name, 7, col);
    cuttack = mapBubble(name, 8, col);
    delhi = mapBubble(name, 9, col);
    dharamshala = mapBubble(name, 10, col);
    dubai = mapBubble(name, 11, col);
    durban = mapBubble(name, 12, col);
    eastLondon = mapBubble(name, 13, col);
    hyderabad = mapBubble(name, 14, col);
    indore = mapBubble(name, 15, col);
    jaipur = mapBubble(name, 16, col);
    johannesburg = mapBubble(name, 17, col);
    kanpur = mapBubble(name, 18, col);
    kimberley = mapBubble(name, 19, col);
    kochi = mapBubble(name, 20, col);
    kolkata = mapBubble(name, 21, col);
    mumbai = mapBubble(name, 22, col);
    nagpur = mapBubble(name, 23, col);
    portElizabeth = mapBubble(name, 24, col);
    pune = mapBubble(name, 25, col);
    raipur = mapBubble(name, 26, col);
    rajkot = mapBubble(name, 27, col);
    ranchi = mapBubble(name, 28, col);
    sharjah = mapBubble(name, 29, col);
    vishakhapatnam = mapBubble(name, 30, col);

    return L.layerGroup([abuDhabi, ahmedabad, bangalore, bloemfontein, capeTown, centurion, chandigarh, chennai, cuttack, delhi, dharamshala, dubai, durban, eastLondon, hyderabad, indore, jaipur, johannesburg, kanpur, kimberley, kochi, kolkata, mumbai, nagpur, portElizabeth, pune, raipur, rajkot, ranchi, sharjah, vishakhapatnam]).addTo(map);
}

circles = teamChosen("csk", cskCol);
console.log(map.getZoom());
circles.remove();
teamChosen("mi", miCol);

// function teamChosen(name, col) {
//     function mapBubble(num) {
//         if (runsData[name][num] > 0) {
//             return L.circle([runsData.lat[num], runsData.long[num]], {
//                 color: col,
//                 fillColor: col,
//                 fillOpacity: 0.5,
//                 radius: runsData[name][num] * 50
//             }).bindPopup(`${runsData[name][num]} runs were scored in ${runsData.City[num]} by ${name.toUpperCase()}`);
//         }
//     };

//     abuDhabi = mapBubble(0);
//     ahmedabad = mapBubble(1);
//     bangalore = mapBubble(2);
//     bloemfontein = mapBubble(3);
//     capeTown = mapBubble(4);
//     centurion = mapBubble(5);
//     chandigarh = mapBubble(6);
//     chennai = mapBubble(7);
//     cuttack = mapBubble(8);
//     delhi = mapBubble(9);
//     dharamshala = mapBubble(10);
//     dubai = mapBubble(11);
//     durban = mapBubble(12);
//     eastLondon = mapBubble(13);
//     hyderabad = mapBubble(14);
//     indore = mapBubble(15);
//     jaipur = mapBubble(16);
//     johannesburg = mapBubble(17);
//     kanpur = mapBubble(18);
//     kimberley = mapBubble(19);
//     kochi = mapBubble(20);
//     kolkata = mapBubble(21);
//     mumbai = mapBubble(22);
//     nagpur = mapBubble(23);
//     portElizabeth = mapBubble(24);
//     pune = mapBubble(25);
//     raipur = mapBubble(26);
//     rajkot = mapBubble(27);
//     ranchi = mapBubble(28);
//     sharjah = mapBubble(29);
//     vishakhapatnam = mapBubble(30);

//     return L.layerGroup([abuDhabi,ahmedabad,bangalore,bloemfontein,capeTown,centurion,chandigarh,chennai,cuttack,delhi,dharamshala,dubai,durban,eastLondon,hyderabad,indore,jaipur,johannesburg,kanpur,kimberley,kochi,kolkata,mumbai,nagpur,portElizabeth,pune,raipur,rajkot,ranchi,sharjah,vishakhapatnam]).addTo(map);
// };