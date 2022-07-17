function smallestAndLargestNumber(someArray) {
  const result = someArray.sort((a, b) => a - b);
  return [result.shift(), result.pop()];
}

module.exports = smallestAndLargestNumber;
