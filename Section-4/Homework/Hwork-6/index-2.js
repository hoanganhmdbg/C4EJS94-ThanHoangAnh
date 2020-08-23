let process = [
    {
        subject: 'HTML',
        complete: false,
    },
    {
        subject: 'CSS',
        complete: false,
    },
    {
        subject: 'Basic of Javascrip',
        complete: false,
    },
    {
        subject: 'Node Packeage Manager',
        complete: false,
    },
    {
        subject: 'Git',
        complete: false,
    }
];
let command = prompt("Enter your command(New, Delete, Update, Complete");
if(command == 'new'){
    let newTask = prompt("Enter new task:");
    let newProcess = {
        subject: newTask,
        complete: false,
    };
    process.push(newProcess);
    print();
}else if(command == 'update'){
    let index = Number(prompt("Enter position"));
    let newTitle = prompt("Enter new Title:");
    process[index-1].subject = newTitle;
    print();
}else if(command == 'complete'){
    let index = Number(prompt("Enter position"));
    process[index-1].complete = true;
    print();
}else if(command == 'delete'){
    let index = Number(prompt("Enter position"));
    process.splice(index-1,1);
    print();
}

function print(){
    for (let i = 0; i < process.length; i++) {
        console.log(`${i +1}. ${process[i].subject}`);
        console.log(`  Complete: ${process[i].complete}`);
    }
}