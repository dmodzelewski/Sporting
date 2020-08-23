import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import PriceFilter from "./PriceFilter";

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
        <Col>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col md={10}>
                <Form.Check className="checkbox" label="Darmowy Parking" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col md={10}>
                <Form.Check label="Dzieci - Wstęp Wolny" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col md={10}>
                <Form.Check label="Darmowe akcesoria" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className="filter-section-header">Cena</Col>
      </Row>
      <PriceFilter />
    </>
  );
};
export default Filter;
