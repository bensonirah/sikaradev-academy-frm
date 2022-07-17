function findDuplicate(someString, repeatTimes) {
  let datas = someString.split(""); // transform string into array of characters
  const duplicate = {};
  while (datas.length > 0) {
    let key = datas.pop();
    duplicate[key] = duplicate[key] == undefined ? 1 : duplicate[key] + 1;
  }
  const response = Object.entries(duplicate)
    .filter(([key, value]) => value === repeatTimes)
    .map(([k, v]) => k);
  return response;
}

function findDuplicateBis(someString, repeatTimes) {
  const duplicate = {};
  var results = [];
  for (let index = 0; index < someString.length; index++) {
    if (someString.charAt(index) == someString.charAt(index + 1)) {
      let key = someString.charAt(index);
      duplicate[key] = duplicate[key] == undefined ? 2 : duplicate[key] + 1;
    }
  }
  for (let k in duplicate) {
    if (duplicate[k] == repeatTimes) {
      results.push(k);
    }
  }
  return results;
}

module.exports = { findDuplicate, findDuplicateBis };
