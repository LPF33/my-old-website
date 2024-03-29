import React, { useRef, useEffect } from "react";
import "./AboutMe.css";
import paintVinylAboutMe from "./AboutMeVinyl";

export default function AboutMe() {
    const vinylAboutMe = useRef();

    useEffect(() => {
        const vinylAboutMeCanvas = vinylAboutMe.current;
        paintVinylAboutMe(vinylAboutMeCanvas);
    }, []);

    return (
        <div>
            <div id="aboutMeVinyl" className="showAboutMe">
                <div id="aboutMeTitle">
                    <h1>About me</h1>
                </div>
                <canvas ref={vinylAboutMe} id="canvasAboutMe"></canvas>
            </div>
            <div id="about-me-frame" className="outerAboutFrame flex">
                <div className="innerAboutFrame" id="aboutMeText">
                    <div>
                        <em>How my journey began?</em>
                        <p>
                            In 2019 I've jumped in at the deep end. I wanted to
                            change my career and above all I was searching for
                            something, that I do with passion.
                            <br></br>I luckily found it! <br></br>
                            In short: Web Development, that's it! To deepen my
                            knowledge and to get experienced, supportive help,
                            <br></br>I've registered for a 3-month Bootcamp with{" "}
                            <a
                                href="https://www.spiced-academy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Spiced Academy
                            </a>
                            .<br></br>
                            There is no other possiblity out there expect for
                            autodidaction to learn so fast so many skills. Great
                            experience! I finished this Bootcamp in May 2020,
                            afterwards I deepened my skills and I'm really happy
                            about this career and life change.
                        </p>
                        <br></br>
                        <em>What I do at the moment?</em>
                        <p>
                            Last year in November I joined the Spiced Team as an
                            Assistant Teacher!<br></br>
                            <a
                                href="https://www.spiced-academy.com/en/about#about-staff-section"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Spiced Academy Staff
                            </a>
                        </p>
                        <br></br>
                        <em>Stack</em>
                        <p>
                            JavaScript ES6, TypeScript, HTML5, CSS3, SASS, SQL,
                            Node.js, React, Redux, Vue, jQuery, PostgreSQL,
                            MongoDB, Git
                        </p>
                        <br></br>
                        <em>What I do next to coding?</em>
                        <p>
                            <span role="img" aria-label="present">
                                🎁
                            </span>
                            <br></br>
                            Love to spend my time with my girlfriend.
                            <br></br>
                            <br></br>
                            <span role="img" aria-label="bike">
                                🚲
                            </span>
                            <br></br>
                            Feel the freedom while I ride my bike!
                            <br></br>
                            <br></br>
                            <span role="img" aria-label="bike">
                                📴📖
                            </span>
                            <br></br>
                            Reading a great book can cheer me up!
                            <br></br>
                            <br></br>
                            <span role="img" aria-label="tree">
                                🌲🌞
                            </span>
                            <br></br>
                            Enjoy the sun in nature while walking or kayaking!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
