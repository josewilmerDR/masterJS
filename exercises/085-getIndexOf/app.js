// Write your function here
function getIndexOf(char, string) {
    /*
Dado un caracter y un string, retorna la primera posición de dicho caracter en dicho string.
Si el caracter no se encuentra en el string, retorna -1.
*/
    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            return i;
        }
    }
    return -1;
}