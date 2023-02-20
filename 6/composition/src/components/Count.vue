<template>
  <button @click="sub">-</button>
  <span :style="attrs.style">{{ num }}</span>
  <button @click="add">+</button>
  <div :style="attrs.style">哈哈哈</div>
  <button @click="updateUser('后盾人-向军大叔')">{{ user }}</button>
</template>

<script>
import { ref, watch, watchEffect, computed, inject } from 'vue';
export default {
  props: {
    init: {
      type: Number,
      default: 0
    }
  },
  inheritAttrs: false,
  emits: ['change'],
  setup(props, context) {
    // console.log(context);
    let user = inject('user', '后盾人');
    let updateUser = inject('updateUser');
    const { emit, expose, attrs } = context;
    let num = ref(props.init);
    // 对slots进行结构取值处理并且进行返回
    let add = () => {
      num.value++;
      emit('change');
    };
    let sub = () => {
      num.value--;
      emit('change');
    };
    watchEffect(() => {
      if (num.value < 0) num.value = 0;
      emit('change');
    });
    let sum = computed(() => num.value + 100)
    expose({ num });
    return { num, add, sub, attrs, sum, user, updateUser };
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 20px 0 0 20px;

  button {
    margin: 0 10px;
  }
}
</style>