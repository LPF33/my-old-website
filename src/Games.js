import React, {useEffect, useRef, useState} from "react";
import "./Games.css";
import  paintVinylGames from "./GamesVinyl";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moveArm} from "./action.js";
import axios from "./axios.js";

export default function Games(){

    const serverUrl = "http://127.0.0.1:8080";

    const vinylGames = useRef();
    const dispatch = useDispatch();
    const [games, setGames] = useState("");
    const [showIframe, setShowIframe] = useState(null);
    const [currentGame, setCurrentGame] = useState("");
    const [info, setInfo] = useState("");

    useEffect(()=> {
        const vinylGamesCanvas = vinylGames.current;
        paintVinylGames(vinylGamesCanvas);
        (async()=> {
            const loadGames = await axios.get(`${serverUrl}/games`);
            setGames(loadGames.data.data);
            setCurrentGame(loadGames.data.data[0]);
        })();
    },[]);

    const armStatus = () => {
        dispatch(moveArm());
    };

    return(
        <div>
            <div className="outerGamesButton flex">
                <div className="innerGamesButton flex">
                    <Link to="/" id="startGames" className="flex" onClick={armStatus}>
                    <div>M</div><div className="aLetter">a</div><div>in</div></Link>
                </div>
            </div>
            <div className="outerPlayButton flex">
                <div className="innerPlayButton flex">
                    <button type="button" id="playGames" onClick={() => setShowIframe(currentGame)}>Play</button>
                </div>
            </div>
            
            <div id="gamesVinyl" className="showGames">  
                <h1 id="gametitle">{currentGame.game}</h1>
                <div id="gameinfo" onMouseOver={() => setInfo("showInfo")} onMouseLeave={() => setInfo("")}>?</div>
                <canvas id="gamesCanvas" ref={vinylGames} ></canvas>
            </div> 
            <div id="info" className={`${info} flex`}>
                <div className="infoInner">
                    <h1>{currentGame.game}</h1>
                    <p>{currentGame.info}</p>
                    <img src={currentGame.picturefile} alt="gamepreview"/>
                </div>                
            </div>
            {showIframe && <iframe src={`/games/${currentGame.game}/`} title="game" id="iframe"></iframe>}
            {showIframe && <div id="iframeX" onClick={() => setShowIframe(null)}>X</div>}      
        </div>
    )
}