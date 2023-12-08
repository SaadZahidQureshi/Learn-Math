const xValues1 = ["Trignometry", "Calculus", "Integration", "Geometry", "Algebra","Matrix", "Functions" ,"Graphs", "Pre Cal", "Algebra 2", "Trignometry", "Geometry", "Ratios", "Functions", "Integ"];
const yValues1 = [60000, 70000, 70000, 75000, 80000, 25000, 80000, 75000, 60000, 80000, 80000, 75000, 80000, 100000, 80000];
// const barColors = ["red", "green","blue","orange","brown"];
// const labels = Utils.months({count:7})

// console.log(document.getElementById('myBarChart'))
new Chart("myBarChart", {
  type: "bar",
  labels:xValues1,
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: 'rgba(116, 63, 203, 1)',
      data: yValues1,
      barThickness:'12',
      borderWidth:1,
      // borderRadius: 15,
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    },
    maintainAspectRatio: false,
  },
  
});



