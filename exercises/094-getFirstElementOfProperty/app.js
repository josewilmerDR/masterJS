// Write your function here
function getFirstElementOfProperty(obj, key){
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key])){
       return obj[key][0]
    }else{
        return undefined
    }
}