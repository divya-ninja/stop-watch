
var timerMin = document.getElementById('minutes');
var timerSec = document.getElementById('seconds');
var timerTens = document.getElementById('tens');
var min = 0;
var sec = 0;
var ten = 0;
var isStop = true;
var interval;

// function to reset the timer
function resetTimer(){
    stopTimer();
    timerMin.innerHTML = "00";
    timerSec.innerHTML = "00";
    timerTens.innerHTML = "00";
    min = 0;
    sec = 0;
    ten = 0;
}

// function to start the timer
function startTimer(){
    if (isStop === true) {
        isStop = false;
    }
    interval = setInterval(timer, 10);
}

function timer() {
    
    ten = ten + 1;

    if (ten === 100) {
        sec = sec + 1;
        ten = 0;
    }
    if (sec === 60) {
        min = min + 1;
        sec = 0;
        ten = 0;
    }

    if (ten < 10 || ten === 0) {
        timerTens.innerHTML = "0" + ten;
    }else{
        timerTens.innerHTML = ten;
    }
    if (sec < 10 || sec === 0) {
        timerSec.innerHTML = "0" + sec;
    }else{
        timerSec.innerHTML = sec;
    }
    if (min < 10 || min === 0) {
        timerMin.innerHTML = "0" + min;
    }else{
        timerMin.innerHTML = min;
    }

}


// function to pause the timer
function stopTimer() {
    if (isStop === false) {
      isStop = true;
      clearInterval(interval);
    }
}


