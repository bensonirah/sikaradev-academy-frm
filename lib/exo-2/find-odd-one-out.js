function findOddOneOut(entries = []) {
  const duplicate = {};
  while (entries.length > 0) {
    let key = entries.pop();
    duplicate[key] = duplicate[key] == undefined ? 1 : duplicate[key] + 1;
  }
  const [response] = Object.entries(duplicate).filter(([k, v]) => v == 1);
  return response[0] != undefined ? response[0] : "";
}

module.exports = findOddOneOut;
