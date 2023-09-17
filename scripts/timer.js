//initialisation of status button
const buttonWork = document.querySelector("#buttonWork");
const buttonBreak = document.querySelector("#buttonBreak");
buttonBreak.disabled = true;

//initialisation of variables
let workvar = 1;
let workTime = workvar;

let breakvar = 2;
let breakTime = breakvar;

let seconds = 0;
let working = true;

let timerInterval;
//Initialisation of the HTML page
updateHTMLTimer();

//Listeners for the start and reset buttons
let start = document.getElementById("start");
start.addEventListener("click", () => {
    if (working) {
        timerInterval = setInterval(workTimer, 100);
    }
    else {
        timerInterval = setInterval(breakTimer, 100);
    }
})


let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    if (working) {
        workTime=workvar;
    }
    else {
        working=true;
        breakTime=breakvar;
    }
    seconds=0;
    updateHTMLTimer();
})


function workTimer() {
    if (seconds == 0) {
        if (workTime==0) {
            swapTimer();
            clearInterval(timerInterval);
        }
        else {
            workTime-=1;
            seconds = 59;
        }
    }
    else {
        seconds-=1;
    }
    updateHTMLTimer();
}

function breakTimer() {
    if (seconds == 0) {
        if (breakTime==0) {
            swapTimer();
            clearInterval(timerInterval);
        }
        else{
            breakTime-=1;
            seconds = 59;
        }   
    }
    else {
        seconds-=1;
    }
    updateHTMLTimer();
}


function swapTimer() {
    if (working) {
        working = false;
        workTime = workvar;
        buttonWork.disabled = true;
        buttonBreak.disabled = false;
    }
    else {
        working=true;
        breakTime = breakvar;
        buttonWork.disabled = false;
        buttonBreak.disabled = true;
    }
    updateHTMLTimer();
}


function updateHTMLTimer() {
    let time = "";

    if (working) {
        if (workTime < 10) {
            time += "0";
        }
        time += workTime + ":";
        if (seconds<10) {
            time += "0";
        }
        time += seconds;
    }

    else {
        if (breakTime < 10) {
            time += "0";
        }
        time += breakTime + ":";
        if (seconds<10) {
        time += "0";
        }
        time += seconds;
    }

    document.getElementById("timer").innerHTML = time;
}
