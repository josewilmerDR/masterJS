function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }
  let porduct = 1;
   for(let i = 0; i < arr.length; i++){
    porduct = arr[i] * porduct;
    //prompt *   
  }
  return porduct;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

//propuesta con .reduce()

/**
 * function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

 */