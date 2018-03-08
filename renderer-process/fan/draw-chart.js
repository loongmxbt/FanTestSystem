const Chart = require('chart.js');

const ctx = document.getElementById("pqChart");

const pq_data = [{
                     x: 0,
                     y: 120
                 }, {
                     x: 1000,
                     y: 112
                 }, {
                     x: 2000,
                     y: 103
                 }, {
                     x: 3000,
                     y: 76
                 }, {
                     x: 4000,
                     y: 65
                 }, {
                     x: 5000,
                     y: 54
                 }, {
                     x: 6000,
                     y: 42
                 }]


var pqChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'P-Q 曲线',
            data: pq_data,
            fill: false,
            borderColor: "rgb(75, 192, 192)"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});