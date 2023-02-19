function sumDigits(num) {
    // your code here
    let strNum = num.toString();
    let aux = 0;
    let result = 0;
    while (strNum[aux] != undefined) {
      if (strNum[aux] === '-') {
        let aux2 = strNum[aux] + strNum[aux + 1];
        aux2 = parseInt(aux2);
        result += aux2;
        aux += 2;
      } else {
        result += parseInt(strNum[aux]);
        aux++;
      }
    }
    return result;
  }
  let output = sumDigits(-316);
  console.log(output); // --> 4
  
//EXPLICACION DETALLA DE LA FUNCION.
  function sumDigits(num) {
    // Convertir el número a un string
    let strNum = num.toString();
    // Inicializar variables para el índice y la suma
    let aux = 0;
    let result = 0;
    // Mientras no lleguemos al final del string
    while (strNum[aux] != undefined) {
      // Si el dígito actual es un signo negativo
      if (strNum[aux] === '-') {
        // Obtener los dos caracteres siguientes (el signo y el dígito)
        let aux2 = strNum[aux] + strNum[aux + 1];
        // Convertirlos a un número y sumarlos (el signo se mantiene)
        aux2 = parseInt(aux2);
        result += aux2;
        // Avanzar el índice en dos para saltar el signo y el dígito
        aux += 2;
      } else {
        // Si el dígito actual no es un signo negativo,
        // convertirlo a un número y sumarlo a la suma acumulada
        result += parseInt(strNum[aux]);
        // Avanzar el índice en uno para pasar al siguiente dígito
        aux++;
      }
    }
    // Retornar la suma total
    return result;
  }
  