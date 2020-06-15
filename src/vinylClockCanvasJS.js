export default function paintVinylClock(canvas) {
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");
    
    const grooving = 60;
    let timeoutId;

    const createVinyl = () => {
        canvas.width = window.innerHeight * 0.7;
        canvas.height = window.innerHeight * 0.7;

        //inner white circle
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(canvas.width / 2 , canvas.height / 2 , canvas.width * 0.16 , 0 , 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        //button
        ctx.beginPath();
        ctx.fillStyle = "rgb(228, 205, 205)";
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.02, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        //seconds hand 0 seconds
        const nullSeconds = () => {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 1;
            ctx.moveTo(canvas.width/2, canvas.width/2 - canvas.width * 0.16);
            ctx.lineTo(canvas.width/2, canvas.width/2 - canvas.width * 0.2);
            ctx.stroke();
            ctx.closePath();
        }
        nullSeconds();

        //groovings of vinyl 
        for(let i=0;i<=grooving;i++){
            ctx.beginPath();
            ctx.strokeStyle = "rgb(66, 60, 60)";
            ctx.lineWidth = 1.7;
            ctx.arc( canvas.width/2 , canvas.height/2, canvas.width * 0.2 + 3 * i, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }

        //paint seconds hand
        const innerBlackCircle = canvas.width * (0.2-0.16);
        

        const paintSeconds = () => {   
            const date = new Date();
            let seconds = date.getSeconds();
            if(seconds>0){                
                ctx.beginPath();
                ctx.strokeStyle = "white";
                ctx.lineWidth = 1;
                ctx.moveTo(canvas.width / 2 + canvas.width * 0.16 * Math.sin(Math.PI - 2*Math.PI/60 * seconds),canvas.width / 2 + canvas.width * 0.16 * Math.cos(Math.PI - 2*Math.PI/60 * seconds));
                ctx.lineTo(canvas.width / 2 + canvas.width * 0.2 * Math.sin(Math.PI - 2*Math.PI/60 * seconds),canvas.width / 2 + canvas.width * 0.2 * Math.cos(Math.PI - 2*Math.PI/60 * seconds));            
                ctx.stroke();
                ctx.closePath();  
                timeoutId = setTimeout(paintSeconds,1000);              
            } else {
                //draw new inner black circle
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = innerBlackCircle;
                ctx.arc(canvas.width/2, canvas.height/2,canvas.width*0.16+innerBlackCircle/2,0,2*Math.PI);
                ctx.stroke();
                ctx.closePath();
                nullSeconds();
                timeoutId = setTimeout(paintSeconds,1000);
            }console.log(seconds);            
        }

        paintSeconds();
    }

    const restart = () => {
        clearTimeout(timeoutId);
        createVinyl();
    }

    window.addEventListener("resize", restart, false);

    createVinyl();      
}
