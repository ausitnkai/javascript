// const 修飾詞 能讓一個變數(variable)無法被修改
const pi = 3.14159;
let redius;
let circumference;

radius = window.prompt("請輸入半徑");
radius = Number(radius);

//pi = 0;
circumference = radius * 2 * pi;

console.log("圓的周長是: " , circumference);