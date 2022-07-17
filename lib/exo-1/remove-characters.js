
/**
 * Remove a specific character without using replace method
 * @param {string} someString 
 * @param {array} charactersToRemove 
 * @returns 
 */
function removeCharacters(someString, charactersToRemove) {
  let response = "";
  for (let c of someString) {
    if (charactersToRemove.includes(c)) {
      response += "";
    } else {
      response += c;
    }
  }
  return response;
}

module.exports = removeCharacters;
