console.log("name: " + nickname + " typeof: " + typeof nickname);

var nickname = "NolBu1";
console.log("name: " + nickname + " typeof: " + typeof nickname);

// 변수를 재 선언해도 에러아님
var nickname = 10;
console.log("name: " + nickname + " typeof: " + typeof nickname);

const A = 100;
// var alert = 'Hello World';
console.log("");

// var 변수는 { } scope를 갖지 않는다. var은 함수만 {} scope를 갖는다
var str1 = "Outer";
if (true) {
	var str1 = "Inner";
	console.log("Inner=> ", str1);
}
console.log("Outer=> ", str1);
console.log("");

for (var i = 0; i < 3; i++) {
	for (var i = 0; i < 3; i++) {
		// 여기서 i는 4가 된다
		console.log(i);
	}
}

// let => ES6
const A1 = 200;
const alert = "Hello World";

let age = 30;
console.log("namagee: " + age + " typeof: " + typeof age);

// let age = 100;           // 재 선언을 할 수 없다.
age = "HungBu";
console.log("namagee: " + age + " typeof: " + typeof age);

// let 변수는 { } scope를 갖는다.
const str2 = "Outer";
if (true) {
	const str2 = "Inner"; // 지역 변수. 자신이 속한 {} 안에서만 유효한 변수다
	console.log("Inner=> ", str2);
}
console.log("Outer=> ", str2);
console.log("");

for (let i = 0; i < 3; i++) {
	for (let k = 0; k < 3; k++) {
		// 여기서 i를 재 선언할 수 없음
		console.log(i);
	}
}
console.log("");

// const (상수) => ES6
// 변수 선언시 초기화를 하지 않으면 값을 대입 할 수 없음 (값 변경이 안됨)
const MY_PI = 2.1415;
console.log("MY_PI: " + MY_PI + " typeof: " + typeof MY_PI);

// MY_PI = 100;         // 값 변경이 안된다.

// 가능. 변수의 값이 아니라 요소의 값이 변경
const arr = [10, 20];
arr[2] = 30;
arr[0] = 100;

const obj = { name: "NolBu", age: 30 };
obj.address = "Seoul";
obj.name = "놀부";

// obj = {};            // obj 주소값이 변경되므로 에러

console.log(arr);
console.log(obj);

console.log(window);
