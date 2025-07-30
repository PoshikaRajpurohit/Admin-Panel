
      
        var options = {
          series: [3801,4306, 1689, 3251],
          chart: {
          width:250,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width:200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
        };
        var chart = new ApexCharts(document.querySelector("#piechart"), options);
        chart.render();
