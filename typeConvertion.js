// 基礎的型態轉換 (string, number, boolean)
/*
let age = window.prompt("Hoe old are you?"); //這裡輸入進來的會是字串

console.log(typeof age);
age = Number(age); //所以要對其值做運算需要做轉型
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");
*/

let x;
let y; 
let z;

x = Number("3.14"); //將字串轉成數字
y = String(3.14); //將數字轉成字串
z = Boolean("a") //如果裡面有東西就會顯示 true ，如果沒有就顯示 false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
