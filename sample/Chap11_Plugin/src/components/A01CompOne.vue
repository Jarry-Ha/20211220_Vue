<template>
    <div>
        <h3>{{title}}</h3>
        <div>
            Num: <br>
            <button class="btn btn-primary" @click="increase">+</button>
            <button class="btn btn-danger" @click="decrease">-</button>
        </div>

        <div>
            Cnt: <br>
            <button class="btn btn-primary">+</button>
            <button class="btn btn-danger">-</button>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            title: 'Component One',         // component가 우선한다.
        }
    },
    created: function() {                   // mixin이 먼저 실행되고 component가 실행된다.
        console.log('component one created')
        
    },
    methods: {                              // methods, components, directive는 component가 우선한다.
        increase: function() {
            console.log('one')
        },
        decrease: function() {
            console.log('two')
        }
    }
}
</script>