const longestCommonPrefix = (strs) => {
    // let longestPrefix = strs[0]
    // for (let i = 1; i < strs.length; i++) {
    //     let j = 0;
    //     while (longestPrefix.length > 0 && strs[i].length > 0 && longestPrefix[j] === strs[i][j]) {
    //         j++
    //     }
    //     longestPrefix = longestPrefix.slice(0,j)
    // }
    // return longestPrefix;
    strs.sort()
    const first = strs[0]
    const last = strs[strs.length-1]
    let i =0;
    while(i<first.length && first[i]===last[i]){
        i++
    }
    return last.slice(0,i)
}

console.log(longestCommonPrefix(["loooooooooooooo", "loooooopppp"]))