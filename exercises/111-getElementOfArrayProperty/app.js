let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 || index < 0 || index > obj[key].length){
        return undefined;
    }
    return obj[key][index];

}

/**
function getElementOfArrayProperty(obj, key, index) {
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0 || index < 0 || index >= obj[key].length) {
      return undefined;
    }
  
    return obj[key][index];
  }
*/