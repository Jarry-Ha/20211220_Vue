
class Jumsu {

    constructor(name, kor, eng) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }

    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }

    getName() {
        return this._name;
    }

    // 사용은 변수처럼 동작은 함수로 => getter, setter
    get kor() {
        return this._kor;
    }
    set kor(num) {
        let value = Number(num);
        if(isNaN(value)) value = 0;
        this._kor = value;
    }

};


let nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // Nolbu

console.log(nolbu.kor);
nolbu.kor = '20';
console.log(nolbu.kor);

nolbu.display();

