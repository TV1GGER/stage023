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
    apple.style.display = 'block';
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
setScore = setInterval ( function() {

  let hedgehogTop2 = parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let appleLeft = parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
  
  if((appleLeft <= 100) && (appleLeft > 0) && (hedgehogTop2 <= 100) && (hedgehogTop2 >= 10)) {
    clearInterval(setScore);
    scoreCount = scoreCount + 20;
    apple.style.display = 'none';
    playGetItemSoundPlay();
  }
}, 5);

};


//Анимация боровика

function boletusAtn() {
  if(boletus.classList!='boletus-animation'){
  setInterval ( function() {
    boletus.style.display = 'block';
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
setBoletusScore = setInterval ( function() {
  let hedgehogTop3 = parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let boletusLeft = parseInt(window.getComputedStyle(boletus).getPropertyValue("left"));
  if((boletusLeft <= 100) && (boletusLeft > 0) && (hedgehogTop3 <= 100) && (hedgehogTop3 >= 10)) {
    clearInterval(setBoletusScore);
    scoreCount = scoreCount + 60;
    boletus.style.display = 'none';
    playGetItemSoundPlay();
  }
}, 5);

};


//Анимация мухомора

function flyagaricAtn() {
  if(flyagaric.classList!='flyagaric-animation'){
  setInterval ( function() {
    flyagaric.style.display = 'block';
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
setFlyagaricScore = setInterval ( function() {

  let hedgehogTop4 = parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let flyagaricLeft = parseInt(window.getComputedStyle(flyagaric).getPropertyValue("left"));
  
  if((flyagaricLeft <= 100) && (flyagaricLeft > 0) && (hedgehogTop4 <= 100) && (hedgehogTop4 >= 10)) {
    clearInterval(setFlyagaricScore);
    if(scoreCount > 80) {
      scoreCount = scoreCount - 80;
      flyagaric.style.display = 'none';
    }else{
      scoreCount = 0;
      flyagaric.style.display = 'none';
    }
    playflyagaricSoundPlay()
  }
}, 5);

};


//Анимация движения камня

function stoneAtn() {
  if(stone.classList!='stone-animation'){
  setInterval ( function() {
    stone.style.display = 'block';
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
    playJumpSoundPlay();
  }
  jumpSet = setTimeout( function() {
    hedgehog.classList.remove('jump'); 
  }, 300)
}
  
}

function jumpOnTouch() {
  document.ontouchmove = function jumpTouch(event) {
    if(hedgehog.classList != 'jump') {
      hedgehog.classList.add('jump'); 
      playJumpSoundPlay();
    }
    jumpSet = setTimeout( function() {
      hedgehog.classList.remove('jump'); 
    }, 300)
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
  let hedgehogTop = parseInt(window.getComputedStyle(hedgehog).getPropertyValue("top"));
  let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue("left"));
  if((stoneLeft <= 60) && (stoneLeft > 0) && (hedgehogTop >= 135 ) && (countLs<11)) {
    playStoneSoundPlay();
    clearInterval(live);
    scoreSpan.innerHTML = scoreCount;
    localStorage.setItem(countLs, `You Score: ${scoreCount} (data time: ${currentTime})`);
    
    gameContainer.classList.add('game-container-active');
    playAgain.classList.add('play-again-active');
    lSitems();
    clearInterval(appleInl);
    clearInterval(loopAppleScore);
    clearInterval(boletusInl);
    clearInterval(loopBoletusScore);
    clearInterval(flyagaricInl);
    clearInterval(loopFlyagaricScore);
    apple.style.display = 'none';
    boletus.style.display = 'none';
    flyagaric.style.display = 'none';
    stone.style.display = 'none';
    hedgehog.style.display = 'none';
    viewPlayEndScore.innerHTML = `Game over!!! You score: ${scoreCount}`;
    scoreCount = 0;
    backgroundSound.pause(); 
    jumpSound.pause();
    playGameOverSoundPlay();  
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

  
// `Play again` и `Play` button

const playGe =  document.querySelector('.play-game');
window.addEventListener('load', () => {
  gameContainer.classList.add('game-container-active');
  playGe.classList.add('play-game-active');
});

playGe.addEventListener('click', () => {
  playGame();
  jumpOn();
  jumpOnTouch();
  hedgehog.style.display = 'block';
  viewPlayEndScore.innerHTML = '';
})

function playGame() {
  backgroundSoundPlay();
gameContainer.classList.remove('game-container-active');
  playAgain.classList.remove('play-again-active');
  playGe.classList.remove('play-game-active');
  hedgehog.style.display = 'block';
  jumpOn();
  jumpOnTouch();
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
  backgroundSoundPlay();
  countLs++;
});


// background audio 

const backgroundSound = new Audio();

function backgroundSoundPlay(){
  backgroundSound.src = './assets/mp3/background-sound.mp3';
  playBackgrounSound();
};

function playBackgrounSound() {
  backgroundSound.play();
};


// get item audio 

const getItemSound = new Audio();

function playGetItemSoundPlay(){
  getItemSound.src = './assets/mp3/get-item.mp3';
  playGetItemSound();
};

function playGetItemSound() {
  getItemSound.play();
};

const flyagaricSound = new Audio();

function playflyagaricSoundPlay(){
  flyagaricSound.src = './assets/mp3/flyagaric.mp3';
  playАlyagaricSound();
};

function playАlyagaricSound() {
  flyagaricSound.play();
};

const stoneSound = new Audio();

function playStoneSoundPlay(){
  stoneSound.src = './assets/mp3/stone.mp3';
  playStoneSound();
};

function playStoneSound() {
  stoneSound.play();
};

const jumpSound = new Audio();

function playJumpSoundPlay(){
  jumpSound.src = './assets/mp3/jump.mp3';
  playJumpSound();
};

function playJumpSound() {
  jumpSound.play();
};

const gameOverSound = new Audio();

function playGameOverSoundPlay(){
  gameOverSound.src = './assets/mp3/game-over.mp3';
  playGameOverSound();
};

function playGameOverSound() {
  gameOverSound.play();
};