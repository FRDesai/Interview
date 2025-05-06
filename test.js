const test = (array) => {
    array.sort()
    const first = array[0]
    const last = array[array.length-1]
    let i =0;
    while(first && last){
        if(first[i]===last[i]){
            i++;
        }
        else{
            break;
        }
    }
    return first.slice(0, i)
}

console.log(test(["floooo", "flooooeeeee"]))