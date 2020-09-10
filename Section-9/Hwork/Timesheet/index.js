let tb_body = document.getElementById('ts_body');
console.log(tb_body);
let tb_head = document.getElementById('tb_head');
let btn = '<button class = "delete">X</button> <button class="update">U</button>';
let index;
function showTable(data) {
    tb_body.innerHTML = "";
    tb_head.innerHTML = "";
    tb_head.insertAdjacentHTML('beforeend', '<tr><th>Project</th><th>Task</th><th>Time spend</th><th>Action</th></tr>');
    for (let i = 0; i < data.length; i++) {
        tb_body.insertAdjacentHTML("beforeend", `<tr><td>${data[i].project}</td> <td>${data[i].task}</td>\
                                        <td>${data[i].timeSpend}</td> <td>${btn}</td></tr>`);
    }
    click();
}
showTable(timeSheet);
let btn_add = document.getElementById('add');
btn_add.addEventListener('click', () => {
    let proj = document.getElementById('tx_project').value;
    let tas = document.getElementById('tx_task').value;
    let time = document.getElementById('tx_time').value;
    let time_add = {};
    time_add.project = proj;
    time_add.task = tas;
    time_add.timeSpend = time;
    timeSheet.push(time_add);
    showTable(timeSheet);
    document.getElementById('tx_project').value = "";
    document.getElementById('tx_task').value = "";
    document.getElementById('tx_time').value = "";
});
function click() {
    let btn_delete = document.getElementsByClassName('delete');
    for (let i = 0; i < btn_delete.length; i++) {
        btn_delete[i].addEventListener("click", () => {
            console.log(i);
            timeSheet.splice(i, 1);
            // console.log(timeSheet);
            // console.log(btn_delete.length);
            showTable(timeSheet);
        });
    }
    let btn_u = document.getElementsByClassName('update');
    for (let i = 0; i < btn_u.length; i++) {
        btn_u[i].addEventListener("click", () => {
            document.getElementById('tx_project').value = timeSheet[i].project;
            document.getElementById('tx_task').value = timeSheet[i].task;
            document.getElementById('tx_time').value = timeSheet[i].timeSpend;
            btn_add.style.display = 'none';
            document.getElementById('update').style.display = 'inline';     
            index = i;
        });
        
    }
    
}
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('tx_project').value = "";
    document.getElementById('tx_task').value = "";
    document.getElementById('tx_time').value = "";
    btn_add.style.display = 'inline';
    document.getElementById('update').style.display = 'none';
});
let btn_update = document.getElementById('update'); 
btn_update.addEventListener('click', () => {
    let proj = document.getElementById('tx_project').value;
    let tas = document.getElementById('tx_task').value;
    let time = document.getElementById('tx_time').value;
    let time_update = {};
    time_update.project = proj;
    time_update.task = tas;
    time_update.timeSpend = time;
    timeSheet[index] = time_update;
    showTable(timeSheet);
}); 

