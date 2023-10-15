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
