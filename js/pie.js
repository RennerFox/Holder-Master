google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(Posicaototal);
function Posicaototal() {

  var data = google.visualization.arrayToDataTable([
    ['Investimentos', 'Posição'],
    ['Acao', 1600],
    ['Tesouro', 1200],
    ['BDR', 2000]
  ]);

  var options = {
    legend: 'none',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('Posicao_total'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(Posicao_acao);
function Posicao_acao() {

  var data = google.visualization.arrayToDataTable([
    ['Ação', 'Posição'],
    ['ITSA4', 200],
    ['BBDE3', 400],
    ['VALE3', 1000]
  ]);

  var options = {
    legend: 'none',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('Posicao_acao'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(Posicao_tesouro);
function Posicao_tesouro() {

  var data = google.visualization.arrayToDataTable([
    ['Tesouro', 'Posição'],
    ['Tesouro selic', 600],
    ['Tesouro direto', 1200]
  ]);

  var options = {
    legend: 'none',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('Posicao_tesouro'));

  chart.draw(data, options);
}


google.charts.setOnLoadCallback(Posicao_bdr);
function Posicao_bdr() {

  var data = google.visualization.arrayToDataTable([
    ['Bdr', 'Posição'],
    ['TSLA34', 600],
    ['NFLX34', 400],
    ['DISB34', 500],
    ['U1BE34', 500],
  ]);

  var options = {
    legend: 'none',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('Posicao_bdr'));

  chart.draw(data, options);
}





google.charts.load('current', { 'packages': ['line', 'corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Month');
  data.addColumn('number', "Average Temperature");
  data.addColumn('number', "Average Hours of Daylight");

  data.addRows([
    [new Date(2014, 0), -.5, 5.7],
    [new Date(2014, 1), .4, 8.7],
    [new Date(2014, 2), .5, 12],
    [new Date(2014, 3), 2.9, 15.3],
    [new Date(2014, 4), 6.3, 18.6],
    [new Date(2014, 5), 9, 20.9],
    [new Date(2014, 6), 10.6, 19.8],
    [new Date(2014, 7), 10.3, 16.6],
    [new Date(2014, 8), 7.4, 13.3],
    [new Date(2014, 9), 4.4, 9.9],
    [new Date(2014, 10), 1.1, 6.6],
    [new Date(2014, 11), -.2, 4.5]
  ]);

  var materialOptions = {
    chart: {
      title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
    },
    width: 900,
    height: 500,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Temps' },
      1: { axis: 'Daylight' }
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'Temps (Celsius)' },
        Daylight: { label: 'Daylight' }
      }
    }
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Line(Rendimentos);
    materialChart.draw(data, materialOptions);
    button.innerText = 'Change to Classic';
    button.onclick = drawClassicChart;
  }
  drawMaterialChart();

}