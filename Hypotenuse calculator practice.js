// 計算三角形斜邊的小練習

let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("aTextbox").value;
    a = Number(a);
    
    b = document.getElementById("bTextbox").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    c = document.getElementById("cLable").innerHTML = "C的邊長為: " + c;
}


