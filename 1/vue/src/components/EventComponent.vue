<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    sum(...args) {
      this.num = args.reduce((s, m) => s + m, this.num)
    },
    ev(...args) {
      const event = args.pop();
      console.log(event);
    }
  }
}
</script>

<template>
  <div>
    <!-- <div @click="sum(199, 1001, 100)">{{ num }}</div> -->
    <div @click="ev(1, 1, 2, 2, 3, 3, 3, $event), sum(199, 1001, 100)">事件对象</div>
    <div>{{ num }}</div>
  </div>
</template>

<style lang="scss" scoped>

</style>