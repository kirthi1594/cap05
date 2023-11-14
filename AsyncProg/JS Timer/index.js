let setTimer = document.querySelector('.setTimer')
let timer = document.querySelector('.timer')

let secondElem = document.querySelector('.second')
let minuteElem = document.querySelector('.minute')
let hourElem = document.querySelector('.hour')

let startBtn = document.querySelector('.btns :nth-child(1)')
let pauseBtn = document.querySelector('.btns :nth-child(2)')
let resetBtn = document.querySelector('.btns :nth-child(3)')
let timesUpElem = document.querySelector('.timesUp')

// Toggle between setTimer and timer
let isTimerPaused = true;

setTimer.addEventListener('click', () => {
    if (isTimerPaused) {
        startTimer()
        setTimer.style.color = 'white'
    } else {
        pauseTimer()
        setTimer.style.color = 'black'
    }
})

// Taking the input time from the user
let inpTime = '';
window.addEventListener('keyup', (event) => {
    if (event.key == 'Backspace') {
        inpTime = inpTime.slice(0, inpTime.length - 1)
        console.log(inpTime)
        fillTimer(inpTime);
    } else if(event.key == 'Enter' && isTimerPaused) {
        startTimer()
    } else if (inpTime.length < 6 && event.key.charCodeAt(0) >= 48 && event.key.charCodeAt(0) <= 57) {
        inpTime += event.key;
        console.log(inpTime)
        // console.log(event.key.charCodeAt(0))
        fillTimer(inpTime);
    }
})

// Distributing the inpTime in hours, minutes, and seconds
function fillTimer(time) {
    if (time.length == 6) {
        hourElem.innerHTML = time.substring(0, 2)
        minuteElem.innerHTML = time.substring(2, 4)
        secondElem.innerHTML = time.substring(4, 6)
    } else if (time.length == 5) {
        hourElem.innerHTML = `0${time.substring(0, 1)}`
        minuteElem.innerHTML = time.substring(1, 3)
        secondElem.innerHTML = time.substring(3, 5)
    } else if (time.length == 4) {
        hourElem.innerHTML = '00'
        minuteElem.innerHTML = time.substring(0, 2)
        secondElem.innerHTML = time.substring(2, 4)
    } else if (time.length == 3) {
        minuteElem.innerHTML = `0${time.substring(0, 1)}`
        secondElem.innerHTML = time.substring(1, 3)
    } else if (time.length == 2) {
        minuteElem.innerHTML = '00'
        secondElem.innerHTML = time.substring(0, 2)
    } else if (time.length == 1) {
        secondElem.innerHTML = `0${time.substring(0, 1)}`
    } else if (time.length == 0) {
        secondElem.innerHTML = `00`
    }
}

// Starting the timer
let timerId;
function startTimer() {
    console.log('Timer started');
    setTimer.style.color = 'white'
    isTimerPaused = false;
    clearInterval(timerId);
    let hour, minute, second;
    // upper limit
    Number(hourElem.innerHTML)>59? hour = 59: hour = Number(hourElem.innerHTML)
    Number(minuteElem.innerHTML)>59? minute = 59: minute = Number(minuteElem.innerHTML)
    Number(secondElem.innerHTML)>59? second = 59: second = Number(secondElem.innerHTML)
    // console.log(hour, minute, second);

    timerId = setInterval(() => {
        second--

        // lower limit
        if(hour == `00` && minute == `00` && second == `00`) {
            clearInterval(timerId);
            console.log("Time's up!");
            timesUpElem.innerHTML = "Time's up!"
        }
        // if(hour<10) hour = `0${hour}`
        // if(minute<10) minute = `0${minute}`
        // if(second<10) second = `0${second}`

        if(second==`0${-1}`) {
            second = 59;
        }



        inpTime = `${hour}${minute}${second}`
        console.log(hour, minute, second, inpTime);
        fillTimer(inpTime)
    }, 1000);
}

//  Pausing the timer
function pauseTimer() {
    console.log('Timer puased');
    setTimer.style.color = 'black'
    isTimerPaused = true;
    clearInterval(timerId);
}

// Reset the timer
function resetTimer() {
    console.log('Timer reset');
    inpTime = `000000`;
    timesUpElem.innerHTML = '';
    fillTimer(inpTime);
}


// EventListeners to the buttons
startBtn.addEventListener('click', () => {
    startTimer(inpTime)
})
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', ()=>{
    pauseTimer()
    resetTimer()
})