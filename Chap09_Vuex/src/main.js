import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

// 폴더 내부에 불러올 파일명이 index인 경우는 생략 가능하다.
// 단일 스토어만 지원한다.
import store from './store'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

// npm i vuex
