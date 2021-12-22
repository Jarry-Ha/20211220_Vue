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
                <template v-for="todo in todoList" >
                    <TodoListItem :key="todo.id" :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
                </template>
                
            </tbody>
        </table>
    </div>
</template>

<script>
    import TodoListItem from './TodoListItem.vue'

    import EventBus from './EventBus.vue'

    const sampleTodos = [
        { id: 1, text: '첫 번째 할 일', done: true },
        { id: 2, text: '두 번째 할 일', done: false },
        { id: 3, text: '세 번째 할 일', done: false },
    ];

    export default {
        components: { TodoListItem },
        data() {
            return {
                todoList: sampleTodos,
                id: 4
            }
        },
        created() {
            EventBus.$on('sendText', this.addTodo);
        },
        methods: {
            updateTodo(id) {
                // console.log(id);
                const index = this.todoList.findIndex( todo => todo.id === id );
                this.todoList[index].done = !this.todoList[index].done;
            },
            deleteTodo(id) {
                // console.log(id)
                const index = this.todoList.findIndex( todo => todo.id === id );
                this.todoList.splice(index, 1);
            },
            addTodo(text) {
                const todo = { id: this.id++, text, done: false};
                this.todoList.push(todo);
            }
        }
    }
</script>

<style scoped>

</style>
