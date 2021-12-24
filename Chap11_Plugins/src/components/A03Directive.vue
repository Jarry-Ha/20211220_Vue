<template>
    <div>
        <h3>A3 Directive</h3>

        <div>
            <input type="text" class="form-control" v-focus>
        </div>
        <br>

        <div v-view="true">Custom Directive</div>
        <br>
        
        <div v-alertBtn="'CLICK'">
            Alert Event
        </div>
    </div>
</template>
<script>
import './../modules/directive'

export default {
    data() {
        return {
            isChecked: true,
        }
    },

}
</script>