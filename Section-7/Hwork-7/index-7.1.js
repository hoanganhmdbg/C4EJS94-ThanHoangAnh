let a = document.getElementById('button1');
a.addEventListener('click', (e) => {
    document.getElementById('button1').style.backgroundColor = 'black';
});
console.log(e.target);