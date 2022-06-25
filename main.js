/*const user = {
  name: "bensonirah",
  email: "bensonirah@gmail.com",
};*/
// <instance>.attribute or <instance>['attribute']
/*const user = new Object();
user.name = "bensonirah";
user.email = "bensonirah@gmail.com";*/

 let message = "Bonjour";

function User(name, email) {
  let message = "Hello";
  this.name = name;
  this.email = email;
  this.detail = () => {
    console.log(this.name + " " + this.email);
    console.log(message);
  };
}

const user = new User("bensonirah", "bensonirah@gmail.com");

/*console.log(user.name);
console.log(user["name"]);*/
user.detail();
console.log(message);
