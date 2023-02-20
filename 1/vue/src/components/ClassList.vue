<script>
import lessons from "../data/lessons"
export default {
  data() {
    return {
      lessons: lessons
    }
  }
}
</script>

<template>
  <section :class="$attrs.class"></section>
  <main></main>
  <div class="classList">
    <div v-for="(lesson, key) in lessons" :key="index" class>
      <span :class="!lesson.isDelete ? 'span' : ''">{{ lesson.title }}</span>
      <button @click="lesson.isDelete = !lesson.isDelete">{{ lesson.isDelete ? '删除' : '添加' }}</button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.classList {
  div {
    display: flex;
    justify-content: space-between;

    span {
      &.span {
        text-decoration: line-through;
      }
    }
  }
}
</style>