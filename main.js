const message = "regex101.com";
// pattern/modifier
const pattern = /([0-9]+)/;
const res = pattern.exec(message);
const index = res["index"];
console.log(res[1]);
