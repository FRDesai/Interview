const firstOccurenceInString = (haystack, needle) => {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}

console.log(firstOccurenceInString(haystack = "leetcode", needle = "leeto"))
console.log(firstOccurenceInString(haystack = "aasadbutsad", needle = "sad"))
console.log(firstOccurenceInString(haystack = "aaa", needle = "aaaa"))