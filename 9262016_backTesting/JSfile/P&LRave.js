google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['Market', 'Expected Default Rate', 'Actual Default Rate', 'Region',     'Exposure'],
        ['CAN',    3.02,              9.02,      'North America',  100000000],
        ['MEX',    2.02,              8.02,      'North America',         90000000],
        ['DNK',    4.04,               7.02,      'Europe',         300000000],
        ['IND',    2.03,              7.02,      'Asia',    600000000],
        ['GBR',    9.08,              6.02,         'Europe',         700000000],
        ['JPN',    2.12,              5.02,       'Asia',    900000000],
        ['CHN',    8.08,              4.02,      'Asia',    1200000000],
        ['ISR',    1.05,              3.02,      'Asia',    90000000],
        ['RUS',    2.06,               2.02,      'Europe',         3300000000],
        ['USA',    3.09,              1.02,      'North America',  1200000000]
      ]);

      var options = {
        title: 'Correlation between Real and Actual Default Rate per Market ',
        hAxis: {title: 'Expected Default Rate'},
        vAxis: {title: 'Real Default Rate'},
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
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
        ['CAN',    3.02,              9.02,      'North America',  100000000],
        ['MEX',    2.02,              8.02,      'North America',         90000000],
        ['DNK',    4.04,               7.02,      'Europe',         300000000],
        ['IND',    2.03,              7.02,      'Asia',    600000000],
        ['GBR',    9.08,              6.02,         'Europe',         700000000],
        ['JPN',    2.12,              5.02,       'Asia',    900000000],
        ['CHN',    8.08,              4.02,      'Asia',    1200000000],
        ['ISR',    1.05,              3.02,      'Asia',    90000000],
        ['RUS',    2.06,               2.02,      'Europe',         3300000000],
        ['USA',    3.09,              1.02,      'North America',  1200000000]
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}