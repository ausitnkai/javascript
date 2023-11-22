// 使用全部的模組
import math from "./lib.js";
math.add(3,4);
math.multiply(5,8);
/* 假設只想調用一個模組
mport { multiply } from "./lib.js";
multiply(3,4);
multiply(10,0);
*/
/*
//預設輸入
// import abc from "./lib.js";
console.log(abc);
//非預設輸入
import abc, {data, obj} from "./lib.js";
console.log(data);
console.log(obj);
*/