// Home made iterable
// Factory
/* function myNumbers() {
  let n = 0; // private attribute
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

const iterNumber = myNumbers();
console.log(iterNumber.next());
console.log(iterNumber.next());
console.log(iterNumber.next());
console.log(iterNumber.next()); */

// Downside of that implementtation : can not interable with for .. of loop

// An iterable should be iterated over with code : for (const x of iterable) {}

const myNumbers = {};

// Make it iterable
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next: function () {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

// Iterate over it
/* for (n of myNumbers) { // The Symbole.iterator is called automatically by fo .. of
  console.log(n);
} */

// But we can also do it manually

/* let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
} */
