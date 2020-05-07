import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";

export default class Filter extends Component {
  render() {
    return (
      <>
        <Row>
          <Col className="filters-header">Filtry</Col>
        </Row>
        <Row>
          <Row>
            <Col className="filters-header">Bezpłatne</Col>
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
        </Row>
        <Row>
          <Row>
            <Col className="filter-section-header">Bezpłatne</Col>
          </Row>
          <Row className="filters">
            <Col>
              <Form>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check className="checkbox" label="Darmowy Parking" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Dzieci - Wstęp Wolny" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Darmowe akcesoria" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>
      </>
    );
  }
}
