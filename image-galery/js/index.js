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
const itemClass = document.querySelector('.item');
let imgArr = [mainItem1, mainItem2, mainItem3, mainItem4, mainItem5, mainItem6, mainItem7, mainItem8, mainItem9, mainItem10, mainItem11, mainItem12];
let imgObj = {mainItem1: '',
                mainItem2:'', 
                mainItem3:'', 
                mainItem4:'', 
                mainItem5:'', 
                mainItem6:'', 
                mainItem7:'', 
                mainItem8:'', 
                mainItem9:'', 
                mainItem10:'', 
                mainItem11:'', 
                mainItem12:''};

                //let imgObj ={};


let count =0;


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
    headerSearch.classList.add('header-search-hidden');
    headerClose.classList.add('header-close-visible');
    setImg();
});
//console.log(inputVal);
let imgUrl = '';
let photoIndex = 0;
async function getLinkToImageFlickr(x) {
    
    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d30ebd21aae4bd52f018e7b4195d26b&tags=${inputVal}&extras=url_l&format=json&nojsoncallback=1`;
const resFlickr = await fetch(urlFlickr);
const dataFlickr = await resFlickr.json();
let backgroundImage = ``;
let imgFlr = document.createElement('img');
let bodyFlickr = document.querySelector('body');
//imgFlr.src = dataFlickr.photos.photo[getRandomNum(1, 20)].url_l;
imgFlr.src = dataFlickr.photos.photo[photoIndex].url_l;
x.style.backgroundImage = `url(${imgFlr.src})`;
imgUrl = `${imgFlr.src}`;
let numItem=1;
/*for (let y=0; y<=6; y++) {
    imgObj.x = imgUrl;
    photoIndex++;

}*/
//console.log(imgObj);
}

async function setImg() {
    //inputVal = headerInputIn.value;
    imgObj ={};
    for(let key in imgArr) {
        const awaitImg = await getLinkToImageFlickr(imgArr[key]);
        imgObj[key] = imgUrl;
        photoIndex++;
    }
}

mainItem1.addEventListener('click', (e)=>{
    if(imgArr[0].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[0]);
    }
});

mainItem2.addEventListener('click', (e)=>{
    if(imgArr[1].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[1]);
    }
});

mainItem3.addEventListener('click', (e)=>{
    if(imgArr[2].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[2]);
    }
});

mainItem4.addEventListener('click', (e)=>{
    if(imgArr[3].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[3]);
    }
});

mainItem5.addEventListener('click', (e)=>{
    if(imgArr[4].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[4]);
    }
});

mainItem6.addEventListener('click', (e)=>{
    if(imgArr[5].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[5]);
    }
});

mainItem7.addEventListener('click', (e)=>{
    if(imgArr[6].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[6]);
    }
});

mainItem8.addEventListener('click', (e)=>{
    if(imgArr[7].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[7]);
    }
});

mainItem9.addEventListener('click', (e)=>{
    if(imgArr[8].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[8]);
    }
});

mainItem10.addEventListener('click', (e)=>{
    if(imgArr[9].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[9]);
    }
});

mainItem11.addEventListener('click', (e)=>{
    if(imgArr[10].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[10]);
    }
});

mainItem12.addEventListener('click', (e)=>{
    if(imgArr[11].style.backgroundImage.url === ''){
    }else {
        window.open(imgObj[11]);
    }
});