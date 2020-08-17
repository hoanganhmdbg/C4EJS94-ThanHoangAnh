
let n = prompt("Enter n");
let c = prompt("Enter c");
console.log("A sequence of numbers, starting from " + c + ", ending before " + n);

for (let index = Number(c); index < Number(n); index+=3) {  
    console.log(index+"\n");
}