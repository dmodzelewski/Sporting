import React, { Component } from 'react';
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import About from './Pages/About'
import Error from './Pages/Error'
import Navbar from "./Components/Navbar"
import './app.scss'
import { Route, Switch, Router } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/reserve" component={Reserve} />
                        <Route exact path="/about" component={About} />
                        <Route component={Error} />
                    </Switch>
            

            </>
        );
    }
}

export default App;