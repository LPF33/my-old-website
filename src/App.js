import React from "react";

import Main from "./Main";
import ContactMe from "./ContactMe";
import Articles from "./Articles";
import Games from "./Games";
import Introduction from "./Introduction";

import {Route, Switch} from "react-router-dom";

export default function App() {   

    return (
        <div>      
            <Main />
            <Introduction />
            <Games />
            <Switch>
                <Route exact path = "/contactMe" component = {ContactMe} />
                <Route path = "/articles/:article" component = {Articles} />
            </Switch>
        </div>
    );
}