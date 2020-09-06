var count = Number(document.getElementById('count').innerHTML);
function increase(){
    count +=1;
    document.getElementById('count').innerHTML = count;
}
function decrease(){
    count -=1;
    document.getElementById('count').innerHTML = count;
}