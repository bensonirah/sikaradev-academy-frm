function debugDataType() {
  let size = 16;
  let firstName = "John";
  let lastName = "Doe";
  let user = { firstName: "John", lastName: "Doe" };
  console.log(user);
}
function debugConcept() {
  //let x = 16 + "Volvo";
  // let x = "16" + "Volvo";
  // let x = "Volvo" + 16;
  // let x = 16 + 4 + "Volvo";
  let x = "Volvo" + 16 + 4;
  console.log(x);
}

function debugDynamicType() {
  let x;
  x = 5;
  console.log(typeof x);
  x = "John";
  console.log(typeof x);
}

function debugString() {
  let carName = "Volvo XC60";
  let carName2 = "Volvo XC60"; // carName2 = ['V','o','l']
  console.log(carName[1]);
}

function debugBoolean() {
  let x = 5;
  let y = 5;
  let z = 6;
  console.log(x != y);
}

function debugArray() {
  const cars = ["Saab", "Volvo", "BMW", 5];
  console.log(cars.length);
}

function debugObject() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
}

function debugTypeof() {
  typeof "";
  typeof "John";
  typeof "John Doe";
}
function debugUndefinied() {
  let car;
  console.log(typeof car);
}
module.exports = {
  debugDataType,
  debugConcept,
  debugDynamicType,
  debugString,
  debugBoolean,
  debugArray,
  debugObject,
  debugTypeof,
  debugUndefinied,
};
