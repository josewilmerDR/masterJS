function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0
    }

    let shortestLength = Infinity;
    for( let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string" && arr[i].length < shortestLength){
            shortestLength = arr[i].length 
        }
    }
    return shortestLength;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 