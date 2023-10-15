const hedgehog = document.getElementById('hedgehog');
const stone = document.getElementById('stone');
const apple = document.getElementById('apple');
const boletus = document.getElementById('boletus');
const flyagaric = document.getElementById('flyagaric');
const stoneAnimation = document.getElementById('.stone-animation');
const scoreSpan = document.querySelector('.score');

let scoreCount = 0;

let appleInl = null;

let loopAppleScore = null;

let boletusInl = null;

let loopBoletusScore = null;
let flyagaricInl = null;

let loopFlyagaricScore = null;

let stoneInl = null;


//Анимация яблока

function appleAtn() {
  if(apple.classList!='fruit-animation'){
  setInterval ( function() {
    apple.classList.add('fruit-animation');
}, 1000);
  }else{
setTimeout( function() {
  apple.classList.remove('fruit-animation'); 
}, 30);
  }
};

//Очки за яблоко
let setScore = null;
function appleSetScore() {
  console.log(scoreCount);
setScore = setInterval ( function() {

  let hedgehogTop2 = /*hedgehog.getBoundingClientRect();*/ parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let appleLeft = /*apple.getBoundingClientRect(); */ parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
  //console.log(hedgehogTop.top);
  
  if((appleLeft/*.left*/ <= 100) && (appleLeft/*.left*/ > 0) && (hedgehogTop2/*.top */<= 100) && (hedgehogTop2/*.top*/ >= 10)) {
    
    clearInterval(setScore);
    scoreCount = scoreCount + 20;
    
  }
}, 5);

};


//Анимация боровика

function boletusAtn() {
  if(boletus.classList!='boletus-animation'){
  setInterval ( function() {
    boletus.classList.add('boletus-animation');
}, 1000);
  }else{
setTimeout( function() {
  boletus.classList.remove('boletus-animation'); 
}, 30);
  }
};


// очки за боровик
let setBoletusScore = null;
function boletusSetScore() {
  console.log(scoreCount);
setBoletusScore = setInterval ( function() {

  let hedgehogTop3 = /*hedgehog.getBoundingClientRect();*/ parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let boletusLeft = /*apple.getBoundingClientRect(); */ parseInt(window.getComputedStyle(boletus).getPropertyValue("left"));
  //console.log(hedgehogTop.top);
  
  if((boletusLeft/*.left*/ <= 100) && (boletusLeft/*.left*/ > 0) && (hedgehogTop3/*.top */<= 100) && (hedgehogTop3/*.top*/ >= 10)) {
    
    clearInterval(setBoletusScore);
    scoreCount = scoreCount + 60;
    
  }
}, 5);

};

//Анимация мухомора

function flyagaricAtn() {
  if(flyagaric.classList!='flyagaric-animation'){
  setInterval ( function() {
    flyagaric.classList.add('flyagaric-animation');
}, 1000);
  }else{
setTimeout( function() {
  flyagaric.classList.remove('flyagaric-animation'); 
}, 30);
  }
};

// очки за мухомор
let setFlyagaricScore = null;
function flyagaricSetScore() {
  console.log(scoreCount);
setFlyagaricScore = setInterval ( function() {

  let hedgehogTop4 = /*hedgehog.getBoundingClientRect();*/ parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let flyagaricLeft = /*apple.getBoundingClientRect(); */ parseInt(window.getComputedStyle(flyagaric).getPropertyValue("left"));
  //console.log(hedgehogTop.top);
  
  if((flyagaricLeft/*.left*/ <= 100) && (flyagaricLeft/*.left*/ > 0) && (hedgehogTop4/*.top */<= 100) && (hedgehogTop4/*.top*/ >= 10)) {
    
    clearInterval(setFlyagaricScore);
    if(scoreCount > 80) {
      scoreCount = scoreCount - 80;
    }else{
      scoreCount = 0;
    }
    
    
  }
}, 5);

};

//Анимация движения камня
function stoneAtn() {
  if(stone.classList!='stone-animation'){
  setInterval ( function() {
  stone.classList.add('stone-animation');
}, 3000);
  }else{
setTimeout( function() {
  stone.classList.remove('stone-animation'); 
}, 30);
  }
};

stoneInl = setInterval ( function() {
  stoneAtn();
}, 3000);

//Анимация прыжка
let jumpSet = null;
function jumpOn() {

document.onkeydown = function jump(event) {
  if(hedgehog.classList != 'jump') {
    hedgehog.classList.add('jump'); 
  }
  jumpSet = setTimeout( function() {
    hedgehog.classList.remove('jump'); 
  }, 300)
  //console.log(event);
}
  
}



const resultsTable = document.querySelector('.results-table');
function lSitems() {
    if (localStorage.getItem(countLs)) {
      const listItem = document.createElement('div');
      listItem.classList.add('list-item');
      listItem.innerHTML = countLs+'.'+ ' ' + localStorage.getItem(countLs);
          resultsTable.appendChild(listItem);
      }
};

const headerListItem = document.querySelector('.header-list-item');
const resultsTableWrapper = document.querySelector('.results-table-wrapper');
const resultsTableOutsideClickWrapper = document.querySelector('.results-table-outside-click-wrapper');
headerListItem.addEventListener('click', () => {
  resultsTableWrapper.classList.add('results-table-wrapper-open');
  resultsTableOutsideClickWrapper.classList.add('results-table-outside-click-wrapper-active');
});

resultsTableOutsideClickWrapper.addEventListener('click', () => {
  resultsTableWrapper.classList.remove('results-table-wrapper-open');
  resultsTableOutsideClickWrapper.classList.remove('results-table-outside-click-wrapper-active');
});


