
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
                <TodoListItem v-for="todo in todoList" :key="todo.id" 
                    :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
            </tbody>
        </table>
    </div>
</template>

<script>
    import TodoListItem from './TodoListItem.vue'
    export default {
        components: {TodoListItem},
        props: ['todoList', 'updateTodo', 'deleteTodo']
    }
</script>

<style scoped>

</style>
