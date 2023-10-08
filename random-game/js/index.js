let arr, arr_events = [], win_block, winner, again, winning, game;

let comp_sym = "0";
let user_sym = "x";
let resultsTable = document.querySelector('.results-table');

onload = function(){
	game = document.getElementById("game");
	arr = game.getElementsByClassName("cell");
	win_block = document.getElementById("win_block");
	winText = document.querySelector('.win-text');
	again = win_block.getElementsByClassName("again")[0];
	winning = game.getElementsByClassName("winning")[0];



	again.onclick = function(){
		winning.style.display = "none";
		win_block.style.display = "none";
		clearTable();
		ranMove();
	};

	for(let i = 0; i < arr.length; i++){
		arr[i].onclick = function(){
			drawSym(this);
		};
	}
	ranMove();

};

function ranMove(){
	let rnd = getRandomInt(2);
	console.log(rnd);
	if (rnd == 1) {
		autoDraw();
	}
	return true;
}

let countLs = 1;
function drawSym(item, sym = user_sym){
  const timeLocal = new Date();
    const currentTime = timeLocal.toLocaleTimeString();
	if (item.hasChildNodes()) return false;
	item.innerHTML = sym;
	
	let winner = checkWinner();

	if (sym == user_sym && !winner)
		autoDraw();


	if ((winner == user_sym) && (countLs<10)) {
		winText.innerHTML = "You Win!";
		winText.style.color = "green";
    localStorage.setItem(countLs, `You Win! (${currentTime})`);
    lSitems();
    countLs++;
	}
  if ((winner == user_sym) && (countLs===10)) {
		winText.innerHTML = "You Win!";
		winText.style.color = "green";
    localStorage.setItem(countLs, `You Win! (${currentTime})`);
    countLs=1;
    lSitems();
  }else if (winner == comp_sym) {
		winText.innerHTML = "Win CPU!";
		winText.style.color = "red";
    localStorage.setItem(countLs, `Win CPU! (${currentTime})`);
    countLs++;
    lSitems();
	}
	if (winner) {
		winning.style.display = "block";
		win_block.style.display = "block";
	}
	return true;
}

function checkWinner(){
	let winner = "";
	let j = 0;


	let xy_1_1 = arr[0].innerHTML;
	let xy_1_2 = arr[4].innerHTML;
	let xy_1_3 = arr[8].innerHTML;

	let xy_2_1 = arr[2].innerHTML;
	let xy_2_2 = arr[4].innerHTML;
	let xy_2_3 = arr[6].innerHTML;

	if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {

		if (xy_1_1 == user_sym && xy_1_2 == user_sym && xy_1_3 == user_sym) {
			winner = user_sym;
		}
		else if(xy_1_1 == comp_sym && xy_1_2 == comp_sym && xy_1_3 == comp_sym){
			winner = comp_sym;
		}


		if (xy_2_1 == user_sym && xy_2_2 == user_sym && xy_2_3 == user_sym) {
			winner = user_sym;
		}
		else if(xy_2_1 == comp_sym && xy_2_2 == comp_sym && xy_2_3 == comp_sym){
			winner = comp_sym;
		}
	}

	if (!winner){
		for(let i = 0; i < 3; i++){


			let a1 = arr[i].innerHTML;
			let a2 = arr[i + 3].innerHTML;
			let a3 = arr[i + 6].innerHTML;

			let b1 = arr[i].innerHTML;
			let b2 = arr[i + 1].innerHTML;
			let b3 = arr[i + 2].innerHTML;

			if (a1 == user_sym && a2 == user_sym && a3 == user_sym) {
				winner = user_sym;
				break;
			}
			else if(a1 == comp_sym && a2 == comp_sym && a3 == comp_sym){
				winner = comp_sym;
				break;
			}


			if (i != 0) j = 3*i;

			b1 = arr[j].innerHTML;
			b2 = arr[j + 1].innerHTML;
			b3 = arr[j + 2].innerHTML;

			if (b1 == user_sym && b2 == user_sym && b3 == user_sym) {
				winner = user_sym;
				break;
			}
			else if(b1 == comp_sym && b2 == comp_sym && b3 == comp_sym){
				winner = comp_sym;
				break;
			}
			if (winner) 
				break;
		}
	}

	return winner;
}

function autoDraw(){

	if (!ckeckFreeSpace()) {
		
		winText.innerHTML = "Draw! ";
		winText.style.color = "blue";
		winning.style.display = "block";
		win_block.style.display = "block";
    localStorage.setItem(countLs, `Draw! (${currentTime})`);
    countLs++;
    lSitems();

		return false;
	}
	let el, rnd;

	do{
		rnd = getRandomInt(arr.length);
		el = arr[rnd];
	}while(!drawSym(el, comp_sym));

	if (!ckeckFreeSpace()) {
		autoDraw();
	}
}

function clearTable(){
	for(let i = 0; i < arr.length; i++){
		arr[i].innerHTML =  "";
	}
}

function ckeckFreeSpace(){
	let result = false;

	for(let i = 0; i < arr.length; i++){
		if (arr[i].hasChildNodes()){
			result = false;
		}else{
			result = true;
			break;
		}
	}

	return result;
}

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

function addHandler(el, ev, func ){
	try{
		el.addEventListener(ev, func, false);
	}
	catch(e){
		el.attachEvent("on"+ev, func);
	}
}

function removerEvent(el, ev, func){
	try{
		el.removeEventListener(ev, func, false);

	}catch(x){
		el.detachEvent("on"+ev, func);
		
	}
}

let resultTableCount = 1;
function lSitems() {
  for(let x=1; x<=10; x++){
    if (localStorage.getItem(x)) {
      const listItem = document.createElement('div');
      listItem.classList.add('list-item');
      listItem.innerHTML = x+'.'+ ' ' + localStorage.getItem(x);
          resultsTable.appendChild(listItem);
          resultTableCount++;
      }
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
