<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" ref="inputRef" v-model="text" />
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
            </div>
        </div>  
    </form>
</template>

<script>
    import EventBus from './EventBus.vue'

    export default {
        data(){
            return {
                text: ''
            }
        },
        methods: {
            sendData() {
                if(this.text.trim() !== '') EventBus.$emit('sendText', this.text);
                
                this.text = '';
                this.$refs.inputRef.focus();
            }
        }
    }
</script>