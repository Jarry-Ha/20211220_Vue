
import Vue from 'vue'

// 'Hello World' | uppercase, 함수의 첫번째 매개변수로 앞의 'Hello World' 값을 전달해 준다
// 수정한 결과값으로 앞의 'Hello World'를 변경해 준다
// 즉 필터가 먼저 실행되고 그 결과값으로 랜더링
Vue.filter('uppercase', function(value){
  // console.log(value);
  if(typeof(value) === 'string') return value.toUpperCase()
  else return value
})

Vue.filter('abbr', function(value, size=20, symbol="..."){
  if(typeof(value) !== 'string') return value;

  // XXX...
  if(value.length < size) return value;
  else return value.substring(0, size - symbol.length) + symbol
});

