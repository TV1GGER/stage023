import playList from './play-list.js'

const play = document.querySelector('.play');
const playPrev = document.querySelector('.previous');
const playNext = document.querySelector('.next');
const artist = document.querySelector('.singer');
const songTitle = document.querySelector('.song-title');
const songImg = document.querySelector('.song-img');
const backgroundWrapper = document.querySelector('.wrapper');
const playBtn = document.querySelector('.play-btn path');
const dropdownPlayListItem = document.querySelector('.dropdown-play-list-item');
let playNum = 5;




//плейлист бургер
const dropdownPlayListContent = document.querySelector('.dropdown-play-list-content');
const playListBtn = document.querySelector('.play-list-btn');

const playListCloseBtn = document.querySelector('.play-list-close-btn');
const dropdownPlayListWrapper = document.querySelector('.dropdown-play-list-wrapper');
const dropdownPlayListWrapperOutside = document.querySelector('.dropdown-play-list-wrapper-outside');
const track = new Audio();

function playSound() {
  track.play();
}

let playListBtnCount = 1;
let liCount = 1;
    const li0 = document.createElement('li');
    li0.classList.add(`dropdown-play-list-item`);
    li0.setAttribute('id',`list-item0`);
    li0.textContent = liCount + '. ' + playList[0].singer + ' - ' + playList[0].title;
    liCount++;
    dropdownPlayListContent.appendChild(li0);
    const li1 = document.createElement('li');
    li1.classList.add(`dropdown-play-list-item`);
    li1.setAttribute('id',`list-item1`);
    li1.textContent = liCount + '. ' + playList[1].singer + ' - ' + playList[1].title;
    liCount++;
    dropdownPlayListContent.appendChild(li1);
    const li2 = document.createElement('li');
    li2.classList.add(`dropdown-play-list-item`);
    li2.setAttribute('id',`list-item2`);
    li2.textContent = liCount + '. ' + playList[2].singer + ' - ' + playList[2].title;
    liCount++;
    dropdownPlayListContent.appendChild(li2);
    const li3 = document.createElement('li');
    li3.classList.add(`dropdown-play-list-item`);
    li3.setAttribute('id',`list-item3`);
    li3.textContent = liCount + '. ' + playList[3].singer + ' - ' + playList[3].title;
    liCount++;
    dropdownPlayListContent.appendChild(li3);
    const li4 = document.createElement('li');
    li4.classList.add(`dropdown-play-list-item`);
    li4.setAttribute('id',`list-item4`);
    li4.textContent = liCount + '. ' + playList[4].singer + ' - ' + playList[4].title;
    liCount++;
    dropdownPlayListContent.appendChild(li4);
    const li5 = document.createElement('li');
    li5.classList.add(`dropdown-play-list-item`);
    li5.setAttribute('id',`list-item5`);
    li5.textContent = liCount + '. ' + playList[5].singer + ' - ' + playList[5].title;
    liCount++;
    dropdownPlayListContent.appendChild(li5);
    const li6 = document.createElement('li');
    li6.classList.add(`dropdown-play-list-item`);
    li6.setAttribute('id',`list-item6`);
    li6.textContent = liCount + '. ' + playList[6].singer + ' - ' + playList[6].title;
    liCount++;
    dropdownPlayListContent.appendChild(li6);
    

let list0 = document.getElementById('list-item0');
list0.addEventListener('click', () => {
    playNum = 0;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })
  
    let list1 = document.getElementById('list-item1');
list1.addEventListener('click', () => {
    playNum = 1;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })

    let list2 = document.getElementById('list-item2');
list2.addEventListener('click', () => {
    playNum = 2;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })

    let list3 = document.getElementById('list-item3');
list3.addEventListener('click', () => {
    playNum = 3;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })

    let list4 = document.getElementById('list-item4');
list4.addEventListener('click', () => {
    playNum = 4;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })

    let list5 = document.getElementById('list-item5');
list5.addEventListener('click', () => {
    playNum = 5;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })

    let list6 = document.getElementById('list-item6');
list6.addEventListener('click', () => {
    playNum = 6;
    track.src = playList[playNum].src;
    playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
    })



playListBtn.addEventListener('click', () => {
  if(playListBtnCount%2===1) {
    dropdownPlayListContent.classList.add('dropdown-play-list-content-active');
    dropdownPlayListWrapper.classList.add('dropdown-play-list-wrapper-active');
    dropdownPlayListWrapperOutside.classList.add('dropdown-play-list-wrapper-outside-active');
    playListBtnCount++;
  }else if(playListBtnCount%2===0) {
    dropdownPlayListContent.classList.remove('dropdown-play-list-content-active');
    dropdownPlayListWrapper.classList.remove('dropdown-play-list-wrapper-active');
    dropdownPlayListWrapperOutside.classList.remove('dropdown-play-list-wrapper-outside-active');
  }
});

playListCloseBtn.addEventListener('click', () => {
    dropdownPlayListContent.classList.remove('dropdown-play-list-content-active');
    dropdownPlayListWrapper.classList.remove('dropdown-play-list-wrapper-active');
    dropdownPlayListWrapperOutside.classList.remove('dropdown-play-list-wrapper-outside-active');
});

dropdownPlayListWrapper.addEventListener('click', () => {
    dropdownPlayListContent.classList.remove('dropdown-play-list-content-active');
    dropdownPlayListWrapper.classList.remove('dropdown-play-list-wrapper-active');
    dropdownPlayListWrapperOutside.classList.remove('dropdown-play-list-wrapper-outside-active');
    playListBtnCount++;
})

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
      playSound();
      playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
     }
};

// следующий трек
function playNextAudio() {
  if(playNum<playList.length-1){
    playNum++;
  }else if(playNum===playList.length-1){
    playNum=0;
  }
  track.src = playList[playNum].src;
  playSound();
  playBtn.setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
  artist.textContent = playList[playNum].singer;
  songTitle.textContent = playList[playNum].title;
  backgroundWrapper.style.background = `url(${playList[playNum].img}), no-repeat`;
  backgroundWrapper.style.backgroundPosition = `center`;
  backgroundWrapper.style.backgroundSize = `cover`;
  songImg.style.background = `url(${playList[playNum].img}), no-repeat`;
  songImg.style.backgroundSize = `cover`;
};
//предидущий трек
function playPrevAudio() {
  if((playNum<=playList.length-1) && (playNum!=0)){
    playNum--;
  } else if(playNum===0){
    playNum=playList.length-1;
  }
  track.src = playList[playNum].src;
  playSound();
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
  playSound();
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