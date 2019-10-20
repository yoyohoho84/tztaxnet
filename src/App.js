import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./template/homepage";
import Films from "../src/components/FilmCard/Films";

class App extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/film/:id" component={Films} exact/>
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;