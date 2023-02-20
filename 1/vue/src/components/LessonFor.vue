<script>
import lessons from "../data/lessons"
export default {
  data() {
    return {
      lessons,
      orderBy: 'price',
      // esc 降序 desc 升序
      orderType: 'esc'
    }
  },
  computed: {
    lessonLists: {
      get() {
        return this.lessons.sort((a, b) => {
          return this.orderType == 'esc' ? a[this.orderBy] - b[this.orderBy] : b[this.orderBy] - a[this.orderBy];
          // return a[this.orderBy] - b[this.orderBy]
        })
      },
      set(type) {
        this.orderType = type
      }
    }
  },
  methods: {
    // lessonLists() {
    //   return this.lessons.sort((a, b) => {
    //     return a[this.orderBy] - b[this.orderBy]
    //   })
    // }
  },
}
</script>

<template>
  <div>
    <button @click="orderBy = 'price'" :class=" orderBy == 'price' ? 'order-type' : '' ">价格</button>
    <button @click="orderBy = 'comments'" :class="{ 'order-type': orderBy == 'comments' }">评论数</button>
    {{ orderBy }}
    ---
    <button @click="orderType = 'desc'" :class="{ 'order-type': orderType == 'desc' }">降序</button>
    <button @click="orderType = 'esc'" :class="{ 'order-type': orderType == 'esc' }">升序</button>
    <template v-for="lesson in lessonLists" :key="lesson.id">
      <div>
        {{ lesson.title }}-价格:{{ lesson.price }}-评论数:{{ lesson.comments }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.order-type {
  background: red;
  color: white;
}
</style>