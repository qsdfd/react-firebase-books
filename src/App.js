import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";

import CreateBook from "./components/books/CreateBook";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import en from "./translations/en.json"
import nl from "./translations/nl.json"

class App extends Component {
    constructor(props) {
        super(props);
        props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Dutch", code: "nl" }
            ],
            options: { renderToStaticMarkup }
        }); 
        props.addTranslationForLanguage(en, "en");
        props.addTranslationForLanguage(nl, "nl");
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/create" component={CreateBook} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default withLocalize(App);
