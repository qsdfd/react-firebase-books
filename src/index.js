import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom";
import { LocalizeProvider } from "react-localize-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducers/rootReducer";
import fbConfig from "./config/fb.config";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider store={store}>
            <App />
        </LocalizeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
