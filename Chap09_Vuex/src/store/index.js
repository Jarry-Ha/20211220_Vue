import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const COUNT_INCREASE = 'couter_increase';
const COUNT_DECREASE = 'couter_decrease';

const TODOLIST_ADDTODO = 'todoList_addTodo';
const TODOLIST_UPDATETODO = 'todoList_updateTodo';
const TODOLIST_DELETETODO = 'todoList_deleteTodo';
const TODOLIST_CHANGETEXT = 'todoList_changeText';

let cnt = 6;
function makeTodo() {
  const todos = [];
  for(let i = 1; i <= 5; i++) {
    todos.push({id: i, text: `${i}번째 할 일`, done: false})
  }
  return todos;
}

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
    [COUNT_INCREASE]: (state, payload) => {
      // console.log(payload)
      state.num = state.num + payload;
    },
    [COUNT_DECREASE]: (state) => {
      state.num = state.num - 1;
    }
  },
  // 컴퍼넌트가 호출 할 메서를 정의. 이 메서드를 호출해서 값을 가공하고 그 가공된 값을 mutations에 전달.
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
  // state에 있는 변수의 값을 참조할 목적으로 정의하는 함수. 함수지만 프로퍼티 처럼 사용.
  getters: {
    getNumber: state => state.num,
    getTitle: state => state.counterName
  },
  // 하위 state를 정의한다.
  modules: {
    namespaced: true,
    // state.todoList.?
    todoListR: {
      state: {
        todoList: makeTodo(),
        text: ''
      },
      mutations: {
        [TODOLIST_ADDTODO]: (state, payload) => {
          state.todoList.push(payload);
        },
        [TODOLIST_UPDATETODO]: (state, payload) => {
          const index = state.todoList.findIndex( todo => todo.id === payload );
          state.todoList[index].done = !state.todoList[index].done
        },
        [TODOLIST_DELETETODO]: (state, payload) => {
          const index = state.todoList.findIndex( todo => todo.id === payload );
          state.todoList.splice(index, 1);
        },
        [TODOLIST_CHANGETEXT]: (state, payload) => {
          state.text = payload;
        }
      },
      actions: {
        addTodoAction: (action, value) => {
          const todo = {id: cnt++, text: value, done: false};
          action.commit(TODOLIST_ADDTODO, todo);
        },
        updateTodoAction: (action, value) => {
          // state에 있는 값을 직접 조작 안함
          action.commit(TODOLIST_UPDATETODO, value);
        },
        deleteTodoAction: (action, value) => {
          // state에 있는 값을 직접 조작 안함
          action.commit(TODOLIST_DELETETODO, value);
        },
        changeTextAction: (action, value) => {
          action.commit(TODOLIST_CHANGETEXT, value);
        }
      },
      getters: {
        getTodoList: state => state.todoList,
        getText: state => state.text
      },
      modules: {}
    }
  }
});
export default store;
