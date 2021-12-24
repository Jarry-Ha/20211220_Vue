<template>
  <div class="card-body">
      <h1>Vuex Contact</h1>

      <!-- <div>
          <router-link to="/Home">HOME</router-link> | 
          <router-link to="/About">About</router-link> | 
          <router-link to="/ContactGetList">GetList</router-link> | 
          <router-link to="/ContactGetItem">GetList</router-link> | 
          <router-link to="/ContactAdd">GetList</router-link> | 
          <router-link to="/ContactUpdate">Update</router-link> | 
      </div> -->
      <ContactHader></ContactHader>
      <hr>

      <div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import ContactHader from './components/ContactHader.vue'
import ContactGetList from './components/ContactGetList.vue'
import ContactGetItem from './components/ContactGetItem.vue'
import ContactAdd from './components/ContactAdd.vue'
import ContactUpdate from './components/ContactUpdate.vue'

const router = new VueRouter({
    routes: [
        { path: '/Home',              component: Home},
        { path: '/About',             component: About},
        { path: '/ContactGetList',    component: ContactGetList},
        { path: '/ContactGetItem',    component: ContactGetItem},
        { path: '/ContactAdd',    component: ContactAdd},
        { path: '/ContactUpdate',    component: ContactUpdate},
    ]
})
export default {
    router,
    components: {ContactHader},
    computed: {},
    methods: {}
}
</script>

<style>

</style>
