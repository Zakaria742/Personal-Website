let x = (y = 0);
let isHolding = false;
let target;

const audio = document.getElementById("audio");
audio.volume = ".2";
const open_win = document.getElementById("open");
const close_win = document.getElementById("close");
const click = document.getElementById("click");

let error_audio = document.getElementById("S_err");
let about = document.getElementById("about");
let windows = document.getElementById("windows");
let cls = document.querySelectorAll(".close");

let inter;
let wtarget;
let count = 0;
document.addEventListener("mousemove", function (e) {
  x = e.clientX;
  y = e.clientY;
});
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
    console.log(a);

    inter = setInterval(() => {
      if (isHolding) {
        wtarget.parentElement.parentElement.style.left = `${x - cx + a.x}px`;
        wtarget.parentElement.parentElement.style.top = `${y - cy + a.y}px`;
      }
    }, 0);
  }
});

document.addEventListener("mouseup", () => {
  isHolding = false;
});

// Open window

document.addEventListener("dblclick", (e) => {
  let itarget = e.target.parentElement;
  if (itarget) {
    let div = document.createElement("div");
    audio.src = open_win.src;
    audio.type = open_win.type;
    switch (itarget.id) {
      case "about":
        audio.play();

        div.setAttribute("class", "window");
        div.style.left = `${window.innerWidth / 3}px`;
        div.style.top = `${window.innerHeight / 3}px`;

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
    <img src="static/assets/goku(pixel).png" id="proPic" alt="profile-pic" width="200px" height="150px">
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
        div.style.left = `${window.innerWidth / 3}px`;
        div.style.top = `${window.innerHeight / 3}px`;
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
        error_audio.play();
        div.setAttribute("class", "window");
        div.innerHTML = ` 
        <div class="window error" id="error">
                <div class="window-bar">
                    <div class="bar-title">
                        <img src="static/assets/error.ico" alt="">
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

//close window

document.addEventListener("click", (e) => {
  click.volume = "0.1";
  click.play();

  if (e.target.classList[1] == "close") {
    audio.src = close_win.src;
    audio.type = close_win.type;
    audio.play();

    windows.removeChild(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
  }
});

//about section
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
    <img src="static/assets/goku(pixel).png" id="proPic" alt="profile-pic" width="200px" height="150px">
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
