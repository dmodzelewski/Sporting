import React, { Component, lazy } from "react";
const Home = lazy(() => import("./Pages/Home"));
const Reserve = lazy(() => import("./Pages/Reserve"));
const About = lazy(() => import("./Pages/About"));
const Error = lazy(() => import("./Pages/Error"));
const Signin = lazy(() => import("./Components/LoginComponents/Signin"));
const NavigationBar = lazy(() => import("./Components/CommonComponents/NavigationBar"));
const Footer = lazy(() => import("./Components/CommonComponents/Footer"));
import "./Styles/app.scss";
import { Route, Switch } from "react-router-dom";
import Auth from "./Functionality/Auth/Auth";
import Callback from "./Pages/Callback";
import Profile from "./Pages/Profile";
import PlaceInfo from "./Pages/PlaceInfo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";

const clientApollo = new ApolloClient({
  // Do zmiany
  uri: "http://159.69.41.224:3001/graphql",
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
App.propTypes = {
  history: PropTypes.object.isRequired,
};
export default App;
