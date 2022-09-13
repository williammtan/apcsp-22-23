let i = 0;

function changeRow() {
    let row = document.getElementsByTagName('tr')[0]; // get first row
    row.innerHTML = `<td>Column 1 (${i})</td> <td>Column 2 (${i})</td>`;
    i++;
}

function addRow() {
    let row = document.createElement("tr");
    row.innerHTML = `<td>Column 1 (${i})</td> <td>Column 2 (${i})</td>`;
    i++;
    let table = document.querySelector("table");
    table.appendChild(row);
}