function getAllLetters(str) {
    let arr = []
    let letter = 0;
    for(let i = 0; i < str.length; i++){
        letter = str[i];
        arr.push(letter)
    }
    return arr;
    // your code here   
}

console.log(getAllLetters("mi bebito fiu fiu"))