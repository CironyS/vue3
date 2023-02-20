<script>
export default {
  /**
   * 如果父组件的model省略绑定的参数，那么子组件就一定要指定绑定的值
   */
  // 指定绑定的值
  props: ["modelValue"],
  // 指定绑定的值
  emits: ['update:modelValue'],
  data() {
    return {
      // 指定绑定的值
      content: this.modelValue
    }
  },
  methods: {
    change(event) {
      this.content = event.target.value;
      // 指定绑定的值
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<template>
  <div>
    <input type="text" :value="content" @input="change" />
    这是子组件的：{{ content }}
  </div>
</template>

<style lang="scss" scoped>

</style>