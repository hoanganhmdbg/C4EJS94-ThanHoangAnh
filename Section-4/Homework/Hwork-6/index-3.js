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
        complete: true,
    }
];
for (let i = 0; i < process.length; i++) {
    if(process[i].complete){
        console.log(`[ ]${process[i].subject}`);
    }else{
        console.log(`[x]${process[i].subject}`);
    }
}