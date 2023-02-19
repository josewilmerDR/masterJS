function findShortestElement(arr) {
    // your code here
    if(arr.length < 1) return "";

    let shortestLength = Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < shortestLength ){
            return shortestLength = arr[i] 
        }
    }
    return shortestLength;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'