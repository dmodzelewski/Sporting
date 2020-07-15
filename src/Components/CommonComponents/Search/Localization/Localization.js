import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
var dane = {
  data: [{ Nazwa: "Gdańsk" }, { Nazwa: "Sopot" }, { Nazwa: "Gdynia" }],
};

export default class Localization extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
    };
  }

  render() {
    return (
      <Col sm={4}>
        <Row>
          <Col className="search-filters-headers">Lokalizacja</Col>
        </Row>
        <Row>
          <Col>
            <Filter props = {dane}/>
            
          </Col>
        </Row>
      </Col>
    );
  }
}
