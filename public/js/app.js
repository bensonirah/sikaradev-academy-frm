"use strict";
function log() {
  var o = this;
  console.log(o);
}

console.log("The this keyword");
log();
