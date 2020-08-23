let movie1 = {
    title: 'one piece',
    year: 1999,
    rate : 8.0,
 };
 let movie2 = {
    title: 'naruto',
    year: 2006,
    rate : 8.5,
 };
 let movie3 = {
    title: 'boruto',
    year: 2018,
    rate : 8.4,
 };
 let movies = [];
 console.log("create at least 3 element")
 movies.push(movie1);
 movies.push(movie2);
 movies.push(movie3);
 console.log(movies);
 console.log("log out first movie");
 console.log(movies[0]);
 console.log("Print or log out the title of the last movie from movie list");
 console.log(movies[movies.length-1].title);
 console.log("Use a loop to print or log out all of the movie in the movie list");
 for (let index = 0; index < movies.length; index++) {
     console.log(movies[index]);
     
 }
 console.log("Use a loop to print or log out all of the movie in the movie list");
 for (let index = 0; index < movies.length; index++) {
     console.log("--------------------------");
    console.log(movies[index].title);
    console.log(movies[index].year);
    console.log(movies[index].rate);
    
}
console.log("Increase the rate of the last movie in the movies list by 0.7");
console.log(movies[movies.length-1].rate);
movies[movies.length-1].rate += 0.7;
console.log(movies[movies.length-1].rate);