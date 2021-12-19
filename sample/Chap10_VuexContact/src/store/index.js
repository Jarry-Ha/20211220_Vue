
import Vue from 'vue'
import Vuex from 'vuex'
import contact from './contact'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        contact, 
    }
});
export default store;