<script setup>
import { ref } from "vue";
const data = await fetch(`http://127.0.0.1:3003/posts/1`).then(r => r.json());
const post = ref(data);
</script>

<template>
  <div>{{ post.author }}</div>
</template>

<style scoped></style>
