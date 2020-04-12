import React, { Component } from "react";

import { Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.auth.login}>Cokolwiek</Button>
      </>
    );
  }
}
