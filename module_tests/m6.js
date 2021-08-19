import { asyncFetchBooks, asyncFetchMovies } from "./services";
import { fetchMovies, fetchBooks } from "./services";
import { fetchWithTimeout } from './services';

//Fetch both books and movies
function getBooksAndMovies() {
    return Promise.all([fetchMovies(), fetchBooks()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}
//Log results
const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then((results) => {
    console.log('getBooksAndMoviesPromise', results);
});

//Fetch either books or movies with Promise.race()
function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error));
}
//Log results
const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then((results) => {
    console.log('getBooksOrMoviesPromise', results);
});

async function getBooksAndMoviesAsync() {
    try {
        //Call Promise.all() and await the results
        //return the result of this call to a destructured array
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()]);
        //Return books and movies objects
        return { books, movies };
    } catch (error) {
        console.log("Error fetching books and movies", error);
        //Return an error
        return error;
    }
}
//Log the results
getBooksAndMoviesAsync()
    .then((results) => {
        console.log("movies and books", {
            movies: results.movies,
            books: results.books
        });
    })
    //Add catch() method
    .catch((error) => {
        console.error("Error in getBooksAndMoviesAsync execution", error);
    });

//Modify getBooksOrMoviesAsync() to Return a Rejected Promise
async function getBooksOrMoviesAsync() {
    const values = await Promise.race([asyncFetchBookss(), asyncFetchMovies()]);
    return values;
}
//Log the results
getBooksOrMoviesAsync().then((results) => {
    console.log("movies OR books", {
        results
    });
});