let str = prompt("Enter a sequence of number, separated by comma(,)");
let a = str.split(",");
// let min = Number(a[0]);
// for (let index = 1; index < a.length; index++) {
//     if(min > Number(a[index])){
//         min = Number(a[index]);
//     }
// }
// alert("The smallest number is "+ min);
alert("The smallest number is " + Math.min.apply(null,a));