const boundPercent = { "team.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors India", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "alt.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Daredevils", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors", "Rajasthan Royals", "Rising Pune Supergiant", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "abb": ["CSK", "DC", "DC", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "alt.abb": ["CSK", "DC", "DD", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "one": [62.02, 63.5, 62.71, 61.41, 61.18, 64.56, 62.51, 61.66, 64.71, 61.12, 64.11, 61.28, 62.95], "two": [11, 10.51, 10.35, 10.5, 10.97, 9.59, 9.81, 9.95, 11.4, 11.79, 11.26, 10.32, 11.74], "three": [0.54, 0.65, 0.48, 0.36, 0.5, 0.68, 0.49, 0.52, 0.55, 0.74, 0.51, 0.39, 0.63], "four": [18.29, 17.87, 19.3, 20.74, 19.56, 19.19, 19.64, 19.55, 17, 19.74, 16.91, 18.92, 18.03], "six": [8.16, 7.47, 7.16, 6.99, 7.8, 5.98, 7.55, 8.32, 6.35, 6.61, 7.22, 9.08, 6.66] }

const path = { "team.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors India", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "alt.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Daredevils", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors", "Rajasthan Royals", "Rising Pune Supergiant", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "abb": ["CSK", "DC", "DC", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "alt.abb": ["CSK", "DC", "DD", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "win_count": [100, 29, 77, 13, 82, 6, 92, 109, 12, 75, 15, 84, 58], "match_count": [164, 75, 177, 30, 176, 14, 178, 187, 46, 147, 30, 180, 108], "winPer": [60.98, 38.67, 43.5, 43.33, 46.59, 42.86, 51.69, 58.29, 26.09, 51.02, 50, 46.67, 53.7] };

num = 0;
color = '#ffc107';
var cskColor = ['#ffe085', '#FFd65c', '#FFCC33', '#ffc107', '#E0A800']

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Ones', 'Twos', 'Threes', 'Fours', 'Sixes'],
        datasets: [{
            label: 'Win Percentage',
            data: [boundPercent.one[num], boundPercent.two[num], boundPercent.three[num], boundPercent.four[num], boundPercent.six[num]],
            backgroundColor: [
                cskColor[0], cskColor[1], cskColor[2], cskColor[3], cskColor[4]
            ],
            hoverBackgroundColor: [cskColor[0], cskColor[1], cskColor[2], cskColor[3], cskColor[4]
            ],
            borderWidth: 0,
            // borderColor: rgba(0, 0, 0, 0),
            weight: 10,

        }]
    },
    options: {
        animation: { easing: 'easeInOutQuad', duration: 700 },
        // cutoutPercentage: 80,
        rotation: Math.PI,
        circumference: Math.PI,
        // legend: { display: false },
        // tooltips: { enabled: false },
        hover: { mode: NaN },
        responsive: true,
        maintainAspectRatio: false,
    }
});