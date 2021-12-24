
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


const todoListR = {
  namespaced: true,
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
export default todoListR;
