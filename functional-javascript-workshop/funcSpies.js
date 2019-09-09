function Spy(obj, method) {
  let spy = {
    count: 0,
    args: []
  };

  let original = obj[method];

  obj[method] = function() {
    let args = [].slice.apply(arguments);
    spy.count++;
    spy.args.push(args);
    return original.apply(obj[method], args);
  };

  return spy
}

module.exports = Spy

var spy = Spy(console, 'error')
    
console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3