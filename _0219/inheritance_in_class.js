class Animal {
    constructor(name) {
        console.log("animal constructor!!!");
        this._name = name;
    }

    get name() {
        return `이름 : ${this._name}`;
    }

    set name(val) {
        this._name = val.trim();
    }

    eat() {
        console.log("EAT!!!");
    }
}

let animal_instance = new Animal("동물이야");

console.log(animal_instance.name);
animal_instance.eat();

class Human extends Animal {
    constructor(name = "사람이야") {
        super(name); // 없을 경우 에러 발생
        console.log("human constructor!!!");
        this._job = "직업!!!";
    }

    eat() {
        console.log("EAT at table!");
    }

    get job() {
        return `직업 : ${this._job}`;
    }

    set job(val) {
        this._job = (val == ""? "무직" : val.trim());
    }
}

let human_instance = new Human("dtd");

// inherited method
console.log(human_instance.name);

// method override
human_instance.eat();

// Own property
human_instance.job = "프로그래머";
console.log(human_instance.job);

