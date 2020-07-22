import React from "react";
import {Route} from "react-router-dom";
import "./Articles.css";
import Git from "./articles/Git";
import Bash from "./articles/Bash";
import TypeScript from "./articles/TypeScript";
import TriviaQuiz from "./articles/TriviaQuiz";
import SpeedTyping from "./articles/SpeedTyping";
import ComputerSpeaks from "./articles/ComputerSpeaks";

export default function Articles(){
    return(
        <div>
            <Route 
                exact path = "/articles/git"
                component = {Git}
            /> 
            <Route 
                exact path = "/articles/bash"
                component = {Bash}
            />     
            <Route 
                exact path = "/articles/typescript"
                component = {TypeScript}
            />
            <Route 
                exact path = "/articles/triviaquiz"
                component = {TriviaQuiz}
            /> 
            <Route 
                exact path = "/articles/speedtyping"
                component = {SpeedTyping}
            />    
            <Route 
                exact path = "/articles/computerspeaks"
                component = {ComputerSpeaks}
            />           
        </div>        
    )
}