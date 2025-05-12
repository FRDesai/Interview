//ba 

// var lengthOfLongestSubstring = function(s) {
//   let seen = new Set();
//   let start = 0;
//   let maxLength = 0;

//   for (let end = 0; end < s.length; end++) {
//     console.log("iteration", end)
//     while (seen.has(s[end])) {
//       seen.delete(s[start]);
//       start++;
//     }
//     seen.add(s[end]);
//     console.log("Seen", seen)
//     maxLength = Math.max(maxLength, end - start + 1);
//     console.log("max length", maxLength)
//     console.log(" ")
//   }

//   return maxLength;
// };

// console.log(lengthOfLongestSubstring("jklmnjkl")); // Output: 3

var lengthOfLongestSubstring = function(s) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    console.log("iteration", right);
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    console.log("Seen", seen);
    maxLength = Math.max(maxLength, right - left + 1);
    console.log("max length", maxLength);
    console.log(" ");
  }

  return maxLength;
};
