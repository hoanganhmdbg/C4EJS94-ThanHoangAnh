function randomNum(a, b) {
    let num = Math.floor(Math.random() * (b - a) + a);
    return num;
}
const x = randomNum(4, 16);
if (x < 4) {
    console.log(`Failed: the number is smaller than 4`);
} else if (x > 16) {
    console.log(`Failed: the number is bigger than 16`);
} else {
    console.log(`Passed, bravo`);
}