<template>
    <div>
        <h3>A01 Counter</h3>

        <div>
            Num: {{num}}<br>
            <button @click="increase(2)">+</button>
            <button @click="decrease()">-</button>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const counterHelper = createNamespacedHelpers('counterR');

export default {
    computed: {
        ...counterHelper.mapState({
            num: state => state.num,
            title: state => state.counterName
        })
    },
    methods: {
        ...counterHelper.mapActions({
            // 실직적인 값 할당은 메서드를 호출하는 곳에서 지정. 즉 지정한 action method를 직접 호출하는 방식으로 구현
            increase: 'increaseAction',
            decrease: 'decreaseAction'
        })
    }
    /*
    computed: {
        num() {
            // return this.$store.state.counterR.num;
            return this.$store.getters['counterR/getNumber']
        }
    },
    methods: {
        increase() {
            this.$store.dispatch('counterR/increaseAction', 2)
        },
        decrease() {
            this.$store.dispatch('counterR/decreaseAction', 2)
        }
    }
    */
}
</script>