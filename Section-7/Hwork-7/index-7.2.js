let a = document.getElementById('input1');
let b = document.getElementById('input2');
a.addEventListener('keydown', (e) =>{
    console.log(e.key);
});
b.addEventListener('keydown', (e) => {
    console.log(e.key);
});