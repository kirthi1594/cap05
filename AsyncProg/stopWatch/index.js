let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hr = document.getElementById("hr");

let currentTimeinSec = 0;
let currentTimeinMin = 0;
let currentTimeinHr = 0;
let intervalId
function startStopwatch() {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    currentTimeinSec++;
    console.log(currentTimeinSec);
    if ((currentTimeinSec == 60)) {
      currentTimeinSec = 0
      currentTimeinMin++;
      min.innerText = currentTimeinMin;
      console.log(currentTimeinMin);
    }
    if ((currentTimeinMin == 60)) {
      currentTimeinHr++;
      currentTimeinMin = 0
      hr.innerText = currentTimeinHr;
      console.log(currentTimeinHr);
    }

    sec.innerText = currentTimeinSec;
   
    }, 1000);
  console.log("start");
}
startBtn.addEventListener("click", startStopwatch);

function pauseStopwatch() {
  clearInterval(intervalId)
  console.log("pause");
}
pauseBtn.addEventListener("click", pauseStopwatch);

function resetStopwatch() {
  clearInterval(intervalId)
  sec.innerText="00"
  min.innerText=""
  hr.innerText=""
  console.log("reset");
}
resetBtn.addEventListener("click", resetStopwatch);
