<template>
  <div class="card-body">
        <A04PlugIn></A04PlugIn><br>
        <A03Directive></A03Directive><br>
        <A02Filter></A02Filter><br>
        <A01CompMain />
  </div>
</template>

<script>
import A01CompMain from './components/A01CompMain.vue'
import A02Filter from './components/A02Filter.vue'
import A03Directive from './components/A03Directive.vue'
import A04PlugIn from './components/A04PlugIn.vue'

export default {
  name: 'App',
  components: {
    A01CompMain, A02Filter, A03Directive, A04PlugIn
  }
}
</script>

<style>

</style>
