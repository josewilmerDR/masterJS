// Write your function here !
/** 
function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
      return 0;
    } else {
      const sum = numbers.reduce((acc, curr) => acc + curr);
      return sum / numbers.length;
    }
  }
  */

function computeAverageOfNumbers(array){
    if(array.length === 0){
        return 0;
    }else{
        let sum = array.reduce((acc, val) => acc + val, 0);
        return sum / array.length;
    }
}
