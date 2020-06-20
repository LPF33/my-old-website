export default function paintVinylAboutMe(canvas) {
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");
    
    const grooving = 60;
    let degree = 0;
    const innerParts = 40;
    let colorArray = [];

    //change Color 
    const changeColor = innerParts => {
        const randomGreen = () => Math.floor(Math.random()*255);
        const randomBlue = () => Math.floor(Math.random()*70);
        for(let i = 0; i<innerParts; i++){
            colorArray.push(`rgb(255,${randomGreen()},${randomBlue()})`);
        }
    }

    changeColor(innerParts);    

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
        const steps = 2 / innerParts;

        const innerWhiteCircle = () => {
            for(let i = 0; i<innerParts; i++){
                ctx.beginPath();
                ctx.strokeStyle = colorArray[i];
                ctx.lineWidth = innerWhiteCircleWidth;
                ctx.arc(0, 0,canvas.width*0.015+innerWhiteCircleWidth/2,i*steps*Math.PI,(i+1)*steps*Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            
        }        
        innerWhiteCircle(); 

        //groovings of vinyl 
        for(let i=0;i<=grooving;i++){
            if(canvas.width * 0.21 + 3 * i<canvas.width*0.49){
                ctx.beginPath();
                ctx.strokeStyle = "rgb(66, 60, 60)";
                ctx.lineWidth = 1.7;
                ctx.arc( 0 , 0, canvas.width * 0.21 + 3 * i, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            
        }        
        
    }

    window.addEventListener("resize", createVinyl, false);
    createVinyl();    
}