let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return []
    }
    return obj[key].map((elem) => elem **2, 0);
}

/**
function getSquaredElementsAtProperty(obj, key) {
  // Your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else return obj[key].map(e => e * e);
}
 */
let output = getSquaredElementsAtProperty(obj, 'car');
console.log(output); // --> [4, 1, 25]