//Method to simulate a promise with delay
export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}