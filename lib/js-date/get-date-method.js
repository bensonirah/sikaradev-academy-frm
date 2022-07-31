function printGetDateMethod() {
  const currentDate = new Date();
  const dateMethods = [
    {
      method: "getFullYear()",
      example: currentDate.getFullYear(),
      description: "Get the year as a four digit number (yyyy)",
    },
    {
      method: "getMonth()",
      example: currentDate.getMonth(),
      description: "Get the month as a number (0-11)",
    },
    {
      method: "getDate()",
      example: currentDate.getDate(),
      description: "Get the day as a number (1-31)",
    },
    {
      method: "getHours()",
      example: currentDate.getHours(),
      description: "Get the hour (0-23)",
    },
    {
      method: "getMinutes()",
      example: currentDate.getMinutes(),
      description: "Get the minute (0-59)",
    },
    {
      method: "getSeconds()",
      example: currentDate.getSeconds(),
      description: "Get the second (0-59)",
    },
    {
      method: "getMilliseconds()",
      example: currentDate.getMilliseconds(),
      description: "Get the millisecond (0-999)",
    },
    {
      method: "getTime()",
      example: currentDate.getTime(),
      description: "Get the time (milliseconds since January 1, 1970)",
    },
    {
      method: "getDay()",
      example: currentDate.getDay(),
      description: "Get the weekday as a number (0-6)",
    },
    {
      method: "Date.now()",
      example: Date.now(),
      description: "Get the time. ECMAScript 5.",
    },
  ];
  // For UTC Date use UTC keyword ex: getUTCDay()

  console.table(currentDate);

  // +3 UTC -
}

module.exports = printGetDateMethod;
