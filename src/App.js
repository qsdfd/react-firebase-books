import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
