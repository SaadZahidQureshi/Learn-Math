const sliderList = document.getElementById('slider-list');
const sliderItems = document.querySelectorAll('.slider-items');
const itemWidth = sliderItems[0].offsetWidth;
// console.log(itemWidth)
const totalItems = sliderItems.length;
let currentIndex = 0;
let itemsDisplayed = 10;


function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; //first time it (0+1)%16 = 1
  // console.log(currentIndex)

  if ( currentIndex == sliderItems.length+1 - itemsDisplayed ){
    currentIndex =0;
  }
  updateSlider();

}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // (0-1+16) = 15%16 = 15

  if (currentIndex == 15) {
    currentIndex = sliderItems.length-itemsDisplayed;
  }

  console.log(currentIndex)
  updateSlider();
}

function updateSlider() {
  const newPosition = -currentIndex * itemWidth;//
  // console.log(newPosition)
  sliderList.style.transform = `translateX(${newPosition}px)`;
}

// slider active class

const items = document.querySelectorAll('.slider-items ');
// console.log(items)
    // Add click event listener to each item
    items.forEach(item => {
      item.addEventListener('click', function (event) {
        // Prevent the default behavior of the anchor tag
        // event.preventDefault();

        // Remove the "active" class from all items
        items.forEach(item => {
          item.classList.remove('slider-active');
        });

        // Add the "active" class to the clicked item
        this.classList.add('slider-active');

         // Get the href attribute of the clicked item
        // const link = this.getAttribute('href');

        // Redirect to the link
        // window.location.href = link;
      });
    });
