import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Callback extends Component {
  componentDidMount = () => {
    if (/access_token|idtoken|error/.test(this.props.location.hash)) {
      //Function in Auth
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
  };
  render() {
    return <h1>Loading...</h1>;
  }
}

Callback.propTypes = {
  auth: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
