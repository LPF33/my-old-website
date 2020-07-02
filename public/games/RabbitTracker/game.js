(function(){
    const grid = $("#grid");
    const scoreField = $('#score');
    const timeField = $("#time");
    const beginner = $("#beginner");
    const advanced = $("#advanced");
    const master = $("#master");
    const scoreRabbit = $("#score-rabbit");

    class Game{
        constructor(rabbit, rows, columns){
            this.rabbits = rabbit;
            this.gameRows = rows;
            this.gameColumns = columns;  
            this.timeoutID = "";    
        }

        paintGrid(){
            for(let i=0; i<this.gameRows; i++){
                const $row = $("<div>").addClass("row");
                for(let j=0; j<this.gameColumns; j++){
                    const $column = $("<div>")
                        .addClass("column hidden")   
                        .attr("data-row",i)
                        .attr("data-column",j)             
                    $row.append($column);
                }
                grid.append($row);
            }
            scoreField.text(this.rabbits);
            this.randomRabbit();
        }

        startTime(seconds=0){       
            timeField.text(seconds);
            this.timeoutID = setTimeout(() => this.startTime(++seconds),1000);
        }

        randomRabbit(){
            let arr = []
            while(arr.length<=this.rabbits){
                const randomCell = Math.floor(Math.random()*(this.gameRows*this.gameColumns));
                arr.push(randomCell);
                arr.filter((item,index)=> arr.indexOf(item)===index);
            }            
            arr.forEach(item => $(".column.hidden").eq(item).addClass("rabbit"));
        }        

        detectField(row,column){

            const alreadySearched = {};

            const search = (row,column) => {
                if(row >=this.gameRows || column >= this.gameColumns || row < 0 || column < 0){
                    return
                }               
                if(alreadySearched[`${row}${column}`]){
                    return;
                }else{
                    alreadySearched[`${row}${column}`] = 1;
                }
                const cell = $(`.column.hidden[data-row=${row}][data-column=${column}]`);
                if(!cell.hasClass("hidden") || cell.hasClass("rabbit")){
                    return;
                }
                cell.removeClass("hidden").removeClass("cage");
                const rabbitCount = this.countRabbits(row,column);
                if(rabbitCount){
                    cell.text(rabbitCount);
                    return;
                }

                for(let i=-1; i<=1; i++){
                    for(let j=-1; j<=1; j++){               
                        search(row+i,column+j);
                    }
                }
            }
            search(row,column);       
            const calc = this.rabbits-[...$(".cage")].length;
            scoreField.text(calc);      
        }

        countRabbits(r,c){
            let counter =0;
            for(let i=-1; i<=1; i++){
                for(let j=-1; j<=1; j++){               
                    const cell = $(`.column.hidden[data-row=${r+i}][data-column=${c+j}]`);
                    if(cell && cell.hasClass("rabbit") ){
                        counter++;
                    }
                }
            }            
            return counter === 0 ? "" : counter;
        }

        checkWin(){
            if($(".column.hidden").length === $(".column.hidden.rabbit").length){
                return true
            }else{
                return false;
            }
        }

        gameOver(value){
            clearTimeout(this.timeoutID);
            value ? 
                $(".column.hidden.rabbit")
                    .addClass("cage")
                    .removeClass("hidden")

                    : 
                        [[...$(".column.hidden").not(".rabbit")],[...$(".column.hidden.rabbit")]]
                            .forEach((arr,index) =>{
                                if(index===0){
                                    arr.forEach(i=>{
                                        const item = $(i);
                                        const row = item.data("row");
                                        const column = item.data("column");
                                        const rabbitCount = this.countRabbits(row,column);
                                        item.text(rabbitCount);
                                        item.removeClass("hidden")
                                        item.removeClass("cage");
                                    })
                                }else{
                                    arr.forEach(i=> {
                                        const item = $(i);
                                        item.addClass("lost").append("<div class=\"lostAnimation\"></div>");
                                        item.removeClass("hidden");
                                        item.removeClass("cage");
                                    })
                                }
                            })
            value ?
                scoreField
                    .text("You win!")
                    :
                        scoreField
                        .text("You lose!")
        }

        checkField(item){
            const row = $(item).data("row");
            const column = $(item).data("column");
            if($(item).hasClass("rabbit")){
                this.gameOver(false);
            }else{
                this.detectField(row,column);
                if(this.checkWin()){
                    this.gameOver(true);
                }
            }
        }  
        
        setCage(e){
            if($(e.target).hasClass("hidden")){
                $(e.target).hasClass("cage") ? $(e.target).removeClass("cage") : $(e.target).addClass("cage");
            }             
            const calc = this.rabbits-[...$(".cage")].length;
            scoreField.text(calc);           
        }

        play(){
            this.paintGrid();
            grid.off("click");
            grid.off("contextmenu");            
            grid.on("click", ".column.hidden", e => this.checkField(e.currentTarget));
            grid.on("contextmenu", e => {
                e.preventDefault();
                if(e.which === 3){
                    this.setCage(e);
                }
            });
            if(('ontouchstart' in window || navigator.msMaxTouchPoints)){
                scoreRabbit.removeClass("touch-rabbit2").addClass("touch-rabbit");
                scoreRabbit.off("click");
                scoreRabbit.on("click" , () => {
                    scoreRabbit.hasClass("touch-rabbit") ? scoreRabbit.removeClass("touch-rabbit").addClass("touch-rabbit2") : scoreRabbit.removeClass("touch-rabbit2").addClass("touch-rabbit");
                    if(scoreRabbit.hasClass("touch-rabbit")){
                        grid.off("click");
                        grid.on("click", ".column.hidden", e => this.checkField(e.currentTarget));
                    }else{
                        grid.off("click");
                        grid.on("click", e => this.setCage(e));
                    }
                });
            }
            this.startTime();
        }
    }   

    let startGame = "";
    const play = (e,quant,row,column) => {
        if(startGame && startGame.timeoutID){
            clearTimeout(startGame.timeoutID);
        }
        target = e ? $(e.currentTarget) : beginner;
        grid.html("");
        target.parent().children().removeClass("buttonColor");
        target.addClass("buttonColor");
        startGame = new Game(quant,row,column);
        startGame.play();
    }

    play("",10,9,9);

    beginner.on("click", (e) => play(e,10,9,9));
    advanced.on("click", (e) => play(e,40,16,16));
    master.on("click", (e) => play(e,99,16,30)); 

})();