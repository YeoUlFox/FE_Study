let animal = {
    weight : 0,
    height : 0,

    eat() {
        console.log("Eat!!!");
    }
};

function human(name) {
    this.name = name;
}

// human function을 사용하여 객체 생성시 호출되는 생성자
human.prototype = animal; 

let human_dtd = new human("dtd");

console.log(human_dtd.name);
console.log(human_dtd.weight);