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


