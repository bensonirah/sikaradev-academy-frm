function User(name) {
  this.name = name;
}

User.prototype.log = function () {
  console.log(this.name);
};
let user = new User("bensonirah");
user.log();
