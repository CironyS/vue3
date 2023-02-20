<template>
  <div class="ClassComponent">
    这是ClassComponent组件
    <div class="hdcms">{{ title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '后盾人',
      name: 'abc'
    }
  },
}
</script>

<style lang="scss">
.ClassComponent {
  .hdcms {
    background: red
  }
}
</style>