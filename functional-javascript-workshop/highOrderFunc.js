function repeat(operation, num) {
  while(num-- > 0) {
    operation()
  }
}

// Do not remove the line below
module.exports = repeat