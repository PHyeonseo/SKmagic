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

// const gnbLis = document.querySelectorAll('.gnb>ul>li')
// const gnbFocus1 = document.querySelector('.magicP')
// // const gnbFocus = document.querySelectorAll('.header>.inner .gnb>ul>li')
// // console.log(gnbFocus1)

// gnbLis.forEach((gnbLi) => {
//   gnbLi.addEventListener('mouseenter',function() {
//     gnbFocus1.style.width = '100px'
//     console.log(gnbFocus1)
//   })

// })
// const gnbLis = document.querySelectorAll('.gnb ul li')
// const gnbCtr = document.querySelector('.gnb_ctr')
// const gnbMenus =document.querySelectorAll('.gnb_ctr .gnb_menu')
// const gnbMenu1 =document.querySelector('.gnb_ctr .gnb_menu')


// gnbLis[0].addEventListener('mouseover',function() {
//   gnbMenus[0].style.display = 'flex'
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


new Swiper(".story .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  // autoplay : {
  //   delay:2000
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // loop : true
});


var swiper = new Swiper(".card .mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
