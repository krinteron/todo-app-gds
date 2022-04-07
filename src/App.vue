<template>
  <input-component />
  <nav>
    <router-link to="/">Все</router-link> |
    <router-link to="/done">Выполненные</router-link> |
    <router-link to="/active">Активные</router-link>
  </nav>
  <router-view />
  <counter-todos />
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import CounterTodos from '@/components/CounterTodos.vue';
export default {
  created() {
    this.$store.dispatch('importTodos');
  },
  components: {
    InputComponent,
    CounterTodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
