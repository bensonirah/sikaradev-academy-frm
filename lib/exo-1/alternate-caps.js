const isUpperCase = (c) => c == c.toUpperCase();
function alternateCaps(someString) {
  let response = someString[0];
  let isUC = isUpperCase(someString[0]);
  for (let index = 1; index <= someString.length - 1; index++) {
    if (someString[index] != " ") {
      if (isUC) {
        response += someString[index].toLowerCase();
        isUC = false;
      } else {
        response += someString[index].toUpperCase();
        isUC = true;
      }
    } else {
      response += someString[index];
    }
  }
  return response;
}

module.exports = alternateCaps;
