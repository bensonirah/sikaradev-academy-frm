function printNumber() {
  // one type of number: nombre réel
  // float, int, double => number (-,+,0.5,)
  // let x = 3.14; // decimal number
  // let y = Math.sqrt(3); // entier number
  // console.log(typeof y);
  // scientific notation
  // let x = 123e5
  // let y = 123e-5 // 0.00123
  // console.log(y)
  // To solve this issue
  // let sum = 0.2 * 10 + 0.1 * 10;
  // console.log(sum / 10);
  // console.log(sum  / 10);

  // Adding Numbers and Strings

  // Number + Number => Number
  // let addition = 10 + 5;
  // console.log(typeof addition);
  // String + String => String (concatenation)
  // let add2String = "10" + "5";
  // console.log(typeof add2String);
  // let add2StringOne = "5" + 10;
  // console.log(add2StringOne);
  // String + Number => String (concatenation)
  // Number + String => String (concatenation)

  // Example.1:
  // let x = 10;
  // let y = 20;
  // let z = "The result is: " + x + y; // The result is: 30 KO
  // console.log(z);
  // Example.2:
  // let x = 10;
  // let y = 20;
  // let z = "30";
  // let result = x + y + z;
  // console.log(result);

  // Numeric String

  // Example.1
  // let x = "100";
  // let y = "10";
  // let z = x / y;
  // console.log(z);
  // Example.2
  // let x = "100";
  // let y = "10";
  // let z = x * y;
  // console.log(z);
  // Example.3
  // let x = "100";
  // let y = "10";
  // let z = x - y;
  // console.log(z);
  // Does not work
  // let x = "100";
  // let y = "10";
  // let z = x + y;

  // console.log(z);

  // NaN
  // let x = 100 / "Apple";
  // let x = 100 / "10";
  // isNaN(x);

  // console.log(typeof x);

  // let x = NaN;
  // let y = 5;
  // let z = x + y;
  // NaN + Number => NaN
  // console.log('Resultat: ' + z);
  // let x = NaN;
  // let y = "5";

  // let z = x + y;
  // console.log(z);
  // typeof NaN

  // Infinity
  // let x = 2 / 0;
  // let y = -2 / 0;
  // typeof Infinity;
  // console.log(typeof Infinity);

  // Numeric constant => Hexadecimal preceded by 0x
  // let x = 0xff;
  // console.log(x);
  /* let myNumber = 10;
  console.log(
    myNumber.toString(2)
  ); */
  // myNumber.toString(16);
  // myNumber.toString(12);
  // myNumber.toString(10);
  // myNumber.toString(8);
  // myNumber.toString(2);

  // Javascript Number as Objects

  /* let x = 123;
  let y = new Number(123); */

  // value equality ==
  // let x = 500
  // let y = new Number(500)
  // console.log(x === y);
  // value and type equality = = =
  // Js uncomparable object
  // new Number(500) == new Number(500)
  // console.log(new Number(500) == new Number(500));
  console.log(new Number(500) === new Number(500));
}

module.exports = printNumber;
