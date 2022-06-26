function events() {
  const items = [
    "onchange",
    "onclick",
    "onmouseover",
    "onmouseout",
    "onkeydown",
    "onload",
  ];
  // <element [attributes] (event)="eventHandler"></element>
  // <element [attributes] id="elementId"></element>
  // <script>
  //   document.querySelector('#elementId')
  //   .addEventListener('event',eventHandler) // on-eventname e.g: onclick => click
  //</script>
  console.log(items);
}

module.exports = events;
