import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";
import TriviaQuizApi from "./api/TriviaQuizApi";

export default function TriviaQuiz(){
    const topic = "Making a Quiz with Trivia API!";
    const date = "03.07.2020";
    const tags = ["api", "games", "project"];

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
                    In the next following little projects I will use APIs to retrieve some data.
                    Today I will make a single-player quiz game. I use the open Trivia Database and query there
                    database to fetch questions to a specific or random category like Mathematics including 4
                    possible answers or true/wrong. I get a JSON-file back, so my task is: 
                </p>    
                <ul className={colorLightMode}>
                    <li>
                        to send the right queries <span role="img" aria-label="wink">😉</span>
                    </li>
                    <li>handle the JSON-data</li>
                    <li>make a quiz game</li>
                    <li>and make it look a bit nice for the User,or? Mmh<span role="img" aria-label="twist the eyes">🙄</span></li>
                </ul>                 
                <HighlightCommand value="Let's do it"/>
                <p className={colorLightMode}>
                    I will use a Session token, so I get no question twice.<br></br>
                    I will retrieve 10 questions per request.<br></br>
                    I let the user select a category, difficulty and type(multiple choice, true/false);<br></br>
                </p>
                <HighlightCommand value="Go to Github for code"/><br></br>
                <a className={colorLightMode} href="https://github.com/LPF33?tab=repositories" target="_blank" rel="noopener noreferrer">Link to code</a>
                <br></br>
                <HighlightCommand value="Game"/>
                <TriviaQuizApi />
            </div>            
        </div>
    );
}