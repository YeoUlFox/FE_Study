const body = document.getElementsByTagName("body")[0]

body.addEventListener('click', (event) => {
  let target = event.target;

  console.log(`${target.tagName}  was clicked`);
})

/*--- event delegation의 장점 ---*/
// 동적인 엘레멘트의 이벤트 핸들러
// 이벤트 핸들러 관리 용이(메모리, 추가, 삭제)


/* event delegation을 사용하지 않았을 때의 코드 */
/*
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
*/