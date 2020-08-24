import React from "react";
import { Row, Col } from "react-bootstrap";
import PriceFilter from "./PriceFilter";
import ReviewFilter from "./ReviewFilter";
import FreeFilter from "./FreeFilter";

const Filter = () => {
  return (
    <>
      <Row>
        <Col className="filters-header">Filtry</Col>
      </Row>
      <Row>
        <Col className="filter-section-header">Bezpłatne</Col>
      </Row>
      <Row className="filters">
        <FreeFilter />
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
