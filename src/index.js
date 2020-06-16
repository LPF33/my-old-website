import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./index.css";
import Main from "./Main";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";
import reducer from "./reducers.js";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise)),
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
