function removeProperty(obj, key) {
  // your code here
  if(obj.hasOwnProperty(key)){
    delete obj[key];
    return true;
  }else{
    return false;
  };
};