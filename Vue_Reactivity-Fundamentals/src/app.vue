<script setup>
	import { reactive, ref } from 'vue';
	// reactive 回傳的資料是Proxy(代理)物件
	
	// 利用 reactive 可以直接將資料包裝成一個物件
	const original = {
		count:1,
		message:"Hello Reactive"
	}
	const data = reactive(original);

	console.log(original, data);


	const count = ref(1);
	const message = ref("Hello Ref");

	const clickHandler = () => {
		// reactive 要用就直接叫用即可
		data.count++;
		// 而 ref 需要透過 .value 才能取得真正的值
		count.value++;
	}

	// 會接收 input 的輸入存放到 ref 中
	const addInfo = ref("");

	const obj = ref({
  	nested: { count: 1 },
  	arr: ['foo', 'bar']
	});

	const addHandler = () => {
		// 多層 ref 的叫用方式
		obj.value.nested.count++;
		obj.value.arr.push(addInfo.value);
	}

	const clearInfo = () => {
		addInfo.value = "" ;
		obj.value.nested.count = 1;
		obj.value.arr.pop();
	}


</script>

<template>

	<h1>{{ data.message }}</h1>
	<input v-model="data.message">
	<button @click="clickHandler">
		Count: {{data.count}}
	</button>

	<hr/>

	<h1>{{ message }}</h1>
	<input v-model="message">
	<button @click="clickHandler">
		Count: {{ count }}
	</button>

	<hr/>
	
	<h1>資料的響應式新增與刪除</h1>
	<input v-model="addInfo"><br/>
	<button @click="addHandler">
		添加資訊 {{ obj.nested.count }}
	</button>
	<button @click="clearInfo">清除資訊</button>
	<div>{{ obj.arr }}</div>

</template>