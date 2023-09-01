//console.log(' Моя самооценка:\n\n 1.Вёрстка соответствует макету. Ширина экрана 768px +26\n 2.Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n 3.На ширине экрана 768рх реализовано адаптивное меню +12\n  ------------------\n Total: 50 points\n\n\n P.S.\n  Have a nice day!');


// Burger menu

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


// About section slider Carusel

const slideNum1 = document.querySelector('#about-image1');
const slideNum2 = document.querySelector('#about-image2');
const slideNum3 = document.querySelector('#about-image3');
const slideNum4 = document.querySelector('#about-image4');
const slideNum5 = document.querySelector('#about-image5');
const arrowRight = document.querySelector('.carret-right');
const arrowLeft = document.querySelector('.carret-left');
const aboutDotsBtn1 = document.querySelector('#about-dots-btn1');
const aboutDotsSvg1 = document.querySelector('#about-dots-svg1');
const aboutDotsDiv1 = document.querySelector('#about-dots-btn1');
const aboutDotsBtn2 = document.querySelector('#about-dots-btn2');
const aboutDotsSvg2 = document.querySelector('#about-dots-svg2');
const aboutDotsDiv2 = document.querySelector('#about-dots-btn2');
const aboutDotsBtn3 = document.querySelector('#about-dots-btn3');
const aboutDotsSvg3 = document.querySelector('#about-dots-svg3');
const aboutDotsDiv3 = document.querySelector('#about-dots-btn3');
const aboutDotsBtn4 = document.querySelector('#about-dots-btn4');
const aboutDotsSvg4 = document.querySelector('#about-dots-svg4');
const aboutDotsDiv4 = document.querySelector('#about-dots-btn4');
const aboutDotsBtn5 = document.querySelector('#about-dots-btn5');
const aboutDotsSvg5 = document.querySelector('#about-dots-svg5');
const aboutDotsDiv5 = document.querySelector('#about-dots-btn5');
const cardContainerVisible = document.querySelector('.about-img-wrapper');
const cardPets = document.querySelectorAll('.about-slider-images-container');

let slideArr = [slideNum1, slideNum2, slideNum3, slideNum4, slideNum5];

(function () {
    aboutDotsDiv1.style.cursor = "default";
}());

let leftSet = 0;


const moveDot1 = () => {
    if (leftSet > 0) {
    cardContainerVisible.classList.add("transition-dot1-right");
    leftSet = 0;
    cardContainerVisible.style.left = 0 +'px';
    aboutDotsBtn1.removeEventListener('click', moveDot1);
    aboutDotsBtn2.addEventListener('click', moveDot2);
    aboutDotsBtn3.addEventListener('click', moveDot3);
    aboutDotsBtn4.addEventListener('click', moveDot4);
    aboutDotsBtn5.addEventListener('click', moveDot5);
    arrowRight.addEventListener("click", arrowRightBtn);
    aboutDotsDiv1.style.cursor = "default";
    aboutDotsDiv2.style.cursor = "pointer";
    aboutDotsDiv3.style.cursor = "pointer";
    aboutDotsSvg2.style.fill= "#0C0C0E";
    aboutDotsSvg1.style.fill= "#BB945F";
    aboutDotsSvg3.style.fill= "#0C0C0E";
    aboutDotsSvg4.style.fill= "#0C0C0E";
    aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if (leftSet === 0){
        aboutDotsBtn1.removeEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        aboutDotsDiv1.style.cursor = "default";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#BB945F";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";
        }
};
const moveDot2 = () => {
    if (leftSet === 0) {
    cardContainerVisible.classList.add("transition-left");
    leftSet = leftSet + 475;
    cardContainerVisible.style.left = -leftSet +'px';
    aboutDotsBtn1.addEventListener('click', moveDot1);
    aboutDotsBtn2.removeEventListener('click', moveDot2);
    aboutDotsBtn3.addEventListener('click', moveDot3);
    aboutDotsBtn4.addEventListener('click', moveDot4);
    aboutDotsBtn5.addEventListener('click', moveDot5);
    arrowRight.addEventListener("click", arrowRightBtn);
    aboutDotsDiv1.style.cursor = "pointer";
    aboutDotsDiv2.style.cursor = "default";
    aboutDotsDiv3.style.cursor = "pointer";
    aboutDotsSvg2.style.fill= "#BB945F";
    aboutDotsSvg1.style.fill= "#0C0C0E";
    aboutDotsSvg3.style.fill= "#0C0C0E";
    aboutDotsSvg4.style.fill= "#0C0C0E";
    aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if (leftSet !== 0){
        cardContainerVisible.classList.add("transition-right");
        leftSet = 0 + 475;
        cardContainerVisible.style.left = -leftSet +'px';
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.removeEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "default";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#BB945F";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";
        }
};
  
const moveDot3 = () => {
    if (leftSet === 0) {
        cardContainerVisible.classList.add("transition-dot3-right");
        leftSet = leftSet + 950;
        cardContainerVisible.style.left = -leftSet +'px';
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.removeEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "default";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#BB945F";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";
        }else if((leftSet = 475) && (leftSet !== 0)){
            cardContainerVisible.classList.add("transition-dot3-right-middle");
            leftSet = leftSet + 475;
            cardContainerVisible.style.left = -leftSet +'px';
            aboutDotsBtn1.addEventListener('click', moveDot1);
            aboutDotsBtn2.addEventListener('click', moveDot2);
            aboutDotsBtn3.removeEventListener('click', moveDot3);
            aboutDotsBtn4.addEventListener('click', moveDot4);
            aboutDotsBtn5.addEventListener('click', moveDot5);
            arrowRight.addEventListener("click", arrowRightBtn);
            aboutDotsDiv1.style.cursor = "pointer";
            aboutDotsDiv2.style.cursor = "pointer";
            aboutDotsDiv3.style.cursor = "default";
            aboutDotsDiv4.style.cursor = "pointer";
            aboutDotsDiv5.style.cursor = "pointer";
            aboutDotsSvg2.style.fill= "#0C0C0E";
            aboutDotsSvg1.style.fill= "#0C0C0E";
            aboutDotsSvg3.style.fill= "#BB945F";
            aboutDotsSvg4.style.fill= "#0C0C0E";
            aboutDotsSvg5.style.fill= "#0C0C0E";
            }else if(leftSet > 950){
                cardContainerVisible.classList.add("transition-dot3-left");
                leftSet = 0 + 950;
                cardContainerVisible.style.left = -leftSet +'px';
                aboutDotsBtn1.addEventListener('click', moveDot1);
                aboutDotsBtn2.addEventListener('click', moveDot2);
                aboutDotsBtn3.removeEventListener('click', moveDot3);
                aboutDotsBtn4.addEventListener('click', moveDot4);
                aboutDotsBtn5.addEventListener('click', moveDot5);
                arrowRight.addEventListener("click", arrowRightBtn);
                aboutDotsDiv1.style.cursor = "pointer";
                aboutDotsDiv2.style.cursor = "pointer";
                aboutDotsDiv3.style.cursor = "default";
                aboutDotsDiv4.style.cursor = "pointer";
                aboutDotsDiv5.style.cursor = "pointer";
                aboutDotsSvg2.style.fill= "#0C0C0E";
                aboutDotsSvg1.style.fill= "#0C0C0E";
                aboutDotsSvg3.style.fill= "#BB945F";
                aboutDotsSvg4.style.fill= "#0C0C0E";
                aboutDotsSvg5.style.fill= "#0C0C0E";
                }
};

const moveDot4 = () => {
    if (leftSet === 0) {
    cardContainerVisible.classList.add("transition-dot4-right");
    leftSet = leftSet + 1425;
    cardContainerVisible.style.left = -leftSet +'px';
    aboutDotsBtn1.addEventListener('click', moveDot1);
    aboutDotsBtn2.addEventListener('click', moveDot2);
    aboutDotsBtn3.addEventListener('click', moveDot3);
    aboutDotsBtn4.removeEventListener('click', moveDot4);
    aboutDotsBtn5.addEventListener('click', moveDot5);
    arrowRight.addEventListener("click", arrowRightBtn);
    aboutDotsDiv1.style.cursor = "pointer";
    aboutDotsDiv2.style.cursor = "pointer";
    aboutDotsDiv3.style.cursor = "pointer";
    aboutDotsDiv4.style.cursor = "default";
    aboutDotsDiv5.style.cursor = "pointer";
    aboutDotsSvg2.style.fill= "#0C0C0E";
    aboutDotsSvg1.style.fill= "#0C0C0E";
    aboutDotsSvg3.style.fill= "#0C0C0E";
    aboutDotsSvg4.style.fill= "#BB945F";
    aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if ((leftSet < 1425) && (leftSet !== 0)){
        cardContainerVisible.classList.add("transition-dot4-right");
        leftSet = 0 + 1425;
        cardContainerVisible.style.left = -leftSet +'px';
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.removeEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsDiv4.style.cursor = "default";
        aboutDotsDiv5.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#BB945F";
        aboutDotsSvg5.style.fill= "#0C0C0E";
        }else if(leftSet > 1425){
            cardContainerVisible.classList.add("transition-dot4-left");
            leftSet = 0 + 1425;
            cardContainerVisible.style.left = -leftSet +'px';
            aboutDotsBtn1.addEventListener('click', moveDot1);
            aboutDotsBtn2.addEventListener('click', moveDot2);
            aboutDotsBtn3.addEventListener('click', moveDot3);
            aboutDotsBtn4.removeEventListener('click', moveDot4);
            aboutDotsBtn5.addEventListener('click', moveDot5);
            arrowRight.addEventListener("click", arrowRightBtn);
            aboutDotsDiv1.style.cursor = "pointer";
            aboutDotsDiv2.style.cursor = "pointer";
            aboutDotsDiv3.style.cursor = "pointer";
            aboutDotsDiv4.style.cursor = "default";
            aboutDotsDiv5.style.cursor = "pointer";
            aboutDotsSvg2.style.fill= "#0C0C0E";
            aboutDotsSvg1.style.fill= "#0C0C0E";
            aboutDotsSvg3.style.fill= "#0C0C0E";
            aboutDotsSvg4.style.fill= "#BB945F";
            aboutDotsSvg5.style.fill= "#0C0C0E";
            }
};

const moveDot5 = () => {
    if (leftSet === 0) {
    cardContainerVisible.classList.add("transition-dot5-right");
    leftSet = leftSet + 1900;
    cardContainerVisible.style.left = -leftSet +'px';
    aboutDotsBtn1.addEventListener('click', moveDot1);
    aboutDotsBtn2.addEventListener('click', moveDot2);
    aboutDotsBtn3.addEventListener('click', moveDot3);
    aboutDotsBtn4.addEventListener('click', moveDot4);
    aboutDotsBtn5.removeEventListener('click', moveDot5);
    arrowRight.removeEventListener("click", arrowRightBtn);
    aboutDotsDiv1.style.cursor = "pointer";
    aboutDotsDiv2.style.cursor = "pointer";
    aboutDotsDiv3.style.cursor = "pointer";
    aboutDotsDiv4.style.cursor = "pointer";
    aboutDotsDiv5.style.cursor = "default";
    aboutDotsSvg2.style.fill= "#0C0C0E";
    aboutDotsSvg1.style.fill= "#0C0C0E";
    aboutDotsSvg3.style.fill= "#0C0C0E";
    aboutDotsSvg4.style.fill= "#0C0C0E";
    aboutDotsSvg5.style.fill= "#BB945F";
    }else if ((leftSet < 1900) && (leftSet !== 0)){
        cardContainerVisible.classList.add("transition-dot5-right");
        leftSet = 0 + 1900;
        cardContainerVisible.style.left = -leftSet +'px';
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.removeEventListener('click', moveDot5);
        arrowRight.removeEventListener("click", arrowRightBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsDiv4.style.cursor = "pointer";
        aboutDotsDiv5.style.cursor = "default";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#BB945F";
        }
};

function setDotColor(leftSet) {
    if (leftSet === 0) {
        aboutDotsBtn1.removeEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        arrowLeft.removeEventListener("click", arrowLeftBtn);
        aboutDotsDiv1.style.cursor = "default";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#BB945F";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";

    }else if (leftSet === 475) {
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.removeEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        arrowLeft.addEventListener("click", arrowLeftBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "default";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#BB945F";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if (leftSet === 950) {
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.removeEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        arrowLeft.addEventListener("click", arrowLeftBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "default";
        aboutDotsDiv4.style.cursor = "pointer";
        aboutDotsDiv5.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#BB945F";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if (leftSet === 1425) {
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.removeEventListener('click', moveDot4);
        aboutDotsBtn5.addEventListener('click', moveDot5);
        arrowRight.addEventListener("click", arrowRightBtn);
        arrowLeft.addEventListener("click", arrowLeftBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsDiv4.style.cursor = "default";
        aboutDotsDiv5.style.cursor = "pointer";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#BB945F";
        aboutDotsSvg5.style.fill= "#0C0C0E";
    }else if (leftSet === 1900) {
        aboutDotsBtn1.addEventListener('click', moveDot1);
        aboutDotsBtn2.addEventListener('click', moveDot2);
        aboutDotsBtn3.addEventListener('click', moveDot3);
        aboutDotsBtn4.addEventListener('click', moveDot4);
        aboutDotsBtn5.removeEventListener('click', moveDot5);
        arrowRight.removeEventListener("click", arrowRightBtn);
        arrowLeft.addEventListener("click", arrowLeftBtn);
        aboutDotsDiv1.style.cursor = "pointer";
        aboutDotsDiv2.style.cursor = "pointer";
        aboutDotsDiv3.style.cursor = "pointer";
        aboutDotsDiv4.style.cursor = "pointer";
        aboutDotsDiv5.style.cursor = "default";
        aboutDotsSvg2.style.fill= "#0C0C0E";
        aboutDotsSvg1.style.fill= "#0C0C0E";
        aboutDotsSvg3.style.fill= "#0C0C0E";
        aboutDotsSvg4.style.fill= "#0C0C0E";
        aboutDotsSvg5.style.fill= "#BB945F";
    }
};

const arrowRightBtn = () => {
    if(leftSet === 1900) {
        arrowRight.removeEventListener("click", arrowRightBtn);
        setDotColor(leftSet);
    }else {
        cardContainerVisible.classList.add("transition-left");
        leftSet = leftSet + 475;
        cardContainerVisible.style.left = -leftSet +'px';
        arrowRight.addEventListener("click", arrowRightBtn);
        setDotColor(leftSet);
    }
}

const arrowLeftBtn = () => {
    if((leftSet <= 1900) && (leftSet !== 0)) {
        cardContainerVisible.classList.add("transition-right");
        leftSet = leftSet - 475;
        cardContainerVisible.style.left = -leftSet +'px';
        arrowLeft.addEventListener("click", arrowLeftBtn);
        arrowRight.addEventListener("click", arrowRightBtn);
        setDotColor(leftSet);
    }else if(leftSet === 0){
        arrowLeft.removeEventListener("click", arrowLeftBtn);
        setDotColor(leftSet);
    }
}

setDotColor();

  aboutDotsBtn1.addEventListener("click", moveDot1);
  aboutDotsBtn2.addEventListener("click", moveDot2);
  aboutDotsBtn3.addEventListener("click", moveDot3);
  aboutDotsBtn4.addEventListener("click", moveDot4);
  aboutDotsBtn5.addEventListener("click", moveDot5);
  arrowRight.addEventListener("click", arrowRightBtn);
  arrowLeft.addEventListener("click", arrowLeftBtn);