const btn = document.getElementById('add');
const btnone = document.getElementById('Add');

btn.addEventListener("click", () => {
    var name = document.getElementById("name");
    var gender = document.getElementById("teacher");
    var designation = document.getElementById("time");
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= gender.value;
    row.insertCell(2).innerHTML= designation.value;
});

btnone.addEventListener("click", () => {
    var name = document.getElementById("nameDars");
    var gender = document.getElementById("number");
    var designation = document.getElementById("avg");
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= gender.value;
    row.insertCell(2).innerHTML= designation.value;
});