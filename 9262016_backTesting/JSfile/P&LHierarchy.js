google.charts.load('upcoming', { 'packages': ['geochart'] });
google.charts.setOnLoadCallback(drawRegionsMap);

google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Market', 'Exposure Amount'],
        ['CANADA', 100000000],
        ['MEXICO', 90000000],
        ['DENMARK', 300000000],
        ['INDIA', 600000000],
        ['FRANCE', 700000000],
        ['JPN', 900000000],
        ['CHINA', 1200000000],
        ['ISRAEL', 90000000],
        ['BRASIL', 3300000000],
        ['USA', 1200000000]
    ]);

    var options = {
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Market');
    data.addColumn('number', 'Expected Default Rate');
    data.addColumn('number', 'Actual Default Rate');
    data.addColumn('string', 'Region');
    data.addColumn('number', 'Exposure');
    data.addRows([
        ['CAN', 3.02, 9.02, 'North America', 100000000],
        ['MEX', 2.02, 8.02, 'North America', 90000000],
        ['DNK', 4.04, 7.02, 'Europe', 300000000],
        ['IND', 2.03, 7.02, 'Asia', 600000000],
        ['GBR', 9.08, 6.02, 'Europe', 700000000],
        ['JPN', 2.12, 5.02, 'Asia', 900000000],
        ['CHN', 8.08, 4.02, 'Asia', 1200000000],
        ['ISR', 1.05, 3.02, 'Asia', 90000000],
        ['RUS', 2.06, 2.02, 'Europe', 3300000000],
        ['USA', 3.09, 1.02, 'North America', 1200000000]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}