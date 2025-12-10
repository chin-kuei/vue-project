<template>
  <p>新闻{{ params.id }}</p>
  <br>
  <p>{{ params.title }}</p>
  <br>
  <p>{{ params.content }}</p>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useRoute } from 'vue-router';

const params = toRef(useRoute(),'params');
console.log(params.value);
</script>
<style scoped></style>
