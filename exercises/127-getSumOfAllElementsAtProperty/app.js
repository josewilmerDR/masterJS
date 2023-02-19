let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 0){
        return 0
    }
    return obj[key].reduce((ele, val) => ele + val, 0);
    //return obj[key].reduce((acc, val) => acc + val, 0);
    // your code here
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13