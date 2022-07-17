function extractQuote(someString) {
  const beginQuote = someString.indexOf('"');
  const endQuote = someString.indexOf('"', 1);
  const quoteFirst = someString.slice(beginQuote + 1, endQuote);
  let author = someString.slice(endQuote + 1);
  author = author.slice(author.indexOf("-") + 1);
  return [quoteFirst, author.trim()];
}
module.exports = extractQuote;
