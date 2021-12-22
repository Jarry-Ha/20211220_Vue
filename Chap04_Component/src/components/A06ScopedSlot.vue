
<template>
    <div>
        <h3>A06 Scoped Slot</h3>
        <div>
            자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.
        </div>

        <div>
            <input type="text" class="form-control" v-model.number="kor">
            <input type="text" class="form-control" v-model.number="eng">
        </div>

        <!-- slot props라 한다. slot에 들어가는 내용이 이 속성을 참조해서 사용할 수 있다 -->
        <slot :kor="kor" :eng="eng" :person="person"></slot>

         <slot name="jumsu" :kor="kor" :eng="eng" :person="person"></slot>
    </div>
</template>

<script>
export default {
    // data: function() {}
    data() {
        return {
            kor: 90,
            eng: 70,
            person: {name: 'HungBu', age: 20, address: 'Busan'},
        }
    },
    methods: {
        changeKor: function() {
            this.kor = 10;
        },
        changeEng() {
            this.eng = 20;
        }
    }
}
</script>

<style>

</style>