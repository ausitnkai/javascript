var BLOCK_SIZE = 20;
var BLOCK_COUNT = 20;

var gameInterval
var snake;
var apple;
var score;

function gamestart() {
    // 畫蛇
    snake = {
        body:[
            // 蛇的起始位置在中央
            {x:BLOCK_COUNT/2, y:BLOCK_SIZE/2}
        ],
        size:5,
        direction:{x:0,y:-1}
    };
    // 畫蘋果
    putapple();

    // 更新分數
    updateScore(0);

    // 每3毫秒重製畫布
    gameInterval = setInterval(gameRoutine,300);
}

function updateScore(newScore) {
    score = newScore;
    document.getElementById("score").innerHTML = score;
}

function putapple() {
    // 隨機在畫布上找一個位置放蘋果
    apple = {
        x: Math.floor(Math.random() * BLOCK_COUNT),
        y: Math.floor(Math.random() * BLOCK_COUNT)
    }

    // 避免蘋果生成在蛇身上
    for(var i=0; i<snake.body.length; i++){
        if(snake.body[i].x === apple.x &&
            snake.body[i].y === apple.y){
            putapple();
        }
    }
}

function gameRoutine(){
    moveSnake()
    // 每移動一次檢查蛇有沒有死掉
    if(snakeIsDead()){
        ggler();
        return;
    }
    // 每移動一次檢查蛇有沒有吃到蘋果
    if(snake.body[0].x === apple.x &&
        snake.body[0].y === apple.y){
        eatapple();
    }
    // 
    updataeCanva()
}

function eatapple() {
    snake.size += 1;
    putapple()
    updateScore(score+1);
}

function snakeIsDead(){
    // 撞牆
    if(snake.body[0].x < 0){
        return true;
    }
    else if(snake.body[0].x > BLOCK_COUNT){
        return true;
    }
    else if(snake.body[0].y < 0){
        return true;
    }
    else if(snake.body[0].y > BLOCK_COUNT){
        return true;
    }
    // 撞到身體
    for(var i=1; i<snake.body.length; i++){
        if(snake.body[0].x === snake.body[i].x && 
            snake.body[0].y === snake.body[i].y){
            return true
        }
    }
    return false;
}

function ggler(){
    // 重製整個遊戲
    clearInterval(gameInterval);
}

function moveSnake(){
    var newBlock={
        x:snake.body[0].x + snake.direction.x,
        y:snake.body[0].y + snake.direction.y
    };
    snake.body.unshift(newBlock);
    while(snake.body.length > snake.size){
        snake.body.pop();
    }
}
// 更新畫布
function  updataeCanva() {
    // 取得畫布
    var canva = document.getElementById("canvas");
    var context = canva.getContext("2d");
    // 將畫布畫上顏色
    context.fillStyle = "black";
    context.fillRect(0,0,canva.width,canva.height);

    // 畫出蛇
    context.fillStyle = "lime";
    for(var i=0; i<snake.body.length; i++){
        context.fillRect(
            snake.body[i].x * BLOCK_SIZE+1, 
            snake.body[i].y * BLOCK_SIZE+1,
            // 將每個格子切開
            BLOCK_SIZE-1,
            BLOCK_SIZE-1
        );
    }

    // 畫出蘋果
    context.fillStyle = "red";
    context.fillRect(
        apple.x * BLOCK_SIZE+1,
        apple.y * BLOCK_SIZE+1,
        BLOCK_SIZE-1,
        BLOCK_SIZE-1
    );
}

window.onload = onPageLoaded

function onPageLoaded() {
    // 監控有沒有接收到鍵盤訊息
    document.addEventListener('keydown', handleKeyDown)
}

function handleKeyDown(event) {
    var orginalX = snake.direction.x;
    var orginalY = snake.direction.y;
    if(event.keyCode === 37){// 左方向鍵
        snake.direction.x = orginalY;
        snake.direction.y = -orginalX;
    }
    else if(event.keyCode == 39){ // 右方向鍵
        snake.direction.x = -orginalY;
        snake.direction.y = orginalX;
    }
}