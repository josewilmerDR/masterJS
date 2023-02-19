// Write your function here
function select(array, object) {
    /*
    Dado un array y un objeto, retorna un nuevo objeto cuyas keys deben estar presentes en el array y el objeto dado.
    Si las keys están presentes en el array dado, pero no en el objeto dado, debería ignorarlas.
    No modifica el objeto pasado.
    */
   let result = {}
   for(let key of array){
    if(key in object){
        result[key] = object[key];
    }
   }
   return result;
}
