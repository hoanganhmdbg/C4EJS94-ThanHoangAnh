let movie = {
    title : 'The dark night rises',
    year : 2012,
    rate : 8.4,
};
let prop = prompt("What do you want to update");
let a = movie[prop];
if(a == null || a == undefined){
    alert(`${prop} does not exist in our data, we will add new`);
}
let newItem = prompt("Enter the new data");
movie[prop] = newItem;
console.log(movie.title);