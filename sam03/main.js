(()=>{


    //背景描画
    const canvas=document.getElementById('myCanvas');
    let scr=canvas.getContext("2d");
    let paddleWidth=76;
    let paddleHeight=10;
    let paddleX=(canvas.width-paddleWidth)/2;
/*
    scr.beginPath();
    scr.rect(20,40,50,50);
    scr.fillStyle="red";
    scr.arc(240, 160, 20, 0, Math.PI*2, false);
    scr.fillStyle = "green";
    scr.fill();
    scr.rect(160, 10, 100, 40);
    scr.strokeStyle = "rgba(0, 0, 255, 0.5)";
    scr.stroke();
    scr.closePath();
*/
   let ballRadius=10;
   let x=canvas.width/2;
   let y=canvas.height-30;
   let dx=2;
   let dy=-2;

   let leftPressed=false;
   let rightPressed=false;
   
   let brickRowCount = 3;
   let brickColumnCount = 5;
   let brickWidth = 75;
   let brickHeight = 20;
   let brickPadding = 10;
   let brickOffsetTop = 30;
   let brickOffsetLeft = 30;
   let score=0;
   let lives=3;

let brick=[];
for(let c=0;c<brickColumnCount;c++){
    brick[c]=[];
for(let r=0;r<brickRowCount;r++){
    brick[c][r]={x:0,y:0, status:1};
}
}

brickDraw=()=>{
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(brick[c][r].status==1){
                let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                brick[c][r].x = brickX;
                brick[c][r].y = brickY;
                //console.log(brickX,brickY);
                scr.beginPath();
                scr.rect(brickX, brickY, brickWidth, brickHeight);
                scr.fillStyle = "#0095DD";
                scr.fill();
                scr.closePath();
    
            }
        }
    }
   
}

keyUpHandler=(e)=>{
    if(e.key=='Right'||e.key=='ArrowRight'){
        rightPressed=false;
    }else if(e.key=='Left'||e.key=='ArrowLeft'){
        leftPressed=false;
    }
}

keyDownHandler=(e)=>{
    if(e.key=='Right'||e.key=='ArrowRight'){
        rightPressed=true;
    }else if(e.key=='Left'||e.key=='ArrowLeft'){
        leftPressed=true;
    }
}

mouseMoveHandler=(e)=>{
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

const collisionDetection=()=>{
    for(let c=0;c<brickColumnCount;c++){
    for(let r=0;r<brickRowCount;r++){
        let b=brick[c][r];
        if(b.status==1){
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
                dy=-dy;
                b.status=0;
                score++;
            if(score == brickRowCount*brickColumnCount) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
              clearInterval(interval); // Needed for Chrome to end game
             }
             }
     
        }
    }
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousemove',mouseMoveHandler,false);

const drawScore=()=>{
    scr.font = "16px Arial";
    scr.fillStyle = "#0095DD";
    scr.fillText("Score: "+score, 8, 20);
}

const drawLives=()=>{
    scr.font = "16px Arial";
    scr.fillStyle = "#0095DD";
    scr.fillText("Lives: "+lives, canvas.width-65, 20);

}

draw=()=>{
    scr.beginPath();
    scr.arc(x, y, ballRadius, 0, Math.PI*2);
    scr.fillStyle = "#0095DD";
    scr.fill();
    scr.closePath();
}

drawPaddle=()=>{
    scr.beginPath();
    scr.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    scr.fillStyle= "#0095DD";
    scr.fill();
    scr.closePath();
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX+=7; 
    }else if(leftPressed &&  paddleX > 0){
        paddleX-=7; 
    }
}

movedraw=()=>{
    scr.clearRect(0, 0, canvas.width, canvas.height);
        brickDraw();
        draw();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
        if(y+dy<ballRadius){
        dy=-dy;
        }else if(y+dy>canvas.height-ballRadius){
            if(x>paddleX&& x<paddleX+paddleWidth){
               dy=-dy;
            } else{
                //clearInterval(interval);
                lives--;
                if(!lives) {
                    window.alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    window.alert("RESTRAT");
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width-paddleWidth)/2;
                }
             }
        }
        if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){
        dx=-dx;    
        }
        x+=dx;
        y+=dy;
    }

   let interval=setInterval(movedraw,10);
   //brickDraw();
})();