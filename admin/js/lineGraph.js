const xValues = ['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const yValues = [20,30,50,30,20,10,10,40,50,60,10];


// new Chart("myLineChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       fill: false,
//       lineTension: 0,
//       backgroundColor: "rgba(0,0,255,1.0)",
//       borderColor: "rgba(0,0,255,0.1)",
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false,
//     },
//     title:{
//       display: true,
//       text:'No. of People vs Joined Date',
//       // position: st,
//     },
//     scales: {
//       yAxes: [{ticks: {min: 0, max:60}}],
//     },
//     maintainAspectRatio: false
//   }
// });




    // setup 
    const data = {
      labels: xValues,
      datasets: [{
        // label: 'Weekly Sales',
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    };


    // config 
    const config = {
      type: 'line',
      data,
      options: {
        maintainAspectRatio: false,
        plugins:{
          legend:{display: false},
          title:{
            display:true,
            text:'No. of People vs Joined Date',
            align:'start',
            
          },
        },
        scales: {
            yAxes: [{ticks: {min: 0, max:60}}],
        },
      }
    };
    // render init block
    const myChart = new Chart(
      document.getElementById('myLineChart'),
      config
    );