// async function load(){
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR1yvuXkANzsQyab0xSs5Spdy03OuJsJh_Dx0XtEyfNo7nF0l4NkClNjmIg');
//     const data = await conn.json();
//     show(data);
// }
// load();
// function show(data){
//     console.log(data);
// }
let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });
  console.log(promise);