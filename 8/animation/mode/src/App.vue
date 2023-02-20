<script setup>
import { ref } from "vue";
import "animate.css";
const action = ref("on");
</script>

<template>
  <!-- mode="in-out"
    mode：设置是先是显示后隐藏还是先隐藏后显示
  -->
  <div class="app">
    <transition
      enter-active-class="animate__animated animate__zoomIn xj"
      leave-active-class="animate__animated animate__zoomOut xj"
    >
      <button class="on" v-if="action == 'on'" @click="action = 'off'">
        开启
      </button>
      <button class="off" v-else @click="action = 'on'">关闭</button>
    </transition>
  </div>
</template>

<style lang="scss">
div.app {
  position: relative;

  &.xj {
    animation-duration: 10s;
  }

  button {
    position: absolute;
    padding: 5px 10px;
    border: none;
    color: #fff;

    &.on {
      background-color: #27ae60;
    }
    &.off {
      background-color: #e67e22;
    }
  }
}
</style>
