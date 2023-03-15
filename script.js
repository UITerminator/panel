const btn = document.getElementById('add');

btn.addEventListener("click", () => {
    var name = document.getElementById("name");
    var gender = document.getElementById("gender");
    var designation = document.getElementById("designation");
    var date = document.getElementById("date");
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= gender.value;
    row.insertCell(2).innerHTML= designation.value;
    row.insertCell(3).innerHTML= date.value;
});