// Write your function here

function keep(arr, elem){
    const newArr = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === elem){
           newArr.push(arr[i]);
        }
    }
    if(newArr.length === 0){
        return [];
    }else{
        return newArr;
    }

}