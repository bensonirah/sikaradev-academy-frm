const reverseString = require("./reverse-string");

/**
 * This function should return a boolean value
 * @param {string} someString
 */
function isPalindrome(someString) {
  return someString == reverseString(someString);
}

module.exports = isPalindrome;
