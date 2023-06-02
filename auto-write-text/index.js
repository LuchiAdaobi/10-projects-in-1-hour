const container = document.getElementById("container");
const btn = document.getElementById("btn");

const text = "Coding days are the best days!";
let index = 0;
let intervalId = null

function writeText() {
  const para = document.createElement("p");
  para.innerText = text.slice(0, index);
  index++;
  container.innerHTML = "";
  container.appendChild(para);
  if (index > text.length - 1) {
    index = 0;
  }
}
function togglePlayPause(){
    if (btn.innerText === "Play") {
      btn.innerText = "Pause";
      intervalId = setInterval(writeText, 200)
    } else {
      btn.innerText = "Play";
      clearInterval(intervalId)
    }
}

btn.addEventListener('click', togglePlayPause)
intervalId = setInterval(writeText, 200)