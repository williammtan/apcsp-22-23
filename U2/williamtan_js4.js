/*
Author: William Tan
*/

let i = 0;

function changeRow() {
    // Replace the value of the first row in the table
    let row = document.getElementsByTagName('tr')[0]; // get first row
    row.innerHTML = `<td>Column 1 (${i})</td> <td>Column 2 (${i})</td>`;
    i++;
}

function addRow() {
    // Add a row to the table
    let row = document.createElement("tr");
    row.innerHTML = `<td>Column 1 (${i})</td> <td>Column 2 (${i})</td>`;
    i++;
    let table = document.querySelector("table");
    table.appendChild(row);
}