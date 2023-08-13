console.log(' Self-assessment of my work:\n\n 1.Valid layout +10\n 2.Semantic layout +16\n 3.The layout matches the macket +54\n 4.General requirements for layout +20\n ------------------\n Total: 100 points\n\n\n P.S.\n  Have a nice day!');

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