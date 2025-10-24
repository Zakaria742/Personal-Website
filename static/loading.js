
let load = document.getElementById("loading");
let welcome = document.getElementById("welcome");
let w_sound = new Audio("static/assets/audio/Pickup1.wav");
w_sound.volume = 0.2;
let l = 0;

if(sessionStorage.getItem("wShown")){
	sessionStorage.setItem("wShown", false);
}

wShown = sessionStorage.getItem("wShown");

let loadingInterval;
if(loadingInterval){
	        clearInterval(loadingInterval);
}
loadingInterval= setInterval( () => {
	        load.children[0].innerText = "|/-\\"[l%4];
	        l++;
}, 100)

window.addEventListener('load', () => {
		load.children[0].innerText = "Good to go!";
		clearInterval(loadingInterval);
		load.style.animation =  "fade 2s ease-in forwards alternate";
		setTimeout(() => {
			load.style.display = "none";
			setTimeout( () => {
			if(welcome != null && !wShown){
				sessionStorage.setItem("wShown", true);
				w_sound.play();
				welcome.style.display = "flex";
				setTimeout(() => {
					welcome.style.display = "none";
				}, 3000)
			}
			}, 200)
		}, 2000);
})
