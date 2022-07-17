function mostCommonCharacter(message) {
  let occurences = "";
  for (var index = 0; index < message.length - 1; index++) {
    if (message[index] == message[index + 1]) {
      if (occurences.indexOf(message[index + 1]) < 0) {
        occurences += message[index + 1];
      }
    }
  }
  return occurences.split("").sort().shift() || "";
}

module.exports = mostCommonCharacter;
