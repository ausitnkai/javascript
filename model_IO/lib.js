let add = function(n1,n2){
    console.log(n1+n2);
}
let multiply = function (n1,n2) {
    console.log(n1*n2);
}
let math={ // 將功能包裝成一個物件
    add:add,
    multiply:multiply
};

// 將模組分成全部和在一起以及分開
export default math;
export {add,multiply};
/*
//預設輸出
let x = "Hello";
// export default x;
//非預設輸出
let data = [5,6,7];
let obj ={1:10, 2:"kai", 3:"austin"};
export {x as default, data, obj};
*/