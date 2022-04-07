<template>
  <div class="container">
    <div class="todo-menu" v-show="haveComleted">
      <button @click="clearCompleted">Clear comleted</button>
    </div>
    <ul class="todos-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        <span
          class="todo-content"
          :class="{ done: todo.status }"
          @click="markItDone(todo)"
          >{{ todo.text }}</span
        >
        <span class="del-todo" @click="deleteTodo(todo.id)">Delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    haveComleted() {
      return !!this.$store.getters.completedTodos.length;
    },
  },
  methods: {
    markItDone(todo) {
      if (todo.status) return;
      this.$store.commit('completeTodo', todo.id);
      this.$store.dispatch('saveTodos');
    },
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id);
      this.$store.dispatch('saveTodos');
    },
    clearCompleted() {
      this.$store.getters.completedTodos
        .map((todo) => todo.id)
        .forEach((id) => this.$store.commit('deleteTodo', id));
      this.$store.dispatch('saveTodos');
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  width: 40%
  margin: 0 auto

.todo-menu
  text-align: right

.todos-list
  list-style: none
  text-align: left

.todo-item
  padding: 10px

.todo-content
  cursor: pointer
  font-size: 20px
  line-height: 1.5
  transition: font-weight .5s ease-in-out
  &:hover
    font-weight: bold

.del-todo
  cursor: pointer
  color: #ed8060
  font-size: 14px
  float: right
  &:hover
    color: #f84510
    font-weight: normal

.todos-status
  display: flex
  justify-content: space-around

.done
  text-decoration: line-through
  color: #dadadc
  &:hover
    font-weight: normal
</style>
