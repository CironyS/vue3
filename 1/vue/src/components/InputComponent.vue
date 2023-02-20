<script>
const lessons = [{ title: 'php', value: 'php' }, { title: 'linux', value: 'linux' }, { title: 'nest.js', value: 'nest.js' }];
const form = { title: 'houdunren.com', content: '后盾人', isPost: false, lessons: [], sex: 1, city: [], citys: ['北京', '武汉'] };
export default {
  data() {
    return {
      form, lessons,
      hd: "houdunren.com", num: 100, title: "后盾人"
    }
  },
  watch: {
    title(n) {
      console.log(n.length)
    }
  }
}
</script>

<template>
  <div>
    <!-- <input type="text" v-model="form.title">
    {{ form }}
    <textarea v-model="form.content"></textarea> -->
    <!-- 指定默认值 true-value="yes" false-value="no" -->
    <!-- <input type="checkbox" v-model="form.isPost">
    发布
    <hr />
    <label for="" v-for="lesson of lessons" :key="lesson.value">
      <input type="checkbox" v-model="form.lessons" :value="lesson.title">{{ lesson.title }}
    </label>
    <div>{{ form }}</div>
    <hr /> -->

    <!-- 单选框 -->
    <input type="radio" v-model="form.sex" :value="1">男
    <input type="radio" v-model="form.sex" :value="2">女
    {{ form }}

    <!-- 下拉框 -->
    <hr />
    <!-- multiple 支持下拉框进行多选 -->
    <select v-model="form.citys" multiple>
      <option value>===请选择===</option>
      <option value="北京">北京</option>
      <option value="武汉">武汉</option>
    </select>
    <hr />
    <!-- lazy:由input事件转换为change事件 -->
    <input type="text" v-model.lazy="hd">
    {{ hd }}
    <!-- number:将获取的字符转换为数字 -->
    <hr />
    <input type="text" v-model.number="num">
    {{ num + 100 }}
    <hr />
    <!-- trim:将空格进行去除 -->
    <input type="text" v-model.trim="title">
    {{ title }}
  </div>
</template>

<style lang="scss" scoped>

</style>