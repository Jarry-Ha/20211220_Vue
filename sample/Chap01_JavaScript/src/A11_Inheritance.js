class Person {
    
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }

    getName() {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name, age, add, job) {
        super(name, age, add);
        this.job = job;
    }

    toString() {
        console.log(`[Employee] name=${this.name} age=${this.age} add=${this.add} job=${this.job}`);
    }
}

let hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

let emp = new Employee('흥부', 30, '서울', "매니저");
emp.toString();

