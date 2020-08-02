import React from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import { gql } from "@apollo/client";

export default function Localization() {
  const cities = gql`
    query City($localization: String!) {
      cities(first: 5, filter: $localization) {
        NAZWA
      }
    }
  `;

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
