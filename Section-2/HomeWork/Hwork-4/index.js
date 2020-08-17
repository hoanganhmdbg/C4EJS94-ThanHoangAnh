let num = prompt("Enter a number");
let fac = 1;
for (let index = 1; index <= Number(num); index++) {
    fac *= index;
}
alert("The factorial of " + num + " is " +fac);