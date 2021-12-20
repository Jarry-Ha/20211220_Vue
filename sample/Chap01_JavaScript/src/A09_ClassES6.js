
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name}님의 나이는 ${this.age}입니다.`);
    }
}

let nolbu = new User('NolBu', 30);
let hungbu = new User('HungBu', 20);

nolbu.info();
hungbu.info();

