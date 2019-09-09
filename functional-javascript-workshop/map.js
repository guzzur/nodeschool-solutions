function doubleAll(numbers) {
  var result = []
  // for (var i = 0; i < numbers.length; i++) {
  //   result.push(numbers[i] * 2)
  // }
  numbers.map((elem, index) => {
    result.push(elem * 2)
  })

  return result
}

module.exports = doubleAll