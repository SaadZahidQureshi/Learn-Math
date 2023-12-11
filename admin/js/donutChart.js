// const label = ["Wrong Ans", "Correct Ans"];
const values2 = [50, 50];
const color = ["#F14336", "#28B446"];
total = values2.reduce((accumulator, currentValue) => accumulator + currentValue)
label = values2.map(value => Math.round((value / total) * 100) +'%');
label[0]= label[0]+' Correct ans'
label[1]= label[1]+' Wrong ans'

// Doughnut chart data
const doughnutData = {
  labels: label,
  datasets: [
    {
      data: values2,
      backgroundColor: color,
    },
  ],
};

// Doughnut chart config
// Doughnut chart config
const doughnutConfig = {
  type: "doughnut",
  data: doughnutData,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            weight: 700,
          },
          boxWidth: 0,
        },
        display: true, // Hide the default legend
        position: 'bottom',
        // align: "end"
      },
      title: {
        display: false,
        text: "Answer Distribution",
        align: "start",
      },
    },
  },
};

// Doughnut chart render
const myDoughnutChart = new Chart(
  document.getElementById("myDonutChart"),
  doughnutConfig
);
