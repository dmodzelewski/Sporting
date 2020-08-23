import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Filter from "../Components/ReserveComponents/Filter/Filter";
import Places from "../Components/ReserveComponents/Places";
import PropTypes from "prop-types";

export default class Reserve extends Component {
  render() {
    return (
      <>
        <Search />
        <Row>
          <Col md={3}>
            {console.log(
              "Miasto : \n" +
                this.props.location.state.passCity +
                "\nData : \n" +
                this.props.location.state.passDate +
                "passQuantity : \n" +
                this.props.location.state.passQuantity
            )}
            <Filter />
          </Col>
          <Col md={9}>
            <Places />
          </Col>
        </Row>
      </>
    );
  }
}
Reserve.propTypes = {
  location: PropTypes.object.isRequired,
};
