function removeFromBackOfNew(arr) {
  // your code here
  return arr.filter((element, index) => index !== arr.length - 1)  
}

/**
function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(0, -1);
  
}
 */