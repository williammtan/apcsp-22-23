function generateText() {
    let text = document.getElementById("text");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let div = document.getElementById("div");
    let h1 = document.createElement("h1");
    h1.style.color = `rgb(${r}, ${g}, ${b})`
    h1.innerHTML = text.value;
    
    div.appendChild(h1);
}

function generateTextSlider() {
    let text = document.getElementById("text");
    let color = document.getElementById("color");
    let div = document.getElementById("div");
    let h1 = document.createElement("h1");
    h1.style.color = color.value;
    h1.innerHTML = text.value;
    
    div.appendChild(h1);
}