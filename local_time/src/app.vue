<!--javascript-->
<script setup> 
    import {ref, onMounted } from 'vue';
    let timeString = ref('00:00:00');

    let updatetime=function () {
        const updateTimeString = () => {
            const now = new Date();
            let hours = now.getHours();
            let meridiem;
            if(hours >= 12){
                meridiem = "下午"
            }else if(hours >= 18){
                meridiem = "晚上"
            }else{
                meridiem = "早上"
            }
            hours = hours % 12 || 12;
            hours = hours.toString().padStart(2,0);
            const minutes = now.getMinutes().toString().padStart(2,0);
            const seconds = now.getSeconds().toString().padStart(2,0);
            timeString.value = `${hours}:${minutes}:${seconds} ${meridiem}`;
        };
        updateTimeString();
        // 每秒更新一次時間
        setInterval(updateTimeString,1000);
    };
    onMounted(updatetime);
</script>
<!--HTML-->
<template> 
    <main>
        <div class="clock-container">
            <div class="clock" :id="timeString">{{ timeString }}</div>
        </div>
    </main>
</template>
<!--CSS-->
<style scoped> 
    nav{
        background-color: rgb(1, 1, 102);
        font-size: 40px;
        color: aliceblue;
        text-align: center;
    }
    main{
        background-image: url(background.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        margin: 0;
        margin: 0;
    }
    .clock-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .clock{
        font-family: monospace;
        font-size: 6.5rem;
        font-weight: bold;
        text-align: center;
        color: lightgray;
        backdrop-filter: blur(3px);
        width:100%;
        background-color: hsla(0,0%,100%,0.1);
    }
</style>