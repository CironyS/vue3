<template>
  <div class="lesson">
    <Lesson v-for="item in db" :key="item.id" :lesson="item" @del="show"
      v-model:title.toUpperCase.substr_10="item.title" v-model:price="item.price" />
  </div>
  {{ db[0].title }}{{ db[0].price }}
</template>
<script>
import db from "../data/db"
import Lesson from "./components/Lesson.vue"
import HdInput from "./components/HdInput.vue"
export default {
  data() {
    return { db, title: "后盾人" }
  },
  components: { Lesson, HdInput },
  methods: {
    show(item) {
      const index = this.db.findIndex(l => l.id === item);
      this.db.splice(index, 1);
    },
    changeValue(event) {
      this.title = event.target.value;
      // console.log(event.target.value);
    },
    change(value) {
      this.title = value;
    }
  },
}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>