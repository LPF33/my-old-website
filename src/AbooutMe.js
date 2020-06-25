import React, {useRef, useEffect} from "react";
import "./AboutMe.css";
import paintVinylAboutMe from "./AboutMeVinyl";

export default function AboutMe(){

    const vinylAboutMe = useRef();

    useEffect(() => {
        const vinylAboutMeCanvas = vinylAboutMe.current;
        paintVinylAboutMe(vinylAboutMeCanvas);
    },[]);

    return(
        <div>
            <div id="aboutMeVinyl" className="showAboutMe">
                <div id="aboutMeTitle">
                    <h1>About me</h1> 
                    </div> 
                <canvas ref={vinylAboutMe} id="canvasAboutMe"></canvas>
            </div>      
            <div id="about-me-frame" className="outerAboutFrame flex">
                <div className="innerAboutFrame">
                    <div>
                        <em>How my journey began?</em>
                        <p>Last year in December, I got fascinated by Web Coding. I wanted to change my career and above all I 
                            was searching for something, that I do with passion. <br></br>I luckily found it! <br></br>
                            To deepen my knowledge I made one of my best
                            decisions in my life: <br></br>I've registered for a 3-month Bootcamp with <a href="https://www.spiced-academy.com/" target="_blank" rel="noopener noreferrer">Spiced Academy</a>.<br></br>
                            There is no other possiblity out there expect for autodidaction to learn soooooo fast so many skills. Great experience! I finished this Bootcamp in May, 
                            now I code and deepen my knowledge. 
                        </p>
                        <br></br>
                        <em>What I do at the moment?</em>
                        <p>Learn TypeScript, try to get into Angular, build this website with React &amp; do some brain training 
                            on <a href="https://www.codewars.com" target="_blank" rel="noopener noreferrer">CodeWars</a>. Try to get a routine to write some articles about
                            current projects or to repeat what I've learnt.
                        </p>
                        <br></br>
                        <em>Coming next:</em>
                        <p>
                            A lot! <span role="img" aria-label="laughing">😁</span><br></br>
                            Battleship Game + Testing (Jest, Supertest)!
                        </p>
                        <br></br>
                        <em>Stack</em>
                        <p>JS ES6, TypeScript(starting), HTML5, CSS3, SQL, Node.js, React, Angular(starting), Vue, jQuery, PostgreSQL, Git</p>
                        <br></br>
                        <em>What I do next to coding?</em>
                        <p>
                            <span role="img" aria-label="present">🎁</span>
                            <br></br>
                            Love to spend my time with my girlfriend. 
                            <br></br>
                            <br></br>
                            <span role="img" aria-label="bike">🚲</span>
                            <br></br>
                            Feel the freedom while I ride my bike! 
                            <br></br>                            
                            <br></br>
                            <span role="img" aria-label="bike">📴📖</span>
                            <br></br>
                            Reading a great book can cheer me up! 
                            <br></br>
                            <br></br>
                            <span role="img" aria-label="tree">🌲🌞</span>
                            <br></br>
                            Enjoy the sun in nature while walking!                             
                        </p>
                    </div>
                </div>
            </div>           
        </div>
    );
};