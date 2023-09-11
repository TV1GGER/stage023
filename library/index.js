console.log('Моя самооценка:\n\n Этап 1: Пользователь не зарегистрирован +48\n Этап 2: Пользователь на этапе регистрации +37\n Этап 3: Пользователь на этапе входа в учётную запись после регистрации. +0\n Этап 4: Пользователь после входа в учётную запись. +0\n ------------------\n Total: 85 points\n\n\n P.S.\n  Have a nice day!');



  const burgerItem = document.querySelector('.burger__btn');
  const burgerItem2 = document.querySelector('.burger__btn');
  const menu = document.querySelector('.nav');
  const menuClose = document.querySelector('.nav-close');
  const menuCloseNav = document.querySelector('.nav');
  const menu2 = document.querySelector('.layout__btn');
  const bod = document.querySelector('body');

  const dropDown = document.querySelector('.dropdown ');
const dropdownContent = document.querySelector('.dropdown-content');
const outsideClickWrapper = document.querySelector('.outside-click-wrapper');
const outsideClickWrapperVisible = document.querySelector('.outside-click-wrapper-visible');
const iconProfileLinkPath = document.querySelector('.icon-profile-link path');
const dropdownContentRegister = document.querySelector('.dropdown-content-register');
const modalRegisterWrapper = document.querySelector('.modal-register-wrapper');
const modalRegisterSvg = document.querySelector('.modal-register-svg');
const modalRegisterOutsideClickWrapper = document.querySelector('.modal-register-outside-click-wrapper');
const libraryCardButtonSignUp =  document.querySelector('.library-card-button-sign-up');

// Burger menu
let countClickDropDown = 0;

(function() {
  
    burgerItem.addEventListener('click', () => {
    countClickDropDown++;
    dropdownContent.classList.remove('content-block');
    outsideClickWrapper.classList.remove('outside-click-wrapper-visible');
    iconProfileLinkPath.style.fill = '';
    clearInterval(setTime);
      menu.classList.add('nav_active');
      bod.classList.add('lock');
      burgerItem.style.visibility = 'hidden';
  });
  menuClose.addEventListener('click', () => {
    clearInterval(setTime);
      menu.classList.remove('nav_active');
      bod.classList.remove('lock');
      menu2.classList.remove('layout__btn_active');
      burgerItem.style.visibility = 'visible';
  });
  menuCloseNav.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
      burgerItem.style.visibility = 'visible';
  });
  burgerItem2.addEventListener('click', () => {
    clearInterval(setTime);
      menu2.classList.add('layout__btn_active');
      burgerItem.style.visibility = 'hidden';
  });
  menu2.addEventListener('click', () => {
    clearInterval(setTime);
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
      burgerItem.style.visibility = 'visible';
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

// About section slider radio input Carusel

const inputs = document.getElementsByName('favorites-season');
const eatersSunyiDean = document.querySelector('#eaters-sunyi-dean');
const cackleRachelHarrison = document.querySelector('#Cackle-Rachel-Harrison');
const danteErichAuerbach = document.querySelector('#dante-erich-auerbach');
const queenCliveIrving = document.querySelector('#queen-clive-irving');

const bodyStephenKing = document.querySelector('#body-stephen-king');
const carryToniJenson = document.querySelector('#carry-toni-jenson');
const daysAlexandraChang = document.querySelector('#days-alexandra-chang');
const dominicanaAngieCruz = document.querySelector('#dominicana-angie-cruz');

const crudePabloFajardoSophieTardyJoubert = document.querySelector('#crude-pablo-fajardo-sophie-tardy-joubert');
const peopleYvonChouinard = document.querySelector('#people-yvon-chouinard');
const octopusBrendaShaughnessy = document.querySelector('#octopus-brenda-shaughnessy');
const sharkKianaDavenport = document.querySelector('#shark-kiana-davenport');

const casualReniaWhite = document.querySelector('#casual-renia-white');
const fireLouUreneck = document.querySelector('#fire-lou-ureneck');
const rickeyHowardBryant = document.querySelector('#rickey-howard-bryant');
const slugMeganMilks = document.querySelector('#slug-megan-milks');

let winterArr = [eatersSunyiDean, cackleRachelHarrison, danteErichAuerbach, queenCliveIrving];
let springArr = [bodyStephenKing, carryToniJenson, daysAlexandraChang, dominicanaAngieCruz];
let summerArr = [crudePabloFajardoSophieTardyJoubert, peopleYvonChouinard, octopusBrendaShaughnessy, sharkKianaDavenport];
let autumnArr = [casualReniaWhite, fireLouUreneck, rickeyHowardBryant, slugMeganMilks];


window.addEventListener("DOMContentLoaded", () => {
    for (let keys in springArr) {
        springArr[keys].classList.add('unvisible-img');
        springArr[keys].style.display = 'none';
    }
    for (let keyses in summerArr) {
        summerArr[keyses].classList.add('unvisible-img');
        summerArr[keyses].style.display = 'none';
    }
    for (let xkeyses in autumnArr) {
        autumnArr[xkeyses].classList.add('unvisible-img');
        autumnArr[xkeyses].style.display = 'none';
    }
    for (let ykeyses in winterArr) {
        document.getElementById('winter').checked = true;
        winterArr[ykeyses].classList.add('visible-img'); 
    }
  });

function visibleImg(xArr) {
    for (let keys in xArr) {
        xArr[keys].classList.remove('unvisible-img');
        xArr[keys].classList.add('visible-img');
        let myTimeoutVis = setTimeout(() => {
            xArr[keys].style.display = "block";
            xArr[keys].style.opacity = 0;
            let fadeInInterval = setInterval(function(){ 
                if (xArr[keys].style.opacity < 1) {
                    xArr[keys].style.opacity += 0.01;
                } else if (xArr[keys].style.opacity === 1) {
                }
                xArr[keys].style.opacity = 1;
                
                }, 300);
          }, 300);
    }
}

function unvisibleImg(yArr) {
    for (let ykeys in yArr) {
        yArr[ykeys].style.opacity = 0;
        yArr[ykeys].classList.remove('visible-img');
        yArr[ykeys].classList.add('unvisible-img');
    
        let myTimeoutUnv = setTimeout(() => {
            yArr[ykeys].style.display = "none";

            let fadeOutInterval = setInterval(function(){ 
                if (yArr[ykeys].style.opacity >0) {
                    yArr[ykeys].style.opacity -= 0.01;
                } else if (yArr[ykeys].style.opacity <0) {
                    yArr[ykeys].style.opacity = 0;
                    yArr[ykeys].style.display = "none";
                    clearInterval(fadeOutInterval);
                }
                }, 300);
          }, 300);
        
    }
}


function checkedInput() {
    if (document.getElementById('winter').checked === true) {
        unvisibleImg(springArr);
        unvisibleImg(summerArr);
        unvisibleImg(autumnArr);
        visibleImg(winterArr);
    }else if(document.getElementById('spring').checked === true) {
        unvisibleImg(winterArr);
        unvisibleImg(summerArr);
        unvisibleImg(autumnArr);
        visibleImg(springArr);
}else if(document.getElementById('summer').checked === true) {
        unvisibleImg(winterArr);
        unvisibleImg(springArr);
        unvisibleImg(autumnArr);
        visibleImg(summerArr);
}else if(document.getElementById('autumn').checked === true) {
        unvisibleImg(winterArr);
        unvisibleImg(springArr);
        unvisibleImg(summerArr);
        visibleImg(autumnArr);
}
}

function inputChecked() {
for (let n=0; n<inputs.length; n++) {
        inputs[n].onchange = checkedInput;
        
    }

};
inputChecked();


// `Register` or `Sign Up`


dropDown.addEventListener('click', () => {
    countClickDropDown++;
    if (countClickDropDown%2 !== 0) {
        menu.classList.remove('nav_active');
        menu2.classList.remove('layout__btn_active');
        bod.classList.remove('lock');
        iconProfileLinkPath.style.fill = '#BB945F';
        setTime = setInterval(() => {
            dropdownContent.classList.add('content-block');
            outsideClickWrapper.classList.add('outside-click-wrapper-visible');
            burgerItem.style.visibility = 'visible';
        }, 250);
        
        
        
    }else {
        dropdownContent.classList.remove('content-block');
        outsideClickWrapper.classList.remove('outside-click-wrapper-visible');
        iconProfileLinkPath.style.fill = '';
        clearInterval(setTime);
    }
    
});

outsideClickWrapper.addEventListener('click', () => {
    countClickDropDown++;
    dropdownContent.classList.remove('content-block');
    outsideClickWrapper.classList.remove('outside-click-wrapper-visible');
    iconProfileLinkPath.style.fill = '';
    clearInterval(setTime);
});


// 'REGISTER' modal window

dropdownContentRegister.addEventListener('click', () => {
    modalRegisterWrapper.classList.add('modal-register-wrapper-open');
    modalRegisterOutsideClickWrapper.classList.add('modal-register-outside-click-wrapper-active');
});

modalRegisterSvg.addEventListener('click', () => {
    modalRegisterWrapper.classList.remove('modal-register-wrapper-open');
    modalRegisterOutsideClickWrapper.classList.remove('modal-register-outside-click-wrapper-active');
});

modalRegisterOutsideClickWrapper.addEventListener('click', () => {
    modalRegisterWrapper.classList.remove('modal-register-wrapper-open');
    modalRegisterOutsideClickWrapper.classList.remove('modal-register-outside-click-wrapper-active');
});

libraryCardButtonSignUp.addEventListener('click', () => {
    modalRegisterWrapper.classList.add('modal-register-wrapper-open');
    modalRegisterOutsideClickWrapper.classList.add('modal-register-outside-click-wrapper-active');
});