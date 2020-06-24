import React, { useRef, useEffect, useState } from "react";
import "./Main.css";
import paintVinylClock from "./vinylClockCanvasJS.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function App() {
    const vinylClock = useRef();

    const [clickAbout, setClickAbout] = useState(["aboutOff","aboutOn"]);
    const [clickContact, setClickContact] = useState(["contactOff","contactOn"]);
    const [clickGithub, setClickGithub] = useState("githubLinkOuter");
    const [moveArm, setMoveArm] = useState("");
    const [movePicker, setMovePicker] = useState("");

    const serverUrl = process.env.NODE_ENV === "development" ? "http://127.0.0.1:3000" : "https://larspefe.herokuapp.com";

    const armStatus = useSelector(state => state.arm);
    const contactStatus = useSelector(state => state.contact);
    const aboutStatus = useSelector(state => state.about);
    const armPickerStatus = useSelector(state => state.armpicker);

    useEffect(() => {
        const vinylClockCanvas = vinylClock.current;
        paintVinylClock(vinylClockCanvas);
        if(window.location.href.startsWith(`${serverUrl}/aboutme`) && clickAbout[0]==="aboutOff"){
            let changeAbout=[clickAbout[1],clickAbout[0]]; 
            setClickAbout(changeAbout);   
        } else if(!window.location.href.startsWith(`${serverUrl}/aboutme`) && clickAbout[0]==="aboutOn"){
            let changeAbout=[clickAbout[1],clickAbout[0]]; 
            setClickAbout(changeAbout);
        }
        
        if(window.location.href.startsWith(`${serverUrl}/contactMe`) && clickContact[0]==="contactOff"){
            let changeAbout=[clickContact[1],clickContact[0]]; 
            setClickContact(changeAbout);    
        } else if(!window.location.href.startsWith(`${serverUrl}/contactMe`) && clickContact[0]==="contactOn"){
            let help=[clickContact[1],clickContact[0]]; 
            setClickContact(help); 
        } 

    }, []);

    useEffect(() => {
        if(armStatus){
            setMoveArm(null);
        }
    },[armStatus])

    useEffect(() => {
        if(contactStatus && clickContact[0]==="contactOff"){
            let changeContact=[clickContact[1],clickContact[0]]; 
            setClickContact(changeContact);
        }
    },[contactStatus])

    useEffect(() => {
        if(aboutStatus && clickAbout[0]==="aboutOn"){
            let changeAbout=[clickAbout[1],clickAbout[0]]; 
            setClickAbout(changeAbout);
        }
    },[aboutStatus])

    useEffect(() => {
        if(armPickerStatus){
            moveArm==="" ? setMoveArm("moveArm") : setMoveArm("moveArm2"); 
            if(movePicker==="picker2" || !movePicker){
                setMovePicker("picker");
            } else {
                setMovePicker("picker2");
            } 
        }
    },[armPickerStatus])

    return (
        <div id="main">
            <div id="welcome">Hey, I'm Lars!</div>
            <div id="vinylform"></div>
            <div id="vinylInnerForm"></div>
            <canvas ref={vinylClock} id="vinyl"></canvas>
            <div id="portrait">
                <div className="outerForm flex" id="self-portrait">
                    <div className="innerForm flex">
                        <div id="myPicture"></div>  
                    </div>                        
                </div> 
                <p className="flex">About me</p>
                <div className="outerFormButton flex">
                    <div className="innerFormButton flex">
                        <Link to="/aboutme" className={`aboutButton flex ${clickAbout[0]}`} onClick={()=>{
                            if(clickAbout[0]==="aboutOff"){
                                let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                setClickAbout(changeAbout)
                                moveArm==="moveArm2" ? setMoveArm("moveArm") : setMoveArm("moveArm2"); 
                                if(movePicker==="picker2" || !movePicker){
                                    setMovePicker("picker");
                                } else {
                                    setMovePicker("picker2");
                                } 
                                if(clickContact[0]==="contactOn"){
                                    let changeAbout=[clickContact[1],clickContact[0]]; 
                                    setClickContact(changeAbout); 
                                } 
                                }}}>ON</Link>  
                        <Link to="/" className={`aboutButton flex ${clickAbout[1]}`} onClick={()=>{
                            if(clickAbout[1]==="aboutOff"){
                                let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                setClickAbout(changeAbout); 
                                setMoveArm(null); 
                                setMovePicker(null);
                                }
                            if(clickContact[1]==="contactOff"){
                                let changeAbout=[clickContact[1],clickContact[0]]; 
                                setClickContact(changeAbout); 
                                setMoveArm(null); 
                                setMovePicker(null);
                                }}}>OFF</Link>
                    </div>                        
                </div>       
                <p className="flex">Contact me</p>
                <div className="outerFormButton flex">
                    <div className="innerFormButton flex">
                        <Link to="/contactMe" className={`aboutButton flex ${clickContact[0]}`} 
                        onClick={()=>{
                            if(clickContact[0]==="contactOff"){
                                let changeAbout=[clickContact[1],clickContact[0]]; 
                                setClickContact(changeAbout); 
                                moveArm==="moveArm2" ? setMoveArm("moveArm") : setMoveArm("moveArm2"); 
                                if(movePicker==="picker2" || !movePicker){
                                    setMovePicker("picker");
                                } else {
                                    setMovePicker("picker2");
                                } 
                                if(clickAbout[0]==="aboutOn"){
                                    let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                    setClickAbout(changeAbout); 
                                }
                                }}}>ON</Link>  
                        <Link to="/" className={`aboutButton flex ${clickContact[1]}`} 
                        onClick={()=>{
                            if(clickContact[1]==="contactOff"){
                                let changeAbout=[clickContact[1],clickContact[0]]; 
                                setClickContact(changeAbout); 
                                setMoveArm(null); 
                                setMovePicker(null);
                                }
                            if(clickAbout[1]==="aboutOff"){
                                let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                setClickAbout(changeAbout); 
                                setMoveArm(null); 
                                setMovePicker(null);
                                }}}>OFF</Link>
                    </div>                        
                </div> 
                <div id="githubLink" 
                className={`${clickGithub} flex`}                 
                onClick={() => {
                        if(clickGithub==="githubLinkOuterClick"){
                            setClickGithub("githubLinkOuter")
                        }else{
                            setClickGithub("githubLinkOuterClick")
                        }
                    }
                }>
                    <div id="githubLinkInner" className="flex">
                        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/LPF33" ><div id="github" ></div></a>
                    </div>
                </div>         
            </div>
            <div className={movePicker} id="picker"></div>
            <div id="tonearm" className={moveArm}>
                <div id="holder"></div>
                <div id="arm"></div>
            </div>

            <div className="outerGamesButton flex">
                <div className="innerGamesButton flex">
                    <Link to="/Games" id="startGames" className="flex" 
                    onClick={()=>{
                        if(clickContact[0]==="contactOn"){
                            let changeAbout=[clickContact[1],clickContact[0]]; 
                            setClickContact(changeAbout); 
                        }
                        if(clickAbout[0]==="aboutOn"){
                            let changeAbout=[clickAbout[1],clickAbout[0]]; 
                            setClickAbout(changeAbout); 
                        }
                        moveArm==="moveArm2" ? setMoveArm("moveArm") : setMoveArm("moveArm2");  
                        if(movePicker==="picker2" || !movePicker){
                            setMovePicker("picker");
                        } else {
                            setMovePicker("picker2");
                        }}}
                    ><div>G</div><div className="aLetter">a</div><div>mes</div></Link>
                </div>
            </div>
        </div>
    );
}
