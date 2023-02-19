let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    for(let prop in obj){
        if(typeof obj[prop] === "number" && obj[prop] < num){
            delete obj[prop]
        }
    }
    // your code here
    
}
