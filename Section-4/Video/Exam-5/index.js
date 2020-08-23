console.log("Create an object named movie, with title, year and rate and characters. The characters \
 contain at least 3 characters of the movie");
 let movie = {
     title: 'Attack on titan',
     year: 2013,
     rate: 8.8,
     characters: ['Eren','Armin','Mikasa'],
 };
 console.log(movie);
 console.log("Print or log out the movie data in the following format (Note, remember\
     the spread operator … for fast logging an array):");
     console.log(movie.title);
     console.log('Year: ' +movie.year);
     console.log('Rate: ' +movie.rate);
     console.log(`Casts:  ${movie.characters}`);
     let movie1 = {
        title: 'Mind hunter',
        year: 2017,
        rate: 8.6,
        characters: ['Holden','Bill'],
    };
    let movie2 = {
        title: 'Unabomber',
        year: 2017,
        rate: 8.1,
        characters: ['Ted'],
    };
    let movies = [];
    movies.push(movie);
    movies.push(movie1);
    movies.push(movie2);
    console.log("Log or print all the movies in the movies array");
    for (let index = 0; index < movies.length; index++) {
        console.log("-------------");
        console.log(movies[index].title);
        console.log(`Year : ${movies[index].year}`);
        console.log(`rate : ${movies[index].rate}`);
        console.log(`Casts : ${movies[index].characters}`);
    }