const search = document.querySelector('.search')
const searchInput = document.querySelector('.search input')

search.addEventListener('click',function() {
  searchInput.focus()
})

searchInput.addEventListener('focus',function() {
  search.classList.add('focused')
})
searchInput.addEventListener('blur',function() {
  search.classList.remove('focused')
})


const gnbLis = document.querySelectorAll('.gnb ul li')
const gnbMenus =document.querySelectorAll('.gnb_ctr .gnb_menu')
// console.log(gnbLis[2])

// gnbLis.forEach((gnbLi) => {
//   gnbLi.addEventListener('mouseover',function() {
//     gnbMenus[0].style.display = 'flex'
//   })
// })






new Swiper(".visual .mySwiper", { 
  autoplay : {
    delay:2000
  },
  loop : true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


