<script>
export default {
  methods: {
    d1() {
      console.log('d1');

    },
    d2() {
      // event.stopPropagation(); 阻止事件冒泡
      console.log('d2');
    },
    link(event) {
      event.preventDefault();

    }
  }
}
</script>

<template>
  <!-- 阻止冒泡 @click.stop -->
  <!-- 捕获方式执行事件 @click.capture -->
  <!-- .self 仅当 event.target 是元素本身时才会触发  -->
  <!-- .once 该事件只执行一次  -->
  <!-- .passive 向浏览器表明了你不想阻止事件的默认行为 -->
  <div @scroll="d1" style="background-color: green;height:300px;overflow-y: auto;">
    <div @click="d2" style="background-color: red;height:2000px;">d2</div>
  </div>
  <!-- 阻止默认跳转.prevent -->
  <a href="https://www.houdunren.com" @click.passive="link">后盾人</a>
</template>

<style lang="scss" scoped>

</style>