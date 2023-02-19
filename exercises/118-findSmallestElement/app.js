function findSmallestElement(arr) {
    // your code here
    if(arr.length < 1) return 0;
    let smallestElement = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallestElement){
            smallestElement = arr[i]
        }
    }
    return smallestElement;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1