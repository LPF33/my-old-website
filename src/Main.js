import React, { useRef, useEffect } from "react";
import "./Main.css";
import paintVinylClock from "./vinylClockCanvasJS.js";

export default function App() {
    const vinylClock = useRef();

    useEffect(() => {
        const vinylClockCanvas = vinylClock.current;
        paintVinylClock(vinylClockCanvas);
    }, []);

    return (
        <div id="main">
            <canvas ref={vinylClock} id="vinyl"></canvas>
        </div>
    );
}
