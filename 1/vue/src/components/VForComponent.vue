<script>
import lessons from "../data/lessons"
export default {
  data() {
    return {
      obj: {
        name: '后盾人',
        url: 'houdunren.com'
      },
      lessons
    }
  }
}
</script>

<template>
  <div>
    <!-- 数值 -->
    <!-- <div v-for="(value, key, index) in obj" :key="key">
      {{ value }} --- {{ key }}--- {{ index }}
    </div> -->

    <!-- v-if的优先级大于v-for -->
    <div v-for="(lesson, key, index) in lessons" :key="lesson.id">
      <template v-if="lesson.price > 100">
        {{ lesson.title }}
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>