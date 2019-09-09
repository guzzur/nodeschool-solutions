
let cleanUnsafe = (text) => {
  return text.replace("'", '&apos;').replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt;').replace('&', '&amp;')
}

let buildTemplate = (username, comment) => {
  return `<b>${cleanUnsafe(username)}</b>: "${cleanUnsafe(comment)}"`
}

module.exports = buildTemplate;

// console.log(buildTemplate('guzzur&', "<d>test>>"))