new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   }
});


let button = document.querySelector('.main__button');
let item = document.querySelectorAll('li');
button.addEventListener('click', function () {
   for (let i = 6; i < item.length; i++) {
      item[i].classList.toggle('main__item--hidden'); 
   }
   if (button.textContent === "Показать все") {
      button.textContent = "Скрыть"; 
   } else {
      button.textContent = "Показать все";
   }
});