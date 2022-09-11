# Javascript class

```javascript
class User {
  constructor (email, name) {
    this.email = email
    this.name = name
  }

  render () {
    console.log('User info')
    console.log(`Email: ${this.email},\nName: ${this.name}`)
  }
}
const user = new User('bensonirah@æmail.com', 'bensonirah')
user.render()
```
