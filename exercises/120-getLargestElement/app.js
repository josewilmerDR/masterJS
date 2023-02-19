function getLargestElement(arr) {
  // your code here
  if(arr.length < 1) return 0;

  let largestElement = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(largestElement < arr[i]){
      largestElement = arr[i]
    } 
  }
  return largestElement;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;