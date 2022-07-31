function debugDate() {
  // Creating Date Objects
  const d = new Date("October 13, 2014 11:13:00"); // UTC => Universal Time Coordinate or GMT (Greenwich Mean Time)
  console.log(d);
  /* 
    
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    new Date(milliseconds)
    new Date(date string) 
    [0,11] 12
    ex1 overflow month
    const d = new Date(2018, 11, 24, 10, 33, 30, 0); => January = 0 and Decembrer = 11 +4 => 2018 => 2019 + 
    const d = new Date(2019, 3, 24, 10, 33, 30);
    ex2: overflow day
    const d = new Date(2018, 5, 35, 10, 33, 30);
    const d = new Date(2018, 6, 5, 10, 33, 30);
    -------------------------------
    Using 6,4,3, or 2 Numbers

    const d = new Date(2018, 11, 24, 10, 33, 30);
    const d = new Date(2018, 11, 24, 10, 33);
    const d = new Date(2018, 11, 24, 10);
    const d = new Date(2018, 11, 24);
    const d = new Date(2018, 11);
    const d = new Date(2018); Do not do this
    -------------------------------
    Previous Century: One and two digit years will be interpreted as 19xx
    const d = new Date(99, 11, 24);
    const d = new Date(9, 11, 24);
    --------------------------------
    new Date (dateString)
    const d = new Date("October 13, 2014 11:13:00");
    -----------------------------------------------

    new Date(milliseconds): creates a new date object as zero time plus milliseconds (from 01 January 1970)

    const d = new Date(0);
    */
}

module.exports = debugDate;
