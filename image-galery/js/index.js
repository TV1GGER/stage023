const mainItem1 = document.querySelector('.main-item1');
const mainItem2 = document.querySelector('.main-item2');
const mainItem3 = document.querySelector('.main-item3');
const mainItem4 = document.querySelector('.main-item4');
const mainItem5 = document.querySelector('.main-item5');
const mainItem6 = document.querySelector('.main-item6');
const mainItem7 = document.querySelector('.main-item7');
const mainItem8 = document.querySelector('.main-item8');
const mainItem9 = document.querySelector('.main-item9');
const mainItem10 = document.querySelector('.main-item10');
const mainItem11 = document.querySelector('.main-item11');
const mainItem12 = document.querySelector('.main-item12');
const headerInputIn = document.querySelector('.header-input-in');
const mainContainer = document.querySelector('.main-container');
const headerSearch = document.querySelector('.header-search');
const headerClose = document.querySelector('.header-close');
const bodySelector = document.querySelector('body');
const headerCloseSvg = document.querySelector('header-close-svg');
let imgArr = [mainItem1, mainItem2, mainItem3, mainItem4, mainItem5, mainItem6, mainItem7, mainItem8, mainItem9, mainItem10, mainItem11, mainItem12];


let count =0;
function getRandomNum(min, max) {
    const minM = Math.ceil(min);
    const maxM = Math.floor(max);
    return Math.floor(Math.random() * (maxM - minM + 1)) + minM;
    
};


getRandomNum(0, 25);

headerClose.addEventListener('click', ()=> {
    headerInputIn.value = '';
    headerInputIn.placeholder = 'Search...';
    headerSearch.classList.remove('header-search-hidden');
    headerClose.classList.remove('header-close-visible');
});

let inputVal = '';

window.addEventListener('load', ()=> {
    inputVal = 'spring';
    setImg();
    mainContainer.classList.add('main-container-active');
})

headerInputIn.addEventListener('change', ()=>{
    mainContainer.classList.add('main-container-active');
    inputVal = headerInputIn.value;
    setImg();
    headerSearch.classList.add('header-search-hidden');
    headerClose.classList.add('header-close-visible');
});


async function getLinkToImageFlickr(x) {
    
    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d30ebd21aae4bd52f018e7b4195d26b&tags=${inputVal}&extras=url_l&format=json&nojsoncallback=1`;
const resFlickr = await fetch(urlFlickr);
const dataFlickr = await resFlickr.json();
let backgroundImage = ``;
let imgFlr = document.createElement('img');
let bodyFlickr = document.querySelector('body');
imgFlr.src = dataFlickr.photos.photo[getRandomNum(1, 20)].url_l;
x.style.backgroundImage = `url(${imgFlr.src})`;
}

async function setImg() {
    for(let key in imgArr) {
        const awaitImg = await getLinkToImageFlickr(imgArr[key]);
    }
}


