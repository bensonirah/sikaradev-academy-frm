const logHelper = (message, element) =>
  console.log(`${message}: ${Boolean(element)}`);
function everyThingWithValueIsTrue() {
  const arrayOfValues = [100, 3.14, -15, "Hello", "false", 7 + 1 + 3.14];
  arrayOfValues.forEach((element) =>
    logHelper("Everything with value is", element)
  );
}

function everyThingWithoutValueIsFalse() {
  const arrayWihtouValues = [0, -0, "", null, false, NaN];
  arrayWihtouValues.forEach((element) =>
    logHelper("Everything without value is", element)
  );
}

module.exports = { everyThingWithValueIsTrue, everyThingWithoutValueIsFalse };
