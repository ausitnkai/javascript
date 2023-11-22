<!--javascript-->
<script setup> 
    let message = "<u>Hello Vue</u>";
    let checked = true;
    let number=1500;
    let data=[1,2,3];
    let char=["A","B","C"];
    let obj={"x":3, "y":4};
    console.log("我的第一個組件")
</script>
<!--HTML-->
<template> 
    <nav>基本導覽列</nav>
    <!--使用 "v-html" 產生效果效果-->
    <main v-html="message.toUpperCase()"></main>

    <!--使用 "v-bind:" 來帶入在 javascript 中設定的屬性的值-->
    <!--三元運算 : 判斷對象 ? 結果一 : 結果二-->
    <div :class="checked ? 'dark':'light'">操作標籤屬性</div>

    <!-- vue 的 if、if...else、else判斷式 -->
    <div v-if="number > 2000">大於兩千</div>
    <div v-else-if="number > 1500">大於一千五，小於兩千</div>
    <div v-else>小於一千五</div>

    <!-- vue 的 for 迴圈應用於陣列-->
    <div v-for="n in data">第{{ n }}筆資料</div>
    <div v-for="(text, index) in char">{{ index }}-{{ text }}</div>

    <!-- vue 的 for 迴圈應用於物件-->
    <div v-for="(value, key) in obj">物件屬性 {{ key }} 為 {{value}}</div>
</template>
<!--CSS-->
<style scoped> 
    main{background-color: rgb(193, 158, 224);}
    .dark{color: #666666;}
    .light{color: #d8d7d7;}
</style>