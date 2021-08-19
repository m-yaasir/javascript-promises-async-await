import {fetchWithTimeout} from './services';
const movies = require('./data/movies.json');

//Resolve method
export function fetchMovies() {
    //callback function
    const resolveFunction = () => movies;
    //return execution of statement
    return fetchWithTimeout(1000).then(resolveFunction);
}
//Execute the fetchMovies() Promise
//moviePromise is a Promise object
const moviePromise = fetchMovies();
//callback function to log the results of the moviePromise object
//Log the results of the moviePromise object
moviePromise.then((results) => {
    console.log(results)
});
