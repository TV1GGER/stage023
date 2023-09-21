import playList from './play-list.js'

const play = document.querySelector('.play');
const playPrev = document.querySelector('.previous');
const playNext = document.querySelector('.next');
/*const playItem = document.querySelector('.play-list');*/
/*const ulLi = document.getElementsByTagName('li');*/
const artistTitl = document.querySelector('.song-name');
const songImg = document.querySelector('.song-img');
const backgroundWrapper = document.querySelector('.wrapper');

let playNum = 0;
let isPlay = false;
const audio = new Audio();

// плей/пауза трека
function playPauseAudio() {
  audio.src = playList[playNum].src;

  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;

  artistTitl.textContent = playList[playNum].title;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
  

  if(isPlay===false){
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    
  }else if(isPlay===true){
    audio.pause();
    isPlay = false;
    play.classList.remove('pause');
  };
for(let z=0; z<ulLi.length; z++){
  if(z===playNum){
  ulLi[playNum].classList.add('item-active');
  artistTitl.textContent = playList[playNum].title;
}else if(z!=playNum){
  ulLi[z].classList.remove('item-active');
}
}
};
// следующий трек
function playNextAudio() {
  if(playNum<playList.length-1){
    playNum++;
    isPlay=false;
  }else if(playNum===playList.length-1){
    playNum=0;
    isPlay=false;
  }
  playPauseAudio();
};
//предидущий трек
function playPrevAudio() {
  if((playNum<=playList.length-1) && (playNum!=0)){
    playNum--;
    isPlay=false;
  } else if(playNum===0){
    playNum=playList.length-1;
    isPlay=false;
  }
  playPauseAudio();
};

audio.addEventListener('ended', playNextAudio);
play.addEventListener('click', playPauseAudio);

playPrev.addEventListener('click', playPrevAudio);
playNext.addEventListener('click', playNextAudio);





//слайдер громкости
const slider = document.getElementById('volumeSlider');
function setVolume(){
audio.volume = slider.value;
}
slider.addEventListener('change', setVolume);

//слайдер прогрессбар
const setProgressSlider = document.getElementById('progressSlider');
function progressSlider() {
    const x = document.getElementById('progressSlider');
    x.min = 0;
    x.max = audio.duration;
    x.step = audio.duration / 100;
    audio.currentTime = x.value;
    
  }
  setProgressSlider.addEventListener('change', progressSlider);
  audio.addEventListener('loadeddata', setInterval);
  function setInterval() {
    const progressBar = document.getElementById('progressSlider');
    const ProgressBarTime = document.querySelector('.song-time');
    progressBar.value = audio.currentTime / audio.duration * 100;
    ProgressBarTime.textContent = getTimeCodeFromNum(audio.currentTime)+"/"+getTimeCodeFromNum(audio.duration);
    setTimeout(setInterval, 1000);
    getTimeCodeFromNum(audio.currentTime);
    getTimeCodeFromNum(audio.duration);
};

 

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0){
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }else {return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`;
    }
  };
  // выключение звука(mute)
  /*let countSound = 0;
  const muteSound = document.querySelector('.volume-icon');
  function soundBtn(){
    
    if(countSound%2===1){
        muteSound.classList.remove('volume-active');
        audio.muted = false;
        countSound++;
    }else if((countSound%2===0) || (countSound===0) ){
        muteSound.classList.add('volume-active');
        audio.muted = true;
        countSound++;
    }
  }
 
  muteSound.addEventListener('click', soundBtn);
*/