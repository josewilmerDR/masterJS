let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj){
    for(let b in obj){
        if(typeof obj[b] === "number" && obj[b] > num){
            delete obj[b];
        }
    }
}

/**
 * function removeNumbersLargerThan(num, obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number" && obj[prop] > num) {
      delete obj[prop];
    }
  }
}
 */