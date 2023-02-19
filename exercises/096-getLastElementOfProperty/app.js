// Write your function here
function getLastElementOfProperty(obj, key){
    if(Array.isArray(obj[key]) ||obj[key] == 0 || obj.hasOwnProperty(key)){
        return obj[key][obj[key].length -1]
    }else{
        return undefined;
    }
    
}

//Solucion propuesta por chatGPT.
/**
 * function getLastElementOfProperty(obj, key) {
  // Verificar si el objeto no es nulo y si la key existe
  if (obj && obj[key] && Array.isArray(obj[key])) {
    // Retornar el último elemento del array en la key dada
    return obj[key][obj[key].length - 1];
  }
  // Si el objeto es nulo, la key no existe, o la propiedad no es un array, retornar undefined
  return undefined;
}

 */