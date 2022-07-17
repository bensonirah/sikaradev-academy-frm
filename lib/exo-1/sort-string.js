function sortString(someString, reverseOrder) {
  if (!reverseOrder) {
    return someString.split("").sort().join("");
  }
  return someString.split("").sort().reverse().join("");
}

module.exports = sortString;
