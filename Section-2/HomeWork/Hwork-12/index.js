let num = parseInt(prompt("Enter number of edges"));
let corner = (num - 2)*180/num;
for (let index = 0; index < num; index++) {
    fd(100);
    rt(180-corner); 
}