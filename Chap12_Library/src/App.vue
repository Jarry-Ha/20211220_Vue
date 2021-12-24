<template>
  <div class="card-body">
    <A04Sass></A04Sass><br>
    
    <A03VueIcon></A03VueIcon><br>
    <A02BootStrapModal></A02BootStrapModal><br>
    <A01JQuery></A01JQuery>
  </div>
</template>

<script>
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A01JQuery from './components/A01JQuery.vue'
import A02BootStrapModal from './components/A02BootStrapModal.vue'
import A03VueIcon from './components/A03VueIcon.vue'
import A04Sass from './components/A04Sass.vue'

export default {
  name: 'App',
  components: {
    A01JQuery, A02BootStrapModal, A03VueIcon, A04Sass
  }
}
</script>

<style>

</style>
