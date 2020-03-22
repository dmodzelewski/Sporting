import React, { Component } from 'react';
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import About from './Pages/About'
import Error from './Pages/Error'
import Singin from './Functionality/Singin';
import Login from './Functionality/Login';
import Navbar from "./Components/Navbar"
import './app.scss'
import 'bootstrap';
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
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/singin" component={Singin} />
                        <Route component={Error} />
                    </Switch>
            

            </>
        );
    }
}

export default App;