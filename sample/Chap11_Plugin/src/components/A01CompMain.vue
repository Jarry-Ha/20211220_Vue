<template>
    <div id="container">
        <h3>A01 Mixin</h3>

        <div class="row">
            <div class="col-md-4">
                Num: <br>
                <button class="btn btn-primary">+</button>
            </div>
            <div class="col-md-4">
                <A01CompOne></A01CompOne>
            </div>
            <div class="col-md-4">
                <A01CompTwo></A01CompTwo>
            </div>
        </div>
        <br>

        <div class="row">
            <div class="col-md-4">
                Person: <br>
                Method: <br>

                Cnt: <br>
                <button class="btn btn-primary">+</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import A01CompOne from './A01CompOne.vue'
import A01CompTwo from './A01CompTwo.vue'

export default {
    components: {A01CompOne, A01CompTwo},
}
</script>
