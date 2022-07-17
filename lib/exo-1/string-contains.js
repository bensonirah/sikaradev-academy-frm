//  Check if a string contains a specific string without using indexOf method
function strContains(someString, search) {
  return someString.replace(search, "").length != someString.length;
}

module.exports = strContains;
