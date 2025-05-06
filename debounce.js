// const debounce = (func, delay) =>{
//     let timerId;
//     return (...args) => {
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             func(...args)
//         }, delay)
//     }
// }

// const consoleOutput = (value) =>{
//     console.log(value)
// }

// const debouncedOutput = debounce(consoleOutput, 500)
// debouncedOutput("This is debounced");
// debouncedOutput("This is debounced again");
// debouncedOutput("And again");


const debounceFunction = (func, delay) => {
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func(args)
        }, delay)
    }

}

const constInput = (value) => {
    console.log(value)
}

const debouncedOutput = debounceFunction(constInput, 500)
debouncedOutput("This is debounced");
debouncedOutput("This is debounced again");
debouncedOutput("And again");

// debounceFunction(constInput("An Apple a day keeps a doctor"), 1000)
// debounceFunction(constInput("An Apple a "), 1000)
// debounceFunction(constInput("An Apple a day keeps "), 1000)