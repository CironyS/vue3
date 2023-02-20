<script setup>
import { ref } from "vue";
// import Hd from "./components/Hd.vue";
import Trans from "./components/Trans.vue";
import Xj from "./components/Xj.vue";
const show = ref(false);

const beforeEnter = el => {
  gsap.set(el, {
    opacity: 0,
  });
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: 2,
    onComplete: done,
  });
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    duration: 2,
    onComplete: done,
  });
};
</script>

<template>
  <!-- <Hd v-if="show">保存提交</Hd> -->
  <!-- <transition name="trans">
    <Trans v-if="show">向军大叔</Trans>
  </transition> -->
  <!-- beforeEnter enter afterEnter beforeLeave leave afterLeave -->
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <Xj v-if="show">向军大叔</Xj>
  </transition>
  <button @click="show = !show">切换</button>
</template>

<style lang="scss" scoped>
button {
  display: block;
  margin-top: 10px;
}

.trans-enter-from,
.trans-leave-to {
  opacity: 0;
}

.trans-enter-active,
.trans-leave-active {
  transition: 2s ease;
}

.hd-enter {
  animation: identifier 2s ease;
}

.hd-leave {
  animation: identifier 2s ease reverse;
}

@keyframes identifier {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1) rotateX(360deg);
  }
}
</style>
