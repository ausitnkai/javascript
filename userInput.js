// 如何處理使用者的輸入
/* 簡單的方法，使用視窗提示幅(windows prompt)

let username = window.prompt("你的名字是: ");
console.log(username);
*/

//比較複雜的方法，使用 html 的 text box

let username;
document.getElementById("myButtom"),onclick = function name(params) {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "你好" + username;
}