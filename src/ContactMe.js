import React, {useEffect, useRef, useState} from "react";
import paintVinylContact from "./ContactMeVinyl";
import "./ContactMe.css";
import axios from "./axios.js";

export default function ContactMe(){

    const serverUrl = "http://127.0.0.1:8080";

    const vinylContact = useRef();

    const [classContact, setClassContact] = useState("hideContact");
    const [textArea, setTextArea] = useState("");
    const [statusMail, setStatusMail] = useState("Write me!");

    useEffect(() => {
        const vinylContactCanvas = vinylContact.current;
        paintVinylContact(vinylContactCanvas);
        setClassContact("showContact");
    }, [])

    const sendData = async() => {
        if(textArea){
            const status = await axios.post(`${serverUrl}/sendmail`,{textArea}); 
            console.log(status);
            if(status.data.success){
                setTextArea("Your message was sent successfully! Have a nice day!");
                setStatusMail("Thank you!");
            } else {
                setStatusMail("Error!");
            }
        }    
    }

    return(
        <div id="contactMeVinyl" className={classContact}>
            <div id="contactForm" className="outerContactForm flex">
                <div className="innerContactForm flex">
                    <textarea placeholder="Write about anything you want! Projects, games, suggestions, greedings, up to you!" 
                    onChange={e => setTextArea(e.target.value)}
                    value={textArea} 
                    onKeyDown={e=>{if(e.key==="Enter"){sendData()}}}></textarea>                    
                </div>
            </div>
            <div id="headlineContact" onClick={sendData}>
                <p>{statusMail}</p>
                <p>Click &amp; Send</p>
            <span role="img" aria-label="FingerPointing" className="fingerpoint">👆🏻</span>
            </div>  
            <canvas id="contactCanvas" ref={vinylContact} onClick={sendData}></canvas>
        </div>
    )
}