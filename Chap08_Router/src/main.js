import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

// this.$route, this.$router
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// npm i vue-router
