function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] < smallestNumber) {
        smallestNumber = arr[i];
      }
    }
  }
  //Si la variable nunca se actaulizó, significa o que no hay valores numericos, o que no existen propiedades con valores inveriores a "infinity"
  if (smallestNumber === Infinity) {
    return 0;
  }
  return smallestNumber;

}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4