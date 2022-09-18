// Object references and copying

// copy of value
let message = "Hello";

let phrase = message;

// reference copy in object

/* let user = { name: "bensonirah" };
let admin = user; // copy the reference */

// Comparison by reference

/* let a = {};
let b = a;
console.log(a == b);
console.log(a === b);

let k = {};
let v = {};
console.log(k == v); */

// Cloning and marging, Object.assign

/* let user = {
  name: "John",
  age: 30,
}; */

/* let clone = {};
// first method
for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete"; // changed the data in it

console.log(user.name); */

// second method using Object.assign

// let clone = Object.assign({}, user);

// Nested cloning (be ware)

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

/* let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one */

// Use deep or structuredClone cloning to avoid that issue

let clone = structuredClone(user);

alert(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 50, not related

// PS:objects, arrays, primitive values (supported by structuredClone)
// circular reference (supported by structuredClone also)
// function property (not supported by structuredClone)
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

/* let clone = structuredClone(user);
console.log(clone.me === clone); // true */


