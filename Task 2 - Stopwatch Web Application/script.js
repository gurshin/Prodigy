let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    document.getElementById("time-display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("START");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("START");
}

function showButton(buttonKey) {
    const startButton = document.getElementById("start-btn");
    const pauseButton = document.getElementById("pause-btn");

    if (buttonKey === "START") {
        startButton.style.display = "block";
    
    } else if (buttonKey === "PAUSE") {
        
        pauseButton.style.display = "block";
    }
}

document.getElementById("start-btn").addEventListener("click", start);
document.getElementById("pause-btn").addEventListener("click", pause);
document.getElementById("reset-btn").addEventListener("click", reset);

showButton("START");
