const xValues1 = ["Trignometry", "Calculus", "Integration", "Geometry", "Algebra","Matrix", "Functions" ,"Graphs", "Pre Cal", "Algebra 2", "Trignometry", "Geometry", "Ratios", "Functions", "Integ"];
const yValues1 = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

console.log(document.getElementById('myBarChart'))
new Chart("myBarChart", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: 'blue',
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});