

const sliderList = document.getElementById('slider-list');
const sliderItems = document.querySelectorAll('.slider-items');

const itemWidth = sliderItems[0].offsetWidth;
const totalItems = sliderItems.length;
// currentIndex = sliderItems[9]
// console.log(currentIndex)
let currentIndex = 0;

function nextSlide() {
  // if(currentIndex == 9){
  //   sliderItems+1
  // }
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
}

function updateSlider() {
  const newPosition = -currentIndex * itemWidth;
  sliderList.style.transform = `translateX(${newPosition}px)`;
}


// nav round slider

$(document.getElementsByClassName('round-slider')).roundSlider({
    sliderType: "min-range",
    value: 90,
    width: 4,
    radius: 20,
    showTooltip: true,
    editableTooltip: false,
    svgMode: true,
    pathColor: "#eee",
    borderWidth: 0,
    startValue: 0,
    rangeColor: '#5AA139',
    tooltipColor: 'black',
    startAngle: 270,    
})

// question page timer

function updateCounter() {
  var startTime = new Date().getTime();

  function update() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;

      // Convert milliseconds to seconds
      var seconds = Math.floor(elapsedTime / 1000);

      var hour = Math.floor(seconds/3600);
      var minut = Math.floor((seconds % 3600) / 60);
      var second = Math.floor(seconds % 60);

      // Display the time counter in the specified container
      // var counterContainer = document.getElementById("time-counter-container");
      // document.getElementById('hour').innerText = hour;
      // document.getElementById('minut').innerText = minut;
      // document.getElementById('second').innerText = second;

      if(second <10){
        document.getElementById('second').innerText = `0${second}`;
      }
      else{
      document.getElementById('second').innerText = second;

      }
      if(minut <10){
        document.getElementById('minut').innerText = `0${minut}`;
      }
      else{
      document.getElementById('minut').innerText = minut;

      }
      if(hour <10){
        document.getElementById('hour').innerText = `0${hour}`;
      }
      else{
      document.getElementById('hour').innerText = hour;

      }

      // counterContainer.innerHTML = "Time elapsed: " + seconds + " seconds";
  }

  // Update the counter every second
  setInterval(update, 1000);
}

// Start the counter when the page is fully loaded
window.onload = function () {
  updateCounter();
};


// homepage card event

