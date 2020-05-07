import Search from "../Components/Search";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Filter from "../Components/Filter";
import Places from "../Components/Places";

export default class Reserve extends Component {
  render() {
    return (
      <>
        <Search />
        <Row>
          <Col md={3} >
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
