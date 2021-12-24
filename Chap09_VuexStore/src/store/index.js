import Vue from 'vue'
import Vuex from 'vuex'

import counterR from './counterR'
import todoListR from './todoListR'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { counterR, todoListR }
});
export default store;
