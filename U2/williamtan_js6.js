function blue() {
    let table = document.getElementById("tb");
    table.style.backgroundColor = "blue";
}

function red() {
    let table = document.getElementById("tb");
    table.style.backgroundColor = "red";
}

function disable() {
    let blue = document.getElementById("blue");
    let red = document.getElementById("red");
    blue.disabled = "disabled";
    red.disabled = "disabled";
}