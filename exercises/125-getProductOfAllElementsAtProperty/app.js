let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  // Verificar si la propiedad en el key dado es un array
  if (!Array.isArray(obj[key])|| obj[key].length === 0) {
    return 0;
  }
    
  // Calcular el producto de los elementos en el array
  let product = 1;
  for(let i of obj[key]){
    product *= i;
  }
  return product;
}

let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24