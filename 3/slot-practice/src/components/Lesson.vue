<template>
  <div>
    <slot name="icon"></slot>
    {{ lesson.title }}
    <slot :id="lesson.id"></slot>
  </div>
</template>

<script>
export default {
  props: ['lesson']
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px #ddd
}
</style>