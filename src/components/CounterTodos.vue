<template>
  <div class="todos-status">
    <span class="active-todos counter"> Active: {{ activeTodosCount }} </span>
    <span class="done-todos counter"> Done: {{ completedTodosCount }} </span>
  </div>
</template>

<script>
export default {
  computed: {
    activeTodosCount() {
      return this.$store.getters.activeTodos.length;
    },
    completedTodosCount() {
      return this.$store.getters.completedTodos.length;
    },
  },
};
</script>

<style scoped>
.counter {
  font-size: 14px;
  padding: 10px 20px;
  width: 50px;
  appearance: none;
}
</style>
