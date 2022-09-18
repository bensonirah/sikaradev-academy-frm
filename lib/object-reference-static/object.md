# Tasks

## Hello,Object

Write the code, one line for each action:

1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.

## Check for emptiness

Write the function `isEmpty(obj)` which returns `true` if the object has no properties, `false` otherwise.

Should work like that:

```javascript
let schedule = {}

alert(isEmpty(schedule)) // true

schedule['8:30'] = 'get up'

alert(isEmpty(schedule)) // false
```

## Sum object properties

We have an object storing salaries of our team:

```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Write the code to sum all salaries and store in the variable `sum`. Should be `390` in the example above.

If `salaries` is empty, then the result must be `0`

## Multiply numeric roperty values by 2

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of `obj` by `2`.

For instance:

```javascript
multiplyNumeric(menu)

// after the call
menu = {
  width: 400,
  height: 600,
  title: 'My menu'
}
```
Please note that `multiplyNumeric` does not need to return anything. It should modify the object in-place.

P.S. Use `typeof` to check for a number here.
