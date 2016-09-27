google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Hotizon');
  data.addColumn('number', '99th');
  data.addColumn('number', '97.5th');
  data.addColumn('number', '95th');
  data.addColumn('number', '90th');
  data.addColumn('number', '75th');
  data.addColumn('number', '50th');
  data.addColumn('number', '25th');
  data.addColumn('number', '10th');
  data.addColumn('number', '5th');
  data.addColumn('number', '2.5th');
  data.addColumn('number', '1th');
  data.addColumn('number', 'Upper');
  data.addColumn('number', 'Lower');

  data.addRows([
    [5,{v: 0.8, f: '0.8'},{v: 0.7, f: '0.7'},{v: 0.6, f: '0.6'},{v: 0.5, f: '0.5'},{v: 0.4, f: '0.4'},{v: 0.3, f: '0.3'},{v: 0.8, f: '0.8'},{v: 0.3, f: '0.3'},{v: 0.2, f: '0.2'},{v: 0.6, f: '0.6'},{v: 0.4, f: '0.4'},{v: 0.8, f: '0.8'},{v: 0.1, f: '0.1'} ],
    [10,{v: 0.9, f: '0.9'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.9, f: '0.9'},{v: 0.8, f: '0.8'} ],
    [15,{v: 0.6, f: '0.6'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.7, f: '0.7'} ],
    [20,{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.5, f: '0.5'},{v: 0.4, f: '0.4'} ],
    [25,{v: 0.4, f: '0.4'},{v: 0.8, f: '0.8'},{v: 0.7, f: '0.7'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.3, f: '0.3'},{v: 0.2, f: '0.2'} ],
    [30,{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.8, f: '0.8'},{v: 0.2, f: '0.2'},{v: 0.1, f: '0.1'} ],


  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Horizon', 'pLevel'],
          [ 5,      0.9],
          [ 11,      0.1],
          [ 12,      0.8],
          [ 25,      0.7],
          [ 20,      0.6],
          [ 17,      0.5],
          [ 5,      0.4],
          [ 11,      0.2],
          [ 6,      0.3],
          [ 7,      0.5],
          [ 8,      0.9],
          [ 9,      0.1],
          [ 12,      0.8],
          [ 16,      0.7],
          [ 14,      0.6],
          [ 18,      0.5],
          [ 19,      0.4],
          [ 20,      0.2],
          [ 20,      0.3],
          [ 7,      0.5],          
          [ 18,      0.9],
          [ 23,      0.1],
          [ 22,      0.8],
          [ 28,      0.7],
          [ 29,      0.6],
          [ 19,      0.5],
          [ 30,      0.4],
          [ 7,      0.2],
          [ 8,      0.3],
          [ 8,      0.5],
          [ 16,      0.9],
          [ 13,      0.1],
          [ 13,      0.8],
          [ 24,      0.7],
          [ 22,      0.6],
          [ 22,      0.5],
          [ 21,      0.4],
          [ 22,      0.2],
          [ 11,      0.3],
          [ 9,      0.5],
          [ 25,      0.9],
          [ 20,      0.1],
          [ 19,      0.8],
          [ 27,      0.7],
          [ 22,      0.6],
          [ 22,      0.5],
          [ 6,      0.4],
          [ 6,      0.2],
          [ 7,      0.3],
          [ 7,      0.5],
          [ 8,      0.9],
          [ 5,      0.1],
          [ 11,      0.8],
          [ 12,      0.7],
          [ 14,      0.6],
          [ 15,      0.5],
          [ 2,      0.4],
          [ 5,      0.2],
          [ 14,      0.3],
          [ 15,      0.5],
        ]);

        var options = {
          title: 'Horizon vs. pLevel comparison',
          hAxis: {title: 'Horizon', minValue: 0, maxValue: 30},
          vAxis: {title: 'pLevel', minValue: 0.0, maxValue: 1.0},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }