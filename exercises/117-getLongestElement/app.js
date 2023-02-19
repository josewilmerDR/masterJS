function getLongestElement(arr) {
    // your code here
    let aux = '';
    if (arr.length < 1) return '';
    for (let e of arr) {
        //Si el numero de caracteres de "e" es mayor al numero de racateres
        //de aux, aux = e. Esta compracion se realizará tantas veces haya elementos.
      if (e.length > aux.length) aux = e;
    }
    //Si lo anterior no se cumple, entonces retornar el valor actual de "aux" que previamente ya ha sido igualdado a "e".
    return aux;
  }
  let output = getLongestElement(['one', 'two', 'three']);
  console.log(typeof ''); // --> 'three'
  

