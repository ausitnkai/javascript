<!--"組件結構" 的基本觀念和語法-->
<script setup>
  // 引入 Nav 子組件
  import Nav from "./Nav.vue";
  // 引入 Main 子組件
  import Main from "./Main.vue";
  import {ref} from "vue"
  let subtitle=ref("網站副標題")
  let updateSubtitle=function () {
    subtitle.value="好帥的網站副標題";
  }
</script>

<template>
  <!--1. 使用Nav的網頁架構
      2. 設定組件的自訂屬性
      設定一個屬性後 NAV.vue 會去接收這個屬性
  -->
  <!--用v-bind:做響應式的狀態-->
  <Nav 
    title="好帥的標題"
    :subtitle="subtitle"
  ></Nav>

  <!--使用Main的網頁架構，定義3個自訂屬性-->
  <!-- 宣告自訂事件:
    <組件名稱
      @自訂事件名稱="處理函式"
      @自訂事件名稱="處理函式"
      ...
    ><組件名稱>
  -->
  <Main 
    background="black"
    color="white"
    size="20px"
    @update="updateSubtitle"
  ></Main>

</template>

<style scoped>
</style>
