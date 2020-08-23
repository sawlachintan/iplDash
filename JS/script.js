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