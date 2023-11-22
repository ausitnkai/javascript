<!--javascript-->
<script setup> 
    let message = "Hello " + window.prompt("請輸入姓名","");
    let checked = true;
    let level=0;
    let topic=["HTML","CSS","JavaScript","Vue.js"];
    let objTopic={
        html:"https://zh.wikipedia.org/zh-tw/HTML",
        css:"https://zh.wikipedia.org/wiki/CSS",
        js:"https://zh.wikipedia.org/wiki/JavaScript",
        vue:"https://zh.wikipedia.org/wiki/Vue.js"

    };
    console.log("我的第一個組件")
</script>
<!--HTML-->
<template> 
    <nav>基本導覽列</nav>
    
    <div v-html="message" class="animation"></div>

    <!--使用 "v-bind:" 來帶入在 javascript 中設定的屬性的值-->
    <!--三元運算 : 判斷對象 ? 結果一 : 結果二-->
    <div :class="checked ? 'dark':'light'">操作標籤屬性</div>

    <!-- vue 的 if、if...else、else判斷式 -->
    <div v-if="level===3">大神</div>
    <div v-else-if="level===2">資深</div>
    <div v-else-if="level===1">中階</div>
    <div v-else>
        <div>入門</div>
        <ul>
            <!-- vue 的 for 迴圈應用於陣列-->
            <!--提取陣列的索引號-->
            <li v-for="(name,index) in topic">{{ index }} - {{ name }}</li>
        </ul>
    </div>

    <!-- vue 的 for 迴圈應用於物件-->
    <div v-for="(value, key) in objTopic">推薦 {{ key }} 的相關介紹 {{value}}</div>
</template>
<!--CSS-->
<style scoped> 
    main{background-color: rgb(193, 158, 224);}
    .dark{color: #666666;}
    .light{color: #d8d7d7;}
    .animation{
        /* 建立要做動化效果的區塊 */ 
        width: 100px;
        height: 100px;
        background-color: blue;
        position: relative;
        /* 動畫效果的取名 */ 
        animation-name: animate;
        animation-duration: 7s;
        /* 調整內部文字完全置中 */ 
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }
    /* 動畫效果的設定 */
    @keyframes animate {
        0% {background-color: #f7d3d3; left: 0px; top: 0px;}
        50% {background-color: rgb(253, 125, 176); left:500px; top: 30px;}
        100% {background-color: rgb(255, 0, 0); left: 1000px; top: 50px;border-radius: 50%;}
    }

</style>