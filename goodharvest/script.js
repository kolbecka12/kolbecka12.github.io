window.onload = function(){
  let labels1 = ['50% Always', '25% Sometimes', '20% Rarely', '5% Never'];
  let data1 = [50, 25, 20, 5];
  let colors1 = ['#191919', '#31B67A', '#74CC3D', '#DDDDDD' ];
  let myChart1 = document.getElementById("ghChart1").getContext('2d');

  let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
      labels: labels1,
      datasets: [ {
        data: data1,
        backgroundColor: colors1
      }]
    },
    options: {
      legend: {
        position: 'left',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });

  let labels2 = ['Chart2', '25% Sometimes', '20% Rarely', '5% Never']; //Identifier 'labels1' has already been declared
  let data2 = [50, 25, 20, 5];
  let colors2 = ['#191919', '#31B67A', '#74CC3D', '#DDDDDD' ];

  let myChart2 = document.getElementById("ghChart2").getContext('2d');//VM9370 script.js:31 Uncaught TypeError: Cannot read property 'getContext' of null

  let chart2 = new Chart(myChart2, {
    type: 'doughnut',
    data: {
      labels: labels2,
      datasets: [ {
        data: data2,
        backgroundColor: colors2
      }]
    },
    options: {
      legend: {
        position: 'left',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });

  let labels3 = ['Chart3', '25% Sometimes', '20% Rarely', '5% Never']; //Identifier 'labels1' has already been declared
  let data3 = [50, 25, 20, 5];
  let colors3 = ['#191919', '#31B67A', '#74CC3D', '#DDDDDD' ];

  let myChart3 = document.getElementById("ghChart3").getContext('2d');//VM9370 script.js:31 Uncaught TypeError: Cannot read property 'getContext' of null

  let chart3 = new Chart(myChart3, {
    type: 'doughnut',
    data: {
      labels: labels3,
      datasets: [ {
        data: data3,
        backgroundColor: colors3
      }]
    },
    options: {
      legend: {
        position: 'left',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });
}
