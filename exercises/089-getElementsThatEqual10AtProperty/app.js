// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    /*
    Dado un objeto y una key, retorna un array que contiene todos los elementos de un array ubicado en la key dada
    que sean iguales a 10.
    */
    if(!(Array.isArray(obj[key]))){
        return []      
    }
    return obj[key].filter(elem => elem === 10)
  }