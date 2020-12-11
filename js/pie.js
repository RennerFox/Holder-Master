
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
    ['U1BE34', 500]
  ]);

  var options = {
    legend: 'none',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('Posicao_bdr'));

  chart.draw(data, options);
}