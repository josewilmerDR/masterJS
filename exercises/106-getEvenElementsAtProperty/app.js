
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
      return []
    }else{
      return obj[key].filter((element) => element % 2 === 0)
    }
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]