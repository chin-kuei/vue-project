<template>
  <ul>
    <li><RouterLink to="/news/detail/3/新闻标题3/新闻内容3">新闻3</RouterLink></li>
    <li><RouterLink :to="{
      name:'newsDetail',
      params:{id:4,title:'新闻标题4',content:'新闻内容4'}
    }">新闻4</RouterLink></li>
  </ul>
  <br>
  <div class="news-content">
    <RouterView/>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.news-content {
  background: white;
  height: 300px;
  width: 900px;
  border: 1cap;
  border-radius: 10px;
}
</style>
