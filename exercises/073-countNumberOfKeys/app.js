let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    let count = 0; 
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            count ++;
        }
    }
    return count;
}
console.log(countNumberOfKeys(obj))
