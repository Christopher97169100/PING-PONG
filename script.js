var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var startBtn = document.getElementById("startBtn");
var restartBtn = document.getElementById("restart");


startBtn.onclick = function (){ 
startBtn.style.display ="none"
paddle1 = new Paddle (10)
paddle2 = new Paddle(970)

ball = new Ball()
window.requestAnimationFrame(draw)
}




function Paddle(x) {
this.color = "tomato"
this.x = x;
this.y = canvas.height / 2;
this.width = 20;
this.height = 120;
}

//-------- BALL ---------
function Ball () {
    this.color = "tomato";
    this.x = canvas.width / 2; 
    this.y = canvas.height / 2;
    this.ballRadius = 10;

// responsible for the speed and directon
this.dy = 5.5;
this.dx = 5.5;

}

Ball.prototype.checkBorder = function () {


    if(
        this.y + ball.dy > canvas.height - this.ballRadius
        ||
        // to test once the paddles are moving
        this.y + this.dy < ball.ballRadius
    ) {
      this.dy = - this.dy  
}
}


Ball.prototype.drawBall = function () {
    console.log("kkkkkkkk")
    ctx.beginPath();
    ctx.arc(this.x, this.y,  this.ballRadius, 0, Math.PI * 2 )
    ctx.fill()
}

Ball.prototype.chackBorder = function (){
    if (this.y + ball.dy > canvas.height - this.ballRadius) {
        console.log("bottom")
    }
}

Paddle.prototype.drawPaddle = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)


} 

    Paddle.prototype.hitPaddleTwo = function () {
        if (
         ball.x < paddle2.x + paddle2.width
          &&
          ball.x + ball.dx > paddle2.x
          &&
          ball.y < paddle2.y + paddle2.height
          &&
           ball.y + ball.dy > paddle2.y
        ) {
           ball.dx = - ball.dx 
    }
}

Paddle.prototype.hitPaddleOne = function (){
    if (
        ball.x < paddle1.x + paddle1.width
        &&
        ball.x + ball.dx > paddle1.x
        &&
        ball.y < paddle1.y + paddle1.height
        &&
        ball.y + ball.dy > paddle1.y
        ) {
            ball.dx = - ball.dx
        }      
}

Ball.prototype.chackLeftAndRight = function () {
    if(
        ball.x > canvas.width + 2 * ball.ballRadius
        ||
        ball.x < -2 * ball.ballRadius
    ) {
        return true
    }
        return false
}

function draw () {
 //clear the canvas on each frame
   ctx.clearRect(0,0, canvas.width, canvas.height)
   ball.drawBall()

//movement of ball
ball.x += ball.dx;
ball.y += ball.dy

   ball.checkBorder()
   if (ball.chackLeftAndRight() === true){ 
       restartBtn.style.display = "inline"
   }


   paddle1.drawPaddle()
   paddle2.drawPaddle()

   paddle2.hitPaddleTwo()
   paddle1.hitPaddleOne()

   window.requestAnimationFrame(draw)
 }

 function keyDownHandler (event) {
    if (event.key === "z") {
        paddle1.y -=15
    } else if (event.key ==="s") {
        paddle1.y +=15
    } else if (event.key === "ArrowUp"){
        paddle2.y -=15
    } else if (event.key === "ArrowDown"){
        paddle2.y +=15
    }
 }

 document.onkeydown = keyDownHandler