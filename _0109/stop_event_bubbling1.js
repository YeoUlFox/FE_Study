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

// 이벤트 등록에 따라 핸들링이 이루어짐 (event1 -> event2)
// stopImmediatePropagation() 함수에 의해 button의 다른 이벤트도 방지됨

button.addEventListener('click', (event) => {
  // stop parent DOM element events + other event on this element
  event.stopImmediatePropagation();
  console.log("button event1")
})

button.addEventListener('click', (event) => {
  // stop parent DOM element events
  event.stopPropagation();
  console.log("button event2")
})