import React from "react";
import "./Introduction.css";
import {Link} from "react-router-dom";

const Introduction = () => {
    return(
        <div id="introduction" className="outerIntroduction flex">
            <div className="innerIntroduction">
                <h1>All about learning coding</h1>
                <h2>This Website is under construction!</h2>
                <p>With this website I intend not only to introduce myself but also to test, record and repeat what I have learned.</p>
                <p>I treat this website like a notebook and playground.</p>
                <p>The design of this website is not finished yet, but I'd like to start to fill my website with projects, articles, news and whatever I'm up to!</p>
                <h2>So let's do it!</h2>
                <h2>Happy Coding!</h2>
                <Link to="/articles/bash">First article</Link>
            </div>
        </div>
    )
}

export default Introduction;