

(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }
    // let objName = obj.name;
    // let objAge = obj.age;

    // 변수 name, age는 obj의 key와 동일한 이름으로 선언해야 한다.
    let {name, age} = obj;
    console.log(name, age);

    // let name = 'ABC';            // name 변수는 위에서 선언됨.

    // 이미 사용된 변수가 있는 경우 alias를 이용
    let { name: nickname, age: num } = obj;
    console.log(nickname, num);

    // 없는 값은 기본값을 줄 수 있다
    let { name: x = 'unknown', age: y = 0, address = 'Seoul'} = obj;
    console.log(x, y, address);
    console.log('');



    let ary = ['A', 'B', 'C'];

    let [a, b, c] = ary;
    console.log(a, b, c);

    // 배열은 alias는 설정 불가
    let [a1 = 10, b1 = 11, c1 = 100, d1 = 0] = ary;
    console.log(a1, b1, c1, d1);
    
})();
