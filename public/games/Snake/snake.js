(function(){
    const canvas = document.querySelector("#snake");
    const pointsDisplay = document.querySelector("#points");
    const restart = document.querySelector("#restart");
    const endPoints = document.querySelector("#endPoints");
    const end = document.querySelector("#end");
    const touchButtons = document.querySelector("#touchButtons");
    const buttonsLandscapeRight = document.querySelector("#buttons-landscape-right");
    const upButton = document.querySelector("#up");
    const leftButton = document.querySelector("#left");
    const rightButton = document.querySelector("#right");
    const downButton = document.querySelector("#down");

    if(!canvas){
        return;
    }

    const ctx = canvas.getContext("2d");

    const fruitImg = new Image();
    fruitImg.src = "./fruit.png";

    const blocks= 24;  
    
    if(('ontouchstart' in window || navigator.msMaxTouchPoints) && window.innerWidth < 600){
        if(window.orientation === 0 ||  window.orientation === 180){
            canvas.width = 0.95 * window.innerWidth;
            canvas.height = 0.95 * window.innerWidth;         
        } else {
            canvas.width = 0.95 * window.innerHeight;
            canvas.height =  0.95 * window.innerHeight;       
        }
    } else {
        canvas.width = 510;
        canvas.height = 510;
    } 

    const block = canvas.width/blocks;
    ctx.translate(block/2,block/2);

    class Snake{
        constructor(x,y){
            this.body = [{x:x,y:y}];
            this.fruit = {x,y};
            this.startGame = true;
            this.gameOver = false;            
            this.score = 0;
            this.direction = "right";
            this.newCoordinates = "";
        }

        paintSnake(){
            for(let i = 0; i<this.body.length; i++){
                ctx.beginPath();
                ctx.fillStyle= i === 0 ? "yellow" : "pink";
                ctx.arc(this.body[i].x*block, this.body[i].y*block, block/2, 0, 2*Math.PI);
                ctx.fill();
                ctx.closePath();
            }            
        }
        
        paintFruit(){
            ctx.drawImage(fruitImg, this.fruit.x * block-block/2, this.fruit.y * block-block/2, block, block);
        }

        randomNum(){
            return Math.floor(Math.random()*17);
        }      
        
        newFruit(){
            const fruitX = this.randomNum();
            const fruitY = this.randomNum();
            for(let i=0;i<this.body.length;i++){
                if(this.body[i].x===fruitX && this.body[i].y===fruitY){
                    return this.newFruit();
                }
            }
            this.fruit.x = fruitX;
            this.fruit.y = fruitY;
        }   
        
        eatFruit(){
            if(this.fruit.x === this.body[0].x && this.fruit.y === this.body[0].y){
                this.score++;
                pointsDisplay.innerText = this.score;
                this.newFruit();
                return true;
            } else {
                return false;
            }
        }

        moveSnake(){
            if(this.direction==="left"){
                this.newCoordinates = {x:this.body[0].x -1,y:this.body[0].y};
            }else if(this.direction==="up"){
                this.newCoordinates =  {x:this.body[0].x,y:this.body[0].y -1};
            }else if(this.direction==="right"){
                this.newCoordinates =  {x:this.body[0].x +1,y:this.body[0].y};
            }else if(this.direction==="down"){
                this.newCoordinates =  {x:this.body[0].x,y:this.body[0].y +1};
            }            
            if(this.eatFruit()){
                this.body.unshift(this.newCoordinates);
            }else{
                this.body.pop();
                this.body.unshift(this.newCoordinates);
            }
        }

        controlSnake(e){
            if(e.keyCode===37 && this.direction!=="right"){
                this.direction="left"
            }else if(e.keyCode === 38 && this.direction!=="down"){
                this.direction="up"
            }else if(e.keyCode === 39 && this.direction!=="left"){
                this.direction="right"
            }else if(e.keyCode === 40 && this.direction!=="up"){
                this.direction="down"
            }     
            //this.moveSnake();          
        }

        touchSnake(command){
            if(command==="left" && this.direction!=="right"){
                this.direction="left"
            }else if(command==="up" && this.direction!=="down"){
                this.direction="up"
            }else if(command==="right" && this.direction!=="left"){
                this.direction="right"
            }else if(command==="down" && this.direction!=="up"){
                this.direction="down"
            }
        }

        collision(){
            const biteSnake = () => {
                for(let i = 1; i<this.body.length;i++){
                    if(this.body[i].x===this.body[0].x && this.body[i].y===this.body[0].y){
                        return true
                    }
                }
                return false;
            }
            if(biteSnake() || this.body[0].x<0 || this.body[0].x > blocks-1 || this.body[0].y<0 || this.body[0].y>blocks-1){
                return true;
            }else{
                return false;
            }
        }

        playGame(){
            if(this.startGame){
                this.newFruit(),
                this.startGame = false;
            }
            if(this.gameOver){
                endPoints.innerText=`Your scores: ${this.score}`;
                end.style.display = "flex";
                return;
            }
            ctx.clearRect(0-block/2,0-block/2,canvas.width,canvas.height);
            this.paintSnake();
            this.paintFruit();
            this.moveSnake();
            if(this.collision()){
                this.gameOver = true;
            }            
            setTimeout(() => this.playGame(),100);
        }
    }

    const snake = new Snake(1,2);
    
    snake.playGame();

    document.addEventListener("keydown", (e) => snake.controlSnake(e));
    restart.addEventListener("click", () => window.location.reload());
    document.addEventListener("keydown", e => {if(e.keyCode===13){window.location.reload()}});

    if('ontouchstart' in window || navigator.msMaxTouchPoints){
        if(window.orientation === 0 ||  window.orientation === 180){
            touchButtons.classList.add("touchButtonsPortrait");          
        } else {
            touchButtons.classList.add("touchButtons"); 
            buttonsLandscapeRight.classList.add("buttons-landscape-right"); 
        }
    }else {
        touchButtons.style.display="none";
    }

    upButton.addEventListener("click", () => snake.touchSnake("up"));
    leftButton.addEventListener("click", () => snake.touchSnake("left"));
    rightButton.addEventListener("click", () => snake.touchSnake("right"));
    downButton.addEventListener("click", () => snake.touchSnake("down"));
        
})();