<script>
export default {
  data() {
    return {
      hdStyle: {
        border: "solid 10px black"
      }
    }
  },
  computed: {
    styles() {
      return { backgroundColor: 'green' }
    }
  }
}
</script>

<template>
  <div>
    <div style="background-color:red" :style="[styles, hdStyle]">后盾人</div>
  </div>
</template>

<style lang="scss" scoped>

</style>