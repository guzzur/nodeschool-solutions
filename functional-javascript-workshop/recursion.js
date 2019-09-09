function reduce(arr, fn, initial) {
  if(!arr || !arr.length) return initial;

  var head = arr[0]
  var tail = arr.slice(1)

  // console.log(fn(initial, head))

  return reduce(tail, fn, fn(initial, head))
}

console.log(reduce(['a', 'AA', 'A', 'AA', 'AA', 'AAA', 'a', 'a', 'a', 'a'], function(fruitsCount, currentFruit) {
  if(typeof fruitsCount[currentFruit] !== "undefined"){
    fruitsCount[currentFruit]++; 
    return fruitsCount;
  } else {
      fruitsCount[currentFruit]=1; 
      return fruitsCount;
  }
}, {}))

module.exports = reduce