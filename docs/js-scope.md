# Javascript Scope

## Bloc scope

- With **let** keyword

```javascript
{
  let x = 2
}
// x can not be used here
```

- With **var** keyword

```javascript
{
  var x = 2
}
// x can be used here
```

## Local scope

```javascript
// code here can NOT use carName

function myFunction () {
  let carName = 'Volvo'
  // code here CAN use carName
}

// code here can NOT use carName
```

## Function scope

```javascript
function myFunction () {
  var carName = 'Volvo' // Function Scope (let,var,const)
}
```

## Global Javascript Vairables

```javascript
let carName = 'Volvo'
// code here can use carName

function myFunction () {
  // code here can also use carName
}
```

## Automatically global

```javascript
myFunction()

// code here can use carName

function myFunction () {
  carName = 'Volvo'
}
```
