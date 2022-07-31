function formatDate() {
  const dateInputFormat = [
    { type: "ISO Date", example: "2015-03-25" }, // (The International Standard),
    { type: "Short Date", example: "03/25/2015" },
    { type: "Long Date", example: "Mar 25 2015" }, //  or "25 Mar 2015"
  ];

  /* 
    JavaScript Date Output
    Sat Jul 30 2022 16:15:52 GMT+0300 (East Africa Time)
    JavaScript ISO Dates
    --------------------------------------------------
    Complete Date
    const d = new Date("2015-03-25");
    ----------------------------------------------------
    ISO Dates (Year and Month)
    const d = new Date("2015-03");
    ----------------------------------------------------
    ISO Dates (Only Year)
    const d = new Date("2015");
    -----------------------------------------------------
    ISO Dates (Date-Time)
    const d = new Date("2015-03-25T12:00:00Z");
    ----------------------------------------------------
    JavaScript Short Dates
    const d = new Date("03/25/2015");
    ---------------------------------------------------
    Warnings!
    const d = new Date("2015-3-25"); // YYYY-MM-DD
    ----------------------------------------------------
    JavaScript Long Dates: "MMM DD YYYY"
    const d = new Date("Mar 25 2015");
    const d = new Date("25 Mar 2015");
    const d = new Date("January 25 2015");
    const d = new Date("Jan 25 2015");
    const d = new Date("JANUARY, 25, 2015");
    -----------------------------------------------------
    Date Input - Parsing Dates (Date.parse()) convert to milliseconds
    let msec = Date.parse("March 21, 2012");
    Convert it back to date
    let msec = Date.parse("March 21, 2012");
    const d = new Date(msec);
*/
  const ms = Date.parse("Mar 25 2015");
  console.log(new Date(ms));
}

module.exports = formatDate;
