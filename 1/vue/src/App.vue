<script>
import ClassComponent from "./components/ClassComponent.vue";
import ClassList from "./components/ClassList.vue"
import StyleComponent from "./components/StyleComponent.vue"
import IfCommentVue from "./components/IfComment.vue";
import VForComponent from "./components/VForComponent.vue";
import LessonFor from "./components/LessonFor.vue"
import ArrComponent from "./components/ArrComponent.vue"
import EventComponentVue from "./components/EventComponent.vue";
import EventFixComponent from "./components/EventFixComponent.vue";
import KeyComponent from "./components/KeyComponent.vue";
import InputComponent from "./components/InputComponent.vue"
export default {
  data() {
    return {
      title: '后盾人',
      name: 'abc'
    }
  },
  components: {
    // ClassComponent, ClassList
    // StyleComponent
    // IfCommentVue
    // VForComponent
    // LessonFor
    // ArrComponent
    // EventComponentVue
    // EventFixComponent
    // KeyComponent
    InputComponent
  }
}
</script>

<template>
  <div>
    <!-- <div class="hd">{{ title }} - {{ name }}</div> -->
    <!-- <ClassComponent /> -->
    <!-- <ClassList class="hdcms" /> -->
    <!-- <StyleComponent /> -->
    <!-- <IfCommentVue /> -->
    <!-- <VForComponent /> -->
    <!-- <LessonFor /> -->
    <!-- <ArrComponent /> -->
    <!-- <EventComponentVue /> -->
    <!-- <EventFixComponent /> -->
    <!-- <KeyComponent /> -->
    <InputComponent />
  </div>
</template>

<style>
.hd {
  background: red;
}
</style>
