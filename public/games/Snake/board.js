(function(){
    const canvas = document.querySelector("#board");

    if(!canvas){
        return;
    }

    const ctx = canvas.getContext("2d");
    const blocks= 24;    
    let colorOne = "white";

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
    for(let i = 0; i<blocks*block; i+=block){
        colorOne = colorOne === "white" ? "rgb(245, 245, 227)" : "white";
        for(let j=0; j<blocks*block;j+=block){
            colorOne = colorOne === "white" ? "rgb(245, 245, 227)" : "white";
            ctx.fillStyle = colorOne;
            ctx.fillRect(j,i,block,block);
        }
    }
    
})();