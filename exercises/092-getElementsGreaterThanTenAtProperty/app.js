// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    if(!(Array.isArray(obj[key]) && obj.hasOwnProperty(key))){
        return []
    }
    return obj[key].filter(elem => elem > 10)
}

/**
 * Propuesto por chatGTP
 * function getElementsGreaterThan10AtProperty(obj, key) {
  // Comprobamos si la key existe en el objeto y si es un array
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    // Filtramos los elementos del array que sean mayores a 10
    return obj[key].filter(element => element > 10);
  } else {
    // Si la key no existe o no es un array, devolvemos un array vacío
    return [];
  }
}

 */