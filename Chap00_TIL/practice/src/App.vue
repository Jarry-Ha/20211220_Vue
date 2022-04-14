<template>
  <div id="app">
    <StudyTest></StudyTest>
    <br />
    <A01Slot></A01Slot>
    <br />
    <A05SlotName>
      <template v-slot:header> 
        <h2>Header</h2>  
      </template>
      <template v-slot:sidebar> 
        <h2>sidebar</h2>  
      </template>
      <template v-slot:content> 
        <h2>content</h2>  
      </template>
    </A05SlotName>
  </div>
</template>

<script>
import StudyTest from "./components/StudyTest.vue";
import A01Slot from "./components/A01Slot.vue";
import A05SlotName from "./components/A05SlotName.vue";

export default {
  name: "App",
  components: {
    StudyTest,
    A01Slot,
    A05SlotName,
  },
};
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
