<template>
    <div>
        <h3>A01 jQuery</h3>

        Qty: <input type="text" name="qty" class="form-control">
        Cost: <input type="text" name="cost" class="form-control">
        <br>
        <div>Total: <span id="result"></span></div>
        <button name="one" class="btn btn-primary btn-sm">Total</button> 
        <button name="two" class="btn btn-danger btn-sm"    @click="clickEvent">Total</button>
    </div>
</template>

<script>
 // npm i jquery
import $ from 'jquery'

$(document).ready(function(){
    $('button[name="one"]').on('click', function(){
        const qty = $('input[name="qty"]').val();
        const cost = $('input[name="cost"]').val();
        $('#result').html(qty * cost);
    })
});

export default {
    methods: {
        clickEvent() {
            const qty = $('input[name="qty"]').val();
            const cost = $('input[name="cost"]').val();
            $('#result').html(qty * cost);
        }
    }
}

</script>