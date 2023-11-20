console.log("I like pizza!!!!"); //用於網頁的主控制台來紀錄訊息
console.log("我正在學習");

window.alert("一個基本的網頁操作~~~~~");// 網頁的彈出式視窗

/*
 A variable 變數的相關操作
 
 兩步驟:
 1. declaration 宣告型別 
 var : 宣告一個可隨意更改其內容的變數
 let : 宣告一個可隨意更改其內容的 "區塊區域" 變數
 const : 宣告一個只可讀取的不可變常數

 2. assigment 賦值 (變數名稱 = 資料)
*/

let age = 20; //整數型別
let firstName = "kai"; //字串型別
let student = true; // 布林型別
const nickname = "austin" //不可變動的常數
//nickname = "alan"; 這個是錯誤的，當程式運行到這邊時就會強制中止

console.log("Hello", firstName);
console.log("You are", age, "years old.");
console.log(student);
console.log(nickname);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "你還是學生嗎? " + student;