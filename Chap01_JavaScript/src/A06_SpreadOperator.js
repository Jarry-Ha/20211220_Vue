
// ES6
(function(){

    console.log( ...[10, 11, 100] );            // 개별 요소 형태로 출력. for 구문 돌려서 1개씩 출력하는 것과 동일한 효과
    console.log(...'NolBu');
    console.log('');

    // ...rest는 나머지 매개변수를 의미(배열). 이전의 argumensts라는 내부 변수와 비슷 
    function spreadFun(a, b, c, d, e, ...rest) {
        console.log(`a => ${a}`);
        console.log(`b => ${b}`);
        console.log(`c => ${c}`);
        console.log(`d => ${d}`);
        console.log(`e => ${e}`);
        console.log(`rest => ${rest} / ${rest.length}`);
    }

    spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
    console.log('')


    // 배열 합치기.
    let aryOne = [10, 20, 30];
    var aryTwo = [1, 2, 3, ...aryOne];
    console.log(aryTwo);
    console.log('');


    // Object
    let objOne = {
        id: 1,
        name: 'NolBu'
    };

    let objTwo = {              // 중복된 값은 뒤에 오는 값으로 덮어씌워진다.
        id: 2,
        address: 'Seoul',
        ...objOne
    }
    console.log(objTwo);


    let objThree = {
        ...objOne,              // 앞에 풀면 기존의 값을 유지하면서 없는 값만 추가된다.
        id: 3,
        address: 'InChen',
    }
    console.log(objThree);

    console.log(objOne);
    
})();