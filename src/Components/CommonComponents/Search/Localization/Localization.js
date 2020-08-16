import React, { useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import { gql } from "@apollo/client";

export default function Localization({ getCity }) {
  const [city, setCity] = useState("");
  const cities = gql`
    query City($localization: String!) {
      cities(first: 5, filter: $localization) {
        NAZWA
      }
    }
  `;

  const whereis = useCallback(
    (value) => {
      getCity(value);
    },
    [city, setCity]
  );

  return (
    <Col sm={4}>
      <Row>
        <Col className="search-filters-headers">Lokalizacja</Col>
      </Row>
      <Row>
        <Col>
          <Filter cities={cities} getCity={whereis} />
        </Col>
      </Row>
    </Col>
  );
}
