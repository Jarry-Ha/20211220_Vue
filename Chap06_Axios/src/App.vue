<template>
  <div class="card-body">

    <A02AxiosModal></A02AxiosModal>

    <hr>

    <A01Axios msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import A01Axios from './components/A01Axios.vue'
import A02AxiosModal from './components/A02AxiosModal.vue'

export default {
  name: 'App',
  components: {
    A01Axios, A02AxiosModal
  }
}
</script>

<style>

</style>
