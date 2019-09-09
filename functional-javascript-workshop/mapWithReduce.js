const exp = function arrayMap(arr, fn) {
  let retVal = []
  for(i = 0; i < arr.length; i++) {
    retVal.push(fn(arr[i]))
  }
  return retVal;
}

module.exports = exp;

console.log(
  exp([1,2,3,4,5,6], (elem) => {
    return elem * 2;
  })
)
