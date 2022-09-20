function calculateArea() {
    let width = document.getElementById("w");
    let height = document.getElementById("h");
    let areaP = document.getElementById("area");
    let area = width.value * height.value;
    areaP.innerHTML = "Area = " + area;
}