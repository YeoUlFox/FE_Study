let animal = {
    weight : 0,
    height : 0,

    eat() {
        console.log("Eat!!!");
    }
};

// Object.create() 사용
let human_instance = Object.create(animal);

human_instance.name = "사람 이름"; // add Own property

console.log(human_instance.name);
console.log(human_instance.weight);

human_instance.eat();
