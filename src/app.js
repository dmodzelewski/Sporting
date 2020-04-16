import React, { Component } from "react";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Signin from "./Functionality/Signin";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Auth from "./Auth/Auth";
import Callback from "./Pages/Callback";
import Profile from "./Pages/Profile";

const clientApollo = new ApolloClient({
  // Do zmiany
  uri: "http://localhost:3001/graphql",
});

class App extends Component {
  //This can be in state
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <ApolloProvider client={clientApollo}>
          <NavigationBar auth={this.auth} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.auth} {...props} />}
            />
            <Route exact path="/reserve" component={Reserve} />
            <Route exact path="/about" component={About} />

            <Route
              exact
              path="/profile"
              render={(props) => <Profile auth={this.auth} {...props} />}
            />

            <Route
              exact
              path="/signin"
              render={(props) => <Signin auth={this.auth} {...props} />}
            />
            <Route component={Error} />
          </Switch>
          <Footer />
        </ApolloProvider>
      </>
    );
  }
}

export default App;
