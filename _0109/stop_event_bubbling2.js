const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

// stopPropagation() 함수에 의해 상위의 event bubbling은 모두 방지

button.addEventListener('click', (event) => {
  // stop parent DOM element events
  event.stopPropagation();
  console.log("button event2")
})

button.addEventListener('click', (event) => {
  // stop parent DOM element events + other event on this element
  event.stopImmediatePropagation();
  console.log("button event1")
})