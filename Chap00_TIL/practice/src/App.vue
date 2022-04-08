<template>
  <div id="app">
    <StudyTest msg="Welcome to Your Vue.js App">
            This is App Content 01 
    </StudyTest>
  </div>
</template>

<script>
import StudyTest from './components/StudyTest.vue'

export default {
  name: 'App',
  components: {
    StudyTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
