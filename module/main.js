// import 資料 from "模組檔案的路徑"
import lib from "./lib.js";
// 由於 lib.js 給的是一個物件資料，
// 所以使用時我們也需要照物件的使用方法
let name = "哭啊";
lib.echo(name);
console.log(lib.x);
lib.add(3,11);