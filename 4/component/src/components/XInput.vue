<script>
export default {
  props: ['title', 'modelValue'],
  emits: ['update:modelValue'],
  inject: ["webname"],
  data() {
    return {
      content: this.modelValue,
    }
  },
  watch: {
    content(v) {
      this.$emit('update:modelValue', v);
    }
  }
}
</script>

<template>
  <label>
    <div>{{ title }}</div>
    <input type="text" v-model="content" />
  </label>
</template>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    width: 100px;
    color: #666;
    font-size: 16px;
    margin-right: 10px;
  }

  input {
    color: #666;
    outline: none;
    border: solid 2px #ddd;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>