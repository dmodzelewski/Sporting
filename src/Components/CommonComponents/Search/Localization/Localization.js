import React from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import { gql } from "@apollo/client";

const cities = gql`
  {
    cities {
      NAZWA
    }
  }
`;

export default function Localization() {
  return (
    <Col sm={4}>
      <Row>
        <Col className="search-filters-headers">Lokalizacja</Col>
      </Row>
      <Row>
        <Col>
          <Filter cities={cities} />
        </Col>
      </Row>
    </Col>
  );
}
