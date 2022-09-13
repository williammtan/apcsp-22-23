let count = 0;
let time = 5000;
let initialTime = 0;

function displayResult() {
    document.getElementById("result").innerHTML = "Result: " + count.toString()/time*1000 + " CPS";
    count = 0;
}

function resetResult() {
    document.getElementById("result").innerHTML = "Result: ";
}

function displayTimer() {
    now = new Date().getTime()
    document.getElementById("result").innerHTML = "Timer: " + initialTime - now;
}

function onClick() {
    if(count == 0) {
        setTimeout(displayResult, time);
        resetResult();
        initialTime = new Date().getTime();
        // setInterval(displayResult, 100);
    }

    count += 1
    document.getElementById("count").innerHTML = "Count: " + count.toString();
}

alertUser();