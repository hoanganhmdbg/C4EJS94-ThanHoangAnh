let table = document.getElementById('myTable');
for (let i = timeSheet.length -1 ; i >= 0; i--) {
    let row = table.insertRow(2);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = timeSheet[i].project;
    cell2.innerHTML = timeSheet[i].task;
    cell3.innerHTML = timeSheet[i].timeSpend;
}
table.deleteRow(1);
var a = document.getElementById('addProject').innerHTML;
var b = document.getElementById('addTask').innerHTML;
var c = document.getElementById('addTime').innerHTML;
function clearText(){
    table.
}