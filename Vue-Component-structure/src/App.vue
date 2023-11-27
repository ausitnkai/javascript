<!--"組件結構" 的基本觀念和語法-->
<script setup>
  // 引入 Nav 子組件
  import Nav from "./Nav.vue";
  // 引入 Main 子組件
  import Main from "./Main.vue";
</script>

<template>
  <!--1. 使用Nav的網頁架構-->
  <!--2. 設定組件的自訂屬性-->

  <!--設定一個屬性後 NAV.vue 會去接收這個屬性-->
  <Nav title="好帥的標題"></Nav>

  <!--使用Main的網頁架構-->

  <!--定義3個自訂屬性-->
  <Main 
    background="black"
    color="white"
    size="20px"
  ></Main>

</template>

<style scoped>
</style>
