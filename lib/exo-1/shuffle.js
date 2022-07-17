function shuffle(someString) {
  let characters = someString.split("");
  let response = "";
  while (characters.length > 0) {
    const index = Math.floor(Math.random() * characters.length);
    response += characters[index];
    characters = characters.filter((v, i) => index != i);
  }
  return response;
}

module.exports = shuffle;
