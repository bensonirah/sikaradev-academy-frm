function onlyUnique(streams) {
  const duplicate = {};
  for (let index = 0; index < streams.length; index++) {
    let k = streams[index];
    duplicate[k] = duplicate[k] != undefined ? duplicate[k] + 1 : 1;
  }
  const response = Object.entries(duplicate)
    .filter(([k, v]) => v == 1)
    .map((v) => Number.parseInt(v[0]));
  return response;
}

module.exports = onlyUnique;
