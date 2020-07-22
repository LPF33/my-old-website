import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";
import SpeechSynthesis from "./api/SpeechSynthesis";

export default function Bash(){

    const topic = "My computer speaks!!";
    const date = "21.07.2020";
    const tags = ["basic", "javascript"];

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
                    Today I play around with the Web Speech API. 
                    <br></br>
                    It has several properties: paused, pending, speaking. They all return a Boolean.
                    They define the state of the speechSynthesis-Object. 
                    <br></br>
                    And several methods: cancel(), getVoices(), pause(), resume(), speak().
                    <br></br>
                    I populate the select menu with the voices, but I have to add an "voiceschanged" eventlistener to the window,
                    when the event is triggered the first time after the component has mounted, than I have access to all voices.
                    I create a new SpeechSynthesisUtterance instance and set the text, voice, rate properties of this object. 
                    And than I can call the speak()-method via the SpeechSynthesis-Interface. The computer talks.
                    <br></br>
                    Today I used for this simple layout the styled-components Package.
                    <br></br>
                    Insert some text and click the Play-Button. You can change the speech speed and change the voice.
                    Only the Pause-button is not working correct with the Google voices.
                </p> 
                <HighlightCommand value="Go to Github for code"/><br></br>
                <a className={colorLightMode} href="https://github.com/LPF33/API/blob/master/SpeechSynthesis.js" target="_blank" rel="noopener noreferrer">Link to code</a>
                <br></br>
                <HighlightCommand value="Speech Synthesis"/>  
                <SpeechSynthesis />   
            </div>            
        </div>
    );
}