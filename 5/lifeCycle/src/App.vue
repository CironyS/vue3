<template>
  <div ref="el">
    向军大叔
    <button @click="show = !show">点击按钮</button>
    <child v-if="show" />
  </div>
</template>

<script>
import Child from "./components/Child.vue"
export default {
  data() {
    return {
      hd: '向军大叔', show: true
    }
  },
  components: {
    Child
  },
  // 创建之前 调用函数
  beforeCreate() {
    console.log(`父组件 beforeCreate` + this.hd);
    // console.log(this.$refs.el);
  },
  // 创建之后 调用函数
  created() {
    console.log(`父组件 created` + this.hd);
    // console.log(this.$refs.el);
    setTimeout(() => {
      this.hd = '后盾人';
    }, 1000)
  },
  // dom 要被挂在之前
  beforeMount() {
    console.log(`父组件 beforeMount` + this.hd);
    // console.log(this.$refs.el);
  },
  // dom 被挂载之后
  mounted() {
    console.log(`父组件 mounted` + this.hd);
    // console.log(this.$refs.el);
  },
  // 数据(组件)更新前
  beforeUpdate() {
    console.log(`父组件 beforeUpdate` + this.hd);
  },
  // 数据(组件)更新后
  updated() {
    console.log(`父组件 updated` + this.hd);
  }
}
</script>

<style lang="scss" scoped>

</style>