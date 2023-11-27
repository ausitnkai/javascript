<script setup>
  // defineProps 定義要接收的屬性名稱 defineProps(["屬性名稱","屬性名稱",...])
  defineProps(["title"])
</script>

<template>
  <nav>
    <!--這裡就會引入我們在App.vue設定的內容-->
    {{ title }}
  </nav>
</template>

<style scoped>
  nav{
    font-size: 25px;
    font-weight: bold;
  }
</style>
