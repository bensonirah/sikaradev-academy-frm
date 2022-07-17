function splitByOddEndEven(streams = []) {
  const evens = [];
  const odds = [];
  let current;
  for (let index = 0; index < streams.length; index++) {
    current = streams[index];
    if (current % 2 == 0 && !evens.includes(current)) {
      evens.push(current);
    }
    if (current % 2 != 0 && !odds.includes(current)) odds.push(current);
  }
  return [evens.sort((a, b) => a - b), odds.sort((a, b) => a - b)];
}

module.exports = splitByOddEndEven;
