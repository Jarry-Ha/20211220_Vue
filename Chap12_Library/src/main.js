import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniAdobe, uniAnchor } from 'vue-unicons/dist/icons'

// 컴퍼넌트에서 import 없이 바로 호출해서 사용 <unicon ..></unicon>
Unicon.add([uniAdobe, uniAnchor])
Vue.use(Unicon, {
  width: 30,
  height: 30,
  fill: 'red'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
