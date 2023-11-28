const sliderList = document.getElementById('slider-list');
const sliderItems = document.querySelectorAll('.slider-items');
const itemWidth = sliderItems[0].offsetWidth;
const totalItems = sliderItems.length;
let currentIndex = 0;

function nextSlide() {
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
