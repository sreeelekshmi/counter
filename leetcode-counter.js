function createCounter(n: number): () => number {
    return function() {
        return n++;
    };
}

// Example usage:
const counter = createCounter(10);
console.log(counter()); 
console.log(counter());
console.log(counter()); 