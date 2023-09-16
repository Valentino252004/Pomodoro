//initialisation of variables
let workvar = 1;
let workTime = workvar;

let breakvar = 2;
let breakTime = breakvar;

let seconds = 0;
let working = true;

let workTimerInterval;
let breakTimerInterval;
//Initialisation of the HTML page
updateHTMLTimer();

//Listeners for the start and reset buttons
let start = document.getElementById("start");
start.addEventListener("click", () => {
    if (working) {
        workTimerInterval = setInterval(workTimer, 10);
    }
    else {
        breakTimerInterval = setInterval(breakTimer, 10);
    }
})

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    alert("reset")
})


function workTimer() {
    if (seconds == 0) {
        if (workTime==0) {
            swapTimer();
            clearInterval(workTimerInterval);
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
            clearInterval(breakTimerInterval);
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
        console.log("work : " + workTime);
        updateHTMLTimer();
    }
    else {
        working=true;
        breakTime = breakvar;
        console.log("break : " + breakTime);
        updateHTMLTimer();
    }
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
