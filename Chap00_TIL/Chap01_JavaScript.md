# Chap01_JavaScript

## A01_Variable

## ES5 이전

### var

- 재 선언 하면 덮어씀
- {} scope를 갖지 않음(var 변수만.)

## ES6 문법

### let

- 재 선언 불가
- {} scope를 가짐

### const (상수)

- 값 변경 불가.

## A02_FunLiteral

## ES5. 함수 리터럴

```javascript
var sayHello = fucntion() {return 1;};
```

=> 재선언, scope에 문제 있으니 let으로 사용

## ES6. Function

```javascript
let sayHello = fucntion() {return 1;};
```

## A03_TemplateLiteral

```javascript
console.log(this.name, '님의 나이는 ', this.age, '세 입니다');
// ES6 - tempate 문자열
console.log(`${this.name}님의 나이는 ${this.age}입니다.`);
```

## A04_ArrowFn

```javascript

// 함수 리터럴. 함수 표현식
let onAdd = function(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}

// ES6. 
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
let onMulti = (x, y) => {
    console.log(`${x} + ${y} = ${x + y}`);
}

// 함수의 { } 구문에서 리턴 구문 딱 1개만 있는 경우 {}와 return을 생략하고 한줄에 기술
let onDiv = (x, y) => `${x} / ${y} = ${x / y}`;

// 한 줄로 기술할때 => 뒤의 구문이 값이 아닌 실행문인 경우는 리턴하지 않고 실행 
let onMulti1 = (x, y) => console.log(`${x} + ${y} = ${x + y}`);

// 매개변수가 1개인 경우는 인수 ()를 생략할 수 있다. 매개변수가 1개 이상이면 () 생략 불가.
let onDouble = x => x ** 3;             // ** ES6에 추가된 연산자 2 ** 3 => 2 * 2 * 2 

```

## A05_ArrowMap

- 어려워서 패스하겠다.

## A06_SpreadOperator

```javascript
console.log( ...[10, 11, 100] );
// 개별 요소 형태로 출력. for 구문 돌려서 1개씩 출력하는 것과 동일한 효과
```

## A07_Destructuring

- 사용처를 모르겠다. 패스.

## A08_ClassES5

```javascript
// ClassES5 객체 생성방법
function User(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        console.log(this.name + '님의 나이는 ' + this.age);
    }
}
```

## A09_ClassES6

```javascript
// ClassES6 객체 생성방법
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
nolbu.info();
```

## A10_GetterSetter

- 정확한 사용법은 파일 참조

```javascript
// ClassES6 객체내에 사용
// 사용은 변수처럼 동작은 함수로 => getter, setter
get kor() {
    return this._kor;
}
set kor(num) {
    let value = Number(num);
    if(isNaN(value)) value = 0;
    this._kor = value;
}
```

## A11_Inheritance

- 상속 관련 내용... backend 관련임

## A12_ExportModule
  