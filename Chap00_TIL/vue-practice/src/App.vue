<template>
  <div id="app">
    <OpenHeader></OpenHeader>
    <br />
    <AxiosTest></AxiosTest>
    <br />
     <router-view></router-view>
  </div>
</template>

<script>
import OpenHeader from "./components/OpenHeader.vue";
import AxiosTest from "./components/AxiosTest.vue";

export default {
  name: "App",
  components: {
    OpenHeader,
    AxiosTest,
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
