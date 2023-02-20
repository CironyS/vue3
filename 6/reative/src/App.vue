<script>
import { ref, reactive, toRefs } from "vue";
export default {
  setup() {
    let hd = reactive({ name: '后盾人' })
    let change = () => {
      hd.name = '向军大叔';
    }
    return { ...toRefs(hd), change }
  }
}
</script>

<template>
  <button @click="change">{{ name }}</button>
</template>
