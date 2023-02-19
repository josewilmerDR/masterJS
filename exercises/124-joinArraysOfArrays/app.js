function joinArrayOfArrays(arr) {
  // your code here
  let result = []
  for(let i = 0; i < arr.length; i++){
    result = result.concat(arr[i])
  }
  return result;
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']