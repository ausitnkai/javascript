<!--javascript-->
<script setup> 
    import{ref}from"vue";
    let text=ref("請輸入文字");
    let clear=function(){
        text.value=""
    }
    // 單選框只有一種結果所以用一班的型態即可
    let gender=ref(null);
    // 多選框可能會有很多個結果所以要用陣列的型態
    let fruits=ref([]);

    let color=ref("");
</script>
<!--HTML-->
<template> 
    <main>
        <!--單行、多行輸入-->
        <input type="text" v-model="text"/>
        <div>輸入文字:{{ text }}</div>
        <button @click="clear">清空輸入框</button>
        <br/>
        <textarea placeholder="請輸入任意文字"></textarea>

        <!--多選方框、單選方框-->
        <h3>多選框</h3>
        蘋果<input type="checkbox" value="apple" v-model="fruits"/>
        香蕉<input type="checkbox" value="banana" v-model="fruits"/>
        <div>請選擇喜歡的水果:</div>
        <ul>
            <li v-for="fruit in fruits">喜歡的有: {{fruit}}</li>
        </ul>

        <h3>單選框</h3>
        男<input type="radio" value="male" v-model="gender"/>
        女<input type="radio" value="female" v-model="gender"/>
        <div>請選擇性別:{{ gender }}</div>

        <!--下拉式選單-->
        <h3>下拉式選單</h3>
        <select v-model="color">
            <option value="">請選擇</option>
            <option value="red">紅</option>
            <option value="blue">藍</option>
            <option value="green">綠</option>
        </select>
        <div :class="color">文字變換顏色</div>
    </main>
</template>
<!--CSS-->
<style scoped> 
    .red{color: red;}
    .green{color: green;}
    .blue{color: blue;}
    main{
        background-color: gainsboro;
    }
</style>