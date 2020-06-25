export default function paintVinylAboutMe(canvas) {
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");
    
    const grooving = 6;
    const rings = 2;
    let degree = 0;
    const innerParts = 8;   

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
                ctx.strokeStyle = "black";
                ctx.lineWidth = innerWhiteCircleWidth;
                ctx.arc(0, 0,canvas.width*0.015+innerWhiteCircleWidth/2,Math.PI*0.001+i*steps*Math.PI,(i+1)*steps*Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            
        }        
        innerWhiteCircle(); 

        //groovings of vinyl 
        for(let j=0;j<=rings;j++){
            for(let i=0;i<=grooving;i++){
                if(canvas.width * 0.21 + 6*grooving*j + 3 * i<canvas.width*0.49){
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(66, 60, 60)";
                    ctx.lineWidth = 1.7;
                    ctx.arc( 0 , 0, canvas.width * 0.21 + 6*grooving*j + 3 * i, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();
                }

            } 
        }   
    }

    //play Vinyl when typing into textarea
    const text = document.querySelector("#aboutMeText");
    const headlineAbout  = document.querySelector("#aboutMeTitle");
    let currentScrollTop = 0;
    
    const playVinyl = e => {

        currentScrollTop<e.target.scrollTop ? degree += 2 : degree -= 2;
        currentScrollTop = e.target.scrollTop;
        createVinyl();
        headlineAbout.style.transform = `translate(-50%,-50%) rotate(${degree}deg)`;
    }

    text.addEventListener("scroll", playVinyl);

    window.addEventListener("resize", createVinyl, false);
    createVinyl();    
}