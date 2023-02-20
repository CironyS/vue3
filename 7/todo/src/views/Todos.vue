<script setup>
import Items from "../components/Items.vue";
import useTodos from "../composables/useTodos";
import Add from "../components/Add.vue";
import Sort from "../components/Sort.vue";

const { todos, load } = useTodos();

load();
</script>

<template>
  <div class="form">
    <Add class="add" />
    <Sort />
  </div>
  <div class="todos">
    <items v-for="todo of todos" :key="todo.id" :todo="todo" class="items" />
  </div>
</template>

<style lang="scss">
div.form {
  display: flex;
  margin-bottom: 20px;
  .add {
    flex: 1;
  }
}
div.todos {
  display: flex;
  flex-direction: column;

  .items {
    margin-bottom: 20px;
  }
}
</style>
