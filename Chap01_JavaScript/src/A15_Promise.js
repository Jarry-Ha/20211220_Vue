/* eslint-disable */

function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

function sleepFunc() {
    console.log('1 Start')

    sleep(2000);                // data를 가져오는 ajax 구문

    console.log('1 End')
}
// sleepFunc();

var global = 0;
function timeoutFunc() {
    console.log('2 Start')

    setTimeout( function() {
        console.log('2 Data 가져옴...');
        var data = 100;
        global = data;

        setTimeout( function() {
            console.log('2 Data 가져옴...', data);
            var two = data * 2;

            setTimeout( function() {
                console.log('2 Data 가져옴...', two);
            }, 2000);
        }, 2000);
    }, 2000);

    console.log('2 End')
}
// timeoutFunc();
// console.log(global);


// ES2015(ES6)
function promiseFunc(ms) {
    console.log('3 Start')
    var promise = new Promise( (resolve, reject) => {

        if(ms < 500) reject('실패시 전달 할 데이터를 여기에 넣는다');

        setTimeout( () => {
            resolve('성공 시 전달 할 데이터')
        }, ms)
    });

    console.log('3 End')

    return promise;
}

/*
promiseFunc(2000)
.then( resp => {
    console.log(resp);

    return promiseFunc(1000);
})
.then( resp => {            // return promiseFunc(1000); 가 성공 한 경우 실행
    console.log(resp)
})
.catch( error => {
    console.log(error)
})
*/

// 비동기를 동기화처럼 사용. 단 함수로 이용할 필요가 있다. ES2017
async function getPromise() {
    
    try {
        const data1 = await promiseFunc(5000);                // resolve data를 받아온다. 데이터가 도달할때까지 대기. 다음줄 실행 안됨.
        console.log('data1 => ', data1);

        const data2 = await promiseFunc(1000);                // resolve data를 받은다
        console.log(data2);
    } catch(error) {
        console.error(error);
    }
    
}
getPromise();

