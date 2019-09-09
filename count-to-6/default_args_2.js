
let makeImportant = (text, times = text.length) => {
  return `${text}${"!".repeat(times)}`;
};

module.exports = makeImportant;

console.log(makeImportant('Felix', 10))