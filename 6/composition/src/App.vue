<template>
  <div>
    <count @change="changeHandle" ref="countComponent" style="color:red">
    </count>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import { ref, provide } from "vue";
export default {
  components: { Count },
  setup() {
    /**
     * 父组件改变数组定义响应式数据就可以了
     * 子组件改变数据，父组件定义方法，子组件进行接受，并且将改变的值传递给父组件进行修改
     */
    let user = ref('向军大叔');
    provide('user', user);
    provide('updateUser', (newValue) => {
      user.value = newValue;
    });
    setTimeout(() => { user.value = "后盾人" }, 1500)
    let num = ref(10);
    let countComponent = ref();

    let changeHandle = () => countComponent.value?.num
    return { num, changeHandle, countComponent };
  }
}
</script>

<style lang="scss" scoped>

</style>