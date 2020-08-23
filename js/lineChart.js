const lineChart = { "team.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors India", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "alt.name": ["Chennai Super Kings", "Deccan Chargers", "Delhi Daredevils", "Gujarat Lions", "Kings XI Punjab", "Kochi Tuskers Kerala", "Kolkata Knight Riders", "Mumbai Indians", "Pune Warriors", "Rajasthan Royals", "Rising Pune Supergiant", "Royal Challengers Bangalore", "Sunrisers Hyderabad"], "abb": ["CSK", "DC", "DC", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "alt.abb": ["CSK", "DC", "DD", "GL", "KXIP", "KTK", "KKR", "MI", "PWI", "RR", "RPS", "RCB", "SRH"], "2008": [157.5, 159.21, 151.29, "", 164.27, 0, 149.38, 148.57, 0, 162.56, 0, 141.64, 0], "2009": [159.36, 150.5, 142.07, 0, 137.71, 0, 135.15, 145.92, 0, 129.85, 0, 142.5, 0], "2010": [162.19, 148.38, 153.93, 0, 162.71, 0, 153.14, 171.12, 0, 155.64, 0, 150.06, 0], "2011": [160, 152.86, 149.07, 0, 158.86, 135.79, 134.87, 143, 126.79, 129.77, 0, 154.31, 0], "2012": [157.28, 154.13, 146.94, 0, 149.38, 0, 147.29, 144.82, 145.06, 157.25, 0, 164.8, 0], "2013": [154.33, 0, 139.62, 0, 151.75, 0, 143.12, 156.58, 141.38, 150.28, 0, 160.69, 135.18], "2014": [165.62, 0, 148.64, 0, 175.71, 0, 155.5, 156.87, 0, 153.93, 0, 149.5, 150.14], "2015": [161.49, 0, 153.48, 0, 145, 0, 158.81, 170.94, 0, 153.9, 0, 144.73, 157.93], "2016": [0, 0, 150.29, 153.12, 152.43, 0, 150.87, 156.71, 0, 0, 147.36, 186.31, 157.24], "2017": [0, 0, 158.5, 171.86, 157.64, 0, 155.25, 164.06, 0, 0, 154.38, 141.92, 167.79], "2018": [175.56, 0, 167.36, 0, 157.86, 0, 172.44, 170, 0, 157.13, 0, 165.86, 160.06], "2019": [145.47, 0, 157.44, 0, 173.5, 0, 176.14, 166.31, 0, 156.71, 0, 157.71, 163.33] }


function lineChartCreate(lineChartNum, lineChartColor) {
    var ctx = document.getElementById('lineChart').getContext('2d');
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
                borderWidth: 5
            }]
        },
        options: {
            legend: { display: false },

            animation: { easing: 'easeOutQuad', duration: 750 },
            scales: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {

                        fontColor: '#eee'
                    }
                }],

                yAxes: [{
                    gridLines: {
                        display: false
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
}

lineChartCreate(3, '#2196f3');