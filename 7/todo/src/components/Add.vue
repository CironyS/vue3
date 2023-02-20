<script setup>
import { ref } from "vue";
import useTodos from "../composables/useTodos";
const title = ref("");
const onSubmit = () => {
  useTodos().add({ title: title.value });
  title.value = "";
};
</script>

<template>
  <div class="add">
    <input
      type="text"
      v-model="title"
      @keydown.enter="onSubmit"
      placeholder="请输入内容"
    />
  </div>
</template>

<style lang="scss">
div.add {
  display: flex;
  input {
    flex: 1;
    padding: 10px;
    border: solid 5px #16a085;
  }
}
</style>
