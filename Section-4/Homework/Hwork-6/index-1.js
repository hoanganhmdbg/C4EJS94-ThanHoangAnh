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
for (let i = 0; i < process.length; i++) {
    console.log(`${i +1}. ${process[i].subject}`);
    console.log(`  Complete: ${process[i].complete}`);
}