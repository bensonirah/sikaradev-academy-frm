export default class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  render() {
    console.log("Info User:");
    console.log(`Email : ${this.email}`);
    console.log(`Name : ${this.name}`);
    console.log("\n");
  }
}

