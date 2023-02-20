<template>
  <div ref="el">
    向军大叔
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: '向军大叔',
      timeId: '',
    }
  },
  // 创建之前 调用函数
  beforeCreate() {
    console.log(`子组件 beforeCreate` + this.hd);
    console.log(this.$refs.el);
  },
  // 创建之后 调用函数
  created() {
    console.log(`子组件 created` + this.hd);
    console.log(this.$refs.el);
    this.timeId = setInterval(() => {
      console.log('后盾人')
    }, 500)
  },
  // dom 要被挂在之前
  beforeMount() {
    console.log(`子组件 beforeMount` + this.hd);
    console.log(this.$refs.el);
  },
  // dom 被挂载之后
  mounted() {
    console.log(`子组件 mounted` + this.hd);
    console.log(this.$refs.el);
  },
  // 数据(组件)更新前
  beforeUpdate() {
    console.log(`子组件 beforeUpdate` + this.hd);
  },
  // 数据(组件)更新后
  updated() {
    console.log(`子组件 updated` + this.hd);
  },
  // 数据(组件)卸载前
  beforeUnmount() {
    console.log(`子组件 beforeUnmount` + this.hd);
  },
  // 数据(组件)卸载后
  unmounted() {
    console.log(`子组件 unmounted` + this.hd);
    clearInterval(this.timeId);
  }
}
</script>

<style lang="scss" scoped>

</style>