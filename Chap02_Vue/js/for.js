
var students = [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
]

// for(var i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// ES5
// for( i in students ) {                  // i는 index
//     console.log(students[i])
// };

// ES6
for( item of students ) {                   // item은 값
    console.log(item)
}