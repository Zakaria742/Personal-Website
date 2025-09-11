async function fetchAds(){
	try{
		const ads = await fetch("./static/ads.json");
		const res = ads.json();
		return res;
	}catch(error){
		console.log(`Error: ${error}`);
	}

}

let x = 0;
let y = 0;
let isHolding = false;
let target;

const audio = document.getElementById("audio");
let about = document.getElementById("about");
let windows = document.getElementById("windows");

let icons = document.querySelectorAll(".icon");
icons.forEach( e=>{
	e.addEventListener("mouseenter", () => {
		audio.volume = 0.2;
		audio.src = audio.children[4].src;
		audio.type = audio.children[4].type;
		audio.play();
	})
})
//Interval variable
let inter;
//Type of target we're holding
let wtarget;
//count for the layer index (z-index)
let count = 0;

//Screen revealer

//Getting mouse position
document.addEventListener("mousemove", function (e) {
  x = e.clientX;
  y = e.clientY;
});

//Checking for if the mouse is down
document.addEventListener("mousedown", (e) => {
  wtarget = e.target;
  if (wtarget.classList[0] == "window-bar") {
    wtarget.parentElement.parentElement.style.zIndex = `${count++}`;
    isHolding = true;
    if (inter) {
      clearInterval(inter);
    }
    let a = wtarget.getBoundingClientRect();
    let cx = x;
    let cy = y;

    inter = setInterval(() => {
      if (isHolding) {
        wtarget.parentElement.parentElement.style.left = `${x - cx + a.x}px`;
        wtarget.parentElement.parentElement.style.top = `${y - cy + a.y}px`;
      }
    }, 0);
  }
});

//Letting go of the window in case of letting the mouse
document.addEventListener("mouseup", () => {
  isHolding = false;
});

// Opening the window
document.addEventListener("dblclick", (e) => {
	let itarget = e.target.parentElement;
	if (itarget) {
		audio.volume = 0.5;
		let div = document.createElement("div");
		div.style.left = `${Math.random()*window.innerWidth/2}px`;
		div.style.top = `${Math.random()*window.innerHeight/2}px`;
		audio.src = audio.children[0].src;
		audio.type = audio.children[0].type;
		switch (itarget.id) {
			case "about":
				audio.play();

				div.setAttribute("class", "window");

				div.innerHTML = ` 
	<div class="window about">
      <div class="window-bar">
	<div class="bar-title">
	<img src="/static/assets/system.ico" />
	<p>System Properties</p>
	</div>
	<div>
	<div class="elements close" draggable="false">X</div>
	</div>
      </div>
      <ul id="top-bar">
	  <li id="me">Me</li>
	  <li id="links">Links</li>
	</ul>
      <div id="content">
    <img src="/static/assets/smoking.png" id="proPic" alt="profile-pic" width="200px" height="150px">
	<div>
	<h1>Hello!</h1>
	<h3>System :</h3>
	 <p>Name : Portfolio</p>
	 <p>Owner : Zakaria Zaki</p>
	 <br/>
	 <h3>Tasks : </h3>
	 <p>playing games (current running time: not much)</p>
	 <p>Programming & coding (current running time : too much for my mental health)</p>
	 <br/>
	<h3>Services : </h3>
	<p>Python.Flask [|||||     ]</p>
	<p>JavaScript   [||||||    ]</p>
	<p>SQL [||||||||| ]</p>
	<p>C            [||||||||| ]</p>
	<p>C++          [|||||||   ]</p>
	 </div>
	</div>
      </div>
    </div>

	`;

				windows.appendChild(div);
				break;
			case "contact":
				audio.play();
				div.setAttribute("class", "window");
				div.innerHTML = ` 
	<div class="window contact">
		<div class="window-bar">
		<div class="bar-title">
		    <img src="/static/assets/contact.ico" />
		    <p>Contact me</p>
		</div>
		    <div>
			<div class="elements close" draggable="false">X</div>
		    </div>
		</div>
		<div id="contact-content">
		    <form id="form" action="">
			<input type="text" name="name" placeholder="name">
			<input type="email" name="email" placeholder="email@example.com">
			<textarea name="opinion" placeholder="content"></textarea>
			<input onclick="send()" type="button" value="send">
		    </form>

		</div>
	    </div>

	`;

				windows.appendChild(div);
				break;
			case "projects":
				audio.src = audio.children[3].src;
				audio.type = audio.children[3].type;
				audio.play();
				div.setAttribute("class", "window");
				div.innerHTML = ` 
	<div class="window error" id="error">
		<div class="window-bar">
		    <div class="bar-title">
			<img src="/static/assets/error.ico" alt="">
			<p>Access Denied</p>
		    </div>
		    <div>
			<div class="elements close" draggable="false">X</div>
		    </div>
		</div>
		<div id="error-content">
		    <p>This part is still under construction :)
			</p>
		</div>
	    </div>

	`;

				windows.appendChild(div);
				break;
		}
	}
});

//closing window
document.addEventListener("click", (e) => {
  audio.src = audio.children[2].src;
  audio.type = audio.children[2].type;
  audio.play();
  //audio for closing the window
  if (e.target.classList[1] == "close") {
    audio.src = audio.children[1].src;
    audio.type = audio.children[1].type;
    audio.play();

    windows.removeChild(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
  }
});

//The about window sections (ME-LINKS)
document.addEventListener("mousedown", (e) => {
  if (wtarget.id == "me") {
    wtarget.style.border = "solid 2px black";
    wtarget.style.backgroundColor = "rgb(192, 192, 192)";
    wtarget.style.borderBottom = "solid 2px white";
    wtarget.nextElementSibling.style.backgroundColor = "rgb(192, 192, 192)";
    wtarget.nextElementSibling.style.border = "solid 2px white";
    wtarget.nextElementSibling.style.borderBottom = "solid 2px black";
    wtarget.parentElement.nextElementSibling.style.alignSelf = "flex-end";

    wtarget.parentElement.nextElementSibling.innerHTML = `
    <img src="/static/assets/smoking.png" id="proPic" alt="profile-pic" width="200px" height="150px">
    <div>
        <h1>Hello!</h1>
        <h3>System :</h3>
        <p>Name : Portfolio</p>
        <p>Owner : Zakaria Zaki</p>
        <br/>
        <h3>Tasks : </h3>
        <p>playing games (current running time: not much)</p>
        <p>Programming & coding (current running time : too much for my mental health)</p>
        <br/>
        <h3>Services : </h3>
        <p>Python.Flask [|||||     ]</p>
        <p>JavaScript   [||||||    ]</p>
        <p>SQL [||||||||| ]</p>
        <p>C            [||||||||  ]</p>
        <p>C++          [|||||||   ]</p>

         </div>`;
  } else if (wtarget.id == "links") {
    wtarget.style.border = "solid 2px black";
    wtarget.style.backgroundColor = "rgb(192, 192, 192)";
    wtarget.style.borderBottom = "solid 2px white";
    wtarget.previousElementSibling.style.backgroundColor = "rgb(192, 192, 192)";
    wtarget.previousElementSibling.style.border = "solid 2px white";
    wtarget.previousElementSibling.style.borderBottom = "solid 2px black";
    wtarget.parentElement.nextElementSibling.style.alignSelf = "flex-start";
    wtarget.parentElement.nextElementSibling.innerHTML = `
        <ul>
           <li>
             Github:
             <a href="https://github.com/Zakaria742" target="_blank">https://github.com/Zakaria742</a>
           </li>
           <li>
             Linkdin:
             <a href="www.linkedin.com/in/zakaria-zaki-7845652a8" target="_blank">www.linkedin.com/in/zakaria-zaki-7845652a8</a>
           </li>
         </ul>`;
  }
});

//Random ads
let ad_text;
fetchAds().then( async response => {
	let ads = await Object.values(response);
	ad_text = ads[parseInt(Math.random()*2)];
});
const seconds = 200000;
let adsInterval = setInterval(() => {
	fetchAds().then( async response => {
		let ads = await Object.values(response);
		let length = ads.length;
		ad_text = ads[parseInt(Math.random()*length)];
	});
	const ad_window = document.createElement("div");
	ad_window.setAttribute("class", "window");
	ad_window.innerHTML = ` 
       <div class="window ad" id="ad">
		<div class="window-bar">
		    <div class="bar-title">
			<p>Fun Fact!</p>
		    </div>
		    <div>
			<div class="elements close" draggable="false">X</div>
		    </div>
		</div>
		<div id="ad-content">
			<p>${ad_text}</p>
		</div>
	    </div>`;
	ad_window.style.left = `${Math.random()*window.innerWidth/2}px`;
	ad_window.style.top = `${Math.random()*window.innerHeight/2}px`;
	windows.appendChild(ad_window);
	audio.src = audio.children[0].src;
	audio.type = audio.children[0].type;
	audio.play();
}, seconds * Math.pow(10, 3));
