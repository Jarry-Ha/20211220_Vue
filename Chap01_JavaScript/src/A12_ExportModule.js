// ES6
/*
export let num = 10.25;

export function onAdd(x, y) {
    return x + y;
}

export function longNameFunction() {
    return 'longNameFunction';
}
*/

let num = 10.25;

function onAdd(x, y) {
    return x + y;
}

function longNameFunction() {
    return 'longNameFunction';
}

export { num, onAdd, longNameFunction };