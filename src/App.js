import React from "react";

import Main from "./Main";
import ContactMe from "./ContactMe";
import Articles from "./Articles";
import Games from "./Games";
import ArticleMenu from "./ArticleMenu";
import AboutMe from "./AbooutMe";

import {Route, Switch} from "react-router-dom";

export default function App() {   

    return (
        <div>      
            <Main />
            <ArticleMenu />
            <Switch>
                <Route exact path = "/contactMe" component = {ContactMe} />
                <Route exact path = "/games" component = {Games} />
                <Route path = "/articles/:article" component = {Articles} />
                <Route exact path = "/aboutme" component = {AboutMe}/>
            </Switch>
        </div>
    );
}