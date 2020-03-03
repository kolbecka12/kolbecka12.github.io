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
        position: 'bottom',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });

  let labels2 = ['41% Very Comfortable', '32% Pretty Comfortable', '23% A Little Comfortable', '4% Total Beginner']; //Identifier 'labels1' has already been declared
  let data2 = [41, 32, 23, 4];
  let colors2 = ['#31B67A', '#474747', '#DDDDDD', '#135561'];

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
        position: 'bottom',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });

  let labels3 = ['41% Most Days', '27% 1-2 Days Per Week', '22% 3-5 Days Per Week', '9% Rarely']; //Identifier 'labels1' has already been declared
  let data3 = [41, 27, 22, 9];
  let colors3 = ['#474747', '#DDDDDD', '#135561', '#74CC3D'];

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
        position: 'bottom',
        labels: {
          fontColor: 'black'
        }
      }
    }

  });
}
