import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./ArticleComponents.css";
import {sendLightMode} from "../action";

const Headline = props => {
    const dispatch = useDispatch();

    const {topic,date,tags} = props;
    const imgSource = "/mainVinyl.PNG";
    const sun = "/sun.png";
    const moon = "/moon.png";
    const [lightMode, setLigthMode] = useState("sun");
    const [colorLinks, setColorLinks] = useState("articleLinksSun");
    const [colorOther, setColorOther] = useState("headlineSunColor");

    const changeLightMode = () => {
        setColorLinks(colorLinks==="articleLinksSun" ? "articleLinksMoon" : "articleLinksSun")
        setColorOther(colorOther==="headlineSunColor" ? "headlineMoonColor" : "headlineSunColor")
        const value = lightMode==="sun" ? "moon" : "sun";
        dispatch(sendLightMode(value));
    };     


    return(
        <div id="articleHeadline">
            <div className="articleMenu">
                <img  src={imgSource} alt="mainVinyl" id="articleMenuImg"/>
                <Link to="/" className={`articleLinks ${colorLinks}`}>Main</Link>
                <Link to="/articles" className={`articleLinks ${colorLinks}`}>Articles</Link>
                <Link to="/contactMe" className={`articleLinks ${colorLinks}`}>Contact me</Link>
                {lightMode==="moon" && <img src={sun} alt="sunIcon" className="lightMode" onClick={() => {setLigthMode("sun"); changeLightMode();}}/>}
                {lightMode==="sun" && <img src={moon} alt="moonIcon" className="lightMode" onClick={() => {setLigthMode("moon"); changeLightMode();}}/>}
            </div>            
            <h1 className={colorOther}>{topic}</h1>
            <h6 className={colorOther}>{date}</h6>
            {tags && tags.map((item,index) => <div key={index} className={`tags ${colorOther}`}>{item}</div>)}       
        </div>        
    );
}

const HighlightCommand = props => {
    const {value} = props;

    const [lightMode, setLigthMode] = useState("highlightCommandMoon");

    const whichLightMode = useSelector(state => state.lightMode);

    useEffect(()=> {
        setLigthMode(lightMode==="highlightCommandSun" ? "highlightCommandMoon" : "highlightCommandSun")
    },[whichLightMode]);

    return <div className={lightMode}>{value}</div>;
}

export default Headline;
export {HighlightCommand};