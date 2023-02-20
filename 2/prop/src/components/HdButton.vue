<script >
let arr = ['success', 'danger', 'info'];
export default {
  // 禁用父组件传递子组件属性子组件没有在接值的情况下属性默认放在最外面的标签上
  inheritAttrs: false,
  props: {
    content: {
      type: String,
      default: '保存文件',
      // 必须要传递的参数
      required: true,
    },
    /**
     * 父组件传递给子组件的时候，如果传递过来的是基本类型的数据，那么子组件数据发生改变不会影响到父组件的数据；如果父组件传递过来的数据是引用类型，那么子组件修改数据的时候，父组件的数据也会发生改变，props只是单向数据流，并不是双向数据流
     * props想进行响应式数据的话，子组件接到父组件传递过来的值存储在data当中进行存储后才能进行数据的响应式操作
     * props传递过来的数据放到data当中存储的时候，当父级数据发生改变，这是如果子组件也要发生改变，那么使用watch要监听父组件的数据变化，修改子组件的数据
     */
    // content: {
    //   type: Object,
    // },
    arr: {
      type: Array,
      default() {
        return ['1,2', '3']
      }
    },
    type: {
      type: String,
      default: 'info',
      // 对传过来的参数进行校检
      validator(v) {
        return arr.includes(v);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hdTip: String,
    // click: { type: Function }
  },
  data() {
    return {
      text: this.content
    }
  },
  // $attrs用法
  // https://blog.csdn.net/weixin_39415598/article/details/125457250
  mounted() {
    console.log(this.$attrs);
  },
  methods: {
    btnClick() {
      this.text = 'loading';
      setTimeout(() => {
        this.text = this.content;
      }, 3000)
    }
  }, watch: {
    content(v) {
      this.text = v;
    }
  }
}
</script>

<template>
  <section>
    <!-- <div :id="$attrs.id" class="hd-button" :class="[type, { disabled: disabled }]" :style="$attrs.style" -->
    <!-- @click="btnClick"> -->
    <!-- 也可以对传过来的值进行判断 -->
    <!-- <span v-if="hdTip">{{ hdTip }}</span> -->
    <!-- {{ text }} -->
    <!-- </div> -->
    <!-- {{ content }} -->
    <!-- <hr /> -->
    <!-- <button @click="text = '后盾人'">这是子组件</button> -->
    <!-- {{ text }} -->

    <button v-bind="$attrs">我的父组件传递过来的click</button>
  </section>
</template>

<style lang="scss" scoped>
.hd-button {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  color: #ecf0f1;
  opacity: .6;
  transition: 1s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.info {
    background-color: #ddd;
  }

  &.success {
    background-color: #2ecc71;
  }

  &.danger {
    background-color: #c0392b;
  }

  &.disabled {
    background-color: #aaa !important;
    color: #666;
    cursor: default;
  }
}
</style>