# Regex with methods **search()** , **replace()** , **test()** and **exec()**

- Syntaxe:

  ```text
  /pattern/modifiers;

  ```

  e.g:

  ```javascript
  let text = 'Visit W3Schools!'
  let n = text.search('W3Schools')

  let text = 'Visit Microsoft!'
  let result = text.replace('Microsoft', 'W3Schools')
  ```

  ## The regular expression pattern

  ```javascript
  const pattern = /e/
  pattern.test('The best things in life are free!')

  /e/.exec("The best things in life are free!");
  ```
