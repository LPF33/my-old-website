export default function paintVinylGames(canvas) {
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");
    
    const grooving = 4;
    let degree = 0;

    const createVinyl = () => {
        canvas.width = window.innerHeight * 0.7;
        canvas.height = window.innerHeight * 0.7;

        //rotate Vinyl
        ctx.translate(canvas.width/2,canvas.height/2);
        ctx.rotate(degree*Math.PI/180);       
        
        //black background
        const blackCircleWidth = canvas.width * (0.5-0.15);
        const blackBackground = () => {
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = blackCircleWidth;
            ctx.arc(0 , 0 , canvas.width*0.15+blackCircleWidth/2, 0 , 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }
        blackBackground();

        //inner white circle
        const innerWhiteCircleWidth = canvas.width * (0.16-0.015);
        const innerWhiteCircle = () => {
            ctx.beginPath();
            ctx.strokeStyle = "rgb(243, 243, 93)";
            ctx.lineWidth = innerWhiteCircleWidth;
            ctx.arc(0, 0,canvas.width*0.015+innerWhiteCircleWidth/2,0,2*Math.PI);
            ctx.stroke();
            ctx.closePath();
        }   
        innerWhiteCircle();     

        //groovings of vinyl 
        const trace = (blackCircleWidth * 0.7) / grooving;
        for(let i=0;i<grooving;i++){
            if(canvas.width * 0.21 + 3 * i<canvas.width*0.49){
                ctx.beginPath();
                ctx.strokeStyle = "rgb(37, 37, 37)";
                ctx.lineWidth = trace;
                ctx.arc( 0 , 0, canvas.width * 0.21 + trace * i, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            
        }        
        
    }

    window.addEventListener("resize", createVinyl, false);

    createVinyl();      
}