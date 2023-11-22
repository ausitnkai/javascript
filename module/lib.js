function echo(msg) {
    console.log(msg);
}
let x = "hello";
function add(n1, n2) {
    console.log(n1+n2);
}
// export default 資料:

export default { //也可以 export 物件
    echo:echo,
    x,
    add:add
};