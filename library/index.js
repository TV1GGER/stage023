console.log(' Моя самооценка:\n\n 1.Вёрстка соответствует макету. Ширина экрана 768px +26\n 2.Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n 3.На ширине экрана 768рх реализовано адаптивное меню +12\n  ------------------\n Total: 50 points\n\n\n P.S.\n  Have a nice day!');

(function() {
  const burgerItem = document.querySelector('.burger__btn');
  const burgerItem2 = document.querySelector('.burger__btn');
  const menu = document.querySelector('.nav');
  const menuClose = document.querySelector('.nav-close');
  const menuCloseNav = document.querySelector('.nav');
  const menu2 = document.querySelector('.layout__btn');
  const bod = document.querySelector('body');
  
  
      burgerItem.addEventListener('click', () => {
      menu.classList.add('nav_active');
      bod.classList.add('lock');
  });
  menuClose.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      bod.classList.remove('lock');
      menu2.classList.remove('layout__btn_active');
  });
  menuCloseNav.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
  });
  burgerItem2.addEventListener('click', () => {
      menu2.classList.add('layout__btn_active');
  });
  menu2.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
  });
}());