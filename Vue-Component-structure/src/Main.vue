<script setup>
  import {ref} from "vue";
  let text=ref("主要網站內容");
  let change=function () {
    text.value="新的網站內容";
  }
  // 接收自訂的屬性名稱
  defineProps(["color", "background", "size"]);
</script>

<template>

  <main 
    :style="{
      color:color, 
      backgroundColor:background,
      fontSize:size
    }"
  >

    <div @click="change">{{ text }}</div>

  </main>
</template>

<style scoped>
  main{
    padding: 10px;
    background-color: gainsboro;
  }
</style>
