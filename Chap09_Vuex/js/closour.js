
function outer() {
  let num = 0;

  function inner() {
    num++;
    console.log(num)
  }

  return inner;
}
// console.log(num);        // Error

const inner = outer();
inner();
inner();


