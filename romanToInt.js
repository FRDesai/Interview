const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

//Attempt one: But this doesnt take into consideration that substraction values
// const romanToInt = (s) => {
//     const arr = s.split("")
//     const integer = arr.reduce((acc, i) => {
//         acc = acc + dictionary[i]
//         return acc
//     }, 0)
//     return integer
// }


// Compare the current numeral with the next one:

// If the current value is less than the next, subtract it.

// Otherwise, add it.


const romanToInt = (s) => {
    const arr = s.split("")
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const nextNumber = arr[i + 1]
        if (dictionary[arr[i]] < dictionary[arr[i + 1]]) {
            sum = sum + dictionary[arr[i+1]] - dictionary[arr[i]]
            i++; //If that is the case then skip the next character
        } else {
            sum = sum + dictionary[arr[i]]
        }


    }
    return sum

}

const integer = romanToInt("MCMXCIV")
console.log("This is an integer", integer)
