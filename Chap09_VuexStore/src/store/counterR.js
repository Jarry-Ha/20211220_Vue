
const COUNT_INCREASE = 'couter_increase';
const COUNT_DECREASE = 'couter_decrease';

const counterR = {
  namespaced: true,
  state: {
    num: 0,
    counterName: 'Counter Store'
  },

  mutations: {
    [COUNT_INCREASE]: (state, payload) => {
      // console.log(payload)
      state.num = state.num + payload;
    },
    [COUNT_DECREASE]: (state) => {
      state.num = state.num - 1;
    }
  },

  actions: {
    increaseAction: (action, value) => {
      console.log(action);
      let data = Number(value);
      if(isNaN(data)) data = 0;
      action.commit(COUNT_INCREASE, data);
    },
    decreaseAction: (action) => {
      action.commit(COUNT_DECREASE);
    }
  },

  getters: {
    getNumber: state => state.num,
    getTitle: state => state.counterName
  },

  modules: {}
}
export default counterR;
