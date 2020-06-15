import React, { useRef, useEffect, useState } from "react";
import "./Main.css";
import paintVinylClock from "./vinylClockCanvasJS.js";

export default function App() {
    const vinylClock = useRef();

    const [clickAbout, setClickAbout] = useState(["aboutOff","aboutOn"]);

    useEffect(() => {
        const vinylClockCanvas = vinylClock.current;
        paintVinylClock(vinylClockCanvas);
    }, []);

    return (
        <div id="main">
            <div id="vinylform"></div>
            <div id="vinylInnerForm"></div>
            <canvas ref={vinylClock} id="vinyl"></canvas>
            <div id="portrait">
                <div className="outerForm flex">
                    <div className="innerForm flex">
                        <div id="myPicture"></div>  
                    </div>                        
                </div> 
                <p className="flex">About me</p>
                <div className="outerFormButton flex">
                    <div className="innerFormButton flex">
                        <div className={`aboutButton flex ${clickAbout[0]}`} onClick={()=>{if(clickAbout[0]==="aboutOff"){let changeAbout=[clickAbout[1],clickAbout[0]]; setClickAbout(changeAbout)}}}>ON</div>  
                        <div className={`aboutButton flex ${clickAbout[1]}`} onClick={()=>{if(clickAbout[1]==="aboutOff"){let changeAbout=[clickAbout[1],clickAbout[0]]; setClickAbout(changeAbout)}}}>OFF</div>
                    </div>                        
                </div>                
            </div>
        </div>
    );
}
