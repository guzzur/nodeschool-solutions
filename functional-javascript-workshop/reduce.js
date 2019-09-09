function countWords(inputWords) {
  return inputWords.reduce(function(fruitsCount, currentFruit){
    if(typeof fruitsCount[currentFruit] !== "undefined"){
      fruitsCount[currentFruit]++; 
      return fruitsCount;
    } else {
        fruitsCount[currentFruit]=1; 
        return fruitsCount;
    }
  }, {});
}

console.log(countWords(['a', 'AA', 'A', 'AA', 'AA', 'AAA', 'a', 'a', 'a', 'a']))

module.exports = countWords