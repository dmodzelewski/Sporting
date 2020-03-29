import React, { Component } from 'react';
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import About from './Pages/About'
import Error from './Pages/Error'
import Signin from './Functionality/Signin';
import Login from './Functionality/Login';
import NavigationBar from "./Components/NavigationBar"
import './app.scss'
import { Route, Switch } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <>
                <NavigationBar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/reserve" component={Reserve} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signin" component={Signin} />
                        <Route component={Error} />
                    </Switch>
            

            </>
        );
    }
}

export default App;