import React, {useEffect, useRef, useState} from "react";
import "./Games.css";
import  paintVinylGames from "./GamesVinyl";
import {useDispatch, useSelector} from "react-redux";
import {moveArm} from "./action";

export default function Games(){

    const vinylGames = useRef();
    const dispatch = useDispatch();

    const [classGames, setClassGames] = useState("");

    const gameStatus = useSelector(state => state.gamesStatus || false) ;

    useEffect(()=> {
        const vinylGamesCanvas = vinylGames.current;
        paintVinylGames(vinylGamesCanvas);
    },[]);

    const moveArmNow = () => {
        dispatch(moveArm());
    }

    return(
        <div>
            <div className="outerGamesButton flex">
                <div className="innerGamesButton flex">
                    {gameStatus && <button type="button" id="startGames" className="flex" ><div>G</div><div id="aLetter">a</div><div>mes</div></button>}
                    {!gameStatus && <button type="button" id="startGames" className="flex" onClick={()=> {if(classGames==="hideGames" || !classGames){setClassGames("showGames"); moveArmNow();}else{setClassGames("hideGames"); moveArmNow()}}}><div>G</div><div id="aLetter">a</div><div>mes</div></button>}
                </div>
            </div>
            
            <div id="gamesVinyl" className={classGames}>  
                <canvas id="gamesCanvas" ref={vinylGames} ></canvas>
            </div>       
        </div>
    )
}