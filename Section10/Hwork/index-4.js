function randomNum(){
    let num = Math.floor(Math.random() * 10);
    return num;
}
const x = randomNum();
if(x < 0){
    console.log(`Failed: the number is smaller than 0`);
}else if(x > 10){
    console.log(`Failed: the number is bigger than 10`);
}else{
    console.log(`Passed, Bravo`);
}