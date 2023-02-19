// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    if(!(Array.isArray(obj[key])) || obj[key].length == 0){
        return 0;
    }
    let sum = obj[key].reduce((acc, val) => acc + val, 0)
    return sum / obj[key].length;
}


/**
function getAverageOfElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    let sum = obj[key].reduce((acc, val) => acc + val, 0);
    return sum / obj[key].length;
}
 */