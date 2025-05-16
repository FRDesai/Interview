//This is a brute force approach
// const longestPalinmondricSubstring = (s) => {
//   //returning all the possible substring in in S
//   let substrings = [];
//   let palindromeSubString = [];

//   let maxLength = 0;
//   for (let i = 0; i <= s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let sub = s.slice(i, j);
//       reverse = sub.split("").reverse().join("");
//       if (reverse === sub && sub.length > maxLength) {
//         maxLength = sub.length;
//       }
//     }
//   }

//   return maxLength;
// };

var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0, end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    console.log(`Iteration: ${i}, Center character: '${s[i]}'`);

    let [left1, right1] = expandAroundCenter(i, i); // odd
    let [left2, right2] = expandAroundCenter(i, i + 1); // even

    const oddPalindrome = s.slice(left1, right1 + 1);
    const evenPalindrome = s.slice(left2, right2 + 1);
    console.log("  Odd-length  ->", oddPalindrome);
    console.log("  Even-length ->", evenPalindrome);

    if (right1 - left1 > end - start) {
      [start, end] = [left1, right1];
      console.log("  ➤ Updated longest palindrome (odd):", s.slice(start, end + 1));
    }

    if (right2 - left2 > end - start) {
      [start, end] = [left2, right2];
      console.log("  ➤ Updated longest palindrome (even):", s.slice(start, end + 1));
    }

    console.log("  Current longest:", s.slice(start, end + 1));
    console.log("-------------------------");
  }

  return s.slice(start, end + 1);
};


console.log(longestPalindrome("abbaqwermadamtyuiop"));
