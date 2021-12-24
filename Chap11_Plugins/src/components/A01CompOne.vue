<template>
    <div>
        <h3>{{title}}</h3>
        <div>
            Num: {{num}}<br>
            <button class="btn btn-primary" @click="increase">+</button>
            <button class="btn btn-danger" @click="decrease">-</button>
        </div>

        <div>
            Cnt: {{cnt}}<br>
            <button class="btn btn-primary" @click="increasCnt">+</button>
            <button class="btn btn-danger"  @click="decreaseCnt">-</button>
        </div>
    </div>
</template>
<script>
import localMixin from './../modules/localMixin'

export default {
    mixins: [ localMixin ],
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