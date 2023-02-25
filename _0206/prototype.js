var _object = {};

console.log(Object.prototype === _object.__proto__); // true

function _function() {}

console.log(Function.prototype === _function.__proto__); // true


function object1(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
}

var instance = new object1(1, 2);

console.log(instance.prop1, instance.prop2, instance.prop3); // 1, 2, undefined

// newly add property to prototype
object1.prototype.prop3 = 3;

console.log(instance.prop1, instance.prop2, instance.prop3); // 1, 2, 3

// istance -> object1 -> Object 로의 prototype chain
console.log(instance.__proto__ === object1.prototype) // true
console.log(object1.prototype.__proto__ === Object.prototype) // true

/* ---------------------------------- */

// Object Literal 방식
var object2 = {
    prop1 : 1,
    prop2 : 2,
}

console.log(object2.__proto__ === object2.prototype); // false
console.log(object2.__proto__ === Object.prototype); // true