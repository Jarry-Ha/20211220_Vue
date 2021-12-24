<template>
    <div>
        <h3>A01 Counter</h3>

        <div>
            Num: {{num}}<br>
            <button @click="increase">+</button>
            <button @click="decrease">-</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        num() {
            // console.log(this.$store);
            // return this.$store.state.num;
            return this.$store.getters.getNumber
        }
    },
    methods: {
        increase() {
            this.$store.dispatch('increaseAction', 2)
        },
        decrease() {
            this.$store.dispatch('decreaseAction', 2)
        }
    }
}
</script>