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