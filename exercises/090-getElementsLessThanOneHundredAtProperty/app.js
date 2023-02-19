// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if(!(Array.isArray(obj[key]))){
        return []
    }else{
        return obj[key].filter(elem => elem < 100)
    }
}