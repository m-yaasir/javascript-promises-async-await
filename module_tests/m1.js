//Copy paste in index.js
import {fetchWithTimeout} from './services';
const movies = require('./data/movies.json');

//Fetch Movies with a Traditional Promise
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
//callback function as resolve function
moviePromise.then((results) => {
    //Log the results of the moviePromise object
    console.log(results)
});
//callback function as resolve function
moviePromise.then((results) => {
    //Log the results of the moviePromise object
    console.log(results)
});