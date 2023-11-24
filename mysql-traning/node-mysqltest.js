const mysql=require("mysql2/promise");
async function connectToMySQL() {
    // 建立資料庫的連線
    const con=await mysql.createConnection({
        user:"root",
        password:"austin5320",
        host:"localhost",
        database:"seatarrangement"
    });
    console.log("連線成功");
    // 新增操作
    // let [result]=await con.execute("insert into employee(EMP_ID, NAME,EMAIL) values('00008','小玉','00008@gmail.com')");
    // console.log(result); // 印出執行結果

    // 刪除操作
    // let [delete_result]=await con.execute("delete from employee where EMP_ID=8");
    // console.log(delete_result);

    // 修改操作
    // let [update_result]=await con.execute("update employee set name='小凱' where EMP_id=1");
    // console.log(update_result);

    // 取得資料
    let [result]=await con.execute("select * from employee ");
    result.forEach((employee)=>{
        console.log(employee.FLOOR_SEAT_SEQ);
    });

    con.end(); 
}
connectToMySQL()