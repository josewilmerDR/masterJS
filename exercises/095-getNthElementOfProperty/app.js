// Write your function here
function getNthElementOfProperty(obj, key, n) {
    // Verificamos si la propiedad existe en el objeto y si su valor es un array
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      // Devolvemos el elemento nth del array
      return obj[key][n];
    } else {
      // Si la propiedad no existe o su valor no es un array, devolvemos undefined
      return undefined;
    }
  }
  
  const obj = {
    a:[1, 3, 4, 5, 6, 7, 2, 34, 23, 45],
    b:"No soy un arreglo"
}
  console.log(getNthElementOfProperty(obj, "a", 3))