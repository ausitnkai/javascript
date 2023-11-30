<script setup>
  import {ref} from "vue";
  // 接收自訂的屬性名稱
  defineProps(["color", "background", "size"]);
  let text=ref("主要網站內容");
  let change=function () {
    text.value="新的網站內容";
  }
  // 接收自訂的事件名稱
  let emit = defineEmits(["update"]);
  let updateAppSubtitle=function(){
    emit("update");
  }
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
    <!--呼叫App.vue中的自訂事件
      1. 使用使用 $emit('自訂事件名稱')
      <button @click="$emit('update')">改變副標題</button>
      2. 利用在子組件所定義的函式，再去呼叫我們所接收到的自訂事件名稱
    -->
    <button @click="updateAppSubtitle">改變副標題</button>
  </main>
</template>

<style scoped>
  main{
    padding: 10px;
    background-color: gainsboro;
  }
</style>
