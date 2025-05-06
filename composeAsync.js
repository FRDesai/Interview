//this basically must take 2 functions

const composeAsync = (func1, func2) => async (x) => {
    const resultOfFirstFunction = await func1(x);
    return func2(resultOfFirstFunction)
}

const sqaure = async (value) => {
    return value * value
}

const sum = (value) => {
    return value+value;
}

//square the double of the number
const result =await composeAsync(sqaure, sum)(3)
console.log(result)