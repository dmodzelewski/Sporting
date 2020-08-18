import React, { useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import { gql } from "@apollo/client";
import PropTypes from "prop-types";

const Localization = ({ getCity }) => {
  const [city, setCity] = useState("");
  const cities = gql`
    query City($localization: String!) {
      cities(first: 5, filter: $localization) {
        NAZWA
        Wojewodztwo
        Gmina
      }
    }
  `;

  const whereis = useCallback(
    (value) => {
      setCity(value);
      getCity(city);
    },
    [city, setCity]
  );

  return (
    <Col sm={3}>
      <Row>
        <Col className="search-filters-headers">Lokalizacja</Col>
      </Row>
      <Row>
        <Col>
          <Filter cities={cities} getCity={whereis} />
          {console.log(city)}
        </Col>
      </Row>
    </Col>
  );
};
export default Localization;
Localization.propTypes = {
  getCity: PropTypes.func.isRequired,
};
