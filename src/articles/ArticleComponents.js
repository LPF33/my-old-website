import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./ArticleComponents.css";
import {sendLightMode, contactMe, moveArm} from "../action";

const Headline = props => {
    const dispatch = useDispatch();

    const {topic,date,tags} = props;
    const imgSource = "/mainVinyl.PNG";
    const sun = "/sun.png";
    const moon = "/moon.png";
    const [lightMode, setLigthMode] = useState("moon");
    const [colorLinks, setColorLinks] = useState("articleLinksMoon");
    const [colorOther, setColorOther] = useState("headlineMoonColor");

    const changeLightMode = () => {
        setColorLinks(colorLinks==="articleLinksSun" ? "articleLinksMoon" : "articleLinksSun")
        setColorOther(colorOther==="headlineSunColor" ? "headlineMoonColor" : "headlineSunColor")
        const value = lightMode==="sun" ? "moon" : "sun";
        dispatch(sendLightMode(value));
    };    

    const clickContact = () => {
        dispatch(contactMe());
    };

    const armStatus = () => {
        dispatch(moveArm());
    };

    const whichLightMode = useSelector(state => state.lightMode);

    useEffect(()=> {
        if(whichLightMode){
            setLigthMode(whichLightMode==="moon" ? "moon" : "sun")
            setColorLinks(whichLightMode==="moon" ? "articleLinksMoon" : "articleLinksSun")
            setColorOther(whichLightMode==="moon" ? "headlineMoonColor" : "headlineSunColor")
        }        
    },[]);


    return(
        <div id="articleHeadline">
            <div className="articleMenu">
                <img  src={imgSource} alt="mainVinyl" id="articleMenuImg"/>
                <Link to="/" className={`articleLinks ${colorLinks}`}>Main</Link>
                <Link to="/games"  className={`articleLinks ${colorLinks}`} onClick={armStatus}>Games</Link>
                <Link to="/contactMe" onClick={() => { clickContact();}} className={`articleLinks ${colorLinks}`}>Contact me</Link>
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
        if(whichLightMode){
            setLigthMode(whichLightMode==="moon" ? "highlightCommandMoon" : "highlightCommandSun")
        }        
    },[whichLightMode]);

    return <div className={lightMode}>{value}</div>;
}

export default Headline;
export {HighlightCommand};