let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return []
    }
    let largestElement = obj[key][0]
    for(let i = 1; i < obj[key].length; i++){
      if(obj[key][i] > largestElement){
        largestElement = obj[key][i]
      }
    } 
    return largestElement;
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4