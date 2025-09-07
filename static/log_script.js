let lines = document.querySelectorAll(".lines");
let ascii_box = document.getElementById("img-container");
let login_title = document.getElementById("login-title");
let k = 0;

let interval;


let string = "abcdefghijklmnopqrstuvwxyz1234567890"
let strlen = string.length;
let gibberish = [];
let gibberish2 = [];

function sleep(ms){
	return new Promise( resolve => setTimeout(resolve, ms));
}
async function show_title(){
for(let i = 0; i < 25; i++){
	gibberish2[k] = string[i];
	await sleep(40);
	login_title.innerText = gibberish2.join("");
	if(gibberish2[k] == "login"[k]){
		k++;
		i = 0;
	}
	if(k == 5) {
		gibberish2 = [];
		break;
	}
}
}
show_title();

if(interval){
	clearInterval(interval);
}

interval = setInterval(() => {
lines.forEach( e => {
	let index = Math.floor(Math.random() * strlen);
	let k = 0;
	for (let i = index; i <= (ascii_box.clientWidth/20)*strlen; i++){
		index = Math.floor(Math.random() * strlen);
		gibberish[k] = string[index];
		k++;
	}
	e.innerText = gibberish.join("");
}
)}, 100)

let grid = document.getElementById("cell");

function gol(){
	console.log(grid.innerText);
	let cell = grid.innerText;
	switch(cell[10]){
		case 0:
			if(cell[11] == 1 && cell[9] == 1){
				cell[10] = "1"	
			}
			break;
		case 1:
			if(cell[11] == 1 && cell[9] == 1){
				cell[10] = "0"
			}
			break;
	}
	console.log(cell)
	sleep(1000);
	grid.innerText = cell;
}
gol();
