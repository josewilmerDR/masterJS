function removeStringValuesLongerThan(num, obj) {
  // your code here
  for(let prop in obj){
    if(typeof obj[prop] === "string" && obj[prop].length > num){
      delete obj[prop]
    }
  }
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
