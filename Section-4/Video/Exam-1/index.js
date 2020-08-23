let movie = {
    title : 'The dark night rises',
    year : 2012,
    rate : 8.4,
};
console.log("Init and read exercise")
console.log("");
console.log("log all properties (movie.property)");
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
console.log("log all properties (movie['property']");
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);
console.log("Log an non-existent property of the movie, director");
console.log(movie.dsd);
console.log(movie);
let properties = prompt("What do you want to know");
if(movie[properties] == null || movie[properties] == undefined){
    alert(properties + " does not exist in our data");
} else{
    alert(movie[properties]);   
}




