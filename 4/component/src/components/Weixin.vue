<script>
export default {
  inject: ['config'],
  methods: {
    show() {
      alert('我是向军大叔');
    }
  }
}
</script>

<template>
  <div>
    <card>
      <template #header>
        微信支付
      </template>
      <div>
        <x-input title="appid" v-model="config.weixin.appid" />
        <x-input title="secret" v-model="config.weixin.secret" />
      </div>
    </card>
  </div>
</template>
