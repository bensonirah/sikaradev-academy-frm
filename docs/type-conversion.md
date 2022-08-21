# Type conversion

```javascript
Number('3.14') // returns 3.14
Number(' ') // returns 0
Number('') // returns 0
Number('99 88') // return NaN
parseFloat()
parseInt()
```

## The **unary** + **operator**

```javascript
let y = '5' // y is a string
let x = +y // x is a number

let a = 'John' // y is a string
let b = +y // x is a number (NaN)
```

## Converting Numbers to Strings

```javascript
String(x) // returns a string from a number variable x
String(123) // returns a string from a number literal 123
String(100 + 23) // returns a string from a number from an expression

x.toString()(123)
  .toString()(100 + 23)
  .toString()
```

## Converting Dates to Numbers

```javascript
d = new Date()
Number(d)
// The same as the above
d = new Date()
d.getTime()
```

## Converting Dates to Strings

```javascript
String(Date())
Date().toString()
```

## Converting Booleans to Strings

```javascript
String(false) // returns "false"
String(true) // returns "true"

// or

false.toString() // returns "false"
true.toString() // returns "true"
```

## Automatic Type Conversion

```javascript
5 + null // returns 5         because null is converted to 0
'5' + null // returns "5null"   because null is converted to "null"
'5' + 2 // returns "52"      because 2 is converted to "2"
'5' - 2 // returns 3         because "5" is converted to 5
'5' * '2' // returns 10        because "5" and "2" are converted to 5 and 2
```

## Automatic String Conversion

```javascript
document.getElementById('demo').innerHTML = myVar

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"
```
