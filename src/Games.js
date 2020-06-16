import React, {useEffect, useRef, useState} from "react";
import "./Games.css";
import  paintVinylGames from "./GamesVinyl";

export default function Games(){

    const vinylGames = useRef();

    const [classGames, setClassGames] = useState("hideGames");
    const [gamesPicker, setGamesPicker] = useState("");

    useEffect(()=> {
        const vinylGamesCanvas = vinylGames.current;
        paintVinylGames(vinylGamesCanvas);
    },[]);

    return(
        <div>
            <div className="outerGamesButton flex">
                <div className="innerGamesButton flex">
                    <button type="button" id="startGames" className="flex" onClick={()=> {if(classGames==="hideGames"){setClassGames("showGames"); setGamesPicker("gamepicker1")}else{setClassGames("hideGames");setGamesPicker("gamepicker2")}}}><div>G</div><div id="aLetter">a</div><div>mes</div></button>
                </div>
            </div>
            <div className={gamesPicker} id="gamePicker"></div>
            <div id="gamesVinyl" className={classGames}>  
                <canvas id="gamesCanvas" ref={vinylGames} ></canvas>
            </div>
        </div>
    )
}