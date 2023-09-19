//initialisation of status button
const buttonWork = document.querySelector("#buttonWork");
const buttonBreak = document.querySelector("#buttonBreak");

//initialisation of variables
let workvar;
let workTime;
let breakvar;
let breakTime;

//Checks if local variables exists, sets their value to the variable or create them if they don't
//for the work time
if(localStorage.getItem("workTime")==null) {
    localStorage.setItem("workTime", 25);
    workvar = 25;
}
else {
    workvar = localStorage.getItem("workTime");
}
workTime = workvar;

//for the break time
if(localStorage.getItem("breakTime")==null) {
    localStorage.setItem("breakTime", 5);
    breakvar = 5;
}else {
    breakvar = localStorage.getItem("breakTime");
}
breakTime = breakvar;

//Initialise the value of the input boxes to the local storage's 
//value for the chosen work and break times
document.getElementById("chosenWorkTime").value=localStorage.getItem("workTime");
document.getElementById("chosenBreakTime").value=localStorage.getItem("breakTime");

//localy stored variables will update when the user changes his work and break time
//for the work time
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

//for the break time
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

//Initialisation of variables
let seconds = 0;
let working = true;

let timerInterval;

//Initialisation of the timer's display
updateHTMLTimer();

//Initialisation of the start button that start the timer, disappear, show the reset button
//and block the input boxes
let start = document.getElementById("start");
start.addEventListener("click", () => {
    timerInterval = setInterval(timer, 1000);
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";
    document.getElementById("chosenWorkTime").disabled= "true";
    document.getElementById("chosenBreakTime").disabled= "true";
})

//Initialisation of the reset button that reload the html page
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    location.reload();
})

//Decides of wich function to execute depending on the work or break time
function timer() {
    if (working) {
        workTimer();
    }
    else {
        breakTimer();
    }
}

//decreases the timer while on work time
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

//decreases the timer while on break time
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

//swaps from work time to break time and the other way around 
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

//updates the html timer display
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
