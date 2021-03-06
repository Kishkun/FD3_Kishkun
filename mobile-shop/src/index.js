import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import {routerMiddleware, ConnectedRouter} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import "./main.css";

import createRootReducer from "./reducers";
import Routes from "./routes/Routes";



const history = createBrowserHistory({
    basename: "/store/"
});
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
