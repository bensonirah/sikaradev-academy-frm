# The javascript **this** keyword

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}
```

## What is **this**

- In object method, **this** refers to the object
- Alone, **this** refers to the global object
- In a function , **this** refers to the global object
- In a function , in strict mode, **this** is **undefined**
- In an event, **this** refers to the **element** that received the event
- Methods like **call()**,**apply()**, and **bind()** can refer **this** to **any object**
