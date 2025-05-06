const lengthOfLastWord = (s) => {
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]===" "){
            count = 0;
        }
        else{
            count++;
        }
    }
    return count
}

console.log(lengthOfLastWord("   fly me   to   the moon"))