let animal = {
    weight : 0,
    height : 0,

    eat() {
        console.log("Eat!!!");
    }
};

let human = {
    name : "사람이름",
};

// Prototype Chaining을 통하여 상속 구현
// human.__proto__ = animal;
Object.setPrototypeOf(human, animal);


console.log(human.name);
console.log(human.weight); // 상속 받은 property

human.eat(); // 상속 받은 method

// for ... in
console.log("\nfor ... in loop");
for(let prop in human) console.log(prop); // 상속 받은 property 모두 출력
