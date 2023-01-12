/* behaviour pattern */
// data attribute를 활용하여, 최상위 document에 하나의 핸들러로 이벤트들을 관리

document.addEventListener('click', (event) => {
    // tag attribute로 button을 가진 요소들을 모두 핸들링
    if(event.target.dataset.button != undefined) {
        console.log("button clicked");
    }
});
