<template>
  <main>
    <div v-for="(component, index) in components" :key="index" @click="currentComponent = component.name"
      :class="{ active: component.name == currentComponent }">
      {{ component.title }}
    </div>
  </main>
  <div>
    <button @click="callComponent">点击按钮</button>
    <input type="text" ref="input" />
  </div>
  <keep-alive>
    <component :is="currentComponent" ref="component"></component>
  </keep-alive>
</template>

<script>
import Weixin from "./components/Weixin.vue"
import Site from "./components/Site.vue"
import { computed } from "vue";
import config from "./config.js";
export default {
  components: { Weixin, Site },
  provide() {
    return {
      webname: computed(
        () => {
          return this.teacher
        }
      ),
      config: this.config
    }
  },
  data() {
    return {
      teacher: "后盾人",
      currentComponent: "weixin",
      components: [
        { title: "微信管理", name: "weixin" }, { title: "站点信息", name: "site" }
      ],
      config
    }
  },
  methods: {
    callComponent() {
      this.$refs.input.value = "向军大叔";
      this.$refs.component.show();
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  margin: 20px 0 0 20px;
  box-sizing: border-box;

  div {
    border: solid 1px #ddd;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.5s;

    &.active {
      background-color: #16a085;
      color: #ffffff;
    }
  }
}
</style>