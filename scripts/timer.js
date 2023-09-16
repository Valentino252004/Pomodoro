//initialisation of variables
let work = 2;
let breakTime = 1;
let seconds = 0;
let working = true;

//Initialisation of the HTML page
document.getElementById("timer").innerHTML = work + ":00"

//Listeners for the start and reset buttons
let start = document.getElementById("start");
start.addEventListener("click", () => {
    setInterval(timer(), 1000);
    console.log("1");
})

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    alert("reset")
})

setInterval( , (1000));

function timer() {
    console.log("3")
    if (seconds == 0) {
        seconds = 59;
        if (working) {
            work-=1;
        }
        else {
            breakTime -= 1;
        }
    }
    else {
        seconds-=1;
    }
    updateHTMLTimer();
}

function updateHTMLTimer() {
    document.getElementById("timer").innerHTML = work + ":" + seconds;
}