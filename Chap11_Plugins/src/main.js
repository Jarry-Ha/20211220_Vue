import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import CustomPlugin from './modules/custom'

Vue.use(CustomPlugin, {
  name: 'NolBu'
})

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      cnt: 10,
      person: {name: 'Nolbu', age: 20}
    }
  },
  methods: {
    increasCnt: function() {
      this.cnt += 1;
    },
    decreaseCnt: function() {
      this.cnt -= 1;
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')