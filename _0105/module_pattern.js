// ***Module Pattern
// : JavaScript에서는 private 함수 선언을 할 수 X
// => Closure를 활용하여 private 함수와 같이 사용 가능

var makeCounter = function() {
    /*---- private 처럼 작동 ----*/
    // changeBy()와 privateCounter에 접근하려면 counter의 public 함수들을 거쳐야 OK
    var privateCounter = 0;

    function changeBy(val) {
    privateCounter += val;
    }
    /*--------------------------*/

    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }
  };


// makeCounter 호출과 동시에
// 같은 Lexical enviroment를 공유하는 3개의 함수가 생성(increment, decrement, value)
var counter1 = makeCounter();
var counter2 = makeCounter();

// counter1과 counter2는 서로 독립적인 Closure를 가짐
// => OOP의 정보은닉, 캡슐화 구현

console.log(counter1.value()); /* 0 */
counter1.increment();
counter1.increment();

console.log(counter1.value()); /* 2 */

counter1.decrement();
console.log(counter1.value()); /* 1 */
console.log(counter2.value()); /* 0 */