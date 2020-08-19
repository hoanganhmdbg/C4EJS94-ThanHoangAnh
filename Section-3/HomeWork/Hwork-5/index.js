let str = prompt("Enter a sequence of numbers separated by comma(,)");
let a = str.split(",").map(Number);
// let sum = 0;
// for (let index = 0; index < a.length; index++) {
//    sum += Number(a[index]);
    
// }
let sum = a.reduce(function(a,b){
   return a+b;
},0);
alert("The sum of them is " + sum);