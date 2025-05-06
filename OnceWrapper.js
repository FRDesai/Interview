const once = (fn) => {
    let hasRun = false;
    let result;

    return (...args) => {
        if (!hasRun) {
            result = fn(...args);  // Execute the function and store the result
            hasRun = true;          // Mark it as run
        }
        return result;           // Return the stored result on subsequent calls
    };
};
const Hello = (a) => {
    console.log("This is hello",a)
}
const greet = once(Hello)
greet(4)
greet(5)
