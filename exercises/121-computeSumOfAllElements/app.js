function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((elem, val) => elem + val)
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6