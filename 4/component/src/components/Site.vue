<script>
export default {
  inject: ['config'],
  data() { return { teacher: "向军大叔" } }
}
</script>

<template>
  <div>
    <card>
      <template #header>
        站点信息
      </template>
      <div>
        <!-- 微信：
        <input type="text"> -->
        <!-- appName -->
        <x-input title="网站名称" v-model="config.site.title" />
        <x-input title="网站介绍" v-model="config.site.desc" />
        <x-input title="老师" v-model="teacher" />
      </div>
    </card>
  </div>
</template>
