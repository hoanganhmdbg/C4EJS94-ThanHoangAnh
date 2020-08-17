let n = prompt("Enter n");
let c = prompt("Enter c");
console.log("A sequence of numbers, starting from " + c + ", ending before " + n);
for (let index = c; index < n; index++){
    console.log(index + "\n");
}