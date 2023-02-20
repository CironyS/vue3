<script>
import Card from "./components/Card.vue";
import HdButton from "./components/Button.vue";
export default {
  components: {
    Card, HdButton
  },

}
</script>

<template>
  <div>
    <card>
      <template #header>社区小贴</template>
      <template #main>后盾人是一个主张友好、分享、自由的技术交流社区。</template>
      <template #footer>后盾人 人人做后盾</template>
    </card>
  </div>
</template>

<style lang="scss" scoped>

</style>