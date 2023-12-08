var links = document.querySelectorAll('.nav-link')
console.log(links)
console.log(typeof(links))


window.addEventListener('onload',function(){
    links.forEach((item,index)=>{
        item
    })
})

item
links.forEach((item,index)=>{
    item.addEventListener('click', function(){
        links.forEach((element,index)=>{
            element.classList.remove('active')
        })

        item.classList.add('active')
    })


})

// .addEventListener('click',function(){
//     for(var item in links){
//         links[item].classList.remove('active')
//     }
//     links[index].classList.add('active')
// })

// window.addEventListener('load', function() {

//     // const url = window.location.href.split('?');
//     // const id = url[url.length-1].split('=')
//     // let uni_id =id[id.length-1]
  
//     // if(uni_id[uni_id.length-1] == '#'){
//     //   uni_id = uni_id.slice(0,-1)
//     // }
//     // let selectedIndex = -1
//     const items = document.querySelectorAll('.slider-items');
//     console.log()
//     items.forEach((item,index) =>{
//       if(item.getAttribute('data-name') == uni_id){
//         selectedIndex = index
//         currentIndex = selectedIndex
//         console.log(selectedIndex)
//         // if (currentIndex <= 7) {
//         //   currentIndex = sliderItems.length-itemsDisplayed;
//         // }
//         updateSlider()
        
//         items.forEach(item =>{
//           item.classList.remove('slider-active')
//         })
//         item.classList.add('slider-active')
//       }
//     })
  
//   })
  
  
