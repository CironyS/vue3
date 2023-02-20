<template>
  <div>
    <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">
      <template #icon>
        :)
      </template>
      <template #default="{ id }">
        <button @click="del(id)">删除</button>
      </template>
    </lesson>
  </div>
</template>

<script>
import lesson from "./components/Lesson.vue"
import lessons from '../data/db'
export default {
  components: { lesson },
  data() {
    return { lessons }
  },
  methods: {
    del(id) {
      const index = this.lessons.findIndex((l) => l.id == id);
      if (index != -1) {
        this.lessons.splice(index, 1);

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>