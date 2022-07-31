// Reverse string
/* let str = "hello";
let res = "";
let index = str.length - 1;
while (index >= 0) {
  res += str[index];
  index--;
} */

// First non consecutive

// const arr = [1, 2, 3, 4, 6, 7, 8];

// p,next => p==next-1
/* let index, p, next;
let l = arr.length;
index = 0;
while (index <= l - 1) {
  if (arr[index] != arr[index + 1] - 1) {
    next = arr[index + 1];
  }
  index++;
}
console.log(next); */

const currentDate = new Date();
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();
console.log(daysInMonth);
