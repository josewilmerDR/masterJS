let obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
    return [];
  }
  return obj[key].filter((element) => typeof element === "string" && element.length %2 == 0)
  /**
  return obj[key].filter(function(element) {
    return typeof element === "string" && element.length % 2 === 0;
  }) 
   */
}


let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']