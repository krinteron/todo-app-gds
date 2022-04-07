<template>
  <div class="input-container">
    <input
      type="text"
      id="new-todo"
      placeholder="to do something"
      v-model="newTodoInput"
      v-on:keydown.enter="addTodo"
    />
    <button class="add-new-btn" @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      newTodoInput: '',
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodoInput) return;
      const id = uuidv4();
      const newTodo = {
        id,
        text: this.newTodoInput,
        status: false,
      };
      this.$store.commit('addTodo', newTodo);
      this.$store.dispatch('saveTodos');
      this.newTodoInput = '';
    },
  },
};
</script>

<style lang="sass" scoped>
.input-container
  width: 100%
  font-size: 18px

#new-todo
  padding: 5px 10px
  line-height: 1

#new-todo:focus
  outline: none

.add-new-btn
  padding: 6px 10px
  border: 1px solid #dadadc
  background-color: #efefef

.add-new-btn:hover
  cursor: pointer
</style>
