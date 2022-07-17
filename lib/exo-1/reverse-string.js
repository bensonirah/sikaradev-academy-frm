/**
 *
 *
 * @param {string} someString The input string
 */
function reverseString(someString) {
  let l = someString.length - 1;
  let response = "";
  while (l >= 0) {
    response += someString[l];
    l--;
  }
  return response;
}

module.exports = reverseString;
