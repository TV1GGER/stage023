import playList from './play-list.js'

const play = document.querySelector('.play');
const playPrev = document.querySelector('.previous');
const playNext = document.querySelector('.next');
const artist = document.querySelector('.singer');
const songTitle = document.querySelector('.song-title');
const songImg = document.querySelector('.song-img');
const backgroundWrapper = document.querySelector('.wrapper');
const playBtn = document.querySelector('.play-btn path');


let playNum = 0;
let isPlay = false;
const track = new Audio();
track.src = playList[playNum].src;
backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
backgroundWrapper.style.backgroundPosition = `center`;
backgroundWrapper.style.backgroundSize = `cover`;
artist.textContent = playList[playNum].singer;
songTitle.textContent = playList[playNum].title;
songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
songImg.style.backgroundSize = `cover`;

// плей/пауза трека
function playPauseAudio() {
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;

  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
  
    if (track.paused == false) {
      track.pause();
      playBtn.setAttribute('d', 'M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z');
     } else {
      track.play();
      playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
     }
  /*if(isPlay===false){
    audio.play();
    isPlay = true;
    playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
    
  }else if(isPlay===true){
    audio.pause();
    isPlay = false;
    playBtn.setAttribute('d', 'M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z');
  };*/
};

// следующий трек
function playNextAudio() {
  if(playNum<playList.length-1){
    playNum++;
    /*isPlay=false;*/
   /* track.pause();*/
  }else if(playNum===playList.length-1){
    playNum=0;
    /*isPlay=false;*/
    /*track.pause();*/
  }
  track.src = playList[playNum].src;
  track.play();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
  /*playPauseAudio();*/
};
//предидущий трек
function playPrevAudio() {
  if((playNum<=playList.length-1) && (playNum!=0)){
    playNum--;
    /*track.pause();*/
    /*isPlay=false;*/
  } else if(playNum===0){
    playNum=playList.length-1;
    /*isPlay=false;*/
    /*track.pause();*/
  }
  track.src = playList[playNum].src;
  track.play();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
};

track.addEventListener('ended', playNextAudio);
play.addEventListener('click', playPauseAudio);

playPrev.addEventListener('click', playPrevAudio);
playNext.addEventListener('click', playNextAudio);


//слайдер громкости
const slider = document.getElementById('volumeSlider');
track.volume = 0.1;
slider.value = 0.1;
function setVolume(){
track.volume = slider.value;
}
slider.addEventListener('change', setVolume);

//слайдер прогрессбар
const setProgressSlider = document.getElementById('progressSlider');
const ProgressBarTime = document.querySelector('.song-time');
track.onloadedmetadata = function() {
  setProgressSlider.max = track.duration;
  setProgressSlider.value = track.currentTime;
};



if(track.play()) {
setInterval(() => {
  setProgressSlider.value = track.currentTime;
  ProgressBarTime.textContent = getTimeCodeFromNum(track.currentTime)+"/"+getTimeCodeFromNum(track.duration)/*playList[playNum].duration*/;
}, 500);
}
setProgressSlider.onchange = function() {
  track.play();
  track.currentTime = setProgressSlider.value;
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
}

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
  let countSound = 0;
  const muteSound = document.querySelector('.volume-icon path');
  const volumeIcon = document.querySelector('.volume-icon');
  function soundBtn(){
    
    if(countSound%2===1){
      muteSound.setAttribute('d', 'M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z');
        track.muted = false;
        countSound++;
    }else if((countSound%2===0) || (countSound===0) ){
        muteSound.setAttribute('d', 'm616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z');
        track.muted = true;
        countSound++;
    }
  }
 
  volumeIcon.addEventListener('click', soundBtn);