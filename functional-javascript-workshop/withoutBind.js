var slice = Array.prototype.slice

function logger(namespace) {
  let rest = slice.call(arguments, 1)
  var log = function(){
    console.log.apply(console, [namespace, ...rest]);
  }
  return log;
}

module.exports = logger

// let debug = logger("DEBUG")
// debug('TEST')