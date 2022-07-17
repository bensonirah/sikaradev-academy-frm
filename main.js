const onlyUnique = require("./lib/exo-2/only-uniq");

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5)) // [2, 5]
const streams = [1, 1, 2, 3, 3, 4, 4, 5];
const response = onlyUnique(streams);

console.log(response);
