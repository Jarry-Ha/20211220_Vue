<template>
  <div class="card-body">
    <TodoTemplate></TodoTemplate><br>
    <A01Counter/>
  </div>
</template>

<script>
import A01Counter from './components/A01Counter.vue'
import TodoTemplate from './components/TodoTemplate.vue'
export default {
  name: 'App',
  components: {
    A01Counter, TodoTemplate
  }
}
</script>

<style>

</style>
