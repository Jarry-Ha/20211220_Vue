

function onAdd(x, y) {
    return x * y;
}

let name = 'NolBu';

// default가 붙으면 이 이름이 곧 onAdd를 의미. 이 파일에서 단 1개만 지정가능
// 나머지는 export { } 형태로 출력
export default onAdd;
export { name };

