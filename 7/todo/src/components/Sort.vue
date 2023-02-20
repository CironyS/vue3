<script setup>
import useTodos from "../composables/useTodos";
const { orderBy } = useTodos();
const clickCrder = () => {
  orderBy.value = orderBy.value == "asc" ? "desc" : "asc";
};
</script>

<template>
  <div class="sort">
    <button @click="clickCrder">
      {{ orderBy == "asc" ? "升序" : "降序" }}
    </button>
  </div>
</template>

<style lang="scss">
div.sort {
  display: flex;
  button {
    margin-left: 10px;
    background-color: #16a085;
    color: #fff;
    border: none;
    padding: 5px 10px;
  }
}
</style>
