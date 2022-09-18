// Objects
/* let user = Object(); // "object constructor syntax"
let userTwo = {}; // "object literal syntax "
 */
// Literals and properties

let user = {
    name: "John",
    age: 30,
    "likes birds": true,
  };
  
  // Delete property
  
  // delete user.age
  // delete user.["likes birds"]
  
  // Access properties
  
  // user.name => will produce "John"
  // user.likes birds => will produce an error
  
  // Computed properties
  
  let fruit = "apple";
  
  /* let bag = {
    [fruit]: 5,
  }; */
  
  // Use complex expression
  let bag = {
    [fruit + "Computer"]: 5,
  };
  
  // Property value shorthand
  
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let pUser = makeUser("John", 30);
  
  // Combine shorthands and normal properties in the same object
  let name = "John";
  let otherUser = {
    name,
    age: 30,
  };
  
  // Properties limitation
  let obj = {
    for: 1,
    let: 2,
    return: 3,
  };
  
  /* let obj = {
    0: "test" // same as "0": "test"
  }; */
  
  /* let obj = {};
  obj.__proto__ = 5; // assign a number
  console.log(obj.__proto__); */
  
  // Property existence test "in" operator
  
  /* let user={}
  user.noSuchProperty===undefined */
  
  // "key" in user
  
  // The for in loop
  
  // Ordered like an object
  
  let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    // ..,
    1: "USA",
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
  