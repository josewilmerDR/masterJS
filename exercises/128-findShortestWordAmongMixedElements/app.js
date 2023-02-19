function findShortestWordAmongMixedElements(arr) {
    // your code here
    //esta seria la palabras más pequeña posible.
    let shortestLength = ""
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
            if(shortestLength === "" || arr[i] < shortestLength.length){
                shortestLength = arr[i];
            }
        }
    }
    return shortestLength;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'