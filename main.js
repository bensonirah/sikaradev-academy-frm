// verify email

const verifyEmail = require("./lib/exo-1/email-validator");

// ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
const email = "person@company";
const response = verifyEmail(email);

console.log(response);
