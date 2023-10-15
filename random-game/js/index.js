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

//Game Over
let countLs = 1;

function setCountLs () {
  if(countLs === 10){
    countLs = 1;
  }
};

setCountLs ();

let live = null;
const gameContainer = document.querySelector('.game-container');
const playAgain = document.querySelector('.play-again');
const viewPlayEndScore = document.querySelector('.view-play-end-score');
function gameOver() {

live = setInterval (function() {
  const timeLocal = new Date();
  const currentTime = timeLocal.toLocaleTimeString();
  let hedgehogTop = /*hedgehog.getBoundingClientRect();*/ parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue("left"));
  if((stoneLeft <= 60) && (stoneLeft > 0) && (hedgehogTop/*.top*/ >= 135 ) && (countLs<11)) {
    //console.log(hedgehogTop.top); 
    clearInterval(live);
    scoreSpan.innerHTML = scoreCount;
    localStorage.setItem(countLs, `You Score: ${scoreCount} (data time: ${currentTime})`);
    
    gameContainer.classList.add('game-container-active');
    /*gameContainer.style.backgroundImage = 'none';
    gameContainer.style.backgroundColor = 'white';
    gameContainer.style.zIndex = '60';
    gameContainer.innerHTML = `Game over!!! You score: ${scoreCount}`
    gameContainer.style.textAlign = 'center';*/
    playAgain.classList.add('play-again-active');
    /*const gameOverItem = document.createElement('div');
    gameOverItem.classList.add('play-again');
    gameOverItem.innerHTML = 'play again';
    gameOverItem.style.padding = '5px';
    gameContainer.appendChild(gameOverItem);*/
    lSitems();
    countLs++;
    /*apple.classList.remove('fruit-animation');
    boletus.classList.remove('boletus-animation'); */
    clearInterval(appleInl);
    clearInterval(loopAppleScore);
    clearInterval(boletusInl);
    clearInterval(loopBoletusScore);
    clearInterval(flyagaricInl);
    clearInterval(loopFlyagaricScore);
    stone.style.display = 'none';
    //clearInterval(stoneInl);
    hedgehog.style.display = 'none';
    viewPlayEndScore.innerHTML = `Game over!!! You score: ${scoreCount}`;
    scoreCount = 0;
    

}
},5)

};

  




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


// подсчет общего score
let scoreInterval = setInterval ( function() {
  scoreSpan.innerHTML = scoreCount;
  }, 10);

  /*console.log(scoreCount);*/

  
// `Play again` и `Play` button
const playGe =  document.querySelector('.play-game');
window.addEventListener('load', () => {
  gameContainer.classList.add('game-container-active');
  playGe.classList.add('play-game-active');
});

playGe.addEventListener('click', () => {
  playGame();
  jumpOn();
  hedgehog.style.display = 'block';
  viewPlayEndScore.innerHTML = '';
})
function playGame() {
gameContainer.classList.remove('game-container-active');
  playAgain.classList.remove('play-again-active');
  playGe.classList.remove('play-game-active');
  hedgehog.style.display = 'block';
  jumpOn();
  viewPlayEndScore.innerHTML = '';
appleInl = setInterval ( function() {
  appleAtn();
  stone.style.display = 'block';
}, 3000);

loopAppleScore = setInterval ( function() {
  clearInterval(setScore);
  appleSetScore();
}, 3000);

boletusInl = setInterval ( function() {
  boletusAtn();
}, 4000);

loopBoletusScore = setInterval ( function() {
  clearInterval(setBoletusScore);
  boletusSetScore();
}, 3000);

flyagaricInl = setInterval ( function() {
  flyagaricAtn();
}, 6000);

loopFlyagaricScore = setInterval ( function() {
  clearInterval(setFlyagaricScore);
  flyagaricSetScore();
}, 3000);

gameOver();
};

playAgain.addEventListener('click', () => {
  
  playGame();
  stone.style.display = 'block';

});

