import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";

export default function Bash(){

    const topic = "Typescript! Learn the basics!";
    const date = "21.06.2020";
    const tags = ["basic", "typescript", "javascript"];

    const [lightMode, setLightMode] = useState("moonMode");
    const [colorLightMode, setColorLightMode] = useState("colorMoonMode");

    const whichLightMode = useSelector(state => state.lightMode);

    useEffect(() => {
        if(whichLightMode){
            setLightMode(whichLightMode==="sun" ? "sunMode" : "moonMode");
            setColorLightMode(whichLightMode==="sun" ? "colorSunMode" : "colorMoonMode")
        }        
    },[whichLightMode]);

    return(
        <div className={`articlePage ${lightMode}`}>
            <Headline topic={topic} date={date} tags={tags}/>
            <div className="paragraph">
                <p className={colorLightMode}>
                    Typescript is a programming language, which is based upon JavaScript and extends JavaScript with some
                    new Features, as the word says it enables a strong typification. It was developed by Microsoft.
                    First of all, we have to install the Typescript-Compiler, (npm install -g typescript), 
                    so we can transpile typescript to javascript and now the file runs in any browser.                    
                    The command for the compiling is: 
                </p> 
                <HighlightCommand value="tsc filename.ts"/>
                <p className={colorLightMode}>
                    

                </p>
            </div>            
        </div>
    );
}