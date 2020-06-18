import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";

export default function Git(){

    const topic = "Git! Every day use! Big benefit for handling projects!";
    const date = "18.06.2020";
    const tags = ["basic", "git"];

    const [lightMode, setLightMode] = useState("moonMode");
    const [colorLightMode, setColorLightMode] = useState("colorMoonMode");

    const whichLightMode = useSelector(state => state.lightMode);

    useEffect(() => {
        setLightMode(lightMode==="sunMode" ? "moonMode" : "sunMode");
        setColorLightMode(colorLightMode==="colorMoonMode" ? "colorSunMode" : "colorMoonMode")
    },[whichLightMode]);

    return(
        <div className={`articlePage ${lightMode}`}>
            <Headline topic={topic} date={date} tags={tags}/>
        </div>
    );
}