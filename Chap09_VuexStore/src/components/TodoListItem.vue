
<template>
    <tr>
        <td>{{todo.id}}</td>
        <td><span :class="{done: todo.done}">{{todo.text}}</span></td>
        <td>
            <button class="btn btn-primary" @click="updateTodo(todo.id)">Complete</button>
        </td>
        <td>
            <button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const todoListHelper = createNamespacedHelpers('todoListR')

    export default {
        props: ['todo'],
        methods: {
            ...todoListHelper.mapActions({
                updateTodo: 'updateTodoAction',
                deleteTodo: 'deleteTodoAction'
            })
            /*
            updateTodo(id) {
                this.$store.dispatch('updateTodoAction', id)
            },
            deleteTodo(id) {
                this.$store.dispatch('deleteTodoAction', id)
            }
            */
        }
    }
</script>

<style scoped>
    .done { text-decoration: line-through; }
</style>