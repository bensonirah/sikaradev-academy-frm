const sortString = require("./sort-string");

function isOrderedAlphabetically(someString, reverseOrder) {
  if (!reverseOrder) {
    return someString == sortString(someString, reverseOrder);
  }
  return someString == sortString(someString, reverseOrder);
}

module.exports = isOrderedAlphabetically;
