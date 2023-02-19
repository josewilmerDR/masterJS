function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length < 1) {
        return 0
    }
    let longestLength = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string" && arr[i].length > longestLength){
            longestLength = arr[i].length; 
        }
    }
    return longestLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5