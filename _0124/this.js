console.log("In global scope : " + this); // [object Object] : broswer에서는 window


function fun1() {
    console.log("In function : " + this); // [object global] : broswer에서는 window
}

fun1();

function fun2() {
    'use strict'
    console.log("In strict mode function : " + this); // undefined
}

fun2();


var obj1 = {
    a : "prop1",
    func1 : function() {
        // in Object Method
        console.log("in object : " + this.a); // "prop1";
    }
}

obj1.func1();

var obj2 = {
    a : "prop2",
    func2 : obj1.func1
}

// 해당 함수의 정의 위치보단 즉각적인 참조 지점이 중요
obj2.func2(); // "prop2"



function with_new() {
    this.a = "new!";
}

// new로 생성된 객체에 this가 바인딩
var obj3 = new with_new();
console.log("with new " + obj3.a);


// 'this' with binding
function fun_with_bind(param) {
    console.log(this.binded);
}


// 첫번째 인자로 binding 될 this object를 받는다
// 두번째부터는 함수의 인자 (apply의 경우엔 배열로 받음)
fun_with_bind.call({ binded : "binded with call()" }, "");
fun_with_bind.apply({ binded : "binded with apply()" }, [""]); 

// bind()로는 한번 this 값이 설정된 함수를 선언
let binded_func = fun_with_bind.bind({ binded : "binded with bind()" });
binded_func();

