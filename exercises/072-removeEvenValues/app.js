function removeEvenValues(obj) {
    // your code here
    for(let prop in obj){
        if(obj[prop] % 2 == 0){
            delete obj[prop]
        }
    }
}