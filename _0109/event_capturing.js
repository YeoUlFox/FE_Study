const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

// 각각 요소들이 2번씩 이벤트 단계에서 두번씩 정의되었기 때문에 총 2번씩 호출
// ** removeEventListener로 제거 시에도 해당 단계에 맞는 핸들러를 지우도록 해야 함

/* --- 호출 순서 --- */
// Capturing [body - div - span] - Target [button * 2] - Bubbling [span - div - body]

// Capture 단계에 정의된 이벤트
body.addEventListener('click', () => {
  console.log("body was clicked")
}, {capture : true})

div.addEventListener('click', (event) => {
  // 해당 라인 호출 시
  // Capturing [body] - Target[div] 까지 호출되고 이벤트 전파 끗
  event.stopPropagation();

  console.log("div was clicked")
}, {capture : true})

span.addEventListener('click', () => {
  console.log("span was clicked")
}, {capture : true})

button.addEventListener('click', () => {
  console.log("button was clicked")
}, {capture : true})

// 그냥 정의된 이벤트
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})