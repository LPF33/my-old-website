import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";
import SpeedTypingApi from "./api/SpeedTypingAPI";

export default function TriviaQuiz(){
    const topic = "Speed Typing, why not?";
    const date = "04.07.2020";
    const tags = ["api", "games", "simple"];

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
                    Sometimes I sit infront of my laptop and think about which project I will do next. And now I made the
                    decision, that I have to do this Speed Typing Game, although I should/want to start with a bigger project.
                    There are so many things out there to bulid by yourself, well, you have to start somewhere. I have to get this out of my mind.
                    So quickly start!
                </p>    
                <HighlightCommand value="What do I need?"/>
                <ul className={colorLightMode}>
                    <li>a timer</li>
                    <li>quotes or something I fetch from an URL</li>
                    <li>some CSS</li>
                    <li>and logic behind</li>
                </ul>       
                <HighlightCommand value="Go to Github for code"/><br></br>
                <a className={colorLightMode} href="https://github.com/LPF33/API/blob/master/SpeedTypingAPI.js" target="_blank" rel="noopener noreferrer">Link to code</a>
                <br></br>          
                <HighlightCommand value="Let's do it"/>
                <SpeedTypingApi />
                <HighlightCommand value="Done"/>
                <p className={colorLightMode}>
                    Again, this more very simple task, I learnt more about React and it's behaviour.
                    And useRef(), that it doesn't change it's value when the component is re-rendered. 
                    I used this for the timer. Because my first approach didn't work, which normally works in a "normal" JavaScript
                    file. useRef() helped to save the timeoutID and than to clear it. This was really not a waste of time.
                    <br></br>
                    So "Check" and do the next!
                </p> 
            </div>            
        </div>
    );
}