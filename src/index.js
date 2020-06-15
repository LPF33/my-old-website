import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./index.css";
import Main from "./Main";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
