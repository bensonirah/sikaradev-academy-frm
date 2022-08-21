# Boolean en javascript

## Define variable as a boolean

```javascript
const isAdmin = false // true or false
const hasValue = new Boolean(false)
```

## Check if expression or variable is true

```javascript
Boolean(7 % 3 == 0)
// Or easier
7 % 3 == 0
```

## Comparison and Conditions

| Operator | Description  | Exemple            |
| -------- | ------------ | ------------------ |
| ==       | equal to     | if(day=="Monday")  |
| >        | greater than | if (salary > 9000) |
| <        | less than    | if (age < 18)      |

## Rules

- Everything with "value" is True

```javascript
const arrayOfValues = [100, 3.14, -15, 'Hello', 'false', 7 + 1 + 3.14]
```

- Everything without a "value" is False

```javascript
const arrayWithoutValue = [0, -0, '', null, false, NaN]
```

## The famous equal operator **==** vs **===**

- Ex1:

```javascript
let x = false
let y = new Boolean(false)

console.log(y == x) // ?
```

- Ex2:

```javascript
let x = false
let y = new Boolean(false)

console.log(y === x) // ?
```

- Ex3:

```javascript
let x = new Boolean(false)
let y = new Boolean(false)
console.log(x == y)
console.log(x === y)
```
