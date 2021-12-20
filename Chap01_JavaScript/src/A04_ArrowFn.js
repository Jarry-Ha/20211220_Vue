
(function(){

    // 함수 리터럴. 함수 표현식
    let onAdd = function(x, y) {
        console.log(`${x} + ${y} = ${x + y}`);
    }

    let onMin = function(x, y) {
        return `${x} - ${y} = ${x - y}`;
    }

    onAdd(10, 20);
    console.log( onMin(10, 20) );
    console.log('')


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

    onMulti(10, 2)
    console.log( onDiv(10, 2) );
    onMulti1(10, 5)
    console.log( onDouble(3) );
    console.log('');


    // this의 참조가 다르다. Arrow 함수는 this가 자신을 감싸고 있는 상위 객체를 따른다.
    let obj = {
        name:'HungBu',
        age: 20,
        info: function() {
            
            function innerOne() {
                console.log(this);                      // window
                console.log(this.name, this.age);
            }

            let innerTwo = () => {
                console.log(this);                      // 자신의 상위객체 즉 obj
                console.log(this.name, this.age);
            }

            innerOne();
            innerTwo();
        }
    }

    // obj.info.innerOne();         // 함수 내부의 값은 {} 밖이라 참조 불가
    obj.info();
    

})();