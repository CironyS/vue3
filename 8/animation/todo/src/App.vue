<script setup>
import Todos from "./views/Todos.vue";
</script>

<template>
  <div>
    <suspense>
      <div>
        <todos />
      </div>
    </suspense>
  </div>
</template>

<style lang="scss">
div {
  color: #fff;
}
</style>
