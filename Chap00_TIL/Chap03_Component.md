# Chap03_Component

## A01Component

***

- 컴포넌트 사용방법, template 태그 사용법 등

### # Vue.js Component 기본 포맷

```html
<script type="text/javascript">
    Vue.component('compone', {
        template: '#temp',
        // component는 전달되는 data 값이 함수의 리턴 타입이어야 한다.
        data: function() {
            return {
                name: 'NolBu'
            }
        },
        methods: {
            changeName: function(value) {
                this.name = value
            }
        }
    })
    var app = new Vue({
        el: '#app'
    })
</script>
```

## A02Component

***

Vue.component('compone', {tempalte, data, methods})

## A03Props

***

## **props = 속성 = 태그속성**

(아래의 name, age, address...)

```html
<comp-one name="놀부" :age=30 v-bind:address="address" :arr="ary" :user="user"
            :on-plus="onPlus" is-checked ></comp-one>
```

## A04Props

***

프로퍼티를 세세하게 정해주는 방법(String, Int, Default 값 등...)

## A05Emit

***

```html
<template id="parentTemp">
    <child-comp @sendtext="getText" @sendobject="getObject"></child-comp>
</template>
```

child-comp 내부의 sendtext라는 이벤트가 호출되면,

parent-temp 의 getText 이벤트가 발생한다.

## A06EmitProps

***

## A07EventBus

***

html식 EventBus

## A08TodoList
