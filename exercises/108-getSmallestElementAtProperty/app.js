let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
    return [];
  }
  let smallestElement = obj[key][0];
  for(let i = 1; i < obj[key].length; i++){
    if(obj[key][i] < smallestElement){
      smallestElement = obj[key][i];
    }
  }
  return smallestElement;
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1