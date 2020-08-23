// data for the file
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

const path = { "team.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors India", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "alt.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Daredevils", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors", "Rajasthan Royals", "Rising Pune Supergiant", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "abb": ["CSK", "DC", "DC", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "alt.abb": ["CSK", "DC", "DD", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "win_count": [100, 29, 77, 13, 82, 6, 92, 109, 12, 75, 15, 84, 58], "match_count": [164, 75, 177, 30, 176, 14, 178, 187, 46, 147, 30, 180, 108], "winPer": [60.98, 38.67, 43.5, 43.33, 46.59, 42.86, 51.69, 58.29, 26.09, 51.02, 50, 46.67, 53.7] };

const lineChart = { "team.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors India", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "alt.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Daredevils", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors", "Rajasthan Royals", "Rising Pune Supergiant", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "abb": ["CSK", "DC", "DC", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "alt.abb": ["CSK", "DC", "DD", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "2008": [157.5, 159.21, 151.29, NaN, 164.27, NaN, 149.38, 148.57, NaN, 162.56, NaN, 141.64, NaN], "2009": [159.36, 150.5, 142.07, NaN, 137.71, NaN, 135.15, 145.92, NaN, 129.85, NaN, 142.5, NaN], "2010": [162.19, 148.38, 153.93, NaN, 162.71, NaN, 153.14, 171.12, NaN, 155.64, NaN, 150.06, NaN], "2011": [160, 152.86, 149.07, NaN, 158.86, 135.79, 134.87, 143, 126.79, 129.77, NaN, 154.31, NaN], "2012": [157.28, 154.13, 146.94, NaN, 149.38, NaN, 147.29, 144.82, 145.06, 157.25, NaN, 164.8, NaN], "2013": [154.33, NaN, 139.62, NaN, 151.75, NaN, 143.12, 156.58, 141.38, 150.28, NaN, 160.69, 135.18], "2014": [165.62, NaN, 148.64, NaN, 175.71, NaN, 155.5, 156.87, NaN, 153.93, NaN, 149.5, 150.14], "2015": [161.49, NaN, 153.48, NaN, 145, NaN, 158.81, 170.94, NaN, 153.9, NaN, 144.73, 157.93], "2016": [NaN, NaN, 150.29, 153.12, 152.43, NaN, 150.87, 156.71, NaN, NaN, 147.36, 186.31, 157.24], "2017": [NaN, NaN, 158.5, 171.86, 157.64, NaN, 155.25, 164.06, NaN, NaN, 154.38, 141.92, 167.79], "2018": [175.56, NaN, 167.36, NaN, 157.86, NaN, 172.44, 170, NaN, 157.13, NaN, 165.86, 160.06], "2019": [145.47, NaN, 157.44, NaN, 173.5, NaN, 176.14, 166.31, NaN, 156.71, NaN, 157.71, 163.33] }

console.log(path.winPer);

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

var donut;
var circles;
var lineCharts;

function win_gauge(num, color) {
    var loss = 100 - path.winPer[num];
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Win', 'Loss'],
            datasets: [{
                label: 'Win Percentage',
                data: [path.winPer[num], loss],
                backgroundColor: [
                    color,
                    '#424242'
                ],
                hoverBackgroundColor: [color,
                    '#424242'
                ],
                borderWidth: 0,

            }]
        },
        options: {
            animation: { easing: 'easeOutQuad', duration: 700 },
            cutoutPercentage: 80,
            rotation: Math.PI,
            circumference: Math.PI,
            legend: { display: false },
            tooltips: { enabled: false },
            hover: { mode: NaN },
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    return myChart;
}

function lineChartCreate(lineChartNum, lineChartColor) {
    var ctx = document.getElementById('line-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Average Runs per season',
                data: [lineChart[2008][lineChartNum], lineChart[2009][lineChartNum], lineChart[2010][lineChartNum], lineChart[2011][lineChartNum], lineChart[2012][lineChartNum], lineChart[2013][lineChartNum], lineChart[2014][lineChartNum], lineChart[2015][lineChartNum], lineChart[2016][lineChartNum], lineChart[2017][lineChartNum], lineChart[2018][lineChartNum], lineChart[2019][lineChartNum]],
                pointBackgroundColor: [
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor
                ],
                pointBorderColor: [
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor,
                    lineChartColor, lineChartColor, lineChartColor

                ],
                borderColor: lineChartColor,
                backgroundColor: lineChartColor,
                fill: false,
                borderWidth: 4
            }]
        },
        options: {
            legend: { display: false },
            spanGaps: false,
            animation: { easing: 'easeOutQuad', duration: 750 },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true
                    },
                    ticks: {

                        fontColor: '#eee'
                    }
                }],

                yAxes: [{
                    gridLines: {
                        display: true
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#eee',
                        max: 200,
                        stepSize: 40
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    return myChart;
}

var map = L.map('map', { minZoom: 2 }).setView([4, 65], 2.5);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO _</a>';

const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

const darkTile = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

const tiles = L.tileLayer(darkTile, { attribution });

// function for main visualization



var bubble;
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
    if (runsData[name][num] > 0) {
        bubble = L.circle([runsData.lat[num], runsData.long[num]], { color: col, fillColor: col, fillOpacity: 0.5, radius: runsData[name][num] * 25, className: 'circle-transition' }).bindPopup(`${runsData[name][num]} runs were scored in ${runsData.City[num]} by ${name.toUpperCase()}`);
    }

    return bubble;


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

tiles.addTo(map);

document.getElementById('csk').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(0, cskCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
        console.log(lineCharts);
    }
    lineCharts = lineChartCreate(0, cskCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[0] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("csk", cskCol);
}

document.getElementById('mi').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(7, miCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    console.log(lineCharts);
    lineCharts = lineChartCreate(7, miCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[7] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("mi", miCol);
}

document.getElementById('rcb').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(11, rcbCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(11, rcbCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[11] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("rcb", rcbCol);
}
document.getElementById('kkr').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(6, kkrCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(6, kkrCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[6] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("kkr", kkrCol);
}

document.getElementById('delhi').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(2, delhiCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(2, delhiCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[2] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("delhi", delhiCol);
}

document.getElementById('kxip').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(4, kxipCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(4, kxipCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[4] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("kxip", kxipCol);
}

document.getElementById('rr').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(9, rrCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(9, rrCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[9] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("rr", rrCol);
}

document.getElementById('srh').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(12, srhCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(12, srhCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[12] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("srh", srhCol);
}

document.getElementById('ktk').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(5, ktkCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(5, ktkCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[5] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("ktk", ktkCol);
}

document.getElementById('gl').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(3, glCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(3, glCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[3] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("gl", glCol);
}

document.getElementById('rps').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(10, rpsCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(10, rpsCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[10] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("rps", rpsCol);
}

document.getElementById('deccan').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(1, deccanCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(1, deccanCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[1] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("deccan", deccanCol);
}

document.getElementById('pwi').onclick = function () {
    if (donut != undefined) {
        donut.destroy();
    }
    donut = win_gauge(8, pwiCol);
    if (lineCharts != undefined) {
        lineCharts.destroy();
    }
    lineCharts = lineChartCreate(8, pwiCol);
    document.getElementById('win-per-text').innerHTML = (path.winPer[8] + "%");
    if (circles != undefined) {
        circles.remove();
    }
    circles = teamChosen("pwi", pwiCol);
}