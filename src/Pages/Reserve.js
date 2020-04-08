import React, { Component } from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const getAllUsers = gql`
  {
    users {
      Name
      Login
    }
  }
`;

class Reserve extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="user-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getAllUsers)(Reserve);
