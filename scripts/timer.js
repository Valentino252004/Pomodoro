//initialisation of variables
let workTime = 15;
let breakTime = 1;
let seconds = 0;
let working = true;

//Initialisation of the HTML page
updateHTMLTimer("work");

//Listeners for the start and reset buttons
let start = document.getElementById("start");
start.addEventListener("click", () => {
    if (working) {
     var timerInterval = setInterval(workTimer, 1000);
    }
    else {
        //TO DO
    }
})

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    alert("reset")
})

function workTimer() {
    if (seconds == 0) {
        if (workTime==0) {
            clearInterval(timerInterval);
        }
        workTime-=1;
        seconds = 59;
    }
    else {
        seconds-=1;
    }
    updateHTMLTimer("work");
}

//TO DO 
function breakTimer() {
    if (seconds == 0) {
        if (workTime==0) {
            clearInterval(timerInterval);
        }
        workTime-=1;
        seconds = 59;
    }
    else {
        seconds-=1;
    }
    updateHTMLTimer("break");
}


function updateHTMLTimer(statut) {
    let time = "";

    if (statut=="work") {
        if (workTime < 10) {
            time += "0";
        }
        time += workTime + ":";
        if (seconds<10) {
            time += "0";
        }
        time += seconds;
    }

    else if (statut == "break") {
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