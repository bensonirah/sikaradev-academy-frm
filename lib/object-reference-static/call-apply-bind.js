// call (reuse method of an existing object)
const user = {
  name: "bensonirah",
  email: "bensonirah@gmail.com",
  debug: function () {
    return this.name + " " + this.email;
  },
};

console.log(user.debug());

// Method invokation using call builtin method

const admin = {
  name: "devlab",
  email: "admin@devlab.io",
};

console.log(user.debug.call(admin)); // can use with argument
// With apply
console.log(user.debug.apply(admin));

// apply (take sarguments as an array) vs call (takes argument separately)

// with bind

const debug = user.debug.bind(admin);

console.log(debug());
