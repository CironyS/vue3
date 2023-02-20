<template>
  <div>
    <img :src="lesson.preview" alt="" />
    <h3>
      <!-- 
        注意：
        1.单击时间为@click，双击事件为@dblclick
        2.失去焦点事件为@blur
        3.按下回车键消失@keyup.enter
       -->
      <input type="text" v-if="inputShow" @blur="inputShow = false" @keyup.enter="inputShow = false"
        :value="lesson.title" @input="changeInput" />
      <strong v-else @dblclick="inputShow = true">{{ lesson.title }}</strong>
      <hr />
      <input type="text" v-if="inputPirceShow" @blur="inputPirceShow = false" @keyup.enter="inputPirceShow = false"
        :value="lesson.price" @input="$emit('update:price', $event.target.value)" />
      <strong v-else @dblclick="inputPirceShow = true">{{ lesson.price }}</strong>
    </h3>
    {{ lesson.title }}
    {{ lesson.price }}
    <!-- 使用自定义事件 -->
    <span @click="del">x</span>
  </div>
</template>

<script>
export default {
  props: ["lesson", "title", "price", "titleModifiers"],
  // 用emits来接受父组件传过来的自定义的事件
  emits: {
    'update:title': null,
    "update:price": null,
    // 做验证
    del(v) {
      if (/^\d+$/.test(v)) {
        return true;
      } else {
        // console.error("del emit 需要数值参数");
        throw new Error("del emit 需要数值参数");
      }
    }
  },
  data() {
    return {
      inputShow: false,
      inputPirceShow: false,
    }
  },
  methods: {
    // 使用自定义事件
    del() {
      this.$emit('del', this.lesson.id);
    },
    //对自定义修饰符进行处理
    changeInput($event) {
      let value = $event.target.value;
      // 转换成大写
      if (this.titleModifiers.toUpperCase) {
        value = value.toUpperCase();
        // this.$emit("update:title", value);
      }
      // 截取字符串处理
      let arr = Object.keys(this.titleModifiers).find(m => /^substr_\d+$/.test(m));
      if (arr) {
        let num = arr.split("_")[1];
        value = value.substr(0, num);
      }
      this.$emit("update:title", value);


    }
  },
  created() {
    console.log(this.titleModifiers);
  },
}
</script>

<style lang="scss" scoped>
div {
  border: solid 1px #ddd;
  text-align: center;
  transition: 1s;

  position: relative;

  &:hover {
    box-shadow: 0 0 20px #aaa;

    >span {
      opacity: 1;
    }
  }

  span {
    display: block;
    background-color: #666;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: 1s;
  }

  h3 {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 16px;
  }
}
</style>