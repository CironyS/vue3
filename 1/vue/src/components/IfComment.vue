<script>
import lessons from '../data/lessons';
export default {
  data() {
    return {
      lessons: lessons
    }
  }
}
</script>

<template>
  <div>
    <div v-for="(lesson, index) in lessons" :key="index">
      <div v-show="lesson.isDelete" style="background-color:green">{{ lesson.title }}</div>
      <!-- <div v-else-if="lesson.price > 100" style="background-color:red">{{ lesson.title }}</div> -->
      <!-- <template v-else>{{ lesson.title }} </template> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>