<template>
    <form>
        <div class="input-group">
            <!-- v-model은 변수의 값을 변경한다. store의 state에 있는 변수는 getter만 존재 -->
            <!-- <input type="text" class="form-control" v-model="text" ref="inputRef" /> -->
            <input type="text" class="form-control" ref="inputRef"
                        :value="text" @input="(evt) => changeText(evt.target.value)" />
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
            </div>
        </div>  
    </form>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const todoListHelper = createNamespacedHelpers('todoListR');

    export default {
        computed: {
            /*
            ...todoListHelper.mapState({
                text: state => state.text
            })
            */
            ...todoListHelper.mapGetters({
                text: 'getText'
            })

            /*
            text() {
                // return this.$store.state.todoListR.text;
                return this.$store.getters['getText']
            }
            */
        },
        methods: {
            /*
            changeText(text) {
                this.$store.dispatch('changeTextAction', text);
            },
            */

            ...todoListHelper.mapActions({
                changeText: 'changeTextAction',
                addTodo: 'addTodoAction'
            }),
            sendData() {
                this.addTodo(this.text);
                this.$refs.inputRef.focus();
                this.changeText('');
            }
        }
    }
</script>

<style scoped>

</style>