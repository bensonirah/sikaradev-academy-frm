function shuffleArray(values = []) {
  let response = [];
  while (values.length > 0) {
    let index = Math.floor(Math.random() * values.length);
    response.push(values[index]);
    values = values.filter((v, i) => values[index] != v);
  }
  return response;
}

module.exports = shuffleArray;
