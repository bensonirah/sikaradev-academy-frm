function vowelOrConsonate(someString, position) {
  const vowels = ["a", "e", "i", "o", "u"];
  const p = position > 0 ? position - 1 : 0;
  return vowels.includes(someString.charAt(p)) ? "vowel" : "consonant";
}

module.exports = vowelOrConsonate;
