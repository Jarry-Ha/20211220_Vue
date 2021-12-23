<template>
  <div class="card-body">
      <h1>Vue Router</h1>

      <div>
        <router-link to="/A01Bind">A01Bind</router-link> | 
        <router-link to="/A02Style">A02Style</router-link> | 
        <router-link to="/A03Params/1005">A03Params</router-link> | 
      </div>

      <hr>

      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import A01Bind from './components/A01Bind.vue'
import A02Style from './components/A02Style.vue'
import A03Params from './components/A03Params.vue'

const router = new VueRouter({
  routes: [
    { path: '/A01Bind',               component: A01Bind},
    { path: '/A02Style',              component: A02Style},
    // path base로 표시되는 컴퍼넌트에 값을 전달할 수 있다.
    // :이 존재하면 패스 역할과 변수 역수 역할을 동시에 한다. /A03Params/:id => /A03Params/10 => id에 10이라는 값을 담는 변수 

    { path: '/A03Params/:id',     component: A03Params}
  ]
})

export default {
  name: 'App',
  router,
  
}
</script>

<style>

</style>
