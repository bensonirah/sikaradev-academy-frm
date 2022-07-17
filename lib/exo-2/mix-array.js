function mix(first, second) {
  const firstLength = first.length;
  const secondLength = second.length;
  const results = [];

  if (firstLength == secondLength) {
    for (let index = 0; index < first.length; index++) {
      results.push(first[index]);
      results.push(second[index]);
    }
    return results;
  }

  if (firstLength < secondLength) {
    for (let index = 0; index < secondLength; index++) {
      if (first[index] != undefined) results.push(first[index]);
      results.push(second[index]);
    }
    return results;
  }
  if (secondLength < firstLength) {
    for (let index = 0; index < secondLength; index++) {
      results.push(first[index]);
      if (second[index] != undefined) results.push(second[index]);
    }
    return results;
  }
}

module.exports = mix;
