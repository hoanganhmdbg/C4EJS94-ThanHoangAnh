console.log("Hello, mu name is phuong nam and here is my sheep sizes:");
const sizes = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizes);
let maxSize = Math.max(...sizes);
console.log("\n Now my bigget sheephas size " + maxSize + " , Let's shave it");
console.log("\nAfter shearing, here ismy flock");
sizes[sizes.indexOf(maxSize, 0)] = 8;
console.log(...sizes);
console.log();
for (let index = 1; index < 4; index++) {
    console.log("MONTH " + index);
    console.log("One month has, passsed, my sheeps have grown, here are their sizes");
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] += 50;
    }
    let maxSize = Math.max(...sizes);
    console.log(...sizes);
    if (index == 3) {
        let sum = sizes.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log("\nMy flock has size in total: " + sum);
        console.log(`I would get ` + sum + ` * 2$ = ${sum * 2}`)
    } else {
        console.log("\n Now my bigget sheephas size " + maxSize + " , Let's shave it");
        console.log("\nAfter shearing, here ismy flock");
        sizes[sizes.indexOf(maxSize, 0)] = 8;
        console.log(...sizes);
        console.log();
    }

}
