import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Filter from "../Components/ReserveComponents/Filter";
import Places from "../Components/ReserveComponents/Places";

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
