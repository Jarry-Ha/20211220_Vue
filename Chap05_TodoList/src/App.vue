<template>
  <div class="card-body">
    <h1>Chap05 TodoList 01</h1>

    <TodoCombine></TodoCombine>
    
  </div>
</template>

<script>
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TodoCombine from './components/TodoCombine.vue'

export default {
  name: 'App',
  components: {TodoCombine}
}
</script>

<style>

</style>
