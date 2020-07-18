import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";

export default class PeopleCounter extends Component {
  render() {
    return (
      <Col sm={4}>
        <Row>
          <Col className="search-filters-headers">Liczba osób</Col>
        </Row>
        <Row>
          <Col sm={12} md={8} lg={6}>
            {" "}
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>{"<"}10</option>
                  <option>{">"}10</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}
