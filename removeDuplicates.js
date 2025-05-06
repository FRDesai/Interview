// Remove the duplicates directly in the same array (no new array!).
// Keep only the first occurrence of each number.
// Maintain the original order of the unique numbers.
// After you do that, return how many unique numbers you ended up with.
// ✅ The first part of the array (the first k elements) should now contain the unique values in order.

const removeDuplicates = (num) => {
    let k = 1;
    for (let j = 1; j < num.length; j++) {
        if (num[k-1] !== num[j]) {
            num[k] = num[j]
            k = k + 1;
        }
    }

    console.log(num)
    return k 
}

console.log(removeDuplicates( [0,0,1,1,1,2,2,3,3,4]
))