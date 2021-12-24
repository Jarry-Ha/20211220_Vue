<template>
  <div>
    <h1>TodoCombine</h1>

    <TodoForm :addTodo="addTodo"></TodoForm>
    <TodoList :todoList="data.todoList" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></TodoList>

  </div>
</template>

<script>

function makeTodo() {
  const todos = [];
  for(let i = 1; i <= 5; i++) {
    todos.push( {id: i, text: `${i}번째 할 일`, done: false} )
  }
  return todos;
}

import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import { reactive } from 'vue'

export default {
  components: { TodoForm, TodoList },
  props: [],
  setup() {
    const data = reactive( { todoList: makeTodo(), text: ''} );     // ref
    let cnt = 6;

    const updateTodo = (id) => {
        const index = data.todoList.findIndex( todo => todo.id === id );
        data.todoList[index].done = !data.todoList[index].done;
    };
    const deleteTodo = (id) => {
        const index = data.todoList.findIndex( todo => todo.id === id );
        data.todoList.splice(index, 1);
    };
    const addTodo = (text) => {
        const todo = { id: cnt++, text, done: false};
        data.todoList.push(todo);
    }

    return { data, updateTodo, deleteTodo, addTodo }
  },
}
</script>
