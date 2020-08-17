let n = parseInt(prompt("Enter n"));
let c = parseInt(prompt("Enter c"));
let s = parseInt(prompt("Enter s"));
console.log("A sequence of numbers, starting from " + c + ", ending before " + n + ", stepping by " + s);
for (let index = c; index < n; index+=s) {
    console.log(index + "\n");
}