function init() {
    var name = "yeoUl";
    // (1) init 내부에서 displayName() 함수를 선언
    // 내부에서만 이 함수를 호출 OK

    function displayName() {
        // (2) inner function, closure 안에서 
        // 밖의 함수인 init()의 변수 name을 호출 OK
        console.log(name); 
    }

    displayName();
  }

init();

// *lexical scoping
// : (2)에서와 같이 변수의 선언 위치를 고려하여 사용 가능을 판단