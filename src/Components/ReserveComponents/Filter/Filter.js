import React from "react";
import { Row, Col } from "react-bootstrap";
import PriceFilter from "./PriceFilter";
import ReviewFilter from "./ReviewFilter";
import FacilitiesFilter from "./FacilitiesFilter";

const Filter = () => {
  return (
    <>
      <Row>
        <Col className="filter-section-header">Udogodnienia</Col>
      </Row>
      <Row className="filters">
        <FacilitiesFilter />
      </Row>
      <Row>
        <Col className="filter-section-header">Cena</Col>
      </Row>
      <PriceFilter />
      <Row>
        <Col className="filter-section-header">Ocena</Col>
      </Row>
      <ReviewFilter />
    </>
  );
};
export default Filter;
