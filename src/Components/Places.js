import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Place from "./Place";

export default class Places extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="places-header">Obiekty Sportowe</Col>
        </Row>
        <Row>
          <Col className="places-counter">12 z 123 obiektów</Col>
        </Row>
        <Place />
      </div>
    );
  }
}
