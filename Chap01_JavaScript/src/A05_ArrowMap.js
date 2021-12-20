
(function(){

    // 일반 함수. 
    function fn(){
        console.log('funcion');
    }
    fn();

    /* 이런 식으로는 사용불가
    fn() => {

    }
    */

    let ary = [10, 11, 100, 101, 1000];

    // 익명함수(이름이 없는 함수)
    
    // map
    let newArray = ary.map(function(item, index){
        console.log(index, item)
        return item * 2;
    });
    console.log(newArray, ary);

    let newArray1 = ary.map( (item, index) => item * 3 );
    console.log(newArray1, );

    // filter
    let newArray2 = ary.filter( item => {
        if(item % 2 === 0) return true;
        else return false;
    });
    console.log(newArray2);
    console.log('');

    // find
    let objArray = [
        {id: 1, name: 'NolBu', age: 30},
        {id: 2, name: 'HungBu', age: 25},
        {id: 3, name: 'BangJa', age: 20},
    ];

    let id = 2;

    let two = objArray.find( (item, index) => item.id === id );
    console.log(two)

    let twoIndex = objArray.findIndex( (item, index) => item.id === id );
    console.log(twoIndex)

})();