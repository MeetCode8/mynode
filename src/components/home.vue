<template>
  <div>
    <h2>首页</h2>

    <router-link to="/home/messages">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scope>
</style>