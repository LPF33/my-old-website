import React, { useEffect, useRef, useState } from "react";
import paintVinylContact from "./ContactMeVinyl";
import "./ContactMe.css";
import axios from "./axios.js";

export default function ContactMe() {
    const serverUrl =
        process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8080"
            : "https://larspefe.herokuapp.com";

    const vinylContact = useRef();

    const [textArea, setTextArea] = useState("");
    const [statusMail, setStatusMail] = useState("Write me!");
    const [charactersCount, setCharactersCount] = useState(1000);
    const [countSend, setCountSend] = useState(0);
    const [field, setField] = useState("");

    const [sizeBefore, setSizeBefore] = useState(window.innerHeight);

    const metaViewport = document.querySelector("meta[name=viewport]");

    const resizeWindow = () => {
        metaViewport.setAttribute(
            "content",
            "height=" + sizeBefore + "px, width=device-width, initial-scale=1.0"
        );
    };

    useEffect(() => {
        const vinylContactCanvas = vinylContact.current;
        paintVinylContact(vinylContactCanvas);

        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
            metaViewport.setAttribute(
                "content",
                "width=device-width, initial-scale=1.0"
            );
        };
    }, []);

    const message = "Your message was sent successfully! Have a nice day!";

    const sendData = async () => {
        if (
            textArea &&
            !textArea.includes(message) &&
            textArea.length > 19 &&
            textArea.length <= 1000 &&
            countSend < 1
        ) {
            const status = await axios.post(`${serverUrl}/sendmail`, {
                textArea,
                field,
            });
            if (status.data.success) {
                setTextArea(message);
                setStatusMail("Thank you!");
                setCountSend(1);
            } else {
                setStatusMail(status.data.error);
                setTextArea(status.data.text);
            }
        }
    };

    const countCharacters = (num) => {
        const charactersLeft = 1000 - num.length;
        setCharactersCount(charactersLeft);
    };

    return (
        <div>
            <div id="contactForm" className="outerContactForm flex">
                <div className="innerContactForm flex">
                    <textarea
                        placeholder="Write about anything you want! Projects, games, suggestions, greedings, up to you!"
                        onChange={(e) => {
                            setTextArea(e.target.value);
                            countCharacters(e.target.value);
                        }}
                        value={textArea}
                        maxLength="1000"
                    ></textarea>
                    <input
                        className="wwwebsite"
                        type="text"
                        name="wwwebsite"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                    />

                    <div id="charactersCount">
                        {charactersCount > 980 && (
                            <div id="minCharacters">
                                At least 20 characters{" "}
                            </div>
                        )}
                        {charactersCount} characters left
                    </div>
                </div>
            </div>

            <div id="contactMeVinyl" className="showContact">
                <div id="headlineContact" onClick={sendData}>
                    <p>{statusMail}</p>
                    {countSend === 0 && <p>Click &amp; Send</p>}
                    {countSend === 1 && <p>See you!</p>}
                    {countSend === 0 && (
                        <span
                            role="img"
                            aria-label="FingerPointing"
                            className="fingerpoint"
                        >
                            👆🏻
                        </span>
                    )}
                </div>
                <canvas
                    id="contactCanvas"
                    ref={vinylContact}
                    onClick={sendData}
                ></canvas>
            </div>
        </div>
    );
}
