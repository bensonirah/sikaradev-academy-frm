function orderBySum(entries = []) {
  return entries.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });
}

module.exports = orderBySum;
