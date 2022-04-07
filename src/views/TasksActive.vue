<template>
  <ListTodos :todos="todos" />
</template>

<script>
import ListTodos from '@/components/ListTodos.vue';

export default {
  components: {
    ListTodos,
  },
  computed: {
    todos() {
      return this.$store.getters.activeTodos;
    },
  },
};
</script>
