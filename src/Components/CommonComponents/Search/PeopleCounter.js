import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";

export default class PeopleCounter extends Component {
  render() {
    return (
      <Col sm={4}>
        <Row>
          <Col className="search-filters-headers">Liczba osób</Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form.Control plaintext placeholder="Wpisz liczbę osób" />
          </Col>
        </Row>
      </Col>
    );
  }
}
