<template>
  <div id="app">
    <h1>欢迎，{{msg}}</h1>
  </div>
</template>

<script setup lang="ts">
import {userStore} from '@/store/user';
import { storeToRefs } from 'pinia';

const user = userStore();
user.login('Kuei');
const msg = user.welcomeMsg;
const userInfo = storeToRefs(user);
console.log(userInfo);
</script>
<style scoped>

</style>
