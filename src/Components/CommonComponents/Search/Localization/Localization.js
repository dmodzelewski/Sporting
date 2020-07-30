import React from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";

export default function Localization() {
  return (
    <Col sm={4}>
      <Row>
        <Col className="search-filters-headers">Lokalizacja</Col>
      </Row>
      <Row>
        <Col>
          <Filter />
        </Col>
      </Row>
    </Col>
  );
}
