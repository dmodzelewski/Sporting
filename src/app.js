import React from "react";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Schedule from "./Pages/Schedule";
import Login from "./Components/LoginComponents/Login";
import NavigationBar from "./Components/CommonComponents/NavigationBar";
import Footer from "./Components/CommonComponents/Footer";
import "./Styles/app.scss";
import { Route, Switch } from "react-router-dom";
import Profile from "./Pages/Profile";
import PlaceInfo from "./Pages/PlaceInfo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";
import AdminPanel from "./Pages/AdminPanel";
import LogRocket from "logrocket";
LogRocket.init("stddaw/isportio");
const clientApollo = new ApolloClient({
  uri: "http://159.69.41.224:3001/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={clientApollo}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reserve" component={Reserve} />
          <Route exact path="/about" component={About} />
          <Route exact path="/scheduler/:scheduleid" component={Schedule} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/placeinfo/:buildingid/:gymid"
            component={PlaceInfo}
          />
          <Route exact path="/adminpanel" component={AdminPanel} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ApolloProvider>
    </>
  );
};
App.propTypes = {
  history: PropTypes.object.isRequired,
};
export default App;
