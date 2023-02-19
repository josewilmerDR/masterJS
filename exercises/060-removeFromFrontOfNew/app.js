function removeFromFrontOfNew(arr) {
    // your code here
    //return arr.slice(1)
    //return arr.slice(1, arr.length)
    return arr.filter((element, index) => index !== 0)
    
}