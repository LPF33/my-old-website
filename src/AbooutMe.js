import React, {useRef, useEffect} from "react";
import "./AboutMe.css";
import paintVinylAboutMe from "./AboutMeVinyl";

export default function AboutMe(){

    const vinylAboutMe = useRef();

    useEffect(() => {
        const vinylAboutMeCanvas = vinylAboutMe.current;
        paintVinylAboutMe(vinylAboutMeCanvas);
    },[]);

    return(
        <div>
            <div id="aboutMeVinyl" className="showAboutMe">
                <div id="aboutMeTitle">
                    <h1>About me</h1> 
                </div> 
                <canvas ref={vinylAboutMe} id="canvasAboutMe"></canvas>
            </div>

            
        </div>
    );
};