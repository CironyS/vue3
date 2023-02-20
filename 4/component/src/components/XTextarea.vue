<script>
export default {
  // props: ['title', 'modelValue'],
  props: {
    title: String,
    modelValue: String,
    rows: {
      type: Number,
      default: 3
    }
  },
  emits: ['update:modelValue'],
  inject: ["webname"],
  data() {
    return {
      content: this.modelValue,
    }
  },
}
</script>

<template>
  <label>
    <div>{{ title }}</div>
    <!-- <input type="text" v-model="content" /> -->
    <textarea type="text" v-model="content" :rows="rows" @input="$emit('update:modelValue', $event.target.value)" />
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

  textarea {
    color: #666;
    outline: none;
    border: solid 2px #ddd;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>