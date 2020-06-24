import React, {useState, useEffect} from "react";

import Main from "./Main";
import ContactMe from "./ContactMe";
import Articles from "./Articles";
import Games from "./Games";
import ArticleMenu from "./ArticleMenu";
import AboutMe from "./AbooutMe";
import {DataPrivacy, DataPrivacyDE, DataPrivacyEN} from "./DataPrivacy";
import MobileOrientation from "./MobileOrientation";

import {Route, Switch} from "react-router-dom";

export default function App() { 
    
    const [orientation, setOrientation] = useState(true);

    useEffect(() => {   
        const checkOrientation= () => {
            if(window.orientation === 0 || window.orientation === 180) {
                setOrientation(false)
            } else {
                setOrientation(true)
            }
        }
        window.addEventListener("resize", checkOrientation);  
        checkOrientation();
    },[]);
    

    return (
        <div>
            {!orientation && <MobileOrientation/>}    
            {orientation &&
                <Main />
            } 
            {orientation &&
                <ArticleMenu />
            }             
            <DataPrivacy/>            
            <Switch>
                <Route exact path = "/contactMe" component = {ContactMe} />
                <Route exact path = "/games" component = {Games} />
                <Route path = "/articles/:article" component = {Articles} />
                <Route exact path = "/aboutme" component = {AboutMe}/>
                <Route exact path = "/datenschutz" component = {DataPrivacyDE}/>
                <Route exact path = "/datapolicy" component = {DataPrivacyEN}/>
            </Switch>
        </div>
    );
}