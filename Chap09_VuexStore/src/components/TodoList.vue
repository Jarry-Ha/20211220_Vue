
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th style="{width:'10%'}">ID</th>
                    <th>Todo</th>
                    <th style="{width:'10%'}">Complete</th>
                    <th style="{width:'10%'}">Delete</th>
                </tr>
            </thead>
            <tbody>
                <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
            </tbody>
        </table>
    </div>
</template>

<script>
    import TodoListItem from './TodoListItem.vue';
    import { createNamespacedHelpers } from 'vuex'

    const todoListHelper = createNamespacedHelpers('todoListR');

    export default {
        components: { TodoListItem },
        computed: {
            /*
            ...todoListHelper.mapState({
                todoList: state => state.todoList
            })
            */
            ...todoListHelper.mapGetters({
                todoList: 'getTodoList'
            })
        }
        /*
        computed: {
            todoList() {
                // return this.$store.state.todoListR.todoList;
                return this.$store.getters['getTodoList']
            }
        }
        */
    }
</script>

<style scoped>

</style>
