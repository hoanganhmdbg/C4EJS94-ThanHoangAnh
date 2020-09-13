function distance(x1, y1, x2, y2) {
    let dis = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return dis;
}
let x = distance(3, 10, 0, 6);
if(x !== 5) {
    console.log(`Failed: the calculation is wrong`);
}else{
    console.log(`Passed, Bravo`);
}