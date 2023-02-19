let obj1 = {
  a: 1,
  b: 2
};
let obj2 = {
  b: 4,
  c: 3
};
function extend(obj1, obj2){
  for(let a in obj2){
    if(!(a in obj1)){
      obj1[a] = obj2[a]
    }
  }
}
  /**

function extend(obj1, obj2) {
  for (let prop in obj2) { //se recorre el objeto obj2
    if (!(prop in obj1)) { // evalúa que prop no esté en obj1. Si no está, le asigna a una nueva propieda en obj1, cada valor del obj2.
      obj1[prop] = obj2[prop]; //
    }
  }
  return obj1;
}

function extend(obj1, obj2) {
  for(let prop in obj2) {
    obj1[prop] = obj2[prop];
  }
  return obj1;
   
}
*/