function setDateMethod() {
  const currentDate = new Date();
  const methods = [
    {
      method: "setDate()",
      example: currentDate.setDate(15),
      description: "Set the day as a number (1-31)",
    },
    {
      method: "setFullYear()",
      example: currentDate.setFullYear(2020),
      description: "Set the year (optionally month and day)",
    },
    {
      method: "setHours()",
      example: currentDate.setHours(21),
      description: "Set the hour (0-23)",
    },
    {
      method: "setMilliseconds()",
      example: currentDate.setMilliseconds(1000),
      description: "Set the milliseconds (0-999)",
    },
    {
      method: "setMinutes()",
      example: currentDate.setMinutes(30),
      description: "Set the minutes (0-59)",
    },
    {
      method: "setMonth()",
      example: currentDate.setMonth(11),
      description: "Set the month (0-11)",
    },
    {
      method: "setSeconds()",
      example: currentDate.setSeconds(15),
      description: "Set the seconds (0-59)",
    },
    {
      method: "setTime()",
      example: currentDate.setTime(1000),
      description: "Set the time (milliseconds since January 1, 1970)",
    },
  ];
  const otherDate = new Date();
  // console.table(methods);
  console.log(otherDate);
  otherDate.setTime(1000);
  otherDate.setMinutes(30);
  console.log(otherDate);
}
module.exports = setDateMethod;
