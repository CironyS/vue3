<script >
import HdButton from "./components/HdButton.vue"
export default {
  components: {
    HdButton
  },
  data() {
    return {
      // btContent: {
      //   text: "反馈"
      // }
      btContent: '反馈'
    }
  },
  methods: {
    show() {
      alert('向军大叔');
    }
  }

}
</script>

<template>
  <div>
    <!-- <hd-button hd-tip="后盾：" content="保存提交" type="success" style="margin-right: 10px;" />
    <hd-button content="删除" type="danger" style="margin-right: 10px;" />
    <hd-button content="反馈" type="success" style="margin-right: 10px;" />
    <hd-button content="禁用" style="margin-right: 10px;" :disabled="true" /> -->
    <!-- v-bind用对象的形式进行传入 -->
    <!-- <hd-button v-bind="{ content: '保存', type: 'success', style: 'margin-top:20px' }" /> -->

    <!-- <hd-button :content="btContent" type="success" class="hd" id="xj" /> -->
    <hd-button :content="btContent" type="success" @click="show" />
    <hr />
    <button @click="btContent = '向军大叔'">这是父组件</button>
    {{ btContent }}
  </div>
</template>

<style scoped>

</style>
