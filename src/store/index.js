import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.status);
    },
    activeTodos(state) {
      return state.todos.filter((todo) => !todo.status);
    },
    allTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (~index) {
        state.todos.splice(index, 1);
      }
    },
    completeTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (~index) {
        state.todos[index].status = true;
      }
    },
  },
  actions: {
    importTodos({ commit }) {
      const todos = window.localStorage.getItem('todos');
      [...JSON.parse(todos)].forEach((todo) => {
        commit('addTodo', todo);
      });
    },
    saveTodos({ state }) {
      window.localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
  modules: {},
});
