let load = document.getElementById("loading");
let welcome = document.getElementById("welcome");
let l = 0;

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
			if(welcome != null){

				welcome.style.display = "flex";
				setTimeout(() => {
					welcome.style.display = "none";
				}, 3000)
			}
			}, 500)
		}, 2000);
})
