import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import CreateBook from './components/books/CreateBook';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/create" component={CreateBook}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
