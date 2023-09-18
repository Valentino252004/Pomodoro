//initialisation of status button
const buttonWork = document.querySelector("#buttonWork");
const buttonBreak = document.querySelector("#buttonBreak");

//initialisation of variables
let workvar;
let workTime;
let breakvar;
let breakTime;

//checks if local variables exists
if(localStorage.getItem("workTime")==null) {
    localStorage.setItem("workTime", 25);
    workvar = 25;
}
else {
    workvar = localStorage.getItem("workTime");
}
workTime = workvar;

if(localStorage.getItem("breakTime")==null) {
    localStorage.setItem("breakTime", 5);
    breakvar = 5;
}else {
    breakvar = localStorage.getItem("breakTime");
}
breakTime = breakvar;

document.getElementById("chosenWorkTime").value=localStorage.getItem("workTime");
document.getElementById("chosenBreakTime").value=localStorage.getItem("breakTime");

//localy stored variables will update
chosenWorkTime.onchange = function() {
    workvar = document.getElementById("chosenWorkTime").value;
    workvar = Math.round(workvar); 
    if (workvar>120) {
        workvar = 120;
    }
    if (workvar < 1) {
        workvar = 1;
    }
    document.getElementById("chosenWorkTime").value=workvar;
    localStorage.setItem("workTime", workvar);
    workTime = workvar;
    updateHTMLTimer();
}
chosenBreakTime.onchange = function() {
    breakvar = document.getElementById("chosenBreakTime").value;
    breakvar = Math.round(breakvar);  
    if (breakvar>60) {
        breakvar = 60;
    }
    if (breakvar < 1) {
        breakvar = 1;
    }
    document.getElementById("chosenBreakTime").value=breakvar;
    localStorage.setItem("breakTime", breakvar);
    breakTime = breakvar;
    updateHTMLTimer();
}

let seconds = 0;
let working = true;

let timerInterval;

//Initialisation of the HTML page
updateHTMLTimer();

//Listeners for the start and reset buttons
let start = document.getElementById("start");
start.addEventListener("click", () => {
    timerInterval = setInterval(timer, 1000);
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";
})


let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    location.reload();
})


function timer() {
    if (working) {
        workTimer();
    }
    else {
        breakTimer();
    }
}

function workTimer() {
    if (seconds == 0) {
        if (workTime==0) {
            swapTimer();
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
        document.getElementById("buttonBreak").style.color = "black";
        document.getElementById("buttonWork").style.color = "#555b61";
    }
    else {
        working=true;
        breakTime = breakvar;
        document.getElementById("buttonWork").style.color = "black";
        document.getElementById("buttonBreak").style.color = "#555b61";
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
