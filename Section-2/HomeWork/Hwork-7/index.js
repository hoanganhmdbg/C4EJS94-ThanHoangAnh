let n = prompt("n =");
let x = prompt("x = ");
if(Number(x) < Number(n)/2){
    alert(x + " is in lower half of " + n);
}else if(Number(x) == Number(n)/2){
    alert(x + " is equals half of " + n);
}else{
    alert(x + " is in higher half of " + n);
}