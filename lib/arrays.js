function printArrays() {
  const cars = ["Saab", "Volvo", "BMW"];
  /* const cars = [];
  cars[0] = "Saab";
  cars[1] = "Volvo"; */

  //   const cars = new Array("Saab", "Volvo", "BMW");

  // Why use arrays?
  // Creating an array
  // Using the JavaScript Keyword new
  // Accessing Array Elements
  //   console.log(cars[1]);
  // Array Properties and Methods

  // Looping Array Elements
  //   for (let index = 0; index < cars.length; index++) {
  //     console.log(cars[index]);// cars[2]
  //   }
  // <object>.methodName()
  // anonymous function
  /* const iterate = function (val) {
    console.log(val);
  };
  // named function
  function loop(val) {
    console.log(val);
  }
  // Arrow function
  const arrowFunc = (val) => {
    console.log(val);
  };
  const arrowFn = (v) => console.log(v);

  cars.forEach(arrowFn); */
  // Adding Array Elements
  /* console.log(cars.length);
  cars[cars.length] = "Renault";
  cars[cars.length] = "Mercedece"; // push
  console.log(cars);
  // Associative Arrays
  cars[0] = "Kia"; // object
  console.log(cars); */
  // Array =! Object => (numbered indexes, named indexes)

  // How to recognize an Array
  // typeof $vars, Array.isArray($vars), $vars instanceof Array
  /* console.log(Array.isArray(cars));
  console.log(cars instanceof Array); */
  // Arrays method .toString(),.join(),.pop(),.push(),.shift(),.unshift(),.concate(),.splice(),.slice()
  // .sort() // in string manner to fix this use function(a,b) {return a-b},.reverse()

  console.log(cars);
  //   console.log(cars.toString());
  // console.log(cars.join('*'))
  /* console.log(cars.pop());
  console.log(cars); */
  //   cars.push("Mercedece");
  /* console.log(cars.shift());
  console.log(cars); */
  /* console.log(cars.unshift("Mercedece", "Mazda"));
  console.log(cars.push("Citroen")); */
  //   console.log(cars.concat(["Mercedece", "Mazda"]));
  /*  console.log(cars.splice(1, 2));
  console.log(cars); */
  /* console.log(cars.slice(0, 2));
  console.log(cars); */
  let numbers = [8, 4, 7, 5, 9];
  /*console.log(numbers);
  console.log(numbers.reverse()) */
  //   console.log(numbers.sort((a, b) => b - a));
  // Mutation array $vars[index]=$value delete $vars[index] => undefined value
  /*  delete cars[0];
  console.log(cars[0]) */
  // Array iteration .forEach(), .map(),.filter(),.reduce(),.every(),.some(),.indexOf(),.find(),.findIndex()
  // Array.from("ABCD"),Array.keys(),.entries(),.includes()
  /* console.log(cars.map((v, index) => index + " " + v));
  console.log(cars); */
  /* let doubleNumber = numbers.map((v) => v * 2);
  console.log(numbers);
  console.log(doubleNumber);
  console.log(numbers); */
  /*  console.log(numbers.filter((v) => v % 2 == 0));
  console.log(numbers); */

  /*  const somme = numbers.reduce(function (p, c) {
    return p + c;
  }, 0);
  console.log(numbers);
  console.log(somme);
  console.log(numbers); */

  /* const multiply = numbers.reduce(function (p, c) {
    return p * c;
  },1);
  console.log(numbers);
  console.log(multiply);
  console.log(numbers); */

  //   console.log(numbers.some((v) => v < 0)); // e1>0 || e2>0 || .... en>0
  //   console.log(numbers.indexOf(8, 2));
  //   console.log(numbers.find((n) => n % 2 == 0));
  //   console.log(numbers.findIndex((n) => n % 2 == 0));
  /* const keys = numbers.keys();

  console.log(numbers.keys());

  for (var k of keys) {
    console.log(k);
  } */

  /* const entries = numbers.entries();

  

  for (var e of entries) {
    console.log(e);
  } */

  console.log(numbers.includes(7));

  // Array const cars = ["Saab", "Volvo", "BMW"]; can not be reassigned, it define a constant  ref to an a
  // array so element can be reassigned
  // Assigned when declared does not work
  // Const Block scope but no for var

  // Redeclaring Arrays with var => allowed

  // Redeclaring Arrays with const in the same block  is not allowed
}

module.exports = printArrays;
