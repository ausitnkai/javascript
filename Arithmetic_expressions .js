window.alert("javascript 基本的算術表達式");// 網頁的彈出式視窗

/*
    算術表達式是以下的組合...
    運算子 (values, variables, etc.)
    運算 (+ - * / %)
    可以讓兩個值做基本的運算
    ex. y = x + 5;
*/

let a = 20;

a++; // 加 (或是 a=a+1, a+=1) 底下同理都可以作化減
let b = a - 1; // 減
let c = a * 3; // 乘
let d = a / 10; // 除
let f = a % 4; // 取餘數
let g = a ** 2; // n次方
let result = a - b * (g - d);

console.log(a);
console.log(b);
console.log(c);
console.log(f);
console.log(g);
console.log(result);

document.getElementById("p1").innerHTML = "a= "+a+"<br>b= "+b+"<br>d= "+d+"<br>g= "+g;
// innerHTML 是讓JS可以藉由 "html" 的撰寫方式來把資料顯示在網頁中
document.getElementById("p2").innerHTML = "a - b * (g - d) = " + result; 