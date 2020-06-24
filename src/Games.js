import React, {useEffect, useRef, useState} from "react";
import "./Games.css";
import  paintVinylGames from "./GamesVinyl";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moveArm} from "./action.js";
import axios from "./axios.js";

export default function Games(){

    const serverUrl = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080" : "https://larspefe.herokuapp.com";

    const vinylGames = useRef();
    const dispatch = useDispatch();
    const [showIframe, setShowIframe] = useState(null);
    const [info, setInfo] = useState("");
    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState("");
    let [switchGame, setSwitchGame] = useState(1);
    const [hiddenClassNext, setHiddenClassNext] = useState("");
    const [hiddenClassPrev, setHiddenClassPrev] = useState("");
    
    useEffect(()=> {
        const vinylGamesCanvas = vinylGames.current;
        paintVinylGames(vinylGamesCanvas);
        (async()=> {
            const loadGames = await axios.get(`${serverUrl}/loadgames`);
            setGames(loadGames.data.data);
            setCurrentGame(loadGames.data.data[1]);
        })();
    },[]);

    const armStatus = () => {
        dispatch(moveArm());
    };

    const changeGame = num => {
        if(switchGame && !num){
            const change = --switchGame;
            setCurrentGame(games[change]);
            setSwitchGame(change);            
        } else if(switchGame < games.length){
            const change = ++switchGame;
            setCurrentGame(games[change]);
            setSwitchGame(change);
        }

        if(switchGame===games.length-1){
            setHiddenClassNext("hidden");
        } else if (!switchGame){
            setHiddenClassPrev("hidden");
        } else{
            setHiddenClassNext("");
            setHiddenClassPrev("");
        }
    }

    return(
        <div>
            <div className="outerGamesButton flex" >
                <div className="innerGamesButton flex">
                    <Link to="/" id="startGames" className="flex" onClick={armStatus}>
                    <div>M</div><div className="aLetter">a</div><div>in</div></Link>
                </div>
            </div>

            <div id="nextPlayButton">

                <div className={`outerSwitchButton flex ${hiddenClassPrev}`} id="prevButton">
                    <div className="innerSwitchButton flex">
                        <img src="/triangle.png" alt="prevButton"
                        onClick={()=> {
                            changeGame(0)
                        }}
                        />
                    </div>
                </div>

                <div className="outerPlayButton flex">
                    <div className="innerPlayButton flex">
                        <button type="button" id="playGames" onClick={() => setShowIframe(currentGame)}>Play</button>
                    </div>
                </div>

                <div className={`outerSwitchButton flex ${hiddenClassNext}`} id="nextButton">
                    <div className="innerSwitchButton flex">
                        <img src="/triangle2.png" alt="nextButton"
                        onClick={()=> {
                            changeGame(1)
                        }}
                        />
                    </div>
                </div>

            </div>
            

            <div id="gameInfoOuter" className="flex" onMouseOver={() => setInfo("showInfo")} onMouseLeave={() => setInfo("")}>
                <div id="gameinfo" className="flex">
                    <p className="flex">?</p>
                </div>
            </div>
            
            
            <div id="gamesVinyl" className="showGames">  
                <div id="gametitle">
                    <h1 >{currentGame.game}</h1> 
                </div>           
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