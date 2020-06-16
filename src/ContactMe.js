import React, {useEffect, useRef, useState} from "react";
import paintVinylContact from "./ContactMeVinyl";
import "./ContactMe.css";

export default function ContactMe(){

    const vinylContact = useRef();

    const [classContact, setClassContact] = useState("hideContact");
    const [textArea, setTextArea] = useState("");

    useEffect(() => {
        const vinylContactCanvas = vinylContact.current;
        paintVinylContact(vinylContactCanvas);
        setClassContact("showContact");
    }, [])

    const sendData = () => {
        console.log("H");
    }

    return(
        <div id="contactMeVinyl" className={classContact}>
            <div id="contactForm" className="outerContactForm flex">
                <div className="innerContactForm flex">
                    <textarea placeholder="Write about anything you want! Projects, games, suggestions, greedings, up to you!" onChange={e => setTextArea(e.target.value)}></textarea>
                </div>
            </div>
            <div id="headlineContact" onClick={sendData}>
                <p>Write me!</p>
                <p>Click &amp; Send</p>
            </div>            
            <div className="picker" id="picker1"></div>
            <canvas id="contactCanvas" ref={vinylContact} onClick={sendData}></canvas>
        </div>
    )
}