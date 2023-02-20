<script setup>
import useTodods from "../composables/useTodos";
const { todo } = defineProps({
  todo: { type: Object, required: true },
});

const { del } = useTodods();
</script>

<template>
  <div class="items">
    <input type="text" :value="todo.title" />
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<style lang="scss">
div.items {
  display: flex;

  input {
    flex: 1;
    padding: 10px;
    outline: none;
  }
  button {
    margin-left: 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
  }
}
</style>
