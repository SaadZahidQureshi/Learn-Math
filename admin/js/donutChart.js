// const xValues2 = [ "Wrong Ans","Correct Ans",];
// const yValues2 = [50, 50];
// const barColors2 = [
//     "#F14336",
//     "#28B446",
// ];
// // console.log(document.getElementById('myDonutChart'))
// new Chart("myDonutChart", {
//   type: "doughnut",
//   // innerRadius: anychart.doughnut(data).innerRadius('50%'),
//   data: {
//     labels: xValues2,
//     datasets: [{
//       backgroundColor: barColors2,
//       data: yValues2,
//       innerRadius: 5 
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: false,
//       // text: "World Wide Wine Production 2018"
//     },
//     maintainAspectRatio: false

//   }
// });



// Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     ctx.restore();
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = "100%",
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//     ctx.save();
//   }
// });

// Doughnut chart data

const xValues2 = ["Wrong Ans", "Correct Ans"];
const yValues2 = [50, 50];
const barColors2 = ["#F14336", "#28B446"];

// Doughnut chart configuration
const doughnutChartConfig = {
  type: "doughnut",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors2,
      data: yValues2,

    }]
  },
  options: {
    legend: { display: false },
    title: { display: false },
    maintainAspectRatio: false,
    cutoutPercentage: 40
  }
  
};

// Initialize the doughnut chart
const myDoughnutChart = new Chart("myDonutChart", doughnutChartConfig);

// Text in the center of the doughnut chart
Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.type === "doughnut" && chart.canvas.id === "myDonutChart") {
      var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      // console.log(fontSize)
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      var text = "100%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }
});
