function makeFunc() {
    var name = "yeoUl";

    function displayName() {
      console.log(name);
    }

    return displayName;
  }
  
var myFunc = makeFunc();

myFunc();
// (3) 다른 점으로는 변수에 함수를 담아 이를 호출
// name 변수에 대한 참조가 역시 OK

// **Closure
// : 여기서 myFunc 변수가 Closure를 형성 => makeFunc()의 참조 + Lexical Enviroment(3)

// ES6 이후 let, const 의 추가로 {} 가 새로운 Scope로 작용 
// Module 의 도입으로 하나의 Scope가 추가
// ⇒ Closure는 이 모든 Scope의 변수에 접근 가능

function makeAdder(x) {
  var y = 1;

  return function(z) {
    y = 100;
    return x + y + z;
  };
}

// Closure에 x와 y의 환경이 저장됨
var add5 = makeAdder(5);
var add10 = makeAdder(10);

// add5, add10 모두 Closure로써 작용하지만
/// 서로 다른 Lexical 환경에서 x에 다른 값이 저장되었음

// 함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)

// 같은 함수를 이용하여 여러가지 변수를 생성해놓고, 이를 사용하는 식으로 활용이 가능함
