<script>
const obj = { name: '后盾人' };
const arr = ['houdunren.com', '向军'];
export default {
  data() {
    return {
      obj, arr

    }
  },
  mounted() {
    setTimeout(() => {
      this.obj.name = '向军大叔';
      this.arr.splice(0, 1)
    }, 3000)
  },
}
</script>

<template>
  <div>
    <div>{{ obj.name }}</div>
    <template v-for="(a, index) in arr" :key="index">
      <div>{{ a }}</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>