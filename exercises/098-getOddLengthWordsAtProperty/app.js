// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    // Verificar si la propiedad en la key dada es un array
    if (!Array.isArray(obj[key])) {
      return [];
    }
    
    // Crear un array vacío para almacenar las palabras con longitud impar
    const result = [];
    
    // Iterar sobre el array ubicado en la key dada
    for (let i = 0; i < obj[key].length; i++) {
      // Verificar si el elemento actual es una palabra con longitud impar
      if (typeof obj[key][i] === 'string' && obj[key][i].length % 2 !== 0) {
        result.push(obj[key][i]);
      }
    }
    
    // Retornar el resultado
    return result;
  }
  