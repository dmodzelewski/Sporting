import React, { Component } from "react";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Signin from "./Components/LoginComponents/Signin";
import NavigationBar from "./Components/CommonComponents/NavigationBar";
import Footer from "./Components/CommonComponents/Footer";
import "./Styles/app.scss";
import { Route, Switch } from "react-router-dom";
import Auth from "./Functionality/Auth/Auth";
import Callback from "./Pages/Callback";
import Profile from "./Pages/Profile";
import PlaceInfo from "./Pages/PlaceInfo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const clientApollo = new ApolloClient({
  // Do zmiany
  uri: "http://isportio.pl:3001/graphql",
  cache: new InMemoryCache(),
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
            <Route exact path="/placeinfo" component={PlaceInfo} />
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
