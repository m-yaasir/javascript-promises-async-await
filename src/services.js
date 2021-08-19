//Method to simulate a promise with delay
export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

//Fetch API to request movies
//This will use the browser's Fetch API to get the movies data from movies.json
export function fetchMovies() {
    return fetch("./data/movies.json")
        .then(response => response.json())
        .then(movies => movies)
        .catch(error => console.log(error));
}

//Function to fetch books JSON
export function fetchBooks() {
    return fetch("./data/books.json")
        .then(response => response.json())
        .then(books => books)
        .catch(error => console.log(error));
}

export async function asyncFetchMovies() {
    try {
        const response = await fetch("/data/movies.json");
        const results = response.json();
        return results;
    } catch (error) {
        console.log(error);
    }
}