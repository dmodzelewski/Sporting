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
Reserve.defaultProps = {
  passCity: "Gdańsk",
  passDate: Date.now,
  passQuantity: 1,
};
