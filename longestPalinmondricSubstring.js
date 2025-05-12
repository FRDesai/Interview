const longestPalinmondricSubstring = (s) => {
  //returning all the possible substring in in S
  let substrings = [];
  let palindromeSubString = [];

  let maxLength = 0;
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.slice(i, j);
      reverse = sub.split("").reverse().join("");
      if (reverse === sub && sub.length > maxLength) {
        maxLength = sub.length;
      }
    }
  }

  return maxLength;
};

console.log(longestPalinmondricSubstring("msddsfadam"));
