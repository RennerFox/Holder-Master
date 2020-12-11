const cases = document.querySelector('.coronavirus-input');
const deaths = document.querySelector('.deaths-input');
const recovered = document.querySelector('.recovered-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx,{

  type:'pie',
  data: {

    labels: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
    datasets : [
      {

        label:'# of votes',
        data : [0,0,0],
        backgroundColor:['#2adece', '#dd3b79', '#ff766b'],
        borderWidth:1
      }
    ]

  }

});
// AÇÕES = itausa 20, banco do brasil 10      tesouro direto 40 

const updateChartValue =(input, dataOrder)=> {

  input.addEventListener ('change', e => {
    myChart.data.datasets[0].data[dataOrder] = e.target.value;
    myChart.update();
  });

};

updateChartValue(cases,0);
updateChartValue(deaths, 1);
updateChartValue(recovered, 2);