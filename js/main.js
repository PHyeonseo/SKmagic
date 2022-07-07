// 헤더검색버튼
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

//추천상품 gsap
const recPros = document.querySelectorAll('.recommend .inner .rec')

window.addEventListener('scroll',() => {
  recPros.forEach((recPro) => {
    if(window.scrollY > 200) {
      gsap.to(recPro,0.01,{
        opacity : 1
      })
    }
  })
})


// 메인비주얼 슬라이드
new Swiper ('.visual .mySwiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    pagination: {
    el: ".visual .swiper-pagination",
    clickable: true,
  },
  loop :true,
  effect: 'fade',
})


// SKPRODUCT
const skPros = document.querySelectorAll('.sk_product .inner .sk_pro_box label')

const lifePro = document.querySelector('.life_product')
const waterPro = document.querySelector('.water_product')
const dishWasherPro = document.querySelector('.dish_washer_product')
const inductionPro = document.querySelector('.induction_product')

skPros[0].addEventListener('click',() => {
    gsap.to(lifePro,0.3,{opacity: 1})
    gsap.to(waterPro,0.3,{opacity: 0})
    gsap.to(dishWasherPro,0.3,{opacity: 0})
    gsap.to(inductionPro,0.3,{opacity: 0})
})
skPros[1].addEventListener('click',() => {
    gsap.to(waterPro,0.3,{opacity: 1})
    gsap.to(lifePro,0.1,{opacity: 0})
    gsap.to(dishWasherPro,0.3,{opacity: 0})
    gsap.to(inductionPro,0.3,{opacity: 0})
})
skPros[2].addEventListener('click',() => {
    gsap.to(dishWasherPro,0.3,{opacity: 1})
    gsap.to(lifePro,0.1,{opacity: 0})
    gsap.to(waterPro,0.3,{opacity: 0})
    gsap.to(inductionPro,0.3,{opacity: 0})
})
skPros[3].addEventListener('click',() => {
    gsap.to(inductionPro,0.3,{opacity: 1})
    gsap.to(lifePro,0.1,{opacity: 0})
    gsap.to(waterPro,0.3,{opacity: 0})
    gsap.to(dishWasherPro,0.3,{opacity: 0})
})





//STORY 슬라이드
new Swiper(".story .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".story .swiper-button-next",
    prevEl: ".story .swiper-button-prev",
  },
  loop:true
});

new Swiper(".story .fadeSwiper", {
  effect: "fade",
  navigation: {
    nextEl: ".story .swiper-button-next",
    prevEl: ".story .swiper-button-prev",
  },
  loop:true 
});


//CARD 슬라이드
new Swiper(".card .mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".card .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".card .swiper-button-next",
    prevEl: ".card .swiper-button-prev",
  }
});



const scrollRecs = document.querySelectorAll('.scroll_rec')
console.log(scrollRecs)

scrollRecs.forEach((scrollRec) => {
  new ScrollMagic
    .Scene({
      triggerElement: scrollRec,
      triggerHook: 0.7
    })
  .setClassToggle(scrollRec,'show')
  .addTo(new ScrollMagic.Controller())
})


// 퀵메뉴
const Stop = document.querySelector('.quick_menu .top')

Stop.addEventListener('click',() => {
  gsap.to(window, 0.5, { //gsap.to(요소,시간,{애니메이션옵션})
    scrollTo : 0
  })
})

window.addEventListener('scroll',() => {
  if(window.scrollY > 150) {
      gsap.to(Stop,0.8, {
        right : 0
      })
  }
  else if(window.scrollY == 0) {
    gsap.to(Stop,0.8, {
      right : -63
    })
  }
})