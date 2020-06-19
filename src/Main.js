import React, { useRef, useEffect, useState } from "react";
import "./Main.css";
import paintVinylClock from "./vinylClockCanvasJS.js";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {hideGameButton} from "./action";

export default function App() {
    const vinylClock = useRef();
    const dispatch = useDispatch();

    const [clickAbout, setClickAbout] = useState(["aboutOff","aboutOn"]);
    const [clickContact, setClickContact] = useState(["contactOff","contactOn"]);
    const [clickGithub, setClickGithub] = useState("githubLinkOuter");
    const [moveArm, setMoveArm] = useState("");
    const [movePicker, setMovePicker] = useState("");

    const contactStatus = useSelector(state => state.contact);
    const armStatus = useSelector(state => state.arm);

    useEffect(() => {
        const vinylClockCanvas = vinylClock.current;
        paintVinylClock(vinylClockCanvas);
    }, []);

    useEffect(() => {
        if(contactStatus){
            let changeAbout=[clickContact[1],clickContact[0]]; 
            setClickContact(changeAbout);
            dispatch(hideGameButton(true));
        }         
    },[contactStatus]);

    useEffect(() => {
        if(armStatus){
            setMoveArm(null);
        }
    },[armStatus])

    return (
        <div id="main">
            <div id="welcome">Hey, I'm Lars!</div>
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
                        <div className={`aboutButton flex ${clickAbout[0]}`} onClick={()=>{
                            if(clickAbout[0]==="aboutOff"){
                                let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                setClickAbout(changeAbout)
                                moveArm==="moveArm2" ? setMoveArm("moveArm") : setMoveArm("moveArm2"); 
                                }}}>ON</div>  
                        <div className={`aboutButton flex ${clickAbout[1]}`} onClick={()=>{
                            if(clickAbout[1]==="aboutOff"){
                                let changeAbout=[clickAbout[1],clickAbout[0]]; 
                                setClickAbout(changeAbout)
                                }}}>OFF</div>
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
                                moveArm==="" ? setMoveArm("moveArm") : setMoveArm("moveArm2"); 
                                if(movePicker==="picker2" || !movePicker){
                                    setMovePicker("picker");
                                } else {
                                    setMovePicker("picker2");
                                } 
                                }}}>ON</Link>  
                        <Link to="/" className={`aboutButton flex ${clickContact[1]}`} 
                        onClick={()=>{
                            if(clickContact[1]==="contactOff"){
                                let changeAbout=[clickContact[1],clickContact[0]]; 
                                setClickContact(changeAbout); 
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
