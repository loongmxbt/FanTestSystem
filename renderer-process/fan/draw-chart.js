const Chart = require('chart.js');

const ctx = document.getElementById("pqChart");

var pqChart = new Chart(ctx, {
  type: 'line',
  data:{
    "labels":["January","February","March","April","May","June","July"],
    "datasets":[{"label":"My First Dataset",
                 "data":[65,59,80,81,56,55,40],
                 "fill":false,
                 "borderColor":"rgb(75, 192, 192)",
                 "lineTension":0.1}]
          },
  options: {}

});
