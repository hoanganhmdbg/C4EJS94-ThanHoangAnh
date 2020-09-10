let score = 0;
let time = 3;
let fullTime = 5;
function getRandomNumber(min, max){
    return (Math.floor(Math.random() * (max - min) + min))
}
function getRandomOperator(){
    let operator = ['+', '-' ,'*'];
    return operator[Math.floor(Math.random() * operator.length)];
}
function getResult(caculate){
    let a = Math.random() >=0.5;
    return a ? getCorrectResult(caculate) : getIncorrectResult(caculate);
}
function getCorrectResult(caculate){
    return eval(caculate);
}
function getIncorrectResult(caculate){
    let incorrect = getRandomNumber(getCorrectResult(caculate) -5, getCorrectResult(caculate) +5);
    return (incorrect == getCorrectResult(caculate)) ? getIncorrectResult(caculate) : incorrect;
}
function generateCaculation(){
    let a = getRandomNumber(0,10);
    let b = getRandomNumber(0,10);
    let ope = getRandomOperator();
    let caculate = `${a} ${ope} ${b}`;
    let caculation = caculate + ` = ${getResult(caculate)}`;
    document.getElementById('quiz').innerHTML = caculation;
}

