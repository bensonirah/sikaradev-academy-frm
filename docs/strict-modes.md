# Javascript **'use strict'** Directive

```javascript
'use strict'
x = 3.14 // will cause an error

myFunction()

function myFunction () {
  y = 3.14 // This will also cause an error because y is not declared
}
```

## Exception

```javascript
x = 3.14 // This will not cause an error.
myFunction()

function myFunction () {
  'use strict'
  y = 3.14 // This will cause an error
}
```

# Not Allowed in Strict Mode

## Using a variable, without declaring it, is not allowed:

```javascript
'use strict'
x = 3.14 // This will cause an error
```

## Using an object, without declaring it, is not allowed:

```javascript
'use strict'
x = { p1: 10, p2: 20 } // This will cause an error
```

## Deleting a variable (or object) is not allowed.

```javascript
'use strict'
let x = 3.14
delete x // This will cause an error
```

## Deleting a function is not allowed.

```javascript
'use strict'
function x (p1, p2) {}
delete x // This will cause an error
```

## Duplicating a parameter name is not allowed:

```javascript
'use strict'
function x (p1, p1) {} // This will cause an error
```

## Octal numeric literals are not allowed:

```javascript
'use strict'
// Octal numeric literals are not allowed:
let x = 010 // This will cause an error
```

## Octal escape characters are not allowed:

```javascript
'use strict'
// Octal escape characters are not allowed:
let x = '\010' // This will cause an error
```

## Writing to a read-only property is not allowed

```javascript
'use strict'
// Writing to a read-only property is not allowed
const obj = {}
Object.defineProperty(obj, 'x', { value: 0, writable: false })

obj.x = 3.14 // This will cause an error
```

## Writing to a get-only property is not allowed:

```javascript
'use strict'
// Writing to a get-only property is not allowed:
const obj = {
  get x () {
    return 0
  }
}

obj.x = 3.14 // This will cause an error
```
