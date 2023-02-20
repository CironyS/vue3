<script>
export default {
  methods: {
    key(event) {
      console.log(event.key);
    },
    hd(event) {
      console.log(event);
    }
  }
}
</script>

<template>
  <div>案件事件</div>
  <!-- ctrl alt shift meta -->
  <!-- enter esc tab space delete up down left right -->
  <input type="text" @keyup.up="key">
  <!-- 结合鼠标来使用 -->
  <!-- .exact严格限制：仅当按下 Ctrl 且未按任何其他键时才会触发  -->
  <div style="height:700px;background-color:green" @click.alt.exact="hd"></div>

</template>

<style lang="scss" scoped>

</style>