<script setup>
import Items from "../components/Items.vue";
import useTodos from "../composables/useTodos";
import Add from "../components/Add.vue";
import Sort from "../components/Sort.vue";
import gsap from "gsap";

const { todos, load } = useTodos();

load();

const beforeEnter = el => {
  gsap.set(el, {
    opacity: 0,
  });
};

/**
 * duration:动画时间
 * delay:动画延迟
 * */
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    delay: el.dataset.index * 0.5,
  });
};
</script>

<template>
  <div class="form">
    <Add class="add" />
    <Sort />
  </div>
  <div class="todos">
    <transition-group
      name="todo"
      appear
      @enter="enter"
      @before-enter="beforeEnter"
    >
      <items
        v-for="(todo, index) of todos"
        :key="todo.id"
        :todo="todo"
        class="items"
        :data-index="index"
      />
    </transition-group>
  </div>
</template>

<style lang="scss">
div.form {
  display: flex;
  margin-bottom: 20px;
  .add {
    flex: 1;
  }
}
div.todos {
  display: flex;
  flex-direction: column;
  position: relative;

  .items {
    margin-bottom: 20px;
    width: 100%;
  }
  /**
  * 实现动画平移：
  * 动画在执行的时候，该元素为浮动，并且设置平移模式move
  * */
  .todo-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .todo-leave-active {
    transition: 2s ease;
    position: absolute;
  }

  .todo-move {
    transition: 2s ease;
  }
}
</style>
