function duckCount(...args) {
  return args.reduce((sum, elem) => {
    // console.log(elem, sum)
    if(Object.prototype.hasOwnProperty.call(elem, 'quack'))
      return ++sum;
    return sum;
  }, 0)
}

module.exports = duckCount

var notDuck = Object.create({quack: true})
var duck = {quack: true}

console.log(duckCount(duck, notDuck))
