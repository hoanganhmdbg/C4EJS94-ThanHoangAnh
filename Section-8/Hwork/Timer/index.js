var num = document.getElementById("number");
var b;
function countdown(){
    b -= 1;
    if(b > 0){
        document.getElementById('text').innerHTML = b;
    }else{
        document.getElementById('text').innerHTML = "Time's up";
        clearInterval(a);
    }
}
var a;
function start(){ 
    b = Number(num.value);
    a = setInterval(countdown, 1000);
}
function stop(){
    clearInterval(a);
    document.getElementById('text').innerHTML = "Stopped"
}
