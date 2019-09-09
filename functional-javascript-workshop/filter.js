function getShortMessages(messages) {
  let short = messages.filter((elem) => elem.message.length < 50)
  short = short.map(elem => elem.message)
  return short;
}

console.log(getShortMessages([
  {message: 'hjkgfdhjkl;jhgffhjklkjhgfdfhjklhgf'},
  {message: 'hjkgfdhjkl'},
  {message: 'hjkgfdhjkl;jhgffhjklkjhgfdfhjklhgf'},
  {message: 'hjkgfdhlkjhgfcvbvnjhkuyhgjkuyjhgjkvbjhujhjhkjhbjhkhjbjhujhbj'},
  {message: 'bjhkuyhgjgythfgcvhbgjhvbjgh'},
]))

module.exports = getShortMessages