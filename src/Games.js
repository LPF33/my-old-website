import React, {useEffect, useRef, useState} from "react";
import "./Games.css";
import  paintVinylGames from "./GamesVinyl";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moveArm} from "./action.js";

export default function Games(){

    const vinylGames = useRef();
    const dispatch = useDispatch();

    useEffect(()=> {
        const vinylGamesCanvas = vinylGames.current;
        paintVinylGames(vinylGamesCanvas);
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
            <div id="gamesVinyl" className="showGames">  
                <canvas id="gamesCanvas" ref={vinylGames} ></canvas>
            </div>       
        </div>
    )
}