import User from "./src/Entity/User.js";
// class

/* const henry = new User("henry@gmail.com", "Henry");
const doe = new User("john-doe@gmail.com", "John Doe");

henry.render();
doe.render(); */
// module

// json
const obj = {
  url: "http://localhost:300/users",
  isAdmin: true,
};
const jsonString = JSON.stringify(obj);
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.url);
// debugging with console.log()
// correction TD (event manager)
// TODO: Add event
// TODO: Remove event
// TODO: List event
