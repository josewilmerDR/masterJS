function getStringLength(string) {
    // your code here
    return string.length;
}

let output = getStringLength('hello');
console.log(output); // --> 5

//Alternativa con substring()
/**
 * function getStringLength(str) {
  let length = 0;
  while (str.substring(length, length + 1) !== '') {
    length++;
  }
  return length;
}

 
//ALTERNATIVA CON SLICE

function getStringLength(str) {
    let length = 0;
    while (str.slice(length, length + 1) !== '') {
      length++;
    }
    return length;
  }
  */