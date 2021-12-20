
import { num, onAdd, longNameFunction as long } from './A12_ExportModule'

// A13 변수가 default로 export 된 onAdd 함수의 참조값이 된다
import A13, { name } from './A13_DefaultModule'

console.log( num )
console.log( onAdd(10, 20) )
console.log( long() );

console.log( A13(200, 300) );
console.log( name );


