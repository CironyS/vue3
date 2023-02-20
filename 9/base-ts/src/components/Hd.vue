<script setup lang="ts">
import { all, find } from "../apis/article";

const { response: articles } = await all();
const { response: article } = await find(1);
</script>

<template>
  <!-- <button @click="state = !state">toggle</button> -->
  <!-- <div v-for="acticle of acticles" :key="acticle.id">{{ acticle.title }}</div> -->
  <div v-for="article of articles" :key="article.id">{{ article.title }}</div>
  <hr />
  <div>{{ article }}</div>
</template>
