import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // root state. 꺼낼때 state.?
  // 각 컴퍼넌트에서 사용할 변수를 관리한다. 이 변수가 변경되면 사용한 컴퍼넌트가 리 렌더링된다
  state: {
    num: 0,
    counterName: 'Counter Store'
  },
  // actions로부터 받은 값을 가지고 state의 변수값을 어떻게 변경 할 것인가를 기술
  // state 변수 변경에 관련된 작업만 취급
  mutations: {

  },
  // 컴퍼넌트가 호출 할 메서를 정의. 이 메서드를 호출해서 값을 가공하고 그 가공된 값을 mutations에 전달.
  actions: {

  },
  // state에 있는 변수의 값을 참조할 목적으로 정의하는 함수. 함수지만 프로퍼티 처럼 사용.
  getters: {

  },
  // 하위 state를 정의한다.
  modules: {
    namespaced: true,
    // state.todoList.?
    todoList: {
      state: {},
      mutations: {},
      actions: {},
      getters: {},
      modules: {}
    }
  }
});
export default store;
