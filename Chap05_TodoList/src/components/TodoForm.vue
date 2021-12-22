<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" v-model.trim="text" ref="inputRef" />
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
            </div>
        </div>  
    </form>
</template>

<script>
    export default {
        props: ['addTodo'],
        data(){
            return {
                text: ''
            }
        },
        methods: {
            sendData() {
                this.addTodo(this.text);
                this.text = ''
                this.$refs.inputRef.focus();
            }
        }
    }
</script>

<style scoped>

</style>