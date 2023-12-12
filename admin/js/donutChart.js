// const label = ["Wrong Ans", "Correct Ans"];
const values2 = [50, 50];
const color = ["#000000", "#00FFFF"];
total = values2.reduce((accumulator, currentValue) => accumulator + currentValue)
label = values2.map(value => Math.round((value / total) * 100) +'%');
label[0]= label[0]+' Correct Ans'
label[1]= label[1]+' Wrong Ans'

// Doughnut chart data
const doughnutData = {
  labels: label,
  datasets: [
    {
      label: label,
      data: values2,
      backgroundColor: color,
      // fontColor : color,
      // fillStyle: color,
      // strokeStyle: color
      // cufoff:'60%',
    },
],
};

const textCenter ={
  id: 'textCenter',
  afterDatasetsDraw(chart, args, plugins){
    const {ctx, data, chartArea :{top, bottom, left, right, width, height}, scales:{x,y}}=chart;
    ctx.save();
    ctx.font= 'bold 20px';
    ctx.Color = 'red'
    text = '100%'
    ctx.fillText(text, chart.getDatasetMeta(0).data[0].x-20, chart.getDatasetMeta(0).data[0].y)
  }
}

const doughnutConfig = {
  type: 'doughnut',
  data : doughnutData,
  options: {
    // cutoutPercentage: 40,
    maintainAspectRatio: false,
    plugins:{
      legend:{
        display:true,
        position: 'bottom',
        // labels: label
        // labels:{
        //   color: 'red'
        // }

        labels:{
          generateLabels: (chart)=>{
            // console.log(chart)
            console.log(chart.data.datasets)


            // for(let index=0; index<dataset.label.length)
  
            // return chart.data.datasets.map((dataset,index)=>(
            //   // console.log(dataset.label[index]),
            //   // console.log(dataset.backgroundColor),
            //   // console.log(index),
            //   {
            //   text: dataset.label,
            //   fillStyle:dataset.backgroundColor,
            //   fillStroke: dataset.backgroundColor,
            //   fontColor: dataset.backgroundColor
            // }))
          }
        }
      }
    },
    // plugins: [textCenter]
  },
 
};



// Doughnut chart config
// Doughnut chart config
// const doughnutConfig = {
//   type: "doughnut",
//   data: doughnutData,
//   options: {
//     maintainAspectRatio: false,
//     plugins:{
//       legend:{
//         labels:{
//           generateLabels: (chart)=>{
//             console.log(chart.data.datasets)

//             return chart.data.datasets.map((dataset,index)=>({
//               text:dataset.labels,
//               fillStyle: dataset.backgroundColor[0],
//               fontColor: dataset.backgroundColor[1]
//             }))

//           }
//         }
//       }
//     },
//   }
//   // plugins: [textCenter]
// };

// const doughnutConfig = {
//   type: "doughnut",
//   data: doughnutData,
//   options: {
//     cutoutPercentage: 40,
//     legend:{display:true},
//     maintainAspectRatio: false

//   },

//   // plugins: [textCenter]
// };


// Doughnut chart render
const myDoughnutChart = new Chart(
  document.getElementById("myDonutChart"),
  doughnutConfig
);







[
  {
    backgroundColor :['#F14336', '#28B446'],
    label: ['50% Correct Ans', '50% Wrong Ans']
  }
]