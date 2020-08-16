import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <Container className="center">
      <Row>
        <Col className="place-price-value">Od 30 zł/h</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="place-price-header center">Data</Col>
          </Row>
          <Row>
            <Col className="place-price-data">30.06.2018</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="place-price-header center">ilość godzin</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light" className="place-price-buttons">
                -
              </Button>
            </Col>
            <Col className="price-text-hours">2</Col>
            <Button variant="light" className="place-price-buttons">
              +
            </Button>
            <Col></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>Razem: 60zł</Col>
      </Row>
    </Container>
  );
};
export default Pricing;
