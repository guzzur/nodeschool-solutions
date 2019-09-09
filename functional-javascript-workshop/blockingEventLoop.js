async function repeat(operation, num) {
  if (num <= 0) return
  operation()

  if (num % 10 === 0) {
	  setTimeout(function() {
	    repeat(operation, --num)
	  })
	} else {
	  repeat(operation, --num)
	}
}

module.exports = repeat

// let count = 0;
// function operation() {
//   for (var i = 0; i < 100000000; i++) {
//     // burn some CPU cycles
//   }
//   // count how many times this function was called
//   count++
//   console.log(count)
// }

// repeat(operation, 2000)