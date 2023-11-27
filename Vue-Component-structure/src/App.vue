<!--"組件結構" 的基本觀念和語法-->
<script setup>
  // 引入 Nav 子組件
  import Nav from "./Nav.vue";
  // 引入 Main 子組件
  import Main from "./Main.vue";
</script>

<template>
  <!--使用Nav的網頁架構-->
  <Nav></Nav>

  <!--使用Main的網頁架構-->
  <Main></Main>

</template>

<style scoped>
</style>
