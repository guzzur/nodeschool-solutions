module.exports = function average(...args) {
  let sum = args.reduce((sum, val) => sum + val, 0);
  return sum / args.length;
};
