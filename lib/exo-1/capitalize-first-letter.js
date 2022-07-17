function capitalizeFirstLetterOfEachWord(someString) {
  return someString
    .split(" ")
    .map((s) => {
      return s.length > 1
        ? s.charAt(0).toUpperCase() + s.slice(1)
        : s.charAt(0).toUpperCase();
    })
    .join(" ");
}

module.exports = capitalizeFirstLetterOfEachWord;
