<template>
  <div>
      <h1>
          
      </h1>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

function makeTodo() {
    const todos = [];
    for(let i=1; i<=5; i++){
        todos.push( {id: i, text: `${i}번째 할 일`, done: false})
    }
    return todos;
}
export default {
    components: {TodoForm, TodoList},
    data() {
        return {
            todoList: makeTodo(),
            id: 6,
        }
    },
    methods: {
        updateTodo(id) {
            const index = this.todoList.findIndex( todo => todo.id === id);
            this.todoList[index].done = !this.todoList[index].done;
        },
     deleteTodo(id) {
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

<style>

</style>